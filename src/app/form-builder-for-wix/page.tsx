import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Layout, Zap, Mail, Palette, Globe, Shield } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Builder for Wix - Free Wix Forms | FastSubmit',
  description: 'Free form builder for Wix websites. Better than Wix Forms app. More features, easier to use. Embed custom forms on any Wix site. No coding required.',
  keywords: ['form builder for wix', 'wix form builder', 'wix contact form', 'wix forms alternative', 'wix custom form', 'wix form embed', 'free wix forms', 'wix survey form', 'wix lead form', 'best wix form builder'],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-for-wix' }
}

export default function FormBuilderForWixPage() {
  const features = [
    { icon: <Layout className="w-5 h-5" />, title: 'Easy Embed', desc: 'Add forms to Wix with simple HTML embed widget.' },
    { icon: <Zap className="w-5 h-5" />, title: 'More Features', desc: 'More field types and options than Wix Forms.' },
    { icon: <Mail className="w-5 h-5" />, title: 'Email Alerts', desc: 'Instant notifications when forms are submitted.' },
    { icon: <Palette className="w-5 h-5" />, title: 'Custom Design', desc: 'Match your Wix site colors and branding.' },
    { icon: <Globe className="w-5 h-5" />, title: 'Works Anywhere', desc: 'Use on any Wix page or section.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Spam Protection', desc: 'Built-in spam filtering keeps inbox clean.' },
  ]

  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-yellow-600 mb-4 sm:mb-6 bg-yellow-50 px-3 sm:px-4 py-2 rounded-full border border-yellow-200">
                <span>🎨</span><span>Wix Forms</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form builder for <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">Wix</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Add powerful forms to your Wix website. More features than Wix Forms, easier to customize. Free forever.
              </p>
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                Create Wix Form <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Better than Wix Forms</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((f, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-yellow-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center mb-4 text-yellow-600">{f.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready for better Wix forms?</h2>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Create Wix Form <ArrowRight size={16} />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
