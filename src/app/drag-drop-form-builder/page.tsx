import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, MousePointer, Palette, Smartphone, Zap, Shield, Globe } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Free Drag and Drop Form Builder - No Code Form Creator | FastSubmit',
  description: 'Create forms with our free drag and drop form builder. No coding required. Best drag & drop form creator with custom branding, mobile responsive design. Better than Google Forms, Typeform, JotForm.',
  keywords: [
    'drag and drop form builder',
    'free drag and drop forms',
    'drag drop form creator',
    'no code form builder',
    'visual form builder',
    'drag and drop form maker',
    'easy form builder',
    'simple form creator',
    'form design tool',
    'online form generator',
    'custom form builder',
    'form builder drag drop',
    'wysiwyg form builder',
    'visual form designer',
    'form builder no coding',
    'drag drop form designer',
    'interactive form builder',
    'form creation tool',
    'form building software',
    'user friendly form builder'
  ],
}

export default function DragDropFormBuilderPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Drag and Drop Form Builder - FastSubmit",
    "description": "Create beautiful forms with our intuitive drag and drop form builder. No coding required.",
    "url": "https://fastsubmit.cloud/drag-drop-form-builder",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "FastSubmit Drag and Drop Form Builder",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Drag and drop interface",
        "No coding required",
        "Mobile responsive",
        "Custom branding",
        "Real-time preview",
        "Multiple field types"
      ]
    }
  }

  const features = [
    { icon: <MousePointer className="w-5 h-5" />, title: 'Drag & Drop', desc: 'Simply drag fields where you want them. No technical skills needed.' },
    { icon: <Palette className="w-5 h-5" />, title: 'Custom Design', desc: 'Match your brand with custom colors, fonts, and styling.' },
    { icon: <Smartphone className="w-5 h-5" />, title: 'Mobile Ready', desc: 'Forms look perfect on all devices automatically.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Real-time Preview', desc: 'See exactly how your form will look as you build it.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Secure & Fast', desc: 'Built with security and performance in mind.' },
    { icon: <Globe className="w-5 h-5" />, title: 'Easy Embed', desc: 'Add to any website with one line of code.' },
  ]

  const fieldTypes = [
    { name: 'Text Input', icon: '📝', desc: 'Single line text fields' },
    { name: 'Textarea', icon: '📄', desc: 'Multi-line text areas' },
    { name: 'Email', icon: '📧', desc: 'Email validation built-in' },
    { name: 'Phone', icon: '📞', desc: 'Phone number formatting' },
    { name: 'Dropdown', icon: '📋', desc: 'Select from options' },
    { name: 'Checkboxes', icon: '☑️', desc: 'Multiple selections' },
    { name: 'Radio Buttons', icon: '🔘', desc: 'Single choice options' },
    { name: 'File Upload', icon: '📎', desc: 'Upload documents/images' },
    { name: 'Date Picker', icon: '📅', desc: 'Easy date selection' },
    { name: 'Rating', icon: '⭐', desc: 'Star ratings and scales' },
    { name: 'Signature', icon: '✍️', desc: 'Digital signatures' },
    { name: 'Payment', icon: '💳', desc: 'Stripe/PayPal integration' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />

        {/* Hero */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-indigo-600 mb-4 sm:mb-6 bg-indigo-50 px-3 sm:px-4 py-2 rounded-full border border-indigo-200">
                <span>🎨</span>
                <span>No Coding Required</span>
              </div>
              
              <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Drag & drop
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">form builder</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                Create beautiful, professional forms in minutes with our intuitive drag and drop interface. 
                No coding skills required - just drag, drop, and publish.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <Link 
                  href="/signup" 
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-sm sm:text-base"
                >
                  Start building <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </Link>
                <Link 
                  href="/templates" 
                  className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all text-sm sm:text-base"
                >
                  Browse templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Video/GIF Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">See it in action</h2>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <span className="text-sm text-gray-500 ml-2">Form Builder</span>
                </div>
                <div className="text-left space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <MousePointer size={16} className="text-indigo-600" />
                    <span className="text-sm">Drag "Email Field" to form</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Palette size={16} className="text-purple-600" />
                    <span className="text-sm">Customize colors and styling</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Smartphone size={16} className="text-green-600" />
                    <span className="text-sm">Preview on mobile devices</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                    <Zap size={16} className="text-indigo-600" />
                    <span className="text-sm font-medium">Publish form instantly!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Field Types */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Every field type you need
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">Drag and drop from our comprehensive field library</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {fieldTypes.map((field, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all cursor-pointer">
                  <span className="text-2xl">{field.icon}</span>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{field.name}</div>
                    <div className="text-xs text-gray-500">{field.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Powerful yet simple
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">Professional features that anyone can use</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-white flex items-center justify-center mb-3 sm:mb-4 text-indigo-600 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Build forms in 3 steps
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">From idea to published form in minutes</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Drag & Drop',
                  description: 'Drag form fields from the sidebar and drop them where you want them.',
                  icon: <MousePointer className="w-6 h-6" />
                },
                {
                  step: '2',
                  title: 'Customize',
                  description: 'Style your form with custom colors, fonts, and branding to match your needs.',
                  icon: <Palette className="w-6 h-6" />
                },
                {
                  step: '3',
                  title: 'Publish',
                  description: 'Share your form via link, embed on your website, or share on social media.',
                  icon: <Globe className="w-6 h-6" />
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4 text-indigo-600">
                    {step.icon}
                  </div>
                  <div className="text-sm font-medium text-indigo-600 mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/signup" 
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors text-lg"
              >
                Try Drag & Drop Builder <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Better than other form builders
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">See why developers and businesses choose FastSubmit</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 sm:py-4 px-2 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">Feature</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-semibold text-indigo-600 text-sm sm:text-base">FastSubmit</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-semibold text-gray-500 text-sm sm:text-base">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Price', fastsubmit: 'Free Forever', others: '$29+/month' },
                    { feature: 'Drag & Drop', fastsubmit: true, others: true },
                    { feature: 'Custom Branding', fastsubmit: true, others: 'Paid only' },
                    { feature: 'API Access', fastsubmit: true, others: 'Paid only' },
                    { feature: 'Unlimited Forms', fastsubmit: true, others: 'Limited' },
                    { feature: 'No Coding Required', fastsubmit: true, others: true },
                    { feature: 'Mobile Responsive', fastsubmit: true, others: true },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">{row.feature}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                        {typeof row.fastsubmit === 'boolean' ? (
                          row.fastsubmit ? <Check className="inline text-green-600" size={16} /> : '—'
                        ) : (
                          <span className="text-indigo-600 font-medium text-xs sm:text-sm">{row.fastsubmit}</span>
                        )}
                      </td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">
                        {typeof row.others === 'boolean' ? (
                          row.others ? <Check className="inline text-green-600" size={16} /> : '—'
                        ) : (
                          row.others
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              Ready to build your first form?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands using our drag & drop form builder. Free forever.
            </p>
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Start Building Free <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • Drag & drop in seconds
            </p>
          </div>
        </section>

        <Footer variant="extended" />
      </div>
    </>
  )
}