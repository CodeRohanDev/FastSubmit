import { NextRequest, NextResponse } from 'next/server'
import { adminDb, adminAuth } from '@/lib/firebase-admin'
import { generateVerificationCode } from '@/lib/verification-code'
import { sendVerificationEmail } from '@/lib/email'
import { storeVerificationCode } from '@/lib/verification-store'

// Helper to verify ID token from cookie
async function verifySession(request: NextRequest): Promise<{ uid: string; email: string } | null> {
  try {
    const idToken = request.cookies.get('__session')?.value
    if (!idToken) return null

    const decodedToken = await adminAuth.verifyIdToken(idToken)
    return { uid: decodedToken.uid, email: decodedToken.email || '' }
  } catch {
    return null
  }
}

// POST /api/auth/send-verification-code - Send verification code to user's email
export async function POST(request: NextRequest) {
  try {
    const session = await verifySession(request)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    let userName = session.email.split('@')[0]

    // Try to check if user is already verified in Firestore
    try {
      const userDoc = await adminDb.collection('users').doc(session.uid).get()
      if (userDoc.exists && userDoc.data()?.emailVerified) {
        return NextResponse.json({
          success: true,
          message: 'Email already verified'
        })
      }

      // Get user name from Firestore if available
      if (userDoc.exists && userDoc.data()?.name) {
        userName = userDoc.data()!.name
      }
    } catch (firestoreError: any) {
      console.warn('Firestore access failed, using fallback storage:', firestoreError.message)
    }

    // Generate verification code
    const code = generateVerificationCode()
    const expiresAt = new Date(Date.now() + 10 * 60000) // 10 minutes

    // Try to store in Firestore first
    let storedInFirestore = false
    try {
      await adminDb.collection('verificationCodes').doc(session.uid).set({
        code,
        email: session.email,
        createdAt: new Date(),
        expiresAt,
        attempts: 0,
        verified: false,
      })
      storedInFirestore = true
      console.log('Verification code stored in Firestore')
    } catch (e) {
      console.warn('Failed to store in Firestore, using in-memory storage')
    }

    // Fallback to in-memory storage if Firestore failed
    if (!storedInFirestore) {
      storeVerificationCode(session.uid, {
        code,
        email: session.email,
        createdAt: new Date(),
        expiresAt,
        attempts: 0,
        verified: false,
      })
    }

    // Send email
    const emailResult = await sendVerificationEmail({
      to: session.email,
      code,
      userName,
    })

    if (!emailResult.success) {
      return NextResponse.json({
        error: 'Failed to send verification email'
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Verification code sent to your email',
      expiresAt: expiresAt.toISOString(),
    })
  } catch (error) {
    console.error('Send verification code error:', error)
    return NextResponse.json({
      error: 'Internal server error'
    }, { status: 500 })
  }
}
