import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code, Zap, Shield, Database, Globe, Key } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Submission API Free Tier - Developer Form API | FastSubmit',
  description: 'Free form submission API for developers. REST API endpoints, webhooks, JSON responses. No rate limits on free tier. Perfect for apps, websites, and automation.',
  keywords: [
    'form submission api free tier',
    'free form api',
    'form api for developers',
    'rest api form submission',
    'form backend api',
    'json form api',
    'form endpoint api',
    'free form backend',
    'developer form api',
    'form api no cost',
    'api form submission',
    'form webhook api',
    'serverless form api',
    'form api integration',
    'free api form builder'
  ],
  alternates: { canonical: 'https://fastsubmit.cloud/form-api-free' }
}

export default function FormApiFreeePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Form Submission API Free Tier - FastSubmit",
    "description": "Free form submission API for developers. REST endpoints, webhooks, unlimited requests.",
    "url": "https://fastsubmit.cloud/form-api-free"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is the API really free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Our API is completely free with no rate limits. Use it for personal projects, startups, or enterprise applications." } },
      { "@type": "Question", "name": "What can I do with the form API?", "acceptedAnswer": { "@type": "Answer", "text": "Submit form data, retrieve submissions, set up webhooks, integrate with your apps, automate workflows, and more." } }
    ]
  }

  const features = [
    { icon: <Key className="w-5 h-5" />, title: 'API Keys', desc: 'Secure API keys for authentication. Manage access easily.' },
    { icon: <Code className="w-5 h-5" />, title: 'REST Endpoints', desc: 'Standard REST API. POST submissions, GET data, DELETE entries.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Webhooks', desc: 'Real-time webhooks to your server on every submission.' },
    { icon: <Database className="w-5 h-5" />, title: 'JSON Responses', desc: 'Clean JSON responses. Easy to parse and integrate.' },
    { icon: <Shield className="w-5 h-5" />, title: 'CORS Enabled', desc: 'Cross-origin requests enabled. Call from any domain.' },
    { icon: <Globe className="w-5 h-5" />, title: 'No Rate Limits', desc: 'Unlimited API calls on free tier. Scale without worry.' },
  ]

  const codeExamples = {
    submit: `// Submit form data
fetch('https://fastsubmit.cloud/api/submit/FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello!'
  })
})`,
    retrieve: `// Get submissions
fetch('https://fastsubmit.cloud/api/forms/data/FORM_ID', {
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
})
.then(res => res.json())
.then(data => console.log(data))`
  }

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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-purple-600 mb-4 sm:mb-6 bg-purple-50 px-3 sm:px-4 py-2 rounded-full border border-purple-200">
                <Code size={14} />
                <span>Developer API</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form submission API
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">free tier</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Full-featured form API with no rate limits. Submit data, retrieve submissions, 
                set up webhooks. All free, forever.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Get API Key Free <ArrowRight size={16} />
                </Link>
                <Link href="/docs" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all">
                  API Documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-medium mb-3">Submit Form Data</h3>
                <div className="bg-gray-800 rounded-xl p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">{codeExamples.submit}</pre>
                </div>
              </div>
              <div>
                <h3 className="text-white font-medium mb-3">Retrieve Submissions</h3>
                <div className="bg-gray-800 rounded-xl p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">{codeExamples.retrieve}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                API features included free
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mb-4 text-purple-600">
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
                API endpoints
              </h2>
            </div>
            <div className="space-y-4">
              {[
                { method: 'POST', endpoint: '/api/submit/{formId}', desc: 'Submit form data' },
                { method: 'GET', endpoint: '/api/forms/data/{formId}', desc: 'Retrieve all submissions' },
                { method: 'GET', endpoint: '/api/forms/{formId}', desc: 'Get form configuration' },
                { method: 'DELETE', endpoint: '/api/submissions/{id}', desc: 'Delete a submission' },
              ].map((api, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${api.method === 'POST' ? 'bg-green-100 text-green-700' : api.method === 'DELETE' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'}`}>
                    {api.method}
                  </span>
                  <code className="text-sm font-mono text-gray-700 flex-1">{api.endpoint}</code>
                  <span className="text-sm text-gray-500">{api.desc}</span>
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
                { q: 'Is the API really free?', a: 'Yes! Our API is completely free with no rate limits. Use it for personal projects, startups, or enterprise applications.' },
                { q: 'What can I do with the form API?', a: 'Submit form data, retrieve submissions, set up webhooks, integrate with your apps, automate workflows, and more.' },
                { q: 'Are there rate limits?', a: 'No rate limits on the free tier! Make as many API calls as you need.' },
                { q: 'How do I authenticate?', a: 'Use API keys for authentication. Generate keys from your dashboard and include them in request headers.' },
                { q: 'Can I use webhooks?', a: 'Yes! Set up webhooks to receive real-time notifications when forms are submitted.' },
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
              Start building with our API
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-8">
              Get your free API key in seconds. No credit card required.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Get Free API Key <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
