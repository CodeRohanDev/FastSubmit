# Modern CSS Form Styling: Creating Beautiful, Accessible Forms with CSS Grid, Flexbox, and Custom Properties

*Published on Hashnode | Cross-posted to Dev.to & Medium*

![Modern CSS Forms](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800)

Forms are often the most challenging UI components to style well. They need to be functional, accessible, responsive, and beautiful—all while maintaining consistency across different browsers and devices. In this comprehensive guide, I'll show you how to create stunning, modern forms using the latest CSS techniques.

## The Foundation: Semantic HTML Structure

Before diving into styling, let's establish a solid HTML foundation:

```html
<form class="modern-form" novalidate>
  <div class="form-header">
    <h2 class="form-title">Get in Touch</h2>
    <p class="form-description">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
  </div>

  <div class="form-grid">
    <div class="field-group">
      <label for="firstName" class="field-label">
        First Name
        <span class="required-indicator" aria-label="required">*</span>
      </label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        class="field-input"
        required
        aria-describedby="firstName-error"
      >
      <div id="firstName-error" class="field-error" role="alert"></div>
    </div>

    <div class="field-group">
      <label for="lastName" class="field-label">
        Last Name
        <span class="required-indicator" aria-label="required">*</span>
      </label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        class="field-input"
        required
        aria-describedby="lastName-error"
      >
      <div id="lastName-error" class="field-error" role="alert"></div>
    </div>

    <div class="field-group field-group--full">
      <label for="email" class="field-label">
        Email Address
        <span class="required-indicator" aria-label="required">*</span>
      </label>
      <input
        id="email"
        name="email"
        type="email"
        class="field-input"
        required
        aria-describedby="email-error"
      >
      <div id="email-error" class="field-error" role="alert"></div>
    </div>

    <div class="field-group field-group--full">
      <label for="subject" class="field-label">Subject</label>
      <select id="subject" name="subject" class="field-select">
        <option value="">Choose a subject...</option>
        <option value="general">General Inquiry</option>
        <option value="support">Support</option>
        <option value="sales">Sales</option>
        <option value="partnership">Partnership</option>
      </select>
    </div>

    <div class="field-group field-group--full">
      <label for="message" class="field-label">
        Message
        <span class="required-indicator" aria-label="required">*</span>
      </label>
      <textarea
        id="message"
        name="message"
        class="field-textarea"
        rows="5"
        required
        aria-describedby="message-error"
      ></textarea>
      <div id="message-error" class="field-error" role="alert"></div>
    </div>

    <div class="field-group field-group--full">
      <label class="checkbox-label">
        <input type="checkbox" name="newsletter" class="checkbox-input">
        <span class="checkbox-custom"></span>
        <span class="checkbox-text">Subscribe to our newsletter for updates and tips</span>
      </label>
    </div>
  </div>

  <div class="form-actions">
    <button type="submit" class="btn btn--primary">
      <span class="btn-text">Send Message</span>
      <span class="btn-loader" aria-hidden="true"></span>
    </button>
    <button type="reset" class="btn btn--secondary">Reset Form</button>
  </div>

  <div class="form-status" role="status" aria-live="polite"></div>
</form>
```

## CSS Custom Properties for Design System

Start with a comprehensive set of CSS custom properties:

```css
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-primary-light: #93c5fd;
  
  --color-success: #10b981;
  --color-success-light: #d1fae5;
  
  --color-error: #ef4444;
  --color-error-light: #fee2e2;
  
  --color-warning: #f59e0b;
  --color-warning-light: #fef3c7;
  
  --color-neutral-50: #f9fafb;
  --color-neutral-100: #f3f4f6;
  --color-neutral-200: #e5e7eb;
  --color-neutral-300: #d1d5db;
  --color-neutral-400: #9ca3af;
  --color-neutral-500: #6b7280;
  --color-neutral-600: #4b5563;
  --color-neutral-700: #374151;
  --color-neutral-800: #1f2937;
  --color-neutral-900: #111827;
  
  /* Typography */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-family-mono: 'SF Mono', Monaco, Inconsolata, 'Roboto Mono', Consolas, 'Courier New', monospace;
  
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  
  /* Border radius */
  --radius-sm: 0.125rem;
  --radius-base: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;
  
  /* Form-specific variables */
  --form-max-width: 42rem;
  --field-height: 2.75rem;
  --field-padding-x: 0.875rem;
  --field-padding-y: 0.625rem;
  --field-border-width: 1px;
  --field-focus-ring-width: 3px;
  --field-focus-ring-opacity: 0.1;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --color-neutral-50: #111827;
    --color-neutral-100: #1f2937;
    --color-neutral-200: #374151;
    --color-neutral-300: #4b5563;
    --color-neutral-400: #6b7280;
    --color-neutral-500: #9ca3af;
    --color-neutral-600: #d1d5db;
    --color-neutral-700: #e5e7eb;
    --color-neutral-800: #f3f4f6;
    --color-neutral-900: #f9fafb;
  }
}
```

