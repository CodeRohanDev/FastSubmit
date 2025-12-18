# Form Security Best Practices: Protecting Your Web Forms from Attacks

*Published on Dev.to | Cross-posted to Hashnode & Medium*

![Form Security](https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800)

Web forms are often the most vulnerable entry points in web applications. They're exposed to the public, handle user input, and frequently connect to databases and email systems. In this comprehensive guide, I'll show you how to implement robust security measures that protect your forms from common attacks while maintaining a great user experience.

## The Form Security Landscape

Every day, web forms face numerous security threats:

- **SQL Injection**: Malicious database queries
- **XSS (Cross-Site Scripting)**: Injected client-side scripts
- **CSRF (Cross-Site Request Forgery)**: Unauthorized actions
- **Spam and Bot Attacks**: Automated form submissions
- **Data Breaches**: Unauthorized access to sensitive information
- **DDoS Attacks**: Overwhelming server resources

Let's explore how to defend against each of these threats.

## Input Validation and Sanitization

### Server-Side Validation (Never Trust the Client)

```javascript
// ❌ Bad: Only client-side validation
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ✅ Good: Server-side validation with detailed checks
import validator from 'validator';
import DOMPurify from 'isomorphic-dompurify';

function validateAndSanitizeInput(data) {
  const errors = [];
  const sanitized = {};

  // Name validation
  if (!data.name || typeof data.name !== 'string') {
    errors.push('Name is required');
  } else if (data.name.length < 2 || data.name.length > 100) {
    errors.push('Name must be between 2 and 100 characters');
  } else {
    // Sanitize HTML and trim whitespace
    sanitized.name = DOMPurify.sanitize(data.name.trim());
    
    // Check for suspicious patterns
    if (/<script|javascript:|on\w+=/i.test(sanitized.name)) {
      errors.push('Name contains invalid characters');
    }
  }

  // Email validation
  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required');
  } else if (!validator.isEmail(data.email)) {
    errors.push('Invalid email format');
  } else if (data.email.length > 254) {
    errors.push('Email is too long');
  } else {
    sanitized.email = validator.normalizeEmail(data.email.toLowerCase().trim());
    
    // Check for disposable email domains
    if (isDisposableEmail(sanitized.email)) {
      errors.push('Disposable email addresses are not allowed');
    }
  }

  // Message validation
  if (!data.message || typeof data.message !== 'string') {
    errors.push('Message is required');
  } else if (data.message.length < 10 || data.message.length > 5000) {
    errors.push('Message must be between 10 and 5000 characters');
  } else {
    sanitized.message = DOMPurify.sanitize(data.message.trim());
    
    // Check for spam patterns
    if (containsSpamPatterns(sanitized.message)) {
      errors.push('Message contains prohibited content');
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    data: sanitized
  };
}

function isDisposableEmail(email) {
  const disposableDomains = [
    '10minutemail.com',
    'tempmail.org',
    'guerrillamail.com',
    // Add more disposable domains
  ];
  
  const domain = email.split('@')[1];
  return disposableDomains.includes(domain);
}

function containsSpamPatterns(text) {
  const spamPatterns = [
    /\b(viagra|cialis|casino|lottery|winner)\b/i,
    /\b(click here|act now|limited time)\b/i,
    /https?:\/\/[^\s]+/g, // Multiple URLs
    /(.)\1{10,}/, // Repeated characters
  ];
  
  return spamPatterns.some(pattern => pattern.test(text));
}
```

### Advanced Input Validation with Joi

