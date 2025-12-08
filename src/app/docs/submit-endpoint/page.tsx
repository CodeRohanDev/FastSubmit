export default function SubmitEndpointPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Submit Endpoint</h1>
      <p className="text-gray-600 mb-8">
        The submit endpoint is the public URL where your forms send data. No authentication required.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-green-800">
          <strong>Public Endpoint:</strong> This endpoint does not require authentication and can be called from any website.
        </p>
      </div>

      {/* Endpoint */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Submit Form Data</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex items-center gap-3 p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-700">POST</span>
            <code className="text-sm font-mono">https://fastsubmit.hostspica.com/api/submit/:formId</code>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-4">
              Accepts form submissions and stores them in your FastSubmit dashboard.
            </p>
            
            <h4 className="font-medium text-gray-900 mb-2">Content Types</h4>
            <p className="text-gray-600 mb-4">The endpoint accepts two content types:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li><code className="bg-gray-100 px-1.5 py-0.5 rounded">application/json</code> - For JavaScript/AJAX submissions</li>
              <li><code className="bg-gray-100 px-1.5 py-0.5 rounded">application/x-www-form-urlencoded</code> - For standard HTML forms</li>
            </ul>

            <h4 className="font-medium text-gray-900 mb-2">Request Body</h4>
            <p className="text-gray-600 mb-4">
              Send your form fields as key-value pairs. Field names must match the field IDs configured in your form.
            </p>
          </div>
        </div>
      </section>

      {/* HTML Form Example */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">HTML Form Example</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm mb-4">
{`<form action="https://fastsubmit.hostspica.com/api/submit/YOUR_FORM_ID" method="POST">
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
  
  <!-- Honeypot field for spam protection -->
  <input type="text" name="_honeypot" style="display:none" tabindex="-1" autocomplete="off" />
  
  <button type="submit">Submit</button>
</form>`}
        </pre>
      </section>

      {/* JavaScript Example */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">JavaScript Example</h2>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm mb-4">
{`// Using fetch API
const formData = {
  name: "John Doe",
  email: "john@example.com",
  message: "Hello from JavaScript!"
};

fetch("https://fastsubmit.hostspica.com/api/submit/YOUR_FORM_ID", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    console.log("Form submitted successfully!");
  } else {
    console.error("Error:", data.error);
  }
})
.catch(error => console.error("Network error:", error));`}
        </pre>
      </section>

      {/* Response */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Response</h2>
        
        <h4 className="font-medium text-gray-900 mb-2">Success Response (200)</h4>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm mb-4">
{`{
  "success": true,
  "message": "Submission received"
}`}
        </pre>

        <h4 className="font-medium text-gray-900 mb-2">Validation Error (400)</h4>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm mb-4">
{`{
  "error": "Validation failed",
  "errors": [
    "Email is required",
    "Name is required"
  ]
}`}
        </pre>

        <h4 className="font-medium text-gray-900 mb-2">Form Not Found (404)</h4>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
{`{
  "error": "Form not found"
}`}
        </pre>
      </section>

      {/* Spam Protection */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Spam Protection</h2>
        <p className="text-gray-600 mb-4">
          FastSubmit includes built-in honeypot spam protection. Add a hidden field named <code className="bg-gray-100 px-1.5 py-0.5 rounded">_honeypot</code> to your form:
        </p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm mb-4">
{`<!-- Add this hidden field to your form -->
<input 
  type="text" 
  name="_honeypot" 
  style="display:none" 
  tabindex="-1" 
  autocomplete="off" 
/>`}
        </pre>
        <p className="text-gray-600">
          Bots typically fill in all form fields, including hidden ones. If the <code className="bg-gray-100 px-1.5 py-0.5 rounded">_honeypot</code> field contains any value, the submission is silently rejected.
        </p>
      </section>

      {/* Redirect After Submit */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Redirect After Submit</h2>
        <p className="text-gray-600 mb-4">
          For standard HTML forms, users are automatically redirected back to the referring page after submission. 
          For AJAX submissions, you handle the response in your JavaScript code.
        </p>
      </section>

      {/* CORS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">CORS</h2>
        <p className="text-gray-600">
          The submit endpoint has CORS enabled, allowing submissions from any origin. This means you can submit forms from any website without CORS errors.
        </p>
      </section>
    </div>
  )
}
