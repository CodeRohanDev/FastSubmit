import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Globe, Share2, Code } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Blog - Free Form Builder Tips, Tutorials & Guides | FastSubmit',
  description: 'Learn how to create better forms for websites, social media, and online sharing. Tips, tutorials, and best practices. Best free form builder guides. Better than Google Forms, Zoho Forms, Microsoft Forms.',
  keywords: [
    'form builder blog',
    'form builder',
    'free form builder',
    'google forms',
    'forms',
    'quiz maker',
    'online form builder',
    'google form alternative',
    'free online form',
    'ai form builder',
    'form builder free',
    'form builder online',
    'free form',
    'online forms',
    'free online forms',
    'form maker',
    'online form maker',
    'best form maker',
    'best form builder',
    'hostspica forms',
    'forms hostspica',
    'form to excel',
    'form to pdf',
    'zoho forms',
    'microsoft forms',
    'create free forms',
    'easy forms',
    'form api',
    'free form api'
  ],
}

const blogPosts = [
  {
    slug: 'google-forms-alternative-2025',
    title: 'Best Google Forms Alternatives in 2025: Top 10 Options Compared',
    excerpt: 'Looking for a Google Forms alternative? Discover the top 10 form builders that offer better features, design, and multi-platform support.',
    date: '2024-12-08',
    readTime: '8 min read',
    category: 'Comparisons',
    image: '📊',
    tags: ['website', 'social', 'online']
  },
  {
    slug: 'how-to-create-online-form',
    title: 'How to Create an Online Form in 5 Minutes (No Coding Required)',
    excerpt: 'Step-by-step guide to creating professional online forms for websites, social media, and sharing. Perfect for beginners.',
    date: '2024-12-08',
    readTime: '6 min read',
    category: 'Tutorials',
    image: '📝',
    tags: ['website', 'online']
  },
  {
    slug: 'social-media-forms-guide',
    title: 'How to Use Forms for Social Media Lead Generation',
    excerpt: 'Learn how to create and share forms on Instagram, Facebook, Twitter, and LinkedIn to generate leads and grow your audience.',
    date: '2024-12-08',
    readTime: '7 min read',
    category: 'Social Media',
    image: '📱',
    tags: ['social']
  },
  {
    slug: 'embed-forms-website',
    title: 'How to Embed Forms on Your Website: Complete Guide',
    excerpt: 'Everything you need to know about embedding forms on WordPress, Shopify, Webflow, and any HTML website.',
    date: '2024-12-08',
    readTime: '8 min read',
    category: 'Website',
    image: '🌐',
    tags: ['website']
  },
  {
    slug: 'form-builder-guide-2025',
    title: 'The Ultimate Guide to Online Form Builders in 2025',
    excerpt: 'Everything you need to know about online form builders. Features, pricing, comparisons, and how to choose the right one.',
    date: '2024-12-08',
    readTime: '10 min read',
    category: 'Guides',
    image: '📚',
    tags: ['website', 'social', 'online']
  },
  {
    slug: 'contact-form-best-practices',
    title: 'Contact Form Best Practices: 15 Tips to Increase Conversions',
    excerpt: 'Learn the best practices for designing contact forms that convert. Proven tips for websites and social media.',
    date: '2024-12-08',
    readTime: '7 min read',
    category: 'Best Practices',
    image: '📬',
    tags: ['website', 'online']
  },
  {
    slug: 'instagram-bio-link-forms',
    title: 'How to Create Forms for Instagram Bio Links',
    excerpt: 'Create beautiful, mobile-optimized forms perfect for your Instagram bio link. Capture leads and grow your following.',
    date: '2024-12-08',
    readTime: '5 min read',
    category: 'Social Media',
    image: '📸',
    tags: ['social']
  },
  {
    slug: 'form-api-integration',
    title: 'Form API Integration: A Developer\'s Guide',
    excerpt: 'Learn how to integrate forms into your apps using REST APIs. Webhooks, authentication, and best practices.',
    date: '2024-12-08',
    readTime: '9 min read',
    category: 'Developer',
    image: '💻',
    tags: ['api']
  },
  {
    slug: 'survey-design-tips',
    title: '10 Survey Design Tips for Better Response Rates',
    excerpt: 'Create surveys that people actually want to complete. Expert tips for designing engaging surveys.',
    date: '2024-12-08',
    readTime: '6 min read',
    category: 'Tips',
    image: '📊',
    tags: ['website', 'social', 'online']
  },
  {
    slug: 'form-spam-protection',
    title: 'How to Prevent Spam in Online Forms: 7 Proven Methods',
    excerpt: 'Stop spam submissions with these 7 effective methods. Protect your forms without hurting user experience.',
    date: '2024-12-08',
    readTime: '6 min read',
    category: 'Security',
    image: '🛡️',
    tags: ['website', 'online']
  },
]

const tagIcons: Record<string, React.ReactNode> = {
  website: <Globe size={10} className="text-blue-600" />,
  social: <Share2 size={10} className="text-pink-600" />,
  online: <Globe size={10} className="text-green-600" />,
  api: <Code size={10} className="text-purple-600" />,
}

const tagColors: Record<string, string> = {
  website: 'bg-blue-50',
  social: 'bg-pink-50',
  online: 'bg-green-50',
  api: 'bg-purple-50',
}

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "FastSubmit Blog - Form Builder Tips & Tutorials",
    "description": "Learn how to create better forms for websites, social media, and online sharing. Tips, tutorials, and best practices for form builders.",
    "url": "https://fastsubmit.cloud/blog",
    "publisher": {
      "@type": "Organization",
      "name": "FastSubmit",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fastsubmit.cloud/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://fastsubmit.cloud/blog"
    }
  }

  return (
    <>
    <GoogleAnalytics />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />

        {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            FastSubmit Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Tips, tutorials, and best practices for creating forms for websites, social media, and online sharing
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2">
            <button className="px-4 py-2 rounded-full text-sm bg-gray-900 text-white">All Posts</button>
            <button className="px-4 py-2 rounded-full text-sm bg-white text-gray-600 border border-gray-200 hover:border-gray-300 flex items-center gap-1">
              <Globe size={14} className="text-blue-600" /> Website
            </button>
            <button className="px-4 py-2 rounded-full text-sm bg-white text-gray-600 border border-gray-200 hover:border-gray-300 flex items-center gap-1">
              <Share2 size={14} className="text-pink-600" /> Social Media
            </button>
            <button className="px-4 py-2 rounded-full text-sm bg-white text-gray-600 border border-gray-200 hover:border-gray-300 flex items-center gap-1">
              <Code size={14} className="text-purple-600" /> Developer
            </button>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <Link
                key={i}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all h-full flex flex-col">
                  <div className="aspect-[16/9] bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-5xl relative">
                    {post.image}
                    <div className="absolute top-3 right-3 flex gap-1">
                      {post.tags.map((tag) => (
                        <span key={tag} className={`w-5 h-5 ${tagColors[tag]} rounded-full flex items-center justify-center`}>
                          {tagIcons[tag]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock size={12} />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <span className="text-sm text-indigo-600 group-hover:text-indigo-700 flex items-center gap-1">
                        Read more <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
            Ready to create your form?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Put these tips into practice with FastSubmit
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started Free <ArrowRight size={20} />
          </Link>
        </div>
      </section>

        <Footer variant="extended" />
      </div>
    </>
  )
}