```javascript
import Joi from 'joi';

const contactFormSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(100)
    .pattern(/^[a-zA-Z\s\-'\.]+$/) // Only letters, spaces, hyphens, apostrophes, dots
    .required()
    .messages({
      'string.pattern.base': 'Name contains invalid characters',
      'string.min': 'Name must be at least 2 characters long',
      'string.max': 'Name cannot exceed 100 characters'
    }),
    
  email: Joi.string()
    .email({ tlds: { allow: true } })
    .max(254)
    .required()
    .custom((value, helpers) => {
      // Custom validation for business emails only
      const businessDomains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
      const domain = value.split('@')[1];
      
      if (businessDomains.includes(domain)) {
        return helpers.error('email.business');
      }
      
      return value;
    })
    .messages({
      'email.business': 'Please use a business email address'
    }),
    
  phone: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/) // E.164 format
    .optional()
    .allow(''),
    
  message: Joi.string()
    .min(10)
    .max(5000)
    .required()
    .custom((value, helpers) => {
      // Check for excessive URLs
      const urlCount = (value.match(/https?:\/\/[^\s]+/g) || []).length;
      if (urlCount > 2) {
        return helpers.error('message.tooManyUrls');
      }
      
      return value;
    })
    .messages({
      'message.tooManyUrls': 'Message contains too many URLs'
    }),
    
  company: Joi.string()
    .max(200)
    .optional()
    .allow(''),
    
  subject: Joi.string()
    .max(200)
    .optional()
    .allow(''),
    
  // Honeypot field (should be empty)
  website: Joi.string()
    .empty('')
    .optional()
    .messages({
      'any.only': 'Bot detected'
    })
});

// Usage in API endpoint
export default async function handler(req, res) {
  try {
    const { error, value } = contactFormSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true
    });

    if (error) {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message
        }))
      });
    }

    // Process validated and sanitized data
    await processForm(value);
    
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Form processing error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
```

## CSRF Protection

### Token-Based CSRF Protection

```javascript
// lib/csrf.js
import crypto from 'crypto';

export function generateCSRFToken() {
  return crypto.randomBytes(32).toString('hex');
}

export function verifyCSRFToken(token, sessionToken) {
  if (!token || !sessionToken) {
    return false;
  }
  
  return crypto.timingSafeEqual(
    Buffer.from(token),
    Buffer.from(sessionToken)
  );
}

// API endpoint with CSRF protection
import { verifyCSRFToken } from '../lib/csrf';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Extract CSRF token from request
  const csrfToken = req.headers['x-csrf-token'] || req.body.csrfToken;
  const sessionToken = req.session?.csrfToken;

  if (!verifyCSRFToken(csrfToken, sessionToken)) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }

  // Process form
  await processForm(req.body);
  res.status(200).json({ success: true });
}
```

### Double Submit Cookie Pattern

```javascript
// Client-side: Set CSRF cookie and include in form
function setCSRFToken() {
  const token = generateRandomToken();
  
  // Set as httpOnly cookie
  document.cookie = `csrf-token=${token}; Secure; SameSite=Strict`;
  
  // Include in form
  const csrfInput = document.createElement('input');
  csrfInput.type = 'hidden';
  csrfInput.name = 'csrfToken';
  csrfInput.value = token;
  
  document.querySelector('form').appendChild(csrfInput);
}

// Server-side: Verify cookie matches form token
export default async function handler(req, res) {
  const cookieToken = req.cookies['csrf-token'];
  const formToken = req.body.csrfToken;

  if (!cookieToken || cookieToken !== formToken) {
    return res.status(403).json({ error: 'CSRF token mismatch' });
  }

  // Process form
  await processForm(req.body);
  res.status(200).json({ success: true });
}
```

## Rate Limiting and DDoS Protection

### Advanced Rate Limiting

