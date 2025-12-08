export default function ExamplesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Code Examples</h1>
      <p className="text-gray-600 mb-8">
        Ready-to-use code examples for integrating FastSubmit into your projects.
      </p>

      {/* HTML */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">HTML Form</h2>
        <p className="text-gray-600 mb-4">Basic HTML form with all field types:</p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html>
<head>
  <title>Contact Form</title>
  <style>
    form { max-width: 400px; margin: 0 auto; }
    label { display: block; margin-bottom: 15px; }
    input, textarea, select { width: 100%; padding: 8px; margin-top: 5px; }
    button { background: #4F46E5; color: white; padding: 10px 20px; border: none; cursor: pointer; }
  </style>
</head>
<body>
  <form action="https://fastsubmit.hostspica.com/api/submit/YOUR_FORM_ID" method="POST">
    <label>
      Name *
      <input type="text" name="name" required />
    </label>
    
    <label>
      Email *
      <input type="email" name="email" required />
    </label>
    
    <label>
      Phone
      <input type="tel" name="phone" />
    </label>
    
    <label>
      Subject
      <select name="subject">
        <option value="general">General Inquiry</option>
        <option value="support">Support</option>
        <option value="sales">Sales</option>
      </select>
    </label>
    
    <label>
      Message *
      <textarea name="message" rows="4" required></textarea>
    </label>
    
    <!-- Honeypot spam protection -->
    <input type="text" name="_honeypot" style="display:none" />
    
    <button type="submit">Send Message</button>
  </form>
</body>
</html>`}
        </pre>
      </section>

      {/* React */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">React</h2>
        <p className="text-gray-600 mb-4">React component with form handling:</p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
{`import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(
        'https://fastsubmit.hostspica.com/api/submit/YOUR_FORM_ID',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <div>Thank you! Your message has been sent.</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
      />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send'}
      </button>
      {status === 'error' && <p>Something went wrong. Please try again.</p>}
    </form>
  );
}

export default ContactForm;`}
        </pre>
      </section>

      {/* Vue */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Vue.js</h2>
        <p className="text-gray-600 mb-4">Vue 3 component with Composition API:</p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
{`<template>
  <div v-if="submitted">
    <p>Thank you! Your message has been sent.</p>
  </div>
  <form v-else @submit.prevent="handleSubmit">
    <input v-model="form.name" type="text" placeholder="Name" required />
    <input v-model="form.email" type="email" placeholder="Email" required />
    <textarea v-model="form.message" placeholder="Message" required></textarea>
    <button type="submit" :disabled="loading">
      {{ loading ? 'Sending...' : 'Send' }}
    </button>
    <p v-if="error">Something went wrong. Please try again.</p>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue';

const form = reactive({ name: '', email: '', message: '' });
const loading = ref(false);
const submitted = ref(false);
const error = ref(false);

async function handleSubmit() {
  loading.value = true;
  error.value = false;

  try {
    const response = await fetch(
      'https://fastsubmit.hostspica.com/api/submit/YOUR_FORM_ID',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      }
    );

    if (response.ok) {
      submitted.value = true;
    } else {
      error.value = true;
    }
  } catch (e) {
    error.value = true;
  } finally {
    loading.value = false;
  }
}
</script>`}
        </pre>
      </section>

      {/* Node.js */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Node.js</h2>
        <p className="text-gray-600 mb-4">Fetch submissions from your server:</p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
{`// Using fetch (Node.js 18+)
const API_KEY = 'fs_your_api_key';
const FORM_ID = 'your_form_id';

async function getSubmissions() {
  const response = await fetch(
    \`https://fastsubmit.hostspica.com/api/v1/forms/\${FORM_ID}/submissions\`,
    {
      headers: {
        'x-api-key': API_KEY,
      },
    }
  );

  const data = await response.json();
  
  if (data.success) {
    console.log(\`Found \${data.count} submissions\`);
    data.submissions.forEach((sub) => {
      console.log(\`- \${sub.name} (\${sub.email})\`);
    });
  } else {
    console.error('Error:', data.error);
  }
}

getSubmissions();`}
        </pre>
      </section>

      {/* Python */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Python</h2>
        <p className="text-gray-600 mb-4">Using the requests library:</p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
{`import requests

API_KEY = 'fs_your_api_key'
FORM_ID = 'your_form_id'
BASE_URL = 'https://fastsubmit.hostspica.com/api/v1'

headers = {
    'x-api-key': API_KEY
}

# Get all submissions
response = requests.get(
    f'{BASE_URL}/forms/{FORM_ID}/submissions',
    headers=headers
)

data = response.json()

if data.get('success'):
    print(f"Found {data['count']} submissions")
    for sub in data['submissions']:
        print(f"- {sub['name']} ({sub['email']})")
else:
    print(f"Error: {data.get('error')}")

# Export as CSV
csv_response = requests.get(
    f'{BASE_URL}/forms/{FORM_ID}/submissions?format=csv',
    headers=headers
)

with open('submissions.csv', 'w') as f:
    f.write(csv_response.text)
print("Exported to submissions.csv")`}
        </pre>
      </section>

      {/* cURL */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">cURL</h2>
        <p className="text-gray-600 mb-4">Command line examples:</p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
{`# Submit a form
curl -X POST \\
  https://fastsubmit.hostspica.com/api/submit/YOUR_FORM_ID \\
  -H "Content-Type: application/json" \\
  -d '{"name": "John", "email": "john@example.com", "message": "Hello!"}'

# List all forms
curl -X GET \\
  https://fastsubmit.hostspica.com/api/v1/forms \\
  -H "x-api-key: YOUR_API_KEY"

# Get submissions
curl -X GET \\
  https://fastsubmit.hostspica.com/api/v1/forms/FORM_ID/submissions \\
  -H "x-api-key: YOUR_API_KEY"

# Export as CSV
curl -X GET \\
  "https://fastsubmit.hostspica.com/api/v1/forms/FORM_ID/submissions?format=csv" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -o submissions.csv

# Delete a submission
curl -X DELETE \\
  https://fastsubmit.hostspica.com/api/v1/forms/FORM_ID/submissions/SUB_ID \\
  -H "x-api-key: YOUR_API_KEY"`}
        </pre>
      </section>
    </div>
  )
}
