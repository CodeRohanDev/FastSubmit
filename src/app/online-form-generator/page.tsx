import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Zap, Globe, Smartphone, BarChart3, Shield, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Online Form Generator - Generate Forms Instantly | Free Form Creator',
  description: 'Generate professional online forms instantly. Free online form generator with templates, custom branding, mobile responsive design. Create contact forms, surveys, quizzes in seconds.',
  keywords: [
    'online form generator',
    'form generator online',
    'generate forms online',
    'instant form generator',
    'online form creator',
    'web form generator',
    'form generator free',
    'automatic form generator',
    'quick form generator',
    'form generation tool',
    'online form maker',
    'form generator software',
    'web form creator',
    'digital form generator',
    'form builder generator',
    'html form generator',
    'responsive form generator',
    'mobile form generator',
    'custom form generator',
    'professional form generator'
  ],
}

export default function OnlineFormGeneratorPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Online Form Generator - FastSubmit",
    "description": "Generate professional online forms instantly with our free form generator. Templates, custom branding, mobile responsive.",
    "url": "https://fastsubmit.cloud/online-form-generator",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "FastSubmit Online Form Generator",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Instant form generation",
        "Professional templates",
        "Custom branding",
        "Mobile responsive",
        "Real-time preview",
        "One-click publish"
      ]
    }
  }

  const features = [
    { icon: <Zap className="w-5 h-5" />, title: 'Instant Generation', desc: 'Generate professional forms in seconds, not hours' },
    { icon: <Globe className="w-5 h-5" />, title: 'Web-Based', desc: 'Works in any browser, no software to download or install' },
    { icon: <Smartphone className="w-5 h-5" />, title: 'Mobile Ready', desc: 'Generated forms work perfectly on all devices' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics Built-in', desc: 'Track form performance and submission data' },
    { icon: <Shield className="w-5 h-5" />, title: 'Secure & Reliable', desc: 'Enterprise-grade security for all generated forms' },
    { icon: <Users className="w-5 h-5" />, title: 'Team Collaboration', desc: 'Share and collaborate on generated forms' },
  ]

  const formTypes = [
    { name: 'Contact Forms', icon: '📞', time: '30 seconds', desc: 'Generate contact forms for websites' },
    { name: 'Survey Forms', icon: '📊', time: '1 minute', desc: 'Create surveys and feedback forms' },
    { name: 'Registration Forms', icon: '📝', time: '45 seconds', desc: 'Generate event and user registration forms' },
    { name: 'Lead Forms', icon: '🎯', time: '30 seconds', desc: 'Create lead generation and capture forms' },
    { name: 'Order Forms', icon: '🛒', time: '1 minute', desc: 'Generate product and service order forms' },
    { name: 'Feedback Forms', icon: '💬', time: '45 seconds', desc: 'Create customer feedback and review forms' },
    { name: 'Quiz Forms', icon: '🧠', time: '2 minutes', desc: 'Generate interactive quizzes and tests' },
    { name: 'Application Forms', icon: '📋', time: '2 minutes', desc: 'Create job and program application forms' },
  ]

  const generationSteps = [
    {
      step: '1',
      title: 'Choose Template',
      description: 'Select from our library of professional form templates or start from scratch.',
      time: '10 seconds'
    },
    {
      step: '2',
      title: 'Customize Fields',
      description: 'Add, remove, or modify form fields to match your exact requirements.',
      time: '30 seconds'
    },
    {
      step: '3',
      title: 'Style & Brand',
      description: 'Apply your colors, fonts, and branding to make the form uniquely yours.',
      time: '20 seconds'
    },
    {
      step: '4',
      title: 'Generate & Publish',
      description: 'Click generate and get your form link instantly. Share anywhere.',
      time: '5 seconds'
    }
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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-600 mb-4 sm:mb-6 bg-green-50 px-3 sm:px-4 py-2 rounded-full border border-green-200">
                <span>⚡</span>
                <span>Generate Forms in Seconds</span>
              </div>
              
              <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Online form generator
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">for instant results</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                Generate professional online forms instantly with our powerful form generator. 
                Choose from templates, customize fields, and publish in seconds. 
                No coding required, just instant results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <Link 
                  href="/signup" 
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-sm sm:text-base"
                >
                  Generate forms now <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
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

        {/* Generation Speed */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">Generate any form type instantly</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {formTypes.map((type, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all">
                  <div className="text-3xl mb-2">{type.icon}</div>
                  <div className="font-medium text-gray-900 text-sm mb-1">{type.name}</div>
                  <div className="text-xs text-green-600 font-medium mb-2">⚡ {type.time}</div>
                  <div className="text-xs text-gray-500">{type.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Generation Works */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Form generation in 4 steps
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">From idea to published form in under 2 minutes</p>
            </div>

            <div className="space-y-8">
              {generationSteps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100">
              <div className="text-2xl font-bold text-green-600 mb-2">Total Time: ~1 minute</div>
              <div className="text-sm text-gray-600">From start to published form</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Powerful generation features
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">Everything you need for professional form generation</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-white flex items-center justify-center mb-3 sm:mb-4 text-green-600 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Why use an online form generator?
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">The advantages are clear</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Method</h3>
                <ul className="space-y-3">
                  {[
                    'Hours of manual coding',
                    'Complex HTML/CSS knowledge required',
                    'Testing across devices',
                    'Security implementation',
                    'Backend setup needed'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">FastSubmit Generator</h3>
                <ul className="space-y-3">
                  {[
                    'Generate forms in seconds',
                    'No coding knowledge required',
                    'Automatically mobile responsive',
                    'Built-in security & spam protection',
                    'Instant hosting & backend'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <Check size={14} className="text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-4 p-6 bg-green-50 rounded-2xl border border-green-100">
                <div className="text-3xl">⚡</div>
                <div>
                  <div className="font-semibold text-gray-900">Save 95% of development time</div>
                  <div className="text-sm text-gray-600">Generate professional forms instantly</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Best online form generator
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">Compare FastSubmit with other form generators</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 sm:py-4 px-2 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">Feature</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-semibold text-green-600 text-sm sm:text-base">FastSubmit</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-semibold text-gray-500 text-sm sm:text-base">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Generation Speed', fastsubmit: '< 1 minute', others: '5-10 minutes' },
                    { feature: 'Price', fastsubmit: 'Free Forever', others: '$29+/month' },
                    { feature: 'Templates', fastsubmit: '50+ templates', others: 'Limited' },
                    { feature: 'Custom Branding', fastsubmit: true, others: 'Paid only' },
                    { feature: 'Mobile Responsive', fastsubmit: true, others: true },
                    { feature: 'API Access', fastsubmit: true, others: 'Paid only' },
                    { feature: 'Unlimited Forms', fastsubmit: true, others: 'Limited' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">{row.feature}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                        {typeof row.fastsubmit === 'boolean' ? (
                          row.fastsubmit ? <Check className="inline text-green-600" size={16} /> : '—'
                        ) : (
                          <span className="text-green-600 font-medium text-xs sm:text-sm">{row.fastsubmit}</span>
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
              Ready to generate your first form?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands generating professional forms instantly. Free forever.
            </p>
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Start Generating Forms <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • Generate in seconds
            </p>
          </div>
        </section>

        <Footer variant="extended" />
      </div>
    </>
  )
}