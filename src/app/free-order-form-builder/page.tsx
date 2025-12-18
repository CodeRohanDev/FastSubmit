import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Free Order Form Builder - Create Online Order Forms | FastSubmit',
  description: 'Build professional order forms for free. Create product order forms, service booking forms, and sales forms with payment processing. Perfect for businesses selling online.',
  keywords: 'free order form builder, order form creator, online order form, product order form, sales form builder, ecommerce order form, payment form builder',
  openGraph: {
    title: 'Free Order Form Builder - Create Online Order Forms',
    description: 'Build professional order forms for free. Create product order forms, service booking forms, and sales forms with payment processing.',
    type: 'website',
    url: 'https://fastsubmit.app/free-order-form-builder',
    images: [
      {
        url: 'https://fastsubmit.app/og-order-form-builder.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Order Form Builder - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Order Form Builder - Create Online Order Forms',
    description: 'Build professional order forms for free. Payment processing, inventory management, automated receipts.',
    images: ['https://fastsubmit.app/og-order-form-builder.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-order-form-builder'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Order Form Builder',
  description: 'Free order form builder for creating product orders, service bookings, and sales forms with payment processing',
  url: 'https://fastsubmit.app/free-order-form-builder',
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
    reviewCount: '15623'
  },
  featureList: [
    'Product Order Forms',
    'Payment Processing',
    'Inventory Management',
    'Automated Receipts',
    'Tax Calculations',
    'Shipping Options'
  ]
}

export default function FreeOrderFormBuilderPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Order Form Builder
                <span className="block text-purple-600">Create Online Order Forms</span>
                <span className="block text-indigo-600">With Payment Processing</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Build professional order forms for your products and services. Accept payments, 
                manage inventory, calculate taxes and shipping, and automate order processing. 
                Perfect for businesses, restaurants, and online stores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/order-builder" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Build Order Form
                </Link>
                <Link 
                  href="/order-templates" 
                  className="border-2 border-gray-300 hover:border-purple-600 text-gray-700 hover:text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Order Form Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Order Form Types */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Order Forms You Can Build
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  type: "Product Order Forms",
                  description: "Create order forms for physical products with inventory management and shipping",
                  icon: "📦",
                  features: ["Product Catalog", "Quantity Selection", "Inventory Tracking", "Shipping Calculator"],
                  examples: ["E-commerce Store", "Retail Products", "Wholesale Orders", "Custom Products"]
                },
                {
                  type: "Service Order Forms",
                  description: "Build order forms for services, consultations, and professional offerings",
                  icon: "🔧",
                  features: ["Service Packages", "Time Slots", "Add-on Services", "Consultation Booking"],
                  examples: ["Consulting Services", "Professional Services", "Maintenance", "Repairs"]
                },
                {
                  type: "Food Order Forms",
                  description: "Create restaurant and food delivery order forms with menu management",
                  icon: "🍕",
                  features: ["Menu Items", "Customizations", "Delivery Options", "Special Instructions"],
                  examples: ["Restaurant Orders", "Catering Services", "Food Delivery", "Meal Plans"]
                },
                {
                  type: "Event Ticket Orders",
                  description: "Build ticket order forms for events, concerts, and entertainment",
                  icon: "🎫",
                  features: ["Ticket Types", "Seating Selection", "Group Discounts", "Event Details"],
                  examples: ["Concert Tickets", "Event Passes", "Workshop Tickets", "Conference Passes"]
                },
                {
                  type: "Subscription Orders",
                  description: "Create subscription and recurring order forms for ongoing services",
                  icon: "🔄",
                  features: ["Subscription Plans", "Billing Cycles", "Trial Periods", "Plan Upgrades"],
                  examples: ["Software Subscriptions", "Membership Plans", "Monthly Boxes", "Service Plans"]
                },
                {
                  type: "Custom Orders",
                  description: "Build custom order forms for unique products or personalized services",
                  icon: "🎨",
                  features: ["Custom Fields", "File Uploads", "Specifications", "Quote Requests"],
                  examples: ["Custom Design", "Personalized Items", "Made-to-Order", "Bespoke Services"]
                }
              ].map((formType, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                  <div className="text-4xl mb-4">{formType.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{formType.type}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{formType.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Features:</p>
                      <div className="grid grid-cols-2 gap-1">
                        {formType.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Use Cases:</p>
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

        {/* Order Form Builder Interface */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Build Order Forms with Advanced Features
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Order Form Builder</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Order Form Type</label>
                      <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Product Order Form</option>
                        <option>Service Order Form</option>
                        <option>Food Order Form</option>
                        <option>Event Tickets</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Products/Services</label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">Premium Package - $299</span>
                          <button className="text-red-600 text-xs">Remove</button>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm">Standard Package - $199</span>
                          <button className="text-red-600 text-xs">Remove</button>
                        </div>
                        <button className="w-full p-2 border border-dashed border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
                          + Add Product/Service
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Payment Options</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Credit Card (Stripe)</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">PayPal</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Bank Transfer</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Cash on Delivery</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Additional Features</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Tax calculation</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Shipping calculator</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Discount codes</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Order confirmation emails</span>
                        </label>
                      </div>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors">
                      🔄 Build Order Form
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Order Form Preview</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold text-gray-900">Place Your Order</h4>
                    <p className="text-gray-600">Select your package and complete your purchase</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Select Package</h5>
                      <div className="space-y-3">
                        <label className="flex items-center p-3 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer">
                          <input type="radio" name="package" className="mr-3" />
                          <div className="flex-1">
                            <div className="font-medium">Premium Package</div>
                            <div className="text-sm text-gray-600">Full-featured solution with premium support</div>
                          </div>
                          <div className="font-bold text-purple-600">$299</div>
                        </label>
                        <label className="flex items-center p-3 border border-gray-300 rounded hover:bg-gray-50 cursor-pointer">
                          <input type="radio" name="package" defaultChecked className="mr-3" />
                          <div className="flex-1">
                            <div className="font-medium">Standard Package</div>
                            <div className="text-sm text-gray-600">Essential features for most users</div>
                          </div>
                          <div className="font-bold text-purple-600">$199</div>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                      <select className="w-full p-2 border border-gray-300 rounded">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>5</option>
                        <option>10</option>
                      </select>
                    </div>
                    
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
                    
                    <div className="bg-gray-50 p-4 rounded">
                      <h5 className="font-medium text-gray-900 mb-3">Order Summary</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Standard Package × 1</span>
                          <span>$199.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax (8.5%)</span>
                          <span>$16.92</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span>$9.99</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total</span>
                          <span>$225.91</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition-colors font-semibold">
                      Complete Order & Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Management Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Complete Order Management System
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Payment Processing",
                  description: "Accept credit cards, PayPal, and other payment methods with secure processing.",
                  icon: "💳"
                },
                {
                  title: "Inventory Management",
                  description: "Track stock levels, set low inventory alerts, and manage product availability.",
                  icon: "📊"
                },
                {
                  title: "Tax Calculation",
                  description: "Automatically calculate taxes based on location, product type, and tax rules.",
                  icon: "🧮"
                },
                {
                  title: "Shipping Calculator",
                  description: "Calculate shipping costs based on weight, dimensions, and destination.",
                  icon: "📦"
                },
                {
                  title: "Order Tracking",
                  description: "Provide customers with order status updates and tracking information.",
                  icon: "🚚"
                },
                {
                  title: "Automated Receipts",
                  description: "Send professional receipts and order confirmations automatically.",
                  icon: "📧"
                },
                {
                  title: "Discount Codes",
                  description: "Create and manage discount codes, coupons, and promotional offers.",
                  icon: "🎟️"
                },
                {
                  title: "Order Analytics",
                  description: "Track sales, revenue, popular products, and customer behavior.",
                  icon: "📈"
                },
                {
                  title: "Customer Management",
                  description: "Manage customer information, order history, and communication.",
                  icon: "👥"
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
        <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Order Form Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  business: "Artisan Bakery",
                  owner: "Maria Santos, Owner",
                  story: "Our online order form increased sales by 300%. Customers love being able to order custom cakes and pastries online with delivery scheduling.",
                  result: "300% sales increase",
                  revenue: "$45K monthly orders",
                  avatar: "👩‍🍳"
                },
                {
                  business: "Tech Consulting",
                  owner: "David Kim, Consultant",
                  story: "The service order form streamlined our booking process. Clients can now select packages, schedule consultations, and pay upfront automatically.",
                  result: "50% more bookings",
                  revenue: "$120K quarterly",
                  avatar: "👨‍💻"
                },
                {
                  business: "Handmade Jewelry",
                  owner: "Lisa Chen, Designer",
                  story: "Custom order forms helped us manage bespoke jewelry orders. Customers upload inspiration photos and specify requirements easily.",
                  result: "200% order volume",
                  revenue: "$25K monthly",
                  avatar: "👩‍🎨"
                }
              ].map((story, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-3">{story.avatar}</div>
                    <div>
                      <div className="font-bold text-gray-900">{story.business}</div>
                      <div className="text-gray-600 text-sm">{story.owner}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-4 leading-relaxed">"{story.story}"</blockquote>
                  <div className="space-y-2">
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {story.result}
                    </div>
                    <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
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
              Order Form Builder FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Can I accept payments through my order forms?",
                  a: "Yes! Our order form builder integrates with secure payment processors like Stripe, PayPal, and Square. Accept credit cards, digital wallets, and other payment methods safely."
                },
                {
                  q: "How do I manage inventory with order forms?",
                  a: "Set stock levels for each product, enable low inventory alerts, and automatically hide out-of-stock items. The system tracks inventory in real-time as orders are placed."
                },
                {
                  q: "Can I calculate taxes and shipping automatically?",
                  a: "Absolutely! Set up tax rules based on location and product type. Configure shipping rates by weight, dimensions, or flat rates. Everything calculates automatically at checkout."
                },
                {
                  q: "Do customers receive order confirmations?",
                  a: "Yes! Customers automatically receive professional order confirmations with receipt details, order numbers, and tracking information when available."
                },
                {
                  q: "Can I create discount codes and promotions?",
                  a: "Yes! Create percentage or fixed-amount discounts, set expiration dates, usage limits, and minimum order requirements. Perfect for marketing campaigns."
                },
                {
                  q: "How do I track and fulfill orders?",
                  a: "View all orders in your dashboard, update order status, add tracking numbers, and communicate with customers. Export order data for fulfillment partners."
                },
                {
                  q: "Can I customize the order form design?",
                  a: "Absolutely! Customize colors, fonts, layout, and branding to match your business. Add your logo and create a seamless brand experience."
                },
                {
                  q: "Is the order form secure for processing payments?",
                  a: "Yes! All payment processing is PCI compliant and uses industry-standard encryption. Customer payment information is never stored on our servers."
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
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Selling with Professional Order Forms
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Build order forms that convert visitors into customers. Accept payments, manage inventory, 
              and automate your sales process. Start selling online today!
            </p>
            <Link 
              href="/order-builder" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Build Your First Order Form Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}