import Link from 'next/link'
import { Zap, Users, Globe, Heart } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar variant="simple" />

      <main className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">About FastSubmit</h1>
        <p className="text-sm text-gray-500 mb-8">Built by developers, for developers</p>

        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h2>
            <p className="leading-relaxed">
              FastSubmit by Hostspica was created to solve a simple problem: collecting form submissions shouldn&apos;t 
              require building and maintaining backend infrastructure. We believe developers should focus on building 
              great products, not wrestling with form backends.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Simple & Fast</h3>
                  <p className="text-xs text-gray-500">Get your form endpoint in seconds. No complex setup required.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Developer First</h3>
                  <p className="text-xs text-gray-500">Built with developers in mind. Clean API, great docs.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Always Available</h3>
                  <p className="text-xs text-gray-500">Reliable infrastructure powered by Firebase/Google Cloud.</p>
                </div>
              </div>
              <div className="flex gap-3 p-4 bg-white border border-gray-100 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-1">Free to Start</h3>
                  <p className="text-xs text-gray-500">Generous free tier. No credit card required to get started.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">About Hostspica</h2>
            <p className="leading-relaxed mb-3">
              Hostspica is a technology company focused on building tools that make developers&apos; lives easier. 
              We create simple, reliable services that solve real problems without unnecessary complexity.
            </p>
            <p className="leading-relaxed">
              FastSubmit is one of our products designed to eliminate the friction in web development. 
              We&apos;re committed to providing high-quality, affordable tools that help you ship faster.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Our Values</h2>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <span className="text-indigo-600 font-medium">•</span>
                <div>
                  <strong className="text-gray-900">Simplicity:</strong> We believe the best tools are the simplest ones.
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
              <li className="flex gap-3">
                <span className="text-indigo-600 font-medium">•</span>
                <div>
                  <strong className="text-gray-900">Transparency:</strong> Clear pricing, clear terms, no hidden surprises.
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
