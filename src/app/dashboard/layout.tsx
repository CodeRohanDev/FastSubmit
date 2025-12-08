'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import Sidebar from '@/components/Sidebar'
import LoadingSpinner from '@/components/LoadingSpinner'
import EmailVerificationBanner from '@/components/EmailVerificationBanner'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) return <LoadingSpinner />
  if (!user) return null

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      <EmailVerificationBanner />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 flex justify-center">
          <div className="w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
