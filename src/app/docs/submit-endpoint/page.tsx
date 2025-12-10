import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Submit Endpoint - Free Form API | FastSubmit',
  description: 'Learn how to submit forms using FastSubmit free form API. Public endpoint, no authentication required. Best free form builder.',
  keywords: ['form submit api', 'free form api', 'form api free', 'form endpoint', 'form builder api', 'online form builder'],
}

export default function SubmitEndpointPage() {
  return (
    <div className="min-w-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Submit Endpoint</h1>
      <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        The submit endpoint is the public URL where your forms send data. No authentication required.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-xl p-3 sm:p-4 mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm text-green-800">
          <strong>Public Endpoint:</strong> This endpoint does not require authentication and can be called from any website.
        </p>
      </div>

      {/* Endpoint */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Submit Form Data</h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-700 self-start">POST</span>
            <code className="text-xs sm:text-sm font-mono break-all">https://fastsubmit.hostspica.com/api/submit/:formId</code>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              Accepts form submissions and stores them in your FastSubmit dashboard.
            </p>
            
            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Content Types</h4>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">The endpoint accepts two content types:</p>
            <ul className="list-disc list-inside text-gray-600 mb-3 sm:mb-4 space-y-1 text-sm sm:text-base">
              <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs sm:text-sm">application/json</code> - For JavaScript/AJAX submissions</li>
              <li><code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs sm:text-sm">application/x-www-form-urlencoded</code> - For standard HTML forms</li>
            </ul>

            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Request Body</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Send your form fields as key-value pairs. Field names must match the field IDs configured in your form.
            </p>
          </div>
        </div>
      </section>

      {/* HTML Form Example */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">HTML Form Example</h2>
        <div className="bg-gray-900 rounded-xl overflow-hidden mb-3 sm:mb-4">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
            <code className="text-gray-100 whitespace-pre">{`<form action="https://fastsubmit.hostspica.com/api/submit/YOUR_FORM_ID" method="POST">
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
</form>`}</code>
          </pre>
        </div>
      </section>

      {/* JavaScript Example */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">JavaScript Example</h2>
        <div className="bg-gray-900 rounded-xl overflow-hidden mb-3 sm:mb-4">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
            <code className="text-gray-100 whitespace-pre">{`// Using fetch API
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
.catch(error => console.error("Network error:", error));`}</code>
          </pre>
        </div>
      </section>

      {/* Response */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Response</h2>
        
        <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Success Response (200)</h4>
        <div className="bg-gray-900 rounded-xl overflow-hidden mb-3 sm:mb-4">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
            <code className="text-gray-100 whitespace-pre">{`{
  "success": true,
  "message": "Submission received"
}`}</code>
          </pre>
        </div>

        <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Validation Error (400)</h4>
        <div className="bg-gray-900 rounded-xl overflow-hidden mb-3 sm:mb-4">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
            <code className="text-gray-100 whitespace-pre">{`{
  "error": "Validation failed",
  "errors": [
    "Email is required",
    "Name is required"
  ]
}`}</code>
          </pre>
        </div>

        <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Form Not Found (404)</h4>
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
            <code className="text-gray-100 whitespace-pre">{`{
  "error": "Form not found"
}`}</code>
          </pre>
        </div>
      </section>

      {/* Spam Protection */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Spam Protection</h2>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          FastSubmit includes built-in honeypot spam protection. Add a hidden field named <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs sm:text-sm">_honeypot</code> to your form:
        </p>
        <div className="bg-gray-900 rounded-xl overflow-hidden mb-3 sm:mb-4">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
            <code className="text-gray-100 whitespace-pre">{`<!-- Add this hidden field to your form -->
<input 
  type="text" 
  name="_honeypot" 
  style="display:none" 
  tabindex="-1" 
  autocomplete="off" 
/>`}</code>
          </pre>
        </div>
        <p className="text-gray-600 text-sm sm:text-base">
          Bots typically fill in all form fields, including hidden ones. If the <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs sm:text-sm">_honeypot</code> field contains any value, the submission is silently rejected.
        </p>
      </section>

      {/* Redirect After Submit */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Redirect After Submit</h2>
        <p className="text-gray-600 text-sm sm:text-base">
          For standard HTML forms, users are automatically redirected back to the referring page after submission. 
          For AJAX submissions, you handle the response in your JavaScript code.
        </p>
      </section>

      {/* CORS */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">CORS</h2>
        <p className="text-gray-600 text-sm sm:text-base">
          The submit endpoint has CORS enabled, allowing submissions from any origin. This means you can submit forms from any website without CORS errors.
        </p>
      </section>
    </div>
  )
}
