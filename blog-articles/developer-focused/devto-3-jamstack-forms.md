# JAMstack Forms: Building Dynamic User Interactions in Static Sites

*Published on Dev.to | Cross-posted to Hashnode & Medium*

![JAMstack Forms](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800)

The JAMstack (JavaScript, APIs, and Markup) has revolutionized how we build web applications. But one challenge that consistently comes up is handling forms in static sites. How do you collect user data when there's no traditional backend server?

In this comprehensive guide, I'll show you multiple approaches to implement forms in JAMstack applications, from simple contact forms to complex multi-step workflows.

## The JAMstack Form Challenge

Traditional server-side applications handle forms like this:

```php
// Traditional PHP approach
if ($_POST['submit']) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    
    // Save to database
    mysqli_query($conn, "INSERT INTO contacts...");
    
    // Send email
    mail($to, $subject, $message);
}
```

But in JAMstack, we don't have a server running 24/7. Instead, we need to think differently about form handling.

## Approach 1: Third-Party Form Services

The simplest approach is using a form backend service:

### Basic Implementation

```html
<!-- Static HTML form -->
<form action="https://fastsubmit.cloud/api/submit/your-form-id" method="POST">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

### Enhanced with JavaScript

```javascript
// Progressive enhancement
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    try {
      const response = await fetch('https://fastsubmit.cloud/api/submit/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        showSuccess('Message sent successfully!');
        form.reset();
      } else {
        showError('Failed to send message. Please try again.');
      }
    } catch (error) {
      showError('Network error. Please check your connection.');
    }
  });
});

function showSuccess(message) {
  const alert = document.createElement('div');
  alert.className = 'alert alert-success';
  alert.textContent = message;
  document.body.appendChild(alert);
  
  setTimeout(() => alert.remove(), 5000);
}

