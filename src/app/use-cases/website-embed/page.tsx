import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Code, Globe, Palette, Smartphone, Zap, Shield } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Website Embed Forms - Add Forms to Any Website | FastSubmit',
  description: 'Embed beautiful forms on your website with a simple code snippet. Works with HTML, WordPress, Shopify, Webflow, Wix, and any platform.',
  keywords: ['embed form', 'website form', 'html form', 'wordpress form', 'shopify form', 'webflow form'],
}

export default function WebsiteEmbedPage() {
  const platforms = [
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'WordPress', icon: '📝' },
    { name: 'Shopify', icon: '🛒' },
    { name: 'Webflow', icon: '🎨' },
    { name: 'Wix', icon: '✨' },
    { name: 'Squarespace', icon: '⬛' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
  ]

  const features = [
    { icon: <Code className="w-5 h-5" />, title: 'Simple Embed Code', desc: 'Just copy and paste one line of code' },
    { icon: <Palette className="w-5 h-5" />, title: 'Custom Styling', desc: 'Match your website design perfectly' },
    { icon: <Smartphone className="w-5 h-5" />, title: 'Responsive', desc: 'Looks great on all screen sizes' },
    { icon: <Zap className="w-5 h-5" />, title: 'Fast Loading', desc: 'Lightweight script, no performance impact' },
    { icon: <Shield className="w-5 h-5" />, title: 'Secure', desc: 'SSL encrypted, spam protected' },
    { icon: <Globe className="w-5 h-5" />, title: 'SEO Friendly', desc: 'No iframe, search engine friendly' },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm text-blue-600 mb-6 bg-blue-50 px-4 py-2 rounded-full">
            <Globe size={16} />
            Website Embeds
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Add forms to any website
            <br />
            <span className="text-gray-400">in seconds</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Embed beautiful, responsive forms on your website with a simple code snippet. 
            Works with any platform. No coding skills required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all"
            >
              Create embed form <ArrowRight size={18} />
            </Link>
            <Link 
              href="/docs" 
              className="inline-flex items-center justify-center gap-2 text-gray-600 px-8 py-4 rounded-full font-medium hover:text-gray-900 transition-colors border border-gray-200 bg-white"
            >
              View documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-8">Works with all popular platforms</p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100">
                <span className="text-xl">{platform.icon}</span>
                <span className="text-sm text-gray-700">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                One line of code
              </h2>
              <p className="text-gray-500 mb-6">
                Embedding a form is as simple as copying and pasting a code snippet. 
                Our lightweight script loads asynchronously and won&apos;t slow down your site.
              </p>
              <ul className="space-y-3 mb-8">
                {['No iframe needed', 'Async loading', 'Custom CSS support', 'Event callbacks'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                </div>
                <span className="text-xs text-white/30 ml-2">your-website.html</span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto">
                <code className="text-white/70 leading-relaxed">
{`<!-- Add this where you want the form -->
<div id="fastsubmit-form"></div>

<!-- Add this before </body> -->
<script 
  src="`}<span className="text-blue-400">https://fastsubmit.hostspica.com/embed.js</span>{`"
  data-form-id="`}<span className="text-green-400">your-form-id</span>{`"
  data-theme="`}<span className="text-purple-400">light</span>{`">
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
              Built for websites
            </h2>
            <p className="text-gray-500">Everything you need for perfect website integration</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Ready to add forms to your website?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Create your first embed form in minutes
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
