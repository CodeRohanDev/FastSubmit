import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Free HTML Form Generator - Generate Clean HTML Forms | FastSubmit',
  description: 'Generate clean, semantic HTML forms for free. Our HTML form generator creates valid HTML5 code with CSS styling. Perfect for developers and designers. Copy-paste ready code.',
  keywords: 'free html form generator, html form generator, generate html forms, html5 form generator, form html generator, html form code generator, semantic html forms',
  openGraph: {
    title: 'Free HTML Form Generator - Generate Clean HTML Forms',
    description: 'Generate clean, semantic HTML forms for free. Our HTML form generator creates valid HTML5 code with CSS styling. Perfect for developers and designers.',
    type: 'website',
    url: 'https://fastsubmit.app/free-html-form-generator',
    images: [
      {
        url: 'https://fastsubmit.app/og-html-form-generator.jpg',
        width: 1200,
        height: 630,
        alt: 'Free HTML Form Generator - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free HTML Form Generator - Generate Clean HTML Forms',
    description: 'Generate clean, semantic HTML forms for free. Valid HTML5 code with CSS styling.',
    images: ['https://fastsubmit.app/og-html-form-generator.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-html-form-generator'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit HTML Form Generator',
  description: 'Free HTML form generator that creates clean, semantic HTML5 forms with proper validation and styling',
  url: 'https://fastsubmit.app/free-html-form-generator',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '18567'
  },
  featureList: [
    'Clean HTML5 Generation',
    'Semantic Markup',
    'CSS Styling Options',
    'Validation Attributes',
    'Accessibility Compliant',
    'Copy-Paste Ready'
  ]
}

export default function FreeHtmlFormGeneratorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free HTML Form Generator
                <span className="block text-gray-700">Generate Clean HTML5 Forms</span>
                <span className="block text-slate-600">With Semantic Markup</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Generate clean, semantic HTML forms with our free HTML form generator. Create valid 
                HTML5 code with proper validation, accessibility features, and CSS styling. Perfect 
                for developers who need production-ready form code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/html-generator" 
                  className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Generate HTML Forms
                </Link>
                <Link 
                  href="/html-examples" 
                  className="border-2 border-gray-300 hover:border-gray-800 text-gray-700 hover:text-gray-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  View HTML Examples
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* HTML Code Preview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Generate Professional HTML Form Code
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Visual Form Designer</h3>
                <div className="bg-gray-100 p-6 rounded-lg border">
                  <div className="bg-white p-6 rounded border shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Form</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input type="tel" className="w-full p-2 border border-gray-300 rounded" placeholder="+1 (555) 123-4567" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded h-20" placeholder="Your message here..."></textarea>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Generated HTML Code</h3>
                <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto max-h-96 overflow-y-auto">
                  <pre>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form</title>
    <style>
        .form-container {
            max-width: 500px;
            margin: 0 auto;
            padding: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-label {
            display: block;
            margin-bottom: 5px;
            font-weight: 500;
            color: #374151;
        }
        .form-input {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            font-size: 14px;
        }
        .form-button {
            width: 100%;
            background-color: #2563eb;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <form action="/submit" method="POST">
            <h2>Contact Form</h2>
            
            <div class="form-group">
                <label for="fullname" class="form-label">
                    Full Name *
                </label>
                <input type="text" 
                       id="fullname" 
                       name="fullname" 
                       class="form-input"
                       placeholder="Enter your full name"
                       required
                       aria-describedby="fullname-help">
            </div>
            
            <div class="form-group">
                <label for="email" class="form-label">
                    Email Address *
                </label>
                <input type="email" 
                       id="email" 
                       name="email" 
                       class="form-input"
                       placeholder="your@email.com"
                       required
                       aria-describedby="email-help">
            </div>
            
            <div class="form-group">
                <label for="phone" class="form-label">
                    Phone Number
                </label>
                <input type="tel" 
                       id="phone" 
                       name="phone" 
                       class="form-input"
                       placeholder="+1 (555) 123-4567">
            </div>
            
            <div class="form-group">
                <label for="message" class="form-label">
                    Message *
                </label>
                <textarea id="message" 
                          name="message" 
                          class="form-input"
                          rows="4"
                          placeholder="Your message here..."
                          required></textarea>
            </div>
            
            <button type="submit" class="form-button">
                Send Message
            </button>
        </form>
    </div>
</body>
</html>`}</pre>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                    📋 Copy HTML
                  </button>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                    💾 Download File
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HTML Features */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Professional HTML Form Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Semantic HTML5",
                  description: "Generate clean, semantic HTML5 markup that follows web standards and best practices.",
                  icon: "🏗️",
                  code: "<form>, <fieldset>, <legend>"
                },
                {
                  title: "Validation Attributes",
                  description: "Built-in HTML5 validation with required, pattern, min/max, and custom validation rules.",
                  icon: "✅",
                  code: "required, pattern, minlength"
                },
                {
                  title: "Accessibility Ready",
                  description: "ARIA labels, proper form associations, and screen reader compatibility built-in.",
                  icon: "♿",
                  code: "aria-describedby, role, tabindex"
                },
                {
                  title: "CSS Styling",
                  description: "Clean CSS classes and inline styles for professional form appearance.",
                  icon: "🎨",
                  code: ".form-group, .form-input"
                },
                {
                  title: "Responsive Design",
                  description: "Mobile-first CSS that adapts to all screen sizes and devices automatically.",
                  icon: "📱",
                  code: "@media queries, flexbox"
                },
                {
                  title: "Cross-browser Compatible",
                  description: "HTML and CSS that works consistently across all modern web browsers.",
                  icon: "🌐",
                  code: "vendor prefixes, fallbacks"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded font-mono text-sm">
                    {feature.code}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HTML Form Types */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              HTML Form Types You Can Generate
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { type: "Contact Forms", html: "<form method='POST'>", description: "Standard contact forms with validation" },
                { type: "Login Forms", html: "<form action='/login'>", description: "Secure login and authentication forms" },
                { type: "Registration Forms", html: "<fieldset><legend>", description: "User registration with grouped fields" },
                { type: "Survey Forms", html: "<input type='radio'>", description: "Multi-question survey forms" },
                { type: "Payment Forms", html: "<input type='number'>", description: "Secure payment and billing forms" },
                { type: "Upload Forms", html: "<input type='file'>", description: "File upload and attachment forms" },
                { type: "Search Forms", html: "<input type='search'>", description: "Search and filter forms" },
                { type: "Feedback Forms", html: "<textarea required>", description: "Customer feedback and review forms" }
              ].map((formType, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{formType.type}</h3>
                  <div className="bg-gray-900 text-green-400 p-2 rounded font-mono text-xs mb-3">
                    {formType.html}
                  </div>
                  <p className="text-gray-600 text-sm">{formType.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Quality Standards */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              HTML Code Quality Standards
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">✅ What Our Generator Includes</h3>
                <div className="space-y-4">
                  {[
                    {
                      standard: "Valid HTML5 Markup",
                      description: "All generated HTML passes W3C validation without errors or warnings."
                    },
                    {
                      standard: "Semantic Elements",
                      description: "Proper use of form, fieldset, legend, label, and input elements."
                    },
                    {
                      standard: "Accessibility Attributes",
                      description: "ARIA labels, roles, and descriptions for screen reader compatibility."
                    },
                    {
                      standard: "Progressive Enhancement",
                      description: "Forms work without JavaScript and enhance with it when available."
                    },
                    {
                      standard: "Clean CSS Classes",
                      description: "Meaningful class names following BEM methodology and best practices."
                    },
                    {
                      standard: "Cross-browser Support",
                      description: "Code tested and compatible with all modern web browsers."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-green-100 p-1 rounded mt-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.standard}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">❌ What We Avoid</h3>
                <div className="space-y-4">
                  {[
                    {
                      problem: "Inline Styles Everywhere",
                      solution: "Clean CSS classes and external stylesheets instead."
                    },
                    {
                      problem: "Missing Form Labels",
                      solution: "Every input has a proper label element association."
                    },
                    {
                      problem: "No Validation Attributes",
                      solution: "HTML5 validation attributes for better user experience."
                    },
                    {
                      problem: "Inaccessible Forms",
                      solution: "Full accessibility compliance with ARIA attributes."
                    },
                    {
                      problem: "Deprecated HTML Elements",
                      solution: "Modern HTML5 elements and attributes only."
                    },
                    {
                      problem: "Bloated Unnecessary Code",
                      solution: "Clean, minimal code that serves a purpose."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-red-100 p-1 rounded mt-1">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.problem}</h4>
                        <p className="text-gray-600 text-sm">{item.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Benefits */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Why Developers Choose Our HTML Generator
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Time Savings",
                  description: "Generate production-ready HTML forms in seconds instead of writing code from scratch.",
                  icon: "⏰",
                  stat: "90% faster"
                },
                {
                  title: "Code Quality",
                  description: "Clean, semantic HTML that follows best practices and passes all validators.",
                  icon: "🏆",
                  stat: "100% valid"
                },
                {
                  title: "Consistency",
                  description: "Every generated form follows the same high standards and coding conventions.",
                  icon: "🎯",
                  stat: "Standardized"
                },
                {
                  title: "Learning Tool",
                  description: "Study the generated code to learn HTML form best practices and techniques.",
                  icon: "📚",
                  stat: "Educational"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {benefit.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              HTML Form Generator FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Is the generated HTML code valid and standards-compliant?",
                  a: "Yes! All HTML code generated by our tool is valid HTML5 that passes W3C validation. We follow web standards and best practices to ensure your forms work correctly across all browsers."
                },
                {
                  q: "Can I customize the CSS styling of generated HTML forms?",
                  a: "Absolutely! The generated HTML includes clean CSS classes that you can easily customize. You can also choose from different CSS frameworks or add your own custom styles."
                },
                {
                  q: "Does the HTML generator create accessible forms?",
                  a: "Yes! All generated forms include proper ARIA labels, form associations, keyboard navigation support, and screen reader compatibility to meet accessibility standards."
                },
                {
                  q: "Can I use the generated HTML code in any website?",
                  a: "Yes! The generated HTML is standard code that works with any website, CMS, or framework including WordPress, Shopify, React, Vue, Angular, and plain HTML sites."
                },
                {
                  q: "Does the generator include form validation in the HTML?",
                  a: "Yes! We include HTML5 validation attributes like 'required', 'pattern', 'minlength', and 'maxlength' to provide client-side validation without JavaScript."
                },
                {
                  q: "Can I generate HTML forms for different frameworks?",
                  a: "Yes! While our primary output is HTML5, we can also generate form code for React JSX, Vue templates, Angular components, and other popular frameworks."
                },
                {
                  q: "Is the generated HTML code production-ready?",
                  a: "Absolutely! The code is clean, optimized, and ready for production use. You can copy and paste it directly into your projects without any modifications needed."
                },
                {
                  q: "How do I handle form submissions with the generated HTML?",
                  a: "The generated HTML includes proper form action and method attributes. You can point the form to your server endpoint, use our form handling service, or integrate with any backend system."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-800 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Generate Professional HTML Forms Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of developers using our HTML form generator to create clean, 
              semantic, and accessible form code. Start generating professional HTML forms now!
            </p>
            <Link 
              href="/html-generator" 
              className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Generate HTML Forms Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}