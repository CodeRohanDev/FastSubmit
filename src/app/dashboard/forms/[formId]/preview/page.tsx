'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Form } from '@/types'
import { ArrowLeft, Check, RotateCcw, Code, Copy, ExternalLink } from 'lucide-react'
import { getSubmitEndpoint } from '@/lib/config'

export default function FormPreviewPage() {
  const { formId } = useParams()
  const [form, setForm] = useState<Form | null>(null)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const apiEndpoint = getSubmitEndpoint(formId as string)

  useEffect(() => {
    async function fetchForm() {
      if (!formId) return
      try {
        const formDoc = await getDoc(doc(db, 'forms', formId as string))
        if (formDoc.exists()) {
          setForm({ id: formDoc.id, ...formDoc.data() } as Form)
        }
      } catch (error) {
        console.error('Error:', error)
      }
      setLoading(false)
    }
    fetchForm()
  }, [formId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    for (const field of form?.fields || []) {
      if (field.required && !formData[field.id]) {
        setError(`${field.label} is required`)
        setSubmitting(false)
        return
      }
    }
    try {
      const res = await fetch(`/api/submit/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) setSubmitted(true)
      else {
        const data = await res.json()
        setError(data.error || 'Submission failed')
      }
    } catch (error) {
      setError('Network error')
    }
    setSubmitting(false)
  }

  const resetForm = () => {
    setFormData({})
    setSubmitted(false)
    setError('')
  }

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-6 w-6 border-2 border-gray-900 border-t-transparent"></div>
      </div>
    )
  }

  if (!form) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-sm">Form not found</p>
        <Link href="/dashboard/forms" className="text-sm text-gray-900 hover:underline mt-2 inline-block">Back to forms</Link>
      </div>
    )
  }

  const htmlCode = `<form action="${apiEndpoint}" method="POST">
${form.fields.map(f => {
  if (f.type === 'textarea') return `  <label>${f.label}${f.required ? ' *' : ''}</label>\n  <textarea name="${f.id}"${f.required ? ' required' : ''}></textarea>`
  if (f.type === 'select') return `  <label>${f.label}${f.required ? ' *' : ''}</label>\n  <select name="${f.id}"${f.required ? ' required' : ''}>\n${f.options?.map(opt => `    <option value="${opt}">${opt}</option>`).join('\n')}\n  </select>`
  if (f.type === 'checkbox') return `  <label><input type="checkbox" name="${f.id}" /> ${f.label}</label>`
  return `  <label>${f.label}${f.required ? ' *' : ''}</label>\n  <input type="${f.type}" name="${f.id}"${f.required ? ' required' : ''} />`
}).join('\n\n')}

  <input type="text" name="_honeypot" style="display:none" />
  <button type="submit">Submit</button>
</form>`

  const jsCode = `fetch("${apiEndpoint}", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
${form.fields.map(f => `    ${f.id}: "value"`).join(',\n')}
  })
})`

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href={`/dashboard/forms/${formId}`} className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">{form.name}</h1>
            <p className="text-sm text-gray-400">Preview & test</p>
          </div>
        </div>
        <button
          onClick={() => setShowCode(!showCode)}
          className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${showCode ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'}`}
        >
          <Code size={16} />
          {showCode ? 'Hide code' : 'Show code'}
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form Preview */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-gray-400">Live preview</span>
            {submitted && (
              <button onClick={resetForm} className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1">
                <RotateCcw size={12} /> Reset
              </button>
            )}
          </div>

          <div className="border border-gray-200 rounded-lg p-6 bg-white">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Submitted!</h3>
                <p className="text-sm text-gray-500 mb-4">Your form was submitted successfully.</p>
                <button onClick={resetForm} className="text-sm text-gray-900 hover:underline">Submit another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && <div className="bg-red-50 text-red-600 px-3 py-2 rounded-lg text-sm">{error}</div>}
                {form.fields.map((field) => (
                  <div key={field.id}>
                    <label className="block text-sm text-gray-700 mb-1.5">
                      {field.label}{field.required && <span className="text-red-500 ml-0.5">*</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        value={formData[field.id] || ''}
                        onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                        rows={3}
                      />
                    ) : field.type === 'select' ? (
                      <select
                        value={formData[field.id] || ''}
                        onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                        required={field.required}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      >
                        <option value="">Select...</option>
                        {field.options?.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                      </select>
                    ) : field.type === 'checkbox' ? (
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData[field.id] === 'true'}
                          onChange={(e) => setFormData({ ...formData, [field.id]: e.target.checked ? 'true' : 'false' })}
                          className="w-4 h-4 rounded border-gray-300 text-gray-900"
                        />
                        <span className="text-sm text-gray-600">{field.placeholder || 'Yes'}</span>
                      </label>
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.id] || ''}
                        onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    )}
                  </div>
                ))}
                <button type="submit" disabled={submitting} className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                  {submitting ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : 'Submit'}
                </button>
              </form>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">Submissions are saved to your dashboard.</p>
        </div>

        {/* Code / Info Panel */}
        <div className="space-y-6">
          {showCode ? (
            <>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">Endpoint</span>
                  <button onClick={() => copyCode(apiEndpoint)} className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1">
                    {copied ? <Check size={12} /> : <Copy size={12} />} {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
                <code className="block bg-gray-100 px-3 py-2 rounded-lg text-xs font-mono overflow-x-auto">POST {apiEndpoint}</code>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">HTML</span>
                  <button onClick={() => copyCode(htmlCode)} className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1"><Copy size={12} /> Copy</button>
                </div>
                <pre className="bg-[#1a1a1a] text-gray-300 p-4 rounded-lg overflow-x-auto text-xs"><code>{htmlCode}</code></pre>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400">JavaScript</span>
                  <button onClick={() => copyCode(jsCode)} className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1"><Copy size={12} /> Copy</button>
                </div>
                <pre className="bg-[#1a1a1a] text-gray-300 p-4 rounded-lg overflow-x-auto text-xs"><code>{jsCode}</code></pre>
              </div>
            </>
          ) : (
            <>
              <div className="bg-gray-50 rounded-lg p-5">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Quick integration</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs shrink-0">1</span>
                    <span>Copy the API endpoint</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs shrink-0">2</span>
                    <span>Add to your form&apos;s action attribute</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs shrink-0">3</span>
                    <span>Match field names to IDs below</span>
                  </li>
                </ol>
              </div>

              <div>
                <span className="text-xs text-gray-400 block mb-3">Field IDs</span>
                <div className="space-y-2">
                  {form.fields.map((field) => (
                    <div key={field.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="text-sm text-gray-700">{field.label}</span>
                      <code className="bg-gray-100 px-2 py-1 rounded text-xs font-mono">{field.id}</code>
                    </div>
                  ))}
                </div>
              </div>

              <Link href={`/dashboard/forms/${formId}`} className="flex items-center justify-center gap-2 w-full py-2.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <ExternalLink size={16} /> View submissions
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
