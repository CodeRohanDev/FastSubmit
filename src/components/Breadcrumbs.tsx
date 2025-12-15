'use client'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname()
  
  // Auto-generate breadcrumbs if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(Boolean)
    const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', href: '/' }]
    
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      
      // Convert segment to readable name
      let name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      
      // Special cases for better naming
      const nameMap: Record<string, string> = {
        'form-builder': 'Form Builder',
        'google-forms-alternative': 'Google Forms Alternative',
        'use-cases': 'Use Cases',
        'website-embed': 'Website Embed',
        'social-media': 'Social Media',
        'developer-api': 'Developer API',
        'online-forms': 'Online Forms'
      }
      
      if (nameMap[segment]) {
        name = nameMap[segment]
      }
      
      breadcrumbs.push({
        name,
        href: currentPath
      })
    })
    
    return breadcrumbs
  }
  
  const breadcrumbItems = items || generateBreadcrumbs()
  
  // Don't show breadcrumbs on homepage
  if (pathname === '/') return null
  
  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://fastsubmit.cloud${item.href}`
    }))
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        {breadcrumbItems.map((item, index) => (
          <div key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight size={14} className="mx-2" />}
            {index === 0 ? (
              <Link 
                href={item.href} 
                className="flex items-center gap-1 hover:text-gray-700 transition-colors"
              >
                <Home size={14} />
                <span>{item.name}</span>
              </Link>
            ) : index === breadcrumbItems.length - 1 ? (
              <span className="text-gray-900 font-medium">{item.name}</span>
            ) : (
              <Link 
                href={item.href} 
                className="hover:text-gray-700 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}