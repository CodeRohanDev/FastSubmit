import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, X } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'FastSubmit vs JotForm - Detailed Comparison 2025 | FastSubmit',
  description: 'FastSubmit vs JotForm comparison. Free alternative to JotForm without submission limits. See features, pricing, and which is better for you.',
  keywords: ['fastsubmit vs jotform', 'jotform vs fastsubmit', 'jotform alternative', 'jotform comparison', 'free jotform alternative', 'jotform pricing', 'jotform free limits', 'jotform limitations'],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-vs-jotform' }
}

export default function FormBuilderVsJotformPage() {
  const comparison = [
    { feature: 'Price', fastsubmit: 'Free Forever', jotform: '$34-99/month', winner: 'fastsubmit' },
    { feature: 'Free Submissions/Month', fastsubmit: 'Unlimited', jotform: '100', winner: 'fastsubmit' },
    { feature: 'Free Forms', fastsubmit: 'Unlimited', jotform: '5', winner: 'fastsubmit' },
    { feature: 'Free Storage', fastsubmit: 'Unlimited', jotform: '100MB', winner: 'fastsubmit' },
    { feature: 'Custom Branding', fastsubmit: 'Free', jotform: 'Paid plans', winner: 'fastsubmit' },
    { feature: 'Remove Branding', fastsubmit: 'Free', jotform: 'Paid plans', winner: 'fastsubmit' },
    { feature: 'Conditional Logic', fastsubmit: true, jotform: true, winner: 'tie' },
    { feature: 'File Uploads', fastsubmit: 'Free', jotform: 'Limited free', winner: 'fastsubmit' },
    { feature: 'Payment Integration', fastsubmit: true, jotform: true, winner: 'tie' },
    { feature: 'Templates', fastsubmit: 'Growing', jotform: '10,000+', winner: 'jotform' },
    { feature: 'Widgets', fastsubmit: 'Core set', jotform: '100+', winner: 'jotform' },
    { feature: 'API Access', fastsubmit: 'Free', jotform: 'Paid plans', winner: 'fastsubmit' },
  ]

  const jotformPros = ['10,000+ templates', '100+ widgets', 'Mature platform', 'PDF forms', 'Mobile app']
  const jotformCons = ['Only 100 free submissions/month', 'Only 5 free forms', 'Expensive paid plans', 'JotForm branding on free tier']
  const fastsubmitPros = ['100% free forever', 'Unlimited submissions', 'Unlimited forms', 'Free custom branding', 'Free API access', 'No submission limits']
  const fastsubmitCons = ['Fewer templates', 'Fewer widgets', 'Newer platform']

  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                FastSubmit vs JotForm
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                JotForm limits free users to 100 submissions. FastSubmit is unlimited. See the full comparison.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-indigo-600">FastSubmit</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-500">JotForm</th>
                </tr></thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">{row.feature}</td>
                      <td className="py-3 px-4 text-center">
                        {typeof row.fastsubmit === 'boolean' ? (row.fastsubmit ? <Check className="inline text-green-600" size={20} /> : <X className="inline text-red-500" size={20} />) : <span className="text-indigo-600 font-medium">{row.fastsubmit}</span>}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {typeof row.jotform === 'boolean' ? (row.jotform ? <Check className="inline text-green-600" size={20} /> : <X className="inline text-red-500" size={20} />) : <span className="text-gray-500">{row.jotform}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">JotForm</h3>
                <div className="mb-4">
                  <h4 className="font-medium text-green-600 mb-2">✓ Pros</h4>
                  <ul className="space-y-1">{jotformPros.map((p, i) => <li key={i} className="text-sm text-gray-600">• {p}</li>)}</ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600 mb-2">✗ Cons</h4>
                  <ul className="space-y-1">{jotformCons.map((c, i) => <li key={i} className="text-sm text-gray-600">• {c}</li>)}</ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-4">FastSubmit</h3>
                <div className="mb-4">
                  <h4 className="font-medium text-green-600 mb-2">✓ Pros</h4>
                  <ul className="space-y-1">{fastsubmitPros.map((p, i) => <li key={i} className="text-sm text-gray-600">• {p}</li>)}</ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600 mb-2">✗ Cons</h4>
                  <ul className="space-y-1">{fastsubmitCons.map((c, i) => <li key={i} className="text-sm text-gray-600">• {c}</li>)}</ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">No more 100 submission limits</h2>
            <p className="text-gray-300 mb-8">Get unlimited submissions with FastSubmit. Free forever.</p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Try FastSubmit Free <ArrowRight size={16} />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
