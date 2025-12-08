import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Zap, Globe, Share2, Code, Smartphone, Palette, BarChart3, Shield, Mail } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Free Online Form Builder - Create Forms for Any Platform | FastSubmit',
  description: 'Create beautiful forms for websites, social media, and online sharing. Drag & drop builder, 100+ templates, unlimited forms. No coding required.',
  keywords: ['online form builder', 'free form builder', 'form creator', 'website form', 'social media form', 'embed form'],
}

export default function FormBuilderPage() {
  const platforms = [
    { icon: <Globe className="w-5 h-5" />, name: 'Website Embeds', desc: 'Add forms to any website', color: 'bg-blue-50 text-blue-600' },
    { icon: <Share2 className="w-5 h-5" />, name: 'Social Media', desc: 'Share on Instagram, Facebook & more', color: 'bg-pink-50 text-pink-600' },
    { icon: <Code className="w-5 h-5" />, name: 'Developer API', desc: 'Integrate with your apps', color: 'bg-purple-50 text-purple-600' },
    { icon: <Smartphone className="w-5 h-5" />, name: 'Online Forms', desc: 'Share via link or QR code', color: 'bg-green-50 text-green-600' },
  ]

  const features = [
    { icon: <Palette className="w-5 h-5" />, title: 'Drag & Drop Builder', desc: 'Intuitive visual builder. No coding required.' },
    { icon: <Globe className="w-5 h-5" />, title: 'Multi-Platform', desc: 'One form, deploy everywhere.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics', desc: 'Track views, submissions, conversions.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Spam Protection', desc: 'Built-in honeypot and reCAPTCHA.' },
    { icon: <Mail className="w-5 h-5" />, title: 'Notifications', desc: 'Instant email alerts on submissions.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Lightning Fast', desc: 'Forms load in milliseconds.' },
  ]

  const formTypes = [
    { name: 'Contact Forms', icon: '📬' },
    { name: 'Surveys & Polls', icon: '📊' },
    { name: 'Registration Forms', icon: '📝' },
    { name: 'Order Forms', icon: '🛒' },
    { name: 'Feedback Forms', icon: '💬' },
    { name: 'Quiz & Tests', icon: '🎯' },
    { name: 'Application Forms', icon: '📄' },
    { name: 'Lead Generation', icon: '🎯' },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-6 bg-white px-4 py-2 rounded-full border border-gray-200">
            <Zap size={16} className="text-indigo-600" />
            Free Forever • No Credit Card Required
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Build forms for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">any platform</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Create beautiful forms and deploy them anywhere — your website, social media, 
            or share online. Drag & drop builder with 100+ templates. Free forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              href="/signup" 
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all"
            >
              Start building free <ArrowRight size={18} />
            </Link>
            <Link 
              href="/templates" 
              className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-gray-300 transition-all"
            >
              Browse templates
            </Link>
          </div>

          <p className="text-sm text-gray-500">
            Join 50,000+ users creating forms with FastSubmit
          </p>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">One builder, every platform</h2>
            <p className="text-gray-500">Create once, deploy anywhere</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {platforms.map((platform, i) => (
              <div key={i} className="p-5 rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-lg ${platform.color} flex items-center justify-center mb-3`}>
                  {platform.icon}
                </div>
                <h3 className="font-medium text-gray-900 mb-1">{platform.name}</h3>
                <p className="text-sm text-gray-500">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Everything you need
            </h2>
            <p className="text-gray-500">Powerful features that make form building easy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 text-gray-600 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Types */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Create any type of form
            </h2>
            <p className="text-gray-500">From simple contact forms to complex surveys</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {formTypes.map((type, i) => (
              <Link
                key={i}
                href="/templates"
                className="p-5 rounded-xl bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all group"
              >
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {type.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              How it works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', title: 'Build your form', desc: 'Use our drag & drop builder or start from a template. Add fields, customize design.' },
              { num: '2', title: 'Choose your platform', desc: 'Get embed code for websites, shareable links for social, or API access for apps.' },
              { num: '3', title: 'Collect responses', desc: 'Submissions appear in your dashboard. Export, analyze, and integrate with your tools.' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-semibold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Why choose FastSubmit?
            </h2>
            <p className="text-gray-500">Compare us with other form builders</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-indigo-600">FastSubmit</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-500">Google Forms</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-500">Typeform</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Price', fastsubmit: 'Free Forever', google: 'Free', typeform: '$25-83/mo' },
                  { feature: 'Website Embeds', fastsubmit: true, google: true, typeform: true },
                  { feature: 'Social Media Sharing', fastsubmit: true, google: true, typeform: true },
                  { feature: 'Custom Branding', fastsubmit: true, google: false, typeform: 'Paid only' },
                  { feature: 'Developer API', fastsubmit: true, google: false, typeform: 'Paid only' },
                  { feature: 'Unlimited Submissions', fastsubmit: true, google: true, typeform: false },
                  { feature: 'QR Codes', fastsubmit: true, google: false, typeform: 'Paid only' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {typeof row.fastsubmit === 'boolean' ? (
                        row.fastsubmit ? <Check className="inline text-green-600" size={20} /> : '—'
                      ) : (
                        <span className="text-indigo-600 font-medium">{row.fastsubmit}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-600">
                      {typeof row.google === 'boolean' ? (
                        row.google ? <Check className="inline text-green-600" size={20} /> : '—'
                      ) : (
                        row.google
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-600">
                      {typeof row.typeform === 'boolean' ? (
                        row.typeform ? <Check className="inline text-green-600" size={20} /> : '—'
                      ) : (
                        row.typeform
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
              className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-2"
            >
              See full comparison <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Ready to build your first form?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 50,000+ users. Free forever. No credit card required.
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
