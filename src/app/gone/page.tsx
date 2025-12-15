import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, Search } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Content No Longer Available | FastSubmit - Free Form Builder',
  description: 'This content has been permanently removed and is no longer available. Explore our current form builder features and templates.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function GonePage() {
  return (
    <>
    <GoogleAnalytics />
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar variant="simple" />
        
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl font-bold text-gray-200 mb-4">410</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Content No Longer Available</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              This content has been permanently removed and is no longer available. 
              It may have been outdated, replaced, or discontinued.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                <Home size={18} />
                Go Home
              </Link>
              <Link 
                href="/templates" 
                className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-gray-300 transition-colors"
              >
                <Search size={18} />
                Browse Templates
              </Link>
            </div>

            <div className="text-left max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">What You Can Do Instead</h2>
              <div className="grid gap-4">
                <Link
                  href="/form-builder"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all group"
                >
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                      Create New Forms
                    </h3>
                    <p className="text-sm text-gray-500">Build forms with our free form builder</p>
                  </div>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                </Link>
                <Link
                  href="/templates"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all group"
                >
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                      Browse Templates
                    </h3>
                    <p className="text-sm text-gray-500">100+ free form templates</p>
                  </div>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                </Link>
                <Link
                  href="/docs"
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all group"
                >
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                      Documentation
                    </h3>
                    <p className="text-sm text-gray-500">API docs and guides</p>
                  </div>
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}