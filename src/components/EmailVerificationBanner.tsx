'use client'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { Mail, X } from 'lucide-react'
import VerifyEmailModal from './VerifyEmailModal'

export default function EmailVerificationBanner() {
  const { user } = useAuth()
  const [dismissed, setDismissed] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // Don't show if user is verified, not logged in, or dismissed
  if (!user || user.emailVerified || dismissed) return null

  const handleVerified = () => {
    window.location.reload()
  }

  return (
    <>
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-start gap-4">
            <Mail className="text-amber-600 mt-0.5 flex-shrink-0" size={20} />
            
            <div className="flex-1 min-w-0">
              <p className="text-sm text-amber-900 font-medium">
                Please verify your email address
              </p>
              <p className="text-sm text-amber-700 mt-1">
                Enter the 6-digit code we sent to <span className="font-medium">{user.email}</span>
              </p>
              
              <div className="mt-3">
                <button
                  onClick={() => setShowModal(true)}
                  className="text-sm bg-amber-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-950 transition-colors"
                >
                  Enter verification code
                </button>
              </div>
            </div>
            
            <button
              onClick={() => setDismissed(true)}
              className="text-amber-600 hover:text-amber-800 flex-shrink-0"
              aria-label="Dismiss"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <VerifyEmailModal
          email={user.email || ''}
          onClose={() => setShowModal(false)}
          onVerified={handleVerified}
        />
      )}
    </>
  )
}
