import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Zap, Cog, Shield, BarChart3, Clock, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Submission Automation Software - Automate Online Form Submissions | FastSubmit',
  description: 'Automate form submissions with FastSubmit. Form submission automation software for bulk submissions, multi-step forms, browser-based automation. No code required. Free submission automation tool for businesses.',
  keywords: [
    'form submission automation software',
    'automate form submissions',
    'form submission automation',
    'multi step form submitter',
    'browser based submission tool',
    'no code submission automation',
    'bulk form submission tool',
    'automatic form filler and submitter',
    'submission automation software',
    'online form automation',
    'form automation tool',
    'automated form processing',
    'form workflow automation',
    'submission process automation',
    'digital form automation',
    'web form automation',
    'form data automation',
    'automated submission system',
    'form handling automation',
    'submission management automation'
  ],
}

export default function FormSubmissionAutomationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Form Submission Automation Software - FastSubmit",
    "description": "Automate your form submissions with powerful automation software. No coding required.",
    "url": "https://fastsubmit.cloud/form-submission-automation",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "FastSubmit Form Submission Automation",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Automated form submissions",
        "Multi-step form handling",
        "Bulk submission processing",
        "No code automation",
        "Browser-based automation",
        "Submission tracking"
      ]
    }
  }

  const features = [
    { icon: <Cog className="w-5 h-5" />, title: 'Smart Automation', desc: 'Intelligent form submission automation that learns and adapts' },
    { icon: <Zap className="w-5 h-5" />, title: 'Lightning Fast', desc: 'Process hundreds of form submissions in minutes, not hours' },
    { icon: <Shield className="w-5 h-5" />, title: 'Secure & Reliable', desc: 'Enterprise-grade security with 99.9% uptime guarantee' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics Dashboard', desc: 'Track submission success rates and performance metrics' },
    { icon: <Clock className="w-5 h-5" />, title: 'Schedule Submissions', desc: 'Set up automated submissions to run at specific times' },
    { icon: <Users className="w-5 h-5" />, title: 'Team Collaboration', desc: 'Share automation workflows with your team members' },
  ]

  const automationTypes = [
    {
      title: 'Bulk Form Submissions',
      icon: '📊',
      description: 'Submit multiple forms simultaneously with different data sets',
      benefits: ['Save 90% of manual work', 'Process hundreds of forms', 'Error-free submissions']
    },
    {
      title: 'Multi-Step Form Automation',
      icon: '🔄',
      description: 'Navigate complex multi-page forms automatically',
      benefits: ['Handle complex workflows', 'Conditional logic support', 'Progress tracking']
    },
    {
      title: 'Scheduled Submissions',
      icon: '⏰',
      description: 'Set up forms to submit automatically at specific times',
      benefits: ['24/7 automation', 'Time zone support', 'Recurring submissions']
    },
    {
      title: 'API Integration',
      icon: '🔗',
      description: 'Connect with external systems and databases',
      benefits: ['Real-time data sync', 'Custom integrations', 'Webhook support']
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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-purple-600 mb-4 sm:mb-6 bg-purple-50 px-3 sm:px-4 py-2 rounded-full border border-purple-200">
                <span>🤖</span>
                <span>No Code Automation</span>
              </div>
              
              <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form submission
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">automation software</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                Automate your form submissions with powerful, no-code automation software. 
                Handle bulk submissions, multi-step forms, and complex workflows effortlessly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <Link 
                  href="/signup" 
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-sm sm:text-base"
                >
                  Start automating <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </Link>
                <Link 
                  href="/docs/api" 
                  className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all text-sm sm:text-base"
                >
                  View API docs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Types */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Powerful automation capabilities
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">Handle any type of form submission automatically</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {automationTypes.map((type, i) => (
                <div key={i} className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                        <Check size={12} className="text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Enterprise-grade features
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">Everything you need for professional form automation</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-purple-50 flex items-center justify-center mb-3 sm:mb-4 text-purple-600">
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
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Why automate form submissions?
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">The benefits of automation are clear</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ul className="space-y-4">
                  {[
                    { title: 'Save 90% of time', desc: 'Automate repetitive form filling tasks' },
                    { title: 'Reduce errors', desc: 'Eliminate human mistakes in data entry' },
                    { title: 'Scale operations', desc: 'Handle thousands of submissions effortlessly' },
                    { title: 'Improve consistency', desc: 'Ensure uniform data across all submissions' },
                    { title: '24/7 operation', desc: 'Forms submit even when you\'re sleeping' },
                    { title: 'Cost effective', desc: 'Reduce manual labor costs significantly' }
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <div className="font-medium text-gray-900">{benefit.title}</div>
                        <div className="text-sm text-gray-500">{benefit.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">10,000+</div>
                  <div className="text-sm text-gray-600 mb-4">Forms automated daily</div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">90%</div>
                  <div className="text-sm text-gray-600 mb-4">Time saved on average</div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Success rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              Ready to automate your forms?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of businesses automating their form submissions. Free forever.
            </p>
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Start Automating Free <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • Setup in minutes
            </p>
          </div>
        </section>

        <Footer variant="extended" />
      </div>
    </>
  )
}