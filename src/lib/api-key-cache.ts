import { adminDb } from './firebase-admin'

interface CacheEntry {
  userId: string
  formId: string
  timestamp: number
}

const cache = new Map<string, CacheEntry>()
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

/**
 * Verify API key with caching to avoid repeated Firestore queries
 * Returns { userId, formId } if valid, null otherwise
 */
export async function verifyApiKeyWithCache(apiKey: string): Promise<{ userId: string; formId: string } | null> {
  if (!apiKey) return null

  // Check cache first
  const cached = cache.get(apiKey)
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return { userId: cached.userId, formId: cached.formId }
  }

  try {
    // Query Firestore for the form with this API key
    const formsSnapshot = await adminDb
      .collection('forms')
      .where('apiKey', '==', apiKey)
      .limit(1)
      .get()

    if (formsSnapshot.empty) {
      return null
    }

    const formDoc = formsSnapshot.docs[0]
    const formData = formDoc.data()
    const result = {
      userId: formData.userId,
      formId: formDoc.id
    }

    // Cache the result
    cache.set(apiKey, {
      ...result,
      timestamp: Date.now()
    })

    return result
  } catch (error) {
    console.error('API key verification error:', error)
    return null
  }
}

/**
 * Invalidate cache entry (call when API key is regenerated)
 */
export function invalidateApiKeyCache(apiKey: string) {
  cache.delete(apiKey)
}

/**
 * Clear old cache entries periodically
 */
setInterval(() => {
  const now = Date.now()
  cache.forEach((entry, key) => {
    if (now - entry.timestamp > CACHE_TTL) {
      cache.delete(key)
    }
  })
}, 60 * 1000) // Clean every minute