## Modern Form Layout with CSS Grid

Create a responsive, flexible form layout:

```css
.modern-form {
  max-width: var(--form-max-width);
  margin: 0 auto;
  padding: var(--space-8);
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  font-family: var(--font-family-base);
}

.form-header {
  text-align: center;
  margin-bottom: var(--space-8);
}

.form-title {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-neutral-900);
  margin: 0 0 var(--space-4) 0;
  line-height: var(--line-height-tight);
}

.form-description {
  font-size: var(--font-size-lg);
  color: var(--color-neutral-600);
  margin: 0;
  line-height: var(--line-height-relaxed);
}

/* CSS Grid Layout */
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}

.field-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.field-group--full {
  grid-column: 1 / -1;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .modern-form {
    padding: var(--space-6);
  }
  
  .form-grid {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }
  
  .field-group--full {
    grid-column: 1;
  }
}
```

## Advanced Input Styling

Create beautiful, consistent form inputs:

```css
/* Base field styles */
.field-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-700);
  line-height: var(--line-height-normal);
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.required-indicator {
  color: var(--color-error);
  font-weight: var(--font-weight-bold);
}

/* Input field base styles */
.field-input,
.field-select,
.field-textarea {
  width: 100%;
  height: var(--field-height);
  padding: var(--field-padding-y) var(--field-padding-x);
  font-size: var(--font-size-base);
  font-family: inherit;
  line-height: var(--line-height-normal);
  color: var(--color-neutral-900);
  background-color: white;
  border: var(--field-border-width) solid var(--color-neutral-300);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  outline: none;
  appearance: none;
}

.field-textarea {
  height: auto;
  resize: vertical;
  min-height: calc(var(--field-height) * 2.5);
}

/* Focus states */
.field-input:focus,
.field-select:focus,
.field-textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 
    0 0 0 var(--field-focus-ring-width) rgb(59 130 246 / var(--field-focus-ring-opacity)),
    var(--shadow-sm);
}

/* Hover states */
.field-input:hover:not(:focus),
.field-select:hover:not(:focus),
.field-textarea:hover:not(:focus) {
  border-color: var(--color-neutral-400);
}

/* Placeholder styles */
.field-input::placeholder,
.field-textarea::placeholder {
  color: var(--color-neutral-400);
  opacity: 1;
}

/* Disabled states */
.field-input:disabled,
.field-select:disabled,
.field-textarea:disabled {
  background-color: var(--color-neutral-50);
  color: var(--color-neutral-400);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Validation states */
.field-input:valid:not(:placeholder-shown),
.field-select:valid:not([value=""]),
.field-textarea:valid:not(:placeholder-shown) {
  border-color: var(--color-success);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%2310b981'%3e%3cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'/%3e%3c/svg%3e");
  background-position: right var(--field-padding-x) center;
  background-repeat: no-repeat;
  background-size: 1.25rem;
  padding-right: calc(var(--field-padding-x) * 2.5);
}

.field-input:invalid:not(:placeholder-shown):not(:focus),
.field-select:invalid:not([value=""]):not(:focus),
.field-textarea:invalid:not(:placeholder-shown):not(:focus) {
  border-color: var(--color-error);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23ef4444'%3e%3cpath fill-rule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z' clip-rule='evenodd'/%3e%3c/svg%3e");
  background-position: right var(--field-padding-x) center;
  background-repeat: no-repeat;
  background-size: 1.25rem;
  padding-right: calc(var(--field-padding-x) * 2.5);
}

/* Error message styles */
.field-error {
  font-size: var(--font-size-sm);
  color: var(--color-error);
  line-height: var(--line-height-normal);
  display: none;
  margin-top: var(--space-1);
}

.field-error:not(:empty) {
  display: block;
}

/* Success message styles */
.field-success {
  font-size: var(--font-size-sm);
  color: var(--color-success);
  line-height: var(--line-height-normal);
  display: none;
  margin-top: var(--space-1);
}

.field-success:not(:empty) {
  display: block;
}
```

