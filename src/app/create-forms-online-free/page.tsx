import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Create Forms Online Free - Build Professional Web Forms | FastSubmit',
  description: 'Create professional forms online for free. Build contact forms, surveys, registrations online without coding. Easy online form creation with instant publishing and sharing.',
  keywords: 'create forms online free, build forms online, make forms online, online form creation, create web forms free, build contact forms online, online form maker',
  openGraph: {
    title: 'Create Forms Online Free - Build Professional Web Forms',
    description: 'Create professional forms online for free. Build contact forms, surveys, registrations online without coding. Easy online form creation with instant publishing.',
    type: 'website',
    url: 'https://fastsubmit.app/create-forms-online-free',
    images: [
      {
        url: 'https://fastsubmit.app/og-create-forms-online.jpg',
        width: 1200,
        height: 630,
        alt: 'Create Forms Online Free - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create Forms Online Free - Build Professional Web Forms',
    description: 'Create professional forms online for free. No coding required, instant publishing.',
    images: ['https://fastsubmit.app/og-create-forms-online.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/create-forms-online-free'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'FastSubmit Online Form Creator',
  description: 'Free online platform for creating professional web forms without coding knowledge',
  url: 'https://fastsubmit.app/create-forms-online-free',
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
    reviewCount: '24789'
  },
  featureList: [
    'Online Form Creation',
    'Free Forever',
    'No Coding Required',
    'Instant Publishing',
    'Professional Templates',
    'Mobile Responsive'
  ]
}

export default function CreateFormsOnlineFreePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Create Forms Online Free
                <span className="block text-teal-600">Build Professional Web Forms</span>
                <span className="block text-blue-600">In Minutes, Not Hours</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create professional forms online completely free. Build contact forms, surveys, 
                registrations, and more with our easy online form creator. No coding required, 
                no downloads needed - just create, customize, and publish instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/create-online" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Create Forms Online Now
                </Link>
                <Link 
                  href="/online-templates" 
                  className="border-2 border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Browse Online Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Online Creation Process */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              How to Create Forms Online (Free & Easy)
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Choose Your Form Type",
                  description: "Select from contact forms, surveys, registrations, or start with a blank form. Our online creator has templates for every need.",
                  icon: "🎯",
                  action: "Browse Templates Online"
                },
                {
                  step: "2",
                  title: "Create & Customize Online",
                  description: "Add fields, customize design, set up notifications - all online in your browser. See changes in real-time as you create.",
                  icon: "🛠️",
                  action: "Design Your Form"
                },
                {
                  step: "3",
                  title: "Publish & Share Instantly",
                  description: "Publish your form online with one click. Get a shareable link immediately or embed it on your website.",
                  icon: "🚀",
                  action: "Go Live Instantly"
                }
              ].map((step, index) => (
                <div key={index} className="text-center bg-gray-50 p-8 rounded-2xl">
                  <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-lg font-medium">
                    {step.action}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Types You Can Create Online */}
        <section className="py-16 px-4 bg-gradient-to-r from-teal-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Forms You Can Create Online (All Free)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  type: "Contact Forms",
                  description: "Create professional contact forms online for your website or business",
                  icon: "📧",
                  features: ["Name & Email Fields", "Message Area", "Phone Number", "Company Info"],
                  users: "125,000+"
                },
                {
                  type: "Survey Forms",
                  description: "Build comprehensive surveys online to gather feedback and insights",
                  icon: "📊",
                  features: ["Multiple Choice", "Rating Scales", "Text Responses", "Logic Branching"],
                  users: "89,000+"
                },
                {
                  type: "Registration Forms",
                  description: "Create event and user registration forms online with ease",
                  icon: "📝",
                  features: ["Personal Details", "Event Selection", "Payment Options", "Confirmations"],
                  users: "67,000+"
                },
                {
                  type: "Feedback Forms",
                  description: "Build customer feedback forms online to improve your services",
                  icon: "💬",
                  features: ["Rating Systems", "Comment Boxes", "Category Selection", "Follow-up"],
                  users: "78,000+"
                },
                {
                  type: "Order Forms",
                  description: "Create online order forms for products and services",
                  icon: "🛒",
                  features: ["Product Selection", "Quantity Fields", "Pricing", "Shipping Info"],
                  users: "45,000+"
                },
                {
                  type: "Application Forms",
                  description: "Build job and school application forms online",
                  icon: "📄",
                  features: ["Personal Info", "Experience", "File Uploads", "References"],
                  users: "34,000+"
                }
              ].map((formType, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{formType.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{formType.type}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{formType.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Common Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {formType.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="bg-teal-100 text-teal-800 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {formType.users} created online
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Create Forms Online */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Why Create Forms Online vs Offline?
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-teal-50 p-8 rounded-2xl border border-teal-200">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-2xl font-bold text-teal-700">Create Forms Online</h3>
                  <p className="text-teal-600">FastSubmit Approach</p>
                </div>
                <ul className="space-y-4">
                  {[
                    "✅ Access from anywhere with internet",
                    "✅ No software installation required",
                    "✅ Automatic updates and new features",
                    "✅ Real-time collaboration possible",
                    "✅ Instant publishing and sharing",
                    "✅ Cloud storage and backup",
                    "✅ Cross-device compatibility",
                    "✅ Always latest version available"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="mr-3 text-teal-600">{feature.split(' ')[0]}</span>
                      <span>{feature.substring(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-red-50 p-8 rounded-2xl border border-red-200 opacity-75">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold text-red-700">Offline Form Creation</h3>
                  <p className="text-red-600">Traditional Method</p>
                </div>
                <ul className="space-y-4">
                  {[
                    "❌ Limited to specific computers",
                    "❌ Requires software downloads",
                    "❌ Manual updates and maintenance",
                    "❌ No collaboration features",
                    "❌ Complex publishing process",
                    "❌ Risk of data loss",
                    "❌ Platform compatibility issues",
                    "❌ Version control problems"
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

        {/* Online Creation Benefits */}
        <section className="py-16 px-4 bg-gradient-to-r from-teal-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Benefits of Creating Forms Online
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Instant Access",
                  description: "Start creating forms immediately in your browser. No downloads or installations needed.",
                  icon: "⚡",
                  benefit: "0 setup time"
                },
                {
                  title: "Work Anywhere",
                  description: "Create forms from any device with internet. Home, office, or on the go.",
                  icon: "🌍",
                  benefit: "100% mobility"
                },
                {
                  title: "Real-time Preview",
                  description: "See exactly how your form will look as you create it online.",
                  icon: "👁️",
                  benefit: "WYSIWYG editing"
                },
                {
                  title: "Instant Publishing",
                  description: "Publish forms online immediately. Get shareable links in seconds.",
                  icon: "🚀",
                  benefit: "Immediate results"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                    {benefit.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Success Stories: Creating Forms Online
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Jessica Martinez",
                  role: "Event Planner",
                  story: "I needed to create registration forms for 5 different events quickly. Creating them online saved me hours compared to traditional methods.",
                  result: "5 forms created in 30 minutes",
                  avatar: "👩‍💼",
                  time: "Online creation"
                },
                {
                  name: "Tom Wilson",
                  role: "Small Business Owner",
                  story: "Creating contact forms online for my clients' websites is so much faster. I can create, customize, and deploy forms during client meetings.",
                  result: "3x faster client delivery",
                  avatar: "👨‍💻",
                  time: "Real-time creation"
                },
                {
                  name: "Rachel Chen",
                  role: "Marketing Manager",
                  story: "Our team creates survey forms online collaboratively. Multiple people can work on the same form simultaneously from different locations.",
                  result: "Team collaboration enabled",
                  avatar: "👩‍🎨",
                  time: "Collaborative creation"
                }
              ].map((story, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-3">{story.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{story.name}</div>
                      <div className="text-gray-600 text-sm">{story.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-4 leading-relaxed">"{story.story}"</blockquote>
                  <div className="space-y-2">
                    <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
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

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Creating Forms Online FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Is it really free to create forms online?",
                  a: "Yes! Creating forms online with FastSubmit is completely free. No hidden costs, no credit card required, no trial periods. Create unlimited forms online forever."
                },
                {
                  q: "Do I need technical skills to create forms online?",
                  a: "Not at all! Our online form creator is designed for everyone. If you can use a web browser, you can create professional forms online in minutes."
                },
                {
                  q: "Can I create forms online from my mobile device?",
                  a: "Absolutely! Our online form creator works on smartphones, tablets, and desktop computers. Create forms anywhere with an internet connection."
                },
                {
                  q: "How long does it take to create a form online?",
                  a: "Most users create their first form online in under 5 minutes. Complex forms with multiple pages might take 15-20 minutes to create online."
                },
                {
                  q: "Can I collaborate with others when creating forms online?",
                  a: "Yes! Share your form creation workspace with team members for real-time collaboration. Multiple people can work on the same form online simultaneously."
                },
                {
                  q: "What happens to forms I create online if I lose internet?",
                  a: "Your forms are automatically saved to the cloud as you create them online. If you lose connection, your work is preserved and accessible when you reconnect."
                },
                {
                  q: "Can I create different types of forms online?",
                  a: "Yes! Create any type of form online including contact forms, surveys, registrations, applications, orders, feedback forms, and more."
                },
                {
                  q: "How do I share forms I create online?",
                  a: "Once you create a form online, you get an instant shareable link. You can also embed the form on websites or share via email and social media."
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
        <section className="py-16 px-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Create Forms Online?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join over 200,000 users who create professional forms online with FastSubmit. 
              Start creating your first form online in seconds - no downloads required!
            </p>
            <Link 
              href="/create-online" 
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Create Your First Form Online Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}