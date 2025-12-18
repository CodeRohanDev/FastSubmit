import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Zap, Upload, BarChart3, Shield, Clock, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Bulk Form Submission Tool - Submit Multiple Forms Automatically | FastSubmit',
  description: 'Bulk form submission tool to submit multiple forms automatically. Upload CSV, process hundreds of submissions. Best bulk submission software for job applications, lead generation, data entry automation.',
  keywords: [
    'bulk form submission tool',
    'bulk form submission',
    'submit multiple forms',
    'bulk submission software',
    'mass form submission',
    'automated bulk submissions',
    'csv form submission',
    'batch form processing',
    'bulk data entry tool',
    'multiple form submitter',
    'bulk job application tool',
    'mass application submitter',
    'bulk lead generation',
    'form batch processing',
    'automated data entry',
    'bulk form filler',
    'mass form automation',
    'bulk submission service',
    'enterprise form submission',
    'high volume form processing'
  ],
}

export default function BulkFormSubmissionPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Bulk Form Submission Tool - FastSubmit",
    "description": "Submit multiple forms automatically with our bulk submission tool. Upload CSV and process hundreds of forms.",
    "url": "https://fastsubmit.cloud/bulk-form-submission",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "FastSubmit Bulk Form Submission Tool",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "CSV upload support",
        "Bulk form processing",
        "Automated submissions",
        "Progress tracking",
        "Error handling",
        "High volume processing"
      ]
    }
  }

  const features = [
    { icon: <Upload className="w-5 h-5" />, title: 'CSV Upload', desc: 'Upload your data via CSV and let us handle the rest' },
    { icon: <Zap className="w-5 h-5" />, title: 'Lightning Fast', desc: 'Process hundreds of forms in minutes, not hours' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Progress Tracking', desc: 'Monitor submission progress in real-time' },
    { icon: <Shield className="w-5 h-5" />, title: 'Error Handling', desc: 'Smart retry logic and detailed error reporting' },
    { icon: <Clock className="w-5 h-5" />, title: 'Scheduled Runs', desc: 'Set up bulk submissions to run at specific times' },
    { icon: <Users className="w-5 h-5" />, title: 'Team Access', desc: 'Share bulk submission projects with your team' },
  ]

  const useCases = [
    {
      title: 'Job Applications',
      icon: '💼',
      description: 'Apply to hundreds of jobs automatically',
      benefits: ['Save 95% of application time', 'Apply to more opportunities', 'Consistent application quality'],
      example: 'Upload 500 job applications, submit in 30 minutes'
    },
    {
      title: 'Lead Generation',
      icon: '📈',
      description: 'Submit lead forms across multiple platforms',
      benefits: ['Scale lead generation efforts', 'Consistent data quality', 'Track submission success'],
      example: 'Submit 1000 lead forms across 50 websites'
    },
    {
      title: 'Data Entry',
      icon: '📊',
      description: 'Automate repetitive data entry tasks',
      benefits: ['Eliminate manual errors', 'Process large datasets', '24/7 automation capability'],
      example: 'Process 10,000 customer records automatically'
    },
    {
      title: 'Survey Distribution',
      icon: '📋',
      description: 'Submit survey responses in bulk',
      benefits: ['Test survey systems', 'Populate demo data', 'Quality assurance testing'],
      example: 'Submit 2000 survey responses for testing'
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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-600 mb-4 sm:mb-6 bg-emerald-50 px-3 sm:px-4 py-2 rounded-full border border-emerald-200">
                <span>📊</span>
                <span>Process 1000+ Forms Per Hour</span>
              </div>
              
              <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Bulk form submission
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">made simple</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                Submit hundreds or thousands of forms automatically. Upload your CSV data 
                and let our bulk submission tool handle the rest. Perfect for job applications, 
                lead generation, and data entry automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <Link 
                  href="/signup" 
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-sm sm:text-base"
                >
                  Start bulk submitting <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </Link>
                <Link 
                  href="/docs/api" 
                  className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all text-sm sm:text-base"
                >
                  API documentation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
                <div className="text-3xl font-bold text-emerald-600 mb-2">1M+</div>
                <div className="text-sm text-gray-600">Forms processed monthly</div>
              </div>
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Time saved vs manual entry</div>
              </div>
              <div className="p-6 rounded-2xl bg-purple-50 border border-purple-100">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Success rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Perfect for high-volume tasks
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">Automate any repetitive form submission process</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {useCases.map((useCase, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{useCase.description}</p>
                  <ul className="space-y-2 mb-4">
                    {useCase.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-gray-500">
                        <Check size={12} className="text-green-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                    <div className="text-xs font-medium text-emerald-700">Example:</div>
                    <div className="text-xs text-emerald-600">{useCase.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                How bulk submission works
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">From CSV to completed submissions in 4 steps</p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Upload your CSV',
                  description: 'Upload a CSV file with your form data. Each row becomes a form submission.',
                  icon: <Upload className="w-6 h-6" />
                },
                {
                  step: '2',
                  title: 'Map your fields',
                  description: 'Map CSV columns to form fields. Our smart mapping detects common patterns.',
                  icon: <BarChart3 className="w-6 h-6" />
                },
                {
                  step: '3',
                  title: 'Configure settings',
                  description: 'Set submission rate, error handling, and notification preferences.',
                  icon: <Shield className="w-6 h-6" />
                },
                {
                  step: '4',
                  title: 'Start processing',
                  description: 'Watch as your forms are submitted automatically with real-time progress tracking.',
                  icon: <Zap className="w-6 h-6" />
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-emerald-600 mb-1">Step {step.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
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
              <p className="text-gray-500 text-sm sm:text-base">Built for reliability and scale</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-white flex items-center justify-center mb-3 sm:mb-4 text-emerald-600 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mb-8">Start free, scale as you grow</p>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100">
              <div className="text-4xl font-bold text-emerald-600 mb-2">Free</div>
              <div className="text-lg text-gray-600 mb-6">Forever plan</div>
              <ul className="space-y-3 text-left max-w-sm mx-auto mb-8">
                {[
                  '1,000 bulk submissions/month',
                  'CSV upload support',
                  'Real-time progress tracking',
                  'Basic error handling',
                  'Email notifications'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-emerald-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                href="/signup" 
                className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors"
              >
                Get Started Free <ArrowRight size={18} />
              </Link>
            </div>
            
            <p className="text-xs text-gray-500 mt-6">
              Need higher limits? <Link href="/contact" className="text-emerald-600 hover:underline">Contact us</Link> for enterprise pricing.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              Ready to automate your bulk submissions?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands processing millions of forms. Start free today.
            </p>
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Start Bulk Processing <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • Process 1000 forms free
            </p>
          </div>
        </section>

        <Footer variant="extended" />
      </div>
    </>
  )
}