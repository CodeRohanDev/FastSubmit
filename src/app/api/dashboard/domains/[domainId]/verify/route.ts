import { NextRequest, NextResponse } from 'next/server'
import { adminDb, adminAuth } from '@/lib/firebase-admin'
import { verifyDomainViaDNS } from '@/lib/dns-verification'

// Helper to verify ID token from cookie
async function verifySession(request: NextRequest): Promise<string | null> {
  try {
    const idToken = request.cookies.get('__session')?.value
    if (!idToken) return null
    
    const decodedToken = await adminAuth.verifyIdToken(idToken)
    return decodedToken.uid
  } catch {
    return null
  }
}

// POST /api/dashboard/domains/[domainId]/verify - Verify domain via DNS
export async function POST(
  request: NextRequest,
  { params }: { params: { domainId: string } }
) {
  try {
    const userId = await verifySession(request)
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const domainId = params.domainId

    // Get the domain and verify ownership
    const domainDoc = await adminDb.collection('verifiedDomains').doc(domainId).get()
    
    if (!domainDoc.exists) {
      return NextResponse.json({ error: 'Domain not found' }, { status: 404 })
    }

    const domainData = domainDoc.data()
    if (domainData?.userId !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    if (domainData.verified) {
      return NextResponse.json({
        success: true,
        verified: true,
        message: 'Domain already verified'
      })
    }

    // Verify via DNS
    console.log('Verifying domain:', domainData.domain)
    console.log('Expected token:', domainData.verificationToken)
    
    const result = await verifyDomainViaDNS(domainData.domain, domainData.verificationToken)
    
    console.log('Verification result:', JSON.stringify(result, null, 2))

    if (result.verified) {
      // Update domain as verified
      await adminDb.collection('verifiedDomains').doc(domainId).update({
        verified: true,
        verifiedAt: new Date(),
        updatedAt: new Date(),
      })

      return NextResponse.json({
        success: true,
        verified: true,
        message: 'Domain verified successfully'
      })
    }

    // Verification failed - return user-friendly error
    return NextResponse.json({
      success: false,
      verified: false,
      error: result.error || 'Verification failed. Please check your DNS records and try again.'
    }, { status: 400 })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
