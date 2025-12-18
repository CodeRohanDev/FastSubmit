import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code, Zap, Mail, Database, Globe, Webhook } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Builder for Webflow - Free Webflow Forms | FastSubmit',
  description: 'Free form builder for Webflow sites. Bypass Webflow form limits. Unlimited submissions, webhooks, API access. Better than native Webflow forms. No code required.',
  keywords: ['form builder for webflow', 'webflow form builder', 'webflow forms alternative', 'webflow form submissions', 'webflow contact form', 'webflow form api', 'webflow form webhook', 'free webflow forms', 'webflow form limits', 'best webflow form builder'],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-for-webflow' }
}

export default function FormBuilderForWebflowPage() {
  const comparison = [
    { feature: 'Monthly Submissions', fastsubmit: 'Unlimited', webflow: '50 (free) / 500 (basic)' },
    { feature: 'Webhooks', fastsubmit: 'Free', webflow: 'Paid plans only' },
    { feature: 'API Access', fastsubmit: 'Free', webflow: 'Paid plans only' },
    { feature: 'File Uploads', fastsubmit: 'Free', webflow: 'Limited' },
    { feature: 'Custom Notifications', fastsubmit: 'Free', webflow: 'Basic only' },
  ]

  const features = [
    { icon: <Database className="w-5 h-5" />, title: 'Unlimited Submissions', desc: 'No monthly limits. Collect as many submissions as you need.' },
    { icon: <Webhook className="w-5 h-5" />, title: 'Free Webhooks', desc: 'Connect to Zapier, Make, or your own API. Free.' },
    { icon: <Code className="w-5 h-5" />, title: 'Full API Access', desc: 'REST API for developers. No paid plan required.' },
    { icon: <Mail className="w-5 h-5" />, title: 'Custom Notifications', desc: 'Email templates, multiple recipients, auto-responders.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Easy Integration', desc: 'Simple embed code works with any Webflow project.' },
    { icon: <Globe className="w-5 h-5" />, title: 'No Limits', desc: 'Bypass all Webflow form restrictions.' },
  ]

  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-600 mb-4 sm:mb-6 bg-blue-50 px-3 sm:px-4 py-2 rounded-full border border-blue-200">
                <span>🌊</span><span>Webflow Forms</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form builder for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Webflow</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Bypass Webflow form limits. Unlimited submissions, free webhooks, full API access. Everything Webflow forms should be.
              </p>
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                Create Webflow Form <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8"><h2 className="text-xl font-semibold text-gray-900 mb-4">FastSubmit vs Webflow Forms</h2></div>
            <div className="space-y-3">
              {comparison.map((row, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                  <span className="font-medium text-gray-700">{row.feature}</span>
                  <div className="flex gap-8">
                    <span className="text-green-600 font-medium">{row.fastsubmit}</span>
                    <span className="text-gray-400">{row.webflow}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Why switch from Webflow forms?</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((f, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4 text-blue-600">{f.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready for unlimited Webflow forms?</h2>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Create Webflow Form <ArrowRight size={16} />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