```javascript
// lib/rate-limiter.js
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export class RateLimiter {
  constructor(options = {}) {
    this.windowMs = options.windowMs || 60000; // 1 minute
    this.maxRequests = options.maxRequests || 5;
    this.keyGenerator = options.keyGenerator || ((req) => req.ip);
  }

  async checkLimit(req) {
    const key = `rate_limit:${this.keyGenerator(req)}`;
    const now = Date.now();
    const window = Math.floor(now / this.windowMs);
    const windowKey = `${key}:${window}`;

    try {
      // Get current count
      const current = await redis.get(windowKey) || 0;
      
      if (current >= this.maxRequests) {
        const resetTime = (window + 1) * this.windowMs;
        return {
          allowed: false,
          count: current,
          resetTime,
          retryAfter: Math.ceil((resetTime - now) / 1000)
        };
      }

      // Increment counter
      const newCount = await redis.incr(windowKey);
      
      // Set expiration on first increment
      if (newCount === 1) {
        await redis.expire(windowKey, Math.ceil(this.windowMs / 1000));
      }

      return {
        allowed: true,
        count: newCount,
        remaining: this.maxRequests - newCount
      };
    } catch (error) {
      console.error('Rate limiting error:', error);
      // Fail open - allow request if rate limiter fails
      return { allowed: true, count: 0, remaining: this.maxRequests };
    }
  }
}

// Usage with different limits for different endpoints
const contactLimiter = new RateLimiter({
  windowMs: 60000, // 1 minute
  maxRequests: 3,   // 3 requests per minute
  keyGenerator: (req) => `contact:${req.ip}`
});

const newsletterLimiter = new RateLimiter({
  windowMs: 300000, // 5 minutes
  maxRequests: 1,   // 1 request per 5 minutes
  keyGenerator: (req) => `newsletter:${req.body.email}`
});

export default async function handler(req, res) {
  // Apply rate limiting
  const limitResult = await contactLimiter.checkLimit(req);
  
  if (!limitResult.allowed) {
    return res.status(429).json({
      error: 'Too many requests',
      retryAfter: limitResult.retryAfter
    });
  }

  // Add rate limit headers
  res.setHeader('X-RateLimit-Limit', contactLimiter.maxRequests);
  res.setHeader('X-RateLimit-Remaining', limitResult.remaining);
  res.setHeader('X-RateLimit-Reset', limitResult.resetTime);

  // Process form
  await processForm(req.body);
  res.status(200).json({ success: true });
}
```

### Distributed Rate Limiting

```javascript
// lib/distributed-rate-limiter.js
export class DistributedRateLimiter {
  constructor(options = {}) {
    this.windows = options.windows || [
      { duration: 60000, limit: 10 },    // 10 per minute
      { duration: 3600000, limit: 100 }, // 100 per hour
      { duration: 86400000, limit: 1000 } // 1000 per day
    ];
  }

  async checkAllLimits(req) {
    const ip = req.ip;
    const checks = await Promise.all(
      this.windows.map(window => this.checkWindow(ip, window))
    );

    const blocked = checks.find(check => !check.allowed);
    if (blocked) {
      return blocked;
    }

    return {
      allowed: true,
      limits: checks
    };
  }

  async checkWindow(ip, window) {
    const key = `rate_limit:${ip}:${window.duration}`;
    const now = Date.now();
    const windowStart = Math.floor(now / window.duration) * window.duration;

    try {
      // Use sliding window log
      const requests = await redis.zrangebyscore(
        key,
        windowStart,
        now
      );

      if (requests.length >= window.limit) {
        return {
          allowed: false,
          window: window.duration,
          count: requests.length,
          limit: window.limit,
          resetTime: windowStart + window.duration
        };
      }

      // Add current request
      await redis.zadd(key, now, `${now}-${Math.random()}`);
      
      // Clean old entries and set expiration
      await redis.zremrangebyscore(key, 0, windowStart - 1);
      await redis.expire(key, Math.ceil(window.duration / 1000));

      return {
        allowed: true,
        window: window.duration,
        count: requests.length + 1,
        limit: window.limit
      };
    } catch (error) {
      console.error('Rate limiting error:', error);
      return { allowed: true };
    }
  }
}
```

## Bot Detection and Spam Prevention

### Advanced Honeypot Implementation

