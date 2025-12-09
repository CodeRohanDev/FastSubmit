'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { ChevronDown, Globe, Share2, Code, Smartphone, Menu, X } from 'lucide-react'

interface NavbarProps {
  variant?: 'default' | 'simple'
}

export default function Navbar({ variant = 'default' }: NavbarProps) {
  const { user } = useAuth()
  const [useCasesOpen, setUseCasesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const useCases = [
    { name: 'Website Embeds', href: '/use-cases/website-embed', icon: <Globe size={18} />, desc: 'Embed forms on any website' },
    { name: 'Social Media', href: '/use-cases/social-media', icon: <Share2 size={18} />, desc: 'Share on Instagram, Facebook & more' },
    { name: 'Developer API', href: '/use-cases/developer-api', icon: <Code size={18} />, desc: 'Integrate with your apps' },
    { name: 'Online Forms', href: '/use-cases/online-forms', icon: <Smartphone size={18} />, desc: 'Shareable forms like Google Forms' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-[#fafafa]/80 backdrop-blur-xl z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-semibold tracking-tight leading-none">
            fastsubmit<span className="text-indigo-600">.</span>
          </span>
          <span className="text-[10px] text-gray-400 tracking-wide">by hostspica</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {variant === 'default' && (
            <>
              {/* Use Cases Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setUseCasesOpen(true)}
                onMouseLeave={() => setUseCasesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Use Cases <ChevronDown size={14} className={`transition-transform ${useCasesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {useCasesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 w-72">
                      {useCases.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/form-builder" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Form Builder
              </Link>
              <Link href="/templates" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Templates
              </Link>
            </>
          )}
          <Link href="/docs" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            Docs
          </Link>
          {user ? (
            <Link href="/dashboard" className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Login
              </Link>
              <Link href="/signup" className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">
          <div className="space-y-4">
            {variant === 'default' && (
              <>
                <div className="pb-2 border-b border-gray-100">
                  <div className="text-xs font-medium text-gray-400 uppercase mb-2">Use Cases</div>
                  {useCases.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-2 py-2 text-sm text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Link href="/form-builder" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                  Form Builder
                </Link>
                <Link href="/templates" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                  Templates
                </Link>
              </>
            )}
            <Link href="/docs" className="block py-2 text-sm text-gray-600" onClick={() => setMobileMenuOpen(false)}>
              Docs
            </Link>
            <div className="pt-4 border-t border-gray-100 flex gap-3">
              {user ? (
                <Link href="/dashboard" className="flex-1 text-center text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full" onClick={() => setMobileMenuOpen(false)}>
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/login" className="flex-1 text-center text-sm text-gray-600 px-4 py-2 border border-gray-200 rounded-full" onClick={() => setMobileMenuOpen(false)}>
                    Login
                  </Link>
                  <Link href="/signup" className="flex-1 text-center text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
