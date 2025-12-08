import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-semibold tracking-tight text-gray-900 mb-4">404</h1>
        <h2 className="text-xl font-medium text-gray-900 mb-2">Page not found</h2>
        <p className="text-gray-500 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to home
        </Link>
      </div>
    </div>
  )
}