```javascript
// Client-side: Dynamic honeypot creation
function createHoneypot() {
  const honeypot = document.createElement('input');
  honeypot.type = 'text';
  honeypot.name = 'website'; // Common bot target
  honeypot.style.cssText = `
    position: absolute !important;
    left: -9999px !important;
    top: -9999px !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
  `;
  honeypot.tabIndex = -1;
  honeypot.autocomplete = 'off';
  
  // Add fake label to make it more attractive to bots
  const label = document.createElement('label');
  label.textContent = 'Website (leave blank)';
  label.style.cssText = honeypot.style.cssText;
  
  const form = document.querySelector('form');
  form.appendChild(label);
  form.appendChild(honeypot);
}

// Server-side: Honeypot validation
function validateHoneypot(data) {
  const honeypotFields = ['website', 'url', 'homepage', 'link'];
  
  for (const field of honeypotFields) {
    if (data[field] && data[field].trim() !== '') {
      return {
        valid: false,
        reason: 'Honeypot triggered',
        field
      };
    }
  }
  
  return { valid: true };
}
```

### Behavioral Analysis

```javascript
// Client-side: Collect behavioral data
class BehaviorTracker {
  constructor() {
    this.data = {
      mouseMovements: 0,
      keystrokes: 0,
      focusEvents: 0,
      timeOnPage: 0,
      formFillTime: 0,
      pasteEvents: 0
    };
    
    this.startTime = Date.now();
    this.formStartTime = null;
    
    this.attachListeners();
  }

  attachListeners() {
    // Mouse movement tracking
    document.addEventListener('mousemove', () => {
      this.data.mouseMovements++;
    });

    // Keystroke tracking
    document.addEventListener('keydown', () => {
      this.data.keystrokes++;
    });

    // Focus tracking
    document.addEventListener('focusin', () => {
      this.data.focusEvents++;
    });

    // Paste detection
    document.addEventListener('paste', () => {
      this.data.pasteEvents++;
    });

    // Form interaction tracking
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('focusin', () => {
        if (!this.formStartTime) {
          this.formStartTime = Date.now();
        }
      }, { once: true });
    }
  }

  getBehaviorData() {
    const now = Date.now();
    this.data.timeOnPage = now - this.startTime;
    
    if (this.formStartTime) {
      this.data.formFillTime = now - this.formStartTime;
    }

    return this.data;
  }
}

// Include behavior data in form submission
const tracker = new BehaviorTracker();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const behaviorData = tracker.getBehaviorData();
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...Object.fromEntries(formData),
      _behavior: behaviorData
    })
  });
});

// Server-side: Analyze behavior
function analyzeBehavior(behaviorData) {
  const suspiciousIndicators = [];
  
  // Too fast form submission (likely bot)
  if (behaviorData.formFillTime < 3000) {
    suspiciousIndicators.push('Form filled too quickly');
  }
  
  // No mouse movements (likely bot)
  if (behaviorData.mouseMovements === 0) {
    suspiciousIndicators.push('No mouse interaction');
  }
  
  // Too many paste events (copy-paste spam)
  if (behaviorData.pasteEvents > 3) {
    suspiciousIndicators.push('Excessive paste events');
  }
  
  // Very short time on page
  if (behaviorData.timeOnPage < 5000) {
    suspiciousIndicators.push('Very short time on page');
  }
  
  return {
    suspicious: suspiciousIndicators.length > 2,
    indicators: suspiciousIndicators,
    score: suspiciousIndicators.length
  };
}
```

### CAPTCHA Integration

```javascript
// Google reCAPTCHA v3 implementation
class RecaptchaV3 {
  constructor(siteKey) {
    this.siteKey = siteKey;
    this.loaded = false;
    this.loadRecaptcha();
  }

  loadRecaptcha() {
    if (this.loaded) return;
    
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${this.siteKey}`;
    script.onload = () => {
      this.loaded = true;
    };
    document.head.appendChild(script);
  }

  async getToken(action = 'submit') {
    if (!this.loaded) {
      await new Promise(resolve => {
        const checkLoaded = () => {
          if (window.grecaptcha && window.grecaptcha.ready) {
            resolve();
          } else {
            setTimeout(checkLoaded, 100);
          }
        };
        checkLoaded();
      });
    }

    return new Promise((resolve) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(this.siteKey, { action })
          .then(resolve);
      });
    });
  }
}

