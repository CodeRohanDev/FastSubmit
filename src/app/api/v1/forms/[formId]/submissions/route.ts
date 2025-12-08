import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
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

// GET /api/v1/forms/:formId/submissions - Get all submissions
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
    const limitParam = parseInt(request.nextUrl.searchParams.get('limit') || '100')
    const format = request.nextUrl.searchParams.get('format') || 'json'
    
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 })
    }

    const result = await verifyFormOwnership(params.formId, apiKey)
    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: result.status })
    }

    const subsSnapshot = await adminDb
      .collection('forms')
      .doc(params.formId)
      .collection('submissions')
      .orderBy('submittedAt', 'desc')
      .limit(Math.min(limitParam, 1000))
      .get()

    // Filter out soft-deleted submissions
    const submissions = subsSnapshot.docs
      .filter(d => !d.data().deleted)
      .map(d => {
        const data = d.data()
        return {
          id: d.id,
          ...data.data,
          _meta: {
            submittedAt: data.submittedAt?.toDate()?.toISOString(),
            userIP: data.userIP,
            userAgent: data.userAgent,
          },
        }
      })

    // CSV format
    if (format === 'csv') {
      if (submissions.length === 0) {
        return new NextResponse('No submissions', { status: 200, headers: { 'Content-Type': 'text/csv' } })
      }
      
      const form = result.form!
      const headers = form.fields.map((f: { id: string }) => f.id)
      headers.push('submittedAt')
      
      const csvRows = [headers.join(',')]
      for (const sub of submissions) {
        const row = headers.map((h: string) => {
          if (h === 'submittedAt') return sub._meta.submittedAt || ''
          const val = sub[h]
          if (val === undefined || val === null) return ''
          const str = String(val).replace(/"/g, '""')
          return str.includes(',') ? `"${str}"` : str
        })
        csvRows.push(row.join(','))
      }
      
      return new NextResponse(csvRows.join('\n'), {
        status: 200,
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="${result.form!.name}-submissions.csv"`,
        },
      })
    }

    return NextResponse.json({
      success: true,
      formId: params.formId,
      formName: result.form!.name,
      count: submissions.length,
      submissions,
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/v1/forms/:formId/submissions - Delete all submissions
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

    // Get all non-deleted submissions
    const subsSnapshot = await adminDb
      .collection('forms')
      .doc(params.formId)
      .collection('submissions')
      .get()
    
    // Filter out already deleted submissions
    const activeSubmissions = subsSnapshot.docs.filter(doc => !doc.data().deleted)
    
    if (activeSubmissions.length === 0) {
      return NextResponse.json({ success: true, message: 'No submissions to delete', deleted: 0 })
    }

    // Soft delete (max 500 per batch)
    const batch = adminDb.batch()
    let count = 0
    
    for (const docSnap of activeSubmissions) {
      batch.update(docSnap.ref, {
        deleted: true,
        deletedAt: new Date(),
      })
      count++
      if (count >= 500) break // Firestore batch limit
    }
    
    await batch.commit()

    return NextResponse.json({
      success: true,
      message: 'Submissions deleted',
      deleted: count,
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
