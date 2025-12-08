import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Share2, Link2, QrCode, Bell, BarChart3, Smartphone } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Social Media Forms - Instagram, Facebook, Twitter & More | FastSubmit',
  description: 'Create shareable forms for social media. Perfect for Instagram bio links, Facebook posts, Twitter, LinkedIn, and TikTok. Generate leads and grow your audience.',
  keywords: ['social media form', 'instagram form', 'facebook form', 'twitter form', 'linkedin form', 'lead generation'],
}

export default function SocialMediaPage() {
  const platforms = [
    { name: 'Instagram', icon: '📸', color: 'from-pink-500 to-purple-500' },
    { name: 'Facebook', icon: '👤', color: 'from-blue-500 to-blue-600' },
    { name: 'Twitter/X', icon: '🐦', color: 'from-gray-700 to-gray-900' },
    { name: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-700' },
    { name: 'TikTok', icon: '🎵', color: 'from-gray-900 to-pink-500' },
    { name: 'YouTube', icon: '▶️', color: 'from-red-500 to-red-600' },
  ]

  const useCases = [
    { title: 'Lead Generation', desc: 'Capture leads from your social media followers', icon: '🎯' },
    { title: 'Contests & Giveaways', desc: 'Run engaging contests with entry forms', icon: '🎁' },
    { title: 'Feedback Collection', desc: 'Get feedback from your audience', icon: '💬' },
    { title: 'Event Registration', desc: 'Sign up attendees for your events', icon: '📅' },
    { title: 'Newsletter Signup', desc: 'Grow your email list from social', icon: '📧' },
    { title: 'Surveys & Polls', desc: 'Understand your audience better', icon: '📊' },
  ]

  const features = [
    { icon: <Link2 className="w-5 h-5" />, title: 'Shareable Links', desc: 'Short, clean URLs perfect for bio links' },
    { icon: <QrCode className="w-5 h-5" />, title: 'QR Codes', desc: 'Auto-generated QR codes for offline sharing' },
    { icon: <Smartphone className="w-5 h-5" />, title: 'Mobile First', desc: 'Optimized for mobile users' },
    { icon: <Bell className="w-5 h-5" />, title: 'Instant Alerts', desc: 'Get notified when someone submits' },
    { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics', desc: 'Track views and conversions' },
    { icon: <Share2 className="w-5 h-5" />, title: 'Easy Sharing', desc: 'One-click share to any platform' },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm text-pink-600 mb-6 bg-pink-50 px-4 py-2 rounded-full">
            <Share2 size={16} />
            Social Media Forms
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Forms that work on
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">social media</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Create beautiful, mobile-optimized forms perfect for Instagram bio links, 
            Facebook posts, Twitter, and more. Generate leads and grow your audience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup" 
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all"
            >
              Create social form <ArrowRight size={18} />
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

      {/* Platforms */}
      <section className="py-16 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-8">Perfect for all social platforms</p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                <span className="text-2xl">{platform.icon}</span>
                <span className="text-sm font-medium text-gray-700">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Preview */}
      <section className="py-20 px-6 bg-gradient-to-br from-pink-50 to-purple-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                Designed for social sharing
              </h2>
              <p className="text-gray-500 mb-6">
                Your forms look amazing when shared on social media. Beautiful link previews, 
                mobile-optimized layouts, and fast loading times keep your audience engaged.
              </p>
              <ul className="space-y-3 mb-8">
                {['Beautiful link previews', 'Mobile-first design', 'Fast loading', 'Custom branding'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check size={16} className="text-pink-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-xl max-w-sm mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500"></div>
                <div>
                  <div className="font-semibold text-gray-900">Your Brand</div>
                  <div className="text-xs text-gray-500">Sponsored · 📍</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                🎉 We&apos;re giving away a FREE consultation to one lucky winner!
                <br /><br />
                Click the link in bio to enter 👆
              </p>
              <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                <div className="h-32 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 mb-1">fastsubmit.hostspica.com</div>
                  <div className="font-semibold text-gray-900">Enter to Win - Free Consultation</div>
                  <div className="text-sm text-gray-500">Fill out this quick form to enter our giveaway</div>
                </div>
              </div>
              <div className="flex items-center gap-6 mt-4 text-gray-400">
                <span>❤️ 1.2K</span>
                <span>💬 89</span>
                <span>↗️ 234</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Popular use cases
            </h2>
            <p className="text-gray-500">How creators and businesses use social media forms</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="text-3xl mb-4">{useCase.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-500">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Built for social
            </h2>
            <p className="text-gray-500">Features that make social sharing easy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center mb-4 text-pink-600">
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
      <section className="py-20 px-6 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Ready to grow your social presence?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Create your first social media form in minutes
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
