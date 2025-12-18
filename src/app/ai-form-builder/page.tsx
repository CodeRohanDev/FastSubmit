import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles, Wand2, Brain, Zap, MessageSquare, RefreshCw } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'AI Form Builder - Create Forms with AI | FastSubmit 2025',
  description: 'AI-powered form builder. Describe your form in plain English, AI creates it instantly. Smart form suggestions, auto-complete fields, intelligent validation. The future of form building.',
  keywords: [
    'ai form builder',
    'ai powered form builder',
    'form builder with chatgpt',
    'smart form builder',
    'ai form creator',
    'intelligent form builder',
    'form builder ai 2025',
    'chatgpt form builder',
    'ai survey builder',
    'smart form automation',
    'ai form generator',
    'form builder artificial intelligence',
    'gpt form builder',
    'ai contact form',
    'machine learning form builder'
  ],
  alternates: { canonical: 'https://fastsubmit.cloud/ai-form-builder' }
}

export default function AIFormBuilderPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AI Form Builder - FastSubmit 2025",
    "description": "Create forms using AI. Describe what you need, AI builds it.",
    "url": "https://fastsubmit.cloud/ai-form-builder"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How does AI form building work?", "acceptedAnswer": { "@type": "Answer", "text": "Simply describe your form in plain English like 'Create a contact form with name, email, and message'. Our AI understands and builds it instantly." } },
      { "@type": "Question", "name": "Is the AI form builder free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! AI form generation is included free with FastSubmit. No premium plan required." } }
    ]
  }

  const features = [
    { icon: <Wand2 className="w-5 h-5" />, title: 'Describe & Create', desc: 'Tell AI what form you need in plain English. It builds it instantly.' },
    { icon: <Brain className="w-5 h-5" />, title: 'Smart Suggestions', desc: 'AI suggests fields based on your form type and industry.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Instant Generation', desc: 'Forms created in seconds, not minutes. Save hours of work.' },
    { icon: <MessageSquare className="w-5 h-5" />, title: 'Natural Language', desc: 'No technical knowledge needed. Just describe what you want.' },
    { icon: <RefreshCw className="w-5 h-5" />, title: 'Iterate Easily', desc: 'Ask AI to modify, add, or remove fields with simple commands.' },
    { icon: <Sparkles className="w-5 h-5" />, title: 'Smart Validation', desc: 'AI adds appropriate validation rules automatically.' },
  ]

  const examples = [
    { prompt: '"Create a contact form with name, email, phone, and message"', result: 'Contact form with 4 fields, email validation, required fields' },
    { prompt: '"Make a job application form for a software developer position"', result: 'Application form with resume upload, experience, skills, portfolio' },
    { prompt: '"Build a customer feedback survey with rating questions"', result: 'Survey with star ratings, NPS score, open-ended feedback' },
    { prompt: '"Create an event registration form for a tech conference"', result: 'Registration with ticket type, dietary preferences, session selection' },
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
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-amber-600 mb-4 sm:mb-6 bg-amber-50 px-3 sm:px-4 py-2 rounded-full border border-amber-200">
                <Sparkles size={14} />
                <span>AI Powered • 2025</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                AI form builder
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">describe it, we build it</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                The future of form building is here. Just describe what you need in plain English, 
                and our AI creates your form instantly. No drag-and-drop required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Try AI Form Builder <ArrowRight size={16} />
                </Link>
                <Link href="/form-builder" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:border-gray-300 transition-all">
                  Manual Builder
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">See AI in action</h2>
              <p className="text-gray-400">Real examples of AI form generation</p>
            </div>
            <div className="space-y-4">
              {examples.map((example, i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-4 sm:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-amber-400">You:</span>
                    <span className="text-gray-300">{example.prompt}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-400">AI:</span>
                    <span className="text-gray-400">{example.result}</span>
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
                AI-powered features
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-4 text-amber-600">
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
                { q: 'How does AI form building work?', a: 'Simply describe your form in plain English like "Create a contact form with name, email, and message". Our AI understands and builds it instantly.' },
                { q: 'Is the AI form builder free?', a: 'Yes! AI form generation is included free with FastSubmit. No premium plan required.' },
                { q: 'Can I edit the AI-generated form?', a: 'Absolutely! After AI creates your form, you can edit, add, or remove any fields using our visual editor.' },
                { q: 'What languages does the AI understand?', a: 'Currently English, with more languages coming soon. You can create forms in any language though.' },
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
              Ready to try AI form building?
            </h2>
            <p className="text-base sm:text-xl text-gray-300 mb-8">
              Create your first AI-generated form in seconds. Free forever.
            </p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Try AI Form Builder <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
