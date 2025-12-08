'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { collection, query, where, getDocs, limit } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Plus, ArrowRight } from 'lucide-react'
import EmailVerificationGate from '@/components/EmailVerificationGate'

export default function DashboardPage() {
  const { user } = useAuth()
  const [stats, setStats] = useState({ forms: 0, submissions: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      if (!user) return
      try {
        const formsQuery = query(collection(db, 'forms'), where('userId', '==', user.uid))
        const formsSnap = await getDocs(formsQuery)
        
        // Filter out soft-deleted forms
        const activeForms = formsSnap.docs.filter(doc => !doc.data().deleted)
        
        let totalSubmissions = 0
        for (const formDoc of activeForms) {
          const subsQuery = query(collection(db, 'forms', formDoc.id, 'submissions'), limit(1000))
          const subsSnap = await getDocs(subsQuery)
          // Filter out soft-deleted submissions
          const activeSubmissions = subsSnap.docs.filter(doc => !doc.data().deleted)
          totalSubmissions += activeSubmissions.length
        }
        
        setStats({ forms: activeForms.length, submissions: totalSubmissions })
      } catch (error) {
        console.error('Error fetching stats:', error)
      }
      setLoading(false)
    }
    fetchStats()
  }, [user])

  return (
    <EmailVerificationGate>
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          Welcome back{user?.displayName ? `, ${user.displayName}` : ''}! 👋
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Here's what's happening with your forms today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Forms */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-semibold text-gray-900 mb-1">
            {loading ? (
              <span className="inline-block w-12 h-8 bg-gray-200 rounded animate-pulse"></span>
            ) : (
              stats.forms
            )}
          </p>
          <p className="text-sm text-gray-500">Total Forms</p>
        </div>

        {/* Total Submissions */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-semibold text-gray-900 mb-1">
            {loading ? (
              <span className="inline-block w-12 h-8 bg-gray-200 rounded animate-pulse"></span>
            ) : (
              stats.submissions
            )}
          </p>
          <p className="text-sm text-gray-500">Total Submissions</p>
        </div>

        {/* Average per Form */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
          </div>
          <p className="text-2xl font-semibold text-gray-900 mb-1">
            {loading ? (
              <span className="inline-block w-12 h-8 bg-gray-200 rounded animate-pulse"></span>
            ) : (
              stats.forms > 0 ? Math.round(stats.submissions / stats.forms) : 0
            )}
          </p>
          <p className="text-sm text-gray-500">Avg per Form</p>
        </div>

        {/* Quick Action Card */}
        <Link
          href="/dashboard/forms/new/templates"
          className="group bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl p-6 hover:shadow-lg transition-all relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <p className="text-lg font-semibold text-white mb-1">New Form</p>
            <p className="text-sm text-gray-300">Create from template</p>
          </div>
        </Link>
      </div>

      {/* Quick Actions Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Getting Started */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-gray-900 rounded-full"></div>
            Quick Start
          </h2>
          <div className="space-y-3">
            <Link 
              href="/dashboard/forms/new/templates"
              className="group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Plus className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 mb-1">Create your first form</p>
                <p className="text-sm text-gray-500">Choose from templates or build from scratch</p>
              </div>
              <ArrowRight size={18} className="text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
            </Link>
            
            <Link 
              href="/docs/quickstart"
              className="group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 mb-1">Read the documentation</p>
                <p className="text-sm text-gray-500">Learn how to integrate FastSubmit</p>
              </div>
              <ArrowRight size={18} className="text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
            </Link>

            <Link 
              href="/dashboard/settings"
              className="group flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 mb-1">Verify your domain</p>
                <p className="text-sm text-gray-500">Secure your forms with domain verification</p>
              </div>
              <ArrowRight size={18} className="text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-gray-900 rounded-full"></div>
            Resources
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">API Endpoint</p>
                  <code className="text-xs font-mono text-indigo-700 bg-white/60 px-2 py-1 rounded">
                    POST /api/submit/[formId]
                  </code>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Send form submissions directly to your forms via our REST API
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/docs"
                className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-center"
              >
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">Docs</p>
              </Link>

              <Link
                href="/docs/domain-verification"
                className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-center"
              >
                <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-900">Security</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </EmailVerificationGate>
  )
}
