'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Zap, Book, Code, Send, Database, Key, FileText, Layers, AlertCircle, Gauge, Shield, Menu, X, Brain } from 'lucide-react'
import clsx from 'clsx'

const navSections = [
  {
    title: 'Getting Started',
    items: [
      { href: '/docs', label: 'Introduction', icon: Book },
      { href: '/docs/quickstart', label: 'Quick Start', icon: Zap },
      { href: '/docs/field-types', label: 'Field Types', icon: Layers },
      { href: '/docs/conditional-logic', label: 'Conditional Logic', icon: Brain },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { href: '/docs/api', label: 'API Overview', icon: Code },
      { href: '/docs/submit-endpoint', label: 'Submit Endpoint', icon: Send },
      { href: '/docs/forms', label: 'Forms API', icon: FileText },
      { href: '/docs/submissions', label: 'Submissions API', icon: Database },
    ],
  },
  {
    title: 'Guides',
    items: [
      { href: '/docs/authentication', label: 'Authentication', icon: Key },
      { href: '/docs/domain-verification', label: 'Domain Verification', icon: Shield },
      { href: '/docs/errors', label: 'Error Handling', icon: AlertCircle },
      { href: '/docs/limits', label: 'Fair Use Policy', icon: Gauge },
      { href: '/docs/examples', label: 'Code Examples', icon: Code },
    ],
  },
]

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#fafafa]/80 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <Link href="/" className="block">
              <span className="text-lg sm:text-xl font-semibold tracking-tight">
                fastsubmit<span className="text-indigo-600">.</span>
              </span>
              <p className="text-[9px] text-gray-400 -mt-0.5 hidden sm:block">by Hostspica</p>
            </Link>
            <span className="text-gray-200 hidden sm:inline">|</span>
            <span className="text-sm text-gray-500 hidden sm:inline">Documentation</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            <Link href="/login" className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:inline">
              Login
            </Link>
            <Link href="/signup" className="text-xs sm:text-sm font-medium bg-gray-900 text-white px-3 sm:px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <div className="flex pt-16 relative">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 top-16
          w-64 h-[calc(100vh-4rem)] border-r border-gray-100 bg-white lg:bg-[#fafafa] 
          overflow-y-auto shadow-lg lg:shadow-none
          transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
          transition-transform duration-300 ease-in-out
        `}>
          <nav className="p-4">
            {navSections.map((section) => (
              <div key={section.title} className="mb-6">
                <h3 className="text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-2 px-3">
                  {section.title}
                </h3>
                <div className="space-y-0.5">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={clsx(
                        'flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors',
                        pathname === item.href
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      )}
                    >
                      <item.icon size={16} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full lg:ml-64 p-4 sm:p-6 lg:p-8 min-w-0">
          <div className="max-w-4xl mx-auto lg:mx-0">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
