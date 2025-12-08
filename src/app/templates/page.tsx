import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Free Form Templates - 100+ Ready-to-Use Forms | FastSubmit',
  description: 'Browse 100+ free form templates. Contact forms, surveys, registration forms, and more. Customize and use in minutes. No coding required.',
  keywords: ['form templates', 'free form templates', 'contact form template', 'survey template', 'registration form template'],
}

export default function TemplatesPage() {
  const categories: { name: string; count: number; icon: string; templates: string[] }[] = [
    {
      name: 'Contact Forms',
      count: 15,
      icon: '📬',
      templates: [
        'Simple Contact Form',
        'Business Contact Form',
        'Support Request Form',
        'Quote Request Form',
        'Partnership Inquiry Form',
      ]
    },
    {
      name: 'Surveys & Feedback',
      count: 20,
      icon: '📊',
      templates: [
        'Customer Satisfaction Survey',
        'Employee Feedback Survey',
        'Event Feedback Form',
        'Product Feedback Form',
        'NPS Survey',
      ]
    },
    {
      name: 'Registration Forms',
      count: 18,
      icon: '📝',
      templates: [
        'Event Registration',
        'Class Registration',
        'Volunteer Registration',
        'Membership Registration',
        'Workshop Registration',
      ]
    },
    {
      name: 'Order Forms',
      count: 12,
      icon: '🛒',
      templates: [
        'Product Order Form',
        'Service Order Form',
        'Catering Order Form',
        'Custom Order Form',
        'Wholesale Order Form',
      ]
    },
    {
      name: 'Application Forms',
      count: 15,
      icon: '📄',
      templates: [
        'Job Application Form',
        'Scholarship Application',
        'Internship Application',
        'Volunteer Application',
        'Membership Application',
      ]
    },
    {
      name: 'Lead Generation',
      count: 10,
      icon: '🎯',
      templates: [
        'Newsletter Signup',
        'Free Trial Signup',
        'Demo Request Form',
        'Consultation Request',
        'Download Form',
      ]
    },
    {
      name: 'Quiz & Tests',
      count: 8,
      icon: '🎯',
      templates: [
        'Multiple Choice Quiz',
        'Personality Quiz',
        'Knowledge Test',
        'Assessment Form',
        'Trivia Quiz',
      ]
    },
    {
      name: 'Booking Forms',
      count: 12,
      icon: '📅',
      templates: [
        'Appointment Booking',
        'Hotel Booking',
        'Restaurant Reservation',
        'Service Booking',
        'Consultation Booking',
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            100+ Free Form Templates
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Start with a professional template. Customize it to match your brand. 
            Launch in minutes. No coding required.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search templates..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-indigo-600 focus:outline-none text-lg"
              />
            </div>
          </div>

          <p className="text-sm text-gray-500">
            All templates are free and fully customizable
          </p>
        </div>
      </section>

      {/* Template Categories */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((category, i) => (
              <Link
                key={i}
                href={`/templates/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-6 rounded-xl bg-white border-2 border-gray-200 hover:border-indigo-600 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.count} templates</p>
              </Link>
            ))}
          </div>

          {/* Featured Templates */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Templates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(0, 3).flatMap(cat => 
                cat.templates.slice(0, 2).map((template, i) => (
                  <div
                    key={`${cat.name}-${i}`}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center group-hover:shadow-lg transition-all">
                      <div className="text-6xl">{cat.icon}</div>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">
                      {template}
                    </h3>
                    <p className="text-sm text-gray-500">{cat.name}</p>
                    <Link
                      href="/signup"
                      className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 mt-2"
                    >
                      Use template <ArrowRight size={14} />
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* All Templates by Category */}
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                  <span className="text-sm text-gray-500">({category.count})</span>
                </div>
                <Link
                  href={`/templates/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                >
                  View all <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.templates.map((template, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl bg-white border border-gray-200 hover:border-indigo-600 hover:shadow-lg transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-2xl">{category.icon}</div>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        Free
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                      {template}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Professional {template.toLowerCase()} template. Customize and use in minutes.
                    </p>
                    <Link
                      href="/signup"
                      className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      Use template <ArrowRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to create your form?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose a template and customize it in minutes
          </p>
          <Link 
            href="/signup" 
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            Get Started Free <ArrowRight size={20} />
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            No credit card required • 100+ templates • Free forever
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
