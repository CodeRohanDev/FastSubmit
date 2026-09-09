import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { escapeHtml } from '@/lib/utils'
import { rateLimit, RATE_LIMITS } from '@/lib/rate-limiter'
import { CORS_CONFIG, createCorsResponse } from '@/lib/cors'
import { isOriginAllowed } from '@/lib/dns-verification'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-api-key, X-API-Key, Authorization',
}

function withCors(response: NextResponse): NextResponse {
  Object.entries(CORS_HEADERS).forEach(([k, v]) => response.headers.set(k, v))
  return response
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ formId: string }> }
) {
  try {
    const { formId } = await params
    // Rate limiting - 10 submissions per minute per IP
    const rateLimitResult = rateLimit(request, RATE_LIMITS.SUBMIT)
    if (!rateLimitResult.allowed) {
      return withCors(NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
          }
        }
      ))
    }

    // Get form config using Admin SDK
    const formDoc = await adminDb.collection('forms').doc(formId).get()
    if (!formDoc.exists) {
      return withCors(NextResponse.json({ error: 'Form not found' }, { status: 404 }))
    }

    const form = formDoc.data()
    const fields = form?.fields || []

    // Domain verification check
    if (form?.requireDomainVerification && form?.allowedDomains?.length > 0) {
      const origin = request.headers.get('origin') || request.headers.get('referer')

      const isDevelopment = origin && (
        origin.includes('localhost') ||
        origin.includes('127.0.0.1') ||
        origin.includes('192.168.')
      )

      if (!isDevelopment && !isOriginAllowed(origin, form.allowedDomains)) {
        return withCors(NextResponse.json(
          { error: 'Domain not authorized. Please verify your domain in form settings.' },
          { status: 403 }
        ))
      }
    }

    // Parse request body
    let body: Record<string, unknown>
    const contentType = request.headers.get('content-type') || ''

    if (contentType.includes('application/json')) {
      body = await request.json()
    } else if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await request.formData()
      body = Object.fromEntries(formData.entries())
    } else {
      body = await request.json().catch(() => ({}))
    }

    // Honeypot spam check
    if (body._honeypot) {
      return withCors(NextResponse.json({ success: true }))
    }

    // Validate required fields
    const errors: string[] = []
    for (const field of fields) {
      if (field.required && !body[field.id]) {
        errors.push(`${field.label} is required`)
      }
    }

    if (errors.length > 0) {
      return withCors(NextResponse.json({ error: 'Validation failed', errors }, { status: 400 }))
    }

    // Sanitize and prepare data
    const sanitizedData: Record<string, unknown> = {}
    for (const field of fields) {
      const value = body[field.id]
      if (value !== undefined) {
        sanitizedData[field.id] = typeof value === 'string' ? escapeHtml(value) : value
      }
    }

    // Get client info
    const userIP = request.headers.get('x-forwarded-for') ||
                   request.headers.get('x-real-ip') ||
                   'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Save submission using Admin SDK
    await adminDb
      .collection('forms')
      .doc(formId)
      .collection('submissions')
      .add({
        data: sanitizedData,
        userIP,
        userAgent,
        submittedAt: new Date(),
      })

    return withCors(NextResponse.json(
      { success: true, message: 'Submission received' },
      {
        headers: {
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
        }
      }
    ))
  } catch (error) {
    console.error('Submission error:', error)
    return withCors(NextResponse.json({ error: 'Internal server error' }, { status: 500 }))
  }
}

// CORS preflight
export async function OPTIONS() {
  return createCorsResponse(CORS_CONFIG.SUBMIT)
}
