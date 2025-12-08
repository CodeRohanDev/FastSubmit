import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getAuth } from 'firebase-admin/auth'

// Initialize Firebase Admin with service account
if (getApps().length === 0) {
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  
  if (serviceAccount) {
    try {
      const parsedKey = JSON.parse(serviceAccount)
      initializeApp({
        credential: cert(parsedKey),
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'fastsubmit-b3d16',
      })
    } catch (e) {
      console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY:', e)
      // Fallback to default credentials
      initializeApp({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'fastsubmit-b3d16',
      })
    }
  } else {
    // Fallback for environments with Application Default Credentials
    initializeApp({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'fastsubmit-b3d16',
    })
  }
}

export const adminDb = getFirestore()
export const adminAuth = getAuth()
