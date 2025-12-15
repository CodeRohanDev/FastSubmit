import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code, Database, Webhook, Key } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Form API Integration: A Developer\'s Guide | FastSubmit',
  description: 'Learn how to integrate forms into your apps using REST APIs. Webhooks, authentication, and best practices for developers. Free form API alternative to Google Forms API.',
  keywords: ['form api', 'google form api', 'free form api', 'form api free', 'rest api', 'webhooks', 'api integration', 'developer guide', 'form builder', 'free form builder', 'online form builder', 'hostspica forms', 'forms hostspica', 'best form api', 'form builder free'],
}

export default function FormApiIntegrationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Form API Integration Guide: Connect Forms to Your Apps",
    "description": "Learn how to integrate forms with your applications using REST API. Complete guide with code examples and best practices.",
    "author": {
      "@type": "Organization",
      "name": "FastSubmit"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FastSubmit",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fastsubmit.cloud/logo.png"
      }
    },
    "datePublished": "2024-12-10",
    "dateModified": "2024-12-10",
    "url": "https://fastsubmit.cloud/blog/form-api-integration"
  }

  return (
    <>
    <GoogleAnalytics />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar variant="simple" />

        <article className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-indigo-600 hover:text-indigo-700 mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Developer</span>
            <span className="text-sm text-gray-500">9 min read</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Form API Integration: A Developer's Guide
          </h1>
          <p className="text-xl text-gray-600">
            Learn how to integrate forms into your apps using REST APIs. Webhooks, authentication, and best practices.
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <Code className="w-12 h-12 text-purple-600 mb-4" />
            <p className="text-lg text-gray-700 mb-0">
              FastSubmit provides a complete REST API for developers to integrate forms into their applications. 
              This guide covers everything from authentication to webhooks and best practices.
            </p>
          </div>

          <h2>Why Use the FastSubmit API?</h2>
          <ul>
            <li><strong>Full Control:</strong> Programmatically create and manage forms</li>
            <li><strong>Custom Integrations:</strong> Build forms into your existing workflows</li>
            <li><strong>Automation:</strong> Automate form creation and data processing</li>
            <li><strong>Webhooks:</strong> Real-time notifications for submissions</li>
            <li><strong>Data Export:</strong> Fetch submissions programmatically</li>
          </ul>

          <h2>Getting Started</h2>

          <h3>1. Get Your API Key</h3>
          <p>First, you'll need an API key from your FastSubmit dashboard:</p>
          <ol>
            <li>Log in to your FastSubmit account</li>
            <li>Go to Settings → API Keys</li>
            <li>Click "Generate New API Key"</li>
            <li>Copy and store it securely</li>
          </ol>

          <div className="bg-yellow-50 rounded-xl p-6 my-6">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Key className="w-5 h-5 text-yellow-600" />
              Security Best Practices:
            </h4>
            <ul className="text-sm space-y-1 mb-0">
              <li>• Never commit API keys to version control</li>
              <li>• Use environment variables to store keys</li>
              <li>• Rotate keys regularly</li>
              <li>• Use different keys for development and production</li>
            </ul>
          </div>

          <h3>2. Authentication</h3>
          <p>All API requests require authentication using Bearer tokens:</p>

          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">cURL</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`curl -X GET \\
  https://fastsubmit.cloud/api/v1/forms \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
              </code>
            </pre>
          </div>

          <h2>Core API Endpoints</h2>

          <h3>Create a Form</h3>
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">POST /api/v1/forms</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`const response = await fetch(
  'https://fastsubmit.cloud/api/v1/forms',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Contact Form',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'message', type: 'textarea', required: false }
      ],
      settings: {
        redirectUrl: '/thank-you',
        emailNotifications: true
      }
    })
  }
);

const form = await response.json();
console.log('Form ID:', form.id);`}
              </code>
            </pre>
          </div>

          <h3>Submit to a Form</h3>
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">POST /api/v1/forms/:formId/submit</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`const response = await fetch(
  'https://fastsubmit.cloud/api/v1/forms/FORM_ID/submit',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello from the API!'
    })
  }
);

