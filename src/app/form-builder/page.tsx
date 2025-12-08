import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Zap } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Free Online Form Builder - Create Forms in Minutes',
  description: 'Create beautiful forms with our free online form builder. Drag & drop interface, 100+ templates, unlimited forms and submissions. No coding required.',
  keywords: ['online form builder', 'free form builder', 'form creator', 'create form online', 'drag and drop form builder'],
}

export default function FormBuilderPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-6 bg-white px-4 py-2 rounded-full border border-gray-200">
            <Zap size={16} className="text-indigo-600" />
            Free Forever • No Credit Card Required
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Free Online Form Builder
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Create beautiful forms, surveys, and quizzes in minutes. Drag & drop interface with 100+ templates. 
            No coding required. Unlimited forms and submissions forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/signup" 
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all text-lg"
            >
              Create Your First Form <ArrowRight size={20} />
            </Link>
            <Link 
              href="/templates" 
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-gray-300 transition-all text-lg"
            >
              Browse Templates
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            Join 50,000+ users creating forms with FastSubmit
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Everything you need to create forms
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features that make form building easy and fun
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Drag & Drop Builder',
                description: 'Intuitive visual builder. No coding required. Create forms in minutes.'
              },
              {
                icon: '📋',
                title: '100+ Templates',
                description: 'Pre-built templates for every use case. Contact forms, surveys, quizzes, and more.'
              },
              {
                icon: '♾️',
                title: 'Unlimited Everything',
                description: 'Unlimited forms, submissions, and storage. No hidden limits or fees.'
              },
              {
                icon: '📊',
                title: 'Analytics & Reports',
                description: 'Track views, submissions, and conversion rates. Export to CSV anytime.'
              },
              {
                icon: '📧',
                title: 'Email Notifications',
                description: 'Get instant email alerts when someone submits your form.'
              },
              {
                icon: '🎨',
                title: 'Custom Branding',
                description: 'Customize colors, fonts, and logos to match your brand.'
              },
              {
                icon: '📱',
                title: 'Mobile Responsive',
                description: 'Forms look perfect on all devices. Optimized for mobile.'
              },
              {
                icon: '🔒',
                title: 'Secure & Private',
                description: 'SSL encryption, spam protection, and GDPR compliant.'
              },
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Blazing fast load times. Your forms load in milliseconds.'
              },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Types */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Create any type of form
            </h2>
            <p className="text-lg text-gray-600">
              From simple contact forms to complex surveys
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Contact Forms', link: '/contact-form-builder', icon: '📬' },
              { name: 'Surveys & Polls', link: '/survey-maker', icon: '📊' },
              { name: 'Registration Forms', link: '/registration-form', icon: '📝' },
              { name: 'Order Forms', link: '/order-form', icon: '🛒' },
              { name: 'Feedback Forms', link: '/feedback-form', icon: '💬' },
              { name: 'Quiz & Tests', link: '/quiz-maker', icon: '🎯' },
              { name: 'Application Forms', link: '/application-form', icon: '📄' },
              { name: 'Lead Generation', link: '/templates', icon: '🎯' },
            ].map((type, i) => (
              <Link
                key={i}
                href={type.link}
                className="p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-indigo-600 hover:shadow-lg transition-all group"
              >
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {type.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Why choose FastSubmit?
            </h2>
            <p className="text-lg text-gray-600">
              Compare us with other form builders
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-indigo-600">FastSubmit</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-500">Google Forms</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-500">Typeform</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Price', fastsubmit: 'Free Forever', google: 'Free', typeform: '$25-83/mo' },
                  { feature: 'Unlimited Forms', fastsubmit: true, google: true, typeform: false },
                  { feature: 'Unlimited Submissions', fastsubmit: true, google: true, typeform: false },
                  { feature: 'Custom Branding', fastsubmit: true, google: false, typeform: 'Paid only' },
                  { feature: 'File Upload', fastsubmit: true, google: true, typeform: 'Paid only' },
                  { feature: 'Payment Integration', fastsubmit: true, google: false, typeform: 'Paid only' },
                  { feature: 'Developer API', fastsubmit: true, google: false, typeform: 'Paid only' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.fastsubmit === 'boolean' ? (
                        row.fastsubmit ? <Check className="inline text-green-600" size={20} /> : '—'
                      ) : (
                        <span className="text-indigo-600 font-medium">{row.fastsubmit}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-600">
                      {typeof row.google === 'boolean' ? (
                        row.google ? <Check className="inline text-green-600" size={20} /> : '—'
                      ) : (
                        row.google
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-600">
                      {typeof row.typeform === 'boolean' ? (
                        row.typeform ? <Check className="inline text-green-600" size={20} /> : '—'
                      ) : (
                        row.typeform
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/google-forms-alternative"
              className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-2"
            >
              See full comparison <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to create your first form?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 50,000+ users. Free forever. No credit card required.
          </p>
          <Link 
            href="/signup" 
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            Get Started Free <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer variant="extended" />
    </div>
  )
}
