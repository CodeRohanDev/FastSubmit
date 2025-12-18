import { NextRequest, NextResponse } from 'next/server'
import { adminDb, adminAuth } from '@/lib/firebase-admin'

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

// DELETE /api/dashboard/domains/[domainId] - Delete a domain
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ domainId: string }> }
) {
  try {
    const { domainId } = await params
    const userId = await verifySession(request)
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get the domain and verify ownership
    const domainDoc = await adminDb.collection('verifiedDomains').doc(domainId).get()
    
    if (!domainDoc.exists) {
      return NextResponse.json({ error: 'Domain not found' }, { status: 404 })
    }

    const domainData = domainDoc.data()
    if (domainData?.userId !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    // Soft delete the domain
    await adminDb.collection('verifiedDomains').doc(domainId).update({
      deleted: true,
      deletedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      message: 'Domain deleted successfully'
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
