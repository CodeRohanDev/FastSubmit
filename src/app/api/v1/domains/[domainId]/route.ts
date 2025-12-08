import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { verifyApiKeyWithCache } from '@/lib/api-key-cache'
import { rateLimit, RATE_LIMITS } from '@/lib/rate-limiter'
import { CORS_CONFIG, createCorsResponse } from '@/lib/cors'

// DELETE /api/v1/domains/[domainId] - Delete a domain
export async function DELETE(
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

    const authResult = await verifyApiKeyWithCache(apiKey)
    if (!authResult) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 403 })
    }

    const domainId = params.domainId

    // Get the domain and verify ownership
    const domainDoc = await adminDb.collection('verifiedDomains').doc(domainId).get()
    
    if (!domainDoc.exists) {
      return NextResponse.json({ error: 'Domain not found' }, { status: 404 })
    }

    const domainData = domainDoc.data()
    if (domainData?.userId !== authResult.userId) {
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

export async function OPTIONS() {
  return createCorsResponse(CORS_CONFIG.API)
}
