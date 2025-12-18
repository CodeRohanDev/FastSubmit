import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Shield, FileText, Calendar, Users, ClipboardCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Builder for Healthcare - Medical & Patient Forms | FastSubmit',
  description: 'Form builder for healthcare providers. Patient intake forms, appointment scheduling, medical history forms. Secure, easy to use. Free for clinics and practices.',
  keywords: ['form builder for healthcare', 'medical form builder', 'patient intake form', 'healthcare forms', 'medical history form', 'appointment form', 'clinic form builder', 'doctor form builder', 'patient registration form', 'healthcare intake forms'],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-for-healthcare' }
}

export default function FormBuilderForHealthcarePage() {
  const useCases = [
    { icon: <FileText className="w-5 h-5" />, title: 'Patient Intake', desc: 'Collect patient information before appointments.' },
    { icon: <Calendar className="w-5 h-5" />, title: 'Appointment Requests', desc: 'Let patients request appointments online.' },
    { icon: <ClipboardCheck className="w-5 h-5" />, title: 'Medical History', desc: 'Gather comprehensive medical history.' },
    { icon: <Heart className="w-5 h-5" />, title: 'Health Assessments', desc: 'Pre-visit health questionnaires.' },
    { icon: <Users className="w-5 h-5" />, title: 'Patient Feedback', desc: 'Collect satisfaction surveys.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Consent Forms', desc: 'Digital consent and authorization.' },
  ]

  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-teal-600 mb-4 sm:mb-6 bg-teal-50 px-3 sm:px-4 py-2 rounded-full border border-teal-200">
                <Heart size={14} /><span>For Healthcare</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form builder for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">healthcare</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Streamline patient intake with digital forms. Medical history, appointment requests, 
                consent forms. Secure and easy to use. Free for healthcare providers.
              </p>
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                Start Free for Healthcare <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Built for healthcare</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-teal-50 border border-teal-100">
                <div className="text-4xl mb-3">🔒</div>
                <div className="font-medium text-gray-900 mb-2">Secure</div>
                <div className="text-sm text-gray-600">HTTPS encrypted data</div>
              </div>
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="text-4xl mb-3">📱</div>
                <div className="font-medium text-gray-900 mb-2">Mobile Friendly</div>
                <div className="text-sm text-gray-600">Patients fill on any device</div>
              </div>
              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <div className="text-4xl mb-3">⚡</div>
                <div className="font-medium text-gray-900 mb-2">Instant Alerts</div>
                <div className="text-sm text-gray-600">Email notifications</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Healthcare form templates</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {useCases.map((f, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center mb-4 text-teal-600">{f.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Modernize your patient intake</h2>
            <p className="text-gray-300 mb-8">Free digital forms for healthcare providers.</p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Start Free for Healthcare <ArrowRight size={16} />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
