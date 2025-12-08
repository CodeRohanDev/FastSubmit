import { NextRequest } from 'next/server'
import { adminAuth, adminDb } from './firebase-admin'

export interface AuthSession {
  uid: string
  email: string
  emailVerified: boolean
}

/**
 * Verify user session from cookie
 */
export async function verifySession(request: NextRequest): Promise<AuthSession | null> {
  try {
    const idToken = request.cookies.get('__session')?.value
    if (!idToken) return null
    
    const decodedToken = await adminAuth.verifyIdToken(idToken)
    
    // Check email verification status in Firestore
    const userDoc = await adminDb.collection('users').doc(decodedToken.uid).get()
    const emailVerified = userDoc.exists ? (userDoc.data()?.emailVerified || false) : false
    
    return {
      uid: decodedToken.uid,
      email: decodedToken.email || '',
      emailVerified,
    }
  } catch {
    return null
  }
}

/**
 * Verify user session and require email verification
 */
export async function verifySessionWithEmailCheck(request: NextRequest): Promise<AuthSession | null> {
  const session = await verifySession(request)
  
  if (!session) return null
  if (!session.emailVerified) return null
  
  return session
}
