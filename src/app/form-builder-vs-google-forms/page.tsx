import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, X } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'FastSubmit vs Google Forms - Detailed Comparison 2025 | FastSubmit',
  description: 'FastSubmit vs Google Forms comparison. See which form builder is better for your needs. Features, pricing, pros and cons. Make an informed decision.',
  keywords: ['fastsubmit vs google forms', 'google forms vs fastsubmit', 'google forms comparison', 'google forms alternative comparison', 'best google forms alternative', 'form builder comparison', 'google forms pros cons', 'google forms limitations'],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-vs-google-forms' }
}

export default function FormBuilderVsGoogleFormsPage() {
  const comparison = [
    { feature: 'Price', fastsubmit: 'Free Forever', google: 'Free', winner: 'tie' },
    { feature: 'Custom Branding', fastsubmit: true, google: false, winner: 'fastsubmit' },
    { feature: 'Remove "Powered by"', fastsubmit: true, google: false, winner: 'fastsubmit' },
    { feature: 'Developer API', fastsubmit: true, google: false, winner: 'fastsubmit' },
    { feature: 'Webhooks', fastsubmit: true, google: false, winner: 'fastsubmit' },
    { feature: 'Email Notifications', fastsubmit: 'Built-in', google: 'Add-ons only', winner: 'fastsubmit' },
    { feature: 'No Google Account Required', fastsubmit: true, google: false, winner: 'fastsubmit' },
    { feature: 'Custom Domain', fastsubmit: true, google: false, winner: 'fastsubmit' },
    { feature: 'Unlimited Forms', fastsubmit: true, google: true, winner: 'tie' },
    { feature: 'Unlimited Submissions', fastsubmit: true, google: true, winner: 'tie' },
    { feature: 'File Uploads', fastsubmit: true, google: true, winner: 'tie' },
    { feature: 'Conditional Logic', fastsubmit: true, google: 'Limited', winner: 'fastsubmit' },
    { feature: 'Modern Design', fastsubmit: true, google: 'Basic', winner: 'fastsubmit' },
    { feature: 'CSV Export', fastsubmit: true, google: true, winner: 'tie' },
    { feature: 'Spam Protection', fastsubmit: 'Built-in', google: 'reCAPTCHA', winner: 'tie' },
  ]

  const googlePros = ['Free to use', 'Google ecosystem integration', 'Familiar interface', 'Google Sheets sync']
  const googleCons = ['Requires Google account', 'No custom branding', 'No API access', 'Limited design options', 'No webhooks', 'Basic notifications']
  const fastsubmitPros = ['Free forever', 'Custom branding', 'Developer API', 'Webhooks', 'No account required for respondents', 'Modern design', 'Email notifications built-in']
  const fastsubmitCons = ['Newer platform', 'Smaller ecosystem']

  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                FastSubmit vs Google Forms
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Detailed comparison to help you choose the right form builder for your needs.
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
                  <th className="text-center py-3 px-4 font-semibold text-gray-500">Google Forms</th>
                </tr></thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">{row.feature}</td>
                      <td className="py-3 px-4 text-center">
                        {typeof row.fastsubmit === 'boolean' ? (row.fastsubmit ? <Check className="inline text-green-600" size={20} /> : <X className="inline text-red-500" size={20} />) : <span className="text-indigo-600 font-medium">{row.fastsubmit}</span>}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {typeof row.google === 'boolean' ? (row.google ? <Check className="inline text-green-600" size={20} /> : <X className="inline text-red-500" size={20} />) : <span className="text-gray-500">{row.google}</span>}
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Google Forms</h3>
                <div className="mb-4">
                  <h4 className="font-medium text-green-600 mb-2">✓ Pros</h4>
                  <ul className="space-y-1">{googlePros.map((p, i) => <li key={i} className="text-sm text-gray-600">• {p}</li>)}</ul>
                </div>
                <div>
                  <h4 className="font-medium text-red-600 mb-2">✗ Cons</h4>
                  <ul className="space-y-1">{googleCons.map((c, i) => <li key={i} className="text-sm text-gray-600">• {c}</li>)}</ul>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to try FastSubmit?</h2>
            <p className="text-gray-300 mb-8">Get all the features Google Forms is missing. Free forever.</p>
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
