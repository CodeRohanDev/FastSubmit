'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { collection, query, where, getDocs, limit } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Plus, ArrowRight } from 'lucide-react'

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
    <div className="max-w-4xl">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Overview</h1>
          <p className="text-gray-500 mt-1">Welcome back{user?.displayName ? `, ${user.displayName}` : ''}</p>
        </div>
        <Link
          href="/dashboard/forms/new"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          <Plus size={18} /> New form
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-[#fafafa] rounded-xl p-6">
          <p className="text-sm text-gray-500 mb-1">Total forms</p>
          <p className="text-3xl font-semibold text-gray-900">
            {loading ? '—' : stats.forms}
          </p>
        </div>
        <div className="bg-[#fafafa] rounded-xl p-6">
          <p className="text-sm text-gray-500 mb-1">Total submissions</p>
          <p className="text-3xl font-semibold text-gray-900">
            {loading ? '—' : stats.submissions}
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="border border-gray-100 rounded-xl p-6">
        <h2 className="font-medium text-gray-900 mb-4">Quick start</h2>
        <div className="space-y-3">
          <Link 
            href="/dashboard/forms/new"
            className="flex items-center justify-between p-4 bg-[#fafafa] rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <div>
              <p className="font-medium text-gray-900">Create your first form</p>
              <p className="text-sm text-gray-500">Set up a form and start collecting submissions</p>
            </div>
            <ArrowRight size={18} className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link 
            href="/docs/quickstart"
            className="flex items-center justify-between p-4 bg-[#fafafa] rounded-lg hover:bg-gray-100 transition-colors group"
          >
            <div>
              <p className="font-medium text-gray-900">Read the documentation</p>
              <p className="text-sm text-gray-500">Learn how to integrate FastSubmit</p>
            </div>
            <ArrowRight size={18} className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  )
}
