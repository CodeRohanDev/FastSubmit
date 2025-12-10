import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Form Analytics Guide: Track, Measure, and Optimize Your Forms | FastSubmit',
  description: 'Master form analytics to improve conversion rates. Learn what metrics to track and how to optimize based on data. Free form builder with analytics.',
  keywords: ['form analytics', 'form metrics', 'form conversion tracking', 'form optimization', 'form builder', 'free form builder', 'online form builder', 'best form builder', 'google forms', 'google form alternative', 'free online form', 'form maker', 'hostspica forms', 'forms hostspica', 'best form website', 'create free forms', 'easy forms'],
}

export default function BlogPost() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Form Analytics Guide: Track Performance & Optimize Conversions",
    "description": "Learn how to track form performance, analyze conversion rates, and optimize your forms for better results. Complete analytics guide.",
    "author": {
      "@type": "Organization",
      "name": "FastSubmit"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FastSubmit",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fastsubmit.hostspica.com/logo.png"
      }
    },
    "datePublished": "2024-12-10",
    "dateModified": "2024-12-10",
    "url": "https://fastsubmit.hostspica.com/blog/form-analytics-guide"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                Analytics
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  Dec 8, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  8 min read
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Form Analytics Guide: Track, Measure, and Optimize Your Forms
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Master form analytics to improve conversion rates. Learn what metrics to track and how to optimize based on data.
            </p>
          </header>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Content coming soon...
            </p>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to get started?
              </h3>
              <p className="text-gray-700 mb-6">
                Try FastSubmit free. Create unlimited forms with no coding required.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Get Started Free <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Written by</p>
                <p className="font-semibold text-gray-900">FastSubmit Team</p>
              </div>
              <Link
                href="/blog"
                className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
              >
                More articles <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </article>
        <Footer />
      </div>
    </>
  )
}
