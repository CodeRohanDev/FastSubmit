import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { generateApiKey } from '@/lib/utils'
import { getSubmitEndpoint } from '@/lib/config'
import { verifyUserApiKey } from '@/lib/user-api-key'
import { rateLimit, RATE_LIMITS } from '@/lib/rate-limiter'
import { CORS_CONFIG, createCorsResponse } from '@/lib/cors'

// GET /api/v1/forms - List all forms for user
export async function GET(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = rateLimit(request, RATE_LIMITS.API)
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
          }
        }
      )
    }

    const apiKey = request.headers.get('x-api-key') || request.nextUrl.searchParams.get('apiKey')
    
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required. Pass via x-api-key header or apiKey query param' }, { status: 401 })
    }

    const userId = await verifyUserApiKey(apiKey)
    if (!userId) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 403 })
    }

    const formsSnapshot = await adminDb
      .collection('forms')
      .where('userId', '==', userId)
      .get()

    // Filter out soft-deleted forms
    const forms = formsSnapshot.docs
      .filter(doc => !doc.data().deleted)
      .map(doc => {
        const data = doc.data()
        return {
          id: doc.id,
          name: data.name,
          fieldsCount: data.fields?.length || 0,
          createdAt: data.createdAt?.toDate()?.toISOString(),
          updatedAt: data.updatedAt?.toDate()?.toISOString(),
        }
      })

    return NextResponse.json({
      success: true,
      count: forms.length,
      forms,
    }, {
      headers: {
        'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
        'X-RateLimit-Reset': new Date(rateLimitResult.resetTime).toISOString(),
      }
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/v1/forms - Create a new form
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const rateLimitResult = rateLimit(request, RATE_LIMITS.API)
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const apiKey = request.headers.get('x-api-key')
    
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required in x-api-key header' }, { status: 401 })
    }

    const userId = await verifyUserApiKey(apiKey)
    if (!userId) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 403 })
    }

    const body = await request.json()
    const { name, fields } = body

    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'Form name is required' }, { status: 400 })
    }

    if (!fields || !Array.isArray(fields) || fields.length === 0) {
      return NextResponse.json({ error: 'At least one field is required' }, { status: 400 })
    }

    // Validate fields
    const validTypes = ['text', 'email', 'textarea', 'number', 'date', 'select', 'checkbox']
    for (const field of fields) {
      if (!field.id || !field.label || !field.type) {
        return NextResponse.json({ error: 'Each field must have id, label, and type' }, { status: 400 })
      }
      if (!validTypes.includes(field.type)) {
        return NextResponse.json({ error: `Invalid field type: ${field.type}` }, { status: 400 })
      }
    }

    const docRef = await adminDb.collection('forms').add({
      name: name.trim(),
      fields,
      userId: userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      form: {
        id: docRef.id,
        name: name.trim(),
        endpoint: getSubmitEndpoint(docRef.id),
      },
    }, { status: 201 })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// CORS
export async function OPTIONS() {
  return createCorsResponse(CORS_CONFIG.API)
}
