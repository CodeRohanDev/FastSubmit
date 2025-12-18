import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Mail, Bell, Zap, Settings, Users, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Builder with Email Notifications - Instant Alerts | FastSubmit',
  description: 'Form builder with built-in email notifications. Get instant alerts when someone submits your form. Custom email templates, multiple recipients, auto-responders. Free forever.',
  keywords: [
    'form builder with email notifications',
    'form email alerts',
    'form submission notifications',
    'email notification forms',
    'form auto responder',
    'instant form alerts',
    'form builder email integration',
    'notification forms',
    'form submission email',
    'contact form with email',
    'form builder instant notifications',
    'email alerts on form submit',
    'form notification system',
    'auto email form builder',
    'form builder with alerts'
  ],
  alternates: {
    canonical: 'https://fastsubmit.cloud/form-builder-email-notifications'
  }
}

export default function FormBuilderEmailNotificationsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Form Builder with Email Notifications - FastSubmit",
    "description": "Create forms with instant email notifications. Get alerts when forms are submitted.",
    "url": "https://fastsubmit.cloud/form-builder-email-notifications"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast are the email notifications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Instant! You'll receive email notifications within seconds of someone submitting your form."
        }
      },
      {
        "@type": "Question",
        "name": "Can I send notifications to multiple email addresses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Add unlimited email recipients to receive notifications for each form submission."
        }
      },
      {
        "@type": "Question",
        "name": "Can I customize the notification email template?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Customize the subject line, email body, and include any form fields in your notification template."
        }
      }
    ]
  }

  const features = [
    { icon: <Zap className="w-5 h-5" />, title: 'Instant Delivery', desc: 'Receive notifications within seconds of form submission.' },
    { icon: <Users className="w-5 h-5" />, title: 'Multiple Recipients', desc: 'Send notifications to your entire team simultaneously.' },
    { icon: <Mail className="w-5 h-5" />, title: 'Custom Templates', desc: 'Design your notification emails exactly how you want.' },
    { icon: <Bell className="w-5 h-5" />, title: 'Auto-Responders', desc: 'Automatically reply to form submitters with confirmation.' },
    { icon: <Settings className="w-5 h-5" />, title: 'Conditional Alerts', desc: 'Send different notifications based on form answers.' },
    { icon: <CheckCircle className="w-5 h-5" />, title: 'Delivery Tracking', desc: 'Know when your notifications are delivered and opened.' },
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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-600 mb-4 sm:mb-6 bg-blue-50 px-3 sm:px-4 py-2 rounded-full border border-blue-200">
                <Mail size={14} />
                <span>Instant Email Alerts</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form builder with
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">email notifications</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Never miss a form submission. Get instant email notifications the moment 
                someone fills out your form. Built-in, no add-ons required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Get Started Free <ArrowRight size={16} />
                </Link>
                <Link href="/templates" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all">
                  View Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">How email notifications work</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'User submits form', icon: '📝' },
                { step: '2', title: 'Data saved instantly', icon: '💾' },
                { step: '3', title: 'Email sent to you', icon: '📧' },
                { step: '4', title: 'Auto-reply to user', icon: '✅' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div className="text-xs font-medium text-blue-600 mb-1">Step {item.step}</div>
                  <div className="text-sm font-medium text-gray-900">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Powerful notification features
              </h2>
              <p className="text-gray-500">Everything you need to stay on top of form submissions</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Use cases for email notifications
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Contact Forms', desc: 'Get notified instantly when potential customers reach out.', icon: '💬' },
                { title: 'Lead Generation', desc: 'Alert your sales team the moment a new lead comes in.', icon: '🎯' },
                { title: 'Support Requests', desc: 'Never miss a customer support ticket again.', icon: '🆘' },
                { title: 'Order Forms', desc: 'Receive order notifications to process quickly.', icon: '🛒' },
                { title: 'Event Registration', desc: 'Know immediately when someone registers for your event.', icon: '📅' },
                { title: 'Feedback Forms', desc: 'Get customer feedback delivered straight to your inbox.', icon: '⭐' },
              ].map((useCase, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="text-3xl mb-3">{useCase.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-500">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Common questions
              </h2>
            </div>
            <div className="space-y-6">
              {[
                { q: 'How fast are the email notifications?', a: 'Instant! You\'ll receive email notifications within seconds of someone submitting your form.' },
                { q: 'Can I send notifications to multiple email addresses?', a: 'Yes! Add unlimited email recipients to receive notifications for each form submission.' },
                { q: 'Can I customize the notification email template?', a: 'Absolutely! Customize the subject line, email body, and include any form fields in your notification template.' },
                { q: 'Do submitters receive a confirmation email?', a: 'Yes! You can enable auto-responders to automatically send confirmation emails to form submitters.' },
                { q: 'Is this feature free?', a: 'Yes! Email notifications are included free with all FastSubmit forms. No add-ons or upgrades required.' },
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
              Never miss a submission again
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-8">
              Start receiving instant email notifications for all your forms. Free forever.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Get Started Free <ArrowRight size={16} />
            </Link>
            <p className="text-sm text-gray-400 mt-4">No credit card required • Instant notifications included</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
