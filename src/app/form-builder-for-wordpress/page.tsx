import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code, Zap, Shield, Puzzle, RefreshCw, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Builder for WordPress - Easy WordPress Forms | FastSubmit',
  description: 'Best form builder for WordPress websites. No plugin needed, just embed code. Faster than Contact Form 7, WPForms. Free forms for WordPress blogs and business sites.',
  keywords: [
    'form builder for wordpress',
    'wordpress form builder',
    'wordpress contact form',
    'wordpress form plugin alternative',
    'contact form 7 alternative',
    'wpforms alternative',
    'gravity forms alternative',
    'wordpress form embed',
    'wordpress form without plugin',
    'free wordpress forms',
    'wordpress survey form',
    'wordpress lead form',
    'wordpress registration form',
    'wordpress feedback form',
    'best wordpress form builder'
  ],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-for-wordpress' }
}

export default function FormBuilderForWordPressPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Form Builder for WordPress - FastSubmit",
    "description": "Create forms for WordPress without plugins. Simple embed code.",
    "url": "https://fastsubmit.cloud/form-builder-for-wordpress"
  }

  const comparison = [
    { feature: 'Setup Time', fastsubmit: '2 minutes', cf7: '15+ minutes', wpforms: '10+ minutes' },
    { feature: 'Plugin Required', fastsubmit: 'No', cf7: 'Yes', wpforms: 'Yes' },
    { feature: 'Site Speed Impact', fastsubmit: 'None', cf7: 'Slows site', wpforms: 'Slows site' },
    { feature: 'Security Updates', fastsubmit: 'Automatic', cf7: 'Manual', wpforms: 'Manual' },
    { feature: 'Price', fastsubmit: 'Free', cf7: 'Free (limited)', wpforms: '$49+/year' },
  ]

  const features = [
    { icon: <Code className="w-5 h-5" />, title: 'No Plugin Needed', desc: 'Just paste embed code. No WordPress plugin to install or update.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Faster Site', desc: 'No plugin bloat. Your WordPress site stays fast.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Always Secure', desc: 'We handle security updates. No vulnerable plugins.' },
    { icon: <Puzzle className="w-5 h-5" />, title: 'Works Everywhere', desc: 'Classic editor, Gutenberg, Elementor, Divi - all supported.' },
    { icon: <RefreshCw className="w-5 h-5" />, title: 'Auto Updates', desc: 'Forms update automatically. No maintenance needed.' },
    { icon: <CheckCircle className="w-5 h-5" />, title: 'Full Features', desc: 'Email notifications, spam protection, analytics included.' },
  ]

  const embedCode = `<!-- Paste in WordPress HTML block or theme -->
<div id="fastsubmit-form" data-form-id="YOUR_FORM_ID"></div>
<script src="https://fastsubmit.cloud/embed.js"></script>`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-600 mb-4 sm:mb-6 bg-blue-50 px-3 sm:px-4 py-2 rounded-full border border-blue-200">
                <span>📝</span><span>WordPress Forms</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form builder for
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">WordPress</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Add forms to WordPress without plugins. No Contact Form 7, no WPForms. 
                Just simple embed code that works everywhere. Free forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Create WordPress Form <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6"><h2 className="text-xl font-semibold text-white mb-2">Simple WordPress embed</h2></div>
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">{embedCode}</pre>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8"><h2 className="text-xl font-semibold text-gray-900 mb-4">vs WordPress plugins</h2></div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead><tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-600">FastSubmit</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-500">Contact Form 7</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-500">WPForms</th>
                </tr></thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-700">{row.feature}</td>
                      <td className="py-3 px-4 text-center font-medium text-blue-600">{row.fastsubmit}</td>
                      <td className="py-3 px-4 text-center text-gray-500">{row.cf7}</td>
                      <td className="py-3 px-4 text-center text-gray-500">{row.wpforms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Why skip WordPress plugins?</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((f, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4 text-blue-600">{f.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready for plugin-free forms?</h2>
            <p className="text-gray-300 mb-8">Create forms for WordPress without the bloat. Free forever.</p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Create WordPress Form <ArrowRight size={16} />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
