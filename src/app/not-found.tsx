import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, Search } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Page Not Found | FastSubmit - Free Form Builder',
  description: 'The page you are looking for could not be found. Explore our free form builder, templates, and documentation.',
  keywords: ['form builder', 'free form builder', 'online form builder', 'google forms', 'google form alternative', 'hostspica forms', 'forms hostspica'],
}

export default function NotFound() {
  const popularPages = [
    { name: 'Form Builder', href: '/form-builder', desc: 'Create forms for any platform' },
    { name: 'Templates', href: '/templates', desc: '100+ free form templates' },
    { name: 'Google Forms Alternative', href: '/google-forms-alternative', desc: 'Better than Google Forms' },
    { name: 'Blog', href: '/blog', desc: 'Tips and tutorials' },
    { name: 'Documentation', href: '/docs', desc: 'API docs and guides' },
  ]

  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar variant="simple" />
        
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl font-bold text-gray-200 mb-4">404</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Sorry, we couldn't find the page you're looking for. 
              It might have been moved, deleted, or you entered the wrong URL.
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
                href="/blog" 
                className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium hover:border-gray-300 transition-colors"
              >
                <Search size={18} />
                Browse Blog
              </Link>
            </div>

            <div className="text-left max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Popular Pages</h2>
              <div className="grid gap-4">
                {popularPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all group"
                  >
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-sm text-gray-500">{page.desc}</p>
                    </div>
                    <ArrowRight size={18} className="text-gray-400 group-hover:text-indigo-600 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
