import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Free Feedback Form Maker - Create Customer Feedback Forms | FastSubmit',
  description: 'Create professional feedback forms for free. Build customer feedback, employee surveys, and review forms with our easy feedback form maker. Collect valuable insights and improve your business.',
  keywords: 'free feedback form maker, feedback form creator, customer feedback form, employee feedback form, review form builder, survey feedback form, feedback collection tool',
  openGraph: {
    title: 'Free Feedback Form Maker - Create Customer Feedback Forms',
    description: 'Create professional feedback forms for free. Build customer feedback, employee surveys, and review forms with our easy feedback form maker.',
    type: 'website',
    url: 'https://fastsubmit.app/free-feedback-form-maker',
    images: [
      {
        url: 'https://fastsubmit.app/og-feedback-form-maker.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Feedback Form Maker - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Feedback Form Maker - Create Customer Feedback Forms',
    description: 'Create professional feedback forms for free. Collect valuable customer insights and improve your business.',
    images: ['https://fastsubmit.app/og-feedback-form-maker.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-feedback-form-maker'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Feedback Form Maker',
  description: 'Free feedback form maker for creating customer feedback, employee surveys, and review collection forms',
  url: 'https://fastsubmit.app/free-feedback-form-maker',
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
    reviewCount: '19847'
  },
  featureList: [
    'Customer Feedback Forms',
    'Employee Survey Forms',
    'Rating Systems',
    'Review Collection',
    'Analytics Dashboard',
    'Unlimited Responses'
  ]
}

export default function FreeFeedbackFormMakerPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Feedback Form Maker
                <span className="block text-orange-600">Create Customer Feedback Forms</span>
                <span className="block text-yellow-600">Collect Valuable Insights</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create professional feedback forms to collect customer opinions, employee insights, 
                and user reviews. Our free feedback form maker includes rating systems, analytics, 
                and unlimited responses to help you improve your business based on real feedback.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/feedback-maker" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Make Feedback Form
                </Link>
                <Link 
                  href="/feedback-templates" 
                  className="border-2 border-gray-300 hover:border-orange-600 text-gray-700 hover:text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Feedback Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Form Types */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Feedback Forms You Can Make
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  type: "Customer Feedback Forms",
                  description: "Collect customer opinions about your products, services, and overall experience",
                  icon: "😊",
                  features: ["Satisfaction Ratings", "Service Quality", "Product Reviews", "Improvement Suggestions"],
                  benefits: ["Improve Customer Satisfaction", "Identify Pain Points", "Enhance Products", "Build Loyalty"]
                },
                {
                  type: "Employee Feedback Forms",
                  description: "Gather employee insights about workplace culture, management, and job satisfaction",
                  icon: "👥",
                  features: ["Job Satisfaction", "Management Feedback", "Workplace Culture", "Career Development"],
                  benefits: ["Improve Retention", "Boost Morale", "Enhance Culture", "Identify Issues"]
                },
                {
                  type: "Event Feedback Forms",
                  description: "Collect attendee feedback about events, conferences, workshops, and meetings",
                  icon: "🎪",
                  features: ["Event Rating", "Speaker Feedback", "Venue Assessment", "Future Suggestions"],
                  benefits: ["Improve Future Events", "Speaker Selection", "Venue Decisions", "Content Planning"]
                },
                {
                  type: "Website Feedback Forms",
                  description: "Get user feedback about website usability, design, and user experience",
                  icon: "💻",
                  features: ["Usability Rating", "Design Feedback", "Navigation Issues", "Feature Requests"],
                  benefits: ["Improve UX", "Fix Bugs", "Enhance Design", "Add Features"]
                },
                {
                  type: "Product Feedback Forms",
                  description: "Collect detailed feedback about specific products or features from users",
                  icon: "📦",
                  features: ["Product Rating", "Feature Feedback", "Bug Reports", "Enhancement Ideas"],
                  benefits: ["Product Development", "Quality Improvement", "Feature Prioritization", "User Satisfaction"]
                },
                {
                  type: "Training Feedback Forms",
                  description: "Evaluate training programs, courses, and educational content effectiveness",
                  icon: "📚",
                  features: ["Content Quality", "Instructor Rating", "Learning Outcomes", "Course Improvements"],
                  benefits: ["Improve Training", "Better Instructors", "Enhanced Content", "Learning Effectiveness"]
                }
              ].map((formType, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                  <div className="text-4xl mb-4">{formType.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{formType.type}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{formType.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Key Features:</p>
                      <div className="grid grid-cols-2 gap-1">
                        {formType.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Benefits:</p>
                      <div className="grid grid-cols-2 gap-1">
                        {formType.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback Form Maker Interface */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-yellow-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Make Feedback Forms with Advanced Rating Systems
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Feedback Form Maker</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Feedback Type</label>
                      <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Customer Feedback</option>
                        <option>Employee Survey</option>
                        <option>Product Review</option>
                        <option>Event Feedback</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Rating System</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="radio" name="rating" defaultChecked className="mr-2" />
                          <span className="text-sm">5-Star Rating ⭐⭐⭐⭐⭐</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="rating" className="mr-2" />
                          <span className="text-sm">1-10 Scale (1️⃣ to 🔟)</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="rating" className="mr-2" />
                          <span className="text-sm">Emoji Rating 😞😐😊</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="rating" className="mr-2" />
                          <span className="text-sm">Thumbs Up/Down 👍👎</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Feedback Categories</label>
                      <div className="space-y-2">
                        {[
                          { category: 'Overall Satisfaction', checked: true },
                          { category: 'Product Quality', checked: true },
                          { category: 'Customer Service', checked: true },
                          { category: 'Value for Money', checked: false },
                          { category: 'Delivery/Shipping', checked: false },
                          { category: 'Website Experience', checked: false }
                        ].map((item, index) => (
                          <label key={index} className="flex items-center">
                            <input type="checkbox" defaultChecked={item.checked} className="mr-2" />
                            <span className="text-sm">{item.category}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Additional Options</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Include comment box</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Request contact information</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Anonymous feedback option</span>
                        </label>
                      </div>
                    </div>
                    <button className="w-full bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition-colors">
                      🔄 Make Feedback Form
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Customer Feedback Form Preview</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-center mb-6">
                    <h4 className="text-xl font-bold text-gray-900">We Value Your Feedback</h4>
                    <p className="text-gray-600">Help us improve by sharing your experience</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Overall Satisfaction</label>
                      <div className="flex justify-center space-x-2">
                        {[1,2,3,4,5].map((star) => (
                          <button key={star} className="text-2xl hover:text-yellow-400 transition-colors">
                            ⭐
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Product Quality</label>
                      <div className="flex justify-center space-x-2">
                        {[1,2,3,4,5].map((star) => (
                          <button key={star} className="text-2xl hover:text-yellow-400 transition-colors">
                            ⭐
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Customer Service</label>
                      <div className="flex justify-center space-x-2">
                        {[1,2,3,4,5].map((star) => (
                          <button key={star} className="text-2xl hover:text-yellow-400 transition-colors">
                            ⭐
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Additional Comments</label>
                      <textarea className="w-full p-3 border border-gray-300 rounded h-20" placeholder="Tell us more about your experience..."></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Would you recommend us to others?</label>
                      <div className="flex justify-center space-x-4">
                        <button className="text-3xl hover:scale-110 transition-transform">👍</button>
                        <button className="text-3xl hover:scale-110 transition-transform">👎</button>
                      </div>
                    </div>
                    
                    <button className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700 transition-colors font-semibold">
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Analytics */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Powerful Feedback Analytics & Insights
            </h2>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-orange-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-orange-600">4.7/5</div>
                  <div className="text-gray-700">Average Rating</div>
                </div>
                <div className="bg-yellow-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-yellow-600">2,847</div>
                  <div className="text-gray-700">Total Responses</div>
                </div>
                <div className="bg-green-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-green-600">89%</div>
                  <div className="text-gray-700">Satisfaction Rate</div>
                </div>
                <div className="bg-blue-100 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600">94%</div>
                  <div className="text-gray-700">Would Recommend</div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Rating Distribution</h3>
                  <div className="space-y-3">
                    {[
                      { stars: '5 Stars', percentage: 67, color: 'bg-green-500' },
                      { stars: '4 Stars', percentage: 22, color: 'bg-blue-500' },
                      { stars: '3 Stars', percentage: 8, color: 'bg-yellow-500' },
                      { stars: '2 Stars', percentage: 2, color: 'bg-orange-500' },
                      { stars: '1 Star', percentage: 1, color: 'bg-red-500' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-16 text-sm text-gray-600">{item.stars}</div>
                        <div className="flex-1 bg-gray-200 rounded-full h-4 mx-3">
                          <div className={`${item.color} h-4 rounded-full`} style={{width: `${item.percentage}%`}}></div>
                        </div>
                        <div className="w-12 text-sm font-medium text-gray-900">{item.percentage}%</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Feedback</h3>
                  <div className="space-y-3">
                    {[
                      { rating: 5, comment: 'Excellent service and fast delivery!', time: '2 hours ago' },
                      { rating: 4, comment: 'Good product, minor packaging issues', time: '5 hours ago' },
                      { rating: 5, comment: 'Outstanding customer support team', time: '1 day ago' },
                      { rating: 3, comment: 'Average experience, room for improvement', time: '2 days ago' }
                    ].map((feedback, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className={`text-sm ${i < feedback.rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                            ))}
                          </div>
                          <div className="text-xs text-gray-500">{feedback.time}</div>
                        </div>
                        <div className="text-sm text-gray-700">{feedback.comment}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Form Features */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-yellow-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced Feedback Form Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Multiple Rating Systems",
                  description: "Choose from star ratings, numeric scales, emoji reactions, or thumbs up/down systems.",
                  icon: "⭐"
                },
                {
                  title: "Anonymous Feedback",
                  description: "Allow anonymous submissions to encourage honest feedback without fear of repercussions.",
                  icon: "🕶️"
                },
                {
                  title: "Conditional Logic",
                  description: "Show different questions based on ratings or previous answers for personalized feedback.",
                  icon: "🔀"
                },
                {
                  title: "Real-time Analytics",
                  description: "View feedback analytics in real-time with charts, graphs, and satisfaction metrics.",
                  icon: "📊"
                },
                {
                  title: "Sentiment Analysis",
                  description: "Automatically analyze text feedback to understand sentiment and emotional tone.",
                  icon: "🎭"
                },
                {
                  title: "Follow-up Actions",
                  description: "Automatically trigger follow-up emails or actions based on feedback ratings.",
                  icon: "🔄"
                },
                {
                  title: "Multi-language Support",
                  description: "Create feedback forms in multiple languages to reach global audiences.",
                  icon: "🌍"
                },
                {
                  title: "Export & Integration",
                  description: "Export feedback data or integrate with CRM, helpdesk, and analytics tools.",
                  icon: "📤"
                },
                {
                  title: "Mobile Optimized",
                  description: "All feedback forms work perfectly on mobile devices for maximum response rates.",
                  icon: "📱"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Feedback Form Maker FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "What types of feedback forms can I make?",
                  a: "You can make customer feedback forms, employee surveys, product reviews, event feedback, website usability forms, training evaluations, and any other type of feedback collection form you need."
                },
                {
                  q: "Can I customize the rating systems in my feedback forms?",
                  a: "Yes! Choose from star ratings (1-5), numeric scales (1-10), emoji reactions, thumbs up/down, or create custom rating systems that fit your specific feedback needs."
                },
                {
                  q: "How do I analyze the feedback I collect?",
                  a: "Our feedback form maker includes built-in analytics with charts, graphs, average ratings, sentiment analysis, and detailed reports. You can also export data for further analysis."
                },
                {
                  q: "Can I make anonymous feedback forms?",
                  a: "Absolutely! Anonymous feedback options encourage honest responses. You can make forms completely anonymous or give respondents the choice to provide their contact information."
                },
                {
                  q: "Do feedback forms work on mobile devices?",
                  a: "Yes! All feedback forms are fully responsive and optimized for mobile devices, ensuring high response rates from users on smartphones and tablets."
                },
                {
                  q: "Can I follow up with people who provide feedback?",
                  a: "Yes! You can collect contact information (when not anonymous) and set up automatic follow-up emails based on feedback ratings or responses."
                },
                {
                  q: "How do I encourage more people to provide feedback?",
                  a: "Keep forms short, offer incentives, make them mobile-friendly, send at the right time, and clearly explain how the feedback will be used to improve their experience."
                },
                {
                  q: "Can I integrate feedback forms with other tools?",
                  a: "Yes! Integrate with CRM systems, helpdesk software, email marketing tools, and analytics platforms to streamline your feedback management process."
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
        <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Collecting Valuable Feedback Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Make professional feedback forms that help you understand your customers, improve your products, 
              and grow your business. Start collecting insights that matter.
            </p>
            <Link 
              href="/feedback-maker" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Make Your First Feedback Form Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}