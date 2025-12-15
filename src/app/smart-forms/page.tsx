import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Zap, Brain, Eye, EyeOff, Calculator, ArrowRight, 
  CheckCircle, Sparkles, Target, Users, TrendingUp,
  Play, Code, Settings, ChevronRight
} from 'lucide-react'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Smart Forms with Conditional Logic - FastSubmit',
  description: 'Create intelligent forms that adapt to user responses with conditional logic, dynamic fields, and smart behavior. Build forms that think.',
  keywords: 'smart forms, conditional logic, intelligent forms, dynamic forms, adaptive forms, form logic, conditional fields, smart form builder, interactive forms, personalized forms',
}

export default function SmartFormsPage() {
  return (
    <>
    <GoogleAnalytics />
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold tracking-tight">
              fastsubmit<span className="text-purple-600">.</span>
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/docs/conditional-logic" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Documentation
            </Link>
            <Link href="/dashboard/forms/new" className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
              Try It Free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
              NEW: Smart Forms
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Forms That
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Think</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create intelligent forms with conditional logic that adapt to user responses in real-time. 
            Show relevant fields, hide unnecessary ones, and provide a personalized experience for every user.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/dashboard/forms/new/templates"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Try Smart Templates
            </Link>
            <Link 
              href="/docs/conditional-logic"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-sm text-gray-600">Higher completion rates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-sm text-gray-600">Fewer abandoned forms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">3x</div>
              <div className="text-sm text-gray-600">Better user experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intelligent Form Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Build forms that adapt, calculate, and respond to user input with advanced conditional logic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Show/Hide Fields</h3>
              <p className="text-gray-600 mb-4">
                Dynamically show or hide fields based on user responses. Create cleaner, more focused forms.
              </p>
              <div className="text-sm text-green-700 bg-green-100 px-3 py-2 rounded-lg">
                Example: Show "Company Size" only for business customers
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Auto-Calculate Values</h3>
              <p className="text-gray-600 mb-4">
                Create calculated fields that automatically compute values based on other field inputs.
              </p>
              <div className="text-sm text-blue-700 bg-blue-100 px-3 py-2 rounded-lg">
                Example: Auto-calculate total price with tax and discounts
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Dynamic Options</h3>
              <p className="text-gray-600 mb-4">
                Change dropdown options based on previous selections. Create cascading choice menus.
              </p>
              <div className="text-sm text-purple-700 bg-purple-100 px-3 py-2 rounded-lg">
                Example: Update "State" options when "Country" changes
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Requirements</h3>
              <p className="text-gray-600 mb-4">
                Make fields required or optional based on user selections. Collect the right data every time.
              </p>
              <div className="text-sm text-orange-700 bg-orange-100 px-3 py-2 rounded-lg">
                Example: Require "VAT Number" only for EU customers
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Skip Logic</h3>
              <p className="text-gray-600 mb-4">
                Guide users through different paths based on their answers. Create personalized journeys.
              </p>
              <div className="text-sm text-teal-700 bg-teal-100 px-3 py-2 rounded-lg">
                Example: Skip payment info for free plan selections
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-100">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Experience</h3>
              <p className="text-gray-600 mb-4">
                Create unique form experiences for each user based on their responses and preferences.
              </p>
              <div className="text-sm text-pink-700 bg-pink-100 px-3 py-2 rounded-lg">
                Example: Show role-specific questions in job applications
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Smart forms work great for any scenario where you need to collect different information based on user responses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">E-commerce & Sales</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Product inquiry forms that show relevant options</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Quote requests with dynamic pricing calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Lead generation forms with qualification logic</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Customer onboarding with personalized steps</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">HR & Recruitment</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Job applications with role-specific questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Employee onboarding with department-based fields</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Performance reviews with conditional sections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Training registration with skill-based paths</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Events & Registration</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Event registration with ticket type pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Workshop signup with skill level requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Conference registration with session selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Membership applications with tier-based benefits</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Surveys & Research</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Market research with branching questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Customer feedback with product-specific sections</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>User experience surveys with usage-based paths</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Academic research with conditional logic</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Smart Forms Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating intelligent forms is simple with our visual rule builder
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Your Form</h3>
              <p className="text-gray-600">
                Start with any template or build from scratch. Add your fields like normal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Add Logic Rules</h3>
              <p className="text-gray-600">
                Use our visual rule builder to create "if this, then that" conditions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Watch It Work</h3>
              <p className="text-gray-600">
                Your form automatically adapts to user responses in real-time.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <Code className="w-8 h-8 text-purple-400" />
              <div>
                <h3 className="text-xl font-semibold">Example Rule</h3>
                <p className="text-gray-300">Simple conditional logic in action</p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
              <div className="text-blue-400">When</div>
              <div className="ml-4 text-gray-300">"Product Interest" <span className="text-yellow-400">equals</span> "Enterprise Software"</div>
              <div className="text-green-400 mt-2">Then</div>
              <div className="ml-4 text-gray-300">
                <div>• <span className="text-purple-400">Show</span> "Company Size" field</div>
                <div>• <span className="text-purple-400">Require</span> "Budget Range" field</div>
                <div>• <span className="text-purple-400">Set</span> "Priority" to "High"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Smarter Forms?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of businesses using intelligent forms to improve their conversion rates and user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/dashboard/forms/new/templates"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Start with Smart Templates
            </Link>
            <Link 
              href="/docs/conditional-logic"
              className="border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Learn More
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="text-sm text-purple-200 mt-6">
            Free forever plan • No credit card required • Setup in 2 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="inline-block mb-6">
            <span className="text-2xl font-semibold tracking-tight">
              fastsubmit<span className="text-purple-400">.</span>
            </span>
          </Link>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <p className="text-gray-500 text-sm mt-8">
            © 2024 FastSubmit by Hostspica. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  </>
  )
}