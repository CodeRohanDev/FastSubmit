import type { Metadata } from 'next'
import { AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free Unlimited Forms - No Limits | FastSubmit',
  description: 'FastSubmit offers unlimited forms, submissions, and API requests. Best free form builder with no limits. Better than Google Forms, Zoho Forms.',
  keywords: ['free form builder', 'unlimited forms', 'free online forms', 'cheapest form builder', 'best free form builder', 'affordable forms', 'form builder free'],
}

export default function LimitsPage() {
  return (
    <div className="min-w-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Service Features & Fair Use</h1>
      <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        FastSubmit is completely free with unlimited usage. Learn about our fair use policy.
      </p>

      {/* Service Features */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Service Features</h2>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
          <p className="text-green-800 font-medium mb-2 text-sm sm:text-base">✨ FastSubmit is completely free with unlimited usage!</p>
          <p className="text-xs sm:text-sm text-green-700">
            No credit card required, no hidden fees, no usage limits. We believe in providing a great service without restrictions.
          </p>
        </div>
        
        {/* Mobile: Card layout */}
        <div className="sm:hidden space-y-2">
          {[
            { resource: 'Forms', limit: 'Unlimited', note: 'Create as many forms as you need' },
            { resource: 'Fields per Form', limit: 'Unlimited', note: 'No limit on form complexity' },
            { resource: 'Submissions', limit: 'Unlimited', note: 'No monthly submission limits' },
            { resource: 'Submission Storage', limit: 'Unlimited', note: 'Submissions stored indefinitely' },
            { resource: 'API Requests', limit: 'Unlimited', note: 'Subject to fair use policy' },
            { resource: 'Verified Domains', limit: 'Unlimited', note: 'Verify as many domains as needed' },
          ].map((item) => (
            <div key={item.resource} className="border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-gray-900 text-sm">{item.resource}</span>
                <span className="text-green-600 font-medium text-sm">{item.limit}</span>
              </div>
              <p className="text-gray-600 text-xs">{item.note}</p>
            </div>
          ))}
        </div>
        {/* Desktop: Table */}
        <div className="hidden sm:block border border-gray-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Resource</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Limit</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium text-gray-900">Forms</td>
                  <td className="px-4 py-3 text-green-600 font-medium">Unlimited</td>
                  <td className="px-4 py-3 text-gray-600">Create as many forms as you need</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium text-gray-900">Fields per Form</td>
                  <td className="px-4 py-3 text-green-600 font-medium">Unlimited</td>
                  <td className="px-4 py-3 text-gray-600">No limit on form complexity</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium text-gray-900">Submissions</td>
                  <td className="px-4 py-3 text-green-600 font-medium">Unlimited</td>
                  <td className="px-4 py-3 text-gray-600">No monthly submission limits</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium text-gray-900">Submission Storage</td>
                  <td className="px-4 py-3 text-green-600 font-medium">Unlimited</td>
                  <td className="px-4 py-3 text-gray-600">Submissions stored indefinitely</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium text-gray-900">API Requests</td>
                  <td className="px-4 py-3 text-green-600 font-medium">Unlimited</td>
                  <td className="px-4 py-3 text-gray-600">Subject to fair use policy</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium text-gray-900">Verified Domains</td>
                  <td className="px-4 py-3 text-green-600 font-medium">Unlimited</td>
                  <td className="px-4 py-3 text-gray-600">Verify as many domains as needed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fair Use Policy */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Fair Use Policy</h2>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          While we offer unlimited usage, we implement rate limiting to prevent abuse and ensure service quality for all users.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="border border-gray-200 rounded-xl p-3 sm:p-4">
            <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Submit Endpoint</h4>
            <p className="text-xl sm:text-2xl font-bold text-indigo-600 mb-1">10 req/min</p>
            <p className="text-xs sm:text-sm text-gray-600">Per IP address</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-3 sm:p-4">
            <h4 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Management API</h4>
            <p className="text-xl sm:text-2xl font-bold text-indigo-600 mb-1">100 req/min</p>
            <p className="text-xs sm:text-sm text-gray-600">Per API key</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 sm:p-4">
          <div className="flex gap-2 sm:gap-3">
            <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs sm:text-sm text-amber-800 font-medium mb-1">Rate Limit Exceeded</p>
              <p className="text-xs sm:text-sm text-amber-700">
                If you exceed the rate limit, you&apos;ll receive a <code className="bg-amber-100 px-1 rounded">429 Too Many Requests</code> response. 
                Wait a few minutes before retrying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Size Limits */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Request Size Limits</h2>
        {/* Mobile: Card layout */}
        <div className="sm:hidden space-y-2">
          {[
            { limit: 'Maximum request body size', value: '1 MB' },
            { limit: 'Maximum field value length', value: '10,000 characters' },
            { limit: 'Maximum fields per form', value: '100 fields' },
            { limit: 'Maximum select options', value: '100 options' },
          ].map((item) => (
            <div key={item.limit} className="border border-gray-200 rounded-lg p-3 flex justify-between items-center">
              <span className="text-gray-900 text-sm">{item.limit}</span>
              <code className="text-indigo-600 font-mono text-xs">{item.value}</code>
            </div>
          ))}
        </div>
        {/* Desktop: Table */}
        <div className="hidden sm:block border border-gray-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Limit</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3 text-gray-900">Maximum request body size</td>
                  <td className="px-4 py-3 font-mono text-indigo-600">1 MB</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 text-gray-900">Maximum field value length</td>
                  <td className="px-4 py-3 font-mono text-indigo-600">10,000 characters</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 text-gray-900">Maximum fields per form</td>
                  <td className="px-4 py-3 font-mono text-indigo-600">100 fields</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 text-gray-900">Maximum select options</td>
                  <td className="px-4 py-3 font-mono text-indigo-600">100 options</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Data Retention</h2>
        <div className="bg-green-50 border border-green-200 rounded-xl p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-green-800">
            <strong>Unlimited Storage:</strong> Your form submissions are stored indefinitely. 
            We don&apos;t automatically delete old submissions. You can manually delete submissions 
            at any time via the dashboard or API.
          </p>
        </div>
      </section>

      {/* Best Practices */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Best Practices</h2>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold shrink-0">1</span>
            <div className="min-w-0">
              <p className="font-medium text-gray-900 text-sm sm:text-base">Cache API responses</p>
              <p className="text-xs sm:text-sm text-gray-600">Cache form configurations and submission lists to reduce API calls</p>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold shrink-0">2</span>
            <div className="min-w-0">
              <p className="font-medium text-gray-900 text-sm sm:text-base">Use pagination</p>
              <p className="text-xs sm:text-sm text-gray-600">When fetching submissions, use the <code className="bg-gray-200 px-1 rounded">limit</code> parameter</p>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold shrink-0">3</span>
            <div className="min-w-0">
              <p className="font-medium text-gray-900 text-sm sm:text-base">Implement client-side validation</p>
              <p className="text-xs sm:text-sm text-gray-600">Validate form data before submitting to reduce unnecessary API calls</p>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs sm:text-sm font-bold shrink-0">4</span>
            <div className="min-w-0">
              <p className="font-medium text-gray-900 text-sm sm:text-base">Handle rate limits gracefully</p>
              <p className="text-xs sm:text-sm text-gray-600">Implement exponential backoff when you receive 429 responses</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
