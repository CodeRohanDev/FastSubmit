# Serverless Form Processing: Building Scalable Form Handlers with Zero Infrastructure

*Published on Dev.to | Cross-posted to Hashnode & Medium*

![Serverless Form Processing](https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800)

Serverless computing has transformed how we build and deploy applications. When it comes to form processing, serverless functions offer the perfect balance of simplicity, scalability, and cost-effectiveness. In this comprehensive guide, I'll show you how to build robust form processing systems using various serverless platforms.

## Why Serverless for Form Processing?

Traditional form processing requires:
- Always-on servers
- Load balancing
- Database management
- Security updates
- Scaling configuration

Serverless eliminates all of this:

```javascript
// Traditional Express.js server
const express = require('express');
const app = express();

app.post('/contact', (req, res) => {
  // Process form
});

app.listen(3000); // Server runs 24/7
```

```javascript
// Serverless function
export default async function handler(req, res) {
  // Only runs when called
  // Auto-scales
  // Pay per execution
}
```

## Platform Comparison

| Platform | Cold Start | Pricing | Ease of Use | Integrations |
|----------|------------|---------|-------------|--------------|
| Vercel | ~100ms | Free tier generous | Excellent | Great |
| Netlify | ~200ms | Good free tier | Very good | Good |
| AWS Lambda | ~500ms | Pay per use | Moderate | Extensive |
| Cloudflare Workers | ~0ms | Generous free tier | Good | Growing |

## Vercel Functions Implementation

### Basic Contact Form Handler

```javascript
// api/contact.js
import { sendEmail } from '../lib/email';
import { validateForm } from '../lib/validation';
import { rateLimit } from '../lib/rate-limit';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Rate limiting
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const rateLimitResult = await rateLimit(ip);
    
    if (!rateLimitResult.success) {
      return res.status(429).json({ 
        error: 'Too many requests',
        retryAfter: rateLimitResult.retryAfter 
      });
    }

    // Validate form data
    const validation = validateForm(req.body);
    if (!validation.valid) {
      return res.status(400).json({ 
        error: 'Validation failed',
        details: validation.errors 
      });
    }

    const { name, email, message, subject } = req.body;

    // Send email notification
    await sendEmail({
      to: process.env.CONTACT_EMAIL,
      subject: subject || `New contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toISOString()}</small></p>
      `
    });

    // Send auto-reply
    await sendEmail({
      to: email,
      subject: 'Thank you for contacting us',
      html: `
        <h2>Thank you for your message!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you soon.</p>
        <p>Best regards,<br>The Team</p>
      `
    });

    // Log to analytics (optional)
    await logFormSubmission({
      type: 'contact',
      email,
      timestamp: new Date().toISOString(),
      ip
    });

    res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });

  } catch (error) {
    console.error('Form processing error:', error);
    
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Please try again later'
    });
  }
}
```

### Advanced Multi-Form Handler

```javascript
// api/forms/[...slug].js
import { handlers } from '../../lib/form-handlers';
import { authenticate } from '../../lib/auth';
import { validateWebhook } from '../../lib/webhook';

export default async function handler(req, res) {
  const { slug } = req.query;
  const formType = slug[0];
  const action = slug[1];

  // Route to appropriate handler
  const formHandler = handlers[formType];
  if (!formHandler) {
    return res.status(404).json({ error: 'Form type not found' });
  }

  try {
    switch (action) {
      case 'submit':
        return await formHandler.submit(req, res);
      case 'validate':
        return await formHandler.validate(req, res);
      case 'webhook':
        return await formHandler.webhook(req, res);
      default:
        return res.status(404).json({ error: 'Action not found' });
    }
  } catch (error) {
    console.error(`Error in ${formType}/${action}:`, error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// lib/form-handlers.js
export const handlers = {
  contact: {
    async submit(req, res) {
      const { name, email, message } = req.body;
      
      // Process contact form
      await processContactForm({ name, email, message });
      
      return res.status(200).json({ success: true });
    },
    
    async validate(req, res) {
      const { field, value } = req.body;
      
      // Validate specific field
      const isValid = await validateField(field, value);
      
      return res.status(200).json({ valid: isValid });
    },
    
    async webhook(req, res) {
      // Handle webhook from external service
      const isValid = validateWebhook(req);
      if (!isValid) {
        return res.status(401).json({ error: 'Invalid webhook' });
      }
      
      await processWebhook(req.body);
      return res.status(200).json({ received: true });
    }
  },
  
  newsletter: {
    async submit(req, res) {
      const { email } = req.body;
      
      // Add to mailing list
      await addToMailingList(email);
      
      return res.status(200).json({ success: true });
    }
  },
  
  survey: {
    async submit(req, res) {
      const surveyData = req.body;
      
      // Process survey submission
      await processSurvey(surveyData);
      
      return res.status(200).json({ success: true });
    }
  }
};
```