## Custom Select Dropdown

Create a beautiful, accessible select dropdown:

```css
.field-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right var(--field-padding-x) center;
  background-repeat: no-repeat;
  background-size: 1.25rem;
  padding-right: calc(var(--field-padding-x) * 2.5);
  cursor: pointer;
}

.field-select:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%233b82f6' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
}

/* Custom select option styling (limited browser support) */
.field-select option {
  padding: var(--space-2) var(--field-padding-x);
  background-color: white;
  color: var(--color-neutral-900);
}

.field-select option:checked {
  background-color: var(--color-primary);
  color: white;
}
```

## Custom Checkbox and Radio Styling

Create beautiful custom checkboxes and radio buttons:

```css
/* Custom checkbox */
.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  cursor: pointer;
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-neutral-700);
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.checkbox-custom {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  border: var(--field-border-width) solid var(--color-neutral-300);
  border-radius: var(--radius-base);
  background-color: white;
  transition: all var(--transition-base);
  position: relative;
  margin-top: 0.125rem; /* Align with text */
}

.checkbox-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 0.75rem;
  height: 0.75rem;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3e%3cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'/%3e%3c/svg%3e");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform var(--transition-base);
}

.checkbox-input:checked + .checkbox-custom {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.checkbox-input:checked + .checkbox-custom::after {
  transform: translate(-50%, -50%) scale(1);
}

.checkbox-input:focus + .checkbox-custom {
  box-shadow: 0 0 0 var(--field-focus-ring-width) rgb(59 130 246 / var(--field-focus-ring-opacity));
}

.checkbox-label:hover .checkbox-custom {
  border-color: var(--color-neutral-400);
}

.checkbox-input:checked + .checkbox-custom:hover {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
}

/* Custom radio button */
.radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.radio-label {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  cursor: pointer;
  font-size: var(--font-size-sm);
  color: var(--color-neutral-700);
}

.radio-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.radio-custom {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  border: var(--field-border-width) solid var(--color-neutral-300);
  border-radius: var(--radius-full);
  background-color: white;
  transition: all var(--transition-base);
  position: relative;
}

.radio-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 0.5rem;
  height: 0.5rem;
  background-color: white;
  border-radius: var(--radius-full);
  transition: transform var(--transition-base);
}

.radio-input:checked + .radio-custom {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}

.radio-input:checked + .radio-custom::after {
  transform: translate(-50%, -50%) scale(1);
}

.radio-input:focus + .radio-custom {
  box-shadow: 0 0 0 var(--field-focus-ring-width) rgb(59 130 246 / var(--field-focus-ring-opacity));
}
```

## Modern Button Styling

Create beautiful, interactive buttons:

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--field-padding-y) var(--space-6);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  font-family: inherit;
  line-height: var(--line-height-normal);
  text-decoration: none;
  border: var(--field-border-width) solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
  outline: none;
  position: relative;
  overflow: hidden;
  min-height: var(--field-height);
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Primary button */
.btn--primary {
  background-color: var(--color-primary);
  color: white;
  box-shadow: var(--shadow-sm);
}

.btn--primary:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.btn--primary:focus {
  box-shadow: 
    0 0 0 var(--field-focus-ring-width) rgb(59 130 246 / var(--field-focus-ring-opacity)),
    var(--shadow-md);
}

.btn--primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

/* Secondary button */
.btn--secondary {
  background-color: white;
  color: var(--color-neutral-700);
  border-color: var(--color-neutral-300);
}

.btn--secondary:hover:not(:disabled) {
  background-color: var(--color-neutral-50);
  border-color: var(--color-neutral-400);
}

.btn--secondary:focus {
  box-shadow: 0 0 0 var(--field-focus-ring-width) rgb(107 114 128 / var(--field-focus-ring-opacity));
}

/* Button loading state */
.btn-loader {
  display: none;
  width: 1rem;
  height: 1rem;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: var(--radius-full);
  animation: spin 1s linear infinite;
}

.btn--loading .btn-text {
  opacity: 0;
}

.btn--loading .btn-loader {
  display: block;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Form actions layout */
.form-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: flex-end;
  margin-bottom: var(--space-6);
}

