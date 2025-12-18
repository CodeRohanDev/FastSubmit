# Comprehensive Form Testing: Strategies for Bulletproof Web Forms

*Published on Medium | Cross-posted to Dev.to & Hashnode*

![Form Testing](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800)

Testing forms is often overlooked, yet forms are critical user interaction points that directly impact business outcomes. A single bug in form validation, submission, or state management can cost conversions, user trust, and revenue. After testing hundreds of forms across different frameworks and use cases, I've developed comprehensive strategies that catch bugs before users do.

## The Form Testing Pyramid

Form testing follows a pyramid structure with different layers of testing:

```
    /\
   /  \    E2E Tests (Few)
  /____\   
 /      \   Integration Tests (Some)
/________\  Unit Tests (Many)
```

Let's explore each layer with practical examples.

## Unit Testing Form Components

Start with testing individual form components in isolation:

```javascript
// FormField.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormField from '../FormField';

describe('FormField Component', () => {
  const defaultProps = {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    value: '',
    onChange: jest.fn(),
    onBlur: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders field with correct attributes', () => {
    render(<FormField {...defaultProps} />);
    
    const input = screen.getByLabelText('Email Address');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('name', 'email');
  });

  test('calls onChange when user types', async () => {
    const user = userEvent.setup();
    render(<FormField {...defaultProps} />);
    
    const input = screen.getByLabelText('Email Address');
    await user.type(input, 'test@example.com');
    
    expect(defaultProps.onChange).toHaveBeenCalledTimes(17); // Each character
    expect(defaultProps.onChange).toHaveBeenLastCalledWith('test@example.com');
  });

  test('calls onBlur when field loses focus', async () => {
    const user = userEvent.setup();
    render(<FormField {...defaultProps} />);
    
    const input = screen.getByLabelText('Email Address');
    await user.click(input);
    await user.tab(); // Move focus away
    
    expect(defaultProps.onBlur).toHaveBeenCalledTimes(1);
  });

  test('displays error message when provided', () => {
    render(
      <FormField 
        {...defaultProps} 
        error="Please enter a valid email address"
        touched={true}
      />
    );
    
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toHaveClass('error');
  });

  test('does not display error when field is not touched', () => {
    render(
      <FormField 
        {...defaultProps} 
        error="Please enter a valid email address"
        touched={false}
      />
    );
    
    expect(screen.queryByText('Please enter a valid email address')).not.toBeInTheDocument();
  });

  test('handles required field validation', () => {
    render(<FormField {...defaultProps} required />);
    
    const input = screen.getByLabelText('Email Address');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  test('supports different input types', () => {
    const { rerender } = render(<FormField {...defaultProps} type="password" />);
    expect(screen.getByLabelText('Email Address')).toHaveAttribute('type', 'password');
    
    rerender(<FormField {...defaultProps} type="tel" />);
    expect(screen.getByLabelText('Email Address')).toHaveAttribute('type', 'tel');
  });

  test('handles disabled state', () => {
    render(<FormField {...defaultProps} disabled />);
    
    const input = screen.getByLabelText('Email Address');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('aria-disabled', 'true');
  });
});

// FormValidation.test.js
import { validateEmail, validateRequired, validateMinLength } from '../validation';

describe('Form Validation Functions', () => {
  describe('validateEmail', () => {
    test('validates correct email addresses', () => {
      const validEmails = [
        'test@example.com',
        'user.name@domain.co.uk',
        'user+tag@example.org',
        'user123@test-domain.com'
      ];

      validEmails.forEach(email => {
        expect(validateEmail(email)).toEqual({ isValid: true });
      });
    });

    test('rejects invalid email addresses', () => {
      const invalidEmails = [
        'invalid-email',
        '@example.com',
        'user@',
        'user..name@example.com',
        'user@.com',
        ''
      ];

      invalidEmails.forEach(email => {
        const result = validateEmail(email);
        expect(result.isValid).toBe(false);
        expect(result.error).toBeDefined();
      });
    });
  });

  describe('validateRequired', () => {
    test('passes for non-empty values', () => {
      expect(validateRequired('test')).toEqual({ isValid: true });
      expect(validateRequired('0')).toEqual({ isValid: true });
      expect(validateRequired(false)).toEqual({ isValid: true });
    });

    test('fails for empty values', () => {
      const emptyValues = ['', '   ', null, undefined];
      
      emptyValues.forEach(value => {
        const result = validateRequired(value);
        expect(result.isValid).toBe(false);
        expect(result.error).toBe('This field is required');
      });
    });
  });

  describe('validateMinLength', () => {
    test('passes for strings meeting minimum length', () => {
      expect(validateMinLength('hello', 3)).toEqual({ isValid: true });
      expect(validateMinLength('test', 4)).toEqual({ isValid: true });
    });

    test('fails for strings below minimum length', () => {
      const result = validateMinLength('hi', 5);
      expect(result.isValid).toBe(false);
      expect(result.error).toBe('Minimum length is 5 characters');
    });
  });
});
```

