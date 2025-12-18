import { JsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Survey Maker - Create Professional Surveys Online | FastSubmit',
  description: 'Create professional surveys for free with FastSubmit\'s powerful survey maker. Build customer surveys, market research, feedback forms with unlimited responses. No coding required.',
  keywords: 'free survey maker, survey creator, online survey builder, survey generator, customer survey maker, market research surveys, feedback survey maker, questionnaire builder',
  openGraph: {
    title: 'Free Survey Maker - Create Professional Surveys Online',
    description: 'Create professional surveys for free with FastSubmit\'s powerful survey maker. Build customer surveys, market research, feedback forms with unlimited responses.',
    type: 'website',
    url: 'https://fastsubmit.app/free-survey-maker',
    images: [
      {
        url: 'https://fastsubmit.app/og-survey-maker.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Survey Maker - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Survey Maker - Create Professional Surveys Online',
    description: 'Create professional surveys for free. Unlimited responses, advanced question types, real-time analytics.',
    images: ['https://fastsubmit.app/og-survey-maker.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-survey-maker'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Survey Maker',
  description: 'Professional survey maker for creating customer surveys, market research, and feedback forms',
  url: 'https://fastsubmit.app/free-survey-maker',
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
    reviewCount: '7892'
  },
  featureList: [
    'Unlimited Survey Responses',
    'Advanced Question Types',
    'Real-time Analytics',
    'Custom Branding',
    'Logic Branching',
    'Export Options'
  ]
}

export default function FreeSurveyMakerPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Survey Maker
                <span className="block text-emerald-600">Create Professional Surveys</span>
                <span className="block text-teal-600">Get Unlimited Responses</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create professional surveys, questionnaires, and feedback forms with our powerful survey maker. 
                Get unlimited responses, advanced question types, real-time analytics, and custom branding. 
                Perfect for market research, customer feedback, and employee surveys.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/create-survey" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Create Survey Free
                </Link>
                <Link 
                  href="/survey-templates" 
                  className="border-2 border-gray-300 hover:border-emerald-600 text-gray-700 hover:text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Browse Survey Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Survey Preview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Professional Survey Example
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Customer Satisfaction Survey</h3>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction Survey</h4>
                      <p className="text-gray-600">Help us improve our service by sharing your feedback</p>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">1. How satisfied are you with our service?</label>
                        <div className="space-y-2">
                          {['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'].map((option, index) => (
                            <label key={index} className="flex items-center">
                              <input type="radio" name="satisfaction" className="mr-3 text-emerald-600" />
                              <span className="text-gray-700">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">2. Rate our customer support (1-10)</label>
                        <div className="flex space-x-2">
                          {[1,2,3,4,5,6,7,8,9,10].map((num) => (
                            <button key={num} className="w-8 h-8 border border-gray-300 rounded hover:bg-emerald-100 text-sm">
                              {num}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">3. Which features do you use most? (Select all that apply)</label>
                        <div className="space-y-2">
                          {['Dashboard', 'Reports', 'Integrations', 'Mobile App', 'API'].map((feature, index) => (
                            <label key={index} className="flex items-center">
                              <input type="checkbox" className="mr-3 text-emerald-600" />
                              <span className="text-gray-700">{feature}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">4. Additional comments</label>
                        <textarea className="w-full p-3 border border-gray-300 rounded-lg h-20" placeholder="Share your thoughts..."></textarea>
                      </div>
                      
                      <button className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                        Submit Survey
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Question Types</h3>
                <div className="space-y-6">
                  {[
                    {
                      type: "Multiple Choice",
                      description: "Single or multiple selection options",
                      icon: "🔘"
                    },
                    {
                      type: "Rating Scale",
                      description: "1-10 scales, star ratings, emoji ratings",
                      icon: "⭐"
                    },
                    {
                      type: "Text Response",
                      description: "Short text, long text, and paragraph responses",
                      icon: "📝"
                    },
                    {
                      type: "Dropdown Menu",
                      description: "Compact selection from multiple options",
                      icon: "📋"
                    },
                    {
                      type: "Matrix Questions",
                      description: "Rate multiple items using the same scale",
                      icon: "📊"
                    },
                    {
                      type: "File Upload",
                      description: "Allow respondents to upload files or images",
                      icon: "📁"
                    }
                  ].map((questionType, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl">{questionType.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{questionType.type}</h4>
                        <p className="text-gray-600 text-sm">{questionType.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Survey Types */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Survey Types You Can Create
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Customer Satisfaction Surveys",
                  description: "Measure customer happiness and identify improvement areas",
                  icon: "😊",
                  uses: "45,000+ created"
                },
                {
                  title: "Market Research Surveys",
                  description: "Gather insights about your target market and competitors",
                  icon: "📈",
                  uses: "32,000+ created"
                },
                {
                  title: "Employee Feedback Surveys",
                  description: "Collect employee opinions and improve workplace culture",
                  icon: "👥",
                  uses: "28,000+ created"
                },
                {
                  title: "Product Feedback Surveys",
                  description: "Get user feedback on products and features",
                  icon: "📦",
                  uses: "38,000+ created"
                },
                {
                  title: "Event Feedback Surveys",
                  description: "Collect attendee feedback and improve future events",
                  icon: "🎪",
                  uses: "22,000+ created"
                },
                {
                  title: "Academic Research Surveys",
                  description: "Conduct academic studies and research projects",
                  icon: "🎓",
                  uses: "15,000+ created"
                },
                {
                  title: "Website Feedback Surveys",
                  description: "Improve user experience with website feedback",
                  icon: "💻",
                  uses: "41,000+ created"
                },
                {
                  title: "Training Evaluation Surveys",
                  description: "Assess training effectiveness and learning outcomes",
                  icon: "📚",
                  uses: "19,000+ created"
                },
                {
                  title: "Brand Awareness Surveys",
                  description: "Measure brand recognition and perception",
                  icon: "🏷️",
                  uses: "26,000+ created"
                }
              ].map((surveyType, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{surveyType.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{surveyType.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{surveyType.description}</p>
                  <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {surveyType.uses}
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
              Professional Survey Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Logic Branching",
                  description: "Show different questions based on previous answers. Create personalized survey experiences.",
                  icon: "🔀"
                },
                {
                  title: "Real-time Analytics",
                  description: "View responses as they come in with live charts, graphs, and detailed analytics.",
                  icon: "📊"
                },
                {
                  title: "Custom Branding",
                  description: "Add your logo, colors, and branding to create professional-looking surveys.",
                  icon: "🎨"
                },
                {
                  title: "Multiple Languages",
                  description: "Create surveys in multiple languages to reach a global audience.",
                  icon: "🌍"
                },
                {
                  title: "Response Validation",
                  description: "Set validation rules to ensure you get quality, accurate responses.",
                  icon: "✅"
                },
                {
                  title: "Anonymous Responses",
                  description: "Collect honest feedback with anonymous response options.",
                  icon: "🕶️"
                },
                {
                  title: "Export & Integration",
                  description: "Export data to Excel, CSV, or integrate with your favorite tools.",
                  icon: "📤"
                },
                {
                  title: "Mobile Optimized",
                  description: "All surveys work perfectly on mobile devices and tablets.",
                  icon: "📱"
                },
                {
                  title: "Unlimited Responses",
                  description: "Collect as many responses as you need without any limits.",
                  icon: "∞"
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

        {/* Analytics Dashboard Preview */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Real-time Survey Analytics
            </h2>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-emerald-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-emerald-600">1,247</div>
                  <div className="text-gray-700">Total Responses</div>
                </div>
                <div className="bg-blue-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600">89%</div>
                  <div className="text-gray-700">Completion Rate</div>
                </div>
                <div className="bg-purple-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-purple-600">4.2</div>
                  <div className="text-gray-700">Average Rating</div>
                </div>
                <div className="bg-orange-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-orange-600">2:34</div>
                  <div className="text-gray-700">Avg. Time</div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Distribution</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Very Satisfied', percentage: 45, color: 'bg-green-500' },
                      { label: 'Satisfied', percentage: 32, color: 'bg-blue-500' },
                      { label: 'Neutral', percentage: 15, color: 'bg-yellow-500' },
                      { label: 'Dissatisfied', percentage: 6, color: 'bg-orange-500' },
                      { label: 'Very Dissatisfied', percentage: 2, color: 'bg-red-500' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-24 text-sm text-gray-600">{item.label}</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-4 mx-3">
                          <div className={`${item.color} h-4 rounded-full`} style={{width: `${item.percentage}%`}}></div>
                        </div>
                        <div className="w-12 text-sm font-medium text-gray-900">{item.percentage}%</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Responses</h3>
                  <div className="space-y-3">
                    {[
                      { time: '2 min ago', rating: 5, comment: 'Excellent service, very happy!' },
                      { time: '5 min ago', rating: 4, comment: 'Good overall experience' },
                      { time: '8 min ago', rating: 5, comment: 'Outstanding customer support' },
                      { time: '12 min ago', rating: 3, comment: 'Average, could be better' }
                    ].map((response, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-gray-500">{response.time}</div>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-sm ${i < response.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                            ))}
                          </div>
                        </div>
                        <div className="text-sm text-gray-700">{response.comment}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              FastSubmit vs Other Survey Tools
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-emerald-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">FastSubmit</th>
                    <th className="p-4 text-center">SurveyMonkey</th>
                    <th className="p-4 text-center">Typeform</th>
                    <th className="p-4 text-center">Google Forms</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Unlimited Responses", "✅", "❌", "❌", "✅"],
                    ["Advanced Question Types", "✅", "✅", "✅", "❌"],
                    ["Logic Branching", "✅", "❌", "❌", "❌"],
                    ["Custom Branding", "✅", "❌", "❌", "❌"],
                    ["Real-time Analytics", "✅", "❌", "❌", "❌"],
                    ["Export Options", "✅", "❌", "❌", "✅"],
                    ["No Watermark", "✅", "❌", "❌", "✅"],
                    ["Free Forever", "✅", "❌", "❌", "✅"]
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
              Survey Maker FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Is the survey maker really free?",
                  a: "Yes! Our survey maker is completely free with unlimited surveys and responses. You get access to all question types, real-time analytics, custom branding, and export options at no cost."
                },
                {
                  q: "How many responses can I collect with free surveys?",
                  a: "There are no limits! Collect as many survey responses as you need. Whether it's 100 or 100,000 responses, our free plan supports unlimited data collection."
                },
                {
                  q: "Can I customize the design of my surveys?",
                  a: "Absolutely! You can customize colors, fonts, add your logo, and match your brand perfectly. Create professional-looking surveys that represent your organization."
                },
                {
                  q: "What types of questions can I add to my surveys?",
                  a: "We support all major question types including multiple choice, rating scales, text responses, dropdowns, matrix questions, file uploads, and more. You can create any type of survey you need."
                },
                {
                  q: "Can I see survey results in real-time?",
                  a: "Yes! View responses as they come in with live charts, graphs, and detailed analytics. Track completion rates, response patterns, and get insights immediately."
                },
                {
                  q: "How do I share my surveys with respondents?",
                  a: "Share surveys via direct links, embed them on your website, send via email, or share on social media. You can also generate QR codes for offline distribution."
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
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Creating Surveys Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join over 75,000 organizations using FastSubmit to create professional surveys. 
              Get the insights you need to make better decisions.
            </p>
            <Link 
              href="/create-survey" 
              className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Create Your First Survey Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}