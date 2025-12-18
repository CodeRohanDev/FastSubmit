import { JsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Form Creator Free - Create Professional Forms Online | FastSubmit',
  description: 'Create stunning professional forms for free with FastSubmit\'s powerful form creator. Design contact forms, surveys, registrations with advanced customization. Start creating now.',
  keywords: 'form creator free, create forms online, professional form creator, web form creator, contact form creator, survey creator, registration form creator, form design tool',
  openGraph: {
    title: 'Form Creator Free - Create Professional Forms Online',
    description: 'Create stunning professional forms for free with FastSubmit\'s powerful form creator. Design contact forms, surveys, registrations with advanced customization.',
    type: 'website',
    url: 'https://fastsubmit.app/form-creator-free',
    images: [
      {
        url: 'https://fastsubmit.app/og-form-creator.jpg',
        width: 1200,
        height: 630,
        alt: 'Form Creator Free - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form Creator Free - Create Professional Forms Online',
    description: 'Create stunning professional forms for free. Advanced customization and design tools included.',
    images: ['https://fastsubmit.app/og-form-creator.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/form-creator-free'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Form Creator',
  description: 'Professional form creator with advanced design tools and customization options',
  url: 'https://fastsubmit.app/form-creator-free',
  applicationCategory: 'DesignApplication',
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
    reviewCount: '5234'
  },
  featureList: [
    'Advanced Design Tools',
    'Professional Templates',
    'Custom Styling Engine',
    'Brand Customization',
    'Responsive Design',
    'Creative Freedom'
  ]
}

export default function FormCreatorFreePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Form Creator Free
                <span className="block text-indigo-600">Create Stunning Forms</span>
                <span className="block text-purple-600">With Professional Design</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create professional, visually stunning forms with our advanced form creator. 
                Design contact forms, surveys, registrations with unlimited customization options. 
                Turn your creative vision into reality with powerful design tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/create-form" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Creating Forms
                </Link>
                <Link 
                  href="/design-gallery" 
                  className="border-2 border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  View Design Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Design Showcase */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Create Forms That Stand Out
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Modern Minimalist",
                  description: "Clean, professional designs that focus on user experience",
                  gradient: "from-gray-100 to-white",
                  accent: "border-gray-300",
                  button: "bg-gray-800"
                },
                {
                  title: "Vibrant & Bold",
                  description: "Eye-catching designs that grab attention and increase conversions",
                  gradient: "from-purple-100 to-pink-100",
                  accent: "border-purple-300",
                  button: "bg-purple-600"
                },
                {
                  title: "Corporate Professional",
                  description: "Sophisticated designs perfect for business and enterprise use",
                  gradient: "from-blue-100 to-indigo-100",
                  accent: "border-blue-300",
                  button: "bg-blue-600"
                }
              ].map((design, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`bg-gradient-to-br ${design.gradient} p-8`}>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                      <div className="space-y-3">
                        <input type="text" className={`w-full p-3 border-2 ${design.accent} rounded-lg`} placeholder="Your Name" />
                        <input type="email" className={`w-full p-3 border-2 ${design.accent} rounded-lg`} placeholder="Email Address" />
                        <textarea className={`w-full p-3 border-2 ${design.accent} rounded-lg h-20`} placeholder="Message"></textarea>
                        <button className={`w-full ${design.button} text-white py-3 rounded-lg font-semibold`}>
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{design.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{design.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creative Tools */}
        <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Professional Design Tools at Your Fingertips
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Advanced Color Palette",
                  description: "Choose from millions of colors or create custom color schemes that match your brand perfectly.",
                  icon: "🎨",
                  tools: ["Color Picker", "Gradient Builder", "Brand Colors", "Accessibility Check"]
                },
                {
                  title: "Typography Control",
                  description: "Select from hundreds of Google Fonts and customize text styling with precision.",
                  icon: "✍️",
                  tools: ["Font Library", "Size Control", "Weight Options", "Line Spacing"]
                },
                {
                  title: "Layout Designer",
                  description: "Create unique layouts with flexible grid systems and responsive breakpoints.",
                  icon: "📐",
                  tools: ["Grid System", "Flexbox", "Spacing Control", "Alignment Tools"]
                },
                {
                  title: "Background Studio",
                  description: "Add stunning backgrounds with gradients, patterns, images, and custom designs.",
                  icon: "🖼️",
                  tools: ["Image Upload", "Gradient Creator", "Pattern Library", "Overlay Effects"]
                },
                {
                  title: "Animation Effects",
                  description: "Bring your forms to life with smooth animations and micro-interactions.",
                  icon: "✨",
                  tools: ["Hover Effects", "Transitions", "Loading Animations", "Form Interactions"]
                },
                {
                  title: "Brand Integration",
                  description: "Upload logos, set brand colors, and maintain consistent branding across all forms.",
                  icon: "🏢",
                  tools: ["Logo Upload", "Brand Kit", "Style Guide", "Template Sync"]
                }
              ].map((tool, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{tool.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Includes:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {tool.tools.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Creation Process */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Your Creative Process, Simplified
            </h2>
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Your Canvas",
                  description: "Start with a blank canvas or select from our professionally designed templates.",
                  icon: "🎯",
                  color: "bg-red-500"
                },
                {
                  step: "2", 
                  title: "Design & Customize",
                  description: "Use our advanced design tools to create exactly what you envision.",
                  icon: "🎨",
                  color: "bg-orange-500"
                },
                {
                  step: "3",
                  title: "Preview & Perfect",
                  description: "See your creation in real-time and make adjustments until it's perfect.",
                  icon: "👁️",
                  color: "bg-green-500"
                },
                {
                  step: "4",
                  title: "Publish & Share",
                  description: "Launch your beautiful form and start collecting responses immediately.",
                  icon: "🚀",
                  color: "bg-blue-500"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`${step.color} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6`}>
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

        {/* Template Gallery */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Professional Templates to Spark Your Creativity
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Startup Contact", category: "Business", color: "bg-blue-500" },
                { name: "Event Registration", category: "Events", color: "bg-green-500" },
                { name: "Customer Survey", category: "Research", color: "bg-purple-500" },
                { name: "Job Application", category: "HR", color: "bg-orange-500" },
                { name: "Newsletter Signup", category: "Marketing", color: "bg-pink-500" },
                { name: "Product Feedback", category: "Product", color: "bg-indigo-500" },
                { name: "Booking Request", category: "Service", color: "bg-teal-500" },
                { name: "Lead Generation", category: "Sales", color: "bg-red-500" }
              ].map((template, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className={`${template.color} h-32 relative`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-lg font-bold">{template.name}</div>
                        <div className="text-sm opacity-90">{template.category}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded transition-colors duration-300">
                      Create from Template
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Forms That Convert Better
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "Higher Conversion",
                  value: "+67%",
                  description: "Better designed forms convert more visitors",
                  icon: "📈"
                },
                {
                  metric: "User Engagement",
                  value: "+45%",
                  description: "Beautiful forms keep users engaged longer",
                  icon: "💫"
                },
                {
                  metric: "Brand Recognition",
                  value: "+89%",
                  description: "Custom branded forms improve brand recall",
                  icon: "🎯"
                },
                {
                  metric: "Mobile Completion",
                  value: "+52%",
                  description: "Responsive designs work better on mobile",
                  icon: "📱"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.metric}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creator vs Builder Comparison */}
        <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Form Creator vs Basic Form Builder
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-indigo-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">FastSubmit Creator</th>
                    <th className="p-4 text-center">Basic Builders</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Design Freedom", "✅ Unlimited customization", "❌ Limited templates"],
                    ["Color Control", "✅ Millions of colors", "❌ Preset colors only"],
                    ["Typography", "✅ 800+ Google Fonts", "❌ Basic font options"],
                    ["Animations", "✅ Advanced animations", "❌ No animations"],
                    ["Brand Integration", "✅ Complete brand kit", "❌ Logo upload only"],
                    ["Layout Control", "✅ Flexible grid system", "❌ Fixed layouts"],
                    ["Background Options", "✅ Images, gradients, patterns", "❌ Solid colors only"],
                    ["Mobile Design", "✅ Custom mobile layouts", "❌ Auto-responsive only"]
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-semibold">{row[0]}</td>
                      <td className="p-4 text-center text-green-600">{row[1]}</td>
                      <td className="p-4 text-center text-red-500">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Form Creator FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "What makes a form creator different from a form builder?",
                  a: "A form creator focuses on design and creativity, offering advanced customization tools, unlimited styling options, and professional design features. While builders focus on functionality, creators emphasize visual appeal and brand expression."
                },
                {
                  q: "Do I need design experience to create professional forms?",
                  a: "Not at all! Our form creator includes professional templates, design suggestions, and intuitive tools that help anyone create stunning forms. However, if you have design experience, you'll have complete creative freedom."
                },
                {
                  q: "Can I create forms that match my brand exactly?",
                  a: "Yes! Upload your logo, set your brand colors, choose custom fonts, and even add custom CSS. Our form creator ensures your forms look like a natural extension of your brand."
                },
                {
                  q: "Are the forms I create mobile-friendly?",
                  a: "Absolutely! All forms created with our form creator are automatically responsive and look great on all devices. You can even customize the mobile layout separately for optimal user experience."
                },
                {
                  q: "Can I animate elements in my forms?",
                  a: "Yes! Add smooth animations, hover effects, and micro-interactions to make your forms more engaging and professional. Choose from preset animations or create custom effects."
                },
                {
                  q: "How many design variations can I create?",
                  a: "Unlimited! Create as many different designs as you want. Save design templates, create variations for A/B testing, and experiment with different styles without any restrictions."
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
        <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Unleash Your Creative Potential
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Create forms that not only collect data but also represent your brand beautifully. 
              Start with our professional form creator and bring your vision to life.
            </p>
            <Link 
              href="/create-form" 
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Start Creating Beautiful Forms Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}