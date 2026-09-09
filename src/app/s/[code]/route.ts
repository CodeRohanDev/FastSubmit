import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { FieldValue } from 'firebase-admin/firestore'

// GET /s/[code] - Resolve a short link and redirect to the public form
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params
  const linkDoc = await adminDb.collection('shortlinks').doc(code).get()

  if (!linkDoc.exists) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  const { formId } = linkDoc.data() as { formId: string }

  // Fire-and-forget click tracking; don't block the redirect on it
  linkDoc.ref.update({ clicks: FieldValue.increment(1), lastClickedAt: new Date() }).catch(() => {})

  return NextResponse.redirect(new URL(`/f/${formId}`, request.url))
}
