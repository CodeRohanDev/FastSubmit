import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { getSubmitEndpoint } from '@/lib/config'
import { Form } from '@/types'
import { rateLimit, RATE_LIMITS } from '@/lib/rate-limiter'
import { CORS_CONFIG, createCorsResponse } from '@/lib/cors'

// Helper to verify ownership using Admin SDK
async function verifyFormOwnership(formId: string, apiKey: string): Promise<{ error?: string; status?: number; form?: Form }> {
  const formDoc = await adminDb.collection('forms').doc(formId).get()
  if (!formDoc.exists) return { error: 'Form not found', status: 404 }
  
  const formData = formDoc.data()
  
  // Check if soft-deleted
  if (formData?.deleted) return { error: 'Form not found', status: 404 }
  
  if (formData?.apiKey !== apiKey) return { error: 'Unauthorized', status: 403 }
  
  return { form: { id: formDoc.id, ...formData } as Form }
}

// GET /api/v1/forms/:formId - Get form details
export async function GET(
  request: NextRequest,
  { params }: { params: { formId: string } }
) {
  try {
    // Rate limiting
    const rateLimitResult = rateLimit(request, RATE_LIMITS.API)
    if (!rateLimitResult.allowed) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const apiKey = request.headers.get('x-api-key') || request.nextUrl.searchParams.get('apiKey')
    
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 })
    }

    const result = await verifyFormOwnership(params.formId, apiKey)
    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: result.status })
    }

    const form = result.form!
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const createdAt = (form.createdAt as any)?.toDate?.() || form.createdAt
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatedAt = (form.updatedAt as any)?.toDate?.() || form.updatedAt
    return NextResponse.json({
      success: true,
      form: {
        id: form.id,
        name: form.name,
        fields: form.fields,
        endpoint: getSubmitEndpoint(form.id),
        createdAt: createdAt instanceof Date ? createdAt.toISOString() : createdAt,
        updatedAt: updatedAt instanceof Date ? updatedAt.toISOString() : updatedAt,
      },
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PUT /api/v1/forms/:formId - Update form
export async function PUT(
  request: NextRequest,
  { params }: { params: { formId: string } }
) {
  try {
    // Rate limiting
    const rateLimitResult = rateLimit(request, RATE_LIMITS.API)
    if (!rateLimitResult.allowed) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const apiKey = request.headers.get('x-api-key')
    
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 })
    }

    const result = await verifyFormOwnership(params.formId, apiKey)
    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: result.status })
    }

    const body = await request.json()
    const updates: Record<string, unknown> = { updatedAt: new Date() }

    if (body.name) updates.name = body.name.trim()
    if (body.fields && Array.isArray(body.fields)) {
      // Validate fields
      const validTypes = ['text', 'email', 'textarea', 'number', 'date', 'select', 'checkbox']
      for (const field of body.fields) {
        if (!field.id || !field.label || !field.type) {
          return NextResponse.json({ error: 'Each field must have id, label, and type' }, { status: 400 })
        }
        if (!validTypes.includes(field.type)) {
          return NextResponse.json({ error: `Invalid field type: ${field.type}` }, { status: 400 })
        }
      }
      updates.fields = body.fields
    }

    await adminDb.collection('forms').doc(params.formId).update(updates)

    return NextResponse.json({
      success: true,
      message: 'Form updated successfully',
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/v1/forms/:formId - Delete form
export async function DELETE(
  request: NextRequest,
  { params }: { params: { formId: string } }
) {
  try {
    // Rate limiting
    const rateLimitResult = rateLimit(request, RATE_LIMITS.API)
    if (!rateLimitResult.allowed) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const apiKey = request.headers.get('x-api-key')
    
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 })
    }

    const result = await verifyFormOwnership(params.formId, apiKey)
    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: result.status })
    }

    // Soft delete the form
    await adminDb.collection('forms').doc(params.formId).update({
      deleted: true,
      deletedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      message: 'Form deleted successfully',
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// CORS
export async function OPTIONS() {
  return createCorsResponse(CORS_CONFIG.API)
}
