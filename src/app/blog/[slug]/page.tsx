import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

// Blog post data
const blogPosts = [
  {
    slug: 'google-forms-alternative-2025',
    title: 'Best Google Forms Alternatives in 2025: Top 10 Options Compared',
    excerpt: 'Looking for a Google Forms alternative? Discover the top 10 form builders that offer better features, design, and multi-platform support.',
    content: 'Google Forms has been the go-to solution for creating simple forms for years. However, as businesses and creators demand more sophisticated features, customization options, and multi-platform support, many are seeking alternatives that offer greater flexibility and functionality. FastSubmit stands out as the most comprehensive Google Forms alternative, offering unlimited forms and submissions completely free forever.',
    date: '2024-12-08',
    readTime: '8 min read',
    category: 'Comparisons',
    tags: ['website', 'social', 'online', 'comparison'],
    author: 'FastSubmit Team'
  },
  {
    slug: 'how-to-create-online-form',
    title: 'How to Create an Online Form in 5 Minutes (No Coding Required)',
    excerpt: 'Step-by-step guide to creating professional online forms for websites, social media, and sharing. Perfect for beginners.',
    content: 'Creating online forms does not have to be complicated or time-consuming. In this guide, we will show you how to create a professional online form in just 5 minutes, without writing a single line of code. The first step is selecting a form builder. For this tutorial, we will use FastSubmit because it is completely free forever.',
    date: '2024-12-08',
    readTime: '6 min read',
    category: 'Tutorials',
    tags: ['website', 'online', 'tutorial'],
    author: 'FastSubmit Team'
  }
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | FastSubmit Blog',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | FastSubmit Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://fastsubmit.hostspica.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FastSubmit",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fastsubmit.hostspica.com/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://fastsubmit.hostspica.com/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags.join(", ")
  }

  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: post.title, href: `/blog/${post.slug}` }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />

        <article className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={breadcrumbItems} />
            
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock size={16} />
                  {post.readTime}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-3 py-6 border-y border-gray-200">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span className="text-indigo-600 font-semibold text-sm">FS</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{post.author}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </div>
                </div>
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed text-lg">
                <p>{post.content}</p>
              </div>
            </div>

            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ready to create your form?
                </h3>
                <p className="text-gray-600 mb-4">
                  Put these tips into practice with FastSubmit's free form builder.
                </p>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Get Started Free
                </Link>
              </div>
            </footer>
          </div>
        </article>

        <Footer variant="extended" />
      </div>
    </>
  )
}