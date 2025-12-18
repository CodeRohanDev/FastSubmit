import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, Users, FileText, Calendar, Phone, ClipboardCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Builder for Real Estate - Property & Agent Forms | FastSubmit',
  description: 'Free form builder for real estate agents and agencies. Property inquiry forms, buyer questionnaires, rental applications. Capture more leads. Free forever.',
  keywords: ['form builder for real estate', 'real estate form builder', 'property inquiry form', 'real estate lead form', 'rental application form', 'buyer questionnaire', 'real estate agent forms', 'property listing form', 'real estate contact form', 'realtor form builder'],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-for-real-estate' }
}

export default function FormBuilderForRealEstatePage() {
  const useCases = [
    { icon: <Home className="w-5 h-5" />, title: 'Property Inquiries', desc: 'Capture leads interested in your listings.' },
    { icon: <Users className="w-5 h-5" />, title: 'Buyer Questionnaires', desc: 'Understand buyer preferences and budget.' },
    { icon: <FileText className="w-5 h-5" />, title: 'Rental Applications', desc: 'Collect tenant applications online.' },
    { icon: <Calendar className="w-5 h-5" />, title: 'Showing Requests', desc: 'Schedule property viewings easily.' },
    { icon: <Phone className="w-5 h-5" />, title: 'Contact Forms', desc: 'Let clients reach you from your website.' },
    { icon: <ClipboardCheck className="w-5 h-5" />, title: 'Feedback Forms', desc: 'Collect feedback after showings.' },
  ]

  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-amber-600 mb-4 sm:mb-6 bg-amber-50 px-3 sm:px-4 py-2 rounded-full border border-amber-200">
                <Home size={14} /><span>For Real Estate</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form builder for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">real estate</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Capture more leads with professional forms. Property inquiries, buyer questionnaires, 
                rental applications. Free for agents and agencies.
              </p>
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                Start Free for Real Estate <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Why real estate pros choose FastSubmit</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100">
                <div className="text-4xl mb-3">🎯</div>
                <div className="font-medium text-gray-900 mb-2">More Leads</div>
                <div className="text-sm text-gray-600">Capture every inquiry</div>
              </div>
              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <div className="text-4xl mb-3">📱</div>
                <div className="font-medium text-gray-900 mb-2">Mobile Ready</div>
                <div className="text-sm text-gray-600">Works on all devices</div>
              </div>
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="text-4xl mb-3">⚡</div>
                <div className="font-medium text-gray-900 mb-2">Instant Alerts</div>
                <div className="text-sm text-gray-600">Never miss a lead</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Real estate form templates</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {useCases.map((f, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-4 text-amber-600">{f.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Close more deals with better forms</h2>
            <p className="text-gray-300 mb-8">Free forever for real estate professionals.</p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Start Free for Real Estate <ArrowRight size={16} />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
