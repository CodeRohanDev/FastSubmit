import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Form Builder with Email Notifications - Automated Email Responses | FastSubmit',
  description: 'Create forms with automated email notifications. Send confirmations, alerts, and follow-ups instantly. Custom email templates, conditional sending, and advanced automation.',
  keywords: 'form builder with email notifications, automated email responses, form confirmation emails, email automation, notification system',
  openGraph: {
    title: 'Form Builder with Email Notifications - Automated Email Responses',
    description: 'Create forms with automated email notifications. Send confirmations, alerts, and follow-ups with custom templates.',
    type: 'website',
    url: 'https://fastsubmit.app/form-builder-with-email-notifications',
    images: [
      {
        url: 'https://fastsubmit.app/og-email-notifications-form.jpg',
        width: 1200,
        height: 630,
        alt: 'Form Builder with Email Notifications - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Form Builder with Email Notifications - Automated Email Responses',
    description: 'Create forms with automated email notifications. Custom templates, conditional sending, advanced automation.',
    images: ['https://fastsubmit.app/og-email-notifications-form.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/form-builder-with-email-notifications'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Email Notification Form Builder',
  description: 'Advanced form builder with automated email notifications, custom templates, and intelligent email automation',
  url: 'https://fastsubmit.app/form-builder-with-email-notifications',
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
    reviewCount: '22187'
  },
  featureList: [
    'Automated Email Responses',
    'Custom Email Templates',
    'Conditional Email Logic',
    'Multi-recipient Notifications',
    'Email Scheduling',
    'Delivery Tracking'
  ]
}

export default function FormBuilderWithEmailNotificationsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Form Builder with Email Notifications
                <span className="block text-blue-600">Automated Email Responses</span>
                <span className="block text-purple-600">Smart Communication</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create forms that automatically send personalized emails to users and administrators. 
                Custom email templates, conditional logic, scheduled sending, delivery tracking, 
                and advanced automation workflows. Never miss a lead or forget to follow up again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/email-form-builder" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Build Email Form
                </Link>
                <Link 
                  href="/email-templates" 
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Email Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Email Notification Use Cases */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Email Notification Use Cases
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  useCase: "Contact Form Responses",
                  description: "Send instant confirmations to users and notifications to your team",
                  icon: "📧",
                  emailTypes: ["User confirmation", "Admin notification", "Auto-responder", "Follow-up sequence"],
                  features: ["Instant delivery", "Custom templates", "Contact details", "Response tracking"]
                },
                {
                  useCase: "Lead Generation",
                  description: "Nurture leads with automated email sequences and sales notifications",
                  icon: "🎯",
                  emailTypes: ["Welcome email", "Lead scoring alert", "Sales notification", "Drip campaign"],
                  features: ["Lead scoring", "CRM integration", "Sales alerts", "Nurture sequences"]
                },
                {
                  useCase: "Event Registration",
                  description: "Send registration confirmations, reminders, and event updates",
                  icon: "🎫",
                  emailTypes: ["Registration confirmation", "Event reminders", "Updates", "Check-in details"],
                  features: ["Calendar invites", "QR codes", "Reminder scheduling", "Update broadcasts"]
                },
                {
                  useCase: "Order Confirmations",
                  description: "Automated order processing emails with receipts and tracking",
                  icon: "🛒",
                  emailTypes: ["Order confirmation", "Payment receipt", "Shipping updates", "Delivery notification"],
                  features: ["Order details", "Payment receipts", "Tracking links", "Status updates"]
                },
                {
                  useCase: "Support Tickets",
                  description: "Ticket creation confirmations and status update notifications",
                  icon: "🛠️",
                  emailTypes: ["Ticket confirmation", "Status updates", "Resolution notice", "Satisfaction survey"],
                  features: ["Ticket numbers", "Priority alerts", "Team notifications", "SLA tracking"]
                },
                {
                  useCase: "Newsletter Signups",
                  description: "Welcome new subscribers with confirmation and onboarding emails",
                  icon: "📰",
                  emailTypes: ["Subscription confirmation", "Welcome series", "Content delivery", "Preference updates"],
                  features: ["Double opt-in", "Welcome series", "Segmentation", "Unsubscribe handling"]
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.useCase}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Email Types:</p>
                      <div className="grid grid-cols-1 gap-1">
                        {useCase.emailTypes.map((type, typeIndex) => (
                          <span key={typeIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
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
        {/* Email Builder Interface */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced Email Notification Builder
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Email Configuration</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Trigger</label>
                      <select className="w-full p-2 border border-gray-300 rounded">
                        <option>Form submission</option>
                        <option>Specific field value</option>
                        <option>Payment completion</option>
                        <option>Time-based delay</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Recipients</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Form submitter</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Admin (admin@company.com)</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Sales team (sales@company.com)</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Custom email addresses</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Template</label>
                      <select className="w-full p-2 border border-gray-300 rounded mb-2">
                        <option>Contact Form Confirmation</option>
                        <option>Lead Generation Alert</option>
                        <option>Registration Confirmation</option>
                        <option>Custom Template</option>
                      </select>
                      <button className="text-blue-600 text-sm hover:text-blue-800">+ Create New Template</button>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Subject</label>
                      <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Thank you for contacting us, {{name}}!" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Advanced Options</label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Delay sending (schedule)</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Include form data</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Attach files</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="mr-2" />
                          <span className="text-sm">Track email opens</span>
                        </label>
                      </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                      🔄 Configure Email
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Email Preview</h3>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b border-gray-200">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div>
                          <div className="font-medium">From: noreply@yourcompany.com</div>
                          <div>To: john.doe@example.com</div>
                          <div>Subject: Thank you for contacting us, John!</div>
                        </div>
                        <div className="text-xs text-gray-500">
                          Sent: Just now
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <img src="/logo.png" alt="Company Logo" className="h-8 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-gray-900">Thank You for Contacting Us!</h2>
                      </div>
                      
                      <div className="space-y-4 text-gray-700">
                        <p>Hi John,</p>
                        <p>Thank you for reaching out to us. We've received your message and will get back to you within 24 hours.</p>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-gray-900 mb-2">Your Message Details:</h3>
                          <div className="space-y-2 text-sm">
                            <div><span className="font-medium">Name:</span> John Doe</div>
                            <div><span className="font-medium">Email:</span> john.doe@example.com</div>
                            <div><span className="font-medium">Subject:</span> Product Inquiry</div>
                            <div><span className="font-medium">Message:</span> I'm interested in learning more about your premium plan features...</div>
                            <div><span className="font-medium">Submitted:</span> December 18, 2025 at 2:30 PM</div>
                          </div>
                        </div>
                        
                        <p>In the meantime, feel free to browse our <a href="#" className="text-blue-600 hover:text-blue-800">knowledge base</a> or check out our <a href="#" className="text-blue-600 hover:text-blue-800">frequently asked questions</a>.</p>
                        
                        <div className="text-center mt-6">
                          <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors inline-block">
                            Visit Our Website
                          </a>
                        </div>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                        <p>Best regards,<br />The Support Team</p>
                        <p className="mt-4">
                          Company Name | 123 Business St, City, State 12345<br />
                          <a href="#" className="text-blue-600">Unsubscribe</a> | <a href="#" className="text-blue-600">Update Preferences</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Email Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced Email Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Email Templates",
                  description: "Design beautiful, responsive email templates with drag-and-drop editor and HTML customization.",
                  icon: "🎨"
                },
                {
                  title: "Conditional Email Logic",
                  description: "Send different emails based on form responses, user behavior, or custom conditions.",
                  icon: "🔀"
                },
                {
                  title: "Multi-Recipient Support",
                  description: "Send emails to multiple recipients including users, admins, and team members simultaneously.",
                  icon: "👥"
                },
                {
                  title: "Email Scheduling",
                  description: "Schedule emails to be sent at specific times or after delays for perfect timing.",
                  icon: "⏰"
                },
                {
                  title: "Personalization Variables",
                  description: "Insert form data, user information, and custom variables into email content dynamically.",
                  icon: "🏷️"
                },
                {
                  title: "Delivery Tracking",
                  description: "Track email delivery, opens, clicks, and bounces with detailed analytics and reporting.",
                  icon: "📊"
                },
                {
                  title: "Email Sequences",
                  description: "Create automated email sequences and drip campaigns triggered by form submissions.",
                  icon: "📧"
                },
                {
                  title: "Attachment Support",
                  description: "Attach files, PDFs, images, and documents to automated email responses.",
                  icon: "📎"
                },
                {
                  title: "Spam Protection",
                  description: "Built-in spam protection and deliverability optimization for maximum inbox placement.",
                  icon: "🛡️"
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

        {/* Email Analytics Dashboard */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Email Analytics & Tracking
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Track Email Performance</h3>
                <div className="space-y-6">
                  {[
                    {
                      metric: "Delivery Rate",
                      description: "Monitor successful email deliveries and identify delivery issues in real-time.",
                      icon: "📬",
                      value: "99.2%"
                    },
                    {
                      metric: "Open Rate",
                      description: "Track how many recipients open your emails and optimize subject lines for better engagement.",
                      icon: "👁️",
                      value: "68.5%"
                    },
                    {
                      metric: "Click-Through Rate",
                      description: "Measure link clicks and call-to-action performance to improve email effectiveness.",
                      icon: "🖱️",
                      value: "24.3%"
                    },
                    {
                      metric: "Bounce Rate",
                      description: "Identify and manage bounced emails to maintain sender reputation and deliverability.",
                      icon: "↩️",
                      value: "0.8%"
                    }
                  ].map((metric, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl">{metric.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{metric.metric}</h4>
                          <span className="text-2xl font-bold text-blue-600">{metric.value}</span>
                        </div>
                        <p className="text-gray-600">{metric.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Email Analytics Dashboard</h4>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">1,247</div>
                      <div className="text-sm text-gray-600">Emails Sent Today</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">854</div>
                      <div className="text-sm text-gray-600">Emails Opened</div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-3">Recent Email Activity</h5>
                    <div className="space-y-3">
                      {[
                        { type: "Contact Form", status: "Delivered", time: "2 min ago", recipient: "john@example.com" },
                        { type: "Registration", status: "Opened", time: "5 min ago", recipient: "sarah@example.com" },
                        { type: "Lead Alert", status: "Clicked", time: "8 min ago", recipient: "sales@company.com" },
                        { type: "Welcome Email", status: "Delivered", time: "12 min ago", recipient: "mike@example.com" }
                      ].map((activity, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{activity.type}</div>
                            <div className="text-xs text-gray-600">{activity.recipient}</div>
                          </div>
                          <div className="text-right">
                            <div className={`text-xs px-2 py-1 rounded ${
                              activity.status === 'Delivered' ? 'bg-blue-100 text-blue-800' :
                              activity.status === 'Opened' ? 'bg-green-100 text-green-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {activity.status}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">Email Performance Trends</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>This Week vs Last Week</span>
                        <span className="text-green-600 font-medium">+12.5% opens</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Best Performing Template</span>
                        <span className="font-medium">Welcome Series #1</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Peak Send Time</span>
                        <span className="font-medium">Tuesday 10:00 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Success Stories */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Email Automation Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  company: "SaaS Startup",
                  role: "Emma Thompson, Marketing Director",
                  story: "Our lead nurturing emails convert 35% better since implementing automated sequences. The conditional logic sends personalized content based on user interests.",
                  result: "35% better conversion",
                  engagement: "89% open rate",
                  avatar: "👩‍💼"
                },
                {
                  company: "E-commerce Store",
                  role: "David Park, Customer Success",
                  story: "Order confirmation emails with tracking info reduced support tickets by 60%. Customers love the real-time updates and professional communication.",
                  result: "60% fewer tickets",
                  engagement: "95% delivery rate",
                  avatar: "👨‍💻"
                },
                {
                  company: "Event Company",
                  role: "Lisa Rodriguez, Event Manager",
                  story: "Automated event reminders increased attendance by 40%. The scheduled email sequences keep attendees engaged from registration to event day.",
                  result: "40% more attendance",
                  engagement: "72% click rate",
                  avatar: "👩‍🎨"
                }
              ].map((story, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="text-3xl mr-3">{story.avatar}</div>
                    <div>
                      <div className="font-bold text-gray-900">{story.company}</div>
                      <div className="text-gray-600 text-sm">{story.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 mb-4 leading-relaxed">"{story.story}"</blockquote>
                  <div className="space-y-2">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {story.result}
                    </div>
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {story.engagement}
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
              Email Notifications FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "How quickly are emails sent after form submission?",
                  a: "Emails are typically sent within seconds of form submission. You can also configure delays or schedule emails to be sent at specific times for optimal engagement."
                },
                {
                  q: "Can I customize email templates with my branding?",
                  a: "Absolutely! Use our drag-and-drop email builder or HTML editor to create fully branded templates with your logo, colors, fonts, and custom styling that matches your brand identity."
                },
                {
                  q: "How do I ensure my emails don't end up in spam folders?",
                  a: "We use enterprise-grade email infrastructure with built-in spam protection, authentication protocols (SPF, DKIM, DMARC), and deliverability optimization to maximize inbox placement."
                },
                {
                  q: "Can I send different emails based on form responses?",
                  a: "Yes! Use conditional email logic to send personalized emails based on specific form field values, user behavior, or custom conditions you define in the form builder."
                },
                {
                  q: "Is there a limit on how many emails I can send?",
                  a: "Email limits depend on your plan. Free accounts include generous email allowances, and paid plans offer unlimited emails with advanced features like analytics and automation."
                },
                {
                  q: "Can I track if recipients open and click my emails?",
                  a: "Yes! Get detailed analytics including delivery rates, open rates, click-through rates, and bounce rates. Track individual email performance and optimize your communication strategy."
                },
                {
                  q: "How do I set up automated email sequences?",
                  a: "Create multi-step email sequences with our automation builder. Set triggers, delays, and conditions to nurture leads, onboard users, or follow up with customers automatically."
                },
                {
                  q: "Can I include attachments in automated emails?",
                  a: "Yes! Attach PDFs, images, documents, and other files to your automated emails. Perfect for sending receipts, guides, contracts, or promotional materials."
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
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Automate Your Email Communication
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Never miss a follow-up again. Create forms with intelligent email automation 
              that nurtures leads, confirms orders, and keeps customers engaged automatically.
            </p>
            <Link 
              href="/email-form-builder" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Build Your Email Form Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}