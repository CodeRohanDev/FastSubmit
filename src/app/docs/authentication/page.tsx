import GoogleAnalytics from '@/components/GoogleAnalytics'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Authentication - Free Form API | FastSubmit',
  description: 'Learn how to authenticate with FastSubmit free form API. API keys, secure authentication. Best free form API alternative to Google Forms.',
  keywords: ['form api authentication', 'free form api', 'form api free', 'api key', 'form builder api', 'google form api alternative'],
}

export default function AuthenticationPage() {
  return (
    <>
    <GoogleAnalytics />
    <div className="min-w-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Authentication</h1>
      <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        Learn how to authenticate your API requests to FastSubmit.
      </p>

      {/* API Key */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">API Key Authentication</h2>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          All API requests (except the public submit endpoint) require authentication using an API key. 
          Each form has its own unique API key that you can find in your dashboard.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm text-amber-800">
            <strong>Important:</strong> Keep your API key secret. Never expose it in client-side code or public repositories.
          </p>
        </div>
      </section>

      {/* How to Authenticate */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">How to Authenticate</h2>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          You can pass your API key in two ways:
        </p>

        <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">1. HTTP Header (Recommended)</h4>
        <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">
          Pass the API key in the <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs sm:text-sm">x-api-key</code> header:
        </p>
        <div className="bg-gray-900 rounded-xl overflow-hidden mb-4 sm:mb-6">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
            <code className="text-gray-100 whitespace-pre">{`curl -X GET \\
  https://fastsubmit.cloud/api/v1/forms \\
  -H "x-api-key: fs_abc123xyz789..."`}</code>
          </pre>
        </div>

        <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">2. Query Parameter</h4>
        <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">
          Pass the API key as a query parameter (useful for quick testing):
        </p>
        <div className="bg-gray-900 rounded-xl overflow-hidden mb-3 sm:mb-4">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
            <code className="text-gray-100 whitespace-pre">{`curl -X GET \\
  "https://fastsubmit.cloud/api/v1/forms?apiKey=fs_abc123xyz789..."`}</code>
          </pre>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">
          Note: Using query parameters may expose your API key in server logs. Use headers for production.
        </p>
      </section>

      {/* Finding Your API Key */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Finding Your API Key</h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2 text-sm sm:text-base">
          <li>Log in to your FastSubmit dashboard</li>
          <li>Navigate to <strong>Forms</strong></li>
          <li>Click on the form you want to access</li>
          <li>Your API key is displayed on the form detail page</li>
        </ol>
      </section>

      {/* Regenerating API Key */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Regenerating Your API Key</h2>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          If your API key is compromised, you can regenerate it:
        </p>
        <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-3 sm:mb-4 text-sm sm:text-base">
          <li>Go to your form&apos;s settings page</li>
          <li>Click <strong>Regenerate</strong> next to the API key</li>
          <li>Confirm the action</li>
        </ol>
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 sm:p-4">
          <p className="text-xs sm:text-sm text-red-700">
            <strong>Warning:</strong> Regenerating your API key will immediately invalidate the old key. 
            Update your applications with the new key to avoid service interruption.
          </p>
        </div>
      </section>

      {/* Error Responses */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Authentication Errors</h2>
        
        <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Missing API Key (401)</h4>
        <div className="bg-gray-900 rounded-xl overflow-hidden mb-3 sm:mb-4">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
            <code className="text-gray-100 whitespace-pre">{`{
  "error": "API key required. Pass via x-api-key header or apiKey query param"
}`}</code>
          </pre>
        </div>

        <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Invalid API Key (403)</h4>
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
            <code className="text-gray-100 whitespace-pre">{`{
  "error": "Invalid API key"
}`}</code>
          </pre>
        </div>
      </section>

      {/* Public vs Private Endpoints */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Public vs Private Endpoints</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="border border-green-200 rounded-xl p-3 sm:p-4 bg-green-50">
            <h4 className="font-medium text-green-800 mb-2 text-sm sm:text-base">Public (No Auth Required)</h4>
            <ul className="text-xs sm:text-sm text-green-700 space-y-1">
              <li>• <code className="bg-green-100 px-1 rounded text-[10px] sm:text-xs">POST /api/submit/:formId</code></li>
            </ul>
            <p className="text-[10px] sm:text-xs text-green-600 mt-2">Used by your website visitors to submit forms</p>
          </div>
          
          <div className="border border-indigo-200 rounded-xl p-3 sm:p-4 bg-indigo-50">
            <h4 className="font-medium text-indigo-800 mb-2 text-sm sm:text-base">Private (Auth Required)</h4>
            <ul className="text-xs sm:text-sm text-indigo-700 space-y-1">
              <li>• <code className="bg-indigo-100 px-1 rounded text-[10px] sm:text-xs">GET /api/v1/forms</code></li>
              <li>• <code className="bg-indigo-100 px-1 rounded text-[10px] sm:text-xs">POST /api/v1/forms</code></li>
              <li>• <code className="bg-indigo-100 px-1 rounded text-[10px] sm:text-xs">GET /api/v1/forms/:id</code></li>
              <li>• <code className="bg-indigo-100 px-1 rounded text-[10px] sm:text-xs">PUT /api/v1/forms/:id</code></li>
              <li>• <code className="bg-indigo-100 px-1 rounded text-[10px] sm:text-xs">DELETE /api/v1/forms/:id</code></li>
              <li>• All <code className="bg-indigo-100 px-1 rounded text-[10px] sm:text-xs">/submissions</code> endpoints</li>
            </ul>
            <p className="text-[10px] sm:text-xs text-indigo-600 mt-2">Used by you to manage forms and view submissions</p>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