function showError(message) {
  const alert = document.createElement('div');
  alert.className = 'alert alert-error';
  alert.textContent = message;
  document.body.appendChild(alert);
  
  setTimeout(() => alert.remove(), 5000);
}
```

## Approach 2: Serverless Functions

### Netlify Functions

```javascript
// netlify/functions/contact-form.js
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Send email using SendGrid
    await sendEmail(data);
    
    // Save to database (optional)
    await saveToDatabase(data);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ success: true, message: 'Form submitted successfully' })
    };
  } catch (error) {
    console.error('Form submission error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};

async function sendEmail(data) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'contact@yoursite.com',
    from: 'noreply@yoursite.com',
    subject: `New contact form submission from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  };

  await sgMail.send(msg);
}

async function saveToDatabase(data) {
  // Example with FaunaDB
  const faunadb = require('faunadb');
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET
  });

  const q = faunadb.query;

  await client.query(
    q.Create(
      q.Collection('contacts'),
      {
        data: {
          name: data.name,
          email: data.email,
          message: data.message,
          timestamp: new Date().toISOString()
        }
      }
    )
  );
}
```

### Vercel Functions

```javascript
// api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Send email notification
    await sendEmailNotification({ name, email, message });
    
    // Store in database
    await storeSubmission({ name, email, message });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to process form' });
  }
}

async function sendEmailNotification(data) {
  const nodemailer = require('nodemailer');
  
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'contact@yoursite.com',
    subject: `New contact from ${data.name}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `
  });
}
```

## Framework-Specific Implementations

### Next.js with API Routes

```jsx
// pages/contact.js
import { useState } from 'react';

export default function Contact() {
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <div className="text-green-600 text-sm">
            Message sent successfully!
          </div>
        )}

        {status === 'error' && (
          <div className="text-red-600 text-sm">
            Failed to send message. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}
```

### Gatsby with Netlify Forms

```jsx
// src/pages/contact.js
import React, { useState } from 'react';

const ContactPage = () => {
  const [formState, setFormState] = useState({});

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...formState
      })
    })
    .then(() => alert("Success!"))
    .catch(error => alert(error));
  };

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* Hidden field for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Honeypot field */}
      <p hidden>
        <label>
          Don't fill this out: <input name="bot-field" onChange={handleChange} />
        </label>
      </p>

      <div>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} required />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} required />
        </label>
      </div>

      <div>
        <label>
          Message:
          <textarea name="message" onChange={handleChange} required />
        </label>
      </div>

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactPage;
```

### Nuxt.js Implementation

```vue
<!-- pages/contact.vue -->
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Contact Us</h1>
    
    <form @submit.prevent="submitForm" class="max-w-lg">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
      </div>

      <div class="mb-6">
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="submitting"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {{ submitting ? 'Sending...' : 'Send Message' }}
      </button>

      <div v-if="message" :class="messageClass" class="mt-4 p-3 rounded">
        {{ message }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitting: false,
      message: '',
      messageType: ''
    };
  },
  computed: {
    messageClass() {
      return {
        'bg-green-100 text-green-700': this.messageType === 'success',
        'bg-red-100 text-red-700': this.messageType === 'error'
      };
    }
  },
  methods: {
    async submitForm() {
      this.submitting = true;
      this.message = '';

      try {
        const response = await this.$axios.post('/api/contact', this.form);
        
        this.message = 'Message sent successfully!';
        this.messageType = 'success';
        this.form = { name: '', email: '', message: '' };
      } catch (error) {
        this.message = 'Failed to send message. Please try again.';
        this.messageType = 'error';
      } finally {
        this.submitting = false;
      }
    }
  }
};
</script>
```

## Advanced Form Patterns

### Multi-Step Forms

```jsx
import { useState } from 'react';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    firstName: '',
    lastName: '',
    email: '',
    // Step 2
    company: '',
    role: '',
    industry: '',
    // Step 3
    budget: '',
    timeline: '',
    requirements: ''
  });

  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/multi-step-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setCurrentStep(4); // Success step
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Professional Information</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                name="role"
                placeholder="Your Role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
              <select
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select Industry</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Project Details</h2>
            <div className="space-y-4">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Budget Range</option>
                <option value="<10k">Less than $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k+">More than $50,000</option>
              </select>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Timeline</option>
                <option value="asap">ASAP</option>
                <option value="1-3months">1-3 months</option>
                <option value="3-6months">3-6 months</option>
                <option value="6months+">6+ months</option>
              </select>
              <textarea
                name="requirements"
                placeholder="Describe your requirements..."
                value={formData.requirements}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4 text-green-600">
              Thank You!
            </h2>
            <p>Your submission has been received. We'll get back to you soon.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step <= currentStep
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-300 text-gray-600'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="mt-2 text-sm text-gray-600 text-center">
          Step {currentStep} of {totalSteps}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStep()}

        {currentStep < 4 && (
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Submit
              </button>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
```

### File Upload Forms

```jsx
import { useState } from 'react';

const FileUploadForm = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const progress = Math.round((e.loaded / e.total) * 100);
          setUploadProgress(prev => ({
            ...prev,
            [file.name]: progress
          }));
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error('Upload failed'));
        }
      });

      xhr.addEventListener('error', () => {
        reject(new Error('Upload failed'));
      });

      xhr.open('POST', '/api/upload');
      xhr.send(formData);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const uploadPromises = files.map(file => uploadFile(file));
      const results = await Promise.all(uploadPromises);
      
      console.log('All files uploaded:', results);
      alert('Files uploaded successfully!');
      
      setFiles([]);
      setUploadProgress({});
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Files
        </label>
        <input
          type="file"
          multiple
          onChange={handleFileSelect}
          className="w-full p-2 border border-gray-300 rounded"
          accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
        />
      </div>

      {files.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">
            Selected Files:
          </h3>
          {files.map((file, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{file.name}</span>
                <span className="text-sm text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </div>
              {uploadProgress[file.name] && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress[file.name]}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <button
        type="submit"
        disabled={files.length === 0 || uploading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {uploading ? 'Uploading...' : 'Upload Files'}
      </button>
    </form>
  );
};

export default FileUploadForm;
```

## Form Validation Strategies

### Client-Side Validation with Yup

```javascript
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[\+]?[1-9][\d]{0,15}$/, 'Invalid phone number')
    .nullable(),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .required('Message is required'),
  terms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions')
});

// Usage in React component
const ContactForm = () => {
  const [errors, setErrors] = useState({});

  const validateForm = async (data) => {
    try {
      await validationSchema.validate(data, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach(err => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const isValid = await validateForm(data);
    if (!isValid) return;

    // Submit form
    await submitForm(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields with error display */}
      <div>
        <input name="name" type="text" />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      {/* ... other fields */}
    </form>
  );
};
```

## Performance Optimization

### Form Debouncing

```javascript
import { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

const SmartForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: ''
  });
  const [validationStatus, setValidationStatus] = useState({});

  // Debounced validation function
  const debouncedValidate = useCallback(
    debounce(async (field, value) => {
      if (!value) return;

      try {
        const response = await fetch(`/api/validate/${field}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ [field]: value })
        });

        const result = await response.json();
        setValidationStatus(prev => ({
          ...prev,
          [field]: result.valid ? 'valid' : 'invalid'
        }));
      } catch (error) {
        console.error('Validation error:', error);
      }
    }, 500),
    []
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Trigger debounced validation
    debouncedValidate(name, value);
  };

  return (
    <form>
      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`border p-2 ${
            validationStatus.email === 'valid' ? 'border-green-500' :
            validationStatus.email === 'invalid' ? 'border-red-500' :
            'border-gray-300'
          }`}
        />
        {validationStatus.email === 'invalid' && (
          <span className="text-red-500">Email already exists</span>
        )}
      </div>

      <div>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          className={`border p-2 ${
            validationStatus.username === 'valid' ? 'border-green-500' :
            validationStatus.username === 'invalid' ? 'border-red-500' :
            'border-gray-300'
          }`}
        />
        {validationStatus.username === 'invalid' && (
          <span className="text-red-500">Username not available</span>
        )}
      </div>
    </form>
  );
};
```

## Security Considerations

### CSRF Protection

```javascript
// Generate CSRF token
const generateCSRFToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Verify CSRF token
const verifyCSRFToken = (token, sessionToken) => {
  return crypto.timingSafeEqual(
    Buffer.from(token),
    Buffer.from(sessionToken)
  );
};

