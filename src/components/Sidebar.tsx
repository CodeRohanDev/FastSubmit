'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { LayoutDashboard, FileText, Settings, LogOut, ExternalLink } from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/forms', label: 'Forms', icon: FileText },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
]

interface SidebarProps {
  onNavigate?: () => void
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { signOut, user } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  const handleNavClick = () => {
    onNavigate?.()
  }

  return (
    <aside className="w-60 bg-white lg:bg-[#fafafa] border-r border-gray-200 lg:border-gray-100 min-h-screen flex flex-col shadow-lg lg:shadow-none">
      <div className="p-6 hidden lg:block">
        <Link href="/" className="block">
          <span className="text-lg font-semibold tracking-tight">
            fastsubmit<span className="text-indigo-600">.</span>
          </span>
          <p className="text-[10px] text-gray-400 mt-0.5">by Hostspica</p>
        </Link>
      </div>
      
      <nav className="flex-1 px-3 pt-6 lg:pt-0">
        <div className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className={clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors',
                pathname === item.href 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              )}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <Link
            href="/docs"
            onClick={handleNavClick}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <ExternalLink size={18} />
            Documentation
          </Link>
        </div>
      </nav>

      <div className="p-3 border-t border-gray-100">
        <div className="px-3 py-2 mb-2">
          <p className="text-sm font-medium text-gray-900 truncate">{user?.email}</p>
          <p className="text-xs text-gray-400">Free plan</p>
        </div>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors w-full"
        >
          <LogOut size={18} />
          Sign out
        </button>
      </div>
    </aside>
  )
}