## Netlify Functions Implementation

### Basic Setup

```javascript
// netlify/functions/contact-form.js
const { sendEmail } = require('./utils/email');
const { validateInput } = require('./utils/validation');

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
    
    // Validate input
    const validation = validateInput(data);
    if (!validation.valid) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          error: 'Validation failed',
          details: validation.errors 
        })
      };
    }

    // Process form
    await processContactForm(data);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ 
        success: true,
        message: 'Form submitted successfully' 
      })
    };

  } catch (error) {
    console.error('Function error:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Internal server error' 
      })
    };
  }
};

async function processContactForm(data) {
  const { name, email, message } = data;
  
  // Send notification email
  await sendEmail({
    to: process.env.CONTACT_EMAIL,
    subject: `New contact from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `
  });

  // Save to database (optional)
  if (process.env.DATABASE_URL) {
    await saveToDatabase(data);
  }
}
```

### Environment-Specific Configuration

```javascript
// netlify/functions/utils/config.js
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  email: {
    service: isDev ? 'ethereal' : 'sendgrid',
    apiKey: process.env.SENDGRID_API_KEY,
    from: process.env.FROM_EMAIL || 'noreply@yoursite.com'
  },
  database: {
    url: process.env.DATABASE_URL,
    enabled: !!process.env.DATABASE_URL
  },
  cors: {
    origin: isDev ? 'http://localhost:3000' : 'https://yoursite.com'
  }
};
```

## AWS Lambda Implementation

### Using Serverless Framework

```yaml
# serverless.yml
service: form-processor

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  environment:
    SENDGRID_API_KEY: ${env:SENDGRID_API_KEY}
    DATABASE_URL: ${env:DATABASE_URL}

functions:
  contactForm:
    handler: handlers/contact.handler
    events:
      - http:
          path: contact
          method: post
          cors: true
  
  newsletterSignup:
    handler: handlers/newsletter.handler
    events:
      - http:
          path: newsletter
          method: post
          cors: true

plugins:
  - serverless-offline
```

```javascript
// handlers/contact.js
const AWS = require('aws-sdk');
const { sendEmail } = require('../lib/email');
const { validateForm } = require('../lib/validation');

const ses = new AWS.SES({ region: 'us-east-1' });

module.exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Validate form data
    const validation = validateForm(data);
    if (!validation.valid) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Validation failed',
          details: validation.errors 
        })
      };
    }

    // Process form
    await processContactForm(data);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true,
        message: 'Form submitted successfully' 
      })
    };

  } catch (error) {
    console.error('Lambda error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error' 
      })
    };
  }
};

async function processContactForm(data) {
  const { name, email, message } = data;

  // Send email using SES
  const params = {
    Source: process.env.FROM_EMAIL,
    Destination: {
      ToAddresses: [process.env.CONTACT_EMAIL]
    },
    Message: {
      Subject: {
        Data: `New contact from ${name}`
      },
      Body: {
        Html: {
          Data: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        }
      }
    }
  };

  await ses.sendEmail(params).promise();
}
```

## Cloudflare Workers Implementation

