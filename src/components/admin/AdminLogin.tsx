'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Shield, Eye, EyeOff, Lock, User } from 'lucide-react'

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Call admin login API
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Login failed')
      }

      // Sign in with Firebase using custom token
      const { signInWithCustomToken } = await import('firebase/auth')
      const { auth } = await import('@/lib/firebase')
      
      const userCredential = await signInWithCustomToken(auth, data.customToken)
      const idToken = await userCredential.user.getIdToken()

      // Store admin data and token
      localStorage.setItem('adminToken', idToken)
      localStorage.setItem('adminUser', JSON.stringify(data.admin))

      // Call success callback
      onLoginSuccess()
    } catch (err) {
      console.error('Login error:', err)
      setError(err instanceof Error ? err.message : 'Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
            <Shield size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Admin Access</h2>
          <p className="mt-2 text-gray-600">Sign in to FastSubmit Control Panel</p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Admin Email
              </label>
              <div className="relative">
                <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="admin@fastsubmit.cloud"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 w-full border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter admin password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Signing in...' : 'Sign in to Admin Panel'}
          </button>

          {/* Demo Credentials */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Demo Credentials</h4>
            <div className="text-sm text-blue-800 space-y-1">
              <p><strong>Email:</strong> admin@fastsubmit.cloud</p>
              <p><strong>Password:</strong> admin123</p>
            </div>
          </div>
        </form>

        {/* Security Notice */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            This is a secure admin area. All access attempts are logged and monitored.
          </p>
        </div>
      </div>
    </div>
  )
}