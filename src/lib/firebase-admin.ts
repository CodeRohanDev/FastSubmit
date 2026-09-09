import { initializeApp, getApps, cert, App } from 'firebase-admin/app'
import { getFirestore, Firestore } from 'firebase-admin/firestore'
import { getAuth, Auth } from 'firebase-admin/auth'

let adminApp: App

// Initialize Firebase Admin with service account
if (getApps().length === 0) {
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY

  if (!serviceAccount) {
    console.error('FIREBASE_SERVICE_ACCOUNT_KEY is not set in environment variables')
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY is required for Firebase Admin SDK')
  }

  try {
    const parsedKey = JSON.parse(serviceAccount)

    // Validate required fields
    if (!parsedKey.project_id || !parsedKey.private_key || !parsedKey.client_email) {
      throw new Error('Invalid service account key: missing required fields')
    }

    adminApp = initializeApp({
      credential: cert(parsedKey),
    })

    console.log('Firebase Admin initialized successfully with project:', parsedKey.project_id)
  } catch (e) {
    console.error('Failed to initialize Firebase Admin:', e)
    throw e
  }
} else {
  adminApp = getApps()[0]
}

export const adminDb = getFirestore(adminApp)
export const adminAuth = getAuth(adminApp)
