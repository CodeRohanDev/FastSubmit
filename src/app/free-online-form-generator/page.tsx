import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Free Online Form Generator - Generate Forms Online Instantly | FastSubmit',
  description: 'Generate professional forms online for free. Our online form generator creates HTML forms instantly with custom fields, validation, and styling. No downloads required.',
  keywords: 'free online form generator, online form generator, generate forms online, web form generator, html form generator online, form generator tool, online form creator',
  openGraph: {
    title: 'Free Online Form Generator - Generate Forms Online Instantly',
    description: 'Generate professional forms online for free. Our online form generator creates HTML forms instantly with custom fields, validation, and styling.',
    type: 'website',
    url: 'https://fastsubmit.app/free-online-form-generator',
    images: [
      {
        url: 'https://fastsubmit.app/og-online-form-generator.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Online Form Generator - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Form Generator - Generate Forms Online Instantly',
    description: 'Generate professional forms online for free. No downloads required, instant generation.',
    images: ['https://fastsubmit.app/og-online-form-generator.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-online-form-generator'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'FastSubmit Online Form Generator',
  description: 'Free online form generator that creates professional HTML forms instantly in your browser',
  url: 'https://fastsubmit.app/free-online-form-generator',
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
    reviewCount: '21456'
  },
  featureList: [
    'Online Form Generation',
    'Instant HTML Output',
    'Browser-based Tool',
    'No Downloads Required',
    'Real-time Preview',
    'Custom Field Types'
  ]
}

export default function FreeOnlineFormGeneratorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Online Form Generator
                <span className="block text-blue-600">Generate Forms Online</span>
                <span className="block text-cyan-600">Instantly in Your Browser</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Generate professional HTML forms online instantly with our free form generator. 
                No downloads, no installations - just open your browser and start generating forms. 
                Create contact forms, surveys, registrations with clean, semantic code.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/online-generator" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Generate Forms Online Now
                </Link>
                <Link 
                  href="/generator-demo" 
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Try Online Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Online Generator Interface */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Generate Forms Online in Real-Time
            </h2>
            <div className="bg-gray-100 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Browser Address Bar */}
                <div className="bg-gray-200 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-4 py-1 text-sm text-gray-600">
                    https://fastsubmit.app/online-form-generator
                  </div>
                  <div className="text-sm text-gray-600">🔒 Secure</div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Generator Controls */}
                  <div className="bg-gray-50 p-6 border-r">
                    <h3 className="font-semibold text-gray-900 mb-4">🛠️ Online Form Generator</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Form Title</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Contact Us" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Add Fields</label>
                        <div className="space-y-2">
                          {['Name Field', 'Email Field', 'Phone Field', 'Message Field', 'File Upload'].map((field, index) => (
                            <button key={index} className="w-full text-left p-2 bg-white border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-300 transition-colors">
                              + Add {field}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Styling Options</label>
                        <div className="grid grid-cols-2 gap-2">
                          <select className="p-2 border border-gray-300 rounded text-sm">
                            <option>Bootstrap</option>
                            <option>Tailwind</option>
                            <option>Custom CSS</option>
                          </select>
                          <select className="p-2 border border-gray-300 rounded text-sm">
                            <option>Blue Theme</option>
                            <option>Green Theme</option>
                            <option>Purple Theme</option>
                          </select>
                        </div>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                        🔄 Generate Form Online
                      </button>
                    </div>
                  </div>
                  
                  {/* Live Preview */}
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">👁️ Live Preview</h3>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h4>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Your name" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="your@email.com" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea className="w-full p-2 border border-gray-300 rounded h-20" placeholder="Your message..."></textarea>
                          </div>
                          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors">
                        📋 Copy Generated HTML
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online vs Offline Comparison */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Online Form Generator vs Desktop Software
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-2xl font-bold text-blue-600">Online Form Generator</h3>
                  <p className="text-gray-600">FastSubmit</p>
                </div>
                <ul className="space-y-4">
                  {[
                    "✅ Works in any web browser",
                    "✅ No downloads or installations",
                    "✅ Access from anywhere with internet",
                    "✅ Always up-to-date features",
                    "✅ Cross-platform compatibility",
                    "✅ Instant sharing and collaboration",
                    "✅ Cloud storage and backup",
                    "✅ Real-time preview and generation"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="mr-3 text-green-600">{feature.split(' ')[0]}</span>
                      <span>{feature.substring(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg opacity-75">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold text-gray-600">Desktop Software</h3>
                  <p className="text-gray-500">Traditional Tools</p>
                </div>
                <ul className="space-y-4">
                  {[
                    "❌ Requires software installation",
                    "❌ Limited to specific computers",
                    "❌ Manual updates and maintenance",
                    "❌ Platform-specific limitations",
                    "❌ Local storage only",
                    "❌ Difficult sharing and collaboration",
                    "❌ Risk of data loss",
                    "❌ Slower development cycle"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-500">
                      <span className="mr-3 text-red-500">{feature.split(' ')[0]}</span>
                      <span>{feature.substring(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Online Generation Process */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              How Online Form Generation Works
            </h2>
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Open Your Browser",
                  description: "No downloads needed. Just open any modern web browser and navigate to our online form generator.",
                  icon: "🌐"
                },
                {
                  step: "2",
                  title: "Design Online",
                  description: "Use our online interface to add fields, customize styling, and configure your form in real-time.",
                  icon: "🎨"
                },
                {
                  step: "3",
                  title: "Generate Instantly",
                  description: "Click generate and watch as clean HTML code is created instantly in your browser.",
                  icon: "⚡"
                },
                {
                  step: "4",
                  title: "Copy & Use",
                  description: "Copy the generated code and paste it into your website. Your form is ready to use immediately.",
                  icon: "📋"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
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

        {/* Online Generator Features */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced Online Generation Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-time Code Generation",
                  description: "Watch your HTML code generate in real-time as you make changes. See the code update instantly with every modification.",
                  icon: "⚡"
                },
                {
                  title: "Multiple Output Formats",
                  description: "Generate forms in HTML, React JSX, Vue templates, or Angular components. Choose your preferred framework.",
                  icon: "🔄"
                },
                {
                  title: "Responsive Code Output",
                  description: "Generated forms include responsive CSS that works perfectly on all devices and screen sizes.",
                  icon: "📱"
                },
                {
                  title: "Clean Semantic HTML",
                  description: "Our online generator creates clean, semantic HTML5 code that passes validation and follows best practices.",
                  icon: "🏗️"
                },
                {
                  title: "CSS Framework Integration",
                  description: "Generate forms with Bootstrap, Tailwind CSS, or custom CSS frameworks built right into the code.",
                  icon: "🎨"
                },
                {
                  title: "Accessibility Compliant",
                  description: "Generated forms include proper ARIA labels, keyboard navigation, and screen reader compatibility.",
                  icon: "♿"
                },
                {
                  title: "Validation Rules",
                  description: "Add client-side validation rules that are automatically included in the generated form code.",
                  icon: "✅"
                },
                {
                  title: "Custom Styling Options",
                  description: "Generate forms with custom colors, fonts, spacing, and styling that match your brand perfectly.",
                  icon: "🖌️"
                },
                {
                  title: "One-Click Copy",
                  description: "Copy generated code to your clipboard with one click. No manual selection or formatting needed.",
                  icon: "📋"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Generated Code Examples */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              See What Our Online Generator Creates
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Visual Form Builder</h3>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <div className="bg-white p-6 rounded border">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Newsletter Signup</h4>
                    <div className="space-y-3">
                      <input type="email" className="w-full p-3 border border-gray-300 rounded" placeholder="Enter your email" />
                      <div className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <span className="text-sm text-gray-700">I agree to receive newsletters</span>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Generated HTML Code</h3>
                <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                  <pre>{`<form class="newsletter-form" method="POST">
  <h2>Newsletter Signup</h2>
  
  <div class="form-group">
    <input type="email" 
           name="email" 
           placeholder="Enter your email"
           required 
           class="form-control">
  </div>
  
  <div class="form-group">
    <label class="checkbox-label">
      <input type="checkbox" 
             name="consent" 
             required>
      I agree to receive newsletters
    </label>
  </div>
  
  <button type="submit" 
          class="btn btn-primary">
    Subscribe
  </button>
</form>`}</pre>
                </div>
                <div className="mt-4 text-center">
                  <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                    📋 Copy This Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Browser Compatibility */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Works in All Modern Browsers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
              {[
                { name: "Chrome", icon: "🟢", version: "Latest" },
                { name: "Firefox", icon: "🟠", version: "Latest" },
                { name: "Safari", icon: "🔵", version: "Latest" },
                { name: "Edge", icon: "🟦", version: "Latest" },
                { name: "Opera", icon: "🔴", version: "Latest" }
              ].map((browser, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-6xl mb-4">{browser.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{browser.name}</h3>
                  <div className="text-green-600 font-bold">✓ Supported</div>
                  <div className="text-sm text-gray-600">{browser.version}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 text-lg">
                Our online form generator works perfectly in all modern web browsers. 
                No plugins, extensions, or special software required!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Online Form Generator FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Do I need to download anything to use the online form generator?",
                  a: "No! Our form generator works entirely in your web browser. Just visit our website and start generating forms immediately - no downloads, installations, or plugins required."
                },
                {
                  q: "Can I use the online form generator on mobile devices?",
                  a: "Yes! Our online form generator is fully responsive and works on smartphones, tablets, and desktop computers. Generate forms anywhere with an internet connection."
                },
                {
                  q: "What type of code does the online generator create?",
                  a: "Our generator creates clean, semantic HTML5 code with CSS styling. You can also generate forms for React, Vue, Angular, and other frameworks."
                },
                {
                  q: "Is the generated code ready to use immediately?",
                  a: "Absolutely! The generated code is production-ready and can be copied and pasted directly into your website or application."
                },
                {
                  q: "Can I customize the styling of generated forms?",
                  a: "Yes! Choose from multiple CSS frameworks, color schemes, and styling options. The generator creates forms that match your design preferences."
                },
                {
                  q: "Does the online generator work offline?",
                  a: "The generator requires an internet connection to function. However, once you generate and copy your form code, you can use it offline on your website."
                },
                {
                  q: "Can I save my generated forms for later?",
                  a: "Yes! Create a free account to save your generated forms, access them later, and make modifications without starting from scratch."
                },
                {
                  q: "Is there a limit to how many forms I can generate online?",
                  a: "No limits! Generate as many forms as you need, completely free. Our online generator has no restrictions on usage."
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
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Generating Forms Online Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of developers and designers using our online form generator. 
              Create professional forms instantly in your browser - no downloads required!
            </p>
            <Link 
              href="/online-generator" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Generate Your First Form Online Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}