'use client'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'

export default function Home() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#fafafa]/80 backdrop-blur-xl z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            fastsubmit<span className="text-indigo-600">.</span>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/docs" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Docs
            </Link>
            {user ? (
              <Link href="/dashboard" className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Dashboard
              </Link>
            ) : (
              <>
                <Link href="/login" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Login
                </Link>
                <Link href="/signup" className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Free • Unlimited usage
          </div>
          
          <h1 className="text-[3.5rem] leading-[1.1] font-semibold tracking-tight text-gray-900 mb-6">
            Form backend for
            <br />
            <span className="text-gray-400">developers</span>
          </h1>
          
          <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            Collect form submissions without writing backend code. 
            Just point your form to our API. Completely free, no limits.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all hover:gap-3"
            >
              Get started <ArrowRight size={18} />
            </Link>
            <Link 
              href="/docs" 
              className="inline-flex items-center gap-2 text-gray-600 px-6 py-3 rounded-full font-medium hover:text-gray-900 transition-colors"
            >
              Read docs <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Code Preview */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
                <div className="w-3 h-3 rounded-full bg-white/10"></div>
              </div>
              <span className="text-xs text-white/30 ml-2">index.html</span>
            </div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`<form action="`}<span className="text-indigo-400">https://fastsubmit.hostspica.com/api/submit/abc123</span>{`" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <textarea name="message"></textarea>
  <button type="submit">Send</button>
</form>`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Simple by design
            </h2>
            <p className="text-gray-500">Everything you need, nothing you don&apos;t.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'No backend needed', desc: 'Point your HTML form to our endpoint. We handle the rest.' },
              { title: 'Spam protection', desc: 'Built-in honeypot fields keep bots away from your forms.' },
              { title: 'REST API', desc: 'Fetch submissions programmatically. Export to CSV anytime.' },
              { title: 'Dashboard', desc: 'View and manage all submissions in a clean interface.' },
              { title: '7 field types', desc: 'Text, email, textarea, number, date, select, checkbox.' },
              { title: 'Unlimited forms', desc: 'Create as many forms as you need. No restrictions.' },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-gray-100">
                <h3 className="font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
              Three steps
            </h2>
          </div>

          <div className="space-y-8">
            {[
              { num: '01', title: 'Create a form', desc: 'Sign up and create a form with your desired fields.' },
              { num: '02', title: 'Add the endpoint', desc: 'Copy the URL and add it to your HTML form action.' },
              { num: '03', title: 'Collect data', desc: 'Submissions appear in your dashboard instantly.' },
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

      {/* Why Free */}
      <section className="py-24 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
            Completely free
          </h2>
          <p className="text-gray-500 mb-12">
            No hidden fees, no credit card required, no limits on usage.
          </p>

          <div className="p-8 rounded-2xl bg-white border border-gray-200">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-5xl font-semibold">$0</span>
                <span className="text-gray-500 text-lg"></span>
              </div>
            </div>
            <ul className="space-y-3 mb-8 max-w-md mx-auto">
              {[
                'Unlimited forms',
                'Unlimited submissions',
                'Unlimited API requests',
                '7 field types',
                'Dashboard access',
                'REST API',
                'CSV export',
                'Domain verification',
                'Spam protection'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <Check size={16} className="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Get started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
            Ready to simplify your forms?
          </h2>
          <p className="text-white/60 mb-8">
            Start collecting submissions in minutes. Free .
          </p>
          <Link 
            href="/signup" 
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Get started <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-100 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <span className="text-sm text-gray-900 font-medium">
              fastsubmit<span className="text-indigo-600">.</span>
            </span>
            <p className="text-xs text-gray-400 mt-0.5">by Hostspica</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/about" className="hover:text-gray-600 transition-colors">About</Link>
            <Link href="/docs" className="hover:text-gray-600 transition-colors">Docs</Link>
            <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