```javascript
// worker.js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const data = await request.json();
    
    // Validate form data
    const validation = validateForm(data);
    if (!validation.valid) {
      return new Response(JSON.stringify({ 
        error: 'Validation failed',
        details: validation.errors 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Process form
    await processForm(data);

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Form submitted successfully' 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    console.error('Worker error:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Internal server error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

function validateForm(data) {
  const errors = [];
  
  if (!data.name || data.name.length < 2) {
    errors.push('Name is required and must be at least 2 characters');
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid email is required');
  }
  
  if (!data.message || data.message.length < 10) {
    errors.push('Message is required and must be at least 10 characters');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function processForm(data) {
  // Send email using external service
  await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{
        to: [{ email: CONTACT_EMAIL }],
        subject: `New contact from ${data.name}`
      }],
      from: { email: FROM_EMAIL },
      content: [{
        type: 'text/html',
        value: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `
      }]
    })
  });
}
```

## Advanced Patterns

### Form Processing Pipeline

```javascript
// lib/form-pipeline.js
class FormPipeline {
  constructor() {
    this.steps = [];
  }

  addStep(step) {
    this.steps.push(step);
    return this;
  }

  async process(data, context = {}) {
    let result = { ...data };
    
    for (const step of this.steps) {
      try {
        result = await step(result, context);
      } catch (error) {
        console.error(`Pipeline step failed:`, error);
        throw error;
      }
    }
    
    return result;
  }
}

// Pipeline steps
const validateStep = async (data, context) => {
  const validation = validateForm(data);
  if (!validation.valid) {
    throw new Error(`Validation failed: ${validation.errors.join(', ')}`);
  }
  return data;
};

const sanitizeStep = async (data, context) => {
  return {
    ...data,
    name: sanitizeHtml(data.name),
    message: sanitizeHtml(data.message)
  };
};

const enrichStep = async (data, context) => {
  return {
    ...data,
    timestamp: new Date().toISOString(),
    ip: context.ip,
    userAgent: context.userAgent
  };
};

const notifyStep = async (data, context) => {
  await sendEmail({
    to: process.env.CONTACT_EMAIL,
    subject: `New contact from ${data.name}`,
    template: 'contact-notification',
    data
  });
  return data;
};

const saveStep = async (data, context) => {
  if (process.env.DATABASE_URL) {
    await saveToDatabase(data);
  }
  return data;
};

// Usage
const contactPipeline = new FormPipeline()
  .addStep(validateStep)
  .addStep(sanitizeStep)
  .addStep(enrichStep)
  .addStep(notifyStep)
  .addStep(saveStep);

