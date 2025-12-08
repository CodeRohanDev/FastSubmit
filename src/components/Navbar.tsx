'use client'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

interface NavbarProps {
  variant?: 'default' | 'simple'
}

export default function Navbar({ variant = 'default' }: NavbarProps) {
  const { user } = useAuth()

  return (
    <nav className="fixed top-0 w-full bg-[#fafafa]/80 backdrop-blur-xl z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          fastsubmit<span className="text-indigo-600">.</span>
        </Link>
        <div className="flex items-center gap-8">
          {variant === 'default' && (
            <>
              <Link href="/form-builder" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Form Builder
              </Link>
              <Link href="/templates" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Templates
              </Link>
            </>
          )}
          <Link href="/docs" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Docs
          </Link>
          {user ? (
            <Link href="/dashboard" className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Login
              </Link>
              <Link href="/signup" className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
