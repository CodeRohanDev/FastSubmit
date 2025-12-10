import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Search, Globe, Share2, Smartphone } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Free Form Templates - 100+ Quiz & Survey Templates | Best Form Builder',
  description: 'Browse 100+ free form templates. Contact forms, surveys, quizzes, registration forms. Best free form builder templates. Better than Google Forms, Zoho Forms, Microsoft Forms. Export to Excel, Word, PDF.',
  keywords: [
    'form templates',
    'free form templates',
    'contact form template',
    'survey template',
    'quiz maker',
    'quiz templates',
    'form builder',
    'free form builder',
    'form builder free',
    'form builder online',
    'best form builder',
    'best form maker',
    'google forms',
    'google form alternative',
    'free online form',
    'ai form builder',
    'online form builder',
    'online form maker',
    'free online forms',
    'form maker',
    'hostspica forms',
    'forms hostspica',
    'form to excel',
    'form to word',
    'form to pdf',
    'zoho forms',
    'microsoft forms',
    'free zoho forms',
    'free microsoft forms',
    'create free forms',
    'easy forms',
    'best form website',
    'free form website',
    'affordable forms',
    'cheapest form builder'
  ],
}

export default function TemplatesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Free Form Templates - 100+ Ready-to-Use Forms",
    "description": "Browse 100+ free form templates for websites, social media, and online sharing. Contact forms, surveys, registration forms, and more.",
    "url": "https://fastsubmit.hostspica.com/templates",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 110,
      "itemListElement": [
        {
          "@type": "SoftwareApplication",
          "name": "Contact Form Template",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "SoftwareApplication",
          "name": "Survey Template",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }
      ]
    }
  }

  const categories = [
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
      name: 'Lead Generation',
      count: 12,
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
      name: 'Social Media',
      count: 10,
      icon: '📱',
      templates: [
        'Instagram Bio Link Form',
        'Giveaway Entry Form',
        'Influencer Collab Form',
        'Fan Feedback Form',
        'Content Request Form',
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
  ]

  const platformFilters = [
    { name: 'All Platforms', icon: null, active: true },
    { name: 'Website Embed', icon: <Globe size={14} /> },
    { name: 'Social Media', icon: <Share2 size={14} /> },
    { name: 'Online Forms', icon: <Smartphone size={14} /> },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                100+ Free Form Templates
              </h1>

              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Start with a professional template. Customize it to match your brand.
                Deploy on your website, social media, or share online.
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search templates..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-indigo-600 focus:outline-none text-lg bg-white"
                  />
                </div>
              </div>

              {/* Platform Filters */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {platformFilters.map((filter, i) => (
                  <button
                    key={i}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors ${filter.active
                        ? 'bg-gray-900 text-white'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    {filter.icon}
                    {filter.name}
                  </button>
                ))}
              </div>

              <p className="text-sm text-gray-500">
                All templates work on websites, social media, and as online forms
              </p>
            </div>
          </div>
        </section>

        {/* Template Categories */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {categories.map((category, i) => (
                <Link
                  key={i}
                  href={`#${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="p-5 rounded-xl bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all group"
                >
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">{category.count} templates</p>
                </Link>
              ))}
            </div>

            {/* Featured Templates */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Popular Templates</h2>
                <div className="flex gap-2">
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full flex items-center gap-1">
                    <Globe size={12} /> Website
                  </span>
                  <span className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full flex items-center gap-1">
                    <Share2 size={12} /> Social
                  </span>
                  <span className="text-xs bg-green-50 text-green-600 px-2 py-1 rounded-full flex items-center gap-1">
                    <Smartphone size={12} /> Online
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.slice(0, 3).flatMap(cat =>
                  cat.templates.slice(0, 2).map((template, i) => (
                    <div key={`${cat.name}-${i}`} className="group cursor-pointer">
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center group-hover:shadow-lg transition-all relative overflow-hidden">
                        <div className="text-5xl">{cat.icon}</div>
                        <div className="absolute top-3 right-3 flex gap-1">
                          <span className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center" title="Website Embed">
                            <Globe size={12} className="text-blue-600" />
                          </span>
                          <span className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center" title="Social Media">
                            <Share2 size={12} className="text-pink-600" />
                          </span>
                          <span className="w-6 h-6 bg-white/80 rounded-full flex items-center justify-center" title="Online Form">
                            <Smartphone size={12} className="text-green-600" />
                          </span>
                        </div>
                      </div>
                      <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">
                        {template}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{cat.name}</p>
                      <Link
                        href="/signup"
                        className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700"
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
              <div key={catIndex} id={category.name.toLowerCase().replace(/\s+/g, '-')} className="mb-16 scroll-mt-24">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{category.icon}</span>
                    <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                    <span className="text-sm text-gray-500">({category.count})</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.templates.map((template, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-xl bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all group cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-2xl">{category.icon}</div>
                        <div className="flex gap-1">
                          <span className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center" title="Website">
                            <Globe size={10} className="text-blue-600" />
                          </span>
                          <span className="w-5 h-5 bg-pink-50 rounded-full flex items-center justify-center" title="Social">
                            <Share2 size={10} className="text-pink-600" />
                          </span>
                          <span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center" title="Online">
                            <Smartphone size={10} className="text-green-600" />
                          </span>
                        </div>
                      </div>
                      <h3 className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                        {template}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Professional {template.toLowerCase()} template. Works on websites, social media, and as online form.
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
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              Ready to create your form?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose a template and deploy on any platform in minutes
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started Free <ArrowRight size={20} />
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 100+ templates • Free forever
            </p>
          </div>
        </section>

        <Footer variant="extended" />
      </div>
      </>)
}
