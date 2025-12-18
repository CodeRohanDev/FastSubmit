import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Mail, Shield, Zap, Bell, Palette, Globe } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Free Contact Form Builder - Create Professional Contact Forms | FastSubmit',
  description: 'Build professional contact forms for free with FastSubmit. Get instant email notifications, spam protection, custom styling, and unlimited submissions. No coding required. Start building now.',
  keywords: 'free contact form builder, contact form creator, website contact form, contact form generator, contact form maker, professional contact form, business contact form, contact us form builder',
  openGraph: {
    title: 'Free Contact Form Builder - Create Professional Contact Forms',
    description: 'Build professional contact forms for free with FastSubmit. Get instant email notifications, spam protection, custom styling, and unlimited submissions.',
    type: 'website',
    url: 'https://fastsubmit.app/free-contact-form-builder',
    images: [
      {
        url: 'https://fastsubmit.app/og-contact-form-builder.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Contact Form Builder - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Contact Form Builder - Create Professional Contact Forms',
    description: 'Build professional contact forms for free. No coding required, unlimited submissions.',
    images: ['https://fastsubmit.app/og-contact-form-builder.jpg']
  },
  alternates: { canonical: 'https://fastsubmit.app/free-contact-form-builder' }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Contact Form Builder',
  description: 'Free contact form builder for creating professional contact forms with email notifications and spam protection',
  url: 'https://fastsubmit.app/free-contact-form-builder',
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
    reviewCount: '6847'
  },
  featureList: [
    'Email Notifications',
    'Spam Protection',
    'Custom Styling',
    'Mobile Responsive',
    'Easy Embedding',
    'Auto-Responder'
  ]
}