## Integration Testing Form Behavior

Test how form components work together:

```javascript
// ContactForm.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ContactForm from '../ContactForm';

// Mock API server
const server = setupServer(
  rest.post('/api/contact', (req, res, ctx) => {
    return res(ctx.json({ success: true, id: '12345' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('ContactForm Integration', () => {
  test('submits form with valid data', async () => {
    const user = userEvent.setup();
    const onSuccess = jest.fn();
    
    render(<ContactForm onSuccess={onSuccess} />);
    
    // Fill out form
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Hello, this is a test message.');
    
    // Submit form
    await user.click(screen.getByRole('button', { name: /submit/i }));
    
    // Wait for submission
    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalledWith({ success: true, id: '12345' });
    });
    
    // Check success message
    expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
  });

  test('displays validation errors for invalid data', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    // Try to submit empty form
    await user.click(screen.getByRole('button', { name: /submit/i }));
    
    // Check for validation errors
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
    
    // Form should not be submitted
    expect(screen.queryByText(/message sent successfully/i)).not.toBeInTheDocument();
  });

  test('handles server errors gracefully', async () => {
    // Mock server error
    server.use(
      rest.post('/api/contact', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'Server error' }));
      })
    );

    const user = userEvent.setup();
    render(<ContactForm />);
    
    // Fill out form with valid data
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Test message');
    
    // Submit form
    await user.click(screen.getByRole('button', { name: /submit/i }));
    
    // Check for error message
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });

  test('prevents double submission', async () => {
    const user = userEvent.setup();
    let requestCount = 0;
    
    server.use(
      rest.post('/api/contact', (req, res, ctx) => {
        requestCount++;
        // Simulate slow response
        return res(ctx.delay(1000), ctx.json({ success: true }));
      })
    );

    render(<ContactForm />);
    
    // Fill out form
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Test message');
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    // Click submit multiple times quickly
    await user.click(submitButton);
    await user.click(submitButton);
    await user.click(submitButton);
    
    // Button should be disabled during submission
    expect(submitButton).toBeDisabled();
    expect(screen.getByText(/sending/i)).toBeInTheDocument();
    
    // Wait for completion
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    }, { timeout: 2000 });
    
    // Should only have made one request
    expect(requestCount).toBe(1);
  });

  test('validates email format in real-time', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    
    // Type invalid email
    await user.type(emailInput, 'invalid-email');
    await user.tab(); // Trigger blur
    
    await waitFor(() => {
      expect(screen.getByText(/please enter a valid email/i)).toBeInTheDocument();
    });
    
    // Clear and type valid email
    await user.clear(emailInput);
    await user.type(emailInput, 'valid@example.com');
    await user.tab();
    
    await waitFor(() => {
      expect(screen.queryByText(/please enter a valid email/i)).not.toBeInTheDocument();
    });
  });
});
```

## End-to-End Form Testing

Test complete user workflows with tools like Cypress or Playwright:

