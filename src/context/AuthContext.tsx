'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { User, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth'
import { auth, db } from '@/lib/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface AuthContextType {
  user: (User & { emailVerified: boolean }) | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<(User & { emailVerified: boolean}) | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Check email verification status in Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid))
        const emailVerified = userDoc.exists() ? (userDoc.data()?.emailVerified || false) : false
        
        setUser({ ...firebaseUser, emailVerified } as User & { emailVerified: boolean })
        
        // Set session cookie for server-side auth
        const token = await firebaseUser.getIdToken()
        document.cookie = `__session=${token}; path=/; max-age=3600; samesite=strict`
      } else {
        setUser(null)
        document.cookie = '__session=; path=/; max-age=0'
      }
      
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const signOut = async () => {
    try {
      // Clear session cookie first
      document.cookie = '__session=; path=/; max-age=0'
      
      // Sign out from Firebase
      await firebaseSignOut(auth)
      
      // Force redirect to home page
      window.location.href = '/'
    } catch (error) {
      console.error('Logout error:', error)
      // Force redirect even if there's an error
      window.location.href = '/'
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
