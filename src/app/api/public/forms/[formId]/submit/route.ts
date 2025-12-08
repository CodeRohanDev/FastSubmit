import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { FieldValue } from 'firebase-admin/firestore'

export async function POST(
  request: NextRequest,
  { params }: { params: { formId: string } }
) {
  try {
    const { formId } = params
    const body = await request.json()

    // Get form to validate
    const formDoc = await adminDb.collection('forms').doc(formId).get()

    if (!formDoc.exists || formDoc.data()?.deleted) {
      return NextResponse.json(
        { error: 'Form not found' },
        { status: 404 }
      )
    }

    const formData = formDoc.data()
    const fields = formData?.fields || []

    // Validate required fields
    for (const field of fields) {
      if (field.required && !body.data[field.id]) {
        return NextResponse.json(
          { error: `${field.label} is required` },
          { status: 400 }
        )
      }
    }

    // Create submission
    const submissionRef = await adminDb
      .collection('forms')
      .doc(formId)
      .collection('submissions')
      .add({
        data: body.data,
        submittedAt: FieldValue.serverTimestamp(),
        userAgent: body.userAgent || '',
        ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '',
        deleted: false
      })

    // TODO: Send email notification if configured

    return NextResponse.json({
      success: true,
      submissionId: submissionRef.id,
      message: formData?.settings?.successMessage || 'Thank you for your submission!'
    })
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}

// Enable CORS for public form submissions
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
