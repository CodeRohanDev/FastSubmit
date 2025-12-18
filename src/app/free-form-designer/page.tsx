import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Free Form Designer - Design Beautiful Forms Online | FastSubmit',
  description: 'Design stunning, professional forms for free with FastSubmit\'s advanced form designer. Create visually appealing contact forms, surveys, and applications with powerful design tools.',
  keywords: 'free form designer, form design tool, visual form designer, professional form design, custom form designer, form styling tool, beautiful forms, form layout designer',
  openGraph: {
    title: 'Free Form Designer - Design Beautiful Forms Online',
    description: 'Design stunning, professional forms for free with FastSubmit\'s advanced form designer. Create visually appealing contact forms, surveys, and applications.',
    type: 'website',
    url: 'https://fastsubmit.app/free-form-designer',
    images: [
      {
        url: 'https://fastsubmit.app/og-form-designer.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Form Designer - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Form Designer - Design Beautiful Forms Online',
    description: 'Design stunning, professional forms for free. Advanced design tools and customization options.',
    images: ['https://fastsubmit.app/og-form-designer.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-form-designer'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Form Designer',
  description: 'Professional form designer with advanced visual design tools and customization capabilities',
  url: 'https://fastsubmit.app/free-form-designer',
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
    reviewCount: '8456'
  },
  featureList: [
    'Visual Design Interface',
    'Advanced Styling Tools',
    'Professional Templates',
    'Custom CSS Support',
    'Brand Integration',
    'Responsive Design'
  ]
}

export default function FreeFormDesignerPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-orange-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Form Designer
                <span className="block text-rose-600">Design Beautiful Forms</span>
                <span className="block text-orange-600">With Professional Tools</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Design stunning, professional forms with our advanced form designer. Create visually 
                appealing contact forms, surveys, and applications that reflect your brand perfectly. 
                Use powerful design tools to make forms that convert better and engage users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/design-form" 
                  className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Designing Forms
                </Link>
                <Link 
                  href="/design-showcase" 
                  className="border-2 border-gray-300 hover:border-rose-600 text-gray-700 hover:text-rose-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  View Design Showcase
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Design Interface Preview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Professional Form Design Interface
            </h2>
            <div className="bg-gray-100 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Design Toolbar */}
                <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h3 className="font-semibold">Form Designer</h3>
                    <div className="flex space-x-2">
                      <button className="bg-rose-600 px-3 py-1 rounded text-sm">Design</button>
                      <button className="bg-gray-600 px-3 py-1 rounded text-sm">Preview</button>
                      <button className="bg-gray-600 px-3 py-1 rounded text-sm">Settings</button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="bg-green-600 px-4 py-1 rounded text-sm">Save</button>
                    <button className="bg-blue-600 px-4 py-1 rounded text-sm">Publish</button>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-4 gap-0">
                  {/* Design Tools Sidebar */}
                  <div className="bg-gray-50 p-6 border-r">
                    <h4 className="font-semibold text-gray-900 mb-4">Design Tools</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Colors</h5>
                        <div className="flex space-x-2">
                          <div className="w-6 h-6 bg-rose-500 rounded cursor-pointer"></div>
                          <div className="w-6 h-6 bg-blue-500 rounded cursor-pointer"></div>
                          <div className="w-6 h-6 bg-green-500 rounded cursor-pointer"></div>
                          <div className="w-6 h-6 bg-purple-500 rounded cursor-pointer"></div>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Typography</h5>
                        <select className="w-full p-2 border border-gray-300 rounded text-sm">
                          <option>Inter</option>
                          <option>Roboto</option>
                          <option>Open Sans</option>
                        </select>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Layout</h5>
                        <div className="grid grid-cols-2 gap-2">
                          <button className="p-2 border border-gray-300 rounded text-xs">Single Column</button>
                          <button className="p-2 border border-gray-300 rounded text-xs">Two Column</button>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Spacing</h5>
                        <input type="range" className="w-full" min="0" max="20" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Form Canvas */}
                  <div className="lg:col-span-3 p-8">
                    <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-8 rounded-lg">
                      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
                        <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Us</h4>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input type="text" className="w-full p-3 border-2 border-rose-200 rounded-lg focus:border-rose-500" placeholder="Your name" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input type="email" className="w-full p-3 border-2 border-rose-200 rounded-lg focus:border-rose-500" placeholder="your@email.com" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea className="w-full p-3 border-2 border-rose-200 rounded-lg h-24 focus:border-rose-500" placeholder="Your message..."></textarea>
                          </div>
                          <button className="w-full bg-gradient-to-r from-rose-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-rose-600 hover:to-orange-600 transition-all">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Tools */}
        <section className="py-16 px-4 bg-gradient-to-r from-rose-50 to-orange-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Professional Design Tools
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Color Palette Designer",
                  description: "Create custom color schemes with our advanced color picker. Generate harmonious palettes that match your brand.",
                  icon: "🎨",
                  tools: ["Color Wheel", "Palette Generator", "Brand Colors", "Gradient Creator"]
                },
                {
                  title: "Typography Studio",
                  description: "Choose from 1000+ Google Fonts and customize text styling with precision controls for perfect typography.",
                  icon: "✍️",
                  tools: ["Font Library", "Size Control", "Weight & Style", "Letter Spacing"]
                },
                {
                  title: "Layout Designer",
                  description: "Design flexible layouts with our grid system. Create responsive designs that work on all devices.",
                  icon: "📐",
                  tools: ["Grid System", "Flexbox", "Responsive Breakpoints", "Alignment Tools"]
                },
                {
                  title: "Background Studio",
                  description: "Add stunning backgrounds with gradients, patterns, images, and custom textures to make forms stand out.",
                  icon: "🖼️",
                  tools: ["Image Backgrounds", "Gradient Designer", "Pattern Library", "Texture Effects"]
                },
                {
                  title: "Animation Designer",
                  description: "Bring forms to life with smooth animations, transitions, and micro-interactions that engage users.",
                  icon: "✨",
                  tools: ["Hover Effects", "Transitions", "Loading Animations", "Scroll Effects"]
                },
                {
                  title: "Brand Integration",
                  description: "Upload logos, set brand guidelines, and maintain consistent branding across all your form designs.",
                  icon: "🏢",
                  tools: ["Logo Upload", "Brand Kit", "Style Guide", "Asset Library"]
                }
              ].map((tool, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{tool.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Features:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {tool.tools.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-rose-100 text-rose-800 px-2 py-1 rounded text-xs">
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

        {/* Design Templates */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Professional Design Templates
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Modern Minimalist",
                  style: "Clean lines, plenty of white space, subtle shadows",
                  gradient: "from-gray-100 to-white",
                  accent: "border-gray-400",
                  button: "bg-gray-800"
                },
                {
                  name: "Vibrant Gradient",
                  style: "Bold colors, gradient backgrounds, modern styling",
                  gradient: "from-purple-400 to-pink-400",
                  accent: "border-purple-400",
                  button: "bg-gradient-to-r from-purple-500 to-pink-500"
                },
                {
                  name: "Corporate Professional",
                  style: "Business-focused, trustworthy, professional appearance",
                  gradient: "from-blue-100 to-indigo-100",
                  accent: "border-blue-400",
                  button: "bg-blue-600"
                },
                {
                  name: "Creative Artistic",
                  style: "Unique layouts, creative elements, artistic flair",
                  gradient: "from-yellow-100 to-orange-100",
                  accent: "border-orange-400",
                  button: "bg-orange-500"
                },
                {
                  name: "Tech Startup",
                  style: "Modern, innovative, tech-focused design elements",
                  gradient: "from-green-100 to-teal-100",
                  accent: "border-teal-400",
                  button: "bg-teal-600"
                },
                {
                  name: "Elegant Luxury",
                  style: "Sophisticated, premium, high-end appearance",
                  gradient: "from-rose-100 to-pink-100",
                  accent: "border-rose-400",
                  button: "bg-rose-600"
                }
              ].map((template, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`bg-gradient-to-br ${template.gradient} p-8`}>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Sample Form</h4>
                      <div className="space-y-3">
                        <input type="text" className={`w-full p-2 border-2 ${template.accent} rounded`} placeholder="Name" />
                        <input type="email" className={`w-full p-2 border-2 ${template.accent} rounded`} placeholder="Email" />
                        <button className={`w-full ${template.button} text-white py-2 rounded font-medium`}>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{template.style}</p>
                    <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded transition-colors">
                      Use This Design
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Your Design Process Made Simple
            </h2>
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Your Style",
                  description: "Start with a professional template or begin with a blank canvas to create your unique design.",
                  icon: "🎯"
                },
                {
                  step: "2",
                  title: "Customize Everything",
                  description: "Use our advanced design tools to customize colors, fonts, layouts, and every visual element.",
                  icon: "🎨"
                },
                {
                  step: "3",
                  title: "Preview & Perfect",
                  description: "See your design in real-time across different devices and make adjustments until it's perfect.",
                  icon: "👁️"
                },
                {
                  step: "4",
                  title: "Publish & Share",
                  description: "Launch your beautifully designed form and start collecting responses with style.",
                  icon: "🚀"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-rose-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
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

        {/* Design Impact Stats */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              The Impact of Great Form Design
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "Conversion Rate",
                  value: "+73%",
                  description: "Well-designed forms convert significantly better",
                  icon: "📈"
                },
                {
                  metric: "User Engagement",
                  value: "+58%",
                  description: "Beautiful forms keep users engaged longer",
                  icon: "💫"
                },
                {
                  metric: "Brand Perception",
                  value: "+91%",
                  description: "Professional design improves brand trust",
                  icon: "🎯"
                },
                {
                  metric: "Completion Rate",
                  value: "+64%",
                  description: "Users are more likely to complete attractive forms",
                  icon: "✅"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-rose-50 to-orange-50 rounded-xl">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-rose-600 mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.metric}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Form Designer FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Do I need design experience to use the form designer?",
                  a: "Not at all! Our form designer is built for everyone, from beginners to professional designers. We provide intuitive tools, professional templates, and design suggestions to help you create beautiful forms regardless of your experience level."
                },
                {
                  q: "Can I create completely custom designs?",
                  a: "Yes! While we offer professional templates to get you started, you have complete creative freedom. Customize every aspect including colors, fonts, layouts, spacing, backgrounds, and even add custom CSS for advanced styling."
                },
                {
                  q: "Are the designed forms mobile-responsive?",
                  a: "Absolutely! All forms created with our designer are automatically responsive and look great on all devices. You can also preview and customize the mobile layout separately for optimal user experience."
                },
                {
                  q: "Can I match my brand exactly?",
                  a: "Yes! Upload your logo, set your brand colors, choose fonts that match your brand guidelines, and create forms that look like a natural extension of your website and brand identity."
                },
                {
                  q: "How many design variations can I create?",
                  a: "Unlimited! Create as many different designs as you want. Save design templates, create variations for A/B testing, and experiment with different styles without any restrictions."
                },
                {
                  q: "Can I export my form designs?",
                  a: "Yes! Export your forms as HTML/CSS code, embed them on any website, or use our API to integrate them into your applications. Your designs are portable and flexible."
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
        <section className="py-16 px-4 bg-gradient-to-r from-rose-600 to-orange-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Designing Beautiful Forms Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Transform your forms from ordinary to extraordinary with our professional form designer. 
              Create designs that not only collect data but also represent your brand beautifully.
            </p>
            <Link 
              href="/design-form" 
              className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Start Designing Forms Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}