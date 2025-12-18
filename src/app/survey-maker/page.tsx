import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Zap, BarChart3, Share2, Smartphone, Palette, Shield } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Free Survey Maker Online - Best Survey Builder | Create Surveys Free',
  description: 'Best free online survey maker. Create surveys, polls & feedback forms easily. Better than Google Forms, Zoho Forms, Microsoft Forms. Analytics, export to Excel, Word, PDF. Free forever with unlimited surveys. Hostspica Forms.',
  keywords: [
    'survey maker',
    'free survey maker',
    'survey builder',
    'online survey maker',
    'survey maker free',
    'create survey free',
    'best survey maker',
    'survey creator',
    'free online survey',
    'survey maker online',
    'feedback form',
    'poll maker',
    'form builder',
    'free form builder',
    'google forms',
    'forms',
    'quiz maker',
    'online form builder',
    'google form alternative',
    'free online form',
    'ai form builder',
    'form builder free',
    'form builder online',
    'free form',
    'online forms',
    'free online forms',
    'form maker',
    'online form maker',
    'best form maker',
    'best form builder',
    'hostspica forms',
    'forms hostspica',
    'form to excel',
    'form to word',
    'form to pdf',
    'zoho forms',
    'microsoft forms',
    'create free forms',
    'easy forms'
  ],
}

export default function SurveyMakerPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Online Survey Maker - FastSubmit",
    "description": "Create beautiful surveys and feedback forms. Analytics, export to Excel. Free forever.",
    "url": "https://fastsubmit.cloud/survey-maker",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "FastSubmit Survey Maker",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Multiple question types",
        "Analytics dashboard",
        "Export to Excel/CSV",
        "Custom branding",
        "Share anywhere",
        "Mobile responsive"
      ]
    }
  }

  const features = [
    { icon: <Zap className="w-5 h-5" />, title: 'Easy to Create', desc: 'Drag & drop survey builder. No coding required.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics', desc: 'Real-time response analytics and charts.' },
    { icon: <Share2 className="w-5 h-5" />, title: 'Share Anywhere', desc: 'Link, QR code, embed, or social media.' },
    { icon: <Smartphone className="w-5 h-5" />, title: 'Mobile Friendly', desc: 'Works perfectly on all devices.' },
    { icon: <Palette className="w-5 h-5" />, title: 'Custom Branding', desc: 'Match your brand colors and style.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Secure', desc: 'SSL encrypted, spam protected.' },
  ]

  const surveyTypes = [
    { name: 'Customer Satisfaction', icon: '😊', desc: 'Measure customer happiness' },
    { name: 'Employee Feedback', icon: '👥', desc: 'Gather team insights' },
    { name: 'Market Research', icon: '📊', desc: 'Understand your market' },
    { name: 'Event Feedback', icon: '🎉', desc: 'Post-event surveys' },
    { name: 'Product Feedback', icon: '💡', desc: 'Improve your products' },
    { name: 'NPS Surveys', icon: '⭐', desc: 'Net Promoter Score' },
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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-600 mb-4 sm:mb-6 bg-blue-50 px-3 sm:px-4 py-2 rounded-full border border-blue-200">
                <span>📊</span>
                <span>Free Forever • Unlimited Surveys</span>
              </div>
              
              <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Create surveys
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">that get answers</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                Build professional surveys with real-time analytics. 
                Share on your website, social media, or via link. Free forever.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <Link 
                  href="/signup" 
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-sm sm:text-base"
                >
                  Create survey free <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
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

        {/* Survey Types */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-200">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Create any type of survey</h2>
              <p className="text-gray-500 text-sm sm:text-base">From customer feedback to market research</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {surveyTypes.map((type, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <span className="text-3xl">{type.icon}</span>
                  <div>
                    <div className="font-medium text-gray-900 text-sm sm:text-base">{type.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{type.desc}</div>
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
                Everything you need
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">Powerful features for creating effective surveys</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-white flex items-center justify-center mb-3 sm:mb-4 text-blue-600 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Better than Google Forms
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">All the features you need, free forever</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 sm:py-4 px-2 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">Feature</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-semibold text-blue-600 text-sm sm:text-base">FastSubmit</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-semibold text-gray-500 text-sm sm:text-base">Google Forms</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Price', fastsubmit: 'Free Forever', google: 'Free' },
                    { feature: 'Unlimited Surveys', fastsubmit: true, google: true },
                    { feature: 'Analytics', fastsubmit: true, google: 'Basic' },
                    { feature: 'Custom Branding', fastsubmit: true, google: false },
                    { feature: 'Remove Branding', fastsubmit: true, google: false },
                    { feature: 'Export to Excel', fastsubmit: true, google: true },
                    { feature: 'API Access', fastsubmit: true, google: false },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">{row.feature}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                        {typeof row.fastsubmit === 'boolean' ? (
                          row.fastsubmit ? <Check className="inline text-green-600" size={16} /> : '—'
                        ) : (
                          <span className="text-blue-600 font-medium text-xs sm:text-sm">{row.fastsubmit}</span>
                        )}
                      </td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">
                        {typeof row.google === 'boolean' ? (
                          row.google ? <Check className="inline text-green-600" size={16} /> : '—'
                        ) : (
                          row.google
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
              Ready to create your survey?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of users. Free forever. No credit card required.
            </p>
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Get Started Free <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
          </div>
        </section>

        <Footer variant="extended" />
      </div>
    </>
  )
}
