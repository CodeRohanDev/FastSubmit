import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'

export async function GET(
  request: NextRequest,
  { params }: { params: { formId: string } }
) {
  try {
    const { formId } = params

    // Get form from Firestore
    const formDoc = await adminDb.collection('forms').doc(formId).get()

    if (!formDoc.exists) {
      return NextResponse.json(
        { error: 'Form not found' },
        { status: 404 }
      )
    }

    const formData = formDoc.data()

    // Check if form is deleted
    if (formData?.deleted) {
      return NextResponse.json(
        { error: 'Form not found' },
        { status: 404 }
      )
    }

    // Return only public form data (no sensitive info)
    return NextResponse.json({
      id: formDoc.id,
      name: formData?.name || 'Untitled Form',
      fields: formData?.fields || [],
      settings: {
        redirectUrl: formData?.settings?.redirectUrl,
        successMessage: formData?.settings?.successMessage,
      },
      branding: formData?.branding || {}
    })
  } catch (error) {
    console.error('Error fetching form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
