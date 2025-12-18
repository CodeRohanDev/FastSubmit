import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Users, CreditCard, Calendar, FileText, Mail } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Builder for Nonprofits - Free Forms for NGOs | FastSubmit',
  description: 'Free form builder for nonprofits and NGOs. Donation forms, volunteer signups, event registration. No fees, unlimited forms. Perfect for charities and foundations.',
  keywords: ['form builder for nonprofits', 'nonprofit form builder', 'free forms for nonprofits', 'charity form builder', 'ngo form builder', 'donation form builder', 'volunteer signup form', 'nonprofit registration form', 'free nonprofit forms', 'foundation form builder'],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-for-nonprofits' }
}

export default function FormBuilderForNonprofitsPage() {
  const useCases = [
    { icon: <CreditCard className="w-5 h-5" />, title: 'Donation Forms', desc: 'Collect donations with secure, branded forms.' },
    { icon: <Users className="w-5 h-5" />, title: 'Volunteer Signups', desc: 'Recruit and manage volunteers easily.' },
    { icon: <Calendar className="w-5 h-5" />, title: 'Event Registration', desc: 'Register attendees for fundraisers and events.' },
    { icon: <FileText className="w-5 h-5" />, title: 'Grant Applications', desc: 'Collect grant and funding applications.' },
    { icon: <Heart className="w-5 h-5" />, title: 'Membership Forms', desc: 'Manage member registrations and renewals.' },
    { icon: <Mail className="w-5 h-5" />, title: 'Contact Forms', desc: 'Let supporters reach you easily.' },
  ]

  return (
    <>
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-rose-600 mb-4 sm:mb-6 bg-rose-50 px-3 sm:px-4 py-2 rounded-full border border-rose-200">
                <Heart size={14} /><span>For Nonprofits</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form builder for <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">nonprofits</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Free forms for charities, NGOs, and foundations. Donation forms, volunteer signups, event registration. 
                100% free because we believe in your mission.
              </p>
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                Start Free for Nonprofits <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Why nonprofits choose FastSubmit</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-rose-50 border border-rose-100">
                <div className="text-4xl mb-3">💰</div>
                <div className="font-medium text-gray-900 mb-2">100% Free</div>
                <div className="text-sm text-gray-600">Every dollar goes to your cause</div>
              </div>
              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <div className="text-4xl mb-3">∞</div>
                <div className="font-medium text-gray-900 mb-2">Unlimited</div>
                <div className="text-sm text-gray-600">Forms, submissions, everything</div>
              </div>
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100">
                <div className="text-4xl mb-3">🎨</div>
                <div className="font-medium text-gray-900 mb-2">Your Brand</div>
                <div className="text-sm text-gray-600">Custom colors and logo</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Forms for every nonprofit need</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {useCases.map((f, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-rose-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center mb-4 text-rose-600">{f.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Focus on your mission, not forms</h2>
            <p className="text-gray-300 mb-8">Free forever for nonprofits. No credit card needed.</p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Start Free for Nonprofits <ArrowRight size={16} />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
