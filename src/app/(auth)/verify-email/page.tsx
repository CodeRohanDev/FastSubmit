'use client'
import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { applyActionCode } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'

function VerifyEmailContent() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const verifyEmail = async () => {
      const oobCode = searchParams.get('oobCode')
      
      if (!oobCode) {
        setStatus('error')
        setErrorMessage('Invalid verification link')
        return
      }

      try {
        // Apply the email verification code
        await applyActionCode(auth, oobCode)
        setStatus('success')
        
        // Redirect to dashboard after 3 seconds
        setTimeout(() => {
          router.push('/dashboard')
        }, 3000)
      } catch (error: any) {
        setStatus('error')
        
        if (error.code === 'auth/invalid-action-code') {
          setErrorMessage('This verification link is invalid or has expired.')
        } else if (error.code === 'auth/expired-action-code') {
          setErrorMessage('This verification link has expired. Please request a new one.')
        } else {
          setErrorMessage(error.message || 'Failed to verify email')
        }
      }
    }

    verifyEmail()
  }, [searchParams, router])

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
        <div className="w-full max-w-md text-center">
          {status === 'loading' && (
            <div className="space-y-4">
              <Loader2 className="w-16 h-16 text-indigo-600 animate-spin mx-auto" />
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                Verifying your email...
              </h1>
              <p className="text-gray-500">Please wait a moment</p>
            </div>
          )}

          {status === 'success' && (
            <div className="space-y-4">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto" />
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                Email verified!
              </h1>
              <p className="text-gray-500">
                Your email has been successfully verified.
              </p>
              <p className="text-sm text-gray-400">
                Redirecting to dashboard...
              </p>
              <Link
                href="/dashboard"
                className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Go to Dashboard
              </Link>
            </div>
          )}

          {status === 'error' && (
            <div className="space-y-4">
              <XCircle className="w-16 h-16 text-red-600 mx-auto" />
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
                Verification failed
              </h1>
              <p className="text-gray-500">{errorMessage}</p>
              <div className="flex gap-3 justify-center mt-6">
                <Link
                  href="/dashboard"
                  className="bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  Go to Dashboard
                </Link>
                <Link
                  href="/login"
                  className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Sign In
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-900 border-t-transparent"></div>
      </div>
    }>
      <VerifyEmailContent />
    </Suspense>
  )
}
