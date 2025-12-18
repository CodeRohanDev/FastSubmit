import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Store, Users, CreditCard, BarChart, Clock, Shield } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Builder for Small Business Free - No Cost Forms | FastSubmit',
  description: 'Free form builder for small businesses. Create contact forms, order forms, customer surveys without paying. No monthly fees, unlimited forms, professional features. Perfect for startups.',
  keywords: [
    'form builder for small business free',
    'free business form builder',
    'small business forms',
    'free contact form for business',
    'business form creator',
    'startup form builder',
    'free order form builder',
    'small business survey tool',
    'free customer feedback form',
    'business lead form',
    'free form builder for startups',
    'affordable form builder',
    'form builder no monthly fee',
    'free professional forms',
    'small business online forms'
  ],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-small-business' }
}

export default function FormBuilderSmallBusinessPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Form Builder for Small Business - FastSubmit",
    "description": "Free form builder designed for small businesses. No monthly fees.",
    "url": "https://fastsubmit.cloud/form-builder-small-business"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is it really free for small businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! FastSubmit is 100% free for small businesses. No hidden fees, no credit card required, no limits on forms or submissions." } },
      { "@type": "Question", "name": "What types of forms can I create?", "acceptedAnswer": { "@type": "Answer", "text": "Contact forms, order forms, customer surveys, feedback forms, appointment booking, lead generation forms, and more." } }
    ]
  }

  const features = [
    { icon: <Store className="w-5 h-5" />, title: 'Perfect for SMBs', desc: 'Built specifically for small business needs and budgets.' },
    { icon: <CreditCard className="w-5 h-5" />, title: 'Zero Cost', desc: 'No monthly fees, no per-submission charges, completely free.' },
    { icon: <Users className="w-5 h-5" />, title: 'Customer Forms', desc: 'Contact forms, feedback surveys, order forms ready to use.' },
    { icon: <BarChart className="w-5 h-5" />, title: 'Analytics', desc: 'Track form performance and customer engagement.' },
    { icon: <Clock className="w-5 h-5" />, title: 'Quick Setup', desc: 'Get your first form live in under 5 minutes.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Professional', desc: 'Enterprise-grade features without enterprise pricing.' },
  ]

  const useCases = [
    { title: 'Contact Forms', desc: 'Let customers reach you easily from your website.', icon: '💬' },
    { title: 'Order Forms', desc: 'Accept orders and service requests online.', icon: '🛒' },
    { title: 'Customer Surveys', desc: 'Gather feedback to improve your business.', icon: '📊' },
    { title: 'Appointment Booking', desc: 'Let clients schedule meetings and consultations.', icon: '📅' },
    { title: 'Lead Generation', desc: 'Capture leads and grow your customer base.', icon: '🎯' },
    { title: 'Job Applications', desc: 'Collect resumes and applications from candidates.', icon: '💼' },
  ]

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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-600 mb-4 sm:mb-6 bg-emerald-50 px-3 sm:px-4 py-2 rounded-full border border-emerald-200">
                <Store size={14} />
                <span>For Small Business</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form builder for
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">small business</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Professional forms without the professional price tag. 
                Everything your small business needs to collect customer data, completely free.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Start Free Today <ArrowRight size={16} />
                </Link>
                <Link href="/templates" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all">
                  Business Templates
                </Link>
              </div>
              <p className="text-sm text-gray-500">No credit card • No monthly fees • Free forever</p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Why small businesses choose FastSubmit</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                <div className="text-4xl mb-3">💰</div>
                <div className="font-medium text-gray-900 mb-2">$0/month</div>
                <div className="text-sm text-gray-600">Save hundreds yearly</div>
              </div>
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="text-4xl mb-3">⚡</div>
                <div className="font-medium text-gray-900 mb-2">5 min setup</div>
                <div className="text-sm text-gray-600">No tech skills needed</div>
              </div>
              <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100">
                <div className="text-4xl mb-3">∞</div>
                <div className="font-medium text-gray-900 mb-2">Unlimited</div>
                <div className="text-sm text-gray-600">Forms & submissions</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Forms for every business need
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {useCases.map((useCase, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
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
                Everything your business needs
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
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
                { q: 'Is it really free for small businesses?', a: 'Yes! FastSubmit is 100% free for small businesses. No hidden fees, no credit card required, no limits on forms or submissions.' },
                { q: 'What types of forms can I create?', a: 'Contact forms, order forms, customer surveys, feedback forms, appointment booking, lead generation forms, and more.' },
                { q: 'Do I need technical skills?', a: 'Not at all! Our drag-and-drop builder is designed for non-technical users. If you can use email, you can build forms.' },
                { q: 'Can I customize forms to match my brand?', a: 'Absolutely! Change colors, fonts, add your logo, and customize every aspect of your forms.' },
                { q: 'How do I receive form submissions?', a: 'Get instant email notifications, view submissions in your dashboard, or export to Excel/CSV.' },
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
              Ready to grow your business?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-8">
              Join thousands of small businesses using FastSubmit. Free forever.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Start Free Today <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
