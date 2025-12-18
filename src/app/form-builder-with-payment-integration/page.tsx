import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Form Builder with Payment Integration - Accept Payments in Forms | FastSubmit',
  description: 'Create forms that accept payments seamlessly. Integrate Stripe, PayPal, and other payment processors. Perfect for orders, donations, registrations, and subscriptions.',
  keywords: 'form builder with payment integration, payment form builder, stripe form integration, paypal form builder, payment collection form, donation form builder',
  openGraph: {
    title: 'Form Builder with Payment Integration - Accept Payments in Forms',
    description: 'Create forms that accept payments seamlessly. Integrate with Stripe, PayPal, and other payment processors for secure transactions.',
    type: 'website',
    url: 'https://fastsubmit.app/form-builder-with-payment-integration',
    images: [
      {
        url: 'https://fastsubmit.app/og-payment-form-builder.jpg',
        width: 1200,
        height: 630,
        alt: 'Form Builder with Payment Integration - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form Builder with Payment Integration - Accept Payments in Forms',
    description: 'Create forms with secure payment processing. Stripe, PayPal, subscriptions, and more.',
    images: ['https://fastsubmit.app/og-payment-form-builder.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/form-builder-with-payment-integration'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Payment Form Builder',
  description: 'Advanced form builder with integrated payment processing for Stripe, PayPal, and other payment gateways',
  url: 'https://fastsubmit.app/form-builder-with-payment-integration',
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
    reviewCount: '19834'
  },
  featureList: [
    'Stripe Integration',
    'PayPal Integration',
    'Subscription Billing',
    'Tax Calculation',
    'Refund Management',
    'PCI Compliance'
  ]
}

export default function FormBuilderWithPaymentIntegrationPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Form Builder with Payment Integration
                <span className="block text-purple-600">Accept Payments Seamlessly</span>
                <span className="block text-green-600">Secure & PCI Compliant</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create forms that collect payments instantly. Integrate with Stripe, PayPal, Square, 
                and other payment processors. Perfect for orders, donations, event registrations, 
                subscriptions, and any form that requires payment collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/payment-form-builder" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Build Payment Form
                </Link>
                <Link 
                  href="/payment-templates" 
                  className="border-2 border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Payment Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Form Use Cases */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Payment Form Use Cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  useCase: "Product Orders",
                  description: "Sell products directly through forms with inventory management and shipping",
                  icon: "🛒",
                  paymentTypes: ["One-time payments", "Product variations", "Quantity pricing", "Shipping costs"],
                  features: ["Inventory tracking", "Tax calculation", "Discount codes", "Order management"]
                },
                {
                  useCase: "Event Registration",
                  description: "Collect registration fees for events, workshops, and conferences",
                  icon: "🎫",
                  paymentTypes: ["Early bird pricing", "Group discounts", "Multiple ticket types", "Add-on services"],
                  features: ["Capacity limits", "Waitlist management", "Refund processing", "Check-in system"]
                },
                {
                  useCase: "Donations & Fundraising",
                  description: "Accept donations with custom amounts and recurring giving options",
                  icon: "💝",
                  paymentTypes: ["Custom amounts", "Recurring donations", "Memorial gifts", "Campaign goals"],
                  features: ["Donor management", "Tax receipts", "Campaign tracking", "Thank you emails"]
                },
                {
                  useCase: "Service Bookings",
                  description: "Accept payments for consultations, appointments, and professional services",
                  icon: "📅",
                  paymentTypes: ["Hourly rates", "Package deals", "Deposits", "Cancellation fees"],
                  features: ["Calendar integration", "Booking management", "Reminder emails", "Rescheduling"]
                },
                {
                  useCase: "Subscription Services",
                  description: "Set up recurring billing for memberships and subscription-based services",
                  icon: "🔄",
                  paymentTypes: ["Monthly billing", "Annual plans", "Trial periods", "Plan upgrades"],
                  features: ["Subscription management", "Proration", "Dunning management", "Customer portal"]
                },
                {
                  useCase: "Course Enrollment",
                  description: "Collect tuition and fees for online courses and educational programs",
                  icon: "🎓",
                  paymentTypes: ["Course fees", "Payment plans", "Certification costs", "Material fees"],
                  features: ["Student management", "Progress tracking", "Certificate generation", "Refund policies"]
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.useCase}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Payment Options:</p>
                      <div className="grid grid-cols-1 gap-1">
                        {useCase.paymentTypes.map((type, typeIndex) => (
                          <span key={typeIndex} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Key Features:</p>
                      <div className="text-xs text-gray-600">
                        {useCase.features.join(', ')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Integration Builder */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-green-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced Payment Form Builder
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Payment Configuration</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Payment Processor</label>
                      <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Stripe</option>
                        <option>PayPal</option>
                        <option>Square</option>
                        <option>Authorize.Net</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Payment Type</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="radio" name="paymentType" defaultChecked className="mr-2" />
                          <span className="text-sm">One-time payment</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="paymentType" className="mr-2" />
                          <span className="text-sm">Recurring subscription</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="paymentType" className="mr-2" />
                          <span className="text-sm">Custom amount (donations)</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Products/Services</label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">Premium Plan - $99/month</span>
                          <button className="text-red-600 text-xs">Remove</button>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">Basic Plan - $49/month</span>
                          <button className="text-red-600 text-xs">Remove</button>
                        </div>
                        <button className="w-full p-2 border border-dashed border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
                          + Add Product/Service
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Payment Features</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Tax calculation</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Discount codes</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Shipping charges</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Payment receipts</span>
                        </label>
                      </div>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
                      🔄 Configure Payment
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Payment Form Preview</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900">Complete Your Purchase</h4>
                    <p className="text-gray-600">Secure payment processing</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Select Plan</h5>
                      <div className="space-y-3">
                        <label className="flex items-center p-3 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer">
                          <input type="radio" name="plan" className="mr-3" />
                          <div className="flex-1">
                            <div className="font-medium">Premium Plan</div>
                            <div className="text-sm text-gray-600">Full access with priority support</div>
                          </div>
                          <div className="font-bold text-purple-600">$99/mo</div>
                        </label>
                        <label className="flex items-center p-3 border border-purple-300 bg-purple-50 rounded cursor-pointer">
                          <input type="radio" name="plan" defaultChecked className="mr-3" />
                          <div className="flex-1">
                            <div className="font-medium">Basic Plan</div>
                            <div className="text-sm text-gray-600">Essential features for getting started</div>
                          </div>
                          <div className="font-bold text-purple-600">$49/mo</div>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Discount Code (Optional)</label>
                      <div className="flex">
                        <input type="text" className="flex-1 p-2 border border-gray-300 rounded-l" placeholder="Enter code" />
                        <button className="bg-gray-600 text-white px-4 py-2 rounded-r hover:bg-gray-700 transition-colors">
                          Apply
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-medium text-gray-900 mb-3">Order Summary</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Basic Plan (Monthly)</span>
                          <span>$49.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax (8.5%)</span>
                          <span>$4.17</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                          <span>Discount (SAVE20)</span>
                          <span>-$9.80</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span>$43.37/mo</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Payment Information</h5>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                          <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="MM/YY" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-xs text-gray-600">
                      <span className="mr-2">🔒</span>
                      <span>Secured by 256-bit SSL encryption</span>
                    </div>
                    
                    <button className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition-colors font-semibold">
                      Complete Payment - $43.37
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Processors */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Supported Payment Processors
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  processor: "Stripe",
                  description: "Global payment processing with advanced features and developer tools",
                  logo: "💳",
                  features: ["Credit/Debit Cards", "Digital Wallets", "Bank Transfers", "Subscriptions"],
                  countries: "40+ countries"
                },
                {
                  processor: "PayPal",
                  description: "Trusted payment platform with worldwide recognition and buyer protection",
                  logo: "🅿️",
                  features: ["PayPal Balance", "Credit Cards", "Bank Accounts", "PayPal Credit"],
                  countries: "200+ countries"
                },
                {
                  processor: "Square",
                  description: "Comprehensive payment solution for businesses of all sizes",
                  logo: "⬜",
                  features: ["Card Payments", "Digital Receipts", "Inventory Sync", "Analytics"],
                  countries: "US, Canada, UK"
                },
                {
                  processor: "Authorize.Net",
                  description: "Reliable payment gateway with robust fraud protection",
                  logo: "🔐",
                  features: ["Payment Gateway", "Fraud Detection", "Recurring Billing", "Reporting"],
                  countries: "US, Canada, EU"
                }
              ].map((processor, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{processor.logo}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{processor.processor}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{processor.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Payment Methods:</p>
                      <div className="space-y-1">
                        {processor.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="text-xs text-gray-600 flex items-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      <span className="font-medium">Available in:</span> {processor.countries}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Features */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-green-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced Payment Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Subscription Billing",
                  description: "Set up recurring payments with flexible billing cycles and plan management.",
                  icon: "🔄"
                },
                {
                  title: "Tax Calculation",
                  description: "Automatically calculate taxes based on location, product type, and tax rules.",
                  icon: "🧮"
                },
                {
                  title: "Discount Codes",
                  description: "Create and manage discount codes, coupons, and promotional campaigns.",
                  icon: "🎟️"
                },
                {
                  title: "Refund Management",
                  description: "Process full or partial refunds directly from your dashboard.",
                  icon: "💰"
                },
                {
                  title: "Fraud Protection",
                  description: "Advanced fraud detection and prevention to protect your business.",
                  icon: "🛡️"
                },
                {
                  title: "Multi-Currency",
                  description: "Accept payments in multiple currencies with automatic conversion.",
                  icon: "🌍"
                },
                {
                  title: "Payment Analytics",
                  description: "Detailed reporting on revenue, transactions, and payment trends.",
                  icon: "📊"
                },
                {
                  title: "PCI Compliance",
                  description: "Fully PCI DSS compliant payment processing for maximum security.",
                  icon: "🔒"
                },
                {
                  title: "Webhook Integration",
                  description: "Real-time payment notifications and automated workflow triggers.",
                  icon: "🔗"
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

        {/* Success Stories */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Payment Integration Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  business: "EventPro Solutions",
                  role: "Amanda Foster, Event Manager",
                  story: "Our event registration forms now process $50K+ monthly. The integrated payment system handles early bird pricing, group discounts, and refunds seamlessly.",
                  result: "$50K+ monthly",
                  conversion: "85% completion rate",
                  avatar: "👩‍💼"
                },
                {
                  business: "FitLife Coaching",
                  role: "Carlos Martinez, Fitness Coach",
                  story: "Subscription billing for our coaching programs is automated. Clients love the easy payment process, and we've reduced churn by 40% with flexible billing options.",
                  result: "40% less churn",
                  conversion: "95% payment success",
                  avatar: "👨‍⚕️"
                },
                {
                  business: "Charity Foundation",
                  role: "Emily Chen, Development Director",
                  story: "Our donation forms accept custom amounts and recurring gifts. The transparent fee structure and instant receipts have increased donations by 60%.",
                  result: "60% more donations",
                  conversion: "Monthly recurring gifts",
                  avatar: "👩‍💻"
                }
              ].map((story, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-3">{story.avatar}</div>
                    <div>
                      <div className="font-bold text-gray-900">{story.business}</div>
                      <div className="text-gray-600 text-sm">{story.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-4 leading-relaxed">"{story.story}"</blockquote>
                  <div className="space-y-2">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {story.result}
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {story.conversion}
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
              Payment Integration FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Which payment processors do you support?",
                  a: "We support major payment processors including Stripe, PayPal, Square, Authorize.Net, and more. Each processor offers different features and geographic coverage to meet your specific needs."
                },
                {
                  q: "Are payment transactions secure and PCI compliant?",
                  a: "Yes! All payment processing is fully PCI DSS compliant with end-to-end encryption. Payment data never touches our servers - it goes directly to your chosen payment processor for maximum security."
                },
                {
                  q: "Can I set up recurring subscription payments?",
                  a: "Absolutely! Create subscription plans with flexible billing cycles (weekly, monthly, yearly), trial periods, plan upgrades/downgrades, and automatic dunning management for failed payments."
                },
                {
                  q: "How do taxes and fees get calculated?",
                  a: "Set up automatic tax calculation based on customer location, product type, and your tax rules. Add processing fees, shipping charges, and other costs that calculate dynamically at checkout."
                },
                {
                  q: "Can customers use discount codes and coupons?",
                  a: "Yes! Create percentage or fixed-amount discounts, set expiration dates, usage limits, minimum purchase requirements, and track coupon performance through detailed analytics."
                },
                {
                  q: "How do I handle refunds and chargebacks?",
                  a: "Process full or partial refunds directly from your dashboard. Automatic chargeback notifications help you respond quickly, and detailed transaction records support dispute resolution."
                },
                {
                  q: "What currencies can I accept payments in?",
                  a: "Support for 135+ currencies depending on your payment processor. Automatic currency conversion, local payment methods, and region-specific pricing help you serve global customers."
                },
                {
                  q: "Do I get detailed payment analytics and reporting?",
                  a: "Yes! Comprehensive reporting includes revenue trends, transaction details, payment method performance, geographic data, and custom date ranges. Export data for accounting and analysis."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Accepting Payments Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Build forms that convert visitors into paying customers. Secure payment processing, 
              flexible billing options, and comprehensive analytics. Start collecting payments instantly!
            </p>
            <Link 
              href="/payment-form-builder" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Build Your Payment Form Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}