import { AlertTriangle } from 'lucide-react'

export default function LimitsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Features & Fair Use</h1>
      <p className="text-gray-600 mb-8">
        FastSubmit is completely free with unlimited usage. Learn about our fair use policy.
      </p>

      {/* Service Features */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Service Features</h2>
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
          <p className="text-green-800 font-medium mb-2">✨ FastSubmit is completely free with unlimited usage!</p>
          <p className="text-sm text-green-700">
            No credit card required, no hidden fees, no usage limits. We believe in providing a great service without restrictions.
          </p>
        </div>
        
        <div className="border border-gray-200 rounded-xl overflow-hidden">
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
      </section>

      {/* Fair Use Policy */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Fair Use Policy</h2>
        <p className="text-gray-600 mb-4">
          While we offer unlimited usage, we implement rate limiting to prevent abuse and ensure service quality for all users.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="border border-gray-200 rounded-xl p-4">
            <h4 className="font-medium text-gray-900 mb-2">Submit Endpoint</h4>
            <p className="text-2xl font-bold text-indigo-600 mb-1">10 req/min</p>
            <p className="text-sm text-gray-600">Per IP address</p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h4 className="font-medium text-gray-900 mb-2">Management API</h4>
            <p className="text-2xl font-bold text-indigo-600 mb-1">100 req/min</p>
            <p className="text-sm text-gray-600">Per API key</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-amber-800 font-medium mb-1">Rate Limit Exceeded</p>
              <p className="text-sm text-amber-700">
                If you exceed the rate limit, you&apos;ll receive a <code className="bg-amber-100 px-1 rounded">429 Too Many Requests</code> response. 
                Wait a few minutes before retrying. These limits are generous and should accommodate most use cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Size Limits */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Request Size Limits</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
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
      </section>

      {/* Data Retention */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Retention</h2>
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-sm text-green-800">
            <strong>Unlimited Storage:</strong> Your form submissions are stored indefinitely. 
            We don&apos;t automatically delete old submissions. You can manually delete submissions 
            at any time via the dashboard or API.
          </p>
        </div>
      </section>



      {/* Best Practices */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h2>
        <div className="space-y-3">
          <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0">1</span>
            <div>
              <p className="font-medium text-gray-900">Cache API responses</p>
              <p className="text-sm text-gray-600">Cache form configurations and submission lists to reduce API calls</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0">2</span>
            <div>
              <p className="font-medium text-gray-900">Use pagination</p>
              <p className="text-sm text-gray-600">When fetching submissions, use the <code className="bg-gray-200 px-1 rounded">limit</code> parameter to fetch only what you need</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0">3</span>
            <div>
              <p className="font-medium text-gray-900">Implement client-side validation</p>
              <p className="text-sm text-gray-600">Validate form data before submitting to avoid unnecessary API calls</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
            <span className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0">4</span>
            <div>
              <p className="font-medium text-gray-900">Handle rate limits gracefully</p>
              <p className="text-sm text-gray-600">Implement exponential backoff when you receive 429 responses</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
