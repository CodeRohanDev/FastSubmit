import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { verifyUserApiKey } from '@/lib/user-api-key'
import { rateLimit, RATE_LIMITS } from '@/lib/rate-limiter'
import { CORS_CONFIG, createCorsResponse } from '@/lib/cors'

// Helper to verify form ownership
async function verifyFormOwnership(formId: string, userId: string) {
  const formDoc = await adminDb.collection('forms').doc(formId).get()
  if (!formDoc.exists) return { error: 'Form not found', status: 404 }
  
  const formData = formDoc.data()
  if (formData?.userId !== userId) return { error: 'Unauthorized', status: 403 }
  
  return { form: { id: formDoc.id, ...formData } }
}

// PUT /api/v1/forms/:formId/domains - Update form's allowed domains
export async function PUT(
  request: NextRequest,
  { params }: { params: { formId: string } }
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

    const result = await verifyFormOwnership(params.formId, userId)
    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: result.status })
    }

    const body = await request.json()
    const { allowedDomains, requireDomainVerification } = body

    if (!Array.isArray(allowedDomains)) {
      return NextResponse.json({ error: 'allowedDomains must be an array' }, { status: 400 })
    }

    // Get user's verified domains
    const verifiedDomainsSnapshot = await adminDb
      .collection('verifiedDomains')
      .where('userId', '==', userId)
      .where('verified', '==', true)
      .get()

    const userVerifiedDomains = verifiedDomainsSnapshot.docs.map(doc => doc.data().domain)

    // Check if all requested domains are verified
    const unverifiedDomains = allowedDomains.filter(d => !userVerifiedDomains.includes(d))
    if (unverifiedDomains.length > 0) {
      return NextResponse.json({
        error: 'Some domains are not verified',
        unverifiedDomains
      }, { status: 400 })
    }

    // Update form
    await adminDb.collection('forms').doc(params.formId).update({
      allowedDomains,
      requireDomainVerification: requireDomainVerification !== false, // Default to true
      updatedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      message: 'Form domains updated',
      allowedDomains,
      requireDomainVerification: requireDomainVerification !== false
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function OPTIONS() {
  return createCorsResponse(CORS_CONFIG.API)
}
