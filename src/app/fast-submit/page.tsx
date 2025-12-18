import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Zap, Clock, Shield, Users, Smartphone, BarChart3 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Fast Submit Forms Online - Automate Form Submissions | FastSubmit Tool',
  description: 'Fast submit forms online with FastSubmit. Automate form submissions, bulk submission tool, one-click submit. Speed up online applications, reduce manual entry. Free submission automation software for students, freelancers & businesses.',
  keywords: [
    'fast submit',
    'fastsubmit',
    'fast online submission',
    'submit forms online fast',
    'automate form submissions',
    'bulk form submission tool',
    'one click form submit',
    'automatic form filler and submitter',
    'speed up online applications',
    'reduce manual form entry',
    'streamline document submission',
    'fast secure online submissions',
    'submission tool for students',
    'submission tool for freelancers',
    'submission tool for businesses',
    'form submission automation software',
    'browser based submission tool',
    'no code submission automation',
    'secure file and form submission',
    'submission tracking dashboard',
    'how to automate online form submissions',
    'best tool to submit forms automatically',
    'fast way to submit multiple applications',
    'software to fill and submit forms quickly',
    'automate repetitive web form submissions',
    'online submission software for small business'
  ],
}

export default function FastSubmitPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Fast Submit Forms Online - FastSubmit",
    "description": "Automate form submissions and speed up online applications with FastSubmit. Free submission automation tool.",
    "url": "https://fastsubmit.cloud/fast-submit",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "FastSubmit - Fast Form Submission Tool",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Automate form submissions",
        "Bulk submission tool",
        "One-click submit",
        "Secure submissions",
        "Submission tracking",
        "No coding required"
      ]
    }
  }

  const features = [
    { icon: <Zap className="w-5 h-5" />, title: 'Lightning Fast', desc: 'Submit forms 10x faster than manual entry' },
    { icon: <Clock className="w-5 h-5" />, title: 'Save Time', desc: 'Reduce hours of manual form filling to minutes' },
    { icon: <Shield className="w-5 h-5" />, title: 'Secure & Safe', desc: 'SSL encrypted, secure form submissions' },
    { icon: <Users className="w-5 h-5" />, title: 'For Everyone', desc: 'Students, freelancers, businesses - all welcome' },
    { icon: <Smartphone className="w-5 h-5" />, title: 'Mobile Ready', desc: 'Submit forms from any device, anywhere' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Track Progress', desc: 'Monitor all your submissions in one dashboard' },
  ]

  const useCases = [
    { title: 'Students', icon: '🎓', desc: 'Submit assignments, applications, and forms quickly', examples: ['Assignment submissions', 'Scholarship applications', 'Course registrations'] },
    { title: 'Freelancers', icon: '💼', desc: 'Apply to multiple jobs and projects efficiently', examples: ['Job applications', 'Project proposals', 'Client onboarding'] },
    { title: 'Businesses', icon: '🏢', desc: 'Streamline document and form submissions', examples: ['Employee onboarding', 'Vendor applications', 'Compliance forms'] },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />

        {/* Hero */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-orange-600 mb-4 sm:mb-6 bg-orange-50 px-3 sm:px-4 py-2 rounded-full border border-orange-200">
                <span>⚡</span>
                <span>10x Faster Form Submissions</span>
              </div>
              
              <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Fast submit forms
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">online automatically</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                Stop wasting time on repetitive form filling. Automate your form submissions, 
                apply to multiple opportunities, and speed up your online applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <Link 
                  href="/signup" 
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-sm sm:text-base"
                >
                  Start fast submitting <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </Link>
                <Link 
                  href="/form-builder" 
                  className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all text-sm sm:text-base"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Why choose FastSubmit?
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">The fastest way to submit forms online</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-white flex items-center justify-center mb-3 sm:mb-4 text-orange-600 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Perfect for everyone
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">From students to businesses - speed up your submissions</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {useCases.map((useCase, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{useCase.desc}</p>
                  <ul className="space-y-2">
                    {useCase.examples.map((example, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                        <Check size={12} className="text-green-500" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                How FastSubmit works
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">Get started in 3 simple steps</p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Create your forms',
                  description: 'Build forms with our drag & drop builder or use templates. No coding required.'
                },
                {
                  step: '2',
                  title: 'Set up automation',
                  description: 'Configure automatic submissions, bulk operations, and submission rules.'
                },
                {
                  step: '3',
                  title: 'Submit fast',
                  description: 'Let FastSubmit handle the submissions while you focus on what matters.'
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/signup" 
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors text-lg"
              >
                Start Fast Submitting <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'Is FastSubmit really free?',
                  a: 'Yes! FastSubmit is completely free forever. Unlimited forms, unlimited submissions, no hidden fees.'
                },
                {
                  q: 'How fast can I submit forms?',
                  a: 'With FastSubmit, you can submit forms 10x faster than manual entry. Bulk submissions and automation save hours of work.'
                },
                {
                  q: 'Is it secure to submit forms through FastSubmit?',
                  a: 'Absolutely! All submissions are SSL encrypted and we follow industry-standard security practices.'
                },
                {
                  q: 'Can I track my submissions?',
                  a: 'Yes! FastSubmit provides a comprehensive dashboard to track all your form submissions and their status.'
                },
                {
                  q: 'Do I need technical skills?',
                  a: 'Not at all! FastSubmit is designed for everyone. No coding or technical knowledge required.'
                },
                {
                  q: 'Can I use it for business purposes?',
                  a: 'Yes! FastSubmit is perfect for businesses, freelancers, students, and anyone who needs to submit forms online.'
                },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-xl bg-white border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              Ready to submit forms faster?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands who've automated their form submissions. Free forever.
            </p>
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Get Started Free <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • Takes 30 seconds
            </p>
          </div>
        </section>

        <Footer variant="extended" />
      </div>
    </>
  )
}