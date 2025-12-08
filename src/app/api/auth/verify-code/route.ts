import { NextRequest, NextResponse } from 'next/server'
import { adminDb, adminAuth } from '@/lib/firebase-admin'
import { isCodeExpired } from '@/lib/verification-code'

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

// POST /api/auth/verify-code - Verify the code entered by user
export async function POST(request: NextRequest) {
  try {
    const session = await verifySession(request)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { code } = await request.json()
    
    if (!code || code.length !== 6) {
      return NextResponse.json({ 
        error: 'Invalid code format' 
      }, { status: 400 })
    }

    // Get verification code from Firestore
    const codeDoc = await adminDb.collection('verificationCodes').doc(session.uid).get()
    
    if (!codeDoc.exists) {
      return NextResponse.json({ 
        error: 'No verification code found. Please request a new code.' 
      }, { status: 404 })
    }

    const codeData = codeDoc.data()!
    
    // Check if already verified
    if (codeData.verified) {
      return NextResponse.json({ 
        error: 'Code already used' 
      }, { status: 400 })
    }

    // Check if expired
    if (isCodeExpired(codeData.createdAt.toDate(), 10)) {
      return NextResponse.json({ 
        error: 'Code expired. Please request a new code.' 
      }, { status: 400 })
    }

    // Check attempts (max 5)
    if (codeData.attempts >= 5) {
      return NextResponse.json({ 
        error: 'Too many attempts. Please request a new code.' 
      }, { status: 429 })
    }

    // Verify code
    const cleanCode = code.replace(/\s/g, '') // Remove spaces
    if (cleanCode !== codeData.code) {
      // Increment attempts
      await adminDb.collection('verificationCodes').doc(session.uid).update({
        attempts: codeData.attempts + 1,
      })

      return NextResponse.json({ 
        error: 'Invalid code. Please try again.',
        attemptsLeft: 5 - (codeData.attempts + 1)
      }, { status: 400 })
    }

    // Code is correct - mark as verified
    await adminDb.collection('verificationCodes').doc(session.uid).update({
      verified: true,
      verifiedAt: new Date(),
    })

    // Update Firestore user document
    await adminDb.collection('users').doc(session.uid).update({
      emailVerified: true,
      verifiedAt: new Date(),
    })
    
    // Note: We're not updating Firebase Auth emailVerified because it requires
    // additional permissions. Instead, we track verification in Firestore.

    return NextResponse.json({
      success: true,
      message: 'Email verified successfully!',
    })
  } catch (error) {
    console.error('Verify code error:', error)
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 })
  }
}
