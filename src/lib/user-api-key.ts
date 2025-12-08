import { adminDb } from './firebase-admin'

/**
 * Generate a user API key with prefix
 */
export function generateUserApiKey(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let key = 'fsk_live_'
  for (let i = 0; i < 32; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return key
}

/**
 * Verify user API key and return userId
 * Simple and fast - no caching needed
 */
export async function verifyUserApiKey(apiKey: string): Promise<string | null> {
  if (!apiKey || !apiKey.startsWith('fsk_live_')) {
    return null
  }

  try {
    // Query users collection for this API key
    const usersSnapshot = await adminDb
      .collection('users')
      .where('apiKey', '==', apiKey)
      .limit(1)
      .get()

    if (usersSnapshot.empty) {
      return null
    }

    const userDoc = usersSnapshot.docs[0]
    return userDoc.id // Return userId
  } catch (error) {
    console.error('API key verification error:', error)
    return null
  }
}

/**
 * Create or update user API key
 */
export async function createUserApiKey(userId: string): Promise<string> {
  const apiKey = generateUserApiKey()
  
  await adminDb.collection('users').doc(userId).set({
    apiKey,
    apiKeyCreatedAt: new Date(),
  }, { merge: true })
  
  return apiKey
}

/**
 * Regenerate user API key
 */
export async function regenerateUserApiKey(userId: string): Promise<string> {
  const newApiKey = generateUserApiKey()
  
  await adminDb.collection('users').doc(userId).update({
    apiKey: newApiKey,
    apiKeyCreatedAt: new Date(),
    previousApiKey: null, // Invalidate old key
  })
  
  return newApiKey
}

/**
 * Get user's API key
 */
export async function getUserApiKey(userId: string): Promise<string | null> {
  try {
    const userDoc = await adminDb.collection('users').doc(userId).get()
    
    if (!userDoc.exists) {
      return null
    }
    
    const data = userDoc.data()
    return data?.apiKey || null
  } catch (error) {
    console.error('Error getting user API key:', error)
    return null
  }
}
