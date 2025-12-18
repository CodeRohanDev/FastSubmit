import { JsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Form Maker - Make Professional Web Forms Online | FastSubmit',
  description: 'Make stunning web forms for free with FastSubmit\'s intuitive form maker. Create contact forms, surveys, registrations, and more. No technical skills needed. Start making forms today.',
  keywords: 'free form maker, web form maker, online form creator, contact form maker, survey form maker, registration form maker, form creation tool, make forms online',
  openGraph: {
    title: 'Free Form Maker - Make Professional Web Forms Online',
    description: 'Make stunning web forms for free with FastSubmit\'s intuitive form maker. Create contact forms, surveys, registrations, and more.',
    type: 'website',
    url: 'https://fastsubmit.app/free-form-maker',
    images: [
      {
        url: 'https://fastsubmit.app/og-form-maker.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Form Maker - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Form Maker - Make Professional Web Forms Online',
    description: 'Make stunning web forms for free with FastSubmit\'s intuitive form maker. No technical skills needed.',
    images: ['https://fastsubmit.app/og-form-maker.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-form-maker'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Form Maker',
  description: 'Professional form maker for creating web forms without coding. Make contact forms, surveys, and more.',
  url: 'https://fastsubmit.app/free-form-maker',
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
    reviewCount: '3241'
  },
  featureList: [
    'Visual Form Making',
    'Professional Templates',
    'Custom Styling',
    'Real-time Preview',
    'One-Click Publishing',
    'Mobile Optimization'
  ]
}

export default function FreeFormMakerPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Form Maker
                <span className="block text-purple-600">Make Beautiful Forms</span>
                <span className="block text-pink-600">In Just Minutes</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Make professional web forms effortlessly with our intuitive form maker. 
                Create stunning contact forms, surveys, registrations, and more without any 
                technical skills. Start making forms that convert visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/make-form" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Making Forms
                </Link>
                <Link 
                  href="/templates" 
                  className="border-2 border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Browse Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Form Making Process */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Make Forms Visually - No Coding Required
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 p-8 rounded-2xl mb-6">
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Choose Template</h3>
                  <p className="text-gray-600">Start with a professional template or create from scratch. Our templates are designed for maximum conversions.</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 p-8 rounded-2xl mb-6">
                  <div className="text-6xl mb-4">✨</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Customize Design</h3>
                  <p className="text-gray-600">Make it yours with custom colors, fonts, backgrounds, and branding. See changes in real-time as you make them.</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-8 rounded-2xl mb-6">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Publish & Share</h3>
                  <p className="text-gray-600">Publish your form with one click and share it anywhere. Embed on websites or share direct links.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Templates Showcase */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Professional Form Templates Ready to Use
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Contact Form",
                  description: "Professional contact forms that convert visitors into leads",
                  preview: "Name, Email, Phone, Message, Company",
                  color: "bg-blue-500",
                  uses: "12,847"
                },
                {
                  title: "Event Registration",
                  description: "Collect event registrations with payment integration",
                  preview: "Name, Email, Event, Ticket Type, Payment",
                  color: "bg-green-500",
                  uses: "8,923"
                },
                {
                  title: "Customer Feedback",
                  description: "Gather valuable customer feedback and ratings",
                  preview: "Rating, Comments, Category, Recommendation",
                  color: "bg-yellow-500",
                  uses: "15,672"
                },
                {
                  title: "Job Application",
                  description: "Streamline your hiring process with application forms",
                  preview: "Personal Info, Resume, Cover Letter, Experience",
                  color: "bg-purple-500",
                  uses: "6,234"
                },
                {
                  title: "Newsletter Signup",
                  description: "Grow your email list with beautiful signup forms",
                  preview: "Email, Name, Preferences, Frequency",
                  color: "bg-pink-500",
                  uses: "22,156"
                },
                {
                  title: "Survey Form",
                  description: "Create comprehensive surveys and questionnaires",
                  preview: "Multiple Choice, Rating, Text, Checkboxes",
                  color: "bg-indigo-500",
                  uses: "9,845"
                }
              ].map((template, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`${template.color} h-32 relative`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-2xl font-bold">{template.title}</div>
                        <div className="text-sm opacity-90">{template.uses} users</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{template.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{template.description}</p>
                    <div className="text-sm text-gray-500 mb-4">
                      <strong>Includes:</strong> {template.preview}
                    </div>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Use This Template
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced Form Making Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-time Preview",
                  description: "See exactly how your form will look as you make changes. No surprises when you publish.",
                  icon: "👁️"
                },
                {
                  title: "Smart Field Types",
                  description: "Choose from 20+ field types including file uploads, date pickers, and signature fields.",
                  icon: "🧠"
                },
                {
                  title: "Conditional Logic",
                  description: "Show or hide fields based on user responses. Create dynamic, intelligent forms.",
                  icon: "🔀"
                },
                {
                  title: "Custom Branding",
                  description: "Add your logo, colors, and fonts to make forms match your brand perfectly.",
                  icon: "🎨"
                },
                {
                  title: "Mobile Optimization",
                  description: "All forms are automatically optimized for mobile devices and tablets.",
                  icon: "📱"
                },
                {
                  title: "Analytics Dashboard",
                  description: "Track form performance, conversion rates, and user behavior with detailed analytics.",
                  icon: "📊"
                },
                {
                  title: "Spam Protection",
                  description: "Built-in CAPTCHA and spam filtering to keep your forms secure and clean.",
                  icon: "🛡️"
                },
                {
                  title: "Integration Ready",
                  description: "Connect with 1000+ apps including email marketing, CRM, and payment processors.",
                  icon: "🔗"
                },
                {
                  title: "A/B Testing",
                  description: "Test different form versions to optimize conversion rates and performance.",
                  icon: "🧪"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Success Stories from Form Makers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Marketing Manager",
                  company: "TechStart Inc.",
                  quote: "FastSubmit's form maker helped us increase lead generation by 340%. The templates are beautiful and the customization options are endless.",
                  result: "+340% leads",
                  avatar: "👩‍💼"
                },
                {
                  name: "Mike Chen",
                  role: "Event Coordinator",
                  company: "EventPro",
                  quote: "Making event registration forms has never been easier. We processed 5,000+ registrations seamlessly with zero technical issues.",
                  result: "5,000+ registrations",
                  avatar: "👨‍💻"
                },
                {
                  name: "Lisa Rodriguez",
                  role: "Small Business Owner",
                  company: "Boutique Bakery",
                  quote: "I made a custom order form in 10 minutes that perfectly matches my brand. Orders increased by 200% since switching to FastSubmit.",
                  result: "+200% orders",
                  avatar: "👩‍🍳"
                }
              ].map((story, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{story.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{story.name}</div>
                      <div className="text-gray-600 text-sm">{story.role}</div>
                      <div className="text-gray-500 text-sm">{story.company}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-4 leading-relaxed">"{story.quote}"</blockquote>
                  <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-lg text-center font-semibold">
                    {story.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Why Choose FastSubmit Form Maker?
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">FastSubmit</th>
                    <th className="p-4 text-center">Typeform</th>
                    <th className="p-4 text-center">Wufoo</th>
                    <th className="p-4 text-center">Formstack</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Free Forever Plan", "✅", "❌", "❌", "❌"],
                    ["Unlimited Forms", "✅", "❌", "❌", "❌"],
                    ["Custom Branding", "✅", "❌", "❌", "❌"],
                    ["Real-time Preview", "✅", "✅", "❌", "✅"],
                    ["A/B Testing", "✅", "❌", "❌", "❌"],
                    ["Advanced Analytics", "✅", "❌", "❌", "❌"],
                    ["No FastSubmit Branding", "✅", "❌", "❌", "❌"],
                    ["24/7 Support", "✅", "❌", "❌", "❌"]
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-semibold">{row[0]}</td>
                      <td className="p-4 text-center text-2xl">{row[1]}</td>
                      <td className="p-4 text-center text-2xl">{row[2]}</td>
                      <td className="p-4 text-center text-2xl">{row[3]}</td>
                      <td className="p-4 text-center text-2xl">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Form Maker FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "How easy is it to make forms with FastSubmit?",
                  a: "Extremely easy! Our visual form maker requires no technical skills. Simply choose a template, customize it to your needs, and publish. Most users create their first form in under 5 minutes."
                },
                {
                  q: "Can I make forms that match my brand?",
                  a: "Absolutely! You can customize colors, fonts, backgrounds, add your logo, and even use custom CSS. Your forms will look like a natural extension of your website."
                },
                {
                  q: "What types of forms can I make?",
                  a: "You can make any type of form including contact forms, surveys, registrations, applications, orders, feedback forms, quizzes, and more. Our templates cover most common use cases."
                },
                {
                  q: "Do I need to know coding to make professional forms?",
                  a: "Not at all! Our form maker is designed for non-technical users. Everything is visual and intuitive. However, if you do know code, you can add custom CSS and JavaScript for advanced customizations."
                },
                {
                  q: "Can I make forms that work on mobile devices?",
                  a: "Yes! All forms made with FastSubmit are automatically mobile-responsive. They look great and work perfectly on smartphones, tablets, and desktop computers."
                },
                {
                  q: "How do I share the forms I make?",
                  a: "You can share forms in multiple ways: embed them on your website with a simple code snippet, share direct links via email or social media, or use our popup and slide-in options."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Make Your First Form?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join over 50,000 users who trust FastSubmit to make their forms. 
              Start with a template or create from scratch - it's completely free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/make-form" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Make Your First Form Free
              </Link>
              <Link 
                href="/templates" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}