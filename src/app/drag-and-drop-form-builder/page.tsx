import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Drag and Drop Form Builder - Build Forms Visually | FastSubmit',
  description: 'Build professional forms with our intuitive drag and drop form builder. Simply drag elements, drop them in place, and create stunning forms without coding. Free visual form builder.',
  keywords: 'drag and drop form builder, visual form builder, drag drop form creator, intuitive form builder, easy form builder, visual form designer, drag and drop interface',
  openGraph: {
    title: 'Drag and Drop Form Builder - Build Forms Visually',
    description: 'Build professional forms with our intuitive drag and drop form builder. Simply drag elements, drop them in place, and create stunning forms without coding.',
    type: 'website',
    url: 'https://fastsubmit.app/drag-and-drop-form-builder',
    images: [
      {
        url: 'https://fastsubmit.app/og-drag-drop-form-builder.jpg',
        width: 1200,
        height: 630,
        alt: 'Drag and Drop Form Builder - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drag and Drop Form Builder - Build Forms Visually',
    description: 'Build professional forms with intuitive drag and drop interface. No coding required.',
    images: ['https://fastsubmit.app/og-drag-drop-form-builder.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/drag-and-drop-form-builder'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Drag and Drop Form Builder',
  description: 'Intuitive drag and drop form builder for creating professional forms with visual interface',
  url: 'https://fastsubmit.app/drag-and-drop-form-builder',
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
    reviewCount: '12847'
  },
  featureList: [
    'Drag and Drop Interface',
    'Visual Form Building',
    'Real-time Preview',
    'Intuitive Design',
    'No Coding Required',
    'Professional Results'
  ]
}

export default function DragAndDropFormBuilderPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Drag & Drop Form Builder
                <span className="block text-violet-600">Build Forms Visually</span>
                <span className="block text-blue-600">Simple as Point & Click</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create professional forms with our intuitive drag and drop interface. Simply drag form 
                elements from the sidebar and drop them where you want. No coding, no complexity - 
                just pure visual form building that anyone can master in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/drag-drop-builder" 
                  className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Try Drag & Drop Builder
                </Link>
                <Link 
                  href="/interactive-demo" 
                  className="border-2 border-gray-300 hover:border-violet-600 text-gray-700 hover:text-violet-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Interactive Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Drag & Drop Interface Demo */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              See Drag & Drop in Action
            </h2>
            <div className="bg-gray-100 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Builder Header */}
                <div className="bg-violet-600 text-white p-4 flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Drag & Drop Form Builder</h3>
                  <div className="flex items-center space-x-2">
                    <span className="bg-violet-500 px-3 py-1 rounded text-sm">Building...</span>
                    <button className="bg-green-500 px-4 py-1 rounded text-sm">Save</button>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-4 gap-0 min-h-96">
                  {/* Elements Sidebar */}
                  <div className="bg-gray-50 p-6 border-r">
                    <h4 className="font-semibold text-gray-900 mb-4">📦 Form Elements</h4>
                    <div className="space-y-3">
                      {[
                        { name: 'Text Input', icon: '📝', description: 'Single line text field' },
                        { name: 'Email Field', icon: '📧', description: 'Email input with validation' },
                        { name: 'Phone Number', icon: '📞', description: 'Phone input field' },
                        { name: 'Textarea', icon: '📄', description: 'Multi-line text area' },
                        { name: 'Dropdown', icon: '📋', description: 'Select dropdown menu' },
                        { name: 'Checkboxes', icon: '☑️', description: 'Multiple choice options' },
                        { name: 'Radio Buttons', icon: '🔘', description: 'Single choice options' },
                        { name: 'File Upload', icon: '📁', description: 'File attachment field' }
                      ].map((element, index) => (
                        <div key={index} className="bg-white p-3 rounded-lg border-2 border-dashed border-gray-300 cursor-grab hover:border-violet-400 hover:bg-violet-50 transition-all group">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{element.icon}</span>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{element.name}</div>
                              <div className="text-xs text-gray-500">{element.description}</div>
                            </div>
                          </div>
                          <div className="text-xs text-violet-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            👆 Drag me to the form
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Form Canvas */}
                  <div className="lg:col-span-3 p-8">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-80 bg-gradient-to-br from-violet-50 to-blue-50">
                      <div className="text-center mb-8">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Contact Form</h4>
                        <p className="text-gray-600">Drop form elements here to build your form</p>
                      </div>
                      
                      {/* Sample Form Elements */}
                      <div className="space-y-4 max-w-md mx-auto">
                        <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-violet-200 relative group">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your name" />
                          <div className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            📝 Text Input
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-blue-200 relative group">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                          <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="your@email.com" />
                          <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            📧 Email Field
                          </div>
                        </div>
                        
                        <div className="border-2 border-dashed border-gray-400 p-6 rounded-lg text-center text-gray-500 bg-white/50">
                          <div className="text-2xl mb-2">👆</div>
                          <div className="text-sm">Drop more elements here</div>
                        </div>
                        
                        <button className="w-full bg-violet-600 text-white py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors">
                          Submit Form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Drag & Drop Works */}
        <section className="py-16 px-4 bg-gradient-to-r from-violet-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              How Drag & Drop Form Building Works
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Drag Elements",
                  description: "Click and drag form elements from the sidebar. Choose from text inputs, dropdowns, checkboxes, and more.",
                  icon: "🖱️",
                  visual: "Drag →"
                },
                {
                  step: "2",
                  title: "Drop in Place",
                  description: "Drop elements exactly where you want them in your form. Rearrange and reorder with simple drag and drop.",
                  icon: "📍",
                  visual: "← Drop"
                },
                {
                  step: "3",
                  title: "Customize & Publish",
                  description: "Customize styling, add labels, set validation rules, then publish your form with one click.",
                  icon: "🎨",
                  visual: "✨ Done!"
                }
              ].map((step, index) => (
                <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-lg">
                  <div className="bg-violet-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <div className="bg-violet-100 text-violet-800 px-4 py-2 rounded-lg font-medium">
                    {step.visual}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Drag & Drop Benefits */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Why Choose Drag & Drop Form Building?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Intuitive Interface",
                  description: "Natural drag and drop interaction that feels familiar. If you've ever moved files on your computer, you can build forms.",
                  icon: "🎯",
                  benefit: "Zero learning curve"
                },
                {
                  title: "Visual Feedback",
                  description: "See exactly where elements will be placed with visual drop zones and real-time preview of your form as you build.",
                  icon: "👁️",
                  benefit: "What you see is what you get"
                },
                {
                  title: "Flexible Layout",
                  description: "Easily rearrange form elements by dragging them to new positions. Change your mind? Just drag and drop to reorganize.",
                  icon: "🔄",
                  benefit: "Unlimited flexibility"
                },
                {
                  title: "Speed & Efficiency",
                  description: "Build forms 10x faster than traditional methods. Drag, drop, and you're done - no complex menus or settings to navigate.",
                  icon: "⚡",
                  benefit: "Lightning fast building"
                },
                {
                  title: "Error Prevention",
                  description: "Visual interface prevents common form building errors. Drop zones guide you to create properly structured forms every time.",
                  icon: "🛡️",
                  benefit: "Mistake-proof building"
                },
                {
                  title: "Mobile Responsive",
                  description: "All drag and drop forms automatically adapt to mobile devices. Your forms look perfect on any screen size.",
                  icon: "📱",
                  benefit: "Works everywhere"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {benefit.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Drag & Drop Features */}
        <section className="py-16 px-4 bg-gradient-to-r from-violet-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced Drag & Drop Features
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Smart Drop Zones</h3>
                <div className="space-y-6">
                  {[
                    {
                      feature: "Intelligent Positioning",
                      description: "Drop zones automatically appear where elements can be placed, guiding you to create well-structured forms."
                    },
                    {
                      feature: "Snap to Grid",
                      description: "Elements automatically align and snap to an invisible grid for perfectly organized form layouts."
                    },
                    {
                      feature: "Visual Feedback",
                      description: "Hover effects and highlighting show exactly where elements will be placed before you drop them."
                    },
                    {
                      feature: "Undo/Redo Support",
                      description: "Made a mistake? Instantly undo any drag and drop action with keyboard shortcuts or buttons."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-violet-100 p-2 rounded-lg mt-1">
                        <div className="w-2 h-2 bg-violet-600 rounded-full"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.feature}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Live Drag & Drop Preview</h4>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-violet-300 p-4 rounded-lg bg-violet-50">
                    <div className="text-center text-violet-600 text-sm">
                      📝 Drop Zone: Text Input
                    </div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded border">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Your name" />
                  </div>
                  <div className="border-2 border-dashed border-blue-300 p-4 rounded-lg bg-blue-50">
                    <div className="text-center text-blue-600 text-sm">
                      📧 Drop Zone: Email Field
                    </div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded border">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="your@email.com" />
                  </div>
                  <div className="border-2 border-dashed border-green-300 p-4 rounded-lg bg-green-50">
                    <div className="text-center text-green-600 text-sm">
                      🔘 Drop Zone: Radio Buttons
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Testimonials */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              What Users Say About Our Drag & Drop Builder
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Jennifer Walsh",
                  role: "Small Business Owner",
                  quote: "The drag and drop interface is so intuitive! I built my first contact form in 3 minutes. It's like playing with digital building blocks.",
                  rating: 5,
                  avatar: "👩‍💼"
                },
                {
                  name: "Marcus Thompson",
                  role: "Marketing Director",
                  quote: "I love how I can just drag elements around to reorganize my forms. No more complex menus or confusing settings - just drag, drop, and done!",
                  rating: 5,
                  avatar: "👨‍💻"
                },
                {
                  name: "Lisa Rodriguez",
                  role: "Event Coordinator",
                  quote: "The visual feedback while dragging is amazing. I can see exactly where elements will go before dropping them. Makes form building foolproof!",
                  rating: 5,
                  avatar: "👩‍🎨"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed">"{testimonial.quote}"</blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Drag & Drop vs Traditional Form Builders
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-violet-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">FastSubmit Drag & Drop</th>
                    <th className="p-4 text-center">Traditional Builders</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Learning Curve", "✅ Instant - drag and drop", "❌ Complex menus and settings"],
                    ["Visual Building", "✅ See form as you build", "❌ Preview in separate window"],
                    ["Element Positioning", "✅ Drag to exact position", "❌ Use arrows or settings"],
                    ["Reorganizing", "✅ Drag to rearrange", "❌ Delete and recreate"],
                    ["User Experience", "✅ Intuitive and fun", "❌ Technical and complex"],
                    ["Speed", "✅ Build in minutes", "❌ Takes much longer"],
                    ["Error Prevention", "✅ Visual drop zones guide you", "❌ Easy to make mistakes"],
                    ["Mobile Building", "✅ Works on touch devices", "❌ Desktop only"]
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
              Drag & Drop Form Builder FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "How does drag and drop form building work?",
                  a: "Simply click on any form element (like text input, dropdown, etc.) from our sidebar and drag it to where you want it in your form. Drop it in place, and it's automatically added. You can rearrange elements by dragging them to new positions anytime."
                },
                {
                  q: "Is drag and drop easier than traditional form builders?",
                  a: "Absolutely! Drag and drop is much more intuitive than navigating complex menus and settings. It's visual, immediate, and feels natural - like moving items around on your desk."
                },
                {
                  q: "Can I use drag and drop on mobile devices?",
                  a: "Yes! Our drag and drop interface works on touch devices too. You can tap and drag elements on tablets and smartphones, making form building possible anywhere."
                },
                {
                  q: "What if I make a mistake while dragging and dropping?",
                  a: "No problem! You can easily undo any action with Ctrl+Z (or Cmd+Z on Mac). You can also drag elements to different positions or delete them by dragging to the trash area."
                },
                {
                  q: "Are there visual guides to help with drag and drop?",
                  a: "Yes! We provide visual drop zones that highlight where you can place elements, snap-to-grid alignment, and hover effects that show exactly where elements will be positioned before you drop them."
                },
                {
                  q: "Can I see my form as I build it with drag and drop?",
                  a: "Absolutely! Unlike traditional builders, you see your actual form taking shape as you drag and drop elements. What you see while building is exactly what your users will see."
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
        <section className="py-16 px-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Experience Drag & Drop Form Building
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See why thousands choose our drag and drop interface for building forms. 
              It's so intuitive, you'll wonder why all form builders aren't this easy!
            </p>
            <Link 
              href="/drag-drop-builder" 
              className="bg-white text-violet-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Try Drag & Drop Builder Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}