import { NextRequest, NextResponse } from 'next/server'
import { verifySessionWithEmailCheck } from '@/lib/auth-helpers'
import { uploadToR2, ALLOWED_UPLOAD_TYPES, maxBytesFor } from '@/lib/r2'
import { rateLimit, RATE_LIMITS } from '@/lib/rate-limiter'

// POST /api/dashboard/upload - Upload branding logo / question images for logged-in users
export async function POST(request: NextRequest) {
  try {
    const limited = rateLimit(request, RATE_LIMITS.API)
    if (!limited.allowed) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const session = await verifySessionWithEmailCheck(request)
    if (!session) {
      return NextResponse.json({ error: 'Email verification required' }, { status: 403 })
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
      prefix: `users/${session.uid}`,
    })

    return NextResponse.json({ success: true, url, key })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
