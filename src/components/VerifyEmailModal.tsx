'use client'
import { useState, useRef, useEffect } from 'react'
import { X, Mail, RefreshCw, CheckCircle } from 'lucide-react'

interface VerifyEmailModalProps {
  email: string
  onClose: () => void
  onVerified: () => void
}

export default function VerifyEmailModal({ email, onClose, onVerified }: VerifyEmailModalProps) {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [resending, setResending] = useState(false)
  const [resendMessage, setResendMessage] = useState('')
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus()
  }, [])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste
      const pastedCode = value.slice(0, 6).split('')
      const newCode = [...code]
      pastedCode.forEach((char, i) => {
        if (index + i < 6 && /^\d$/.test(char)) {
          newCode[index + i] = char
        }
      })
      setCode(newCode)
      
      // Focus last filled input
      const lastFilledIndex = Math.min(index + pastedCode.length, 5)
      inputRefs.current[lastFilledIndex]?.focus()
      return
    }

    if (!/^\d*$/.test(value)) return

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerify = async () => {
    const fullCode = code.join('')
    if (fullCode.length !== 6) {
      setError('Please enter all 6 digits')
      return
    }

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: fullCode }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Verification failed')
        setLoading(false)
        return
      }

      setSuccess(true)
      setTimeout(() => {
        onVerified()
        onClose()
      }, 1500)
    } catch (err) {
      setError('Failed to verify code. Please try again.')
      setLoading(false)
    }
  }

  const handleResend = async () => {
    setResending(true)
    setResendMessage('')
    setError('')

    try {
      const response = await fetch('/api/auth/send-verification-code', {
        method: 'POST',
      })

      const data = await response.json()

      if (!response.ok) {
        setResendMessage('Failed to resend code')
        setResending(false)
        return
      }

      setResendMessage('New code sent to your email!')
      setCode(['', '', '', '', '', ''])
      inputRefs.current[0]?.focus()
    } catch (err) {
      setResendMessage('Failed to resend code')
    }

    setResending(false)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        {success ? (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Email Verified!
            </h2>
            <p className="text-gray-500">
              Your email has been successfully verified.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-indigo-600" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Verify your email
              </h2>
              <p className="text-gray-500 text-sm">
                We sent a 6-digit code to<br />
                <span className="font-medium text-gray-700">{email}</span>
              </p>
            </div>

            <div className="mb-6">
              <div className="flex gap-2 justify-center mb-4">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-14 text-center text-2xl font-semibold border-2 border-gray-200 rounded-xl focus:border-indigo-600 focus:outline-none transition-colors"
                  />
                ))}
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center mb-4">
                  {error}
                </div>
              )}

              {resendMessage && (
                <div className="text-green-600 text-sm text-center mb-4">
                  {resendMessage}
                </div>
              )}

              <button
                onClick={handleVerify}
                disabled={loading || code.join('').length !== 6}
                className="w-full bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Verifying...
                  </>
                ) : (
                  'Verify Email'
                )}
              </button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">
                Didn't receive the code?
              </p>
              <button
                onClick={handleResend}
                disabled={resending}
                className="text-sm text-indigo-600 font-medium hover:text-indigo-700 disabled:opacity-50 flex items-center gap-1.5 mx-auto"
              >
                {resending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-indigo-600/30 border-t-indigo-600 rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <RefreshCw size={16} />
                    Resend code
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 text-center">
                Code expires in 10 minutes
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
