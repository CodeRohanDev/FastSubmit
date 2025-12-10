import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Smartphone, Link2, QrCode, BarChart3, Mail, Palette } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Free Online Forms - Create & Share Forms Free | Best Form Maker',
  description: 'Create free online forms and share via link, QR code, or email. Best free form maker alternative to Google Forms, Zoho Forms, Microsoft Forms. Unlimited submissions, export to Excel, Word, PDF. Free forever.',
  keywords: [
    'online forms',
    'free online forms',
    'free online form',
    'online form builder',
    'online form maker',
    'forms',
    'free form',
    'form builder',
    'free form builder',
    'form builder free',
    'form builder online',
    'form maker',
    'best form maker',
    'best form builder',
    'google forms',
    'google form alternative',
    'ai form builder',
    'cheapest form',
    'cheapest form builder',
    'best forms',
    'hostspica forms',
    'forms hostspica',
    'form to excel',
    'form to word',
    'form to pdf',
    'best form website',
    'free form website',
    'affordable forms',
    'zoho forms',
    'microsoft forms',
    'free zoho forms',
    'free microsoft forms',
    'create free forms',
    'easy forms',
    'quiz maker'
  ],
}

export default function OnlineFormsPage() {
  const formTypes = [
    { name: 'Contact Forms', icon: '📬', desc: 'Collect inquiries and messages' },
    { name: 'Surveys', icon: '📊', desc: 'Gather feedback and opinions' },
    { name: 'Registrations', icon: '📝', desc: 'Sign up attendees and members' },
    { name: 'Quizzes', icon: '🎯', desc: 'Test knowledge and skills' },
    { name: 'Order Forms', icon: '🛒', desc: 'Accept orders and requests' },
    { name: 'Applications', icon: '📄', desc: 'Collect job or program applications' },
  ]

  const features = [
    { icon: <Link2 className="w-5 h-5" />, title: 'Shareable Links', desc: 'Clean, short URLs for easy sharing' },
    { icon: <QrCode className="w-5 h-5" />, title: 'QR Codes', desc: 'Auto-generated codes for print and offline' },
    { icon: <Mail className="w-5 h-5" />, title: 'Email Sharing', desc: 'Send forms directly via email' },
    { icon: <Smartphone className="w-5 h-5" />, title: 'Mobile Optimized', desc: 'Perfect on any device' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics', desc: 'Track views and completion rates' },
    { icon: <Palette className="w-5 h-5" />, title: 'Custom Branding', desc: 'Match your brand identity' },
  ]

  const comparison = [
    { feature: 'Price', fastsubmit: 'Free Forever', google: 'Free' },
    { feature: 'Unlimited Forms', fastsubmit: true, google: true },
    { feature: 'Unlimited Submissions', fastsubmit: true, google: true },
    { feature: 'Custom Branding', fastsubmit: true, google: false },
    { feature: 'Remove Branding', fastsubmit: true, google: false },
    { feature: 'Custom Domain', fastsubmit: true, google: false },
    { feature: 'API Access', fastsubmit: true, google: false },
    { feature: 'Webhooks', fastsubmit: true, google: false },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm text-green-600 mb-6 bg-green-50 px-4 py-2 rounded-full">
            <Smartphone size={16} />
            Online Forms
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Beautiful online forms
            <br />
            <span className="text-gray-400">share anywhere</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Create stunning forms and share them via link, QR code, or email. 
            Like Google Forms, but with more features and better design. Free forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all"
            >
              Create online form <ArrowRight size={18} />
            </Link>
            <Link 
              href="/templates" 
              className="inline-flex items-center justify-center gap-2 text-gray-600 px-8 py-4 rounded-full font-medium hover:text-gray-900 transition-colors border border-gray-200 bg-white"
            >
              Browse templates
            </Link>
          </div>
        </div>
      </section>

      {/* Form Types */}
      <section className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Create any type of form</h2>
            <p className="text-gray-500">From simple contact forms to complex surveys</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {formTypes.map((type) => (
              <div key={type.name} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <span className="text-3xl">{type.icon}</span>
                <div>
                  <div className="font-medium text-gray-900">{type.name}</div>
                  <div className="text-sm text-gray-500">{type.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Sharing Works */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Share your way
              </h2>
              <p className="text-gray-500 mb-6">
                Every form gets a unique shareable link. Share it on social media, 
                send via email, print as a QR code, or embed on your website.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Direct Link', desc: 'Short, clean URL like fastsubmit.hostspica.com/f/abc123' },
                  { title: 'QR Code', desc: 'Auto-generated QR code for print materials' },
                  { title: 'Email', desc: 'Send form link directly to recipients' },
                  { title: 'Social Media', desc: 'Share on any social platform' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="text-green-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm mx-auto">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">📝</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Customer Feedback</h3>
                  <p className="text-sm text-gray-500">Help us improve our service</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600 block mb-1">Your Name</label>
                    <div className="h-10 bg-gray-100 rounded-lg"></div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 block mb-1">Email</label>
                    <div className="h-10 bg-gray-100 rounded-lg"></div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 block mb-1">Rating</label>
                    <div className="flex gap-2">
                      {[1,2,3,4,5].map((n) => (
                        <div key={n} className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                          ⭐
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-green-500 text-white py-3 rounded-lg font-medium">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Everything you need
            </h2>
            <p className="text-gray-500">Powerful features for beautiful online forms</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4 text-green-600">
                  {feature.icon}
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Better than Google Forms
            </h2>
            <p className="text-gray-500">All the features you love, plus more</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-green-600">FastSubmit</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-500">Google Forms</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.fastsubmit === 'boolean' ? (
                        row.fastsubmit ? <Check className="inline text-green-600" size={20} /> : <span className="text-gray-300">—</span>
                      ) : (
                        <span className="text-green-600 font-medium">{row.fastsubmit}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.google === 'boolean' ? (
                        row.google ? <Check className="inline text-green-600" size={20} /> : <span className="text-gray-300">—</span>
                      ) : (
                        <span className="text-gray-600">{row.google}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/google-forms-alternative"
              className="text-green-600 hover:text-green-700 font-medium inline-flex items-center gap-2"
            >
              See full comparison <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-500 to-emerald-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Ready to create your form?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Start collecting responses in minutes
          </p>
          <Link 
            href="/signup" 
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started Free <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer variant="extended" />
    </div>
  )
}