```javascript
// cypress/integration/contact-form.spec.js
describe('Contact Form E2E', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('successfully submits contact form', () => {
    // Intercept API call
    cy.intercept('POST', '/api/contact', {
      statusCode: 200,
      body: { success: true, id: '12345' }
    }).as('submitContact');

    // Fill out form
    cy.get('[data-testid="name-input"]').type('John Doe');
    cy.get('[data-testid="email-input"]').type('john@example.com');
    cy.get('[data-testid="message-input"]').type('This is a test message from Cypress.');
    
    // Submit form
    cy.get('[data-testid="submit-button"]').click();
    
    // Wait for API call
    cy.wait('@submitContact');
    
    // Check success message
    cy.get('[data-testid="success-message"]').should('be.visible');
    cy.get('[data-testid="success-message"]').should('contain', 'Message sent successfully');
    
    // Form should be reset
    cy.get('[data-testid="name-input"]').should('have.value', '');
    cy.get('[data-testid="email-input"]').should('have.value', '');
    cy.get('[data-testid="message-input"]').should('have.value', '');
  });

  it('displays validation errors for empty form', () => {
    // Try to submit empty form
    cy.get('[data-testid="submit-button"]').click();
    
    // Check validation errors
    cy.get('[data-testid="name-error"]').should('be.visible');
    cy.get('[data-testid="email-error"]').should('be.visible');
    cy.get('[data-testid="message-error"]').should('be.visible');
    
    // Form should not be submitted
    cy.get('[data-testid="success-message"]').should('not.exist');
  });

  it('handles network errors gracefully', () => {
    // Mock network error
    cy.intercept('POST', '/api/contact', {
      statusCode: 500,
      body: { error: 'Internal server error' }
    }).as('submitContactError');

    // Fill and submit form
    cy.get('[data-testid="name-input"]').type('John Doe');
    cy.get('[data-testid="email-input"]').type('john@example.com');
    cy.get('[data-testid="message-input"]').type('Test message');
    cy.get('[data-testid="submit-button"]').click();
    
    cy.wait('@submitContactError');
    
    // Check error message
    cy.get('[data-testid="error-message"]').should('be.visible');
    cy.get('[data-testid="error-message"]').should('contain', 'Something went wrong');
    
    // Form data should be preserved
    cy.get('[data-testid="name-input"]').should('have.value', 'John Doe');
    cy.get('[data-testid="email-input"]').should('have.value', 'john@example.com');
  });

  it('validates email format with visual feedback', () => {
    const emailInput = '[data-testid="email-input"]';
    
    // Type invalid email
    cy.get(emailInput).type('invalid-email');
    cy.get(emailInput).blur();
    
    // Check error styling
    cy.get(emailInput).should('have.class', 'error');
    cy.get('[data-testid="email-error"]').should('contain', 'Please enter a valid email');
    
    // Fix email
    cy.get(emailInput).clear().type('valid@example.com');
    cy.get(emailInput).blur();
    
    // Error should be cleared
    cy.get(emailInput).should('not.have.class', 'error');
    cy.get('[data-testid="email-error"]').should('not.exist');
  });

  it('supports keyboard navigation', () => {
    // Tab through form fields
    cy.get('body').tab();
    cy.focused().should('have.attr', 'data-testid', 'name-input');
    
    cy.focused().tab();
    cy.focused().should('have.attr', 'data-testid', 'email-input');
    
    cy.focused().tab();
    cy.focused().should('have.attr', 'data-testid', 'message-input');
    
    cy.focused().tab();
    cy.focused().should('have.attr', 'data-testid', 'submit-button');
    
    // Submit with Enter key
    cy.get('[data-testid="name-input"]').type('John Doe');
    cy.get('[data-testid="email-input"]').type('john@example.com');
    cy.get('[data-testid="message-input"]').type('Test message{enter}');
    
    // Should trigger form submission
    cy.get('[data-testid="submit-button"]').should('be.disabled');
  });
});

// playwright/contact-form.spec.js
import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('submits form successfully', async ({ page }) => {
    // Mock API response
    await page.route('/api/contact', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, id: '12345' })
      });
    });

    // Fill form
    await page.fill('[data-testid="name-input"]', 'John Doe');
    await page.fill('[data-testid="email-input"]', 'john@example.com');
    await page.fill('[data-testid="message-input"]', 'Test message from Playwright');
    
    // Submit
    await page.click('[data-testid="submit-button"]');
    
    // Verify success
    await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
    await expect(page.locator('[data-testid="success-message"]')).toContainText('Message sent successfully');
  });

  test('handles form validation', async ({ page }) => {
    // Submit empty form
    await page.click('[data-testid="submit-button"]');
    
    // Check validation errors
    await expect(page.locator('[data-testid="name-error"]')).toBeVisible();
    await expect(page.locator('[data-testid="email-error"]')).toBeVisible();
    await expect(page.locator('[data-testid="message-error"]')).toBeVisible();
  });

  test('works on mobile devices', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Form should be responsive
    const form = page.locator('[data-testid="contact-form"]');
    await expect(form).toBeVisible();
    
    // Fields should be touch-friendly
    const nameInput = page.locator('[data-testid="name-input"]');
    const boundingBox = await nameInput.boundingBox();
    expect(boundingBox?.height).toBeGreaterThan(44); // iOS minimum touch target
    
    // Test mobile keyboard
    await nameInput.tap();
    await expect(nameInput).toBeFocused();
  });

  test('supports accessibility features', async ({ page }) => {
    // Check ARIA labels
    await expect(page.locator('[data-testid="name-input"]')).toHaveAttribute('aria-label');
    await expect(page.locator('[data-testid="email-input"]')).toHaveAttribute('aria-label');
    
    // Check form structure
    await expect(page.locator('form')).toHaveAttribute('role', 'form');
    
    // Test screen reader announcements
    await page.fill('[data-testid="email-input"]', 'invalid');
    await page.blur('[data-testid="email-input"]');
    
    const errorMessage = page.locator('[data-testid="email-error"]');
    await expect(errorMessage).toHaveAttribute('role', 'alert');
    await expect(errorMessage).toHaveAttribute('aria-live', 'polite');
  });
});
```