const result = await response.json();
console.log('Submission ID:', result.submissionId);`}
              </code>
            </pre>
          </div>

          <h3>Get Submissions</h3>
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">GET /api/v1/forms/:formId/submissions</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`const response = await fetch(
  'https://fastsubmit.cloud/api/v1/forms/FORM_ID/submissions?limit=50',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  }
);

const { submissions, total, page } = await response.json();
console.log(\`Found \${total} submissions\`);`}
              </code>
            </pre>
          </div>

          <h3>Update a Form</h3>
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">PATCH /api/v1/forms/:formId</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`const response = await fetch(
  'https://fastsubmit.cloud/api/v1/forms/FORM_ID',
  {
    method: 'PATCH',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Updated Contact Form',
      settings: {
        emailNotifications: false
      }
    })
  }
);`}
              </code>
            </pre>
          </div>

          <h3>Delete a Form</h3>
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">DELETE /api/v1/forms/:formId</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`const response = await fetch(
  'https://fastsubmit.cloud/api/v1/forms/FORM_ID',
  {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  }
);`}
              </code>
            </pre>
          </div>

          <h2>Webhooks</h2>

          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Webhook className="w-6 h-6 text-purple-600" />
              Real-Time Notifications
            </h3>
            <p className="text-gray-700 mb-0">
              Webhooks allow you to receive real-time notifications when events occur, such as new form submissions.
            </p>
          </div>

          <h3>Setting Up Webhooks</h3>
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">POST /api/v1/webhooks</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`const response = await fetch(
  'https://fastsubmit.cloud/api/v1/webhooks',
  {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      url: 'https://your-app.com/webhooks/fastsubmit',
      events: ['submission.created', 'submission.updated'],
      formId: 'FORM_ID' // Optional: specific form
    })
  }
);`}
              </code>
            </pre>
          </div>

          <h3>Webhook Payload</h3>
          <p>When a submission is created, you'll receive a POST request:</p>
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">Webhook Payload</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`{
  "event": "submission.created",
  "timestamp": "2024-12-08T10:30:00Z",
  "form": {
    "id": "form_abc123",
    "name": "Contact Form"
  },
  "submission": {
    "id": "sub_xyz789",
    "data": {
      "name": "John Doe",
      "email": "john@example.com",
      "message": "Hello!"
    },
    "createdAt": "2024-12-08T10:30:00Z",
    "ipAddress": "192.168.1.1",
    "userAgent": "Mozilla/5.0..."
  }
}`}
              </code>
            </pre>
          </div>

          <h3>Handling Webhooks (Node.js/Express)</h3>
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">server.js</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`const express = require('express');
const app = express();

app.post('/webhooks/fastsubmit', express.json(), (req, res) => {
  const { event, submission } = req.body;
  
  if (event === 'submission.created') {
    console.log('New submission:', submission.data);
    
    // Process the submission
    // - Send to CRM
    // - Add to email list
    // - Trigger notifications
    // - etc.
  }
  
  // Always respond with 200 to acknowledge receipt
  res.status(200).json({ received: true });
});