// Usage in form submission
const recaptcha = new RecaptchaV3('your-site-key');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  try {
    const token = await recaptcha.getToken('contact_form');
    
    const formData = new FormData(form);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...Object.fromEntries(formData),
        recaptchaToken: token
      })
    });
    
    if (response.ok) {
      showSuccess('Message sent successfully!');
    }
  } catch (error) {
    showError('Failed to verify reCAPTCHA. Please try again.');
  }
});

// Server-side: Verify reCAPTCHA token
async function verifyRecaptcha(token, expectedAction = 'submit') {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`
  });
  
  const result = await response.json();
  
  return {
    success: result.success,
    score: result.score,
    action: result.action,
    valid: result.success && 
           result.score >= 0.5 && 
           result.action === expectedAction
  };
}
```

## Data Protection and Privacy

### Encryption at Rest

```javascript
// lib/encryption.js
import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');

export function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipher(ALGORITHM, KEY, iv);
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const authTag = cipher.getAuthTag();
  
  return {
    encrypted,
    iv: iv.toString('hex'),
    authTag: authTag.toString('hex')
  };
}

export function decrypt(encryptedData) {
  const { encrypted, iv, authTag } = encryptedData;
  
  const decipher = crypto.createDecipher(
    ALGORITHM, 
    KEY, 
    Buffer.from(iv, 'hex')
  );
  
  decipher.setAuthTag(Buffer.from(authTag, 'hex'));
  
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}

// Usage: Encrypt sensitive form data before storage
export default async function handler(req, res) {
  const { name, email, message } = req.body;
  
  // Encrypt sensitive data
  const encryptedData = {
    name: encrypt(name),
    email: encrypt(email),
    message: encrypt(message),
    timestamp: new Date().toISOString()
  };
  
  // Store encrypted data
  await saveToDatabase(encryptedData);
  
  res.status(200).json({ success: true });
}
```

### GDPR Compliance

```javascript
// lib/gdpr.js
export class GDPRCompliance {
  constructor() {
    this.consentTypes = {
      NECESSARY: 'necessary',
      ANALYTICS: 'analytics',
      MARKETING: 'marketing'
    };
  }

  checkConsent(req) {
    const consent = req.cookies.consent ? 
      JSON.parse(req.cookies.consent) : {};
    
    return {
      necessary: true, // Always true
      analytics: consent.analytics === true,
      marketing: consent.marketing === true
    };
  }

  async handleDataRequest(type, email) {
    switch (type) {
      case 'export':
        return await this.exportUserData(email);
      case 'delete':
        return await this.deleteUserData(email);
      case 'rectify':
        return await this.rectifyUserData(email);
      default:
        throw new Error('Invalid request type');
    }
  }

  async exportUserData(email) {
    // Collect all user data from various sources
    const userData = {
      personal: await this.getPersonalData(email),
      submissions: await this.getFormSubmissions(email),
      preferences: await this.getUserPreferences(email)
    };
    
    return {
      data: userData,
      exportDate: new Date().toISOString(),
      format: 'JSON'
    };
  }

  async deleteUserData(email) {
    // Delete from all systems
    await Promise.all([
      this.deleteFromDatabase(email),
      this.deleteFromEmailService(email),
      this.deleteFromAnalytics(email)
    ]);
    
    return {
      deleted: true,
      deletionDate: new Date().toISOString()
    };
  }
}

// GDPR endpoint
import { GDPRCompliance } from '../lib/gdpr';

const gdpr = new GDPRCompliance();

export default async function handler(req, res) {
  const { action, email, verificationToken } = req.body;
  
  // Verify user identity
  const isVerified = await verifyUserIdentity(email, verificationToken);
  if (!isVerified) {
    return res.status(401).json({ error: 'Identity verification failed' });
  }
  
  try {
    const result = await gdpr.handleDataRequest(action, email);
    res.status(200).json(result);
  } catch (error) {
    console.error('GDPR request error:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
}
```

## Security Headers and HTTPS

### Comprehensive Security Headers

```javascript
// lib/security-headers.js
export function setSecurityHeaders(res) {
  // Prevent XSS attacks
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'DENY');
  
  // Strict Transport Security
  res.setHeader('Strict-Transport-Security', 
    'max-age=31536000; includeSubDomains; preload');
  
  // Content Security Policy
  res.setHeader('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "connect-src 'self' https://api.yoursite.com; " +
    "frame-src https://www.google.com;"
  );
  
  // Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Permissions Policy
  res.setHeader('Permissions-Policy', 
    'camera=(), microphone=(), geolocation=(), payment=()');
}

// Usage in API routes
export default async function handler(req, res) {
  setSecurityHeaders(res);
  
  // Your form processing logic
  await processForm(req.body);
  
  res.status(200).json({ success: true });
}
```

### HTTPS Enforcement

```javascript
// middleware/https-redirect.js
export function enforceHTTPS(req, res, next) {
  // Skip in development
  if (process.env.NODE_ENV === 'development') {
    return next();
  }
  
  // Check if request is secure
  const isSecure = req.secure || 
                   req.headers['x-forwarded-proto'] === 'https' ||
                   req.headers['x-forwarded-ssl'] === 'on';
  
  if (!isSecure) {
    const httpsUrl = `https://${req.headers.host}${req.url}`;
    return res.redirect(301, httpsUrl);
  }
  
  next();
}