// In your serverless function
export default async function handler(req, res) {
  try {
    const context = {
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']
    };
    
    await contactPipeline.process(req.body, context);
    
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
```

### Multi-Step Form Handler

```javascript
// api/forms/multi-step.js
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export default async function handler(req, res) {
  const { method } = req;
  const { sessionId, step, data, action } = req.body;

  switch (action) {
    case 'save-step':
      return await saveStep(req, res);
    case 'get-progress':
      return await getProgress(req, res);
    case 'submit-final':
      return await submitFinal(req, res);
    default:
      return res.status(400).json({ error: 'Invalid action' });
  }
}

async function saveStep(req, res) {
  const { sessionId, step, data } = req.body;
  
  try {
    // Save step data to Redis with expiration
    await redis.setex(`form:${sessionId}:step:${step}`, 3600, JSON.stringify(data));
    
    // Update progress
    const progress = await redis.get(`form:${sessionId}:progress`) || '{}';
    const progressData = JSON.parse(progress);
    progressData[step] = true;
    progressData.lastStep = step;
    progressData.updatedAt = new Date().toISOString();
    
    await redis.setex(`form:${sessionId}:progress`, 3600, JSON.stringify(progressData));
    
    res.status(200).json({ 
      success: true,
      progress: progressData 
    });
  } catch (error) {
    console.error('Error saving step:', error);
    res.status(500).json({ error: 'Failed to save step' });
  }
}

async function getProgress(req, res) {
  const { sessionId } = req.body;
  
  try {
    const progress = await redis.get(`form:${sessionId}:progress`);
    const progressData = progress ? JSON.parse(progress) : {};
    
    // Get all saved step data
    const stepData = {};
    for (let i = 1; i <= 5; i++) {
      const data = await redis.get(`form:${sessionId}:step:${i}`);
      if (data) {
        stepData[i] = JSON.parse(data);
      }
    }
    
    res.status(200).json({
      progress: progressData,
      data: stepData
    });
  } catch (error) {
    console.error('Error getting progress:', error);
    res.status(500).json({ error: 'Failed to get progress' });
  }
}

async function submitFinal(req, res) {
  const { sessionId } = req.body;
  
  try {
    // Collect all step data
    const allData = {};
    for (let i = 1; i <= 5; i++) {
      const data = await redis.get(`form:${sessionId}:step:${i}`);
      if (data) {
        Object.assign(allData, JSON.parse(data));
      }
    }
    
    // Validate complete form
    const validation = validateCompleteForm(allData);
    if (!validation.valid) {
      return res.status(400).json({
        error: 'Form validation failed',
        details: validation.errors
      });
    }
    
    // Process complete form
    await processCompleteForm(allData);
    
    // Clean up Redis data
    for (let i = 1; i <= 5; i++) {
      await redis.del(`form:${sessionId}:step:${i}`);
    }
    await redis.del(`form:${sessionId}:progress`);
    
    res.status(200).json({ 
      success: true,
      message: 'Form submitted successfully' 
    });
  } catch (error) {
    console.error('Error submitting final form:', error);
    res.status(500).json({ error: 'Failed to submit form' });
  }
}
```

### File Upload Handler

```javascript
// api/upload.js
import formidable from 'formidable';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { createReadStream } from 'fs';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { files, fields } = await parseForm(req);
    const uploadedFiles = [];

    for (const file of Object.values(files)) {
      const uploadResult = await uploadToS3(file);
      uploadedFiles.push(uploadResult);
    }

    // Process form with file URLs
    await processFormWithFiles({
      ...fields,
      files: uploadedFiles
    });

    res.status(200).json({
      success: true,
      files: uploadedFiles
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
}

function parseForm(req) {
  return new Promise((resolve, reject) => {
    const form = formidable({
      maxFileSize: 10 * 1024 * 1024, // 10MB
      allowEmptyFiles: false,
      multiples: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

async function uploadToS3(file) {
  const key = `uploads/${Date.now()}-${file.originalFilename}`;
  
  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET,
    Key: key,
    Body: createReadStream(file.filepath),
    ContentType: file.mimetype,
  });

  await s3Client.send(command);

  return {
    filename: file.originalFilename,
    url: `https://${process.env.S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
    size: file.size,
    type: file.mimetype
  };
}
```

## Error Handling and Monitoring

### Comprehensive Error Handling

```javascript
// lib/error-handler.js
class FormError extends Error {
  constructor(message, code, statusCode = 400) {
    super(message);
    this.name = 'FormError';
    this.code = code;
    this.statusCode = statusCode;
  }
}

class ValidationError extends FormError {
  constructor(errors) {
    super('Validation failed', 'VALIDATION_ERROR', 400);
    this.errors = errors;
  }
}

class RateLimitError extends FormError {
  constructor(retryAfter) {
    super('Rate limit exceeded', 'RATE_LIMIT_ERROR', 429);
    this.retryAfter = retryAfter;
  }
}

export function handleError(error, req, res) {
  // Log error
  console.error('Form processing error:', {
    error: error.message,
    stack: error.stack,
    url: req.url,
    method: req.method,
    body: req.body,
    headers: req.headers,
    timestamp: new Date().toISOString()
  });

  // Send to error tracking service
  if (process.env.SENTRY_DSN) {
    Sentry.captureException(error);
  }

  // Return appropriate response
  if (error instanceof ValidationError) {
    return res.status(400).json({
      error: 'Validation failed',
      details: error.errors
    });
  }

  if (error instanceof RateLimitError) {
    return res.status(429).json({
      error: 'Rate limit exceeded',
      retryAfter: error.retryAfter
    });
  }

  if (error instanceof FormError) {
    return res.status(error.statusCode).json({
      error: error.message,
      code: error.code
    });
  }

  // Generic error
  return res.status(500).json({
    error: 'Internal server error',
    message: 'Please try again later'
  });
}

// Usage in serverless function
export default async function handler(req, res) {
  try {
    await processForm(req.body);
    res.status(200).json({ success: true });
  } catch (error) {
    handleError(error, req, res);
  }
}
```

### Performance Monitoring

```javascript
// lib/monitoring.js
export function withMonitoring(handler) {
  return async (req, res) => {
    const startTime = Date.now();
    const requestId = generateRequestId();
    
    // Add request ID to response headers
    res.setHeader('X-Request-ID', requestId);
    
    try {
      console.log('Request started:', {
        requestId,
        method: req.method,
        url: req.url,
        timestamp: new Date().toISOString()
      });
      
      const result = await handler(req, res);
      
      const duration = Date.now() - startTime;
      console.log('Request completed:', {
        requestId,
        duration,
        status: res.statusCode
      });
      
      // Send metrics to monitoring service
      await sendMetrics({
        requestId,
        duration,
        status: res.statusCode,
        endpoint: req.url,
        method: req.method
      });
      
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      console.error('Request failed:', {
        requestId,
        duration,
        error: error.message
      });
      
      throw error;
    }
  };
}

function generateRequestId() {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

async function sendMetrics(data) {
  // Send to your monitoring service
  if (process.env.MONITORING_ENDPOINT) {
    try {
      await fetch(process.env.MONITORING_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error('Failed to send metrics:', error);
    }
  }
}

// Usage
export default withMonitoring(async function handler(req, res) {
  // Your form processing logic
});
```

## Testing Serverless Functions

### Unit Testing

```javascript
// __tests__/contact-form.test.js
import handler from '../api/contact';
import { createMocks } from 'node-mocks-http';

// Mock external dependencies
jest.mock('../lib/email', () => ({
  sendEmail: jest.fn().mockResolvedValue(true)
}));

describe('/api/contact', () => {
  test('should process valid form submission', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a test message'
      }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    
    const data = JSON.parse(res._getData());
    expect(data.success).toBe(true);
  });

  test('should reject invalid form data', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: '',
        email: 'invalid-email',
        message: ''
      }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    
    const data = JSON.parse(res._getData());
    expect(data.error).toBe('Validation failed');
    expect(data.details).toHaveLength(3);
  });

  test('should reject non-POST requests', async () => {
    const { req, res } = createMocks({
      method: 'GET'
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
  });
});
```

### Integration Testing

```javascript
// __tests__/integration/form-submission.test.js
import { test, expect } from '@playwright/test';

test.describe('Form Submission', () => {
  test('should submit contact form successfully', async ({ page }) => {
    await page.goto('/contact');
    
    // Fill out form
    await page.fill('[name="name"]', 'John Doe');
    await page.fill('[name="email"]', 'john@example.com');
    await page.fill('[name="message"]', 'This is a test message');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Wait for success message
    await expect(page.locator('.success-message')).toBeVisible();
    await expect(page.locator('.success-message')).toContainText('Message sent successfully');
  });

  test('should show validation errors', async ({ page }) => {
    await page.goto('/contact');
    
    // Submit empty form
    await page.click('button[type="submit"]');
    
    // Check for validation errors
    await expect(page.locator('.error-message')).toBeVisible();
  });
});
```

## Deployment and CI/CD

### GitHub Actions for Vercel

```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run test:integration

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## Conclusion

Serverless form processing offers unmatched scalability, cost-effectiveness, and simplicity. Key benefits include:

- **Zero infrastructure management**
- **Automatic scaling**
- **Pay-per-execution pricing**
- **Built-in security features**
- **Global edge deployment**
- **Easy integration with third-party services**

Whether you choose Vercel, Netlify, AWS Lambda, or Cloudflare Workers, the patterns and examples in this guide will help you build robust, scalable form processing systems that handle everything from simple contact forms to complex multi-step workflows.

---

**Resources:**
- [Vercel Functions Documentation](https://vercel.com/docs/functions)
- [Netlify Functions Guide](https://docs.netlify.com/functions/overview/)
- [AWS Lambda Best Practices](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)

**What's your preferred serverless platform for form processing? Share your experiences in the comments!**

---

**Tags**: #serverless #forms #vercel #netlify #aws #lambda #cloudflare #javascript #nodejs #webdev #backend #api