@media (max-width: 640px) {
  .form-actions {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
```

## Advanced Form States and Animations

Add smooth transitions and micro-interactions:

```css
/* Form status messages */
.form-status {
  padding: var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-align: center;
  opacity: 0;
  transform: translateY(-10px);
  transition: all var(--transition-base);
  pointer-events: none;
}

.form-status--visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.form-status--success {
  background-color: var(--color-success-light);
  color: var(--color-success);
  border: 1px solid var(--color-success);
}

.form-status--error {
  background-color: var(--color-error-light);
  color: var(--color-error);
  border: 1px solid var(--color-error);
}

/* Field focus animations */
.field-group {
  position: relative;
}

.field-group::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--color-primary-light), var(--color-primary));
  opacity: 0;
  border-radius: var(--radius-lg);
  transition: opacity var(--transition-base);
  pointer-events: none;
  z-index: -1;
  transform: scale(1.02);
}

.field-group:focus-within::before {
  opacity: 0.05;
}

/* Floating label animation */
.field-group--floating {
  position: relative;
}

.field-label--floating {
  position: absolute;
  top: var(--field-padding-y);
  left: var(--field-padding-x);
  font-size: var(--font-size-base);
  color: var(--color-neutral-400);
  pointer-events: none;
  transition: all var(--transition-base);
  transform-origin: left top;
  z-index: 1;
}

.field-input--floating {
  padding-top: calc(var(--field-padding-y) * 1.5);
}

.field-input--floating:focus + .field-label--floating,
.field-input--floating:not(:placeholder-shown) + .field-label--floating {
  transform: translateY(-50%) scale(0.75);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
}

/* Progress indicator */
.form-progress {
  margin-bottom: var(--space-6);
  padding: var(--space-4);
  background-color: var(--color-neutral-50);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-neutral-200);
}

.progress-bar {
  width: 100%;
  height: 0.5rem;
  background-color: var(--color-neutral-200);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin-bottom: var(--space-2);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
  border-radius: var(--radius-full);
  transition: width var(--transition-slow);
  width: 0%;
}

.progress-text {
  font-size: var(--font-size-sm);
  color: var(--color-neutral-600);
  text-align: center;
}

/* Multi-step form styling */
.step-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

.step-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.step-number {
  width: 2rem;
  height: 2rem;
  border-radius: var(--radius-full);
  background-color: var(--color-neutral-200);
  color: var(--color-neutral-600);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  transition: all var(--transition-base);
}

.step-item--active .step-number {
  background-color: var(--color-primary);
  color: white;
}

.step-item--completed .step-number {
  background-color: var(--color-success);
  color: white;
}

.step-connector {
  width: 2rem;
  height: 2px;
  background-color: var(--color-neutral-200);
  transition: background-color var(--transition-base);
}

.step-connector--completed {
  background-color: var(--color-success);
}

/* File upload styling */
.file-upload {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-8);
  border: 2px dashed var(--color-neutral-300);
  border-radius: var(--radius-lg);
  background-color: var(--color-neutral-50);
  transition: all var(--transition-base);
  cursor: pointer;
}

.file-upload:hover {
  border-color: var(--color-primary);
  background-color: var(--color-primary-light);
}

.file-upload--dragover {
  border-color: var(--color-primary);
  background-color: var(--color-primary-light);
  transform: scale(1.02);
}

.file-upload-input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}

.file-upload-icon {
  width: 3rem;
  height: 3rem;
  color: var(--color-neutral-400);
  margin-bottom: var(--space-4);
}

.file-upload-text {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-700);
  margin-bottom: var(--space-2);
}

.file-upload-hint {
  font-size: var(--font-size-sm);
  color: var(--color-neutral-500);
}
```

## Responsive Design and Mobile Optimization

Ensure forms work perfectly on all devices:

```css
/* Mobile-first responsive design */
@media (max-width: 480px) {
  .modern-form {
    padding: var(--space-4);
    margin: var(--space-4);
  }
  
  .form-title {
    font-size: var(--font-size-2xl);
  }
  
  .form-description {
    font-size: var(--font-size-base);
  }
  
  .field-input,
  .field-select,
  .field-textarea {
    font-size: 16px; /* Prevent zoom on iOS */
  }
  
  .btn {
    padding: var(--space-4) var(--space-6);
    font-size: var(--font-size-lg);
    min-height: 3rem;
  }
}

/* Tablet adjustments */
@media (min-width: 641px) and (max-width: 1024px) {
  .form-grid {
    gap: var(--space-5);
  }
  
  .modern-form {
    padding: var(--space-6);
  }
}

