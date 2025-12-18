import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Free Registration Form Builder - Build Registration Forms Online | FastSubmit',
  description: 'Build professional registration forms for free. Create event registration, user signup, and membership forms with our easy registration form builder. No coding required.',
  keywords: 'free registration form builder, registration form creator, event registration form, user registration form, signup form builder, membership form builder',
  openGraph: {
    title: 'Free Registration Form Builder - Build Registration Forms Online',
    description: 'Build professional registration forms for free. Create event registration, user signup, and membership forms with our easy registration form builder.',
    type: 'website',
    url: 'https://fastsubmit.app/free-registration-form-builder',
    images: [
      {
        url: 'https://fastsubmit.app/og-registration-form-builder.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Registration Form Builder - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Registration Form Builder - Build Registration Forms Online',
    description: 'Build professional registration forms for free. No coding required, unlimited registrations.',
    images: ['https://fastsubmit.app/og-registration-form-builder.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-registration-form-builder'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Registration Form Builder',
  description: 'Free registration form builder for creating event registration, user signup, and membership forms',
  url: 'https://fastsubmit.app/free-registration-form-builder',
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
    reviewCount: '28934'
  },
  featureList: [
    'Event Registration Forms',
    'User Signup Forms',
    'Membership Registration',
    'Payment Integration',
    'Email Confirmations',
    'Unlimited Registrations'
  ]
}

export default function FreeRegistrationFormBuilderPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Registration Form Builder
                <span className="block text-green-600">Build Registration Forms</span>
                <span className="block text-emerald-600">For Any Event or Service</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Build professional registration forms for events, courses, memberships, and more. 
                Our free registration form builder includes payment processing, email confirmations, 
                and unlimited registrations. Perfect for event organizers and businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/registration-builder" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Build Registration Form
                </Link>
                <Link 
                  href="/registration-templates" 
                  className="border-2 border-gray-300 hover:border-green-600 text-gray-700 hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Registration Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form Types */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Registration Forms You Can Build
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  type: "Event Registration",
                  description: "Build registration forms for conferences, workshops, webinars, and events",
                  icon: "🎪",
                  features: ["Event Details", "Ticket Selection", "Payment Processing", "Confirmation Emails"],
                  examples: ["Conference Registration", "Workshop Signup", "Webinar Registration", "Meetup RSVP"]
                },
                {
                  type: "Course Registration",
                  description: "Create registration forms for online courses, training programs, and classes",
                  icon: "📚",
                  features: ["Course Selection", "Schedule Preferences", "Prerequisites Check", "Payment Plans"],
                  examples: ["Online Course Signup", "Training Registration", "Class Enrollment", "Certification Program"]
                },
                {
                  type: "Membership Registration",
                  description: "Build membership signup forms for organizations, clubs, and communities",
                  icon: "👥",
                  features: ["Membership Tiers", "Personal Information", "Payment Options", "Terms Agreement"],
                  examples: ["Gym Membership", "Club Registration", "Association Signup", "Community Access"]
                },
                {
                  type: "User Account Registration",
                  description: "Create user signup forms for websites, apps, and online platforms",
                  icon: "👤",
                  features: ["Username/Email", "Password Creation", "Profile Setup", "Email Verification"],
                  examples: ["Website Signup", "App Registration", "Platform Access", "User Onboarding"]
                },
                {
                  type: "Service Registration",
                  description: "Build registration forms for services, appointments, and consultations",
                  icon: "🔧",
                  features: ["Service Selection", "Time Slots", "Contact Information", "Special Requirements"],
                  examples: ["Appointment Booking", "Service Request", "Consultation Signup", "Maintenance Registration"]
                },
                {
                  type: "Volunteer Registration",
                  description: "Create volunteer signup forms for nonprofits and community organizations",
                  icon: "❤️",
                  features: ["Volunteer Roles", "Availability", "Skills Assessment", "Background Check"],
                  examples: ["Volunteer Signup", "Community Service", "Event Helpers", "Nonprofit Registration"]
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
                          <span key={featureIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Examples:</p>
                      <div className="text-xs text-gray-600">
                        {formType.examples.join(', ')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form Builder Interface */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Build Registration Forms Visually
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Registration Form Builder</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Registration Type</label>
                      <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Event Registration</option>
                        <option>Course Registration</option>
                        <option>Membership Signup</option>
                        <option>User Account</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Event/Service Name</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Annual Conference 2024" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Registration Fields</label>
                      <div className="space-y-2">
                        {[
                          { field: 'Personal Information', checked: true },
                          { field: 'Contact Details', checked: true },
                          { field: 'Ticket/Package Selection', checked: true },
                          { field: 'Dietary Preferences', checked: false },
                          { field: 'Emergency Contact', checked: false },
                          { field: 'Payment Information', checked: true }
                        ].map((item, index) => (
                          <label key={index} className="flex items-center">
                            <input type="checkbox" defaultChecked={item.checked} className="mr-2" />
                            <span className="text-sm">{item.field}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Payment Options</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Credit Card Payment</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">PayPal Payment</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Bank Transfer</span>
                        </label>
                      </div>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors">
                      🔄 Build Registration Form
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Registration Form Preview</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900">Annual Conference 2024</h4>
                    <p className="text-gray-600">Register now to secure your spot!</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="john@example.com" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" className="w-full p-2 border border-gray-300 rounded" placeholder="+1 (555) 123-4567" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ticket Type *</label>
                      <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Early Bird - $299</option>
                        <option>Regular - $399</option>
                        <option>VIP - $599</option>
                        <option>Student - $99</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company/Organization</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Your company" />
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-medium text-gray-900 mb-2">Registration Summary</h5>
                      <div className="flex justify-between text-sm">
                        <span>Early Bird Ticket</span>
                        <span>$299.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Processing Fee</span>
                        <span>$9.99</span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>$308.99</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors font-semibold">
                      Complete Registration & Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced Registration Form Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Payment Processing",
                  description: "Accept payments directly through your registration forms with secure payment gateways.",
                  icon: "💳"
                },
                {
                  title: "Email Confirmations",
                  description: "Automatically send confirmation emails with registration details and receipts.",
                  icon: "📧"
                },
                {
                  title: "Capacity Management",
                  description: "Set registration limits and automatically close registration when capacity is reached.",
                  icon: "📊"
                },
                {
                  title: "Early Bird Pricing",
                  description: "Create time-based pricing with early bird discounts and regular pricing tiers.",
                  icon: "🐦"
                },
                {
                  title: "Group Registration",
                  description: "Allow multiple people to register together with group discounts and bulk pricing.",
                  icon: "👥"
                },
                {
                  title: "Waitlist Management",
                  description: "Automatically manage waitlists when events reach capacity and notify when spots open.",
                  icon: "⏳"
                },
                {
                  title: "Custom Fields",
                  description: "Add custom fields for specific information like dietary restrictions or t-shirt sizes.",
                  icon: "📝"
                },
                {
                  title: "Registration Analytics",
                  description: "Track registration numbers, conversion rates, and revenue with detailed analytics.",
                  icon: "📈"
                },
                {
                  title: "Mobile Optimization",
                  description: "All registration forms are fully optimized for mobile devices and tablets.",
                  icon: "📱"
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
        <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Registration Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "TechConf 2024",
                  organizer: "Sarah Johnson, Event Director",
                  story: "Our registration form handled 5,000+ registrations seamlessly. The payment processing and email confirmations worked flawlessly.",
                  result: "5,247 registrations",
                  revenue: "$1.2M revenue",
                  avatar: "👩‍💼"
                },
                {
                  name: "Online Marketing Course",
                  organizer: "Mike Chen, Course Creator",
                  story: "The course registration form with payment tiers helped us launch successfully. Students love the smooth registration process.",
                  result: "1,834 students enrolled",
                  revenue: "$367K revenue",
                  avatar: "👨‍🏫"
                },
                {
                  name: "Fitness Membership",
                  organizer: "Lisa Rodriguez, Gym Owner",
                  story: "Our membership registration form streamlined the signup process. New members can register and pay online 24/7.",
                  result: "892 new members",
                  revenue: "$89K monthly",
                  avatar: "👩‍💪"
                }
              ].map((story, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-3">{story.avatar}</div>
                    <div>
                      <div className="font-bold text-gray-900">{story.name}</div>
                      <div className="text-gray-600 text-sm">{story.organizer}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-4 leading-relaxed">"{story.story}"</blockquote>
                  <div className="space-y-2">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {story.result}
                    </div>
                    <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      {story.revenue}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Registration Form Builder FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Can I accept payments through my registration forms?",
                  a: "Yes! Our registration form builder integrates with secure payment processors like Stripe and PayPal. You can accept credit cards, digital wallets, and other payment methods directly through your forms."
                },
                {
                  q: "How do I set registration limits for my events?",
                  a: "You can easily set capacity limits in the form builder. When the limit is reached, the form automatically stops accepting new registrations and can display a 'sold out' message or waitlist option."
                },
                {
                  q: "Can I create different pricing tiers for registration?",
                  a: "Absolutely! Create multiple ticket types with different prices, early bird discounts, group rates, and student pricing. The form automatically calculates totals and processes payments."
                },
                {
                  q: "Do registrants receive confirmation emails automatically?",
                  a: "Yes! Confirmation emails are sent automatically upon successful registration. You can customize the email content, include event details, and attach tickets or receipts."
                },
                {
                  q: "Can I collect custom information specific to my event?",
                  a: "Yes! Add custom fields for any information you need like dietary restrictions, t-shirt sizes, accessibility requirements, or special requests. All data is collected and organized for you."
                },
                {
                  q: "Is the registration form mobile-friendly?",
                  a: "All registration forms are fully responsive and optimized for mobile devices. Registrants can easily complete the process on smartphones and tablets."
                },
                {
                  q: "Can I track registration analytics and revenue?",
                  a: "Yes! View real-time registration numbers, conversion rates, revenue totals, and detailed analytics. Export data for further analysis or integration with other tools."
                },
                {
                  q: "What happens if someone needs to cancel their registration?",
                  a: "You can enable cancellation options and set refund policies. The system can handle cancellations automatically or require manual approval based on your preferences."
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
        <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Building Registration Forms Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of event organizers and businesses using FastSubmit to handle their registrations. 
              Build your first registration form in minutes and start accepting registrations immediately.
            </p>
            <Link 
              href="/registration-builder" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Build Registration Form Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}