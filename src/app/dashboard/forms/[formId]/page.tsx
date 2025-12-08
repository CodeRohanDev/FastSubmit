'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { doc, getDoc, collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Form, Submission } from '@/types'
import { Copy, Download, Settings, Eye, Check, ArrowLeft } from 'lucide-react'
import { getSubmitEndpoint } from '@/lib/config'
import Papa from 'papaparse'

export default function FormDetailPage() {
  const { formId } = useParams()
  const [form, setForm] = useState<Form | null>(null)
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState('')

  const apiEndpoint = getSubmitEndpoint(formId as string)

  useEffect(() => {
    async function fetchData() {
      if (!formId) return
      try {
        const formDoc = await getDoc(doc(db, 'forms', formId as string))
        if (formDoc.exists()) {
          const formData = formDoc.data()
          // Check if form is soft-deleted
          if (formData.deleted) {
            setLoading(false)
            return
          }
          setForm({ id: formDoc.id, ...formData } as Form)
        }

        const subsQuery = query(
          collection(db, 'forms', formId as string, 'submissions'),
          orderBy('submittedAt', 'desc'),
          limit(100)
        )
        const subsSnap = await getDocs(subsQuery)
        // Filter out soft-deleted submissions
        const subsData = subsSnap.docs
          .filter(d => !d.data().deleted)
          .map(d => ({
            id: d.id,
            ...d.data(),
            submittedAt: d.data().submittedAt?.toDate(),
          })) as Submission[]
        setSubmissions(subsData)
      } catch (error) {
        console.error('Error:', error)
      }
      setLoading(false)
    }
    fetchData()
  }, [formId])

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(''), 2000)
  }

  const exportCSV = () => {
    if (!submissions.length || !form) return
    const data = submissions.map(s => ({
      ...s.data,
      submittedAt: s.submittedAt?.toISOString(),
    }))
    const csv = Papa.unparse(data)
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${form.name}-submissions.csv`
    a.click()
  }

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="w-6 h-6 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!form) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Form not found</p>
      </div>
    )
  }

  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/dashboard/forms" className="text-gray-400 hover:text-gray-600 transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">{form.name}</h1>
          <p className="text-gray-500 text-sm">{form.fields?.length || 0} fields</p>
        </div>
        <div className="flex gap-2">
          <Link
            href={`/dashboard/forms/${formId}/preview`}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Eye size={16} /> Preview
          </Link>
          <Link
            href={`/dashboard/forms/${formId}/settings`}
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Settings size={16} /> Settings
          </Link>
        </div>
      </div>

      {/* Endpoint & API Key */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-[#fafafa] rounded-xl p-5">
          <p className="text-sm text-gray-500 mb-2">Endpoint</p>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-sm font-mono text-gray-900 truncate">{apiEndpoint}</code>
            <button
              onClick={() => copyToClipboard(apiEndpoint, 'endpoint')}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {copied === 'endpoint' ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
            </button>
          </div>
        </div>
        <div className="bg-[#fafafa] rounded-xl p-5">
          <p className="text-sm text-gray-500 mb-2">API Key</p>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-sm font-mono text-gray-900 truncate">{form.apiKey}</code>
            <button
              onClick={() => copyToClipboard(form.apiKey, 'apikey')}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {copied === 'apikey' ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Submissions */}
      <div className="border border-gray-100 rounded-xl">
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h2 className="font-medium text-gray-900">Submissions ({submissions.length})</h2>
          {submissions.length > 0 && (
            <button
              onClick={exportCSV}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Download size={16} /> Export CSV
            </button>
          )}
        </div>

        {submissions.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-gray-500">No submissions yet</p>
            <p className="text-sm text-gray-400 mt-1">Submissions will appear here when users submit your form</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  {form.fields.slice(0, 4).map(f => (
                    <th key={f.id} className="text-left px-5 py-3 font-medium text-gray-500">{f.label}</th>
                  ))}
                  <th className="text-left px-5 py-3 font-medium text-gray-500">Date</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => (
                  <tr key={sub.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    {form.fields.slice(0, 4).map(f => (
                      <td key={f.id} className="px-5 py-4 text-gray-900 max-w-[200px] truncate">
                        {String(sub.data[f.id] || '—')}
                      </td>
                    ))}
                    <td className="px-5 py-4 text-gray-500">
                      {sub.submittedAt?.toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
