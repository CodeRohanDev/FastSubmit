import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { uploadToR2, ALLOWED_UPLOAD_TYPES, maxBytesFor } from '@/lib/r2'
import { rateLimit } from '@/lib/rate-limiter'

// POST /api/public/forms/[formId]/upload - Upload an image/video answer for a public form submission
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ formId: string }> }
) {
  try {
    const limited = rateLimit(request, { maxRequests: 20, windowMs: 60 * 1000 })
    if (!limited.allowed) {
      return NextResponse.json({ error: 'Too many uploads, please slow down' }, { status: 429 })
    }

    const { formId } = await params
    const formDoc = await adminDb.collection('forms').doc(formId).get()
    if (!formDoc.exists || formDoc.data()?.deleted) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    if (!ALLOWED_UPLOAD_TYPES.includes(file.type)) {
      return NextResponse.json({ error: `Unsupported file type: ${file.type}` }, { status: 400 })
    }

    if (file.size > maxBytesFor(file.type)) {
      return NextResponse.json({ error: 'File too large' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const { url, key } = await uploadToR2({
      buffer,
      contentType: file.type,
      filename: file.name,
      prefix: `submissions/${formId}`,
    })

    return NextResponse.json({ success: true, url, key })
  } catch (error) {
    console.error('Public upload error:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
