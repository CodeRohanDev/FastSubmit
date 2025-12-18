import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Webhook, Zap, Code, Bell, Shield, RefreshCw } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Builder with Webhook Integration - Real-time Data | FastSubmit',
  description: 'Form builder with webhook integration. Send form data to any URL in real-time. Connect to Zapier, Make, n8n, Slack, Discord. Automate workflows with webhooks. Free forever.',
  keywords: [
    'form builder with webhook integration',
    'form webhook',
    'webhook form builder',
    'form to webhook',
    'real-time form data',
    'form automation webhook',
    'zapier form integration',
    'make form integration',
    'n8n form webhook',
    'form to slack',
    'form to discord',
    'webhook notification form',
    'form api webhook',
    'automated form submission',
    'form integration webhook'
  ],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-webhook' }
}

export default function FormBuilderWebhookPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Form Builder with Webhook Integration - FastSubmit",
    "description": "Create forms with webhook integration for real-time data delivery.",
    "url": "https://fastsubmit.cloud/form-builder-webhook"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is a webhook?", "acceptedAnswer": { "@type": "Answer", "text": "A webhook sends form data to any URL you specify in real-time when someone submits your form. It's like an instant notification to your server or app." } },
      { "@type": "Question", "name": "Can I connect to Zapier?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Use our webhooks with Zapier, Make, n8n, or any automation platform to trigger workflows when forms are submitted." } }
    ]
  }

  const features = [
    { icon: <Webhook className="w-5 h-5" />, title: 'Real-time Delivery', desc: 'Form data sent to your URL instantly on submission.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Zapier Compatible', desc: 'Works with Zapier, Make, n8n, and any automation tool.' },
    { icon: <Code className="w-5 h-5" />, title: 'JSON Payload', desc: 'Clean JSON data format, easy to parse and process.' },
    { icon: <Bell className="w-5 h-5" />, title: 'Slack/Discord', desc: 'Send form submissions directly to your team channels.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Secure', desc: 'HTTPS only, with optional signature verification.' },
    { icon: <RefreshCw className="w-5 h-5" />, title: 'Retry Logic', desc: 'Automatic retries if your endpoint is temporarily down.' },
  ]

  const integrations = [
    { name: 'Zapier', icon: '⚡', desc: 'Connect to 5000+ apps' },
    { name: 'Make', icon: '🔧', desc: 'Visual automation builder' },
    { name: 'n8n', icon: '🔗', desc: 'Open-source automation' },
    { name: 'Slack', icon: '💬', desc: 'Team notifications' },
    { name: 'Discord', icon: '🎮', desc: 'Community alerts' },
    { name: 'Notion', icon: '📝', desc: 'Database entries' },
    { name: 'Airtable', icon: '📊', desc: 'Spreadsheet records' },
    { name: 'Custom API', icon: '🌐', desc: 'Your own endpoint' },
  ]

  const webhookExample = `// Webhook payload example
{
  "event": "form.submitted",
  "form_id": "abc123",
  "submission_id": "sub_xyz789",
  "timestamp": "2024-12-17T10:30:00Z",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello from the form!"
  }
}`

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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-violet-600 mb-4 sm:mb-6 bg-violet-50 px-3 sm:px-4 py-2 rounded-full border border-violet-200">
                <Webhook size={14} />
                <span>Webhook Integration</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form builder with
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">webhook integration</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Send form data anywhere in real-time. Connect to Zapier, Slack, Discord, 
                or your own API. Automate workflows instantly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Create Form with Webhook <ArrowRight size={16} />
                </Link>
                <Link href="/docs" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all">
                  Webhook Docs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">Webhook payload</h2>
              <p className="text-gray-400">What you receive on each submission</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">{webhookExample}</pre>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Connect to anything
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {integrations.map((integration, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-gray-200 text-center hover:border-violet-300 hover:shadow-lg transition-all">
                  <div className="text-3xl mb-2">{integration.icon}</div>
                  <div className="font-medium text-gray-900">{integration.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{integration.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Webhook features
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center mb-4 text-violet-600">
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
                { q: 'What is a webhook?', a: 'A webhook sends form data to any URL you specify in real-time when someone submits your form. It\'s like an instant notification to your server or app.' },
                { q: 'Can I connect to Zapier?', a: 'Yes! Use our webhooks with Zapier, Make, n8n, or any automation platform to trigger workflows when forms are submitted.' },
                { q: 'Is webhook integration free?', a: 'Yes! Webhooks are included free with all FastSubmit forms. No premium plan required.' },
                { q: 'What data format is sent?', a: 'We send JSON payloads with all form data, submission ID, timestamp, and form metadata.' },
                { q: 'What if my endpoint is down?', a: 'We automatically retry failed webhook deliveries with exponential backoff to ensure your data arrives.' },
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
              Ready to automate your forms?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-8">
              Create forms with webhook integration. Free forever.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Create Form with Webhook <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
