import GoogleAnalytics from '@/components/GoogleAnalytics'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API Documentation - Free Form API | FastSubmit',
  description: 'Complete API documentation for FastSubmit free form builder. REST API, code examples, integration guides. Best free form API alternative to Google Forms.',
  keywords: ['form api', 'free form api', 'form api free', 'google form api', 'rest api forms', 'form builder api', 'form api documentation', 'free form builder', 'online form builder'],
}

export default function APIDocumentationPage() {
  return (
    <>
    <GoogleAnalytics />
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">API Documentation</h1>
      <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        Complete guide to integrating FastSubmit with your website or application.
      </p>

      {/* Overview */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Overview</h2>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          FastSubmit provides a simple REST API for collecting form submissions. No backend code required!
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4">
          <p className="text-sm text-blue-800">
            <strong>Public Endpoint:</strong> The form submission endpoint is public and doesn&apos;t require authentication. 
            Perfect for static websites, landing pages, and client-side applications.
          </p>
        </div>
      </section>

      {/* Submit Form Data */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Submit Form Data</h2>
        
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
            <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 self-start">POST</span>
            <code className="text-sm font-mono break-all sm:break-normal">/api/submit/:formId</code>
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              Submit form data to your FastSubmit form. Accepts both JSON and form-encoded data.
            </p>
            
            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Parameters</h4>
            <div className="mb-3 sm:mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 mb-2">
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono self-start">formId</code>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded self-start">required</span>
              </div>
              <p className="text-sm text-gray-600 sm:ml-20">Your unique form ID from the dashboard</p>
            </div>

            <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">Request Body</h4>
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              Send your form fields as key-value pairs. Field names must match your form configuration.
            </p>
          </div>
        </div>

        {/* HTML Example */}
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">HTML Form</h3>
        <div className="bg-gray-900 rounded-xl overflow-hidden mb-4 sm:mb-6">
          <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed text-gray-100">
{`<form action="https://yourapp.com/api/submit/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" placeholder="Your name" required />
  <input type="email" name="email" placeholder="your@email.com" required />
  <textarea name="message" placeholder="Your message"></textarea>
  
  <!-- Honeypot spam protection (keep hidden) -->
  <input type="text" name="_honeypot" style="display:none" />
  
  <button type="submit">Submit</button>
</form>`}
          </pre>
        </div>

        {/* JavaScript Example */}
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">JavaScript (Fetch API)</h3>
        <div className="bg-gray-900 rounded-xl overflow-hidden mb-4 sm:mb-6">
          <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed text-gray-100">
{`const formData = {
  name: "John Doe",
  email: "john@example.com",
  message: "Hello!"
};

fetch("https://yourapp.com/api/submit/YOUR_FORM_ID", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
  if (data.success) {
    alert("Form submitted successfully!");
  }
})
.catch(error => console.error("Error:", error));`}
          </pre>
        </div>

        {/* React Example */}
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">React Example</h3>
        <div className="bg-gray-900 rounded-xl overflow-hidden mb-4 sm:mb-6">
          <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed text-gray-100">
{`import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch(
        'https://yourapp.com/api/submit/YOUR_FORM_ID',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        placeholder="Email"
        required
      />
      <textarea
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        placeholder="Message"
      />
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Submit'}
      </button>
      {status === 'success' && <p>Thank you! We'll be in touch.</p>}
      {status === 'error' && <p>Oops! Something went wrong.</p>}
    </form>
  );
}`}
          </pre>
        </div>

        {/* cURL Example */}
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">cURL</h3>
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed text-gray-100">
{`curl -X POST https://yourapp.com/api/submit/YOUR_FORM_ID \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello from cURL!"
  }'`}
          </pre>
        </div>
      </section>

      {/* Responses */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Responses</h2>
        
        <div className="space-y-4 sm:space-y-6">
          {/* Success */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-3">
              <span className="px-2 py-1 rounded text-xs font-bold bg-green-100 text-green-700 self-start">200 OK</span>
              <h4 className="font-medium text-gray-900 text-sm sm:text-base">Success</h4>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed text-gray-100">
{`{
  "success": true,
  "message": "Submission received"
}`}
              </pre>
            </div>
          </div>

          {/* Validation Error */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-3">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700 self-start">400 Bad Request</span>
              <h4 className="font-medium text-gray-900 text-sm sm:text-base">Validation Error</h4>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed text-gray-100">
{`{
  "error": "Validation failed",
  "errors": [
    "Name is required",
    "Email is required"
  ]
}`}
              </pre>
            </div>
          </div>

          {/* Unauthorized Domain */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-3">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700 self-start">403 Forbidden</span>
              <h4 className="font-medium text-gray-900 text-sm sm:text-base">Unauthorized Domain</h4>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed text-gray-100">
{`{
  "error": "Domain not authorized. Please verify your domain in form settings."
}`}
              </pre>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              This error occurs when domain verification is enabled and the request comes from an unauthorized domain.
            </p>
          </div>

          {/* Form Not Found */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-3">
              <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-700 self-start">404 Not Found</span>
              <h4 className="font-medium text-gray-900 text-sm sm:text-base">Form Not Found</h4>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed text-gray-100">
{`{
  "error": "Form not found"
}`}
              </pre>
            </div>
          </div>

          {/* Rate Limit */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-3">
              <span className="px-2 py-1 rounded text-xs font-bold bg-orange-100 text-orange-700 self-start">429 Too Many Requests</span>
              <h4 className="font-medium text-gray-900 text-sm sm:text-base">Rate Limit Exceeded</h4>
            </div>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed text-gray-100">
{`{
  "error": "Too many submissions. Please try again later."
}`}
              </pre>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Rate limit: 10 submissions per minute per IP address.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Features</h2>
        
        <div className="space-y-4 sm:space-y-6">
          {/* Spam Protection */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">🛡️ Spam Protection</h3>
            <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">
              Add a hidden honeypot field to catch spam bots:
            </p>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm leading-relaxed text-gray-100">
{`<input 
  type="text" 
  name="_honeypot" 
  style="display:none" 
  tabindex="-1" 
  autocomplete="off" 
/>`}
              </pre>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              If this field is filled, the submission is silently rejected (returns success but doesn&apos;t save).
            </p>
          </div>

          {/* Domain Verification */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">🔒 Domain Verification</h3>
            <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">
              Restrict form submissions to verified domains only. Enable in your form settings and add DNS TXT records to verify domain ownership.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> Localhost and development domains (127.0.0.1, 192.168.x.x) bypass domain verification for testing.
              </p>
            </div>
          </div>

          {/* CORS */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">🌐 CORS Enabled</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              The submit endpoint has CORS enabled, allowing submissions from any origin. Perfect for static sites, SPAs, and cross-origin requests.
            </p>
          </div>

          {/* Rate Limiting */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">⏱️ Rate Limiting</h3>
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              To prevent abuse, submissions are rate limited:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base ml-4 sm:ml-0">
              <li>10 submissions per minute per IP address</li>
              <li>Rate limit headers included in response</li>
              <li>Automatic reset after time window</li>
            </ul>
          </div>

          {/* Field Validation */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">✅ Field Validation</h3>
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              FastSubmit validates submissions based on your form configuration:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm sm:text-base ml-4 sm:ml-0">
              <li>Required fields must be present</li>
              <li>Email fields are validated for proper format</li>
              <li>Returns detailed error messages for failed validations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Best Practices</h2>
        
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-start gap-2 sm:gap-3">
            <span className="text-lg sm:text-2xl flex-shrink-0">✓</span>
            <div className="min-w-0">
              <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Always include honeypot field</h4>
              <p className="text-sm text-gray-600">Protects against spam bots without requiring CAPTCHA</p>
            </div>
          </div>

          <div className="flex items-start gap-2 sm:gap-3">
            <span className="text-lg sm:text-2xl flex-shrink-0">✓</span>
            <div className="min-w-0">
              <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Match field names exactly</h4>
              <p className="text-sm text-gray-600">Field names in your HTML must match the field IDs in your form configuration</p>
            </div>
          </div>

          <div className="flex items-start gap-2 sm:gap-3">
            <span className="text-lg sm:text-2xl flex-shrink-0">✓</span>
            <div className="min-w-0">
              <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Handle errors gracefully</h4>
              <p className="text-sm text-gray-600">Show user-friendly error messages when validation fails</p>
            </div>
          </div>

          <div className="flex items-start gap-2 sm:gap-3">
            <span className="text-lg sm:text-2xl flex-shrink-0">✓</span>
            <div className="min-w-0">
              <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Use domain verification for production</h4>
              <p className="text-sm text-gray-600">Prevent unauthorized usage by restricting to your verified domains</p>
            </div>
          </div>

          <div className="flex items-start gap-2 sm:gap-3">
            <span className="text-lg sm:text-2xl flex-shrink-0">✓</span>
            <div className="min-w-0">
              <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Test with different content types</h4>
              <p className="text-sm text-gray-600">Ensure your form works with both JSON and form-encoded submissions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Need Help?</h2>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          Check out our other documentation pages for more detailed information:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          <a href="/docs/quickstart" className="block p-3 sm:p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors">
            <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Quick Start Guide</h3>
            <p className="text-sm text-gray-600">Get started in 5 minutes</p>
          </a>
          <a href="/docs/examples" className="block p-3 sm:p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors">
            <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Code Examples</h3>
            <p className="text-sm text-gray-600">More integration examples</p>
          </a>
          <a href="/docs/field-types" className="block p-3 sm:p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors">
            <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Field Types</h3>
            <p className="text-sm text-gray-600">Available form field types</p>
          </a>
          <a href="/docs/domain-verification" className="block p-3 sm:p-4 border border-gray-200 rounded-xl hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors">
            <h3 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Domain Verification</h3>
            <p className="text-sm text-gray-600">Secure your forms</p>
          </a>
        </div>
      </section>
    </div>
    </>
  )
}
