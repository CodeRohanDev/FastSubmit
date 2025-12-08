'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { User, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'

interface AuthContextType {
  user: User | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signOut: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user)
      setLoading(false)
      
      // Set session cookie for server-side auth
      if (user) {
        const token = await user.getIdToken()
        document.cookie = `__session=${token}; path=/; max-age=3600; samesite=strict`
      } else {
        document.cookie = '__session=; path=/; max-age=0'
      }
    })
    return unsubscribe
  }, [])

  const signOut = async () => {
    await firebaseSignOut(auth)
    document.cookie = '__session=; path=/; max-age=0'
  }

  return (
    <AuthContext.Provider value={{ user, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
