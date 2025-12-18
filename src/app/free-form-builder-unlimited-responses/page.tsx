import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Free Form Builder Unlimited Responses - No Limits Forever | FastSubmit',
  description: 'Create forms with unlimited responses forever. No monthly caps, no per-response fees. Free form builder with unlimited submissions, data collection, and storage. Better than paid alternatives.',
  keywords: 'free form builder unlimited responses, unlimited form submissions, no limit form builder, free unlimited forms, form builder no response limit, unlimited data collection',
  openGraph: {
    title: 'Free Form Builder Unlimited Responses - No Limits Forever',
    description: 'Create forms with unlimited responses forever. No monthly caps, no per-response fees. Free form builder with unlimited submissions and data collection.',
    type: 'website',
    url: 'https://fastsubmit.app/free-form-builder-unlimited-responses',
    images: [
      {
        url: 'https://fastsubmit.app/og-unlimited-responses.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Form Builder Unlimited Responses - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Form Builder Unlimited Responses - No Limits Forever',
    description: 'Create forms with unlimited responses forever. No monthly caps, no per-response fees.',
    images: ['https://fastsubmit.app/og-unlimited-responses.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-form-builder-unlimited-responses'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Unlimited Response Form Builder',
  description: 'Free form builder with unlimited responses, submissions, and data collection capabilities',
  url: 'https://fastsubmit.app/free-form-builder-unlimited-responses',
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
    reviewCount: '18934'
  },
  featureList: [
    'Unlimited Form Responses',
    'Unlimited Data Storage',
    'No Monthly Caps',
    'Free Forever',
    'Advanced Analytics',
    'Data Export Options'
  ]
}

export default function FreeFormBuilderUnlimitedResponsesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Form Builder
                <span className="block text-emerald-600">Unlimited Responses</span>
                <span className="block text-green-600">No Limits Forever</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Tired of response limits killing your data collection? FastSubmit offers unlimited 
                form responses forever - no monthly caps, no per-response fees, no upgrade pressure. 
                Collect thousands of responses completely free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/unlimited-builder" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Collecting Unlimited Responses
                </Link>
                <Link 
                  href="/unlimited-demo" 
                  className="border-2 border-gray-300 hover:border-emerald-600 text-gray-700 hover:text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  See Unlimited Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Unlimited Promise */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Our Unlimited Promise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-emerald-50 rounded-2xl border border-emerald-200">
                <div className="text-6xl mb-6">∞</div>
                <h3 className="text-2xl font-bold text-emerald-700 mb-4">Unlimited Responses</h3>
                <p className="text-gray-700 leading-relaxed">
                  Collect 10, 100, 1,000, or 100,000 responses. No caps, no limits, no "upgrade now" messages. 
                  Your forms can handle unlimited submissions forever.
                </p>
              </div>
              <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-200">
                <div className="text-6xl mb-6">💾</div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Unlimited Storage</h3>
                <p className="text-gray-700 leading-relaxed">
                  Store all your form data forever. No storage limits, no data deletion after X days. 
                  Your responses are safe and accessible whenever you need them.
                </p>
              </div>
              <div className="text-center p-8 bg-blue-50 rounded-2xl border border-blue-200">
                <div className="text-6xl mb-6">🔄</div>
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Unlimited Forms</h3>
                <p className="text-gray-700 leading-relaxed">
                  Create as many forms as you need. Each form gets unlimited responses. 
                  Run multiple campaigns, surveys, and data collection projects simultaneously.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison with Competitors */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-green-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Why Others Limit Responses (And We Don't)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-emerald-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Form Builder</th>
                    <th className="p-4 text-center">Free Response Limit</th>
                    <th className="p-4 text-center">Monthly Cost for More</th>
                    <th className="p-4 text-center">FastSubmit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Google Forms", "Unlimited*", "Free (but limited features)", "✅ Unlimited + Advanced Features"],
                    ["Typeform", "10 responses/month", "$25/month", "✅ Unlimited Forever Free"],
                    ["JotForm", "100 responses/month", "$34/month", "✅ Unlimited Forever Free"],
                    ["Wufoo", "100 responses/month", "$14.08/month", "✅ Unlimited Forever Free"],
                    ["Formstack", "10 responses/month", "$50/month", "✅ Unlimited Forever Free"],
                    ["SurveyMonkey", "40 responses/survey", "$25/month", "✅ Unlimited Forever Free"],
                    ["Gravity Forms", "Unlimited*", "$59/year (WordPress only)", "✅ Unlimited + Works Everywhere"]
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-semibold">{row[0]}</td>
                      <td className="p-4 text-center">{row[1]}</td>
                      <td className="p-4 text-center">{row[2]}</td>
                      <td className="p-4 text-center text-emerald-600 font-semibold">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              *Limited customization, branding, and advanced features
            </p>
          </div>
        </section>

        {/* Real Usage Examples */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Real Users, Real Unlimited Results
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  user: "Sarah's Marketing Agency",
                  responses: "47,832",
                  timeframe: "6 months",
                  useCase: "Lead generation forms for 15 clients",
                  savings: "$1,200/month",
                  quote: "We'd be paying thousands monthly with other platforms. FastSubmit's unlimited responses saved our business."
                },
                {
                  user: "University Research Team",
                  responses: "12,456",
                  timeframe: "3 months",
                  useCase: "Student feedback and research surveys",
                  savings: "$400/month",
                  quote: "Academic budgets are tight. Unlimited responses let us collect all the data we need for our research."
                },
                {
                  user: "E-commerce Store",
                  responses: "89,234",
                  timeframe: "1 year",
                  useCase: "Customer feedback and product reviews",
                  savings: "$2,500/month",
                  quote: "With seasonal spikes, response limits would kill our data collection. Unlimited responses are essential."
                }
              ].map((example, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-emerald-600">{example.responses}</div>
                    <div className="text-gray-600">responses in {example.timeframe}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{example.user}</h3>
                  <p className="text-gray-600 mb-4">{example.useCase}</p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Saved {example.savings}
                  </div>
                  <blockquote className="text-gray-700 italic">"{example.quote}"</blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Infrastructure */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-green-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              How We Handle Unlimited Responses
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Scalable Infrastructure",
                  description: "Cloud-based architecture that automatically scales with your response volume",
                  icon: "☁️",
                  detail: "Auto-scaling servers"
                },
                {
                  title: "Optimized Database",
                  description: "High-performance databases designed to handle millions of form submissions",
                  icon: "🗄️",
                  detail: "Enterprise-grade storage"
                },
                {
                  title: "Global CDN",
                  description: "Worldwide content delivery network ensures fast form loading everywhere",
                  icon: "🌍",
                  detail: "150+ global locations"
                },
                {
                  title: "Real-time Processing",
                  description: "Instant processing and storage of form responses as they're submitted",
                  icon: "⚡",
                  detail: "< 100ms response time"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                  <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                    {feature.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Features with Unlimited */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced Features (All Unlimited)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Unlimited Data Export",
                  description: "Export all your responses to Excel, CSV, or JSON. No limits on export frequency or data volume.",
                  icon: "📊"
                },
                {
                  title: "Unlimited File Uploads",
                  description: "Accept unlimited file uploads through your forms. No storage limits on user-submitted files.",
                  icon: "📁"
                },
                {
                  title: "Unlimited Email Notifications",
                  description: "Get notified for every response. No limits on notification emails or frequency.",
                  icon: "📧"
                },
                {
                  title: "Unlimited Integrations",
                  description: "Connect unlimited forms to your favorite tools. No limits on webhook calls or API requests.",
                  icon: "🔗"
                },
                {
                  title: "Unlimited Analytics",
                  description: "View detailed analytics for all responses. No limits on data analysis or reporting.",
                  icon: "📈"
                },
                {
                  title: "Unlimited Customization",
                  description: "Customize unlimited forms with your branding. No limits on design options or themes.",
                  icon: "🎨"
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

        {/* Response Volume Calculator */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-green-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Calculate Your Savings
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                How Much Would You Pay Elsewhere?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    volume: "1,000 responses/month",
                    typeform: "$25/month",
                    jotform: "$34/month",
                    fastsubmit: "FREE",
                    savings: "$300-400/year"
                },
                {
                    volume: "5,000 responses/month",
                    typeform: "$83/month",
                    jotform: "$99/month",
                    fastsubmit: "FREE",
                    savings: "$1,000-1,200/year"
                },
                {
                    volume: "20,000 responses/month",
                    typeform: "$333/month",
                    jotform: "$399/month",
                    fastsubmit: "FREE",
                    savings: "$4,000-4,800/year"
                }
              ].map((calc, index) => (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">{calc.volume}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Typeform:</span>
                      <span className="text-red-600">{calc.typeform}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>JotForm:</span>
                      <span className="text-red-600">{calc.jotform}</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>FastSubmit:</span>
                      <span className="text-emerald-600">{calc.fastsubmit}</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-emerald-100 text-emerald-800 px-3 py-2 rounded-lg text-sm font-medium">
                    You save: {calc.savings}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Unlimited Responses FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Are there really no limits on form responses?",
                  a: "Absolutely none! Collect 10 responses or 10 million responses - it's all free. No monthly caps, no per-response fees, no surprise charges. We mean unlimited when we say unlimited."
                },
                {
                  q: "What's the catch? How can unlimited responses be free?",
                  a: "No catch! We believe in providing real value upfront. Our business model focuses on premium features for power users, not limiting basic functionality like response collection."
                },
                {
                  q: "Will my forms slow down with many responses?",
                  a: "Not at all! Our infrastructure is built to handle high-volume form submissions. Whether you have 100 or 100,000 responses, your forms will load and submit just as fast."
                },
                {
                  q: "Can I export all my unlimited responses?",
                  a: "Yes! Export all your data anytime to Excel, CSV, or JSON format. No limits on how much data you can export or how often you export it."
                },
                {
                  q: "Do unlimited responses include file uploads?",
                  a: "Yes! Users can upload unlimited files through your forms. We don't count file uploads against any limits because there aren't any limits to count against."
                },
                {
                  q: "How long do you store unlimited responses?",
                  a: "Forever! Your response data is stored permanently with no expiration dates. Access your data from day one or year ten - it's always there when you need it."
                },
                {
                  q: "Can I create multiple forms with unlimited responses each?",
                  a: "Absolutely! Create unlimited forms, each with unlimited responses. Run multiple campaigns, surveys, and data collection projects simultaneously without any restrictions."
                },
                {
                  q: "What if I need support with my unlimited responses?",
                  a: "Our support team helps with all accounts, regardless of response volume. Whether you have 10 responses or 10,000, you get the same level of support and assistance."
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

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Collecting Unlimited Responses Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users who've ditched response limits forever. Create your first form 
              and start collecting unlimited responses in minutes, not months.
            </p>
            <Link 
              href="/unlimited-builder" 
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Create Unlimited Response Form Free
            </Link>
            <p className="text-sm opacity-75 mt-4">
              No credit card required • No response limits • Free forever
            </p>
          </div>
        </section>
      </div>
    </>
  )
}