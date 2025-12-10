'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { doc, getDoc, collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Form, Submission } from '@/types'
import { Copy, Download, Settings, Eye, Check, ArrowLeft, Code, X, Share2, ExternalLink } from 'lucide-react'
import { getSubmitEndpoint } from '@/lib/config'
import Papa from 'papaparse'
import dynamic from 'next/dynamic'

// Dynamically import ShareModal to improve initial page load
const ShareModal = dynamic(() => import('@/components/ShareModal'), {
  loading: () => <div className="animate-pulse bg-gray-200 rounded-lg h-96" />
})

export default function FormDetailPage() {
  const { formId } = useParams()
  const [form, setForm] = useState<Form | null>(null)
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState('')
  const [showEmbedModal, setShowEmbedModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)

  const apiEndpoint = getSubmitEndpoint(formId as string)
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/f/${formId}` : `https://fastsubmit.hostspica.com/f/${formId}`
  
  const embedCode = `<!-- Add this where you want the form to appear -->
<div id="fastsubmit-form"></div>

<!-- Add this before closing </body> tag -->
<script 
  src="https://fastsubmit.hostspica.com/embed.js"
  data-form-id="${formId}"
  data-theme="light">
</script>`

  const iframeCode = `<iframe 
  src="https://fastsubmit.hostspica.com/f/${formId}" 
  width="100%" 
  height="600" 
  frameborder="0">
</iframe>`

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
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
          <Link href="/dashboard/forms" className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
          </Link>
          <div className="min-w-0 flex-1">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 truncate">{form.name}</h1>
            <p className="text-gray-500 text-sm">{form.fields?.length || 0} fields</p>
          </div>
        </div>
        
        {/* Mobile Action Buttons */}
        <div className="flex flex-wrap gap-2 sm:flex-nowrap">
          <button
            onClick={() => setShowShareModal(true)}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
          >
            <Share2 size={14} className="sm:w-4 sm:h-4" /> 
            <span className="hidden sm:inline">Share</span>
          </button>
          <button
            onClick={() => setShowEmbedModal(true)}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
          >
            <Code size={14} className="sm:w-4 sm:h-4" /> 
            <span className="hidden sm:inline">Embed</span>
          </button>
          <Link
            href={`/dashboard/forms/${formId}/preview`}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Eye size={14} className="sm:w-4 sm:h-4" /> 
            <span className="hidden sm:inline">Preview</span>
          </Link>
          <Link
            href={`/dashboard/forms/${formId}/settings`}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Settings size={14} className="sm:w-4 sm:h-4" /> 
            <span className="hidden sm:inline">Settings</span>
          </Link>
        </div>
      </div>

      {/* Endpoint */}
      <div className="bg-[#fafafa] rounded-xl p-4 sm:p-5 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <p className="text-sm text-gray-500">Form Endpoint</p>
          <Link
            href="/dashboard/settings"
            className="text-xs text-indigo-600 hover:text-indigo-700 flex items-center gap-1 self-start sm:self-auto"
          >
            Get API Key →
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <code className="flex-1 text-xs sm:text-sm font-mono text-gray-900 truncate bg-white px-2 py-1 rounded border">{apiEndpoint}</code>
          <button
            onClick={() => copyToClipboard(apiEndpoint, 'endpoint')}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          >
            {copied === 'endpoint' ? <Check size={14} className="text-green-500 sm:w-4 sm:h-4" /> : <Copy size={14} className="sm:w-4 sm:h-4" />}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Use your user API key from Settings to access this form via API
        </p>
      </div>

      {/* Submissions */}
      <div className="border border-gray-100 rounded-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 sm:p-5 border-b border-gray-100">
          <h2 className="font-medium text-gray-900">Submissions ({submissions.length})</h2>
          {submissions.length > 0 && (
            <button
              onClick={exportCSV}
              className="inline-flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 self-start sm:self-auto"
            >
              <Download size={14} className="sm:w-4 sm:h-4" /> Export CSV
            </button>
          )}
        </div>

        {submissions.length === 0 ? (
          <div className="p-8 sm:p-12 text-center">
            <p className="text-gray-500">No submissions yet</p>
            <p className="text-sm text-gray-400 mt-1">Submissions will appear here when users submit your form</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  {form.fields.map(f => (
                    <th key={f.id} className="text-left px-3 sm:px-5 py-3 font-medium text-gray-700 whitespace-nowrap text-xs sm:text-sm">
                      {f.label}
                    </th>
                  ))}
                  <th className="text-left px-3 sm:px-5 py-3 font-medium text-gray-700 whitespace-nowrap text-xs sm:text-sm">Submitted At</th>
                  <th className="text-left px-3 sm:px-5 py-3 font-medium text-gray-700 whitespace-nowrap text-xs sm:text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => (
                  <tr key={sub.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    {form.fields.map(f => (
                      <td key={f.id} className="px-3 sm:px-5 py-3 sm:py-4 text-gray-900 max-w-[150px] sm:max-w-[250px]">
                        <div className="truncate text-xs sm:text-sm" title={String(sub.data[f.id] || '')}>
                          {sub.data[f.id] !== undefined && sub.data[f.id] !== null && sub.data[f.id] !== '' ? (
                            typeof sub.data[f.id] === 'boolean' ? (
                              sub.data[f.id] ? (
                                <span className="inline-flex items-center gap-1 text-green-600">
                                  <Check size={12} className="sm:w-[14px] sm:h-[14px]" /> 
                                  <span className="hidden sm:inline">Yes</span>
                                  <span className="sm:hidden">✓</span>
                                </span>
                              ) : (
                                <span className="text-gray-400">
                                  <span className="hidden sm:inline">No</span>
                                  <span className="sm:hidden">✗</span>
                                </span>
                              )
                            ) : (
                              String(sub.data[f.id])
                            )
                          ) : (
                            <span className="text-gray-300">—</span>
                          )}
                        </div>
                      </td>
                    ))}
                    <td className="px-3 sm:px-5 py-3 sm:py-4 text-gray-500 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm">{sub.submittedAt?.toLocaleDateString()}</span>
                        <span className="text-[10px] sm:text-xs text-gray-400">
                          {sub.submittedAt?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </td>
                    <td className="px-3 sm:px-5 py-3 sm:py-4">
                      <button
                        onClick={() => setSelectedSubmission(sub)}
                        className="text-indigo-600 hover:text-indigo-700 text-xs sm:text-sm font-medium"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        shareUrl={shareUrl}
        formName={form?.name || 'Form'}
      />

      {/* Submission Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Submission Details</h2>
                <p className="text-sm text-gray-500 mt-1">
                  {selectedSubmission.submittedAt?.toLocaleDateString()} at{' '}
                  {selectedSubmission.submittedAt?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <button
                onClick={() => setSelectedSubmission(null)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-4">
                {form?.fields.map((field) => {
                  const value = selectedSubmission.data[field.id]
                  return (
                    <div key={field.id} className="bg-gray-50 rounded-lg p-4">
                      <label className="text-sm font-medium text-gray-500 block mb-1">
                        {field.label}
                      </label>
                      <div className="text-gray-900">
                        {value !== undefined && value !== null && value !== '' ? (
                          typeof value === 'boolean' ? (
                            value ? (
                              <span className="inline-flex items-center gap-1 text-green-600">
                                <Check size={16} /> Yes
                              </span>
                            ) : (
                              <span className="text-gray-500">No</span>
                            )
                          ) : (
                            <span className="whitespace-pre-wrap break-words">{String(value)}</span>
                          )
                        ) : (
                          <span className="text-gray-400 italic">Not provided</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={() => setSelectedSubmission(null)}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Embed Modal */}
      {showEmbedModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Embed Form</h2>
                <p className="text-sm text-gray-500 mt-1">Add this form to your website</p>
              </div>
              <button
                onClick={() => setShowEmbedModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Method 1: JavaScript Embed (Recommended) */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">JavaScript Embed (Recommended)</h3>
                    <p className="text-sm text-gray-500">Best performance, fully responsive</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(embedCode, 'embed')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors"
                  >
                    {copied === 'embed' ? (
                      <>
                        <Check size={16} /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} /> Copy Code
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                  <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">
                    HTML
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white/70 leading-relaxed whitespace-pre">
                      {embedCode}
                    </code>
                  </pre>
                </div>
                <div className="mt-3 bg-blue-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">How to use:</h4>
                  <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Copy the code above</li>
                    <li>Paste it into your HTML file where you want the form</li>
                    <li>The form will load automatically</li>
                  </ol>
                </div>
              </div>

              {/* Method 2: iFrame Embed */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">iFrame Embed</h3>
                    <p className="text-sm text-gray-500">Simple alternative, works everywhere</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(iframeCode, 'iframe')}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    {copied === 'iframe' ? (
                      <>
                        <Check size={16} /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} /> Copy Code
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-[#1a1a1a] rounded-xl overflow-hidden">
                  <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">
                    HTML
                  </div>
                  <pre className="p-4 text-sm overflow-x-auto">
                    <code className="text-white/70 leading-relaxed whitespace-pre">
                      {iframeCode}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Platform-Specific Instructions */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Platform-Specific Instructions</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">WordPress</h4>
                    <p className="text-sm text-gray-600">
                      Add a "Custom HTML" block and paste the embed code
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Shopify</h4>
                    <p className="text-sm text-gray-600">
                      Edit page → Show HTML → Paste code
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Webflow</h4>
                    <p className="text-sm text-gray-600">
                      Drag "Embed" element → Paste code
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Wix</h4>
                    <p className="text-sm text-gray-600">
                      Add → Embed Code → Custom Embeds
                    </p>
                  </div>
                </div>
              </div>

              {/* Customization Options */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Customization Options</h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3 text-sm">
                  <div>
                    <code className="bg-white px-2 py-1 rounded text-xs">data-theme="light"</code>
                    <span className="text-gray-600 ml-2">or "dark" - Set form theme</span>
                  </div>
                  <div>
                    <code className="bg-white px-2 py-1 rounded text-xs">data-width="100%"</code>
                    <span className="text-gray-600 ml-2">Set form width</span>
                  </div>
                  <div>
                    <code className="bg-white px-2 py-1 rounded text-xs">data-redirect="/thank-you"</code>
                    <span className="text-gray-600 ml-2">Redirect after submission</span>
                  </div>
                </div>
              </div>

              {/* Help Link */}
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  Need help? Check out our{' '}
                  <Link href="/blog/embed-forms-website" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    complete embedding guide
                  </Link>
                  {' '}or{' '}
                  <Link href="/docs" className="text-indigo-600 hover:text-indigo-700 font-medium">
                    documentation
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={() => setShowEmbedModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Close
              </button>
              <Link
                href={`/dashboard/forms/${formId}/preview`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors"
              >
                <Eye size={16} /> Preview Form
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
