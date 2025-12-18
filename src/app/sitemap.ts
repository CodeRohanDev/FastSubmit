import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fastsubmit.cloud'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/login',
    '/signup',
    '/privacy',
    '/terms',
    '/humans.txt',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Use Cases pages (high priority for SEO)
  const useCasePages = [
    '/use-cases/website-embed',
    '/use-cases/social-media',
    '/use-cases/developer-api',
    '/use-cases/online-forms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Documentation pages
  const docPages = [
    '/docs',
    '/docs/quickstart',
    '/docs/api',
    '/docs/authentication',
    '/docs/domain-verification',
    '/docs/errors',
    '/docs/examples',
    '/docs/field-types',
    '/docs/forms',
    '/docs/limits',
    '/docs/submissions',
    '/docs/submit-endpoint',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Landing pages (high priority for SEO)
  const landingPages = [
    '/form-builder',
    '/google-forms-alternative',
    '/templates',
    '/survey-maker',
    '/contact-form-builder',
    '/quiz-maker',
    '/fast-submit',
    '/form-submission-automation',
    '/drag-drop-form-builder',
    '/bulk-form-submission',
    '/no-code-form-builder',
    '/online-form-generator',
    // New keyword-targeted landing pages
    '/free-form-builder-no-signup',
    '/form-builder-email-notifications',
    '/html-form-without-backend',
    '/form-api-free',
    '/form-builder-small-business',
    '/embed-contact-form',
    '/free-survey-unlimited-responses',
    '/form-export-excel',
    '/form-builder-webhook',
    '/google-forms-custom-branding',
    '/ai-form-builder',
    '/form-builder-india',
    // Platform-specific pages
    '/free-contact-form-builder',
    '/form-builder-for-wordpress',
    '/form-builder-for-shopify',
    '/form-builder-for-wix',
    '/form-builder-for-webflow',
    // Comparison pages
    '/form-builder-vs-google-forms',
    '/form-builder-vs-typeform',
    '/form-builder-vs-jotform',
    // Industry-specific pages
    '/form-builder-for-nonprofits',
    '/form-builder-for-education',
    '/form-builder-for-healthcare',
    '/form-builder-for-real-estate',
    // Pricing comparison
    '/form-builder-pricing-comparison',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Blog pages
  const blogPages = [
    '/blog',
    '/blog/google-forms-alternative-2025',
    '/blog/how-to-create-online-form',
    '/blog/form-builder-guide-2025',
    '/blog/contact-form-best-practices',
    '/blog/survey-design-tips',
    '/blog/form-vs-survey-difference',
    '/blog/free-form-builder-comparison',
    '/blog/form-spam-protection',
    '/blog/mobile-friendly-forms',
    '/blog/form-analytics-guide',
    '/blog/social-media-forms-guide',
    '/blog/embed-forms-website',
    '/blog/instagram-bio-link-forms',
    '/blog/form-api-integration',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Template pages
  const templatePages = [
    '/templates/contact-forms',
    '/templates/surveys',
    '/templates/registration',
    '/templates/lead-generation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...useCasePages, ...landingPages, ...blogPages, ...docPages, ...templatePages]
}