export default function FreeContactFormBuilderPage() {
  const features = [
    { icon: <Mail className="w-5 h-5" />, title: 'Instant Email Notifications', desc: 'Get immediate email alerts when someone submits your contact form. Never miss a potential customer inquiry.' },
    { icon: <Shield className="w-5 h-5" />, title: 'Advanced Spam Protection', desc: 'Built-in honeypot fields, CAPTCHA, and intelligent spam filtering keeps your inbox clean from unwanted messages.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Lightning Fast Setup', desc: 'Create and deploy your professional contact form in under 2 minutes. No technical skills required.' },
    { icon: <Bell className="w-5 h-5" />, title: 'Smart Auto-Responder', desc: 'Automatically send personalized thank you messages to people who contact you through your form.' },
    { icon: <Palette className="w-5 h-5" />, title: 'Complete Brand Customization', desc: 'Match your website colors, fonts, and branding perfectly. Upload logos and create a seamless user experience.' },
    { icon: <Globe className="w-5 h-5" />, title: 'Universal Embedding', desc: 'Works flawlessly on WordPress, Shopify, Wix, Squarespace, and any website or platform.' },
  ]

  const contactFormTypes = [
    { type: 'Business Contact Forms', description: 'Professional contact forms for businesses and corporations', users: '45,000+' },
    { type: 'Customer Support Forms', description: 'Help desk and customer service contact forms', users: '28,000+' },
    { type: 'Sales Inquiry Forms', description: 'Lead generation and sales contact forms', users: '38,000+' },
    { type: 'General Contact Forms', description: 'Simple contact us forms for any website', users: '67,000+' },
    { type: 'Service Request Forms', description: 'Contact forms for service-based businesses', users: '22,000+' },
    { type: 'Quote Request Forms', description: 'Get pricing and quote requests from customers', users: '31,000+' }
  ]

  const fields = ['Full Name', 'Email Address', 'Phone Number', 'Company/Organization', 'Subject', 'Message', 'Preferred Contact Method', 'Best Time to Call']

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <Breadcrumbs />
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-blue-600 mb-4 sm:mb-6 bg-blue-50 px-3 sm:px-4 py-2 rounded-full border border-blue-200">
                <Mail size={14} />
                <span>Contact Form Builder</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
                Free Contact Form Builder
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Create Professional Contact Forms
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Build professional contact forms for your website in minutes. Get instant email notifications, 
                advanced spam protection, custom styling, and unlimited submissions. Perfect for businesses, 
                freelancers, and organizations of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Build Contact Form Free
                </Link>
                <Link href="/contact-templates" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                  View Contact Templates
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Preview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Professional Contact Form Example
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">What Your Contact Form Will Look Like</h3>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Get In Touch</h4>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="John" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Doe" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="+1 (555) 123-4567" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option>General Inquiry</option>
                          <option>Sales Question</option>
                          <option>Support Request</option>
                          <option>Partnership</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                        <textarea className="w-full p-3 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us how we can help you..."></textarea>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Instant Email Notifications</h4>
                      <p className="text-gray-600">Get notified immediately when someone fills out your contact form</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Spam Protection</h4>
                      <p className="text-gray-600">Advanced filtering keeps spam out of your inbox automatically</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Palette className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Custom Branding</h4>
                      <p className="text-gray-600">Match your website's colors, fonts, and overall design perfectly</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <Globe className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Works Everywhere</h4>
                      <p className="text-gray-600">Embed on any website, CMS, or platform with simple copy-paste code</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Types */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Contact Form Types You Can Build
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactFormTypes.map((formType, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{formType.type}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{formType.description}</p>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {formType.users} active users
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Available Fields */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Form Fields Available</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from a comprehensive list of contact form fields to collect exactly the information you need from your visitors.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {fields.map((field, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 text-center">
                  <span className="font-medium text-gray-900">{field}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Advanced Contact Form Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600">{f.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Options */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Embed Your Contact Form Anywhere
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { platform: 'WordPress', logo: '🟦', compatibility: '100%' },
                { platform: 'Shopify', logo: '🟢', compatibility: '100%' },
                { platform: 'Wix', logo: '🟡', compatibility: '100%' },
                { platform: 'Squarespace', logo: '⚫', compatibility: '100%' },
                { platform: 'Webflow', logo: '🔵', compatibility: '100%' },
                { platform: 'HTML/CSS', logo: '🟠', compatibility: '100%' },
                { platform: 'React/Vue', logo: '🟣', compatibility: '100%' },
                { platform: 'Any Website', logo: '🌐', compatibility: '100%' }
              ].map((platform, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="text-4xl mb-4">{platform.logo}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{platform.platform}</h3>
                  <div className="text-green-600 font-bold">{platform.compatibility}</div>
                  <div className="text-sm text-gray-600">Compatible</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Contact Form Builder FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "How do I create a contact form for my website?",
                  a: "Creating a contact form is simple with FastSubmit. Sign up for free, choose a contact form template or start from scratch, customize the fields and design, then copy the embed code to add it to your website. The entire process takes less than 5 minutes."
                },
                {
                  q: "Will I receive email notifications when someone submits my contact form?",
                  a: "Yes! You'll receive instant email notifications every time someone fills out your contact form. You can customize the notification emails and even set up auto-responders to thank people for contacting you."
                },
                {
                  q: "Is the contact form builder really free?",
                  a: "Absolutely! Our contact form builder is completely free with unlimited forms and submissions. You get email notifications, spam protection, custom styling, and all essential features at no cost."
                },
                {
                  q: "Can I customize the design of my contact form?",
                  a: "Yes! You have complete control over your contact form's appearance. Customize colors, fonts, spacing, add your logo, and match your website's branding perfectly. You can even add custom CSS for advanced styling."
                },
                {
                  q: "Does the contact form work on mobile devices?",
                  a: "All contact forms created with FastSubmit are automatically mobile-responsive. They look great and work perfectly on smartphones, tablets, and desktop computers."
                },
                {
                  q: "How do I add a contact form to my WordPress website?",
                  a: "After creating your contact form, simply copy the provided embed code and paste it into any WordPress page or post. You can also use our WordPress plugin for even easier integration."
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
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Building Your Contact Form Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join over 100,000 websites using FastSubmit contact forms to connect with their visitors. 
              Create your professional contact form in minutes, not hours.
            </p>
            <Link href="/signup" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
              Create Contact Form Free - No Credit Card Required
            </Link>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  )
}
