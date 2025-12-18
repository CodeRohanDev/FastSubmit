import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

interface RelatedPost {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  tags: string[]
}

interface RelatedPostsProps {
  currentSlug: string
  currentTags: string[]
  posts: RelatedPost[]
}

export default function RelatedPosts({ currentSlug, currentTags, posts }: RelatedPostsProps) {
  // Find related posts based on shared tags
  const relatedPosts = posts
    .filter(post => post.slug !== currentSlug)
    .map(post => ({
      ...post,
      relevanceScore: post.tags.filter(tag => currentTags.includes(tag)).length
    }))
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 3)

  if (relatedPosts.length === 0) return null

  return (
    <section className="py-12 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all h-full flex flex-col">
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
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
  )
}