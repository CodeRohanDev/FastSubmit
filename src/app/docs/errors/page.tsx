export default function ErrorsPage() {
  const errorCodes = [
    {
      code: 200,
      status: 'OK',
      description: 'Request successful',
      color: 'green',
    },
    {
      code: 201,
      status: 'Created',
      description: 'Resource created successfully',
      color: 'green',
    },
    {
      code: 400,
      status: 'Bad Request',
      description: 'Invalid request body or missing required fields',
      color: 'yellow',
    },
    {
      code: 401,
      status: 'Unauthorized',
      description: 'Missing API key',
      color: 'yellow',
    },
    {
      code: 403,
      status: 'Forbidden',
      description: 'Invalid API key or insufficient permissions',
      color: 'red',
    },
    {
      code: 404,
      status: 'Not Found',
      description: 'Resource not found (form or submission)',
      color: 'red',
    },
    {
      code: 500,
      status: 'Internal Server Error',
      description: 'Server error - please try again or contact support',
      color: 'red',
    },
  ]

  const colorClasses: Record<string, string> = {
    green: 'bg-green-100 text-green-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    red: 'bg-red-100 text-red-700',
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Error Handling</h1>
      <p className="text-gray-600 mb-8">
        Learn how to handle errors from the FastSubmit API and troubleshoot common issues.
      </p>

      {/* Response Format */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Response Format</h2>
        <p className="text-gray-600 mb-4">
          All API responses follow a consistent JSON format:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Success Response</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
{`{
  "success": true,
  "data": { ... }
}`}
            </pre>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Error Response</h4>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
{`{
  "error": "Error message",
  "errors": ["Detail 1", "Detail 2"]
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* HTTP Status Codes */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">HTTP Status Codes</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
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
      </section>

      {/* Common Errors */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Common Errors</h2>

        <div className="space-y-4">
          {/* Missing API Key */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
              <span className="px-2 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-700">401</span>
              <span className="font-medium text-gray-900">Missing API Key</span>
            </div>
            <div className="p-4">
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm mb-3">
{`{
  "error": "API key required. Pass via x-api-key header or apiKey query param"
}`}
              </pre>
              <p className="text-sm text-gray-600">
                <strong>Solution:</strong> Include your API key in the <code className="bg-gray-100 px-1 rounded">x-api-key</code> header or as an <code className="bg-gray-100 px-1 rounded">apiKey</code> query parameter.
              </p>
            </div>
          </div>

          {/* Invalid API Key */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">403</span>
              <span className="font-medium text-gray-900">Invalid API Key</span>
            </div>
            <div className="p-4">
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm mb-3">
{`{
  "error": "Invalid API key"
}`}
              </pre>
              <p className="text-sm text-gray-600">
                <strong>Solution:</strong> Verify your API key is correct. You can find it in your form&apos;s settings page. If compromised, regenerate it.
              </p>
            </div>
          </div>

          {/* Form Not Found */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700">404</span>
              <span className="font-medium text-gray-900">Form Not Found</span>
            </div>
            <div className="p-4">
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm mb-3">
{`{
  "error": "Form not found"
}`}
              </pre>
              <p className="text-sm text-gray-600">
                <strong>Solution:</strong> Check that the form ID in your URL is correct. The form may have been deleted.
              </p>
            </div>
          </div>

          {/* Validation Failed */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
              <span className="px-2 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-700">400</span>
              <span className="font-medium text-gray-900">Validation Failed</span>
            </div>
            <div className="p-4">
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm mb-3">
{`{
  "error": "Validation failed",
  "errors": [
    "Email is required",
    "Name is required"
  ]
}`}
              </pre>
              <p className="text-sm text-gray-600">
                <strong>Solution:</strong> Ensure all required fields are included in your submission. Check the <code className="bg-gray-100 px-1 rounded">errors</code> array for specific missing fields.
              </p>
            </div>
          </div>

          {/* Invalid Field Type */}
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
              <span className="px-2 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-700">400</span>
              <span className="font-medium text-gray-900">Invalid Field Type</span>
            </div>
            <div className="p-4">
              <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-sm mb-3">
{`{
  "error": "Invalid field type: custom"
}`}
              </pre>
              <p className="text-sm text-gray-600">
                <strong>Solution:</strong> Use only supported field types: <code className="bg-gray-100 px-1 rounded">text</code>, <code className="bg-gray-100 px-1 rounded">email</code>, <code className="bg-gray-100 px-1 rounded">textarea</code>, <code className="bg-gray-100 px-1 rounded">number</code>, <code className="bg-gray-100 px-1 rounded">date</code>, <code className="bg-gray-100 px-1 rounded">select</code>, <code className="bg-gray-100 px-1 rounded">checkbox</code>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Error Handling Best Practices */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h2>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
          <ul className="space-y-3 text-sm text-indigo-800">
            <li className="flex gap-2">
              <span className="font-bold">1.</span>
              <span>Always check the <code className="bg-indigo-100 px-1 rounded">success</code> field in responses before processing data</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">2.</span>
              <span>Implement retry logic with exponential backoff for 5xx errors</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">3.</span>
              <span>Log error responses for debugging - include the full response body</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">4.</span>
              <span>Display user-friendly error messages, not raw API errors</span>
            </li>
            <li className="flex gap-2">
              <span className="font-bold">5.</span>
              <span>Validate form data client-side before submitting to reduce errors</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Example Error Handling */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Example Error Handling</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
{`async function submitForm(data) {
  try {
    const response = await fetch(
      'https://fastsubmit.hostspica.com/api/submit/YOUR_FORM_ID',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      // Handle specific error codes
      switch (response.status) {
        case 400:
          // Validation error
          console.error('Validation errors:', result.errors);
          return { success: false, message: 'Please fill in all required fields' };
        case 404:
          return { success: false, message: 'Form not found' };
        case 500:
          return { success: false, message: 'Server error. Please try again later.' };
        default:
          return { success: false, message: result.error || 'An error occurred' };
      }
    }

    return { success: true, message: 'Form submitted successfully!' };
  } catch (error) {
    // Network error
    console.error('Network error:', error);
    return { success: false, message: 'Network error. Please check your connection.' };
  }
}`}
        </pre>
      </section>
    </div>
  )
}
