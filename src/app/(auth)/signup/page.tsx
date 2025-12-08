'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'
import { useAuth } from '@/context/AuthContext'
import { ArrowRight } from 'lucide-react'

async function saveUserToFirestore(uid: string, userData: { email: string; name: string; photoURL?: string; emailVerified?: boolean }) {
  const userRef = doc(db, 'users', uid)
  const userSnap = await getDoc(userRef)
  if (!userSnap.exists()) {
    await setDoc(userRef, { ...userData, photoURL: userData.photoURL || null, createdAt: serverTimestamp(), updatedAt: serverTimestamp() })
  } else {
    await setDoc(userRef, { updatedAt: serverTimestamp() }, { merge: true })
  }
}

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()

  // Redirect if already logged in
  useEffect(() => {
    if (!authLoading && user) {
      router.push('/dashboard')
    }
  }, [user, authLoading, router])

  // Show loading while checking auth
  if (authLoading) return null

  // Don't render if user is logged in (will redirect)
  if (user) return null

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    setLoading(true)
    setError('')
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      
      await saveUserToFirestore(userCredential.user.uid, {
        email: userCredential.user.email || email,
        name: email.split('@')[0],
        emailVerified: false,
      })
      
      // Get the ID token for API call
      const token = await userCredential.user.getIdToken()
      document.cookie = `__session=${token}; path=/; max-age=3600; samesite=strict`
      
      // Send verification code via API
      await fetch('/api/auth/send-verification-code', {
        method: 'POST',
      })
      
      // Redirect to dashboard (verification banner will show there)
      router.push('/dashboard')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Signup failed')
    }
    setLoading(false)
  }

  const handleGoogleSignup = async () => {
    setLoading(true)
    setError('')
    try {
      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({ prompt: 'select_account' })
      const result = await signInWithPopup(auth, provider)
      
      // Google accounts are already verified by Google
      // No need to send verification email
      
      await saveUserToFirestore(result.user.uid, {
        email: result.user.email || '',
        name: result.user.displayName || result.user.email?.split('@')[0] || 'User',
        photoURL: result.user.photoURL || undefined,
      })
      router.push('/dashboard')
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Google signup failed'
      // Ignore popup closed errors
      if (!errorMessage.includes('popup-closed-by-user')) {
        setError(errorMessage)
      }
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#fafafa]/80 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            fastsubmit<span className="text-indigo-600">.</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="flex items-center justify-center min-h-screen px-6 pt-16">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Create an account</h1>
            <p className="text-gray-500 mt-2">Start collecting form submissions</p>
          </div>

        {error && (
          <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm mb-6">
            {error}
          </div>
        )}

        <button
          onClick={handleGoogleSignup}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors mb-6"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-[#fafafa] text-sm text-gray-400">or</span>
          </div>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              placeholder="Password (min 6 characters)"
              required
              minLength={6}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>Create account <ArrowRight size={18} /></>
            )}
          </button>
        </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account?{' '}
            <Link href="/login" className="text-gray-900 font-medium hover:underline">
              Sign in
            </Link>
          </p>

          <p className="text-center text-xs text-gray-400 mt-6">
            By signing up, you agree to our{' '}
            <Link href="/terms" className="hover:text-gray-600 underline">Terms</Link>
            {' '}and{' '}
            <Link href="/privacy" className="hover:text-gray-600 underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