## Visual Regression Testing

Catch visual bugs in form styling and layout:

```javascript
// visual-regression.test.js
import { test, expect } from '@playwright/test';

test.describe('Form Visual Regression', () => {
  test('contact form default state', async ({ page }) => {
    await page.goto('/contact');
    await expect(page).toHaveScreenshot('contact-form-default.png');
  });

  test('contact form with validation errors', async ({ page }) => {
    await page.goto('/contact');
    await page.click('[data-testid="submit-button"]');
    
    // Wait for errors to appear
    await page.waitForSelector('[data-testid="name-error"]');
    
    await expect(page).toHaveScreenshot('contact-form-errors.png');
  });

  test('contact form success state', async ({ page }) => {
    await page.route('/api/contact', async route => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify({ success: true })
      });
    });

    await page.goto('/contact');
    await page.fill('[data-testid="name-input"]', 'John Doe');
    await page.fill('[data-testid="email-input"]', 'john@example.com');
    await page.fill('[data-testid="message-input"]', 'Test message');
    await page.click('[data-testid="submit-button"]');
    
    await page.waitForSelector('[data-testid="success-message"]');
    await expect(page).toHaveScreenshot('contact-form-success.png');
  });

  test('form responsive design', async ({ page }) => {
    await page.goto('/contact');
    
    // Desktop
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page).toHaveScreenshot('contact-form-desktop.png');
    
    // Tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page).toHaveScreenshot('contact-form-tablet.png');
    
    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page).toHaveScreenshot('contact-form-mobile.png');
  });
});
```

## Performance Testing

Test form performance under various conditions:

```javascript
// performance.test.js
import { test, expect } from '@playwright/test';

test.describe('Form Performance', () => {
  test('large form renders quickly', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/large-form');
    await page.waitForSelector('[data-testid="form-loaded"]');
    
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000); // Should load within 3 seconds
  });

  test('form validation is responsive', async ({ page }) => {
    await page.goto('/contact');
    
    const input = page.locator('[data-testid="email-input"]');
    
    // Measure validation response time
    const startTime = Date.now();
    await input.fill('invalid-email');
    await input.blur();
    await page.waitForSelector('[data-testid="email-error"]');
    const validationTime = Date.now() - startTime;
    
    expect(validationTime).toBeLessThan(500); // Validation should be instant
  });

  test('form handles rapid input changes', async ({ page }) => {
    await page.goto('/contact');
    
    const input = page.locator('[data-testid="name-input"]');
    
    // Rapid typing simulation
    const text = 'This is a very long name that someone might type very quickly';
    for (const char of text) {
      await input.type(char, { delay: 10 }); // Very fast typing
    }
    
    // Form should remain responsive
    await expect(input).toHaveValue(text);
    
    // No JavaScript errors should occur
    const errors = await page.evaluate(() => window.jsErrors || []);
    expect(errors).toHaveLength(0);
  });
});

// Load testing with Artillery
// artillery-config.yml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 10
  processor: "./form-test-processor.js"

scenarios:
  - name: "Submit contact form"
    weight: 100
    flow:
      - get:
          url: "/contact"
      - think: 2
      - post:
          url: "/api/contact"
          json:
            name: "{{ $randomString() }}"
            email: "{{ $randomString() }}@example.com"
            message: "{{ $randomString() }}"
          capture:
            - json: "$.id"
              as: "submissionId"
      - think: 1

// form-test-processor.js
module.exports = {
  setRandomString: function(requestParams, context, ee, next) {
    context.vars.randomString = Math.random().toString(36).substring(7);
    return next();
  }
};
```

## Accessibility Testing

Ensure forms work for all users:

