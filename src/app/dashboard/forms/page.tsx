'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Form } from '@/types'
import { Plus, ChevronRight } from 'lucide-react'

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
    <div className="max-w-4xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Forms</h1>
        <Link
          href="/dashboard/forms/new"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          <Plus size={18} /> New form
        </Link>
      </div>

      {forms.length === 0 ? (
        <div className="text-center py-16 border border-dashed border-gray-200 rounded-xl">
          <p className="text-gray-500 mb-4">No forms yet</p>
          <Link
            href="/dashboard/forms/new"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <Plus size={18} /> Create your first form
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {forms.map((form) => (
            <Link
              key={form.id}
              href={`/dashboard/forms/${form.id}`}
              className="flex items-center justify-between p-4 bg-[#fafafa] rounded-xl hover:bg-gray-100 transition-colors group"
            >
              <div>
                <p className="font-medium text-gray-900">{form.name}</p>
                <p className="text-sm text-gray-500">
                  {form.fields?.length || 0} fields · Created {form.createdAt?.toLocaleDateString()}
                </p>
              </div>
              <ChevronRight size={18} className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
