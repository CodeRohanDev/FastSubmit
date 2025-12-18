import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

// Helper to verify ownership
async function verifyFormOwnership(formId: string, apiKey: string) {
  const formDoc = await getDoc(doc(db, 'forms', formId))
  if (!formDoc.exists()) return { error: 'Form not found', status: 404 }
  
  const form = formDoc.data()
  
  // Check if soft-deleted
  if (form.deleted) return { error: 'Form not found', status: 404 }
  
  if (form.apiKey !== apiKey) return { error: 'Unauthorized', status: 403 }
  
  return { form: { id: formDoc.id, ...form } }
}

// GET /api/v1/forms/:formId/submissions/:submissionId - Get single submission
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ formId: string; submissionId: string }> }
) {
  try {
    const { formId, submissionId } = await params
    const apiKey = request.headers.get('x-api-key') || request.nextUrl.searchParams.get('apiKey')
    
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 })
    }

    const result = await verifyFormOwnership(formId, apiKey)
    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: result.status })
    }

    const subDoc = await getDoc(doc(db, 'forms', formId, 'submissions', submissionId))
    
    if (!subDoc.exists()) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }

    const data = subDoc.data()
    
    // Check if soft-deleted
    if (data.deleted) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }
    
    return NextResponse.json({
      success: true,
      submission: {
        id: subDoc.id,
        ...data.data,
        _meta: {
          submittedAt: data.submittedAt?.toDate()?.toISOString(),
          userIP: data.userIP,
          userAgent: data.userAgent,
        },
      },
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// DELETE /api/v1/forms/:formId/submissions/:submissionId - Delete single submission
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ formId: string; submissionId: string }> }
) {
  try {
    const { formId, submissionId } = await params
    const apiKey = request.headers.get('x-api-key')
    
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 })
    }

    const result = await verifyFormOwnership(formId, apiKey)
    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: result.status })
    }

    const subRef = doc(db, 'forms', formId, 'submissions', submissionId)
    const subDoc = await getDoc(subRef)
    
    if (!subDoc.exists()) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }
    
    // Check if already soft-deleted
    if (subDoc.data().deleted) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 })
    }

    // Soft delete the submission
    await updateDoc(subRef, {
      deleted: true,
      deletedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      message: 'Submission deleted',
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
    },
  })
}
