import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Zap, Mail, Globe, Smartphone, Palette, Shield } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Free Contact Form Builder - Best Contact Form Maker | Create Forms Free',
  description: 'Best free contact form builder. Create contact forms for websites easily. Better than Google Forms, Zoho Forms, Microsoft Forms. Email notifications, spam protection. Export to Excel, Word, PDF. Free forever with unlimited forms. Hostspica Forms.',
  keywords: [
    'contact form builder',
    'free contact form',
    'contact form maker',
    'website contact form',
    'contact form free',
    'create contact form',
    'best contact form',
    'contact form creator',
    'free contact form builder',
    'html contact form',
    'embed contact form',
    'form builder',
    'free form builder',
    'google forms',
    'forms',
    'quiz maker',
    'online form builder',
    'google form alternative',
    'free online form',
    'ai form builder',
    'form builder free',
    'form builder online',
    'free form',
    'online forms',
    'free online forms',
    'form maker',
    'online form maker',
    'best form maker',
    'best form builder',
    'hostspica forms',
    'forms hostspica',
    'form to excel',
    'form to word',
    'form to pdf',
    'best form website',
    'free form website',
    'zoho forms',
    'microsoft forms',
    'create free forms',
    'easy forms'
  ],
}

export default function ContactFormBuilderPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Contact Form Builder - FastSubmit",
    "description": "Create beautiful contact forms for your website. Email notifications, spam protection. Free forever.",
    "url": "https://fastsubmit.hostspica.com/contact-form-builder",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "FastSubmit Contact Form Builder",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Email notifications",
        "Spam protection",
        "Easy embed",
        "Custom branding",
        "Mobile responsive",
        "No coding required"
      ]
    }
  }

  const features = [
    { icon: <Zap className="w-5 h-5" />, title: 'Easy to Create', desc: 'Drag & drop builder. No coding required.' },
    { icon: <Mail className="w-5 h-5" />, title: 'Email Alerts', desc: 'Instant email notifications on submissions.' },
    { icon: <Globe className="w-5 h-5" />, title: 'Easy Embed', desc: 'One line of code to add to any website.' },
    { icon: <Smartphone className="w-5 h-5" />, title: 'Mobile Friendly', desc: 'Works perfectly on all devices.' },
    { icon: <Palette className="w-5 h-5" />, title: 'Custom Branding', desc: 'Match your website design.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Spam Protection', desc: 'Built-in honeypot and reCAPTCHA.' },
  ]

  const platforms = [
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'WordPress', icon: '📝' },
    { name: 'Shopify', icon: '🛒' },
    { name: 'Webflow', icon: '🎨' },
    { name: 'Wix', icon: '✨' },
    { name: 'Squarespace', icon: '⬛' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />

        {/* Hero */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-600 mb-4 sm:mb-6 bg-green-50 px-3 sm:px-4 py-2 rounded-full border border-green-200">
                <span>📬</span>
                <span>Free Forever • Unlimited Forms</span>
              </div>
              
              <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Contact forms
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">made simple</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                Build professional contact forms with email notifications and spam protection. 
                Embed on any website in seconds. Free forever.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <Link 
                  href="/signup" 
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-sm sm:text-base"
                >
                  Create contact form <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                </Link>
                <Link 
                  href="/templates" 
                  className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all text-sm sm:text-base"
                >
                  Browse templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-200">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-500 mb-6 sm:mb-8">Works with all popular platforms</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {platforms.map((platform) => (
                <div key={platform.name} className="flex items-center gap-2 bg-white px-3 sm:px-4 py-2 rounded-lg border border-gray-100">
                  <span className="text-lg sm:text-xl">{platform.icon}</span>
                  <span className="text-xs sm:text-sm text-gray-700">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                  Embed with one line of code
                </h2>
                <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
                  Add contact forms to your website in seconds. Just copy the embed code and paste it anywhere.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {['No iframe needed', 'Responsive on all devices', 'Customizable styling', 'SEO friendly'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-gray-600">
                      <Check size={14} className="text-green-500 sm:w-4 sm:h-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-white/10"></div>
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-white/10"></div>
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-white/10"></div>
                  </div>
                  <span className="text-xs text-white/30 ml-2">contact.html</span>
                </div>
                <pre className="p-3 sm:p-6 text-xs sm:text-sm overflow-x-auto">
                  <code className="text-white/70 leading-relaxed">
{`<!-- Add your contact form -->
<div id="fastsubmit-form"></div>
<script src="`}<span className="text-green-400">https://fastsubmit.hostspica.com/embed.js</span>{`"
  data-form-id="`}<span className="text-blue-400">your-form-id</span>{`">
</script>`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Everything you need
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">Powerful features for professional contact forms</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-100">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-green-50 flex items-center justify-center mb-3 sm:mb-4 text-green-600">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Better than Google Forms
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">All the features you need, free forever</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 sm:py-4 px-2 sm:px-4 font-semibold text-gray-900 text-sm sm:text-base">Feature</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-semibold text-green-600 text-sm sm:text-base">FastSubmit</th>
                    <th className="text-center py-3 sm:py-4 px-2 sm:px-4 font-semibold text-gray-500 text-sm sm:text-base">Google Forms</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Price', fastsubmit: 'Free Forever', google: 'Free' },
                    { feature: 'Unlimited Forms', fastsubmit: true, google: true },
                    { feature: 'Email Notifications', fastsubmit: true, google: 'Via Add-ons' },
                    { feature: 'Custom Branding', fastsubmit: true, google: false },
                    { feature: 'Website Embed', fastsubmit: true, google: true },
                    { feature: 'Spam Protection', fastsubmit: true, google: 'reCAPTCHA' },
                    { feature: 'API Access', fastsubmit: true, google: false },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-gray-100">
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-gray-700 text-xs sm:text-sm">{row.feature}</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center">
                        {typeof row.fastsubmit === 'boolean' ? (
                          row.fastsubmit ? <Check className="inline text-green-600" size={16} /> : '—'
                        ) : (
                          <span className="text-green-600 font-medium text-xs sm:text-sm">{row.fastsubmit}</span>
                        )}
                      </td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-center text-gray-600 text-xs sm:text-sm">
                        {typeof row.google === 'boolean' ? (
                          row.google ? <Check className="inline text-green-600" size={16} /> : '—'
                        ) : (
                          row.google
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              Ready to add a contact form?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of users. Free forever. No credit card required.
            </p>
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Get Started Free <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
          </div>
        </section>

        <Footer variant="extended" />
      </div>
    </>
  )
}
