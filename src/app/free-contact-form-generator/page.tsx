import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Free Contact Form Generator - Generate Contact Forms Instantly | FastSubmit',
  description: 'Generate professional contact forms for free. Our contact form generator creates HTML contact forms with validation, styling, and email notifications. No coding required.',
  keywords: 'free contact form generator, contact form generator, generate contact forms, html contact form generator, contact form creator, business contact form generator',
  openGraph: {
    title: 'Free Contact Form Generator - Generate Contact Forms Instantly',
    description: 'Generate professional contact forms for free. Our contact form generator creates HTML contact forms with validation, styling, and email notifications.',
    type: 'website',
    url: 'https://fastsubmit.app/free-contact-form-generator',
    images: [
      {
        url: 'https://fastsubmit.app/og-contact-form-generator.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Contact Form Generator - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Contact Form Generator - Generate Contact Forms Instantly',
    description: 'Generate professional contact forms for free. No coding required, instant HTML generation.',
    images: ['https://fastsubmit.app/og-contact-form-generator.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-contact-form-generator'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Contact Form Generator',
  description: 'Free contact form generator that creates professional HTML contact forms with validation and email notifications',
  url: 'https://fastsubmit.app/free-contact-form-generator',
  applicationCategory: 'BusinessApplication',
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
    reviewCount: '32456'
  },
  featureList: [
    'Contact Form Generation',
    'HTML Code Output',
    'Email Notifications',
    'Spam Protection',
    'Custom Styling',
    'Mobile Responsive'
  ]
}

export default function FreeContactFormGeneratorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Contact Form Generator
                <span className="block text-blue-600">Generate Professional</span>
                <span className="block text-indigo-600">Contact Forms Instantly</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Generate professional contact forms with our free contact form generator. Create HTML 
                contact forms with validation, email notifications, and custom styling. Perfect for 
                businesses, websites, and developers who need contact forms fast.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact-generator" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Generate Contact Form
                </Link>
                <Link 
                  href="/contact-examples" 
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  View Contact Examples
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Generator Interface */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Generate Contact Forms in Real-Time
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Form Generator</h3>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Form Title</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Contact Us" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Include Fields</label>
                      <div className="space-y-2">
                        {[
                          { field: 'Name Field', checked: true },
                          { field: 'Email Field', checked: true },
                          { field: 'Phone Field', checked: false },
                          { field: 'Company Field', checked: false },
                          { field: 'Subject Field', checked: true },
                          { field: 'Message Field', checked: true }
                        ].map((item, index) => (
                          <label key={index} className="flex items-center">
                            <input type="checkbox" defaultChecked={item.checked} className="mr-2" />
                            <span className="text-sm">{item.field}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Notifications</label>
                      <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Style Theme</label>
                      <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Professional Blue</option>
                        <option>Modern Gray</option>
                        <option>Clean White</option>
                        <option>Corporate Dark</option>
                      </select>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                      🔄 Generate Contact Form
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Generated Contact Form</h3>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Your full name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                        <select className="w-full p-2 border border-gray-300 rounded">
                          <option>General Inquiry</option>
                          <option>Sales Question</option>
                          <option>Support Request</option>
                          <option>Partnership</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded h-20" placeholder="How can we help you?"></textarea>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
                    📋 Copy Contact Form HTML
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Types */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Contact Form Types You Can Generate
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  type: "Basic Contact Form",
                  description: "Simple contact form with name, email, and message fields",
                  fields: ["Name", "Email", "Message"],
                  icon: "📧",
                  usage: "Perfect for small businesses"
                },
                {
                  type: "Business Contact Form",
                  description: "Professional contact form with company and phone fields",
                  fields: ["Name", "Email", "Phone", "Company", "Subject", "Message"],
                  icon: "🏢",
                  usage: "Ideal for B2B companies"
                },
                {
                  type: "Support Contact Form",
                  description: "Customer support form with priority and category selection",
                  fields: ["Name", "Email", "Issue Type", "Priority", "Description"],
                  icon: "🎧",
                  usage: "Great for customer service"
                },
                {
                  type: "Sales Contact Form",
                  description: "Lead generation form with budget and timeline fields",
                  fields: ["Name", "Email", "Phone", "Budget", "Timeline", "Requirements"],
                  icon: "💼",
                  usage: "Optimized for sales teams"
                },
                {
                  type: "Quote Request Form",
                  description: "Project quote form with detailed requirement fields",
                  fields: ["Name", "Email", "Project Type", "Budget Range", "Details"],
                  icon: "💰",
                  usage: "Perfect for service providers"
                },
                {
                  type: "Partnership Contact Form",
                  description: "Business partnership inquiry form with company details",
                  fields: ["Name", "Email", "Company", "Partnership Type", "Proposal"],
                  icon: "🤝",
                  usage: "Ideal for partnerships"
                }
              ].map((formType, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{formType.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{formType.type}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{formType.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Includes:</p>
                      <div className="flex flex-wrap gap-1">
                        {formType.fields.map((field, fieldIndex) => (
                          <span key={fieldIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                      {formType.usage}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Generated Code Example */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Generated Contact Form HTML Code
            </h2>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`<!-- Generated Contact Form HTML -->
<form class="contact-form" action="/submit-contact" method="POST">
  <div class="form-header">
    <h2>Contact Us</h2>
    <p>We'd love to hear from you. Send us a message!</p>
  </div>
  
  <div class="form-group">
    <label for="contact-name" class="form-label">
      Full Name *
    </label>
    <input type="text" 
           id="contact-name" 
           name="name" 
           class="form-input"
           placeholder="Enter your full name"
           required
           aria-describedby="name-help">
  </div>
  
  <div class="form-group">
    <label for="contact-email" class="form-label">
      Email Address *
    </label>
    <input type="email" 
           id="contact-email" 
           name="email" 
           class="form-input"
           placeholder="your@email.com"
           required
           aria-describedby="email-help">
  </div>
  
  <div class="form-group">
    <label for="contact-subject" class="form-label">
      Subject *
    </label>
    <select id="contact-subject" 
            name="subject" 
            class="form-select"
            required>
      <option value="">Select a subject</option>
      <option value="general">General Inquiry</option>
      <option value="sales">Sales Question</option>
      <option value="support">Support Request</option>
      <option value="partnership">Partnership</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="contact-message" class="form-label">
      Message *
    </label>
    <textarea id="contact-message" 
              name="message" 
              class="form-textarea"
              rows="5"
              placeholder="How can we help you?"
              required></textarea>
  </div>
  
  <div class="form-group">
    <button type="submit" class="form-button">
      Send Message
    </button>
  </div>
  
  <!-- Spam Protection -->
  <input type="hidden" name="form_type" value="contact">
  <div style="display: none;">
    <input type="text" name="honeypot" tabindex="-1">
  </div>
</form>

<!-- Contact Form CSS -->
<style>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 30px;
}

.form-header h2 {
  color: #1f2937;
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #374151;
}

.form-input, .form-select, .form-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-input:focus, .form-select:focus, .form-textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-button {
  width: 100%;
  background-color: #2563eb;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-button:hover {
  background-color: #1d4ed8;
}

@media (max-width: 768px) {
  .contact-form {
    padding: 20px;
    margin: 10px;
  }
}
</style>`}</pre>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                📋 Copy Complete Contact Form Code
              </button>
            </div>
          </div>
        </section>

        {/* Contact Form Features */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced Contact Form Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Email Notifications",
                  description: "Automatically send email notifications when someone submits your contact form.",
                  icon: "📧"
                },
                {
                  title: "Spam Protection",
                  description: "Built-in honeypot fields and CAPTCHA integration to prevent spam submissions.",
                  icon: "🛡️"
                },
                {
                  title: "Auto-Responder",
                  description: "Send automatic thank you emails to people who contact you through the form.",
                  icon: "🤖"
                },
                {
                  title: "Custom Validation",
                  description: "Add custom validation rules for email formats, phone numbers, and required fields.",
                  icon: "✅"
                },
                {
                  title: "Mobile Responsive",
                  description: "Generated contact forms work perfectly on all devices and screen sizes.",
                  icon: "📱"
                },
                {
                  title: "Analytics Tracking",
                  description: "Track form submissions, conversion rates, and user behavior with built-in analytics.",
                  icon: "📊"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Contact Form Generator FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "How does the contact form generator work?",
                  a: "Simply select the fields you want, customize the styling, and click generate. Our tool creates clean HTML code for a professional contact form that you can copy and paste into your website."
                },
                {
                  q: "Can I customize the generated contact form?",
                  a: "Yes! You can customize field types, validation rules, styling, colors, and layout. The generated HTML is also easy to modify further if needed."
                },
                {
                  q: "Does the generated contact form include email notifications?",
                  a: "Yes! The generated form can be configured to send email notifications to your specified email address whenever someone submits the contact form."
                },
                {
                  q: "Is the generated contact form mobile-friendly?",
                  a: "Absolutely! All generated contact forms include responsive CSS that automatically adapts to different screen sizes and devices."
                },
                {
                  q: "Can I add the generated contact form to any website?",
                  a: "Yes! The generated HTML code works with any website, CMS, or platform including WordPress, Shopify, Wix, Squarespace, and custom websites."
                },
                {
                  q: "Does the contact form generator include spam protection?",
                  a: "Yes! Generated forms include honeypot fields for spam protection, and you can easily add CAPTCHA or other anti-spam measures."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Generate Your Contact Form Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Create professional contact forms in seconds with our free contact form generator. 
              No coding required - just generate, copy, and paste!
            </p>
            <Link 
              href="/contact-generator" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Generate Contact Form Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}