/* Large screen optimizations */
@media (min-width: 1025px) {
  .modern-form {
    padding: var(--space-10);
  }
  
  .form-grid {
    gap: var(--space-8);
  }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .field-input,
  .field-select,
  .field-textarea {
    border-width: 0.5px;
  }
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .field-input,
  .field-select,
  .field-textarea {
    border-width: 2px;
  }
  
  .btn {
    border-width: 2px;
  }
  
  .checkbox-custom,
  .radio-custom {
    border-width: 2px;
  }
}
```

## JavaScript Integration for Enhanced UX

Add JavaScript to enhance the form experience:

```javascript
class ModernForm {
  constructor(formElement) {
    this.form = formElement;
    this.fields = this.form.querySelectorAll('.field-input, .field-select, .field-textarea');
    this.submitButton = this.form.querySelector('button[type="submit"]');
    this.statusElement = this.form.querySelector('.form-status');
    
    this.init();
  }
  
  init() {
    this.addEventListeners();
    this.initializeFloatingLabels();
    this.initializeProgressTracking();
    this.initializeFileUpload();
  }
  
  addEventListeners() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    
    this.fields.forEach(field => {
      field.addEventListener('blur', this.handleFieldBlur.bind(this));
      field.addEventListener('input', this.handleFieldInput.bind(this));
      field.addEventListener('focus', this.handleFieldFocus.bind(this));
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    
    if (this.validateForm()) {
      this.submitForm();
    }
  }
  
  handleFieldBlur(event) {
    const field = event.target;
    this.validateField(field);
    this.updateFloatingLabel(field);
  }
  
  handleFieldInput(event) {
    const field = event.target;
    this.clearFieldError(field);
    this.updateFloatingLabel(field);
    this.updateProgress();
  }
  
  handleFieldFocus(event) {
    const field = event.target;
    this.clearFieldError(field);
  }
  
  validateField(field) {
    const isValid = field.checkValidity();
    
    if (!isValid) {
      this.showFieldError(field, field.validationMessage);
    } else {
      this.showFieldSuccess(field);
    }
    
    return isValid;
  }
  
  validateForm() {
    let isValid = true;
    
    this.fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });
    
    return isValid;
  }
  
  showFieldError(field, message) {
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
    
    field.classList.add('field--error');
    field.classList.remove('field--success');
    field.setAttribute('aria-invalid', 'true');
  }
  
  showFieldSuccess(field) {
    field.classList.add('field--success');
    field.classList.remove('field--error');
    field.setAttribute('aria-invalid', 'false');
  }
  
  clearFieldError(field) {
    const errorElement = field.parentNode.querySelector('.field-error');
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }
    
    field.classList.remove('field--error', 'field--success');
    field.setAttribute('aria-invalid', 'false');
  }
  
  initializeFloatingLabels() {
    this.fields.forEach(field => {
      if (field.classList.contains('field-input--floating')) {
        this.updateFloatingLabel(field);
      }
    });
  }
  
  updateFloatingLabel(field) {
    const label = field.parentNode.querySelector('.field-label--floating');
    if (label) {
      if (field.value || field === document.activeElement) {
        label.classList.add('field-label--active');
      } else {
        label.classList.remove('field-label--active');
      }
    }
  }
  
  initializeProgressTracking() {
    this.updateProgress();
  }
  
  updateProgress() {
    const requiredFields = Array.from(this.fields).filter(field => field.required);
    const completedFields = requiredFields.filter(field => field.value.trim() !== '');
    const progress = (completedFields.length / requiredFields.length) * 100;
    
    const progressFill = this.form.querySelector('.progress-fill');
    const progressText = this.form.querySelector('.progress-text');
    
    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }
    
    if (progressText) {
      progressText.textContent = `Form completion: ${Math.round(progress)}%`;
    }
  }
  
  initializeFileUpload() {
    const fileUploads = this.form.querySelectorAll('.file-upload');
    
    fileUploads.forEach(upload => {
      const input = upload.querySelector('.file-upload-input');
      
      upload.addEventListener('dragover', (e) => {
        e.preventDefault();
        upload.classList.add('file-upload--dragover');
      });
      
      upload.addEventListener('dragleave', () => {
        upload.classList.remove('file-upload--dragover');
      });
      
      upload.addEventListener('drop', (e) => {
        e.preventDefault();
        upload.classList.remove('file-upload--dragover');
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
          input.files = files;
          this.handleFileSelection(upload, files);
        }
      });
      
      input.addEventListener('change', (e) => {
        this.handleFileSelection(upload, e.target.files);
      });
    });
  }
  
  handleFileSelection(upload, files) {
    const fileList = Array.from(files);
    const fileNames = fileList.map(file => file.name).join(', ');
    
    const text = upload.querySelector('.file-upload-text');
    if (text) {
      text.textContent = `Selected: ${fileNames}`;
    }
  }
  
  async submitForm() {
    this.setSubmitLoading(true);
    
    try {
      const formData = new FormData(this.form);
      const response = await fetch(this.form.action || '/api/contact', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        this.showStatus('success', 'Form submitted successfully!');
        this.form.reset();
        this.updateProgress();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      this.showStatus('error', 'Failed to submit form. Please try again.');
    } finally {
      this.setSubmitLoading(false);
    }
  }
  
  setSubmitLoading(loading) {
    if (loading) {
      this.submitButton.classList.add('btn--loading');
      this.submitButton.disabled = true;
    } else {
      this.submitButton.classList.remove('btn--loading');
      this.submitButton.disabled = false;
    }
  }
  
  showStatus(type, message) {
    if (this.statusElement) {
      this.statusElement.textContent = message;
      this.statusElement.className = `form-status form-status--${type} form-status--visible`;
      
      // Auto-hide success messages
      if (type === 'success') {
        setTimeout(() => {
          this.statusElement.classList.remove('form-status--visible');
        }, 5000);
      }
    }
  }
}

