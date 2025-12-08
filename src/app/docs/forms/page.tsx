import { Copy } from 'lucide-react'

export default function FormsApiPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Forms API</h1>
      <p className="text-gray-600 mb-8">
        Manage your forms programmatically using the REST API.
      </p>

      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-8">
        <p className="text-sm text-indigo-800">
          <strong>Base URL:</strong>{' '}
          <code className="bg-indigo-100 px-2 py-0.5 rounded">https://fastsubmit.hostspica.com/api/v1</code>
        </p>
      </div>

      {/* List Forms */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">List All Forms</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700">GET</span>
            <code className="text-sm font-mono">/forms</code>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-4">Returns a list of all forms belonging to the authenticated user.</p>
            
            <h4 className="font-medium text-gray-900 mb-2">Example Request</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-4">
{`curl -X GET \\
  https://fastsubmit.hostspica.com/api/v1/forms \\
  -H "x-api-key: YOUR_API_KEY"`}
            </pre>

            <h4 className="font-medium text-gray-900 mb-2">Response</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "success": true,
  "count": 2,
  "forms": [
    {
      "id": "abc123",
      "name": "Contact Form",
      "fieldsCount": 3,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    },
    {
      "id": "def456",
      "name": "Newsletter Signup",
      "fieldsCount": 1,
      "createdAt": "2024-01-14T08:00:00.000Z",
      "updatedAt": "2024-01-14T08:00:00.000Z"
    }
  ]
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Get Form */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Get Form Details</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700">GET</span>
            <code className="text-sm font-mono">/forms/:formId</code>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-4">Returns detailed information about a specific form including all field configurations.</p>
            
            <h4 className="font-medium text-gray-900 mb-2">Path Parameters</h4>
            <table className="w-full text-sm mb-4">
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

            <h4 className="font-medium text-gray-900 mb-2">Response</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "success": true,
  "form": {
    "id": "abc123",
    "name": "Contact Form",
    "fields": [
      {
        "id": "name",
        "label": "Name",
        "type": "text",
        "required": true,
        "placeholder": "Your name"
      },
      {
        "id": "email",
        "label": "Email",
        "type": "email",
        "required": true
      }
    ],
    "endpoint": "https://fastsubmit.hostspica.com/api/submit/abc123",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Create Form */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Create Form</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-700">POST</span>
            <code className="text-sm font-mono">/forms</code>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-4">Creates a new form with the specified fields.</p>
            
            <h4 className="font-medium text-gray-900 mb-2">Request Body</h4>
            <table className="w-full text-sm mb-4">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-3 py-2 font-medium text-gray-600">Field</th>
                  <th className="text-left px-3 py-2 font-medium text-gray-600">Type</th>
                  <th className="text-left px-3 py-2 font-medium text-gray-600">Required</th>
                  <th className="text-left px-3 py-2 font-medium text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-3 py-2 font-mono text-indigo-600">name</td>
                  <td className="px-3 py-2 text-gray-600">string</td>
                  <td className="px-3 py-2"><span className="text-red-600">Yes</span></td>
                  <td className="px-3 py-2 text-gray-600">Form name</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2 font-mono text-indigo-600">fields</td>
                  <td className="px-3 py-2 text-gray-600">array</td>
                  <td className="px-3 py-2"><span className="text-red-600">Yes</span></td>
                  <td className="px-3 py-2 text-gray-600">Array of field objects</td>
                </tr>
              </tbody>
            </table>

            <h4 className="font-medium text-gray-900 mb-2">Field Object</h4>
            <pre className="bg-gray-100 p-3 rounded-lg text-sm mb-4">
{`{
  "id": "email",           // Unique field identifier
  "label": "Email",        // Display label
  "type": "email",         // text, email, textarea, number, date, select, checkbox
  "required": true,        // Is field required?
  "placeholder": "...",    // Optional placeholder text
  "options": ["A", "B"]    // Required for select type
}`}
            </pre>

            <h4 className="font-medium text-gray-900 mb-2">Example Request</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X POST \\
  https://fastsubmit.hostspica.com/api/v1/forms \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Contact Form",
    "fields": [
      {"id": "name", "label": "Name", "type": "text", "required": true},
      {"id": "email", "label": "Email", "type": "email", "required": true},
      {"id": "message", "label": "Message", "type": "textarea", "required": false}
    ]
  }'`}
            </pre>
          </div>
        </div>
      </section>

      {/* Update Form */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Update Form</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-700">PUT</span>
            <code className="text-sm font-mono">/forms/:formId</code>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-4">Updates an existing form. You can update the name, fields, or both.</p>
            
            <h4 className="font-medium text-gray-900 mb-2">Example Request</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X PUT \\
  https://fastsubmit.hostspica.com/api/v1/forms/abc123 \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Updated Form Name"}'`}
            </pre>
          </div>
        </div>
      </section>

      {/* Delete Form */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Delete Form</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">DELETE</span>
            <code className="text-sm font-mono">/forms/:formId</code>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-4">Permanently deletes a form and all its submissions.</p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-red-700">
                <strong>Warning:</strong> This action cannot be undone. All submissions will be permanently deleted.
              </p>
            </div>

            <h4 className="font-medium text-gray-900 mb-2">Example Request</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X DELETE \\
  https://fastsubmit.hostspica.com/api/v1/forms/abc123 \\
  -H "x-api-key: YOUR_API_KEY"`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}
