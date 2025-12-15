import GoogleAnalytics from '@/components/GoogleAnalytics'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Error Handling - Free Form API | FastSubmit',
  description: 'Learn how to handle errors from FastSubmit free form API. Error codes, troubleshooting, best practices. Best free form builder API.',
  keywords: ['form api errors', 'free form api', 'form api free', 'error handling', 'form builder api', 'api troubleshooting'],
}

export default function ErrorsPage() {
  const errorCodes = [
    { code: 200, status: 'OK', description: 'Request successful', color: 'green' },
    { code: 201, status: 'Created', description: 'Resource created successfully', color: 'green' },
    { code: 400, status: 'Bad Request', description: 'Invalid request body or missing required fields', color: 'yellow' },
    { code: 401, status: 'Unauthorized', description: 'Missing API key', color: 'yellow' },
    { code: 403, status: 'Forbidden', description: 'Invalid API key or insufficient permissions', color: 'red' },
    { code: 404, status: 'Not Found', description: 'Resource not found (form or submission)', color: 'red' },
    { code: 500, status: 'Internal Server Error', description: 'Server error - please try again or contact support', color: 'red' },
  ]

  const colorClasses: Record<string, string> = {
    green: 'bg-green-100 text-green-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    red: 'bg-red-100 text-red-700',
  }

  return (
    <>
    <GoogleAnalytics />
    <div className="min-w-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Error Handling</h1>
      <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        Learn how to handle errors from the FastSubmit API and troubleshoot common issues.
      </p>

      {/* Response Format */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Response Format</h2>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          All API responses follow a consistent JSON format:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Success Response</h4>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`{
  "success": true,
  "data": { ... }
}`}</code>
              </pre>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Error Response</h4>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`{
  "error": "Error message",
  "errors": ["Detail 1"]
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* HTTP Status Codes */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">HTTP Status Codes</h2>
        {/* Mobile: Card layout */}
        <div className="sm:hidden space-y-2">
          {errorCodes.map((err) => (
            <div key={err.code} className="border border-gray-200 rounded-lg p-3 flex items-start gap-3">
              <span className={`px-2 py-1 rounded font-mono text-xs font-bold shrink-0 ${colorClasses[err.color]}`}>
                {err.code}
              </span>
              <div className="min-w-0">
                <p className="font-medium text-gray-900 text-sm">{err.status}</p>
                <p className="text-gray-600 text-xs">{err.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Desktop: Table */}
        <div className="hidden sm:block border border-gray-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Code</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody>
                {errorCodes.map((err) => (
                  <tr key={err.code} className="border-t">
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded font-mono text-xs font-bold ${colorClasses[err.color]}`}>
                        {err.code}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900">{err.status}</td>
                    <td className="px-4 py-3 text-gray-600">{err.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Common Errors */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Common Errors</h2>

        <div className="space-y-3 sm:space-y-4">
          {/* Missing API Key */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
              <span className="px-2 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-700 self-start">401</span>
              <span className="font-medium text-gray-900 text-sm sm:text-base">Missing API Key</span>
            </div>
            <div className="p-3 sm:p-4">
              <div className="bg-gray-900 rounded-lg overflow-hidden mb-3">
                <pre className="p-3 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                  <code className="text-gray-100 whitespace-pre">{`{
  "error": "API key required. Pass via x-api-key header or apiKey query param"
}`}</code>
                </pre>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                <strong>Solution:</strong> Include your API key in the <code className="bg-gray-100 px-1 rounded">x-api-key</code> header.
              </p>
            </div>
          </div>

          {/* Invalid API Key */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700 self-start">403</span>
              <span className="font-medium text-gray-900 text-sm sm:text-base">Invalid API Key</span>
            </div>
            <div className="p-3 sm:p-4">
              <div className="bg-gray-900 rounded-lg overflow-hidden mb-3">
                <pre className="p-3 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                  <code className="text-gray-100 whitespace-pre">{`{
  "error": "Invalid API key"
}`}</code>
                </pre>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                <strong>Solution:</strong> Verify your API key is correct. You can find it in your form&apos;s settings page.
              </p>
            </div>
          </div>

          {/* Validation Failed */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
              <span className="px-2 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-700 self-start">400</span>
              <span className="font-medium text-gray-900 text-sm sm:text-base">Validation Failed</span>
            </div>
            <div className="p-3 sm:p-4">
              <div className="bg-gray-900 rounded-lg overflow-hidden mb-3">
                <pre className="p-3 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                  <code className="text-gray-100 whitespace-pre">{`{
  "error": "Validation failed",
  "errors": ["Email is required", "Name is required"]
}`}</code>
                </pre>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                <strong>Solution:</strong> Ensure all required fields are included. Check the <code className="bg-gray-100 px-1 rounded">errors</code> array for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Error Handling Best Practices */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Best Practices</h2>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 sm:p-5">
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-indigo-800">
            <li className="flex gap-2">
              <span className="font-bold shrink-0">1.</span>
              <span>Always check the <code className="bg-indigo-100 px-1 rounded">success</code> field in responses before processing data</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold shrink-0">2.</span>
              <span>Implement retry logic with exponential backoff for 5xx errors</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold shrink-0">3.</span>
              <span>Log error responses for debugging - include the full response body</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold shrink-0">4.</span>
              <span>Display user-friendly error messages, not raw API errors</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold shrink-0">5.</span>
              <span>Validate form data client-side before submitting to reduce errors</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Example Error Handling */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Example Error Handling</h2>
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
            <code className="text-gray-100 whitespace-pre">{`async function submitForm(data) {
  try {
    const response = await fetch(
      'https://fastsubmit.cloud/api/submit/YOUR_FORM_ID',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      switch (response.status) {
        case 400:
          console.error('Validation errors:', result.errors);
          return { success: false, message: 'Please fill in all required fields' };
        case 404:
          return { success: false, message: 'Form not found' };
        default:
          return { success: false, message: result.error || 'An error occurred' };
      }
    }

    return { success: true, message: 'Form submitted successfully!' };
  } catch (error) {
    return { success: false, message: 'Network error. Please check your connection.' };
  }
}`}</code>
          </pre>
        </div>
      </section>
    </div>
    </>
  )
}