// Initialize forms
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.modern-form');
  forms.forEach(form => new ModernForm(form));
});
```

## Accessibility Enhancements

Ensure your forms are accessible to all users:

```css
/* Focus management */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* High contrast focus indicators */
.field-input:focus,
.field-select:focus,
.field-textarea:focus,
.btn:focus,
.checkbox-input:focus + .checkbox-custom,
.radio-input:focus + .radio-custom {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

@media (forced-colors: active) {
  .field-input:focus,
  .field-select:focus,
  .field-textarea:focus,
  .btn:focus {
    outline: 2px solid ButtonText;
  }
}

/* Error announcements */
.field-error[role="alert"] {
  /* Ensure errors are announced by screen readers */
}

/* Form instructions */
.form-instructions {
  font-size: var(--font-size-sm);
  color: var(--color-neutral-600);
  margin-bottom: var(--space-6);
  padding: var(--space-4);
  background-color: var(--color-neutral-50);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--color-primary);
}

/* Required field legend */
.required-legend {
  font-size: var(--font-size-sm);
  color: var(--color-neutral-600);
  margin-bottom: var(--space-4);
}

.required-legend::before {
  content: '* ';
  color: var(--color-error);
  font-weight: var(--font-weight-bold);
}
```

## Performance Optimization

Optimize your CSS for better performance:

```css
/* Use contain for better performance */
.modern-form {
  contain: layout style;
}

.field-group {
  contain: layout;
}

/* Optimize animations */
.field-input,
.field-select,
.field-textarea,
.btn,
.checkbox-custom,
.radio-custom {
  will-change: auto;
}

.field-input:focus,
.field-select:focus,
.field-textarea:focus {
  will-change: border-color, box-shadow;
}

.btn:hover {
  will-change: background-color, transform, box-shadow;
}

/* Use transform for better performance */
.form-status {
  transform: translateZ(0); /* Force hardware acceleration */
}

/* Optimize custom property usage */
.field-input {
  /* Group related properties */
  border: var(--field-border-width) solid var(--color-neutral-300);
  border-radius: var(--radius-md);
  padding: var(--field-padding-y) var(--field-padding-x);
}
```

## Conclusion

Modern CSS form styling combines aesthetics with functionality, accessibility, and performance. Key takeaways:

1. **Start with semantic HTML** - Proper structure is the foundation
2. **Use CSS custom properties** - Create a consistent design system
3. **Leverage CSS Grid and Flexbox** - Build responsive, flexible layouts
4. **Focus on accessibility** - Ensure forms work for everyone
5. **Add progressive enhancement** - Layer on JavaScript improvements
6. **Test across devices** - Ensure consistent experience everywhere
7. **Optimize performance** - Use efficient CSS patterns

The techniques in this guide will help you create forms that are not only beautiful but also functional, accessible, and maintainable.

---

**Resources:**
- [CSS Grid Layout Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

**What CSS techniques do you use for form styling? Share your favorite patterns in the comments!**

---

**Tags**: #css #forms #webdev #accessibility #responsive #design #frontend #ux #grid #flexbox #customproperties