app.listen(3000);`}
              </code>
            </pre>
          </div>

          <h2>Error Handling</h2>

          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">HTTP Status Codes</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <code className="bg-green-100 text-green-700 px-2 py-1 rounded">200</code>
                <span>Success</span>
              </div>
              <div className="flex items-center gap-3">
                <code className="bg-green-100 text-green-700 px-2 py-1 rounded">201</code>
                <span>Created</span>
              </div>
              <div className="flex items-center gap-3">
                <code className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">400</code>
                <span>Bad Request - Invalid data</span>
              </div>
              <div className="flex items-center gap-3">
                <code className="bg-red-100 text-red-700 px-2 py-1 rounded">401</code>
                <span>Unauthorized - Invalid API key</span>
              </div>
              <div className="flex items-center gap-3">
                <code className="bg-red-100 text-red-700 px-2 py-1 rounded">404</code>
                <span>Not Found - Resource doesn't exist</span>
              </div>
              <div className="flex items-center gap-3">
                <code className="bg-red-100 text-red-700 px-2 py-1 rounded">429</code>
                <span>Too Many Requests - Rate limit exceeded</span>
              </div>
              <div className="flex items-center gap-3">
                <code className="bg-red-100 text-red-700 px-2 py-1 rounded">500</code>
                <span>Server Error</span>
              </div>
            </div>
          </div>

          <h3>Error Response Format</h3>
          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">Error Response</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Email field is required",
    "details": {
      "field": "email",
      "reason": "missing_required_field"
    }
  }
}`}
              </code>
            </pre>
          </div>

          <h2>Rate Limiting</h2>
          <p>API requests are rate-limited to ensure fair usage:</p>
          <ul>
            <li><strong>Free Plan:</strong> 1,000 requests per hour</li>
            <li><strong>Pro Plan:</strong> 10,000 requests per hour</li>
            <li><strong>Enterprise:</strong> Custom limits</li>
          </ul>

          <p>Rate limit headers are included in every response:</p>
          <div className="bg-gray-100 rounded-lg p-4 my-4 text-sm font-mono">
            X-RateLimit-Limit: 1000<br />
            X-RateLimit-Remaining: 999<br />
            X-RateLimit-Reset: 1702034400
          </div>

          <h2>Best Practices</h2>

          <div className="bg-blue-50 rounded-xl p-6 my-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">✅ Do This:</h3>
            <ul className="space-y-2 mb-0">
              <li>Use environment variables for API keys</li>
              <li>Implement exponential backoff for retries</li>
              <li>Cache responses when appropriate</li>
              <li>Validate data before sending to API</li>
              <li>Handle errors gracefully</li>
              <li>Use webhooks instead of polling</li>
              <li>Monitor rate limits</li>
              <li>Log API requests for debugging</li>
            </ul>
          </div>

          <h2>Example: Full Integration</h2>

          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">Complete Example</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`class FastSubmitClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://fastsubmit.cloud/api/v1';
  }

  async createForm(formData) {
    const response = await fetch(\`\${this.baseUrl}/forms\`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(formData)
    });
    return this.handleResponse(response);
  }

  async getSubmissions(formId, options = {}) {
    const params = new URLSearchParams(options);
    const response = await fetch(
      \`\${this.baseUrl}/forms/\${formId}/submissions?\${params}\`,
      { headers: this.getHeaders() }
    );
    return this.handleResponse(response);
  }

  getHeaders() {
    return {
      'Authorization': \`Bearer \${this.apiKey}\`,
      'Content-Type': 'application/json'
    };
  }

  async handleResponse(response) {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error.message);
    }
    return response.json();
  }
}

// Usage
const client = new FastSubmitClient(process.env.FASTSUBMIT_API_KEY);

// Create a form
const form = await client.createForm({
  name: 'Newsletter Signup',
  fields: [
    { name: 'email', type: 'email', required: true }
  ]
});

// Get submissions
const submissions = await client.getSubmissions(form.id, {
  limit: 100,
  page: 1
});`}
              </code>
            </pre>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-8 text-white my-8">
            <h3 className="text-2xl font-bold mb-3">Ready to Build with Our API?</h3>
            <p className="mb-6 text-white/90">
              Get your free API key and start integrating forms into your applications.
            </p>
            <Link 
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Get API Key <ArrowRight size={18} />
            </Link>
          </div>

          <h2>Conclusion</h2>
          <p>
            The FastSubmit API provides everything you need to integrate forms into your applications. 
            With full CRUD operations, webhooks, and comprehensive error handling, you can build powerful 
            form-based workflows that scale with your business.
          </p>
          <p>
            Start with the basics, implement proper error handling, and use webhooks for real-time updates. 
            For complete API documentation, visit our <Link href="/docs/api" className="text-indigo-600 hover:underline">API docs</Link>.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/docs/api" className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">API Documentation</h4>
              <p className="text-sm text-gray-600">Complete API reference with all endpoints and examples.</p>
            </Link>
            <Link href="/blog/embed-forms-website" className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Embed Forms on Websites</h4>
              <p className="text-sm text-gray-600">Learn how to embed forms on any website platform.</p>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
    </>
  )
}
