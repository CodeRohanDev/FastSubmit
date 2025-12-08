'use client'
import Link from 'next/link'
import { ArrowRight, Check, ChevronRight, Globe, Share2, Code, Smartphone, BarChart3, Zap, Shield, Palette } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FastSubmit",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1247"
    },
    "description": "Create forms for websites, social media, and online sharing. Embed anywhere, share everywhere. Free forever.",
    "url": "https://fastsubmit.hostspica.com",
    "featureList": [
      "Website embed forms",
      "Social media forms",
      "Online shareable forms",
      "Drag & drop builder",
      "100+ templates",
      "Unlimited submissions",
      "Analytics dashboard",
      "Custom branding",
      "Mobile responsive"
    ]
  }

  const useCases = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Website Embeds',
      desc: 'Embed beautiful forms directly into your website with a simple code snippet. Works with any platform.',
      link: '/use-cases/website-embed',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: 'Social Media',
      desc: 'Share forms on Instagram, Facebook, Twitter, LinkedIn, and more. Perfect for lead generation.',
      link: '/use-cases/social-media',
      color: 'bg-pink-50 text-pink-600'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Developer API',
      desc: 'Integrate forms into your apps with our REST API. Full control over submissions and data.',
      link: '/use-cases/developer-api',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Online Forms',
      desc: 'Create standalone forms like Google Forms. Share via link, QR code, or email.',
      link: '/use-cases/online-forms',
      color: 'bg-green-50 text-green-600'
    }
  ]

  const features = [
    { icon: <Zap className="w-5 h-5" />, title: 'Lightning Fast', desc: 'Forms load instantly. No lag, no waiting.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Spam Protection', desc: 'Built-in honeypot and reCAPTCHA support.' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics', desc: 'Track views, submissions, and conversions.' },
    { icon: <Palette className="w-5 h-5" />, title: 'Custom Branding', desc: 'Match your brand colors and style.' },
    { icon: <Globe className="w-5 h-5" />, title: 'Embed Anywhere', desc: 'Works on any website or platform.' },
    { icon: <Code className="w-5 h-5" />, title: 'REST API', desc: 'Full API access for developers.' },
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
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-8 bg-white px-4 py-2 rounded-full border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Free forever • Unlimited forms
            </div>
            
            <h1 className="text-[3.5rem] md:text-[4.5rem] leading-[1.05] font-semibold tracking-tight text-gray-900 mb-6">
              Forms for every
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">platform</span>
            </h1>
            
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
              Create beautiful forms for your website, social media, or share online. 
              Embed anywhere, collect submissions everywhere. No coding required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/signup" 
                className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:gap-3"
              >
                Start creating free <ArrowRight size={18} />
              </Link>
              <Link 
                href="/templates" 
                className="inline-flex items-center justify-center gap-2 text-gray-600 px-8 py-4 rounded-full font-medium hover:text-gray-900 transition-colors border border-gray-200 bg-white"
              >
                Browse templates <ChevronRight size={18} />
              </Link>
            </div>

            {/* Platform badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {['Websites', 'Instagram', 'Facebook', 'Twitter', 'LinkedIn', 'Email'].map((platform) => (
                <span key={platform} className="text-xs text-gray-400 bg-white px-3 py-1.5 rounded-full border border-gray-100">
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                One form builder, endless possibilities
              </h2>
              <p className="text-gray-500 text-lg">Create forms for any platform or use case</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, i) => (
                <Link
                  key={i}
                  href={useCase.link}
                  className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${useCase.color} flex items-center justify-center mb-4`}>
                    {useCase.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{useCase.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Preview */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                  Embed with one line of code
                </h2>
                <p className="text-gray-500 mb-6">
                  Add forms to your website in seconds. Just copy the embed code and paste it anywhere. 
                  Works with HTML, WordPress, Shopify, Webflow, and more.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Responsive on all devices', 'Customizable styling', 'No iframe needed', 'SEO friendly'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <Check size={16} className="text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/docs" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-2">
                  View documentation <ArrowRight size={16} />
                </Link>
              </div>
              
              <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                    <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  </div>
                  <span className="text-xs text-white/30 ml-2">embed.html</span>
                </div>
                <pre className="p-6 text-sm overflow-x-auto">
                  <code className="text-white/70 leading-relaxed">
{`<!-- Embed your form -->
<div id="fastsubmit-form"></div>
<script src="`}<span className="text-indigo-400">https://fastsubmit.hostspica.com/embed.js</span>{`"
  data-form-id="`}<span className="text-green-400">your-form-id</span>{`">
</script>`}
                  </code>
                </pre>
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
              <p className="text-gray-500">Powerful features, simple interface</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4 text-gray-600">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500"></div>
                    <div>
                      <div className="font-medium text-gray-900">Your Brand</div>
                      <div className="text-xs text-gray-500">Sponsored</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">📣 We&apos;re giving away a free consultation! Click the link to enter 👇</p>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">fastsubmit.hostspica.com</div>
                    <div className="font-medium text-gray-900">Enter to Win - Free Consultation</div>
                    <div className="text-sm text-gray-500">Fill out this quick form to enter</div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 text-sm text-pink-600 mb-4 bg-pink-100 px-3 py-1 rounded-full">
                  <Share2 size={14} />
                  Social Media Forms
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                  Perfect for social media
                </h2>
                <p className="text-gray-500 mb-6">
                  Share your forms on Instagram, Facebook, Twitter, LinkedIn, and TikTok. 
                  Generate leads, run contests, collect feedback, and grow your audience.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Shareable links', 'QR codes', 'Mobile optimized', 'Instant notifications'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <Check size={16} className="text-pink-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/use-cases/social-media" className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center gap-2">
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-6 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Three simple steps
              </h2>
            </div>

            <div className="space-y-8">
              {[
                { num: '01', title: 'Create your form', desc: 'Use our drag & drop builder or start from a template. Add your fields and customize the design.' },
                { num: '02', title: 'Share or embed', desc: 'Get a shareable link, embed code, or QR code. Use it on your website, social media, or anywhere.' },
                { num: '03', title: 'Collect responses', desc: 'Submissions appear in your dashboard instantly. Export to CSV, integrate with your tools.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-4xl font-light text-gray-200">{step.num}</span>
                  <div className="pt-2">
                    <h3 className="font-medium text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Free forever
            </h2>
            <p className="text-gray-500 mb-12">
              No hidden fees, no credit card required
            </p>

            <div className="p-8 rounded-2xl bg-white border border-gray-200">
              <div className="mb-6">
                <span className="text-5xl font-semibold">$0</span>
              </div>
              <ul className="space-y-3 mb-8 max-w-md mx-auto">
                {[
                  'Unlimited forms',
                  'Unlimited submissions',
                  'Website embeds',
                  'Social media sharing',
                  'QR codes',
                  'Analytics dashboard',
                  'REST API access',
                  'CSV export',
                  'Spam protection'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/signup" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Get started free <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
              Ready to create your first form?
            </h2>
            <p className="text-white/60 mb-8">
              Join thousands of users collecting submissions with FastSubmit
            </p>
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Start creating free <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <Footer variant="extended" />
      </div>
    </>
  )
}
