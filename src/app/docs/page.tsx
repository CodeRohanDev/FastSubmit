import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Code, Database, Globe, Layers } from 'lucide-react'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Documentation - Free Form Builder API | FastSubmit',
  description: 'Learn how to use FastSubmit free form builder API. REST API documentation, code examples, field types. Best free form API alternative to Google Forms, Zoho Forms, Microsoft Forms. Hostspica Forms documentation.',
  keywords: [
    'form api documentation',
    'form api',
    'google form api',
    'free form api',
    'form api free',
    'form builder api',
    'rest api forms',
    'form backend api',
    'form builder docs',
    'form builder',
    'free form builder',
    'google forms',
    'forms',
    'quiz maker',
    'online form builder',
    'google form alternative',
    'free online form',
    'ai form builder',
    'form builder free',
    'form maker',
    'best form builder',
    'hostspica forms',
    'forms hostspica',
    'form to excel',
    'form to pdf',
    'zoho forms',
    'microsoft forms',
    'create free forms',
    'easy forms'
  ],
}

export default function DocsPage() {
  return (
    <>
    <GoogleAnalytics />
    <div className="min-w-0">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3">Documentation</h1>
      <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
        Learn how to integrate FastSubmit and start collecting form submissions.
      </p>

      {/* Base URL */}
      <div className="bg-gray-50 rounded-lg p-4 sm:p-5 mb-6 sm:mb-8 overflow-hidden">
        <p className="text-xs text-gray-400 mb-2">API Base URL</p>
        <code className="text-xs sm:text-sm font-mono text-gray-900 break-all">https://fastsubmit.cloud/api</code>
        <p className="text-xs text-gray-500 mt-2">Current version: <code className="bg-gray-200 px-1.5 py-0.5 rounded">v1</code></p>
      </div>

      {/* What is FastSubmit */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">What is FastSubmit?</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          FastSubmit is a form backend service that lets you collect submissions without building your own backend. 
          Point your HTML form to our endpoint and we handle storage, validation, and spam protection.
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: Zap, title: 'Instant Setup', desc: 'Get an endpoint URL in seconds' },
            { icon: Shield, title: 'Spam Protection', desc: 'Built-in honeypot and rate limiting' },
            { icon: Code, title: 'REST API', desc: 'Full API access to manage forms' },
            { icon: Database, title: 'Dashboard', desc: 'View and export submissions' },
            { icon: Layers, title: '7 Field Types', desc: 'Text, email, textarea, and more' },
            { icon: Globe, title: 'CORS Enabled', desc: 'Works from any domain' },
          ].map((f, i) => (
            <div key={i} className="flex gap-3 p-3 sm:p-4 bg-white border border-gray-100 rounded-lg">
              <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0">
                <f.icon className="w-4 h-4 text-gray-600" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-medium text-gray-900">{f.title}</h3>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Example */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Quick Example</h2>
        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-xs leading-relaxed">
            <code className="text-gray-300 whitespace-pre">{`<form action="https://fastsubmit.cloud/api/submit/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message"></textarea>
  <input type="text" name="_honeypot" style="display:none" />
  <button type="submit">Send</button>
</form>`}</code>
          </pre>
        </div>
      </section>

      {/* API Overview */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">API Overview</h2>
        {/* Mobile: Card layout */}
        <div className="sm:hidden space-y-3">
          {[
            { endpoint: 'POST /api/submit/:formId', desc: 'Submit form data', auth: 'Public', authColor: 'text-green-600' },
            { endpoint: 'GET /api/v1/forms', desc: 'List all forms', auth: 'API Key', authColor: 'text-amber-600' },
            { endpoint: 'POST /api/v1/forms', desc: 'Create a form', auth: 'API Key', authColor: 'text-amber-600' },
            { endpoint: 'GET /api/v1/forms/:id', desc: 'Get form details', auth: 'API Key', authColor: 'text-amber-600' },
            { endpoint: 'PUT /api/v1/forms/:id', desc: 'Update a form', auth: 'API Key', authColor: 'text-amber-600' },
            { endpoint: 'DELETE /api/v1/forms/:id', desc: 'Delete a form', auth: 'API Key', authColor: 'text-amber-600' },
            { endpoint: 'GET /api/v1/forms/:id/submissions', desc: 'Get submissions', auth: 'API Key', authColor: 'text-amber-600' },
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-3 bg-white">
              <code className="text-xs font-mono text-gray-700 break-all">{item.endpoint}</code>
              <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
              <span className={`text-xs ${item.authColor} mt-1 inline-block`}>{item.auth}</span>
            </div>
          ))}
        </div>
        {/* Desktop: Table layout */}
        <div className="hidden sm:block border border-gray-200 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2.5 text-xs font-medium text-gray-500">Endpoint</th>
                  <th className="text-left px-4 py-2.5 text-xs font-medium text-gray-500">Description</th>
                  <th className="text-left px-4 py-2.5 text-xs font-medium text-gray-500">Auth</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-t"><td className="px-4 py-2.5 font-mono text-gray-700">POST /api/submit/:formId</td><td className="px-4 py-2.5 text-gray-600">Submit form data</td><td className="px-4 py-2.5 text-green-600">Public</td></tr>
                <tr className="border-t"><td className="px-4 py-2.5 font-mono text-gray-700">GET /api/v1/forms</td><td className="px-4 py-2.5 text-gray-600">List all forms</td><td className="px-4 py-2.5 text-amber-600">API Key</td></tr>
                <tr className="border-t"><td className="px-4 py-2.5 font-mono text-gray-700">POST /api/v1/forms</td><td className="px-4 py-2.5 text-gray-600">Create a form</td><td className="px-4 py-2.5 text-amber-600">API Key</td></tr>
                <tr className="border-t"><td className="px-4 py-2.5 font-mono text-gray-700">GET /api/v1/forms/:id</td><td className="px-4 py-2.5 text-gray-600">Get form details</td><td className="px-4 py-2.5 text-amber-600">API Key</td></tr>
                <tr className="border-t"><td className="px-4 py-2.5 font-mono text-gray-700">PUT /api/v1/forms/:id</td><td className="px-4 py-2.5 text-gray-600">Update a form</td><td className="px-4 py-2.5 text-amber-600">API Key</td></tr>
                <tr className="border-t"><td className="px-4 py-2.5 font-mono text-gray-700">DELETE /api/v1/forms/:id</td><td className="px-4 py-2.5 text-gray-600">Delete a form</td><td className="px-4 py-2.5 text-amber-600">API Key</td></tr>
                <tr className="border-t"><td className="px-4 py-2.5 font-mono text-gray-700">GET /api/v1/forms/:id/submissions</td><td className="px-4 py-2.5 text-gray-600">Get submissions</td><td className="px-4 py-2.5 text-amber-600">API Key</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Free Plan */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Free Plan</h2>
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">∞</p>
            <p className="text-[10px] sm:text-xs text-gray-500">Forms</p>
          </div>
          <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">1,000</p>
            <p className="text-[10px] sm:text-xs text-gray-500">Submissions/mo</p>
          </div>
          <div className="text-center p-3 sm:p-4 bg-gray-50 rounded-lg">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">7</p>
            <p className="text-[10px] sm:text-xs text-gray-500">Field types</p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Next Steps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: '/docs/quickstart', title: 'Quick Start', desc: 'Get up and running in 5 minutes' },
            { href: '/docs/field-types', title: 'Field Types', desc: 'Learn about all 7 field types' },
            { href: '/docs/forms', title: 'Forms API', desc: 'Create and manage forms via API' },
            { href: '/docs/examples', title: 'Code Examples', desc: 'Ready-to-use code snippets' },
          ].map((item, i) => (
            <Link key={i} href={item.href} className="flex items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors group">
              <div className="min-w-0">
                <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
              <ArrowRight size={16} className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
            </Link>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}
