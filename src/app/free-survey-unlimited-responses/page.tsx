import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart, Users, Infinity, CheckCircle, PieChart, TrendingUp } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Free Survey Tool Unlimited Responses - No Limits | FastSubmit',
  description: 'Free survey tool with unlimited responses. No response limits, no monthly caps. Create surveys, collect unlimited data. Better than SurveyMonkey free tier. 100% free forever.',
  keywords: [
    'free survey tool unlimited responses',
    'unlimited survey responses',
    'free survey no limits',
    'survey tool no response limit',
    'unlimited free surveys',
    'surveymonkey alternative unlimited',
    'free survey unlimited submissions',
    'no limit survey tool',
    'free online survey unlimited',
    'survey builder unlimited responses',
    'free survey software',
    'unlimited survey free',
    'survey tool free forever',
    'no cap survey tool',
    'free survey platform'
  ],
  alternates: { canonical: 'https://fastsubmit.cloud/free-survey-unlimited-responses' }
}

export default function FreeSurveyUnlimitedResponsesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Survey Tool Unlimited Responses - FastSubmit",
    "description": "Create surveys and collect unlimited responses completely free.",
    "url": "https://fastsubmit.cloud/free-survey-unlimited-responses"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is there really no limit on responses?", "acceptedAnswer": { "@type": "Answer", "text": "Correct! Collect unlimited survey responses forever. No monthly caps, no per-response fees, no hidden limits." } },
      { "@type": "Question", "name": "How is this different from SurveyMonkey?", "acceptedAnswer": { "@type": "Answer", "text": "SurveyMonkey limits free users to 40 responses per survey. FastSubmit has no limits - collect thousands of responses completely free." } }
    ]
  }

  const features = [
    { icon: <Infinity className="w-5 h-5" />, title: 'Unlimited Responses', desc: 'No caps, no limits. Collect as many responses as you need.' },
    { icon: <Users className="w-5 h-5" />, title: 'Unlimited Surveys', desc: 'Create as many surveys as you want, all free.' },
    { icon: <BarChart className="w-5 h-5" />, title: 'Analytics', desc: 'View response analytics and charts in real-time.' },
    { icon: <PieChart className="w-5 h-5" />, title: 'Visual Reports', desc: 'Beautiful charts and graphs for your survey data.' },
    { icon: <TrendingUp className="w-5 h-5" />, title: 'Export Data', desc: 'Download all responses to Excel/CSV anytime.' },
    { icon: <CheckCircle className="w-5 h-5" />, title: 'All Question Types', desc: 'Multiple choice, rating, text, and more.' },
  ]

  const comparison = [
    { feature: 'Free Responses', fastsubmit: 'Unlimited', surveymonkey: '40/survey', typeform: '10/month' },
    { feature: 'Free Surveys', fastsubmit: 'Unlimited', surveymonkey: '10', typeform: '3' },
    { feature: 'Data Export', fastsubmit: 'Free', surveymonkey: 'Paid', typeform: 'Paid' },
    { feature: 'Custom Branding', fastsubmit: 'Free', surveymonkey: 'Paid', typeform: 'Paid' },
    { feature: 'Analytics', fastsubmit: 'Free', surveymonkey: 'Limited', typeform: 'Limited' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />

        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-cyan-600 mb-4 sm:mb-6 bg-cyan-50 px-3 sm:px-4 py-2 rounded-full border border-cyan-200">
                <Infinity size={14} />
                <span>Unlimited Responses</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Free survey tool
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">unlimited responses</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Tired of response limits? FastSubmit lets you collect unlimited survey responses 
                completely free. No caps, no upgrades needed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Create Free Survey <ArrowRight size={16} />
                </Link>
                <Link href="/templates" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all">
                  Survey Templates
                </Link>
              </div>
              <p className="text-sm text-gray-500">No response limits • No credit card • Free forever</p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Compare with competitors</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-3 px-4 font-semibold text-cyan-600">FastSubmit</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-500">SurveyMonkey</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-500">Typeform</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">{row.feature}</td>
                      <td className="py-3 px-4 text-center font-medium text-cyan-600">{row.fastsubmit}</td>
                      <td className="py-3 px-4 text-center text-gray-500">{row.surveymonkey}</td>
                      <td className="py-3 px-4 text-center text-gray-500">{row.typeform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Everything you need for surveys
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center mb-4 text-cyan-600">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">FAQ</h2>
            </div>
            <div className="space-y-6">
              {[
                { q: 'Is there really no limit on responses?', a: 'Correct! Collect unlimited survey responses forever. No monthly caps, no per-response fees, no hidden limits.' },
                { q: 'How is this different from SurveyMonkey?', a: 'SurveyMonkey limits free users to 40 responses per survey. FastSubmit has no limits - collect thousands of responses completely free.' },
                { q: 'Can I create multiple surveys?', a: 'Yes! Create unlimited surveys, each with unlimited responses. All free.' },
                { q: 'Can I export survey results?', a: 'Absolutely! Export all your survey data to Excel/CSV for free, anytime.' },
                { q: 'What question types are available?', a: 'Multiple choice, checkboxes, rating scales, text fields, dropdowns, and more.' },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-xl bg-white border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              Ready for unlimited responses?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-8">
              Create your first survey and start collecting unlimited responses. Free forever.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Create Free Survey <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
