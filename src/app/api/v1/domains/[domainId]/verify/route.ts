import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { verifyUserApiKey } from '@/lib/user-api-key'
import { rateLimit, RATE_LIMITS } from '@/lib/rate-limiter'
import { verifyDomainViaDNS } from '@/lib/dns-verification'
import { CORS_CONFIG, createCorsResponse } from '@/lib/cors'

// POST /api/v1/domains/:domainId/verify - Verify domain via DNS
export async function POST(
  request: NextRequest,
  { params }: { params: { domainId: string } }
) {
  try {
    const rateLimitResult = rateLimit(request, RATE_LIMITS.API)
    if (!rateLimitResult.allowed) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const apiKey = request.headers.get('x-api-key')
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 })
    }

    const userId = await verifyUserApiKey(apiKey)
    if (!userId) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 403 })
    }

    // Get domain record
    const domainDoc = await adminDb.collection('verifiedDomains').doc(params.domainId).get()
    if (!domainDoc.exists) {
      return NextResponse.json({ error: 'Domain not found' }, { status: 404 })
    }

    const domainData = domainDoc.data()
    if (domainData?.userId !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
    }

    // Already verified
    if (domainData.verified) {
      return NextResponse.json({
        success: true,
        verified: true,
        message: 'Domain already verified',
        verifiedAt: domainData.verifiedAt?.toDate()?.toISOString()
      })
    }

    // Perform DNS verification
    const verificationResult = await verifyDomainViaDNS(
      domainData.domain,
      domainData.verificationToken
    )

    if (verificationResult.verified) {
      // Update domain as verified
      await adminDb.collection('verifiedDomains').doc(params.domainId).update({
        verified: true,
        verifiedAt: new Date(),
        updatedAt: new Date(),
      })

      return NextResponse.json({
        success: true,
        verified: true,
        message: 'Domain successfully verified!',
        verifiedAt: new Date().toISOString()
      })
    }

    // Verification failed - return user-friendly error
    return NextResponse.json({
      success: false,
      verified: false,
      error: verificationResult.error || 'Verification failed. Please check your DNS records and try again.'
    }, { status: 400 })
  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function OPTIONS() {
  return createCorsResponse(CORS_CONFIG.API)
}
