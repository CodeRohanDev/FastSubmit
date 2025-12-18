import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap, Clock, Shield, Globe, CheckCircle, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Free Form Builder No Signup - Create Forms Instantly Without Registration | FastSubmit',
  description: 'Create professional forms instantly without signup or registration. No email required, no account needed. Start building forms in seconds with our free, no-signup form builder.',
  keywords: 'free form builder no signup, form builder without registration, create forms without account, no signup form builder, instant form builder, form builder no email required',
  openGraph: {
    title: 'Free Form Builder No Signup - Create Forms Instantly Without Registration',
    description: 'Create professional forms instantly without signup or registration. No email required, no account needed. Start building forms in seconds.',
    type: 'website',
    url: 'https://fastsubmit.app/free-form-builder-no-signup',
    images: [
      {
        url: 'https://fastsubmit.app/og-no-signup-form-builder.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Form Builder No Signup - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Form Builder No Signup - Create Forms Instantly Without Registration',
    description: 'Create professional forms instantly without signup. No email required, no account needed.',
    images: ['https://fastsubmit.app/og-no-signup-form-builder.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-form-builder-no-signup'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit No Signup Form Builder',
  description: 'Instant form builder that requires no signup, registration, or email to start building professional forms',
  url: 'https://fastsubmit.app/free-form-builder-no-signup',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '15672'
  },
  featureList: [
    'No Signup Required',
    'Instant Access',
    'No Email Needed',
    'Anonymous Building',
    'Immediate Publishing',
    'Full Feature Access'
  ]
}

export default function FreeFormBuilderNoSignupPage() {

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I really create forms without signing up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! You can start building forms immediately without any signup. Create an account later only if you want to save and manage multiple forms."
        }
      },
      {
        "@type": "Question",
        "name": "Is the no-signup form builder really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely free! No hidden fees, no credit card required, no signup needed to start building."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to my form if I don't create an account?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your form will work perfectly. You'll get a shareable link immediately. Create an account anytime to access advanced features like analytics and multiple forms."
        }
      }
    ]
  }

  const benefits = [
    { icon: <Clock className="w-5 h-5" />, title: 'Instant Access', desc: 'Start building immediately. No waiting for confirmation emails.' },
    { icon: <Shield className="w-5 h-5" />, title: 'No Data Required', desc: 'We don\'t need your email, phone, or any personal info to start.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Zero Friction', desc: 'From landing to form creation in under 10 seconds.' },
    { icon: <Globe className="w-5 h-5" />, title: 'Shareable Instantly', desc: 'Get your form link immediately after creation.' },
    { icon: <CheckCircle className="w-5 h-5" />, title: 'Full Features', desc: 'Access all form builder features without an account.' },
    { icon: <Users className="w-5 h-5" />, title: 'Unlimited Responses', desc: 'Collect unlimited form submissions, completely free.' },
  ]

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd data={faqSchema} />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <Navbar />

        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-600 mb-4 sm:mb-6 bg-green-50 px-3 sm:px-4 py-2 rounded-full border border-green-200">
                <span>⚡</span>
                <span>No Signup Required</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Free form builder
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">no signup needed</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Why wait? Start building your form right now. No email, no password, 
                no registration. Just click and create. It's that simple.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-sm sm:text-base">
                  Start Building Now <ArrowRight size={16} />
                </Link>
                <Link href="/templates" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all text-sm sm:text-base">
                  Browse Templates
                </Link>
              </div>
              
              <p className="text-sm text-gray-500">No credit card • No email • No signup</p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Why no signup?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We believe you should be able to try before you commit. Most form builders 
              force you to create an account before you can even see the interface. Not us.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <div className="text-4xl mb-3">🚀</div>
                <div className="font-medium text-gray-900 mb-2">Instant Start</div>
                <div className="text-sm text-gray-600">Build forms in seconds</div>
              </div>
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="text-4xl mb-3">🔒</div>
                <div className="font-medium text-gray-900 mb-2">Privacy First</div>
                <div className="text-sm text-gray-600">No data collection upfront</div>
              </div>
              <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100">
                <div className="text-4xl mb-3">💯</div>
                <div className="font-medium text-gray-900 mb-2">Full Access</div>
                <div className="text-sm text-gray-600">All features available</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Everything you need, no strings attached
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4 text-green-600">
                    {benefit.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                How it works
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Click "Start Building"', desc: 'No forms to fill, no emails to verify. Just click and go.', emoji: '👆' },
                { step: '2', title: 'Build Your Form', desc: 'Drag and drop fields, customize design, add your questions.', emoji: '🛠️' },
                { step: '3', title: 'Share & Collect', desc: 'Get your link instantly. Start collecting responses immediately.', emoji: '🎉' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{item.emoji}</span>
                  </div>
                  <div className="text-sm font-medium text-green-600 mb-2">Step {item.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Frequently asked questions
              </h2>
            </div>
            <div className="space-y-6">
              {[
                { q: 'Can I really create forms without signing up?', a: 'Yes! You can start building forms immediately without any signup. Create an account later only if you want to save and manage multiple forms.' },
                { q: 'Is the no-signup form builder really free?', a: 'Absolutely free! No hidden fees, no credit card required, no signup needed to start building.' },
                { q: 'What happens to my form if I don\'t create an account?', a: 'Your form will work perfectly. You\'ll get a shareable link immediately. Create an account anytime to access advanced features.' },
                { q: 'Can I upgrade to an account later?', a: 'Yes! You can create an account anytime to save your forms, access analytics, and manage multiple forms from one dashboard.' },
                { q: 'Are there any limitations without an account?', a: 'You get full access to the form builder. An account just helps you manage multiple forms and access submission history.' },
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
              Ready to build? No signup required.
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-8">
              Join thousands who've created forms without the hassle of registration.
            </p>
            <Link href="/dashboard" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Start Building Instantly <ArrowRight size={16} />
            </Link>
            <p className="text-sm text-gray-400 mt-4">No email • No password • No waiting</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
