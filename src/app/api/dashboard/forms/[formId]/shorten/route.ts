import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { verifySessionWithEmailCheck } from '@/lib/auth-helpers'
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789', 7)

// GET /api/dashboard/forms/[formId]/shorten - Get the existing short link for a form, if any
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ formId: string }> }
) {
  try {
    const session = await verifySessionWithEmailCheck(request)
    if (!session) {
      return NextResponse.json({ error: 'Email verification required' }, { status: 403 })
    }

    const { formId } = await params
    const existing = await adminDb
      .collection('shortlinks')
      .where('formId', '==', formId)
      .where('userId', '==', session.uid)
      .limit(1)
      .get()

    if (existing.empty) {
      return NextResponse.json({ code: null })
    }

    return NextResponse.json({ code: existing.docs[0].id })
  } catch (error) {
    console.error('Shorten GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/dashboard/forms/[formId]/shorten - Create (or reuse) a short link for a form
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ formId: string }> }
) {
  try {
    const session = await verifySessionWithEmailCheck(request)
    if (!session) {
      return NextResponse.json({ error: 'Email verification required' }, { status: 403 })
    }

    const { formId } = await params
    const formDoc = await adminDb.collection('forms').doc(formId).get()

    if (!formDoc.exists || formDoc.data()?.userId !== session.uid) {
      return NextResponse.json({ error: 'Form not found' }, { status: 404 })
    }

    // Reuse an existing short link for this form if one exists
    const existing = await adminDb
      .collection('shortlinks')
      .where('formId', '==', formId)
      .where('userId', '==', session.uid)
      .limit(1)
      .get()

    if (!existing.empty) {
      return NextResponse.json({ code: existing.docs[0].id })
    }

    let code = nanoid()
    for (let attempt = 0; attempt < 5; attempt++) {
      const codeDoc = await adminDb.collection('shortlinks').doc(code).get()
      if (!codeDoc.exists) break
      code = nanoid()
    }

    await adminDb.collection('shortlinks').doc(code).set({
      formId,
      userId: session.uid,
      clicks: 0,
      createdAt: new Date(),
    })

    return NextResponse.json({ code })
  } catch (error) {
    console.error('Shorten POST error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
