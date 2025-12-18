import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code, Layout, Smartphone, Palette, Zap, Globe } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Embed Contact Form Without Coding - Easy Website Forms | FastSubmit',
  description: 'Embed contact forms on your website without coding. Copy-paste embed code for WordPress, Wix, Squarespace, Shopify. No technical skills needed. Free responsive forms.',
  keywords: [
    'embed contact form without coding',
    'embed form on website',
    'website contact form embed',
    'wordpress contact form embed',
    'wix form embed',
    'squarespace form embed',
    'shopify contact form',
    'embed form no code',
    'copy paste contact form',
    'website form widget',
    'embeddable contact form',
    'html embed form',
    'iframe contact form',
    'responsive embed form',
    'free embed form'
  ],
  alternates: { canonical: 'https://fastsubmit.cloud/embed-contact-form' }
}

export default function EmbedContactFormPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Embed Contact Form Without Coding - FastSubmit",
    "description": "Embed contact forms on any website without coding knowledge.",
    "url": "https://fastsubmit.cloud/embed-contact-form"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I embed a form on my website?", "acceptedAnswer": { "@type": "Answer", "text": "Simply copy the embed code we provide and paste it into your website's HTML. Works with any website builder or CMS." } },
      { "@type": "Question", "name": "Will the form match my website design?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Our forms are fully customizable. Change colors, fonts, and styling to match your brand perfectly." } }
    ]
  }

  const features = [
    { icon: <Code className="w-5 h-5" />, title: 'Copy-Paste Code', desc: 'Simple embed code. Just copy and paste into your website.' },
    { icon: <Layout className="w-5 h-5" />, title: 'Any Platform', desc: 'Works with WordPress, Wix, Squarespace, Shopify, and more.' },
    { icon: <Smartphone className="w-5 h-5" />, title: 'Responsive', desc: 'Forms look perfect on desktop, tablet, and mobile.' },
    { icon: <Palette className="w-5 h-5" />, title: 'Customizable', desc: 'Match your website colors, fonts, and branding.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Fast Loading', desc: 'Lightweight embed that won\'t slow down your site.' },
    { icon: <Globe className="w-5 h-5" />, title: 'SEO Friendly', desc: 'Clean code that search engines love.' },
  ]

  const platforms = [
    { name: 'WordPress', icon: '📝' },
    { name: 'Wix', icon: '🎨' },
    { name: 'Squarespace', icon: '⬛' },
    { name: 'Shopify', icon: '🛍️' },
    { name: 'Webflow', icon: '🌊' },
    { name: 'Ghost', icon: '👻' },
    { name: 'Blogger', icon: '📰' },
    { name: 'Any HTML', icon: '🌐' },
  ]

  const embedCode = `<!-- FastSubmit Contact Form -->
<div id="fastsubmit-form" data-form-id="YOUR_FORM_ID"></div>
<script src="https://fastsubmit.cloud/embed.js"></script>

<!-- Or use iframe -->
<iframe src="https://fastsubmit.cloud/f/YOUR_FORM_ID" 
  width="100%" height="500" frameborder="0"></iframe>`

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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-indigo-600 mb-4 sm:mb-6 bg-indigo-50 px-3 sm:px-4 py-2 rounded-full border border-indigo-200">
                <Layout size={14} />
                <span>Easy Embed</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Embed contact forms
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">without coding</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Add beautiful contact forms to any website in seconds. 
                No coding required. Just copy, paste, and you're done.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Create Embeddable Form <ArrowRight size={16} />
                </Link>
                <Link href="/templates" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all">
                  View Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">Simple embed code</h2>
              <p className="text-gray-400">Copy this code to your website</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">{embedCode}</pre>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Works with every platform
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {platforms.map((platform, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-gray-200 text-center hover:border-indigo-300 hover:shadow-lg transition-all">
                  <div className="text-3xl mb-2">{platform.icon}</div>
                  <div className="font-medium text-gray-900">{platform.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Embed features
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center mb-4 text-indigo-600">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">FAQ</h2>
            </div>
            <div className="space-y-6">
              {[
                { q: 'How do I embed a form on my website?', a: 'Simply copy the embed code we provide and paste it into your website\'s HTML. Works with any website builder or CMS.' },
                { q: 'Will the form match my website design?', a: 'Yes! Our forms are fully customizable. Change colors, fonts, and styling to match your brand perfectly.' },
                { q: 'Does it work on mobile?', a: 'Absolutely! All embedded forms are fully responsive and look great on any device.' },
                { q: 'Will it slow down my website?', a: 'No! Our embed script is lightweight and optimized for performance.' },
                { q: 'Can I embed multiple forms?', a: 'Yes! Embed as many forms as you need on different pages of your website.' },
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
              Ready to embed your form?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-8">
              Create your form and get embed code in minutes. Free forever.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Create Embeddable Form <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