// Vercel configuration for HTTPS redirect
// vercel.json
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [
        {
          "type": "header",
          "key": "x-forwarded-proto",
          "value": "http"
        }
      ],
      "destination": "https://yoursite.com/$1",
      "permanent": true
    }
  ]
}
```

## Monitoring and Alerting

### Security Event Monitoring

```javascript
// lib/security-monitor.js
export class SecurityMonitor {
  constructor() {
    this.events = [];
    this.alertThresholds = {
      FAILED_VALIDATION: 10,
      RATE_LIMIT_HIT: 5,
      HONEYPOT_TRIGGERED: 1,
      SUSPICIOUS_BEHAVIOR: 3
    };
  }

  logEvent(type, data) {
    const event = {
      type,
      data,
      timestamp: new Date().toISOString(),
      ip: data.ip,
      userAgent: data.userAgent
    };
    
    this.events.push(event);
    
    // Check if alert should be triggered
    this.checkAlertThresholds(type, data.ip);
    
    // Log to external service
    this.sendToLogService(event);
  }

  checkAlertThresholds(type, ip) {
    const threshold = this.alertThresholds[type];
    if (!threshold) return;
    
    const recentEvents = this.events.filter(event => 
      event.type === type &&
      event.ip === ip &&
      Date.now() - new Date(event.timestamp).getTime() < 300000 // 5 minutes
    );
    
    if (recentEvents.length >= threshold) {
      this.triggerAlert(type, ip, recentEvents);
    }
  }

  async triggerAlert(type, ip, events) {
    const alert = {
      type: 'SECURITY_ALERT',
      severity: this.getSeverity(type),
      message: `${type} threshold exceeded for IP ${ip}`,
      events: events.length,
      ip,
      timestamp: new Date().toISOString()
    };
    
    // Send to alerting service
    await this.sendAlert(alert);
    
    // Auto-block if severe
    if (alert.severity === 'HIGH') {
      await this.autoBlock(ip);
    }
  }

  getSeverity(type) {
    const severityMap = {
      FAILED_VALIDATION: 'MEDIUM',
      RATE_LIMIT_HIT: 'MEDIUM',
      HONEYPOT_TRIGGERED: 'HIGH',
      SUSPICIOUS_BEHAVIOR: 'HIGH'
    };
    
    return severityMap[type] || 'LOW';
  }

