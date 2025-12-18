import { JsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Form Generator - Generate HTML Forms Instantly | FastSubmit',
  description: 'Generate professional HTML forms instantly with our free form generator. Create contact forms, surveys, and registration forms with automatic code generation. No programming required.',
  keywords: 'free form generator, html form generator, form code generator, automatic form creation, contact form generator, survey generator, registration form generator, web form generator',
  openGraph: {
    title: 'Free Form Generator - Generate HTML Forms Instantly',
    description: 'Generate professional HTML forms instantly with our free form generator. Create contact forms, surveys, and registration forms with automatic code generation.',
    type: 'website',
    url: 'https://fastsubmit.app/free-form-generator',
    images: [
      {
        url: 'https://fastsubmit.app/og-form-generator.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Form Generator - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Form Generator - Generate HTML Forms Instantly',
    description: 'Generate professional HTML forms instantly with our free form generator. No programming required.',
    images: ['https://fastsubmit.app/og-form-generator.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-form-generator'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'FastSubmit Form Generator',
  description: 'Free HTML form generator that creates professional forms with automatic code generation',
  url: 'https://fastsubmit.app/free-form-generator',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  },
  featureList: [
    'Instant HTML Code Generation',
    'Multiple Form Types',
    'Clean Semantic HTML',
    'CSS Styling Options',
    'Responsive Design',
    'Copy-Paste Ready Code'
  ]
}

export default function FreeFormGeneratorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Form Generator
                <span className="block text-green-600">Generate HTML Forms</span>
                <span className="block text-blue-600">Instantly & Automatically</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Generate clean, semantic HTML forms instantly with our powerful form generator. 
                Create contact forms, surveys, registration forms, and more with automatic code generation. 
                Copy-paste ready code that works everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/generator" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Generate Forms Now
                </Link>
                <Link 
                  href="/examples" 
                  className="border-2 border-gray-300 hover:border-green-600 text-gray-700 hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  View Examples
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Code Preview Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Generate Clean, Professional HTML Code
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Visual Form Builder</h3>
                <div className="bg-gray-100 p-8 rounded-lg border-2 border-dashed border-gray-300">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your name" />
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter your email" />
                    </div>
                    <div className="bg-white p-4 rounded border">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea className="w-full p-2 border border-gray-300 rounded h-20" placeholder="Your message"></textarea>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Submit</button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Generated HTML Code</h3>
                <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`<form action="/submit" method="POST">
  <div class="form-group">
    <label for="name">Name *</label>
    <input type="text" id="name" name="name" 
           required placeholder="Enter your name">
  </div>
  
  <div class="form-group">
    <label for="email">Email *</label>
    <input type="email" id="email" name="email" 
           required placeholder="Enter your email">
  </div>
  
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" 
              placeholder="Your message"></textarea>
  </div>
  
  <button type="submit">Submit</button>
</form>`}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Types Grid */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Generate Any Type of Form
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Contact Form Generator",
                  description: "Generate professional contact forms with name, email, phone, and message fields.",
                  icon: "📧",
                  fields: ["Name", "Email", "Phone", "Message", "Subject"]
                },
                {
                  title: "Registration Form Generator",
                  description: "Create user registration forms with validation and custom fields.",
                  icon: "📝",
                  fields: ["Username", "Email", "Password", "Confirm Password", "Terms"]
                },
                {
                  title: "Survey Form Generator",
                  description: "Build comprehensive survey forms with multiple question types.",
                  icon: "📊",
                  fields: ["Multiple Choice", "Rating", "Text Area", "Checkboxes", "Dropdowns"]
                },
                {
                  title: "Feedback Form Generator",
                  description: "Generate customer feedback forms with rating systems.",
                  icon: "⭐",
                  fields: ["Rating", "Comments", "Category", "Recommendation", "Contact"]
                },
                {
                  title: "Order Form Generator",
                  description: "Create order forms with product selection and calculations.",
                  icon: "🛒",
                  fields: ["Product", "Quantity", "Price", "Total", "Shipping"]
                },
                {
                  title: "Application Form Generator",
                  description: "Build job or school application forms with file uploads.",
                  icon: "📄",
                  fields: ["Personal Info", "Experience", "Education", "Resume", "Cover Letter"]
                }
              ].map((formType, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{formType.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{formType.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{formType.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {formType.fields.map((field, fieldIndex) => (
                        <span key={fieldIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {field}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced Form Generation Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Clean HTML5 Code",
                  description: "Generates semantic, valid HTML5 code that passes all validators.",
                  icon: "🏗️"
                },
                {
                  title: "CSS Styling Options",
                  description: "Choose from multiple CSS frameworks or generate custom styles.",
                  icon: "🎨"
                },
                {
                  title: "Responsive Design",
                  description: "All generated forms are mobile-friendly and responsive by default.",
                  icon: "📱"
                },
                {
                  title: "Accessibility Ready",
                  description: "Generated forms include proper ARIA labels and accessibility features.",
                  icon: "♿"
                },
                {
                  title: "Validation Included",
                  description: "Built-in HTML5 validation with custom error messages.",
                  icon: "✅"
                },
                {
                  title: "Multiple Formats",
                  description: "Export as HTML, PHP, React, Vue, or Angular components.",
                  icon: "📦"
                },
                {
                  title: "Copy-Paste Ready",
                  description: "Generated code is ready to use immediately in any project.",
                  icon: "📋"
                },
                {
                  title: "No Dependencies",
                  description: "Pure HTML/CSS/JS code with no external dependencies required.",
                  icon: "🚀"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              How Our Form Generator Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Form Type",
                  description: "Select from our pre-built form templates or start with a blank form. Choose the fields you need.",
                  icon: "🎯"
                },
                {
                  step: "2",
                  title: "Customize Fields",
                  description: "Add, remove, and configure form fields. Set validation rules, placeholders, and styling options.",
                  icon: "⚙️"
                },
                {
                  step: "3",
                  title: "Generate & Copy",
                  description: "Click generate to create clean HTML code. Copy the code and paste it into your website or project.",
                  icon: "📋"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Form Generator FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "What type of HTML code does the form generator create?",
                  a: "Our generator creates clean, semantic HTML5 code that follows web standards. The code includes proper form structure, validation attributes, and accessibility features."
                },
                {
                  q: "Can I customize the generated form code?",
                  a: "Yes! You can customize field types, validation rules, styling, and structure before generating. The code is also easy to modify after generation."
                },
                {
                  q: "Does the generated form work with any website?",
                  a: "Absolutely! The generated HTML code is standard and works with any website, CMS, or framework including WordPress, Shopify, Wix, and custom sites."
                },
                {
                  q: "Is the generated code mobile-responsive?",
                  a: "Yes! All generated forms include responsive CSS that automatically adapts to different screen sizes and devices."
                },
                {
                  q: "Can I generate forms for different frameworks?",
                  a: "Yes! We support generating code for HTML, React, Vue, Angular, and PHP. Choose your preferred format during generation."
                },
                {
                  q: "Do I need to sign up to use the form generator?",
                  a: "No signup required! You can generate and download form code immediately without creating an account."
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
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Generating Forms Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Create professional HTML forms in seconds with our powerful form generator. 
              No coding required, just point, click, and generate!
            </p>
            <Link 
              href="/generator" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Generate Your First Form Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}