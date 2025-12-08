import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, X } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Best Google Forms Alternative - Free & Unlimited | FastSubmit',
  description: 'Looking for a Google Forms alternative? FastSubmit offers unlimited forms, custom branding, better design, and developer API. Free forever.',
  keywords: ['google forms alternative', 'free google forms alternative', 'better than google forms', 'google forms competitor'],
}

export default function GoogleFormsAlternativePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm text-indigo-600 mb-6 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-200">
            ⚡ Better than Google Forms
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            The Best Google Forms Alternative
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Everything you love about Google Forms, plus custom branding, better design, 
            developer API, and unlimited everything. Free forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all text-lg"
            >
              Switch to FastSubmit <ArrowRight size={20} />
            </Link>
            <Link 
              href="/form-builder" 
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-medium hover:border-gray-300 transition-all text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              FastSubmit vs Google Forms
            </h2>
            <p className="text-lg text-gray-600">
              See how we compare feature by feature
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 w-1/3">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-indigo-600 w-1/3">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">🚀</span>
                      <span>FastSubmit</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-500 w-1/3">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">📝</span>
                      <span>Google Forms</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Price', fastsubmit: 'Free Forever', google: 'Free', winner: 'tie' },
                  { feature: 'Unlimited Forms', fastsubmit: true, google: true, winner: 'tie' },
                  { feature: 'Unlimited Submissions', fastsubmit: true, google: true, winner: 'tie' },
                  { feature: 'Custom Branding', fastsubmit: true, google: false, winner: 'fastsubmit' },
                  { feature: 'Remove "Powered by"', fastsubmit: true, google: false, winner: 'fastsubmit' },
                  { feature: 'Custom Domain', fastsubmit: true, google: false, winner: 'fastsubmit' },
                  { feature: 'Developer API', fastsubmit: true, google: false, winner: 'fastsubmit' },
                  { feature: 'Webhooks', fastsubmit: true, google: false, winner: 'fastsubmit' },
                  { feature: 'File Upload', fastsubmit: true, google: true, winner: 'tie' },
                  { feature: 'Payment Integration', fastsubmit: true, google: false, winner: 'fastsubmit' },
                  { feature: 'Email Notifications', fastsubmit: true, google: 'Via Add-ons', winner: 'fastsubmit' },
                  { feature: 'Custom Thank You Page', fastsubmit: true, google: 'Limited', winner: 'fastsubmit' },
                  { feature: 'Conditional Logic', fastsubmit: true, google: 'Limited', winner: 'fastsubmit' },
                  { feature: 'Multi-page Forms', fastsubmit: true, google: true, winner: 'tie' },
                  { feature: 'Analytics', fastsubmit: true, google: 'Basic', winner: 'fastsubmit' },
                  { feature: 'CSV Export', fastsubmit: true, google: true, winner: 'tie' },
                  { feature: 'Spam Protection', fastsubmit: true, google: 'reCAPTCHA', winner: 'tie' },
                  { feature: 'Mobile Responsive', fastsubmit: true, google: true, winner: 'tie' },
                  { feature: 'No Google Account Required', fastsubmit: true, google: false, winner: 'fastsubmit' },
                  { feature: 'Modern Design', fastsubmit: true, google: 'Basic', winner: 'fastsubmit' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 text-gray-700 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.fastsubmit === 'boolean' ? (
                        row.fastsubmit ? (
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                            <Check className="text-green-600" size={20} />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                            <X className="text-red-600" size={20} />
                          </div>
                        )
                      ) : (
                        <span className="text-indigo-600 font-semibold">{row.fastsubmit}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.google === 'boolean' ? (
                        row.google ? (
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                            <Check className="text-green-600" size={20} />
                          </div>
                        ) : (
                          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100">
                            <X className="text-red-600" size={20} />
                          </div>
                        )
                      ) : (
                        <span className="text-gray-600">{row.google}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Why switch from Google Forms?
            </h2>
            <p className="text-lg text-gray-600">
              Here's what you get with FastSubmit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Better Design',
                description: 'Modern, beautiful forms that match your brand. Customize colors, fonts, and logos.'
              },
              {
                icon: '🚫',
                title: 'No Google Account',
                description: 'Your users don\'t need a Google account to fill out forms. Works for everyone.'
              },
              {
                icon: '🏷️',
                title: 'Custom Branding',
                description: 'Remove "Powered by" branding. Use your own domain. White-label ready.'
              },
              {
                icon: '⚡',
                title: 'Developer API',
                description: 'Full REST API for developers. Integrate with any app or service.'
              },
              {
                icon: '🔔',
                title: 'Better Notifications',
                description: 'Instant email notifications built-in. No add-ons required.'
              },
              {
                icon: '💳',
                title: 'Accept Payments',
                description: 'Integrate with Stripe or PayPal. Collect payments directly in forms.'
              },
              {
                icon: '📊',
                title: 'Advanced Analytics',
                description: 'Track views, conversion rates, and more. Better insights than Google Forms.'
              },
              {
                icon: '🔗',
                title: 'Webhooks',
                description: 'Real-time webhooks to connect with Zapier, Slack, and other tools.'
              },
              {
                icon: '🛡️',
                title: 'Privacy Focused',
                description: 'Your data stays private. We don\'t sell data like Google might.'
              },
            ].map((reason, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-indigo-600 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Easy migration from Google Forms
            </h2>
            <p className="text-lg text-gray-600">
              Switch in 3 simple steps
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Sign up for free',
                description: 'Create your FastSubmit account in 30 seconds. No credit card required.'
              },
              {
                step: '2',
                title: 'Recreate your forms',
                description: 'Use our templates or drag & drop builder. Copy your questions from Google Forms.'
              },
              {
                step: '3',
                title: 'Update your links',
                description: 'Replace Google Forms links with FastSubmit links. Done!'
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
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
              Start Migration Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
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
                q: 'Do I need a Google account?',
                a: 'No! Neither you nor your users need a Google account. FastSubmit works for everyone.'
              },
              {
                q: 'Can I import my Google Forms?',
                a: 'While we don\'t have automatic import yet, you can easily recreate your forms using our templates and drag & drop builder.'
              },
              {
                q: 'Will my existing Google Forms links break?',
                a: 'Your old Google Forms links will continue to work. You\'ll just need to update them to FastSubmit links when you\'re ready.'
              },
              {
                q: 'Can I use my own domain?',
                a: 'Yes! You can use custom domains like forms.yourdomain.com (coming soon).'
              },
              {
                q: 'Is there a limit on submissions?',
                a: 'No limits! Collect unlimited submissions on all your forms, forever.'
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
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to switch from Google Forms?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 50,000+ users who made the switch. Free forever.
          </p>
          <Link 
            href="/signup" 
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            Get Started Free <ArrowRight size={20} />
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • Takes 30 seconds
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
