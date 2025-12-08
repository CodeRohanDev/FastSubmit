import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Share2, Instagram, Facebook, Twitter, Linkedin, TrendingUp, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How to Use Forms for Social Media Lead Generation | FastSubmit',
  description: 'Learn how to create and share forms on Instagram, Facebook, Twitter, and LinkedIn to generate leads and grow your audience. Complete guide with examples.',
  keywords: ['social media forms', 'instagram forms', 'facebook lead generation', 'social media marketing'],
}

export default function SocialMediaFormsGuidePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar variant="simple" />

      <article className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        {/* Header */}
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-indigo-600 hover:text-indigo-700 mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full">Social Media</span>
            <span className="text-sm text-gray-500">7 min read</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            How to Use Forms for Social Media Lead Generation
          </h1>
          <p className="text-xl text-gray-600">
            Learn how to create and share forms on Instagram, Facebook, Twitter, and LinkedIn to generate leads and grow your audience.
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm text-gray-500">
            <span>December 8, 2024</span>
            <span>•</span>
            <span>by FastSubmit Team</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 mb-8">
            <Share2 className="w-12 h-12 text-pink-600 mb-4" />
            <p className="text-lg text-gray-700 mb-0">
              Social media is one of the most powerful channels for lead generation. With billions of active users across platforms, 
              forms are the perfect tool to capture leads, run contests, and engage your audience.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why Use Forms on Social Media?</h2>
          
          <p>
            Social media platforms are where your audience spends most of their time. By using forms strategically, you can:
          </p>

          <ul className="space-y-2">
            <li><strong>Capture leads directly</strong> from your social media followers</li>
            <li><strong>Run contests and giveaways</strong> to increase engagement</li>
            <li><strong>Collect feedback</strong> from your audience</li>
            <li><strong>Register attendees</strong> for events and webinars</li>
            <li><strong>Grow your email list</strong> for future marketing</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Platform-Specific Strategies</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3 flex items-center gap-2">
            <Instagram className="w-6 h-6 text-pink-600" />
            Instagram
          </h3>
          
          <p>
            Instagram is perfect for visual brands and influencers. Here's how to use forms effectively:
          </p>

          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h4 className="font-semibold text-gray-900 mb-3">Best Practices for Instagram:</h4>
            <ul className="space-y-2 mb-0">
              <li><strong>Bio Link:</strong> Add your form link to your Instagram bio</li>
              <li><strong>Stories:</strong> Share form links in Stories with swipe-up (if available)</li>
              <li><strong>Posts:</strong> Mention "link in bio" in your captions</li>
              <li><strong>Reels:</strong> Create engaging Reels that drive traffic to your form</li>
              <li><strong>DMs:</strong> Use automated DM responses with form links</li>
            </ul>
          </div>

          <p><strong>Example Use Cases:</strong></p>
          <ul>
            <li>Giveaway entry forms</li>
            <li>Influencer collaboration requests</li>
            <li>Product waitlist signups</li>
            <li>Free resource downloads</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3 flex items-center gap-2">
            <Facebook className="w-6 h-6 text-blue-600" />
            Facebook
          </h3>

          <p>
            Facebook offers multiple ways to share forms with your audience:
          </p>

          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h4 className="font-semibold text-gray-900 mb-3">Best Practices for Facebook:</h4>
            <ul className="space-y-2 mb-0">
              <li><strong>Posts:</strong> Share form links directly in posts with compelling copy</li>
              <li><strong>Groups:</strong> Share forms in relevant Facebook Groups</li>
              <li><strong>Events:</strong> Add registration forms to event descriptions</li>
              <li><strong>Ads:</strong> Run Facebook Ads that link to your forms</li>
              <li><strong>Messenger:</strong> Use chatbots to share form links</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3 flex items-center gap-2">
            <Twitter className="w-6 h-6 text-gray-900" />
            Twitter/X
          </h3>

          <p>
            Twitter is great for quick engagement and viral content:
          </p>

          <ul>
            <li><strong>Pinned Tweet:</strong> Pin a tweet with your form link to your profile</li>
            <li><strong>Thread:</strong> Create engaging threads that lead to your form</li>
            <li><strong>Bio:</strong> Add form link to your Twitter bio</li>
            <li><strong>Polls:</strong> Use polls to drive interest, then share form link</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3 flex items-center gap-2">
            <Linkedin className="w-6 h-6 text-blue-700" />
            LinkedIn
          </h3>

          <p>
            LinkedIn is perfect for B2B lead generation:
          </p>

          <ul>
            <li><strong>Posts:</strong> Share valuable content with form links</li>
            <li><strong>Articles:</strong> Write LinkedIn articles with embedded forms</li>
            <li><strong>Profile:</strong> Add form link to your featured section</li>
            <li><strong>Messages:</strong> Share forms in professional conversations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Creating Effective Social Media Forms</h2>

          <div className="bg-blue-50 rounded-xl p-6 my-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Key Elements of High-Converting Forms:
            </h4>
            <ol className="space-y-3 mb-0">
              <li><strong>1. Mobile-First Design:</strong> 80% of social media users are on mobile</li>
              <li><strong>2. Short & Simple:</strong> Ask only essential questions (3-5 fields max)</li>
              <li><strong>3. Clear Value Proposition:</strong> Tell users what they'll get</li>
              <li><strong>4. Eye-Catching Design:</strong> Match your brand colors and style</li>
              <li><strong>5. Fast Loading:</strong> Forms should load instantly</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Lead Magnet Ideas for Social Media</h2>

          <p>
            Offer something valuable in exchange for form submissions:
          </p>

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Free Resources</h4>
              <ul className="text-sm space-y-1 mb-0">
                <li>• eBooks and guides</li>
                <li>• Templates and checklists</li>
                <li>• Video tutorials</li>
                <li>• Exclusive content</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Contests & Giveaways</h4>
              <ul className="text-sm space-y-1 mb-0">
                <li>• Product giveaways</li>
                <li>• Free consultations</li>
                <li>• Discount codes</li>
                <li>• Early access</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Events & Webinars</h4>
              <ul className="text-sm space-y-1 mb-0">
                <li>• Live workshops</li>
                <li>• Q&A sessions</li>
                <li>• Virtual events</li>
                <li>• Masterclasses</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Exclusive Access</h4>
              <ul className="text-sm space-y-1 mb-0">
                <li>• VIP community</li>
                <li>• Beta testing</li>
                <li>• Newsletter signup</li>
                <li>• Member benefits</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Tracking & Optimization</h2>

          <p>
            To maximize your social media lead generation:
          </p>

          <ul>
            <li><strong>Use UTM Parameters:</strong> Track which platform drives the most leads</li>
            <li><strong>A/B Test:</strong> Try different form designs and copy</li>
            <li><strong>Monitor Analytics:</strong> Track views, submissions, and conversion rates</li>
            <li><strong>Follow Up Quickly:</strong> Respond to submissions within 24 hours</li>
            <li><strong>Retarget:</strong> Use pixel tracking for retargeting campaigns</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Common Mistakes to Avoid</h2>

          <div className="bg-red-50 rounded-xl p-6 my-6">
            <h4 className="font-semibold text-gray-900 mb-3">❌ Don't Do This:</h4>
            <ul className="space-y-2 mb-0">
              <li>Asking for too much information upfront</li>
              <li>Using forms that aren't mobile-optimized</li>
              <li>Not providing clear value in exchange</li>
              <li>Forgetting to follow up with leads</li>
              <li>Using generic, boring form designs</li>
              <li>Not testing your forms before sharing</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Real-World Examples</h2>

          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h4 className="font-semibold text-gray-900 mb-3">Success Story: Fashion Brand</h4>
            <p className="text-gray-700 mb-2">
              A fashion brand used Instagram Stories to promote a giveaway form. Results:
            </p>
            <ul className="text-gray-700 space-y-1 mb-0">
              <li>• 5,000+ form submissions in 48 hours</li>
              <li>• 2,500 new email subscribers</li>
              <li>• 15% conversion rate from form to purchase</li>
              <li>• 300% ROI on the campaign</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Getting Started with FastSubmit</h2>

          <p>
            FastSubmit makes it easy to create forms optimized for social media:
          </p>

          <ul>
            <li>✅ Mobile-first design that looks great on all devices</li>
            <li>✅ Shareable links perfect for bio links and posts</li>
            <li>✅ QR codes for offline-to-online campaigns</li>
            <li>✅ Custom branding to match your social presence</li>
            <li>✅ Real-time notifications when someone submits</li>
            <li>✅ Analytics to track performance</li>
          </ul>

          <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white my-8">
            <h3 className="text-2xl font-bold mb-3">Ready to Generate Leads on Social Media?</h3>
            <p className="mb-6 text-white/90">
              Create your first social media form in minutes. Free forever, no credit card required.
            </p>
            <Link 
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started Free <ArrowRight size={18} />
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Conclusion</h2>

          <p>
            Social media forms are a powerful tool for lead generation when used correctly. Focus on providing value, 
            keeping forms simple, and optimizing for mobile. With the right strategy, you can turn your social media 
            followers into valuable leads and customers.
          </p>

          <p>
            Start small, test different approaches, and scale what works. The key is consistency and providing 
            genuine value to your audience.
          </p>
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/instagram-bio-link-forms" className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">How to Create Forms for Instagram Bio Links</h4>
              <p className="text-sm text-gray-600">Create mobile-optimized forms perfect for your Instagram bio link.</p>
            </Link>
            <Link href="/blog/contact-form-best-practices" className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Contact Form Best Practices</h4>
              <p className="text-sm text-gray-600">15 tips to increase form conversions and reduce abandonment.</p>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
