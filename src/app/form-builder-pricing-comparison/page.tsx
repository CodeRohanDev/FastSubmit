import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, X } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Builder Pricing Comparison 2025 - Free vs Paid | FastSubmit',
  description: 'Compare form builder pricing: FastSubmit vs Typeform vs JotForm vs Google Forms. See which offers the best value. Free tier comparison, features, and costs.',
  keywords: ['form builder pricing comparison', 'form builder cost', 'typeform pricing', 'jotform pricing', 'google forms vs paid', 'free form builder comparison', 'form builder price', 'cheapest form builder', 'form builder free vs paid', 'best value form builder'],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-pricing-comparison' }
}

export default function FormBuilderPricingComparisonPage() {
  const pricing = [
    { name: 'FastSubmit', free: 'Unlimited', basic: 'Free', pro: 'Free', enterprise: 'Free', highlight: true },
    { name: 'Typeform', free: '10 responses', basic: '$25/mo', pro: '$50/mo', enterprise: '$83/mo', highlight: false },
    { name: 'JotForm', free: '100 submissions', basic: '$34/mo', pro: '$39/mo', enterprise: '$99/mo', highlight: false },
    { name: 'Google Forms', free: 'Unlimited', basic: 'N/A', pro: 'N/A', enterprise: 'Workspace $6+', highlight: false },
    { name: 'SurveyMonkey', free: '40 responses', basic: '$25/mo', pro: '$75/mo', enterprise: 'Custom', highlight: false },
    { name: 'Formstack', free: 'No free tier', basic: '$50/mo', pro: '$83/mo', enterprise: '$208/mo', highlight: false },
  ]

  const features = [
    { feature: 'Unlimited Forms', fastsubmit: true, typeform: false, jotform: false, google: true },
    { feature: 'Unlimited Submissions', fastsubmit: true, typeform: false, jotform: false, google: true },
    { feature: 'Custom Branding (Free)', fastsubmit: true, typeform: false, jotform: false, google: false },
    { feature: 'API Access (Free)', fastsubmit: true, typeform: false, jotform: false, google: false },
    { feature: 'Webhooks (Free)', fastsubmit: true, typeform: false, jotform: false, google: false },
    { feature: 'File Uploads (Free)', fastsubmit: true, typeform: false, jotform: true, google: true },
    { feature: 'Remove Branding (Free)', fastsubmit: true, typeform: false, jotform: false, google: false },
    { feature: 'Email Notifications', fastsubmit: true, typeform: true, jotform: true, google: false },
    { feature: 'CSV Export', fastsubmit: true, typeform: true, jotform: true, google: true },
  ]

  const annualSavings = [
    { vs: 'Typeform Basic', savings: '$300/year' },
    { vs: 'Typeform Pro', savings: '$600/year' },
    { vs: 'JotForm Bronze', savings: '$408/year' },
    { vs: 'SurveyMonkey', savings: '$300/year' },
    { vs: 'Formstack', savings: '$600/year' },
  ]

  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form Builder Pricing Comparison
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Compare pricing across all major form builders. See why FastSubmit offers the best value.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Monthly Pricing Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Platform</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Free Tier</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Basic</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Pro</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Enterprise</th>
                </tr></thead>
                <tbody>
                  {pricing.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-100 ${row.highlight ? 'bg-indigo-50' : ''}`}>
                      <td className={`py-3 px-4 font-medium ${row.highlight ? 'text-indigo-600' : 'text-gray-700'}`}>{row.name}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{row.free}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{row.basic}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{row.pro}</td>
                      <td className="py-3 px-4 text-center text-gray-600">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Save with FastSubmit</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {annualSavings.map((s, i) => (
                <div key={i} className="p-4 rounded-xl bg-green-50 border border-green-200 text-center">
                  <div className="text-sm text-gray-600 mb-1">vs {s.vs}</div>
                  <div className="text-2xl font-bold text-green-600">{s.savings}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Free Tier Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature (Free Tier)</th>
                  <th className="text-center py-3 px-4 font-semibold text-indigo-600">FastSubmit</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-500">Typeform</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-500">JotForm</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-500">Google</th>
                </tr></thead>
                <tbody>
                  {features.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">{row.feature}</td>
                      <td className="py-3 px-4 text-center">{row.fastsubmit ? <Check className="inline text-green-600" size={20} /> : <X className="inline text-red-500" size={20} />}</td>
                      <td className="py-3 px-4 text-center">{row.typeform ? <Check className="inline text-green-600" size={20} /> : <X className="inline text-red-500" size={20} />}</td>
                      <td className="py-3 px-4 text-center">{row.jotform ? <Check className="inline text-green-600" size={20} /> : <X className="inline text-red-500" size={20} />}</td>
                      <td className="py-3 px-4 text-center">{row.google ? <Check className="inline text-green-600" size={20} /> : <X className="inline text-red-500" size={20} />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Why pay when you can get it free?</h2>
            <p className="text-gray-300 mb-8">FastSubmit gives you everything for free. No limits, no catches.</p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Start Free Forever <ArrowRight size={16} />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
