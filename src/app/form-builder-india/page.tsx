import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Globe, IndianRupee, Users, Zap, Shield, Clock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Best Form Builder India - Free Online Form Maker | FastSubmit',
  description: 'Best free form builder for India. Create online forms in Hindi, English. GST invoice forms, Indian business forms. Free forever, made for Indian users. No credit card needed.',
  keywords: [
    'best form builder india',
    'free online form maker india',
    'form builder for indian businesses',
    'indian form builder',
    'form builder hindi',
    'gst form builder',
    'india online forms',
    'free form builder india',
    'form maker india',
    'indian business forms',
    'form builder rupees',
    'india survey tool',
    'form builder mumbai',
    'form builder delhi',
    'form builder bangalore'
  ],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-india' }
}

export default function FormBuilderIndiaPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best Form Builder India - FastSubmit",
    "description": "Free form builder designed for Indian businesses and users.",
    "url": "https://fastsubmit.cloud/form-builder-india"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is FastSubmit free in India?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! FastSubmit is 100% free for Indian users. No hidden charges, no subscription fees, free forever." } },
      { "@type": "Question", "name": "Can I create forms in Hindi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Create forms in Hindi, English, or any Indian language. Full Unicode support for all regional languages." } }
    ]
  }

  const features = [
    { icon: <Globe className="w-5 h-5" />, title: 'Multi-language', desc: 'Create forms in Hindi, English, Tamil, Telugu, and all Indian languages.' },
    { icon: <IndianRupee className="w-5 h-5" />, title: '100% Free', desc: 'No subscription fees. Free forever for Indian users.' },
    { icon: <Users className="w-5 h-5" />, title: 'Made for India', desc: 'Designed with Indian businesses and users in mind.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Fast Servers', desc: 'Servers optimized for Indian users. Lightning fast loading.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Data Security', desc: 'Your data is secure and compliant with Indian regulations.' },
    { icon: <Clock className="w-5 h-5" />, title: 'IST Timezone', desc: 'All timestamps in Indian Standard Time.' },
  ]

  const useCases = [
    { title: 'GST Invoice Forms', desc: 'Collect GST details, GSTIN, and invoice information.', icon: '🧾' },
    { title: 'Job Applications', desc: 'Hire talent with professional application forms.', icon: '💼' },
    { title: 'Customer Feedback', desc: 'Gather feedback from Indian customers.', icon: '⭐' },
    { title: 'Event Registration', desc: 'Register attendees for events and webinars.', icon: '📅' },
    { title: 'Lead Generation', desc: 'Capture leads for your Indian business.', icon: '🎯' },
    { title: 'Contact Forms', desc: 'Let customers reach you easily.', icon: '💬' },
  ]

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad']

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />

        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-orange-600 mb-4 sm:mb-6 bg-orange-50 px-3 sm:px-4 py-2 rounded-full border border-orange-200">
                <span>🇮🇳</span>
                <span>Made for India</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Best form builder
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600">for India</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Free form builder designed for Indian businesses. Create forms in Hindi, English, 
                or any Indian language. GST forms, business forms, and more. 100% free.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Start Free - India <ArrowRight size={16} />
                </Link>
                <Link href="/templates" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all">
                  Indian Templates
                </Link>
              </div>
              <p className="text-sm text-gray-500">No credit card • No hidden fees • Free forever</p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Trusted across India</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map((city, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm">
                  📍 {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Popular use cases in India
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {useCases.map((useCase, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                  <div className="text-3xl mb-3">{useCase.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-500">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Features for Indian users
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-4 text-orange-600">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">FAQ</h2>
            </div>
            <div className="space-y-6">
              {[
                { q: 'Is FastSubmit free in India?', a: 'Yes! FastSubmit is 100% free for Indian users. No hidden charges, no subscription fees, free forever.' },
                { q: 'Can I create forms in Hindi?', a: 'Yes! Create forms in Hindi, English, or any Indian language. Full Unicode support for all regional languages.' },
                { q: 'Can I collect GST information?', a: 'Absolutely! Create GST invoice forms, collect GSTIN, and all business-related information.' },
                { q: 'Is my data secure?', a: 'Yes! Your data is encrypted and stored securely. We comply with Indian data protection guidelines.' },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-xl bg-white border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              Ready to start? 🇮🇳
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-8">
              Join thousands of Indian businesses using FastSubmit. Free forever.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Start Free - India <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
