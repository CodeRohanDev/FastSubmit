export default function SubmissionsApiPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Submissions API</h1>
      <p className="text-gray-600 mb-8">
        Retrieve and manage form submissions via the REST API.
      </p>

      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-8">
        <p className="text-sm text-indigo-800">
          <strong>Base URL:</strong>{' '}
          <code className="bg-indigo-100 px-2 py-0.5 rounded">https://fastsubmit.hostspica.com/api/v1</code>
        </p>
      </div>

      {/* List Submissions */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">List Submissions</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700">GET</span>
            <code className="text-sm font-mono">/forms/:formId/submissions</code>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-4">Returns all submissions for a specific form.</p>
            
            <h4 className="font-medium text-gray-900 mb-2">Query Parameters</h4>
            <table className="w-full text-sm mb-4">
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
                  <td className="px-3 py-2 text-gray-600">Response format: <code className="bg-gray-100 px-1 rounded">json</code> or <code className="bg-gray-100 px-1 rounded">csv</code></td>
                </tr>
              </tbody>
            </table>

            <h4 className="font-medium text-gray-900 mb-2">Example Request</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-4">
{`curl -X GET \\
  "https://fastsubmit.hostspica.com/api/v1/forms/abc123/submissions?limit=50" \\
  -H "x-api-key: YOUR_API_KEY"`}
            </pre>

            <h4 className="font-medium text-gray-900 mb-2">Response</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "success": true,
  "formId": "abc123",
  "formName": "Contact Form",
  "count": 2,
  "submissions": [
    {
      "id": "sub_001",
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Hello!",
      "_meta": {
        "submittedAt": "2024-01-15T14:30:00.000Z",
        "userIP": "192.168.1.1",
        "userAgent": "Mozilla/5.0..."
      }
    },
    {
      "id": "sub_002",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "message": "Hi there!",
      "_meta": {
        "submittedAt": "2024-01-15T12:00:00.000Z",
        "userIP": "192.168.1.2",
        "userAgent": "Mozilla/5.0..."
      }
    }
  ]
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Export CSV */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Export as CSV</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700">GET</span>
            <code className="text-sm font-mono">/forms/:formId/submissions?format=csv</code>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-4">Export all submissions as a CSV file for use in spreadsheets.</p>
            
            <h4 className="font-medium text-gray-900 mb-2">Example Request</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm mb-4">
{`curl -X GET \\
  "https://fastsubmit.hostspica.com/api/v1/forms/abc123/submissions?format=csv" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -o submissions.csv`}
            </pre>

            <h4 className="font-medium text-gray-900 mb-2">Response</h4>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`name,email,message,submittedAt
John Doe,john@example.com,Hello!,2024-01-15T14:30:00.000Z
Jane Smith,jane@example.com,Hi there!,2024-01-15T12:00:00.000Z`}
            </pre>
          </div>
        </div>
      </section>

      {/* Get Single Submission */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Get Single Submission</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700">GET</span>
            <code className="text-sm font-mono">/forms/:formId/submissions/:submissionId</code>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-4">Retrieve a specific submission by its ID.</p>
            
            <h4 className="font-medium text-gray-900 mb-2">Example Request</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X GET \\
  https://fastsubmit.hostspica.com/api/v1/forms/abc123/submissions/sub_001 \\
  -H "x-api-key: YOUR_API_KEY"`}
            </pre>
          </div>
        </div>
      </section>

      {/* Delete Submission */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Delete Submission</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">DELETE</span>
            <code className="text-sm font-mono">/forms/:formId/submissions/:submissionId</code>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-4">Delete a specific submission.</p>
            
            <h4 className="font-medium text-gray-900 mb-2">Example Request</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X DELETE \\
  https://fastsubmit.hostspica.com/api/v1/forms/abc123/submissions/sub_001 \\
  -H "x-api-key: YOUR_API_KEY"`}
            </pre>
          </div>
        </div>
      </section>

      {/* Delete All Submissions */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Delete All Submissions</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">DELETE</span>
            <code className="text-sm font-mono">/forms/:formId/submissions</code>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-4">Delete all submissions for a form.</p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-red-700">
                <strong>Warning:</strong> This will permanently delete all submissions. This action cannot be undone.
              </p>
            </div>

            <h4 className="font-medium text-gray-900 mb-2">Example Request</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X DELETE \\
  https://fastsubmit.hostspica.com/api/v1/forms/abc123/submissions \\
  -H "x-api-key: YOUR_API_KEY"`}
            </pre>

            <h4 className="font-medium text-gray-900 mb-2">Response</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "success": true,
  "message": "Submissions deleted",
  "deleted": 42
}`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}
