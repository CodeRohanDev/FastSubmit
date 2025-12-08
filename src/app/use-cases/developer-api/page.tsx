import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Code, Database, Webhook, Key, Zap, Shield } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Form API for Developers - REST API & Webhooks | FastSubmit',
  description: 'Integrate forms into your apps with our REST API. Create forms, fetch submissions, set up webhooks, and build custom integrations. Free API access.',
  keywords: ['form api', 'form backend api', 'rest api forms', 'form webhooks', 'developer form api'],
}

export default function DeveloperApiPage() {
  const features = [
    { icon: <Code className="w-5 h-5" />, title: 'REST API', desc: 'Full CRUD operations for forms and submissions' },
    { icon: <Webhook className="w-5 h-5" />, title: 'Webhooks', desc: 'Real-time notifications on form submissions' },
    { icon: <Database className="w-5 h-5" />, title: 'Data Export', desc: 'Export submissions as JSON or CSV' },
    { icon: <Key className="w-5 h-5" />, title: 'API Keys', desc: 'Secure authentication with API keys' },
    { icon: <Zap className="w-5 h-5" />, title: 'Fast & Reliable', desc: '99.9% uptime, low latency responses' },
    { icon: <Shield className="w-5 h-5" />, title: 'Secure', desc: 'SSL encryption, rate limiting, CORS support' },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm text-purple-600 mb-6 bg-purple-50 px-4 py-2 rounded-full">
            <Code size={16} />
            Developer API
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Form backend API
            <br />
            <span className="text-gray-400">for developers</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Build custom form integrations with our REST API. Create forms, fetch submissions, 
            set up webhooks, and integrate with your existing tools. Free API access included.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all"
            >
              Get API key <ArrowRight size={18} />
            </Link>
            <Link 
              href="/docs" 
              className="inline-flex items-center justify-center gap-2 text-gray-600 px-8 py-4 rounded-full font-medium hover:text-gray-900 transition-colors border border-gray-200 bg-white"
            >
              API documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Simple, powerful API
            </h2>
            <p className="text-gray-500">Get started in minutes with our intuitive REST API</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Submit Form */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-green-100 text-green-600 text-xs flex items-center justify-center font-mono">POST</span>
                Submit a form
              </h3>
              <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">cURL</div>
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="text-white/70">
{`curl -X POST \\
  `}<span className="text-purple-400">https://fastsubmit.hostspica.com/api/v1/forms/FORM_ID/submit</span>{` \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello!"
  }'`}
                  </code>
                </pre>
              </div>
            </div>

            {/* Get Submissions */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-blue-100 text-blue-600 text-xs flex items-center justify-center font-mono">GET</span>
                Fetch submissions
              </h3>
              <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">cURL</div>
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="text-white/70">
{`curl -X GET \\
  `}<span className="text-purple-400">https://fastsubmit.hostspica.com/api/v1/forms/FORM_ID/submissions</span>{` \\
  -H "Authorization: Bearer `}<span className="text-green-400">YOUR_API_KEY</span>{`"`}
                  </code>
                </pre>
              </div>
            </div>

            {/* Create Form */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-green-100 text-green-600 text-xs flex items-center justify-center font-mono">POST</span>
                Create a form
              </h3>
              <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">JavaScript</div>
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="text-white/70">
{`const response = await fetch(
  `}<span className="text-purple-400">'https://fastsubmit.hostspica.com/api/v1/forms'</span>{`,
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer `}<span className="text-green-400">YOUR_API_KEY</span>{`',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Contact Form',
      fields: ['name', 'email', 'message']
    })
  }
);`}
                  </code>
                </pre>
              </div>
            </div>

            {/* Webhook */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Webhook size={16} className="text-orange-500" />
                Webhook payload
              </h3>
              <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">JSON</div>
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="text-white/70">
{`{
  "event": `}<span className="text-green-400">"submission.created"</span>{`,
  "form_id": "abc123",
  "submission": {
    "id": "sub_xyz789",
    "data": {
      "name": "John Doe",
      "email": "john@example.com"
    },
    "created_at": "2024-12-08T10:30:00Z"
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Built for developers
            </h2>
            <p className="text-gray-500">Everything you need to integrate forms into your apps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-4 text-purple-600">
                  {feature.icon}
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Examples */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Integrate with anything
            </h2>
            <p className="text-gray-500">Connect FastSubmit to your favorite tools</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Zapier', desc: 'Connect to 5000+ apps', icon: '⚡' },
              { name: 'Slack', desc: 'Get notifications in Slack', icon: '💬' },
              { name: 'Google Sheets', desc: 'Sync submissions to sheets', icon: '📊' },
              { name: 'Notion', desc: 'Add submissions to databases', icon: '📝' },
              { name: 'Airtable', desc: 'Sync with Airtable bases', icon: '📋' },
              { name: 'Custom Webhooks', desc: 'Send data anywhere', icon: '🔗' },
            ].map((integration, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                <span className="text-3xl">{integration.icon}</span>
                <div>
                  <div className="font-medium text-gray-900">{integration.name}</div>
                  <div className="text-sm text-gray-500">{integration.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Ready to build?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your free API key and start integrating
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Get API Key <ArrowRight size={20} />
            </Link>
            <Link 
              href="/docs" 
              className="inline-flex items-center gap-2 text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      <Footer variant="extended" />
    </div>
  )
}