// Usage in API route
export default async function handler(req, res) {
  const { csrfToken, ...formData } = req.body;
  const sessionToken = req.session.csrfToken;

  if (!verifyCSRFToken(csrfToken, sessionToken)) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }

  // Process form
  await processForm(formData);
  res.status(200).json({ success: true });
}
```

### Rate Limiting

```javascript
const rateLimit = new Map();

const checkRateLimit = (ip, limit = 5, window = 60000) => {
  const now = Date.now();
  const userRequests = rateLimit.get(ip) || [];
  
  // Remove old requests outside the window
  const validRequests = userRequests.filter(
    timestamp => now - timestamp < window
  );
  
  if (validRequests.length >= limit) {
    return false; // Rate limit exceeded
  }
  
  validRequests.push(now);
  rateLimit.set(ip, validRequests);
  return true;
};

// Usage in API route
export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ 
      error: 'Too many requests. Please try again later.' 
    });
  }
  
  // Process form
  await processForm(req.body);
  res.status(200).json({ success: true });
}
```

## Testing JAMstack Forms

### Unit Testing

```javascript
// __tests__/ContactForm.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../components/ContactForm';

// Mock fetch
global.fetch = jest.fn();

describe('ContactForm', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('submits form with valid data', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true })
    });

    render(<ContactForm />);
    
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'This is a test message' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com',
          message: 'This is a test message'
        })
      });
    });

    expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
  });

  test('displays error on submission failure', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    render(<ContactForm />);
    
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' }
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' }
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'This is a test message' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: /send/i }));

    await waitFor(() => {
      expect(screen.getByText(/failed to send message/i)).toBeInTheDocument();
    });
  });
});
```

## Conclusion

JAMstack forms don't have to be complicated. Whether you choose third-party services, serverless functions, or hybrid approaches, the key is to:

1. **Start simple** with basic HTML forms
2. **Enhance progressively** with JavaScript
3. **Validate on both client and server**
4. **Implement proper security measures**
5. **Test thoroughly** across different scenarios
6. **Monitor performance** and user experience

The JAMstack approach to forms offers excellent performance, security, and developer experience while maintaining the simplicity that makes static sites so appealing.

---

**Resources:**
- [JAMstack.org](https://jamstack.org/)
- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Vercel Functions Guide](https://vercel.com/docs/functions)
- [Form Validation Best Practices](https://web.dev/sign-up-form-best-practices/)

**What's your preferred approach to handling forms in JAMstack applications? Share your experiences in the comments!**

---

**Tags**: #jamstack #forms #javascript #serverless #netlify #vercel #nextjs #gatsby #nuxt #webdev #frontend