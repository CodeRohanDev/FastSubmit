import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quick Start Guide - Free Form Builder | FastSubmit',
  description: 'Get started with FastSubmit free form builder in 5 minutes. Create forms, embed on websites, collect submissions. Best free Google Forms alternative.',
  keywords: ['form builder quickstart', 'free form builder', 'create free forms', 'easy forms', 'online form builder', 'form builder free', 'google forms alternative'],
}

export default function QuickStartPage() {
  return (
    <div className="min-w-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Quick Start</h1>
      <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        Get up and running with FastSubmit in under 5 minutes.
      </p>

      {/* Step 1 */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0">1</span>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Create an Account</h2>
        </div>
        <p className="text-gray-600 ml-10 sm:ml-11 mb-3 text-sm sm:text-base">
          Sign up for a free FastSubmit account to get started.
        </p>
        <div className="ml-10 sm:ml-11">
          <Link href="/signup" className="text-indigo-600 hover:underline font-medium text-sm sm:text-base">
            Create your free account →
          </Link>
        </div>
      </div>

      {/* Step 2 */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0">2</span>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Create a Form</h2>
        </div>
        <p className="text-gray-600 ml-10 sm:ml-11 mb-3 text-sm sm:text-base">
          In your dashboard, create a new form and define your fields. You&apos;ll get a unique form ID and API key.
        </p>
        <div className="ml-10 sm:ml-11 bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200 overflow-hidden">
          <p className="text-xs sm:text-sm text-gray-600 mb-2">Your form endpoint will look like:</p>
          <code className="text-xs sm:text-sm font-mono text-indigo-700 break-all">
            https://fastsubmit.hostspica.com/api/submit/YOUR_FORM_ID
          </code>
        </div>
      </div>

      {/* Step 3 */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0">3</span>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Add to Your Website</h2>
        </div>
        <p className="text-gray-600 ml-10 sm:ml-11 mb-3 sm:mb-4 text-sm sm:text-base">
          Add the endpoint URL to your HTML form&apos;s <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs sm:text-sm">action</code> attribute:
        </p>
        <div className="ml-10 sm:ml-11 bg-gray-900 rounded-xl overflow-hidden">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
            <code className="text-gray-100 whitespace-pre">
{`<form action="https://fastsubmit.hostspica.com/api/submit/abc123" method="POST">
  <label>
    Name
    <input type="text" name="name" required />
  </label>
  
  <label>
    Email
    <input type="email" name="email" required />
  </label>
  
  <label>
    Message
    <textarea name="message"></textarea>
  </label>
  
  <!-- Honeypot field for spam protection (keep hidden) -->
  <input type="text" name="_honeypot" style="display:none" />
  
  <button type="submit">Send Message</button>
</form>`}</code>
          </pre>
        </div>
      </div>

      {/* Step 4 */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0">4</span>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">View Submissions</h2>
        </div>
        <p className="text-gray-600 ml-10 sm:ml-11 text-sm sm:text-base">
          That&apos;s it! All form submissions will appear in your FastSubmit dashboard. You can also fetch them via the REST API.
        </p>
      </div>

      {/* Important Notes */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
        <h3 className="font-semibold text-amber-800 mb-2 text-sm sm:text-base">Important Notes</h3>
        <ul className="text-xs sm:text-sm text-amber-700 space-y-2">
          <li>• Field <code className="bg-amber-100 px-1 rounded">name</code> attributes must match the field IDs you defined in your form</li>
          <li>• Add a hidden <code className="bg-amber-100 px-1 rounded">_honeypot</code> field for spam protection</li>
          <li>• The form accepts both <code className="bg-amber-100 px-1 rounded">application/json</code> and <code className="bg-amber-100 px-1 rounded">application/x-www-form-urlencoded</code></li>
        </ul>
      </div>

      {/* Next Steps */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Next Steps</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <Link href="/docs/submit-endpoint" className="block p-3 sm:p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors">
          <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Submit Endpoint</h3>
          <p className="text-xs sm:text-sm text-gray-600">Learn about all submission options and responses</p>
        </Link>
        <Link href="/docs/forms" className="block p-3 sm:p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors">
          <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Forms API</h3>
          <p className="text-xs sm:text-sm text-gray-600">Manage forms programmatically via REST API</p>
        </Link>
      </div>
    </div>
  )
}
