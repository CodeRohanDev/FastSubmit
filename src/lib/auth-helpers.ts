import { NextRequest } from 'next/server'
import { adminAuth } from './firebase-admin'

/**
 * Verify Firebase ID token from request headers
 * Returns userId if valid, null otherwise
 */
export async function verifyAuthToken(request: NextRequest): Promise<string | null> {
  try {
    const authHeader = request.headers.get('authorization')
    if (!authHeader?.startsWith('Bearer ')) {
      return null
    }

    const token = authHeader.substring(7)
    const decodedToken = await adminAuth.verifyIdToken(token)
    return decodedToken.uid
  } catch (error) {
    console.error('Token verification failed:', error)
    return null
  }
}

/**
 * Get user ID from ID token cookie (for server-side rendering)
 */
export async function getUserFromCookie(request: NextRequest): Promise<string | null> {
  try {
    const idToken = request.cookies.get('__session')?.value
    if (!idToken) return null

    const decodedToken = await adminAuth.verifyIdToken(idToken)
    return decodedToken.uid
  } catch (error) {
    return null
  }
}
