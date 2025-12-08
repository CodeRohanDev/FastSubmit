'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Form } from '@/types'
import { Plus, ChevronRight } from 'lucide-react'
import EmailVerificationGate from '@/components/EmailVerificationGate'

export default function FormsPage() {
  const { user } = useAuth()
  const [forms, setForms] = useState<Form[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchForms() {
      if (!user) return
      try {
        const q = query(
          collection(db, 'forms'),
          where('userId', '==', user.uid),
          orderBy('createdAt', 'desc')
        )
        const snapshot = await getDocs(q)
        // Filter out soft-deleted forms
        const formsData = snapshot.docs
          .filter(doc => !doc.data().deleted)
          .map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate(),
            updatedAt: doc.data().updatedAt?.toDate(),
          })) as Form[]
        setForms(formsData)
      } catch (error) {
        console.error('Error fetching forms:', error)
      }
      setLoading(false)
    }
    fetchForms()
  }, [user])

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-6 h-6 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <EmailVerificationGate>
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Forms</h1>
          <p className="text-gray-500 text-sm mt-1">
            {forms.length === 0 ? 'Create your first form to start collecting submissions' : `${forms.length} form${forms.length !== 1 ? 's' : ''} total`}
          </p>
        </div>
        <Link
          href="/dashboard/forms/new/templates"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
        >
          <Plus size={18} /> New form
        </Link>
      </div>

      {forms.length === 0 ? (
        /* Empty State */
        <div className="text-center py-20 border-2 border-dashed border-gray-200 rounded-2xl bg-gradient-to-b from-gray-50 to-white">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Plus size={32} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No forms yet</h3>
          <p className="text-gray-500 mb-6 max-w-sm mx-auto">
            Get started by creating your first form. Choose from templates or build from scratch.
          </p>
          <Link
            href="/dashboard/forms/new/templates"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
          >
            <Plus size={18} /> Create your first form
          </Link>
        </div>
      ) : (
        /* Forms Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {forms.map((form) => (
            <Link
              key={form.id}
              href={`/dashboard/forms/${form.id}`}
              className="group relative p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all"
            >
              {/* Form Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              {/* Form Name */}
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors truncate">
                {form.name}
              </h3>

              {/* Form Stats */}
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {form.fields?.length || 0} fields
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {form.createdAt?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </span>
              </div>

              {/* Arrow Icon */}
              <div className="absolute bottom-6 right-6">
                <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}

          {/* Add New Form Card */}
          <Link
            href="/dashboard/forms/new/templates"
            className="group relative p-6 border-2 border-dashed border-gray-200 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all flex flex-col items-center justify-center min-h-[200px]"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
              <Plus size={24} className="text-gray-400 group-hover:text-gray-600" />
            </div>
            <p className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
              Create new form
            </p>
          </Link>
        </div>
      )}
    </div>
    </EmailVerificationGate>
  )
}
