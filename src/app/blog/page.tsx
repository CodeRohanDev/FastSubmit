import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog - Form Builder Tips, Tutorials & Guides | FastSubmit',
  description: 'Learn how to create better forms, surveys, and quizzes. Tips, tutorials, and best practices for form builders and online surveys.',
  keywords: ['form builder blog', 'survey tips', 'form design', 'online forms tutorial'],
}

const blogPosts = [
  {
    slug: 'google-forms-alternative-2025',
    title: 'Best Google Forms Alternatives in 2025: Top 10 Options Compared',
    excerpt: 'Looking for a Google Forms alternative? Discover the top 10 form builders that offer better features, design, and pricing than Google Forms.',
    date: '2024-12-08',
    readTime: '8 min read',
    category: 'Comparisons',
    image: '📊'
  },
  {
    slug: 'how-to-create-online-form',
    title: 'How to Create an Online Form in 5 Minutes (No Coding Required)',
    excerpt: 'Step-by-step guide to creating professional online forms without any coding. Perfect for beginners and non-technical users.',
    date: '2024-12-08',
    readTime: '6 min read',
    category: 'Tutorials',
    image: '📝'
  },
  {
    slug: 'form-builder-guide-2025',
    title: 'The Ultimate Guide to Online Form Builders in 2025',
    excerpt: 'Everything you need to know about online form builders. Features, pricing, comparisons, and how to choose the right one for your needs.',
    date: '2024-12-08',
    readTime: '10 min read',
    category: 'Guides',
    image: '📚'
  },
  {
    slug: 'contact-form-best-practices',
    title: 'Contact Form Best Practices: 15 Tips to Increase Conversions',
    excerpt: 'Learn the best practices for designing contact forms that convert. Proven tips to increase form submissions and reduce abandonment.',
    date: '2024-12-08',
    readTime: '7 min read',
    category: 'Best Practices',
    image: '📬'
  },
  {
    slug: 'survey-design-tips',
    title: '10 Survey Design Tips for Better Response Rates',
    excerpt: 'Create surveys that people actually want to complete. Expert tips for designing engaging surveys with higher response rates.',
    date: '2024-12-08',
    readTime: '6 min read',
    category: 'Tips',
    image: '📊'
  },
  {
    slug: 'form-vs-survey-difference',
    title: 'Forms vs Surveys: What\'s the Difference and When to Use Each',
    excerpt: 'Understand the key differences between forms and surveys, and learn when to use each type for maximum effectiveness.',
    date: '2024-12-08',
    readTime: '5 min read',
    category: 'Guides',
    image: '🤔'
  },
  {
    slug: 'free-form-builder-comparison',
    title: 'Best Free Form Builders in 2025: Complete Comparison',
    excerpt: 'Compare the best free form builders available today. Features, limitations, and which one is right for your needs.',
    date: '2024-12-08',
    readTime: '9 min read',
    category: 'Comparisons',
    image: '⚖️'
  },
  {
    slug: 'form-spam-protection',
    title: 'How to Prevent Spam in Online Forms: 7 Proven Methods',
    excerpt: 'Stop spam submissions with these 7 effective methods. Protect your forms without hurting user experience.',
    date: '2024-12-08',
    readTime: '6 min read',
    category: 'Security',
    image: '🛡️'
  },
  {
    slug: 'mobile-friendly-forms',
    title: 'How to Create Mobile-Friendly Forms That Convert',
    excerpt: 'Mobile optimization is crucial for form success. Learn how to create forms that work perfectly on smartphones and tablets.',
    date: '2024-12-08',
    readTime: '7 min read',
    category: 'Design',
    image: '📱'
  },
  {
    slug: 'form-analytics-guide',
    title: 'Form Analytics: What to Track and How to Improve Conversions',
    excerpt: 'Master form analytics to boost conversions. Learn which metrics matter and how to use data to optimize your forms.',
    date: '2024-12-08',
    readTime: '8 min read',
    category: 'Analytics',
    image: '📈'
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            FastSubmit Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tips, tutorials, and best practices for creating better forms, surveys, and quizzes
          </p>
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
                <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="aspect-[16/9] bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center text-6xl">
                    {post.image}
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to create your form?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Put these tips into practice with FastSubmit
          </p>
          <Link 
            href="/signup" 
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            Get Started Free <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
