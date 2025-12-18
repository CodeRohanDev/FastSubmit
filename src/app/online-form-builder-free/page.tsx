import { Metadata } from 'next'
import Link from 'next/link'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Online Form Builder Free - Build Web Forms Online | FastSubmit',
  description: 'Build professional web forms online for free with FastSubmit. Create contact forms, surveys, registrations online without coding. Start building forms in your browser today.',
  keywords: 'online form builder free, build forms online, web form builder, online form creator, create forms online, browser form builder, cloud form builder, online survey builder',
  openGraph: {
    title: 'Online Form Builder Free - Build Web Forms Online',
    description: 'Build professional web forms online for free with FastSubmit. Create contact forms, surveys, registrations online without coding.',
    type: 'website',
    url: 'https://fastsubmit.app/online-form-builder-free',
    images: [
      {
        url: 'https://fastsubmit.app/og-online-form-builder.jpg',
        width: 1200,
        height: 630,
        alt: 'Online Form Builder Free - FastSubmit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Form Builder Free - Build Web Forms Online',
    description: 'Build professional web forms online for free. No downloads, no installations required.',
    images: ['https://fastsubmit.app/og-online-form-builder.jpg']
  },
  alternates: {
    canonical: 'https://fastsubmit.app/online-form-builder-free'
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'FastSubmit Online Form Builder',
  description: 'Free online form builder for creating professional web forms in your browser',
  url: 'https://fastsubmit.app/online-form-builder-free',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '4156'
  },
  featureList: [
    'Browser-based Form Building',
    'Real-time Collaboration',
    'Cloud Storage',
    'Instant Publishing',
    'Cross-platform Access',
    'Auto-save Functionality'
  ]
}

export default function OnlineFormBuilderFreePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Online Form Builder
                <span className="block text-cyan-600">Build Forms Online</span>
                <span className="block text-blue-600">100% Free Forever</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Build professional web forms online directly in your browser. No downloads, 
                no installations required. Create contact forms, surveys, registrations, 
                and more with our powerful online form builder. Start building now!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/build-online" 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Build Forms Online Now
                </Link>
                <Link 
                  href="/online-demo" 
                  className="border-2 border-gray-300 hover:border-cyan-600 text-gray-700 hover:text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
                >
                  Try Online Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Online Builder Interface Preview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Build Forms Online in Your Browser
            </h2>
            <div className="bg-gray-100 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Browser Bar */}
                <div className="bg-gray-200 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-4 py-1 text-sm text-gray-600">
                    https://fastsubmit.app/online-form-builder
                  </div>
                </div>
                
                {/* Online Builder Interface */}
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Sidebar */}
                  <div className="bg-gray-50 p-6 border-r">
                    <h3 className="font-semibold text-gray-900 mb-4">Form Elements</h3>
                    <div className="space-y-3">
                      {['Text Input', 'Email Field', 'Phone Number', 'Textarea', 'File Upload', 'Dropdown', 'Checkboxes', 'Radio Buttons'].map((element, index) => (
                        <div key={index} className="bg-white p-3 rounded border cursor-pointer hover:bg-blue-50 transition-colors">
                          <div className="text-sm font-medium text-gray-700">{element}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Canvas */}
                  <div className="lg:col-span-2 p-6">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-96">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Form</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                          <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your full name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                          <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your email" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                          <textarea className="w-full p-3 border border-gray-300 rounded-lg h-24" placeholder="Your message here..."></textarea>
                        </div>
                        <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Online Builder Benefits */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Why Build Forms Online?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "No Downloads Required",
                  description: "Build forms directly in your web browser. No software to download or install on your computer.",
                  icon: "🌐",
                  benefit: "Instant Access"
                },
                {
                  title: "Work From Anywhere",
                  description: "Access your form builder from any device with internet. Build on desktop, tablet, or mobile.",
                  icon: "📍",
                  benefit: "Complete Mobility"
                },
                {
                  title: "Real-time Collaboration",
                  description: "Share your form building workspace with team members for real-time collaboration.",
                  icon: "👥",
                  benefit: "Team Productivity"
                },
                {
                  title: "Auto-save & Cloud Storage",
                  description: "Your forms are automatically saved to the cloud. Never lose your work again.",
                  icon: "☁️",
                  benefit: "Data Security"
                },
                {
                  title: "Instant Publishing",
                  description: "Publish forms online instantly. Share links or embed codes immediately after building.",
                  icon: "⚡",
                  benefit: "Speed to Market"
                },
                {
                  title: "Always Up-to-date",
                  description: "Get the latest features automatically. No manual updates or version management needed.",
                  icon: "🔄",
                  benefit: "Latest Features"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                  <div className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {benefit.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Online Form Types */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Build Any Form Type Online
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { type: "Contact Forms", icon: "📧", users: "45K+" },
                { type: "Survey Forms", icon: "📊", users: "32K+" },
                { type: "Registration Forms", icon: "📝", users: "28K+" },
                { type: "Feedback Forms", icon: "💬", users: "19K+" },
                { type: "Order Forms", icon: "🛒", users: "15K+" },
                { type: "Application Forms", icon: "📄", users: "12K+" },
                { type: "Event Forms", icon: "🎫", users: "18K+" },
                { type: "Newsletter Signup", icon: "📮", users: "38K+" },
                { type: "Booking Forms", icon: "📅", users: "22K+" },
                { type: "Quote Request", icon: "💰", users: "14K+" },
                { type: "Support Tickets", icon: "🎧", users: "16K+" },
                { type: "Lead Generation", icon: "🎯", users: "35K+" }
              ].map((formType, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">{formType.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{formType.type}</h3>
                  <div className="text-cyan-600 text-sm font-medium">{formType.users} users</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Online vs Desktop Comparison */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Online Form Builder vs Desktop Software
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🌐</div>
                  <h3 className="text-2xl font-bold text-cyan-600">Online Form Builder</h3>
                  <p className="text-gray-600">FastSubmit</p>
                </div>
                <ul className="space-y-4">
                  {[
                    "✅ No downloads or installations",
                    "✅ Access from any device/browser",
                    "✅ Automatic updates & new features",
                    "✅ Real-time collaboration",
                    "✅ Cloud storage & backup",
                    "✅ Instant publishing & sharing",
                    "✅ Cross-platform compatibility",
                    "✅ Always latest version"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="mr-3">{feature.split(' ')[0]}</span>
                      <span>{feature.substring(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg opacity-75">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">💻</div>
                  <h3 className="text-2xl font-bold text-gray-600">Desktop Software</h3>
                  <p className="text-gray-500">Traditional Tools</p>
                </div>
                <ul className="space-y-4">
                  {[
                    "❌ Requires software installation",
                    "❌ Limited to specific devices",
                    "❌ Manual updates required",
                    "❌ No collaboration features",
                    "❌ Local storage only",
                    "❌ Complex publishing process",
                    "❌ Platform-specific limitations",
                    "❌ Version compatibility issues"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-500">
                      <span className="mr-3">{feature.split(' ')[0]}</span>
                      <span>{feature.substring(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Browser Compatibility */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Works in All Modern Browsers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
              {[
                { name: "Chrome", icon: "🟢", compatibility: "100%" },
                { name: "Firefox", icon: "🟠", compatibility: "100%" },
                { name: "Safari", icon: "🔵", compatibility: "100%" },
                { name: "Edge", icon: "🟦", compatibility: "100%" },
                { name: "Opera", icon: "🔴", compatibility: "100%" }
              ].map((browser, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="text-6xl mb-4">{browser.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{browser.name}</h3>
                  <div className="text-green-600 font-bold">{browser.compatibility}</div>
                  <div className="text-sm text-gray-600">Compatible</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 text-lg">
                Our online form builder works perfectly in all modern web browsers. 
                No plugins or extensions required!
              </p>
            </div>
          </div>
        </section>

        {/* Performance Stats */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Lightning-Fast Online Performance
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  metric: "Load Time",
                  value: "< 2 sec",
                  description: "Forms load instantly in any browser",
                  icon: "⚡"
                },
                {
                  metric: "Uptime",
                  value: "99.9%",
                  description: "Reliable online availability",
                  icon: "🔄"
                },
                {
                  metric: "Global CDN",
                  value: "150+ locations",
                  description: "Fast access worldwide",
                  icon: "🌍"
                },
                {
                  metric: "Auto-save",
                  value: "Every 30 sec",
                  description: "Never lose your work",
                  icon: "💾"
                }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.metric}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Online Form Builder FAQ
            </h2>
            <div className="space-y-8">
              {[
                {
                  q: "Do I need to download anything to build forms online?",
                  a: "No! Our online form builder works entirely in your web browser. Simply visit our website and start building forms immediately - no downloads, installations, or plugins required."
                },
                {
                  q: "Can I build forms online from my mobile device?",
                  a: "Yes! Our online form builder is fully responsive and works on smartphones, tablets, and desktop computers. You can build and edit forms from any device with a web browser."
                },
                {
                  q: "Is my data safe when building forms online?",
                  a: "Absolutely! All data is encrypted in transit and at rest. We use enterprise-grade security measures and automatic backups to keep your forms and data completely safe."
                },
                {
                  q: "Can multiple people work on the same form online?",
                  a: "Yes! Our online form builder supports real-time collaboration. You can invite team members to edit forms together, with changes visible instantly to all collaborators."
                },
                {
                  q: "What happens if my internet connection drops while building online?",
                  a: "Don't worry! Our online form builder automatically saves your work every 30 seconds. If you lose connection, your progress is preserved and will be there when you reconnect."
                },
                {
                  q: "Can I build forms online without creating an account?",
                  a: "You can try our online form builder without signing up, but creating a free account ensures your forms are saved and accessible from any device."
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
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Start Building Forms Online Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of users building professional forms online with FastSubmit. 
              No downloads required - start building in your browser right now!
            </p>
            <Link 
              href="/build-online" 
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Build Your First Form Online Free
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}