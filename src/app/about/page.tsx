import Link from 'next/link'
import { Zap, Users, Globe, Heart, Share2, Code, Smartphone } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar variant="simple" />

      <main className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">About FastSubmit</h1>
        <p className="text-sm text-gray-500 mb-8">Forms for every platform, built for everyone</p>

        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h2>
            <p className="leading-relaxed">
              FastSubmit by Hostspica was created to make form building simple and accessible for everyone. 
              Whether you need forms for your website, social media, or to share online — we&apos;ve got you covered. 
              One platform, endless possibilities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Website Embeds</h3>
                  <p className="text-xs text-gray-500">Add beautiful forms to any website with simple embed code.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center shrink-0">
                  <Share2 className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Social Media</h3>
                  <p className="text-xs text-gray-500">Share forms on Instagram, Facebook, Twitter, and more.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                  <Code className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Developer API</h3>
                  <p className="text-xs text-gray-500">Full REST API for custom integrations and apps.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Online Forms</h3>
                  <p className="text-xs text-gray-500">Shareable forms via link, QR code, or email.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Why FastSubmit?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Simple & Fast</h3>
                  <p className="text-xs text-gray-500">Create and deploy forms in minutes. No complex setup.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">For Everyone</h3>
                  <p className="text-xs text-gray-500">No coding required. Perfect for creators and businesses.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Multi-Platform</h3>
                  <p className="text-xs text-gray-500">One form works everywhere — websites, social, online.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Free Forever</h3>
                  <p className="text-xs text-gray-500">Unlimited forms and submissions. No credit card needed.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">About Hostspica</h2>
            <p className="leading-relaxed mb-3">
              Hostspica is a technology company focused on building tools that make everyone&apos;s digital life easier. 
              We create simple, reliable services that solve real problems without unnecessary complexity.
            </p>
            <p className="leading-relaxed">
              FastSubmit is one of our flagship products, designed to eliminate the friction in collecting 
              information online. Whether you&apos;re a small business, content creator, or developer — 
              we&apos;re here to help you succeed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Our Values</h2>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <span className="text-indigo-600 font-medium">•</span>
                <div>
                  <strong className="text-gray-900">Simplicity:</strong> The best tools are the simplest ones.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-medium">•</span>
                <div>
                  <strong className="text-gray-900">Accessibility:</strong> Great tools should be available to everyone.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-medium">•</span>
                <div>
                  <strong className="text-gray-900">Reliability:</strong> Your forms should work every time, without fail.
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-indigo-600 font-medium">•</span>
                <div>
                  <strong className="text-gray-900">Privacy:</strong> Your data is yours. We don&apos;t sell or misuse it.
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Technology Stack</h2>
            <p className="leading-relaxed mb-3">
              FastSubmit is built with modern, battle-tested technologies:
            </p>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-2"><span className="text-gray-400">•</span> Next.js for the frontend and API</li>
              <li className="flex gap-2"><span className="text-gray-400">•</span> Firebase/Firestore for data storage</li>
              <li className="flex gap-2"><span className="text-gray-400">•</span> Google Cloud infrastructure for reliability</li>
              <li className="flex gap-2"><span className="text-gray-400">•</span> TypeScript for type safety</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Get in Touch</h2>
            <p className="leading-relaxed mb-3">
              We&apos;d love to hear from you! Whether you have questions, feedback, or just want to say hi:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-sm">
              <p><strong className="text-gray-900">Email:</strong> <a href="mailto:hello@hostspica.com" className="text-indigo-600 hover:underline">hello@hostspica.com</a></p>
              <p className="mt-2"><strong className="text-gray-900">Website:</strong> <a href="https://hostspica.com" className="text-indigo-600 hover:underline">hostspica.com</a></p>
              <p className="mt-2"><strong className="text-gray-900">Support:</strong> <a href="mailto:support@hostspica.com" className="text-indigo-600 hover:underline">support@hostspica.com</a></p>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <div className="flex gap-4">
              <Link href="/signup" className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                Get Started Free
              </Link>
              <Link href="/docs" className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                Read Documentation
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
