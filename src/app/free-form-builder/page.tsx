import { JsonLd } from '@/components/JsonLd'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Form Builder - Create Professional Forms Online | FastSubmit',
  description: 'Build unlimited forms for free with FastSubmit\'s drag-and-drop form builder. No coding required. Get instant notifications, file uploads, and custom branding. Start creating forms in seconds.',
  keywords: 'free form builder, online form creator, drag and drop forms, no code form builder, contact form builder, survey maker, form generator, web forms, html forms, custom forms',
  openGraph: {
    title: 'Free Form Builder - Create Professional Forms Online',
    description: 'Build unlimited forms for free with FastSubmit\'s drag-and-drop form builder. No coding required. Get instant notifications, file uploads, and custom branding.',
    type: 'website',
    url: 'https://fastsubmit.app/free-form-builder',
    images: [
      {
        url: 'https://fastsubmit.app/og-free-form-builder.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Form Builder - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Form Builder - Create Professional Forms Online',
    description: 'Build unlimited forms for free with FastSubmit\'s drag-and-drop form builder. No coding required.',
    images: ['https://fastsubmit.app/og-free-form-builder.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/free-form-builder'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'FastSubmit Free Form Builder',
  description: 'Professional free form builder with drag-and-drop interface, unlimited forms, and advanced features',
  url: 'https://fastsubmit.app/free-form-builder',
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
    ratingValue: '4.8',
    reviewCount: '2847'
  },
  features: [
    'Drag and Drop Form Builder',
    'Unlimited Forms',
    'File Upload Support',
    'Email Notifications',
    'Custom Branding',
    'Mobile Responsive',
    'No Coding Required'
  ]
}

export default function FreeFormBuilderPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Free Form Builder
                <span className="block text-blue-600">Create Professional Forms</span>
                <span className="block text-purple-600">In Minutes, Not Hours</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Build unlimited forms for free with our powerful drag-and-drop form builder. 
                No coding skills required. Get instant email notifications, file uploads, 
                custom branding, and advanced features that make your forms stand out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/signup" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Building Forms Free
                </Link>
                <Link 
                  href="/demo" 
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Why Choose Our Free Form Builder?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Drag & Drop Interface",
                  description: "Build forms visually with our intuitive drag-and-drop editor. No technical skills needed.",
                  icon: "🎯"
                },
                {
                  title: "Unlimited Forms",
                  description: "Create as many forms as you need. No limits on form creation or submissions.",
                  icon: "∞"
                },
                {
                  title: "Instant Notifications",
                  description: "Get email notifications immediately when someone submits your form.",
                  icon: "⚡"
                },
                {
                  title: "File Upload Support",
                  description: "Allow users to upload files, images, and documents through your forms.",
                  icon: "📁"
                },
                {
                  title: "Custom Branding",
                  description: "Customize colors, fonts, and styling to match your brand perfectly.",
                  icon: "🎨"
                },
                {
                  title: "Mobile Responsive",
                  description: "All forms automatically work perfectly on mobile devices and tablets.",
                  icon: "📱"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Types Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Create Any Type of Form
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Contact Forms", "Survey Forms", "Registration Forms", "Feedback Forms",
                "Order Forms", "Application Forms", "Event Forms", "Newsletter Signup",
                "Job Applications", "Booking Forms", "Lead Generation", "Customer Forms"
              ].map((formType, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                  <h3 className="font-semibold text-gray-900">{formType}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              FastSubmit vs Other Form Builders
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Feature</th>
                    <th className="p-4 text-center">FastSubmit</th>
                    <th className="p-4 text-center">Google Forms</th>
                    <th className="p-4 text-center">Typeform</th>
                    <th className="p-4 text-center">JotForm</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Unlimited Forms", "✅", "✅", "❌", "❌"],
                    ["Custom Branding", "✅", "❌", "❌", "❌"],
                    ["File Uploads", "✅", "✅", "❌", "❌"],
                    ["No Signup Required", "✅", "❌", "❌", "❌"],
                    ["Advanced Analytics", "✅", "❌", "❌", "❌"],
                    ["Webhook Integration", "✅", "❌", "❌", "❌"]
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
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Is the form builder really free?",
                  a: "Yes! Our form builder is completely free with unlimited forms and submissions. No hidden costs or trial periods."
                },
                {
                  q: "Do I need to know coding to use this form builder?",
                  a: "Not at all! Our drag-and-drop interface makes it easy for anyone to create professional forms without any coding knowledge."
                },
                {
                  q: "Can I customize the appearance of my forms?",
                  a: "Absolutely! You can customize colors, fonts, backgrounds, and add your own branding to make forms match your website perfectly."
                },
                {
                  q: "How do I receive form submissions?",
                  a: "You'll receive instant email notifications for every form submission. You can also view all submissions in your dashboard."
                },
                {
                  q: "Are the forms mobile-friendly?",
                  a: "Yes! All forms created with FastSubmit are automatically optimized for mobile devices and tablets."
                },
                {
                  q: "Can I embed forms on my website?",
                  a: "Yes! You can easily embed forms on any website using our simple embed code or share them via direct links."
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
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Your First Form?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users who trust FastSubmit for their form building needs. 
              Start creating professional forms in minutes, not hours.
            </p>
            <Link 
              href="/signup" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Get Started Free - No Credit Card Required
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}