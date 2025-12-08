'use client'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { Mail, ShieldAlert } from 'lucide-react'
import VerifyEmailModal from './VerifyEmailModal'

export default function EmailVerificationGate({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()
  const [showModal, setShowModal] = useState(false)

  const handleVerified = () => {
    window.location.reload()
  }

  // If user is verified, show content
  if (!user || user.emailVerified) {
    return <>{children}</>
  }

  // If user is not verified, show verification required screen
  return (
    <>
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldAlert className="text-amber-600" size={32} />
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Email Verification Required
          </h2>
          
          <p className="text-gray-600 mb-2">
            Please verify your email address to access this feature.
          </p>
          
          <p className="text-sm text-gray-500 mb-8">
            We sent a 6-digit code to <span className="font-medium text-gray-700">{user.email}</span>
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
          >
            <Mail size={20} />
            Verify Email Now
          </button>

          <div className="mt-8 p-4 bg-gray-50 rounded-xl text-left">
            <p className="text-sm text-gray-600 font-medium mb-2">
              Why verify your email?
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Create and manage forms</li>
              <li>• Add verified domains</li>
              <li>• Receive form submissions</li>
              <li>• Access all features</li>
            </ul>
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