```javascript
// accessibility.test.js
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Form Accessibility', () => {
  test('contact form meets WCAG standards', async ({ page }) => {
    await page.goto('/contact');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('form works with keyboard navigation', async ({ page }) => {
    await page.goto('/contact');
    
    // Tab through all form elements
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-testid="name-input"]')).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-testid="email-input"]')).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-testid="message-input"]')).toBeFocused();
    
    await page.keyboard.press('Tab');
    await expect(page.locator('[data-testid="submit-button"]')).toBeFocused();
    
    // Submit with Enter
    await page.keyboard.press('Enter');
    
    // Should show validation errors
    await expect(page.locator('[data-testid="name-error"]')).toBeVisible();
  });

  test('screen reader announcements work correctly', async ({ page }) => {
    await page.goto('/contact');
    
    // Fill invalid email
    await page.fill('[data-testid="email-input"]', 'invalid');
    await page.blur('[data-testid="email-input"]');
    
    // Error should be announced
    const errorElement = page.locator('[data-testid="email-error"]');
    await expect(errorElement).toHaveAttribute('aria-live', 'polite');
    await expect(errorElement).toHaveAttribute('role', 'alert');
  });

  test('form labels are properly associated', async ({ page }) => {
    await page.goto('/contact');
    
    // Check label associations
    const nameInput = page.locator('[data-testid="name-input"]');
    const nameLabel = page.locator('label[for="name"]');
    
    await expect(nameInput).toHaveAttribute('id', 'name');
    await expect(nameLabel).toHaveAttribute('for', 'name');
    
    // Click label should focus input
    await nameLabel.click();
    await expect(nameInput).toBeFocused();
  });
});
```

## Test Data Management

Organize test data effectively:

```javascript
// test-data/form-data.js
export const validFormData = {
  contact: {
    name: 'John Doe',
    email: 'john@example.com',
    message: 'This is a valid test message.'
  },
  registration: {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    password: 'SecurePass123!',
    confirmPassword: 'SecurePass123!'
  }
};

export const invalidFormData = {
  contact: {
    emptyForm: {},
    invalidEmail: {
      name: 'John Doe',
      email: 'invalid-email',
      message: 'Test message'
    },
    missingRequired: {
      email: 'john@example.com',
      message: 'Test message'
      // name is missing
    }
  }
};

export const edgeCaseData = {
  longText: 'A'.repeat(10000),
  specialCharacters: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  unicodeText: '测试文本 🚀 émojis',
  sqlInjection: "'; DROP TABLE users; --",
  xssAttempt: '<script>alert("xss")</script>'
};

// test-helpers/form-helpers.js
export const fillContactForm = async (page, data) => {
  if (data.name) await page.fill('[data-testid="name-input"]', data.name);
  if (data.email) await page.fill('[data-testid="email-input"]', data.email);
  if (data.message) await page.fill('[data-testid="message-input"]', data.message);
};

export const expectValidationErrors = async (page, expectedErrors) => {
  for (const [field, error] of Object.entries(expectedErrors)) {
    await expect(page.locator(`[data-testid="${field}-error"]`)).toContainText(error);
  }
};

export const mockApiResponse = (page, endpoint, response) => {
  return page.route(endpoint, async route => {
    await route.fulfill({
      status: response.status || 200,
      contentType: 'application/json',
      body: JSON.stringify(response.body)
    });
  });
};
```

## Continuous Integration Setup

Integrate form testing into your CI/CD pipeline:

```yaml
# .github/workflows/form-tests.yml
name: Form Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run test:unit
      - run: npm run test:coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3

  integration-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      - run: npm run test:integration

  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run build
      - run: npm start &
      - run: npm run test:e2e
      
      - uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/

  visual-regression:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run build
      - run: npm start &
      - run: npm run test:visual
      
      - uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: visual-diff-report
          path: test-results/
```

## Conclusion

Comprehensive form testing requires a multi-layered approach:

- **Unit tests** for individual components and validation logic
- **Integration tests** for form behavior and API interactions
- **E2E tests** for complete user workflows
- **Visual regression tests** for UI consistency
- **Performance tests** for responsiveness under load
- **Accessibility tests** for inclusive user experience

The key is to start with unit tests and gradually add more complex testing layers as your forms become more critical to your business.

---

**Resources:**
- [Testing Library Documentation](https://testing-library.com/)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Playwright Testing Guide](https://playwright.dev/docs/test-intro)
- [Axe Accessibility Testing](https://www.deque.com/axe/)

**What testing strategies have you found most effective for catching form bugs? Share your experiences in the comments!**

---

**Tags**: #testing #forms #javascript #cypress #playwright #accessibility #performance #e2e #unittest #webdev