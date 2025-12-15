import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Zap, MousePointer, Palette, Code, Shield, Globe } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'No Code Form Builder - Create Forms Without Coding | FastSubmit',
  description: 'Build professional forms without coding. No code form builder with drag & drop interface. Create contact forms, surveys, quizzes without technical skills. Free no-code form creator.',
  keywords: [
    'no code form builder',
    'no coding form builder',
    'form builder no code',
    'create forms without coding',
    'no technical skills form builder',
    'visual form builder',
    'codeless form creator',
    'no programming form builder',
    'simple form builder',
    'easy form creator',
    'non-technical form builder',
    'no code form creator',
    'form builder for beginners',
    'drag drop form builder',
    'wysiwyg form builder',
    'user friendly form builder',
    'no code form design',
    'visual form designer',
    'form builder without coding',
    'no development form builder'
  ],
}

export default function NoCodeFormBuilderPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "No Code Form Builder - FastSubmit",
    "description": "Create professional forms without any coding knowledge. Drag and drop interface for everyone.",
    "url": "https://fastsubmit.cloud/no-code-form-builder",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "FastSubmit No Code Form Builder",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "No coding required",
        "Drag and drop interface",
        "Visual form designer",
        "Real-time preview",
        "Custom styling",
        "One-click publish"
      ]
    }
  }

  const features = [
    { icon: <MousePointer className="w-5 h-5" />, title: 'Drag & Drop', desc: 'Simply drag form elements where you want them. No coding knowledge needed.' },
    { icon: <Palette className="w-5 h-5" />, title: 'Visual Designer', desc: 'Design your forms visually with colors, fonts, and styling options.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Instant Preview', desc: 'See exactly how your form will look as you build it.' },
    { icon: <Code className="w-5 h-5" />, title: 'Zero Code', desc: 'No HTML, CSS, or JavaScript required. Pure visual building.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Professional Results', desc: 'Create forms that look professionally designed.' },
    { icon: <Globe className="w-5 h-5" />, title: 'One-Click Publish', desc: 'Publish your form instantly with a shareable link.' },
  ]

  const whoCanUse = [
    { title: 'Small Business Owners', icon: '🏪', desc: 'Create contact forms, order forms, and customer surveys without hiring developers.' },
    { title: 'Marketers', icon: '📈', desc: 'Build lead generation forms, event registrations, and campaign landing pages.' },
    { title: 'Educators', icon: '🎓', desc: 'Create quizzes, feedback forms, and student registration forms easily.' },
    { title: 'Non-Profits', icon: '❤️', desc: 'Build donation forms, volunteer signups, and event registrations.' },
    { title: 'Freelancers', icon: '💼', desc: 'Create client intake forms, project briefs, and service requests.' },
    { title: 'Anyone', icon: '👥', desc: 'If you can use a computer, you can build professional forms with FastSubmit.' },
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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-600 mb-4 sm:mb-6 bg-blue-50 px-3 sm:px-4 py-2 rounded-full border border-blue-200">
                <span>🚫</span>
                <span>Zero Coding Required</span>
              </div>
              
              <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                No code form builder
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">for everyone</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto px-2">
                Create professional forms without writing a single line of code. 
                Our visual drag & drop builder makes form creation simple for everyone, 
                regardless of technical background.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <Link 
                  href="/signup" 
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-sm sm:text-base"
                >
                  Start building (no code!) <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
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

        {/* No Code Promise */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Our no-code promise</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-red-50 border border-red-100">
                <div className="text-4xl mb-3">🚫</div>
                <div className="font-medium text-gray-900 mb-2">No HTML</div>
                <div className="text-sm text-gray-600">Never write markup code</div>
              </div>
              <div className="p-6 rounded-2xl bg-yellow-50 border border-yellow-100">
                <div className="text-4xl mb-3">🚫</div>
                <div className="font-medium text-gray-900 mb-2">No CSS</div>
                <div className="text-sm text-gray-600">No styling code needed</div>
              </div>
              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <div className="text-4xl mb-3">🚫</div>
                <div className="font-medium text-gray-900 mb-2">No JavaScript</div>
                <div className="text-sm text-gray-600">Zero programming required</div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Use */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Perfect for everyone
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">No technical background required</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {whoCanUse.map((user, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="text-4xl mb-4">{user.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{user.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{user.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Powerful without complexity
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">Professional features, zero technical knowledge required</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-xl bg-white flex items-center justify-center mb-3 sm:mb-4 text-blue-600 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Simple It Is */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                It's really this simple
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">From idea to published form in 3 clicks</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Click & Drag',
                  description: 'Click on a form field and drag it to your form. No code, just point and click.',
                  visual: '🖱️ → 📝'
                },
                {
                  step: '2',
                  title: 'Customize',
                  description: 'Change colors, text, and styling with simple clicks. See changes instantly.',
                  visual: '🎨 → ✨'
                },
                {
                  step: '3',
                  title: 'Publish',
                  description: 'Click publish and get your form link. Share anywhere instantly.',
                  visual: '🚀 → 🌐'
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{step.visual.split(' → ')[0]}</span>
                  </div>
                  <div className="text-sm font-medium text-blue-600 mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                  <div className="text-2xl">{step.visual.split(' → ')[1]}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/signup" 
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors text-lg"
              >
                Try No-Code Builder <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <div className="text-4xl mb-4">💬</div>
              <blockquote className="text-lg text-gray-700 mb-4">
                "I'm not technical at all, but I was able to create a professional contact form for my business in under 5 minutes. FastSubmit's no-code builder is incredibly intuitive!"
              </blockquote>
              <div className="font-medium text-gray-900">Sarah Chen</div>
              <div className="text-sm text-gray-500">Small Business Owner</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
                Common questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'Do I really need zero coding knowledge?',
                  a: 'Absolutely! Our no-code form builder is designed for complete beginners. If you can use a computer and mouse, you can build professional forms.'
                },
                {
                  q: 'Will my forms look professional?',
                  a: 'Yes! Our templates and styling options ensure your forms look professionally designed, even without any design experience.'
                },
                {
                  q: 'Can I customize the design without code?',
                  a: 'Completely! Change colors, fonts, spacing, and layout with simple point-and-click controls. No CSS knowledge required.'
                },
                {
                  q: 'How long does it take to build a form?',
                  a: 'Most users create their first form in under 5 minutes. Complex forms with multiple pages might take 15-20 minutes.'
                },
                {
                  q: 'Is it really free?',
                  a: 'Yes! Our no-code form builder is completely free forever. No hidden fees, no credit card required.'
                },
                {
                  q: 'Can I embed forms on my website?',
                  a: 'Absolutely! We provide simple embed code that you can copy and paste into any website, no technical knowledge needed.'
                },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-xl bg-white border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              Ready to build without code?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands who've built professional forms without any coding. Free forever.
            </p>
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Start Building (No Code!) <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • No coding knowledge needed
            </p>
          </div>
        </section>

        <Footer variant="extended" />
      </div>
    </>
  )
}