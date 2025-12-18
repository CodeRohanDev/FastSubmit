import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileSpreadsheet, Download, Table, Filter, BarChart, FileText } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Builder Export to Excel Free - CSV & Spreadsheet | FastSubmit',
  description: 'Form builder with free Excel export. Download form submissions as CSV, Excel spreadsheet. One-click export, filter data, analyze responses. Free data export forever.',
  keywords: [
    'form builder export to excel free',
    'form to excel',
    'form csv export',
    'form spreadsheet export',
    'download form submissions',
    'form data export',
    'export form responses',
    'form to csv free',
    'form builder excel download',
    'form submission export',
    'free form data download',
    'form to spreadsheet',
    'export survey results excel',
    'form response download',
    'form data csv'
  ],
  alternates: { canonical: 'https://fastsubmit.cloud/form-export-excel' }
}

export default function FormExportExcelPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Form Builder Export to Excel Free - FastSubmit",
    "description": "Export form submissions to Excel and CSV for free.",
    "url": "https://fastsubmit.cloud/form-export-excel"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Can I export to Excel for free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Export all your form submissions to Excel/CSV completely free. No limits on exports or data." } },
      { "@type": "Question", "name": "What formats can I export to?", "acceptedAnswer": { "@type": "Answer", "text": "Export to CSV (opens in Excel, Google Sheets), and we're adding direct Excel (.xlsx) and PDF export soon." } }
    ]
  }

  const features = [
    { icon: <FileSpreadsheet className="w-5 h-5" />, title: 'Excel Compatible', desc: 'Export to CSV that opens perfectly in Excel and Google Sheets.' },
    { icon: <Download className="w-5 h-5" />, title: 'One-Click Export', desc: 'Download all your data with a single click.' },
    { icon: <Table className="w-5 h-5" />, title: 'Clean Format', desc: 'Properly formatted columns and rows, ready to analyze.' },
    { icon: <Filter className="w-5 h-5" />, title: 'Filter First', desc: 'Filter submissions by date or field before exporting.' },
    { icon: <BarChart className="w-5 h-5" />, title: 'All Data Included', desc: 'Export includes all fields, timestamps, and metadata.' },
    { icon: <FileText className="w-5 h-5" />, title: 'Multiple Formats', desc: 'CSV now, Excel (.xlsx) and PDF coming soon.' },
  ]

  const exportFormats = [
    { name: 'CSV', desc: 'Universal format, works everywhere', icon: '📊', available: true },
    { name: 'Excel (.xlsx)', desc: 'Native Excel format', icon: '📗', available: false },
    { name: 'Google Sheets', desc: 'Direct to Google Sheets', icon: '📋', available: false },
    { name: 'PDF Report', desc: 'Formatted PDF reports', icon: '📄', available: false },
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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-600 mb-4 sm:mb-6 bg-green-50 px-3 sm:px-4 py-2 rounded-full border border-green-200">
                <FileSpreadsheet size={14} />
                <span>Free Excel Export</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form builder with
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Excel export free</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Export all your form submissions to Excel and CSV for free. 
                No premium plans, no per-export fees. Your data, your way.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Start Collecting Data <ArrowRight size={16} />
                </Link>
                <Link href="/templates" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all">
                  View Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Export formats</h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {exportFormats.map((format, i) => (
                <div key={i} className={`p-4 rounded-xl border text-center ${format.available ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="text-3xl mb-2">{format.icon}</div>
                  <div className="font-medium text-gray-900">{format.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{format.desc}</div>
                  <div className={`text-xs mt-2 ${format.available ? 'text-green-600' : 'text-gray-400'}`}>
                    {format.available ? '✓ Available' : 'Coming Soon'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Export features
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4 text-green-600">
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
                { q: 'Can I export to Excel for free?', a: 'Yes! Export all your form submissions to Excel/CSV completely free. No limits on exports or data.' },
                { q: 'What formats can I export to?', a: 'Export to CSV (opens in Excel, Google Sheets), and we\'re adding direct Excel (.xlsx) and PDF export soon.' },
                { q: 'Is there a limit on how much data I can export?', a: 'No limits! Export all your submissions, whether you have 10 or 10,000 responses.' },
                { q: 'Can I filter data before exporting?', a: 'Yes! Filter by date range, specific fields, or search terms before exporting.' },
                { q: 'Does the export include all form fields?', a: 'Yes! All fields, timestamps, and submission metadata are included in every export.' },
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
              Ready to export your data?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-8">
              Create forms and export to Excel/CSV anytime. Free forever.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Start Collecting Data <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
