import GoogleAnalytics from '@/components/GoogleAnalytics'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Submissions API - Export to Excel/CSV | FastSubmit',
  description: 'Retrieve and export form submissions via API. Export to Excel, CSV, PDF. Best free form API with unlimited submissions.',
  keywords: ['submissions api', 'form to excel', 'form to csv', 'export submissions', 'free form api', 'form api free', 'form builder api'],
}

export default function SubmissionsApiPage() {
  return (
    <>
    <GoogleAnalytics />
    <div className="min-w-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Submissions API</h1>
      <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        Retrieve and manage form submissions via the REST API.
      </p>

      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 sm:p-4 mb-6 sm:mb-8 overflow-hidden">
        <p className="text-xs sm:text-sm text-indigo-800">
          <strong>Base URL:</strong>{' '}
          <code className="bg-indigo-100 px-2 py-0.5 rounded text-[10px] sm:text-xs break-all">https://fastsubmit.cloud/api/v1</code>
        </p>
      </div>

      {/* List Submissions */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">List Submissions</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 self-start">GET</span>
            <code className="text-xs sm:text-sm font-mono break-all">/forms/:formId/submissions</code>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Returns all submissions for a specific form.</p>
            
            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Query Parameters</h4>
            {/* Mobile: Card layout */}
            <div className="sm:hidden space-y-2 mb-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <code className="text-indigo-600 font-mono text-xs">limit</code>
                <span className="text-gray-500 text-xs ml-2">(number, default: 100)</span>
                <p className="text-gray-600 text-xs mt-1">Max submissions to return (max 1000)</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <code className="text-indigo-600 font-mono text-xs">format</code>
                <span className="text-gray-500 text-xs ml-2">(string, default: json)</span>
                <p className="text-gray-600 text-xs mt-1">Response format: json or csv</p>
              </div>
            </div>
            {/* Desktop: Table */}
            <div className="hidden sm:block overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-3 py-2 font-medium text-gray-600">Parameter</th>
                    <th className="text-left px-3 py-2 font-medium text-gray-600">Type</th>
                    <th className="text-left px-3 py-2 font-medium text-gray-600">Default</th>
                    <th className="text-left px-3 py-2 font-medium text-gray-600">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-3 py-2 font-mono text-indigo-600">limit</td>
                    <td className="px-3 py-2 text-gray-600">number</td>
                    <td className="px-3 py-2 text-gray-600">100</td>
                    <td className="px-3 py-2 text-gray-600">Max submissions to return (max 1000)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-2 font-mono text-indigo-600">format</td>
                    <td className="px-3 py-2 text-gray-600">string</td>
                    <td className="px-3 py-2 text-gray-600">json</td>
                    <td className="px-3 py-2 text-gray-600">Response format: json or csv</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Example Request</h4>
            <div className="bg-gray-900 rounded-lg overflow-hidden mb-3 sm:mb-4">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`curl -X GET \\
  "https://fastsubmit.cloud/api/v1/forms/abc123/submissions?limit=50" \\
  -H "x-api-key: YOUR_API_KEY"`}</code>
              </pre>
            </div>

            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Response</h4>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`{
  "success": true,
  "formId": "abc123",
  "formName": "Contact Form",
  "count": 2,
  "submissions": [
    {
      "id": "sub_001",
      "name": "John Doe",
      "email": "john@example.com",
      "_meta": {
        "submittedAt": "2024-01-15T14:30:00.000Z"
      }
    }
  ]
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Export CSV */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Export as CSV</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 self-start">GET</span>
            <code className="text-xs sm:text-sm font-mono break-all">/forms/:formId/submissions?format=csv</code>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Export all submissions as a CSV file for use in spreadsheets.</p>
            
            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Example Request</h4>
            <div className="bg-gray-900 rounded-lg overflow-hidden mb-3 sm:mb-4">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`curl -X GET \\
  "https://fastsubmit.cloud/api/v1/forms/abc123/submissions?format=csv" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -o submissions.csv`}</code>
              </pre>
            </div>

            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Response</h4>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-800 whitespace-pre">{`name,email,message,submittedAt
John Doe,john@example.com,Hello!,2024-01-15T14:30:00.000Z`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Get Single Submission */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Get Single Submission</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 self-start">GET</span>
            <code className="text-xs sm:text-sm font-mono break-all">/forms/:formId/submissions/:submissionId</code>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Retrieve a specific submission by its ID.</p>
            
            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Example Request</h4>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`curl -X GET \\
  https://fastsubmit.cloud/api/v1/forms/abc123/submissions/sub_001 \\
  -H "x-api-key: YOUR_API_KEY"`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Delete Submission */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Delete Submission</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700 self-start">DELETE</span>
            <code className="text-xs sm:text-sm font-mono break-all">/forms/:formId/submissions/:submissionId</code>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Delete a specific submission.</p>
            
            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Example Request</h4>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`curl -X DELETE \\
  https://fastsubmit.cloud/api/v1/forms/abc123/submissions/sub_001 \\
  -H "x-api-key: YOUR_API_KEY"`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Delete All Submissions */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Delete All Submissions</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700 self-start">DELETE</span>
            <code className="text-xs sm:text-sm font-mono break-all">/forms/:formId/submissions</code>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Delete all submissions for a form.</p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-red-700">
                <strong>Warning:</strong> This will permanently delete all submissions. This action cannot be undone.
              </p>
            </div>

            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Example Request</h4>
            <div className="bg-gray-900 rounded-lg overflow-hidden mb-3 sm:mb-4">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`curl -X DELETE \\
  https://fastsubmit.cloud/api/v1/forms/abc123/submissions \\
  -H "x-api-key: YOUR_API_KEY"`}</code>
              </pre>
            </div>

            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Response</h4>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`{
  "success": true,
  "message": "Submissions deleted",
  "deleted": 42
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
