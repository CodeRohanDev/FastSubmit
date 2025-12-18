import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Zap, MousePointer, Palette, Code, Shield, Globe } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'No Code Form Builder - Create Professional Forms Without Coding | FastSubmit',
  description: 'Build professional forms without any coding knowledge. Our no-code form builder features drag & drop interface, visual design tools, and instant publishing. Perfect for non-technical users.',
  keywords: 'no code form builder, form builder without coding, visual form builder, drag drop form builder, no coding required, codeless form creator, non-technical form builder',
  openGraph: {
    title: 'No Code Form Builder - Create Professional Forms Without Coding',
    description: 'Build professional forms without any coding knowledge. Our no-code form builder features drag & drop interface, visual design tools, and instant publishing.',
    type: 'website',
    url: 'https://fastsubmit.app/no-code-form-builder',
    images: [
      {
        url: 'https://fastsubmit.app/og-no-code-form-builder.jpg',
        width: 1200,
        height: 630,
        alt: 'No Code Form Builder - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'No Code Form Builder - Create Professional Forms Without Coding',
    description: 'Build professional forms without any coding knowledge. Drag & drop interface, visual design tools.',
    images: ['https://fastsubmit.app/og-no-code-form-builder.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/no-code-form-builder'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit No Code Form Builder',
  description: 'Professional no-code form builder for creating forms without any programming knowledge',
  url: 'https://fastsubmit.app/no-code-form-builder',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '9234'
  },
  featureList: [
    'No Coding Required',
    'Drag and Drop Interface',
    'Visual Form Designer',
    'Real-time Preview',
    'Custom Styling',
    'One-click Publishing',
    'Professional Templates',
    'Mobile Responsive'
  ]
}

export default function NoCodeFormBuilderPage() {

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
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
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

        {/* No Code vs Traditional Development */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              No Code vs Traditional Development
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-green-700">No Code Approach</h3>
                  <p className="text-green-600">FastSubmit Way</p>
                </div>
                <ul className="space-y-4">
                  {[
                    "✅ Zero coding knowledge required",
                    "✅ Build forms in minutes, not days",
                    "✅ Visual drag & drop interface",
                    "✅ Instant preview and publishing",
                    "✅ No technical maintenance needed",
                    "✅ Professional results guaranteed",
                    "✅ Free to use forever",
                    "✅ No hiring developers needed"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="mr-3 text-green-600">{feature.split(' ')[0]}</span>
                      <span>{feature.substring(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-red-50 p-8 rounded-2xl border border-red-200 opacity-75">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold text-red-700">Traditional Coding</h3>
                  <p className="text-red-600">Old Way</p>
                </div>
                <ul className="space-y-4">
                  {[
                    "❌ Requires HTML/CSS/JavaScript knowledge",
                    "❌ Takes weeks or months to develop",
                    "❌ Complex coding and debugging",
                    "❌ Lengthy testing and deployment",
                    "❌ Ongoing technical maintenance",
                    "❌ Risk of bugs and errors",
                    "❌ Expensive development costs",
                    "❌ Need to hire technical experts"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-500">
                      <span className="mr-3 text-red-500">{feature.split(' ')[0]}</span>
                      <span>{feature.substring(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* No Code Success Stories */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              No Code Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Maria Rodriguez",
                  role: "Restaurant Owner",
                  story: "I needed an online ordering form but had zero coding experience. With FastSubmit's no-code builder, I created a professional form in 10 minutes!",
                  result: "300% increase in online orders",
                  avatar: "👩‍🍳",
                  time: "Built in 10 minutes"
                },
                {
                  name: "David Kim",
                  role: "Marketing Manager",
                  story: "Our team needed lead generation forms fast. The no-code builder let us create and test multiple form variations without waiting for developers.",
                  result: "5x faster form deployment",
                  avatar: "👨‍💼",
                  time: "No developer needed"
                },
                {
                  name: "Sarah Johnson",
                  role: "Non-Profit Director",
                  story: "We're a small non-profit with no technical budget. The no-code form builder helped us create donation and volunteer forms completely free.",
                  result: "Saved $5,000 in development",
                  avatar: "👩‍💻",
                  time: "100% free solution"
                }
              ].map((story, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{story.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{story.name}</div>
                      <div className="text-gray-600 text-sm">{story.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-4 leading-relaxed">"{story.story}"</blockquote>
                  <div className="space-y-2">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {story.result}
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {story.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* No Code Form Types */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Create Any Form Type Without Coding
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { type: "Contact Forms", icon: "📧", description: "Customer contact and inquiry forms" },
                { type: "Survey Forms", icon: "📊", description: "Market research and feedback surveys" },
                { type: "Registration Forms", icon: "📝", description: "Event and user registration forms" },
                { type: "Order Forms", icon: "🛒", description: "Product and service order forms" },
                { type: "Application Forms", icon: "📄", description: "Job and school application forms" },
                { type: "Booking Forms", icon: "📅", description: "Appointment and reservation forms" },
                { type: "Feedback Forms", icon: "💬", description: "Customer and employee feedback" },
                { type: "Lead Forms", icon: "🎯", description: "Lead generation and capture forms" }
              ].map((formType, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-center">
                  <div className="text-3xl mb-3">{formType.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{formType.type}</h3>
                  <p className="text-gray-600 text-sm">{formType.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* No Code Benefits */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Why Choose No Code Form Building?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Save Time",
                  description: "Build forms in minutes instead of weeks. No waiting for developers or lengthy development cycles.",
                  icon: "⏰",
                  stat: "95% faster"
                },
                {
                  title: "Save Money",
                  description: "No need to hire expensive developers or pay for custom development. Build professional forms for free.",
                  icon: "💰",
                  stat: "$0 cost"
                },
                {
                  title: "No Learning Curve",
                  description: "If you can use a computer, you can build forms. No technical training or coding bootcamps required.",
                  icon: "🎓",
                  stat: "0 coding skills needed"
                },
                {
                  title: "Instant Results",
                  description: "See your form come to life as you build it. Publish and share immediately when you're done.",
                  icon: "⚡",
                  stat: "Instant publishing"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {benefit.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extended FAQ */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              No Code Form Builder FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "What does 'no code' mean for form building?",
                  a: "No code means you can create professional forms without writing any HTML, CSS, or JavaScript. Our visual interface lets you build forms by clicking, dragging, and dropping elements - no programming knowledge required."
                },
                {
                  q: "Can I really build professional forms without any coding experience?",
                  a: "Absolutely! Our no-code form builder is designed specifically for non-technical users. Thousands of business owners, marketers, and individuals with zero coding experience use FastSubmit to create professional forms daily."
                },
                {
                  q: "How is no-code different from low-code?",
                  a: "No-code requires zero programming knowledge - everything is visual and intuitive. Low-code still requires some technical knowledge and coding. With FastSubmit, you truly need no coding skills whatsoever."
                },
                {
                  q: "Will my no-code forms look as good as coded ones?",
                  a: "Yes! Our no-code forms are built with professional templates and modern design principles. Many users are surprised that their no-code forms look better than custom-coded alternatives."
                },
                {
                  q: "Can I customize no-code forms to match my brand?",
                  a: "Definitely! Even without coding, you can customize colors, fonts, logos, and styling to perfectly match your brand. Our visual customization tools give you complete design control."
                },
                {
                  q: "Are no-code forms secure and reliable?",
                  a: "Yes! No-code doesn't mean less secure. Our forms include enterprise-grade security, spam protection, and reliable hosting - all handled automatically without any technical setup from you."
                },
                {
                  q: "Can I integrate no-code forms with other tools?",
                  a: "Absolutely! Connect your no-code forms with email marketing tools, CRMs, payment processors, and hundreds of other applications through our integrations - no coding required for setup."
                },
                {
                  q: "What if I need help building my no-code form?",
                  a: "We provide comprehensive tutorials, templates, and support to help you succeed. Plus, our interface is so intuitive that most users create their first form successfully within minutes."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Without Code?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join over 100,000 non-technical users who've built professional forms with FastSubmit. 
              No coding knowledge required - just point, click, and create!
            </p>
            <Link 
              href="/signup" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Start Building (No Code Required!)
            </Link>
            <p className="text-sm opacity-75 mt-4">
              No credit card required • No coding knowledge needed • Free forever
            </p>
          </div>
        </section>

        <Footer variant="extended" />
      </div>
    </>
  )
}