  async sendAlert(alert) {
    // Send to Slack, email, or monitoring service
    if (process.env.SLACK_WEBHOOK_URL) {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🚨 Security Alert: ${alert.message}`,
          attachments: [{
            color: alert.severity === 'HIGH' ? 'danger' : 'warning',
            fields: [
              { title: 'IP Address', value: alert.ip, short: true },
              { title: 'Events', value: alert.events, short: true },
              { title: 'Severity', value: alert.severity, short: true }
            ]
          }]
        })
      });
    }
  }

  async autoBlock(ip) {
    // Add to blocklist
    await redis.setex(`blocked:${ip}`, 3600, 'auto-blocked'); // 1 hour
    
    console.log(`Auto-blocked IP: ${ip}`);
  }
}

// Usage in form handler
const monitor = new SecurityMonitor();

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  try {
    // Check if IP is blocked
    const isBlocked = await redis.get(`blocked:${ip}`);
    if (isBlocked) {
      monitor.logEvent('BLOCKED_ACCESS', { ip, userAgent: req.headers['user-agent'] });
      return res.status(403).json({ error: 'Access denied' });
    }
    
    // Validate form
    const validation = validateForm(req.body);
    if (!validation.valid) {
      monitor.logEvent('FAILED_VALIDATION', { 
        ip, 
        userAgent: req.headers['user-agent'],
        errors: validation.errors 
      });
      return res.status(400).json({ error: 'Validation failed' });
    }
    
    // Check honeypot
    const honeypotCheck = validateHoneypot(req.body);
    if (!honeypotCheck.valid) {
      monitor.logEvent('HONEYPOT_TRIGGERED', { 
        ip, 
        userAgent: req.headers['user-agent'],
        field: honeypotCheck.field 
      });
      return res.status(400).json({ error: 'Invalid submission' });
    }
    
    // Process form
    await processForm(req.body);
    
    monitor.logEvent('SUCCESSFUL_SUBMISSION', { ip, userAgent: req.headers['user-agent'] });
    res.status(200).json({ success: true });
    
  } catch (error) {
    monitor.logEvent('PROCESSING_ERROR', { 
      ip, 
      userAgent: req.headers['user-agent'],
      error: error.message 
    });
    res.status(500).json({ error: 'Internal server error' });
  }
}
```

## Testing Security Measures

### Security Testing Suite

```javascript
// __tests__/security.test.js
import { validateAndSanitizeInput } from '../lib/validation';
import { verifyCSRFToken } from '../lib/csrf';
import { RateLimiter } from '../lib/rate-limiter';

describe('Form Security', () => {
  describe('Input Validation', () => {
    test('should reject XSS attempts', () => {
      const maliciousInput = {
        name: '<script>alert("xss")</script>',
        email: 'test@example.com',
        message: 'Hello <img src=x onerror=alert(1)>'
      };
      
      const result = validateAndSanitizeInput(maliciousInput);
      
      expect(result.valid).toBe(false);
      expect(result.errors).toContain('Name contains invalid characters');
    });
    
    test('should sanitize HTML content', () => {
      const input = {
        name: 'John <b>Doe</b>',
        email: 'john@example.com',
        message: 'Hello <strong>world</strong>!'
      };
      
      const result = validateAndSanitizeInput(input);
      
      expect(result.data.name).toBe('John Doe');
      expect(result.data.message).toBe('Hello world!');
    });
    
    test('should reject SQL injection attempts', () => {
      const sqlInjection = {
        name: "'; DROP TABLE users; --",
        email: 'test@example.com',
        message: 'Hello'
      };
      
      const result = validateAndSanitizeInput(sqlInjection);
      
      expect(result.valid).toBe(false);
    });
  });
  
  describe('CSRF Protection', () => {
    test('should verify valid CSRF tokens', () => {
      const token = 'abc123';
      const sessionToken = 'abc123';
      
      const isValid = verifyCSRFToken(token, sessionToken);
      
      expect(isValid).toBe(true);
    });
    
    test('should reject invalid CSRF tokens', () => {
      const token = 'abc123';
      const sessionToken = 'xyz789';
      
      const isValid = verifyCSRFToken(token, sessionToken);
      
      expect(isValid).toBe(false);
    });
  });
  
  describe('Rate Limiting', () => {
    test('should allow requests within limit', async () => {
      const limiter = new RateLimiter({ maxRequests: 5, windowMs: 60000 });
      const mockReq = { ip: '127.0.0.1' };
      
      const result = await limiter.checkLimit(mockReq);
      
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBeLessThanOrEqual(5);
    });
    
    test('should block requests exceeding limit', async () => {
      const limiter = new RateLimiter({ maxRequests: 1, windowMs: 60000 });
      const mockReq = { ip: '127.0.0.1' };
      
      // First request should be allowed
      await limiter.checkLimit(mockReq);
      
      // Second request should be blocked
      const result = await limiter.checkLimit(mockReq);
      
      expect(result.allowed).toBe(false);
      expect(result.retryAfter).toBeGreaterThan(0);
    });
  });
});
```

### Penetration Testing Checklist

```javascript
// scripts/security-audit.js
const securityChecks = [
  {
    name: 'XSS Protection',
    test: async () => {
      const xssPayloads = [
        '<script>alert("xss")</script>',
        '<img src=x onerror=alert(1)>',
        'javascript:alert(1)',
        '<svg onload=alert(1)>'
      ];
      
      for (const payload of xssPayloads) {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: payload,
            email: 'test@example.com',
            message: 'test'
          })
        });
        
        if (response.ok) {
          throw new Error(`XSS payload not blocked: ${payload}`);
        }
      }
      
      return 'PASS';
    }
  },
  
  {
    name: 'SQL Injection Protection',
    test: async () => {
      const sqlPayloads = [
        "'; DROP TABLE users; --",
        "' OR '1'='1",
        "'; INSERT INTO users VALUES ('hacker', 'password'); --"
      ];
      
      for (const payload of sqlPayloads) {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: payload,
            email: 'test@example.com',
            message: 'test'
          })
        });
        
        if (response.ok) {
          throw new Error(`SQL injection not blocked: ${payload}`);
        }
      }
      
      return 'PASS';
    }
  },
  
  {
    name: 'Rate Limiting',
    test: async () => {
      const requests = [];
      
      // Send multiple requests rapidly
      for (let i = 0; i < 10; i++) {
        requests.push(
          fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: 'Test',
              email: 'test@example.com',
              message: 'test'
            })
          })
        );
      }
      
      const responses = await Promise.all(requests);
      const rateLimited = responses.some(r => r.status === 429);
      
      if (!rateLimited) {
        throw new Error('Rate limiting not working');
      }
      
      return 'PASS';
    }
  }
];

// Run security audit
async function runSecurityAudit() {
  console.log('Running security audit...\n');
  
  for (const check of securityChecks) {
    try {
      const result = await check.test();
      console.log(`✅ ${check.name}: ${result}`);
    } catch (error) {
      console.log(`❌ ${check.name}: ${error.message}`);
    }
  }
}

runSecurityAudit();
```

## Conclusion

Form security is not optional—it's essential. By implementing the security measures outlined in this guide, you can protect your forms from:

- **Input-based attacks** through validation and sanitization
- **CSRF attacks** with token verification
- **Bot attacks** using honeypots and behavioral analysis
- **DDoS attacks** through rate limiting
- **Data breaches** with encryption and proper access controls

Remember: security is a layered approach. No single measure is sufficient—you need multiple layers of protection working together.

**Key Takeaways:**
1. **Never trust user input** - validate and sanitize everything
2. **Implement CSRF protection** for state-changing operations
3. **Use rate limiting** to prevent abuse
4. **Deploy multiple bot detection methods**
5. **Encrypt sensitive data** at rest and in transit
6. **Monitor and alert** on security events
7. **Test your security measures** regularly

---

**Resources:**
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Web Security Guidelines](https://infosec.mozilla.org/guidelines/web_security)
- [CSRF Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)
- [Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)

**What security measures do you implement in your forms? Share your experiences and tips in the comments!**

---

**Tags**: #security #forms #webdev #csrf #xss #validation #ratelimiting #privacy #gdpr #javascript #nodejs #cybersecurity