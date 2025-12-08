'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { doc, getDoc, collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Form, Submission } from '@/types'
import { Copy, Download, Settings, Eye, Check, ArrowLeft, Code, X, Share2, ExternalLink, QrCode as QrCodeIcon } from 'lucide-react'
import { getSubmitEndpoint } from '@/lib/config'
import Papa from 'papaparse'

export default function FormDetailPage() {
  const { formId } = useParams()
  const [form, setForm] = useState<Form | null>(null)
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState('')
  const [showEmbedModal, setShowEmbedModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)

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
    <div className="max-w-5xl mx-auto">
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
          <button
            onClick={() => setShowShareModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
          >
            <Share2 size={16} /> Share
          </button>
          <button
            onClick={() => setShowEmbedModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
          >
            <Code size={16} /> Embed
          </button>
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

      {/* Endpoint */}
      <div className="bg-[#fafafa] rounded-xl p-5 mb-8">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-500">Form Endpoint</p>
          <Link
            href="/dashboard/settings"
            className="text-xs text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
          >
            Get API Key →
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <code className="flex-1 text-sm font-mono text-gray-900 truncate">{apiEndpoint}</code>
          <button
            onClick={() => copyToClipboard(apiEndpoint, 'endpoint')}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {copied === 'endpoint' ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Use your user API key from Settings to access this form via API
        </p>
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
                <tr className="border-b border-gray-100 bg-gray-50">
                  {form.fields.map(f => (
                    <th key={f.id} className="text-left px-5 py-3 font-medium text-gray-700 whitespace-nowrap">
                      {f.label}
                    </th>
                  ))}
                  <th className="text-left px-5 py-3 font-medium text-gray-700 whitespace-nowrap">Submitted At</th>
                  <th className="text-left px-5 py-3 font-medium text-gray-700 whitespace-nowrap">Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => (
                  <tr key={sub.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    {form.fields.map(f => (
                      <td key={f.id} className="px-5 py-4 text-gray-900 max-w-[250px]">
                        <div className="truncate" title={String(sub.data[f.id] || '')}>
                          {sub.data[f.id] !== undefined && sub.data[f.id] !== null && sub.data[f.id] !== '' ? (
                            typeof sub.data[f.id] === 'boolean' ? (
                              sub.data[f.id] ? (
                                <span className="inline-flex items-center gap-1 text-green-600">
                                  <Check size={14} /> Yes
                                </span>
                              ) : (
                                <span className="text-gray-400">No</span>
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
                    <td className="px-5 py-4 text-gray-500 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span>{sub.submittedAt?.toLocaleDateString()}</span>
                        <span className="text-xs text-gray-400">
                          {sub.submittedAt?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <button
                        onClick={() => {
                          const details = Object.entries(sub.data)
                            .map(([key, value]) => {
                              const field = form.fields.find(f => f.id === key)
                              return `${field?.label || key}: ${value}`
                            })
                            .join('\n')
                          alert(`Submission Details:\n\n${details}\n\nSubmitted: ${sub.submittedAt?.toLocaleString()}`)
                        }}
                        className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
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
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Share Form</h2>
                <p className="text-sm text-gray-500 mt-1">Share this form via link or social media</p>
              </div>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Direct Link */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">Direct Link</h3>
                    <p className="text-sm text-gray-500">Share this link to collect responses</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(shareUrl, 'share')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
                  >
                    {copied === 'share' ? (
                      <>
                        <Check size={16} /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={16} /> Copy Link
                      </>
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
                  <code className="flex-1 text-sm font-mono text-gray-900 truncate">{shareUrl}</code>
                  <a
                    href={shareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              {/* QR Code */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">QR Code</h3>
                    <p className="text-sm text-gray-500">Perfect for print materials and offline sharing</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200 mb-4">
                    <QrCodeIcon size={48} className="text-gray-300" />
                    <div className="absolute text-xs text-gray-400">QR Code Preview</div>
                  </div>
                  <p className="text-sm text-gray-500 text-center mb-3">
                    Scan this QR code to open the form
                  </p>
                  <a
                    href={`https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(shareUrl)}`}
                    download={`${form?.name || 'form'}-qr-code.png`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors"
                  >
                    <Download size={16} /> Download QR Code
                  </a>
                </div>
              </div>

              {/* Social Media Sharing */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Share on Social Media</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(form?.name || 'Check out this form')}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1a8cd8] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="text-sm font-medium">Twitter</span>
                  </a>

                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#166fe5] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm font-medium">Facebook</span>
                  </a>

                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-[#0A66C2] text-white rounded-lg hover:bg-[#095196] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>

                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: form?.name || 'Form',
                          text: 'Check out this form',
                          url: shareUrl,
                        })
                      } else {
                        copyToClipboard(shareUrl, 'share')
                      }
                    }}
                    className="flex items-center justify-center gap-2 p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Share2 size={20} />
                    <span className="text-sm font-medium">More</span>
                  </button>
                </div>
              </div>

              {/* Usage Tips */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">💡 Sharing Tips:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Use the direct link for Instagram bio, email signatures, or anywhere</li>
                  <li>• Download the QR code for flyers, business cards, or posters</li>
                  <li>• Share on social media to reach a wider audience</li>
                  <li>• Track submissions in real-time from your dashboard</li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={() => setShowShareModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                Close
              </button>
              <a
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
              >
                <ExternalLink size={16} /> Open Form
              </a>
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
