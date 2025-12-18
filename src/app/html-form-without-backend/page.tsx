import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code, Server, Zap, Shield, Database, Globe } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'HTML Form Without Backend - No Server Required | FastSubmit',
  description: 'Create HTML forms without backend code. No server setup, no database configuration. Just HTML + FastSubmit API. Perfect for static sites, JAMstack, and frontend developers.',
  keywords: [
    'html form without backend',
    'form without server',
    'static site form',
    'jamstack form',
    'serverless form',
    'html form api',
    'form backend service',
    'no backend form',
    'frontend form solution',
    'static form handler',
    'html form submission',
    'form endpoint api',
    'netlify form alternative',
    'formspree alternative',
    'static site contact form'
  ],
  alternates: { canonical: 'https://fastsubmit.cloud/html-form-without-backend' }
}

export default function HtmlFormWithoutBackendPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "HTML Form Without Backend - FastSubmit",
    "description": "Create HTML forms without writing backend code. Perfect for static sites.",
    "url": "https://fastsubmit.cloud/html-form-without-backend"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How does it work without a backend?", "acceptedAnswer": { "@type": "Answer", "text": "FastSubmit provides a form endpoint API. Your HTML form submits directly to our servers, which handle storage, notifications, and spam protection." } },
      { "@type": "Question", "name": "Is it secure without my own backend?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We use HTTPS encryption, spam protection, and secure data storage. Your form data is protected just like with a custom backend." } }
    ]
  }

  const features = [
    { icon: <Server className="w-5 h-5" />, title: 'No Server Setup', desc: 'Skip the backend entirely. No Node.js, PHP, or Python required.' },
    { icon: <Database className="w-5 h-5" />, title: 'No Database', desc: 'We handle data storage. No MongoDB, MySQL, or PostgreSQL setup.' },
    { icon: <Code className="w-5 h-5" />, title: 'Just HTML', desc: 'Write standard HTML forms. We handle the rest.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Instant Setup', desc: 'Get your form endpoint in seconds. Start collecting data immediately.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Built-in Security', desc: 'Spam protection, HTTPS, and data encryption included.' },
    { icon: <Globe className="w-5 h-5" />, title: 'Works Everywhere', desc: 'GitHub Pages, Netlify, Vercel, or any static host.' },
  ]

  const codeExample = `<!-- Your HTML Form -->
<form action="https://fastsubmit.cloud/api/submit/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="Your Message"></textarea>
  <button type="submit">Send Message</button>
</form>

<!-- That's it! No backend code needed. -->`

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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-orange-600 mb-4 sm:mb-6 bg-orange-50 px-3 sm:px-4 py-2 rounded-full border border-orange-200">
                <Code size={14} />
                <span>For Developers</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                HTML forms
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">without backend</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Building a static site? Don't want to set up a server just for forms? 
                FastSubmit handles form submissions so you can focus on frontend.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Get Your Form Endpoint <ArrowRight size={16} />
                </Link>
                <Link href="/docs" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all">
                  View API Docs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">It's this simple</h2>
              <p className="text-gray-400">Copy, paste, done.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">{codeExample}</pre>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                What you skip with FastSubmit
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mb-4 text-orange-600">
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Perfect for static site generators
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Next.js', icon: '▲' },
                { name: 'Gatsby', icon: '💜' },
                { name: 'Hugo', icon: '🔷' },
                { name: 'Jekyll', icon: '💎' },
                { name: 'Astro', icon: '🚀' },
                { name: '11ty', icon: '🎈' },
                { name: 'Nuxt', icon: '💚' },
                { name: 'SvelteKit', icon: '🔥' },
              ].map((ssg, i) => (
                <div key={i} className="p-4 rounded-xl bg-gray-50 text-center hover:bg-gray-100 transition-colors">
                  <div className="text-2xl mb-2">{ssg.icon}</div>
                  <div className="font-medium text-gray-900">{ssg.name}</div>
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
                { q: 'How does it work without a backend?', a: 'FastSubmit provides a form endpoint API. Your HTML form submits directly to our servers, which handle storage, notifications, and spam protection.' },
                { q: 'Is it secure without my own backend?', a: 'Yes! We use HTTPS encryption, spam protection, and secure data storage. Your form data is protected just like with a custom backend.' },
                { q: 'Can I use it with React/Vue/Angular?', a: 'Absolutely! Use our REST API or submit forms directly. Works with any frontend framework.' },
                { q: 'What about CORS?', a: 'We handle CORS automatically. Submit from any domain without configuration.' },
                { q: 'Is there a free tier?', a: 'Yes! FastSubmit is free forever with unlimited forms and submissions.' },
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
              Skip the backend. Ship faster.
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-8">
              Get your form endpoint in 30 seconds. Free forever.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Get Started Free <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
