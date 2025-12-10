import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forms API - Create Forms Programmatically | FastSubmit',
  description: 'Manage forms via REST API. Create, update, delete forms programmatically. Best free form API. Better than Google Form API.',
  keywords: ['forms api', 'form api', 'free form api', 'create forms api', 'form builder api', 'google form api alternative', 'rest api forms'],
}

export default function FormsApiPage() {
  return (
    <div className="min-w-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Forms API</h1>
      <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        Manage your forms programmatically using the REST API.
      </p>

      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 sm:p-4 mb-6 sm:mb-8 overflow-hidden">
        <p className="text-xs sm:text-sm text-indigo-800">
          <strong>Base URL:</strong>{' '}
          <code className="bg-indigo-100 px-2 py-0.5 rounded text-[10px] sm:text-xs break-all">https://fastsubmit.hostspica.com/api/v1</code>
        </p>
      </div>

      {/* List Forms */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">List All Forms</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 self-start">GET</span>
            <code className="text-xs sm:text-sm font-mono break-all">/forms</code>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Returns a list of all forms belonging to the authenticated user.</p>
            
            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Example Request</h4>
            <div className="bg-gray-900 rounded-lg overflow-hidden mb-3 sm:mb-4">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`curl -X GET \\
  https://fastsubmit.hostspica.com/api/v1/forms \\
  -H "x-api-key: YOUR_API_KEY"`}</code>
              </pre>
            </div>

            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Response</h4>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`{
  "success": true,
  "count": 2,
  "forms": [
    {
      "id": "abc123",
      "name": "Contact Form",
      "fieldsCount": 3,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ]
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Get Form */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Get Form Details</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 self-start">GET</span>
            <code className="text-xs sm:text-sm font-mono break-all">/forms/:formId</code>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Returns detailed information about a specific form including all field configurations.</p>
            
            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Path Parameters</h4>
            {/* Mobile: Card layout */}
            <div className="sm:hidden mb-3 p-3 bg-gray-50 rounded-lg">
              <code className="text-indigo-600 font-mono text-xs">formId</code>
              <span className="text-gray-500 text-xs ml-2">(string)</span>
              <p className="text-gray-600 text-xs mt-1">The unique form identifier</p>
            </div>
            {/* Desktop: Table */}
            <div className="hidden sm:block overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-3 py-2 font-medium text-gray-600">Parameter</th>
                    <th className="text-left px-3 py-2 font-medium text-gray-600">Type</th>
                    <th className="text-left px-3 py-2 font-medium text-gray-600">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-3 py-2 font-mono text-indigo-600">formId</td>
                    <td className="px-3 py-2 text-gray-600">string</td>
                    <td className="px-3 py-2 text-gray-600">The unique form identifier</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Response</h4>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`{
  "success": true,
  "form": {
    "id": "abc123",
    "name": "Contact Form",
    "fields": [
      {
        "id": "name",
        "label": "Name",
        "type": "text",
        "required": true
      }
    ],
    "endpoint": "https://fastsubmit.hostspica.com/api/submit/abc123"
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Create Form */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Create Form</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-700 self-start">POST</span>
            <code className="text-xs sm:text-sm font-mono break-all">/forms</code>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Creates a new form with the specified fields.</p>
            
            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Field Object</h4>
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-3 sm:mb-4">
              <pre className="p-3 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-800 whitespace-pre">{`{
  "id": "email",
  "label": "Email",
  "type": "email",
  "required": true,
  "placeholder": "..."
}`}</code>
              </pre>
            </div>

            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Example Request</h4>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`curl -X POST \\
  https://fastsubmit.hostspica.com/api/v1/forms \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Contact Form",
    "fields": [
      {"id": "name", "label": "Name", "type": "text", "required": true},
      {"id": "email", "label": "Email", "type": "email", "required": true}
    ]
  }'`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Update Form */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Update Form</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-700 self-start">PUT</span>
            <code className="text-xs sm:text-sm font-mono break-all">/forms/:formId</code>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Updates an existing form. You can update the name, fields, or both.</p>
            
            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Example Request</h4>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`curl -X PUT \\
  https://fastsubmit.hostspica.com/api/v1/forms/abc123 \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Updated Form Name"}'`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Delete Form */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Delete Form</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700 self-start">DELETE</span>
            <code className="text-xs sm:text-sm font-mono break-all">/forms/:formId</code>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Permanently deletes a form and all its submissions.</p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm text-red-700">
                <strong>Warning:</strong> This action cannot be undone. All submissions will be permanently deleted.
              </p>
            </div>

            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Example Request</h4>
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
                <code className="text-gray-100 whitespace-pre">{`curl -X DELETE \\
  https://fastsubmit.hostspica.com/api/v1/forms/abc123 \\
  -H "x-api-key: YOUR_API_KEY"`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
