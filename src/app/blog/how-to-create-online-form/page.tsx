import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How to Create an Online Form in 5 Minutes (No Coding Required)',
  description: 'Learn how to create professional online forms in just 5 minutes without coding. Step-by-step guide with tips for better forms and higher conversions.',
  keywords: ['how to create online form', 'create form online', 'online form maker', 'make online form'],
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Article */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                Tutorials
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  Dec 8, 2024
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  6 min read
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              How to Create an Online Form in 5 Minutes (No Coding Required)
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn how to create professional online forms quickly and easily without writing a single line of code.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Creating an online form doesn't have to be complicated or time-consuming. Whether you need a contact form for your website, a survey for customer feedback, or a registration form for an event, you can create professional forms in just 5 minutes without writing a single line of code.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              In this step-by-step guide, we'll show you exactly how to create an online form using FastSubmit, a free form builder that makes the process incredibly simple.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Why Create Online Forms?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Online forms are essential for modern businesses and organizations. They help you:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Collect customer information efficiently</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Gather feedback and insights</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Process registrations and applications</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Generate leads for your business</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Conduct surveys and research</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Accept orders and bookings</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Step 1: Choose Your Form Builder
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              The first step is selecting the right form builder. While there are many options available, <Link href="/" className="text-indigo-600 hover:text-indigo-700">FastSubmit</Link> stands out because it's:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Completely free with no limits</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Easy to use with no coding required</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Packed with professional features</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span>Mobile-responsive by default</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Step 2: Sign Up (30 Seconds)
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Visit FastSubmit.com and create your free account. You only need an email address - no credit card required. The signup process takes less than 30 seconds.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Step 3: Select a Template or Start from Scratch
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              FastSubmit offers <Link href="/templates" className="text-indigo-600 hover:text-indigo-700">100+ pre-built templates</Link> for common use cases:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="text-gray-700">• Contact forms</li>
              <li className="text-gray-700">• Survey forms</li>
              <li className="text-gray-700">• Registration forms</li>
              <li className="text-gray-700">• Feedback forms</li>
              <li className="text-gray-700">• Order forms</li>
              <li className="text-gray-700">• And many more</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              You can either choose a template that matches your needs or start with a blank form. Templates save time and provide professional designs out of the box.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Step 4: Add Your Form Fields
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              This is where you customize your form. Simply drag and drop the fields you need:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Text fields</strong> for names and short answers</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Email fields</strong> with built-in validation</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Textarea</strong> for longer responses</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Dropdown menus</strong> for multiple choice</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Checkboxes</strong> for yes/no questions</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Date pickers</strong> for scheduling</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>File upload</strong> for documents</span>
              </li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Each field can be customized with custom labels, placeholder text, required/optional settings, and help text for users.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Step 5: Customize the Design
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Make your form match your brand:
            </p>

            <ul className="space-y-2 mb-8">
              <li className="text-gray-700">• Choose your brand colors</li>
              <li className="text-gray-700">• Upload your logo</li>
              <li className="text-gray-700">• Select fonts that match your website</li>
              <li className="text-gray-700">• Customize button text and colors</li>
              <li className="text-gray-700">• Add a custom thank you message</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Step 6: Configure Settings
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Set up how your form works:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Email notifications:</strong> Get notified when someone submits</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Auto-responder:</strong> Send automatic confirmation emails</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Redirect:</strong> Send users to a specific page after submission</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Spam protection:</strong> Enable honeypot or reCAPTCHA</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Step 7: Publish and Share
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Once your form is ready, you have multiple sharing options:
            </p>

            <ul className="space-y-2 mb-8">
              <li className="text-gray-700">• Get a direct link to share anywhere</li>
              <li className="text-gray-700">• Embed the form on your website</li>
              <li className="text-gray-700">• Generate a QR code for print materials</li>
              <li className="text-gray-700">• Share on social media</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Tips for Better Forms
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              To maximize responses and user experience:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Keep it short:</strong> Only ask for essential information</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Use clear labels:</strong> Make it obvious what you're asking for</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Mobile-first:</strong> Test on mobile devices</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Add progress indicators:</strong> For multi-page forms</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3">
                <span className="text-indigo-600 mt-1">•</span>
                <span><strong>Thank users:</strong> Show appreciation for their time</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Common Mistakes to Avoid
            </h2>

            <ul className="space-y-2 mb-8">
              <li className="text-gray-700">• Asking for too much information</li>
              <li className="text-gray-700">• Making all fields required</li>
              <li className="text-gray-700">• Using confusing language</li>
              <li className="text-gray-700">• Not testing before publishing</li>
              <li className="text-gray-700">• Forgetting mobile optimization</li>
              <li className="text-gray-700">• No confirmation message</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Conclusion
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Creating an online form is quick and easy with the right tool. FastSubmit makes it possible to create professional forms in just 5 minutes, without any coding knowledge. Whether you need a simple contact form or a complex survey, you can have it up and running in no time.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Ready to create your first form? Sign up for FastSubmit free and start collecting responses today.
            </p>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to create your first online form?
              </h3>
              <p className="text-gray-700 mb-6">
                Start building professional forms in minutes. No credit card required.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Get Started Free <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Author & Share */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Written by</p>
                <p className="font-semibold text-gray-900">FastSubmit Team</p>
              </div>
              <Link
                href="/blog"
                className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
              >
                More articles <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
