import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Palette, Image, Type, Brush, Eye, Sparkles } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Google Forms Alternative with Custom Branding - Free | FastSubmit',
  description: 'Google Forms alternative with custom branding. Add your logo, colors, fonts. Remove "Powered by" branding. White-label forms free. Professional branded forms without Google.',
  keywords: [
    'google forms alternative with custom branding',
    'custom branded forms',
    'white label form builder',
    'form builder custom logo',
    'branded form builder',
    'remove powered by google forms',
    'custom form design',
    'form builder own branding',
    'professional branded forms',
    'form builder custom colors',
    'white label survey',
    'branded survey tool',
    'custom form styling',
    'form builder brand identity',
    'no branding form builder'
  ],
  alternates: { canonical: 'https://fastsubmit.cloud/google-forms-custom-branding' }
}

export default function GoogleFormsCustomBrandingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Google Forms Alternative with Custom Branding - FastSubmit",
    "description": "Create branded forms without Google Forms limitations.",
    "url": "https://fastsubmit.cloud/google-forms-custom-branding"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Can I remove the FastSubmit branding?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Unlike Google Forms, you can remove all FastSubmit branding and use your own logo, colors, and domain." } },
      { "@type": "Question", "name": "Is custom branding free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Custom branding is included free with all FastSubmit forms. No premium plan required." } }
    ]
  }

  const features = [
    { icon: <Image className="w-5 h-5" />, title: 'Your Logo', desc: 'Add your company logo to every form. Build brand recognition.' },
    { icon: <Palette className="w-5 h-5" />, title: 'Custom Colors', desc: 'Match your brand colors exactly. Hex codes supported.' },
    { icon: <Type className="w-5 h-5" />, title: 'Custom Fonts', desc: 'Use your brand fonts for a consistent look.' },
    { icon: <Brush className="w-5 h-5" />, title: 'Custom Styling', desc: 'Control every visual aspect of your forms.' },
    { icon: <Eye className="w-5 h-5" />, title: 'No "Powered By"', desc: 'Remove all FastSubmit branding. 100% white-label.' },
    { icon: <Sparkles className="w-5 h-5" />, title: 'Professional Look', desc: 'Forms that look like they were custom-built for you.' },
  ]

  const comparison = [
    { feature: 'Custom Logo', fastsubmit: '✓ Free', google: '✗ Not available' },
    { feature: 'Custom Colors', fastsubmit: '✓ Full control', google: '✗ Limited themes' },
    { feature: 'Remove Branding', fastsubmit: '✓ Free', google: '✗ Not possible' },
    { feature: 'Custom Domain', fastsubmit: '✓ Coming soon', google: '✗ Not available' },
    { feature: 'Custom Fonts', fastsubmit: '✓ Free', google: '✗ Not available' },
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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-pink-600 mb-4 sm:mb-6 bg-pink-50 px-3 sm:px-4 py-2 rounded-full border border-pink-200">
                <Palette size={14} />
                <span>Custom Branding</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Google Forms alternative
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">with custom branding</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Tired of Google's branding on your forms? FastSubmit lets you add your logo, 
                colors, and remove all "Powered by" text. Free.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Create Branded Form <ArrowRight size={16} />
                </Link>
                <Link href="/google-forms-alternative" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all">
                  Full Comparison
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Branding comparison</h2>
            </div>
            <div className="space-y-3">
              {comparison.map((row, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gray-50">
                  <span className="font-medium text-gray-700">{row.feature}</span>
                  <div className="flex gap-8">
                    <span className="text-green-600 font-medium">{row.fastsubmit}</span>
                    <span className="text-gray-400">{row.google}</span>
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
                Full branding control
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-pink-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center mb-4 text-pink-600">
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
                { q: 'Can I remove the FastSubmit branding?', a: 'Yes! Unlike Google Forms, you can remove all FastSubmit branding and use your own logo, colors, and domain.' },
                { q: 'Is custom branding free?', a: 'Yes! Custom branding is included free with all FastSubmit forms. No premium plan required.' },
                { q: 'Can I use my company logo?', a: 'Absolutely! Upload your logo and it will appear on all your forms.' },
                { q: 'Can I match my brand colors exactly?', a: 'Yes! Use hex codes to match your exact brand colors. Full color customization is free.' },
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
              Ready for branded forms?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-8">
              Create professional, branded forms without Google's limitations. Free forever.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Create Branded Form <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
