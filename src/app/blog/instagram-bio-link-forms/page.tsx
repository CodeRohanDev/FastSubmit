import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Instagram, Smartphone, TrendingUp } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How to Create Forms for Instagram Bio Links | FastSubmit',
  description: 'Create beautiful, mobile-optimized forms perfect for your Instagram bio link. Capture leads and grow your following with effective forms.',
  keywords: ['instagram bio link', 'instagram form', 'link in bio', 'instagram lead generation'],
}

export default function InstagramBioLinkFormsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar variant="simple" />

      <article className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-indigo-600 hover:text-indigo-700 mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full">Social Media</span>
            <span className="text-sm text-gray-500">5 min read</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            How to Create Forms for Instagram Bio Links
          </h1>
          <p className="text-xl text-gray-600">
            Create beautiful, mobile-optimized forms perfect for your Instagram bio link. Capture leads and grow your following.
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
            <Instagram className="w-12 h-12 text-pink-600 mb-4" />
            <p className="text-lg text-gray-700 mb-0">
              Your Instagram bio link is prime real estate. With only one clickable link allowed, make it count by 
              directing followers to a high-converting form that captures leads and grows your business.
            </p>
          </div>

          <h2>Why Use Forms for Instagram Bio Links?</h2>
          <p>Instagram bio links are perfect for:</p>
          <ul>
            <li><strong>Lead Generation:</strong> Capture email addresses and contact info</li>
            <li><strong>Giveaway Entries:</strong> Run contests and collect entries</li>
            <li><strong>Event Registration:</strong> Sign up attendees for webinars or events</li>
            <li><strong>Product Waitlists:</strong> Build anticipation for launches</li>
            <li><strong>Feedback Collection:</strong> Get insights from your audience</li>
            <li><strong>Consultation Bookings:</strong> Schedule calls with potential clients</li>
          </ul>

          <h2>Essential Elements of Instagram Bio Link Forms</h2>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Must-Have Features:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-pink-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Mobile-First Design</h4>
                  <p className="text-sm text-gray-600 mb-0">90% of Instagram users are on mobile. Your form must look perfect on phones.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-pink-600 mt-1 shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-900">Fast Loading</h4>
                  <p className="text-sm text-gray-600 mb-0">Forms should load in under 2 seconds to prevent drop-offs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-600 text-xl mt-1">🎨</span>
                <div>
                  <h4 className="font-medium text-gray-900">Eye-Catching Design</h4>
                  <p className="text-sm text-gray-600 mb-0">Match your Instagram aesthetic with custom colors and branding.</p>
                </div>
              </div>
            </div>
          </div>

          <h2>Best Practices for Instagram Bio Link Forms</h2>

          <h3>1. Keep It Short</h3>
          <p>
            Instagram users have short attention spans. Ask for only 2-4 fields maximum:
          </p>
          <ul>
            <li>Name (or just first name)</li>
            <li>Email address</li>
            <li>One optional field (phone, Instagram handle, etc.)</li>
          </ul>

          <h3>2. Clear Value Proposition</h3>
          <p>
            Tell users exactly what they'll get. Examples:
          </p>
          <ul>
            <li>"Enter to win a $500 gift card"</li>
            <li>"Get your free guide to Instagram growth"</li>
            <li>"Join the waitlist for early access"</li>
            <li>"Book your free 30-minute consultation"</li>
          </ul>

          <h3>3. Use Compelling CTAs</h3>
          <p>Instead of boring "Submit" buttons, try:</p>
          <ul>
            <li>"Count Me In! 🎉"</li>
            <li>"Send Me the Guide"</li>
            <li>"Join the Waitlist"</li>
            <li>"Book My Spot"</li>
            <li>"Get Started"</li>
          </ul>

          <h3>4. Add Social Proof</h3>
          <p>Include trust signals like:</p>
          <ul>
            <li>"Join 10,000+ subscribers"</li>
            <li>"Trusted by 5,000+ creators"</li>
            <li>"As seen on [publication]"</li>
          </ul>

          <h2>Form Types That Work Best on Instagram</h2>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">🎁 Giveaway Forms</h4>
              <p className="text-sm text-gray-700 mb-0">Perfect for growing your following and engagement. Collect entries and pick winners.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">📧 Newsletter Signup</h4>
              <p className="text-sm text-gray-700 mb-0">Build your email list with exclusive content offers and updates.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">📅 Event Registration</h4>
              <p className="text-sm text-gray-700 mb-0">Sign up attendees for webinars, workshops, or live events.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-5">
              <h4 className="font-semibold text-gray-900 mb-2">💬 Feedback Forms</h4>
              <p className="text-sm text-gray-700 mb-0">Get insights from your audience about content, products, or services.</p>
            </div>
          </div>

          <h2>Optimizing Your Instagram Bio</h2>

          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Bio Optimization Tips:</h3>
            <ol className="space-y-2 mb-0">
              <li><strong>Clear CTA:</strong> "👇 Enter our giveaway below"</li>
              <li><strong>Emoji:</strong> Use relevant emojis to draw attention</li>
              <li><strong>Urgency:</strong> "Limited spots available!"</li>
              <li><strong>Benefit:</strong> Explain what they'll get</li>
              <li><strong>Short URL:</strong> Use a clean, branded link</li>
            </ol>
          </div>

          <h2>Driving Traffic to Your Form</h2>

          <h3>Instagram Stories</h3>
          <ul>
            <li>Add "Link in Bio" stickers</li>
            <li>Create countdown stickers for urgency</li>
            <li>Use polls to build interest</li>
            <li>Share user testimonials</li>
          </ul>

          <h3>Instagram Posts</h3>
          <ul>
            <li>Mention "link in bio" in captions</li>
            <li>Create carousel posts explaining the offer</li>
            <li>Use eye-catching graphics</li>
            <li>Post consistently about the form</li>
          </ul>

          <h3>Instagram Reels</h3>
          <ul>
            <li>Create engaging Reels about your offer</li>
            <li>Add text overlay: "Link in bio"</li>
            <li>Use trending audio</li>
            <li>Show the value of what you're offering</li>
          </ul>

          <h2>Tracking Performance</h2>

          <p>Monitor these metrics to optimize your forms:</p>
          <ul>
            <li><strong>Click-through rate:</strong> Bio link clicks / profile visits</li>
            <li><strong>Conversion rate:</strong> Form submissions / bio link clicks</li>
            <li><strong>Completion rate:</strong> Completed forms / started forms</li>
            <li><strong>Time to complete:</strong> How long users take to fill out</li>
          </ul>

          <h2>Common Mistakes to Avoid</h2>

          <div className="bg-red-50 rounded-xl p-6 my-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">❌ Don't Do This:</h3>
            <ul className="space-y-2 mb-0">
              <li>Asking for too much information (keep it to 2-4 fields)</li>
              <li>Using forms that aren't mobile-optimized</li>
              <li>Slow-loading forms (users will bounce)</li>
              <li>Generic, boring designs that don't match your brand</li>
              <li>No clear value proposition</li>
              <li>Forgetting to follow up with submissions</li>
            </ul>
          </div>

          <h2>Success Story Example</h2>

          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 my-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Real Results:</h3>
            <p className="text-gray-700 mb-3">
              A beauty influencer used a giveaway form in her Instagram bio:
            </p>
            <ul className="text-gray-700 space-y-1 mb-0">
              <li>• 15,000 form submissions in 7 days</li>
              <li>• 8,000 new email subscribers</li>
              <li>• 25% increase in Instagram followers</li>
              <li>• $12,000 in sales from email follow-ups</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white my-8">
            <h3 className="text-2xl font-bold mb-3">Ready to Create Your Instagram Bio Link Form?</h3>
            <p className="mb-6 text-white/90">
              Create mobile-optimized forms perfect for Instagram in minutes. Free forever.
            </p>
            <Link 
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started Free <ArrowRight size={18} />
            </Link>
          </div>

          <h2>Conclusion</h2>
          <p>
            Your Instagram bio link is valuable real estate. By using a well-designed, mobile-optimized form, 
            you can capture leads, grow your email list, and turn followers into customers. Keep forms short, 
            provide clear value, and make the design match your Instagram aesthetic.
          </p>
          <p>
            Test different offers, track your metrics, and continuously optimize. With the right approach, 
            your Instagram bio link form can become one of your most powerful lead generation tools.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/social-media-forms-guide" className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Social Media Lead Generation Guide</h4>
              <p className="text-sm text-gray-600">Complete guide to using forms across all social platforms.</p>
            </Link>
            <Link href="/blog/mobile-friendly-forms" className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Mobile-Friendly Forms</h4>
              <p className="text-sm text-gray-600">How to create forms that work perfectly on mobile devices.</p>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
