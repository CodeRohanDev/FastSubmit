'use client'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import { Check, Loader2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface FormField {
  id: string
  label: string
  type: string
  required: boolean
  placeholder?: string
  options?: string[]
}

interface FormBranding {
  logo?: string
  companyName?: string
  tagline?: string
}

interface PublicForm {
  id: string
  name: string
  fields: FormField[]
  settings?: {
    redirectUrl?: string
    successMessage?: string
  }
  branding?: FormBranding
}

export default function PublicFormPage() {
  const { formId } = useParams()
  const searchParams = useSearchParams()
  const [form, setForm] = useState<PublicForm | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState<Record<string, any>>({})

  const embedded = searchParams.get('embedded') === 'true'
  const theme = searchParams.get('theme') || 'light'
  const redirectUrl = searchParams.get('redirect') || form?.settings?.redirectUrl

  useEffect(() => {
    async function fetchForm() {
      if (!formId) return
      try {
        const response = await fetch(`/api/public/forms/${formId}`)
        if (!response.ok) {
          throw new Error('Form not found')
        }
        const data = await response.json()
        setForm(data)
      } catch (error) {
        console.error('Error:', error)
        setError('Failed to load form')
      }
      setLoading(false)
    }
    fetchForm()
  }, [formId])

  // Send height to parent for iframe resizing
  useEffect(() => {
    if (!embedded) return
    
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight
      window.parent.postMessage({
        type: 'fastsubmit-resize',
        height: height
      }, '*')
    }

    sendHeight()
    window.addEventListener('resize', sendHeight)
    
    // Send height after images load
    const images = document.querySelectorAll('img')
    images.forEach(img => {
      img.addEventListener('load', sendHeight)
    })

    return () => {
      window.removeEventListener('resize', sendHeight)
    }
  }, [embedded, loading, submitted])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form) return

    setSubmitting(true)
    setError('')

    try {
      // Validate required fields
      for (const field of form.fields) {
        if (field.required && !formData[field.id]) {
          setError(`${field.label} is required`)
          setSubmitting(false)
          return
        }
      }

      // Submit via API
      const response = await fetch(`/api/public/forms/${formId}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: formData,
          userAgent: navigator.userAgent,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit')
      }

      setSubmitted(true)

      // Handle redirect
      if (redirectUrl) {
        setTimeout(() => {
          if (embedded) {
            window.parent.postMessage({
              type: 'fastsubmit-redirect',
              url: redirectUrl
            }, '*')
          } else {
            window.location.href = redirectUrl
          }
        }, 2000)
      }
    } catch (error: any) {
      console.error('Error:', error)
      setError(error.message || 'Failed to submit form. Please try again.')
    }
    setSubmitting(false)
  }

  const handleChange = (fieldId: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }))
  }

  // Loading state
  if (loading) {
    const content = (
      <div className={`flex items-center justify-center ${embedded ? 'min-h-[400px]' : 'min-h-screen'} ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#fafafa]'}`}>
        <Loader2 className={`w-8 h-8 animate-spin ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
      </div>
    )
    
    if (embedded) return content
    
    return (
      <>
        <Navbar variant="simple" />
        <div className="pt-16">
          {content}
        </div>
        <Footer />
      </>
    )
  }

  // Form not found
  if (!form) {
    const content = (
      <div className={`flex items-center justify-center ${embedded ? 'min-h-[400px]' : 'min-h-screen'} ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#fafafa]'}`}>
        <div className="text-center">
          <p className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Form not found</p>
          <p className={`text-sm mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            This form may have been deleted or is no longer available.
          </p>
        </div>
      </div>
    )
    
    if (embedded) return content
    
    return (
      <>
        <Navbar variant="simple" />
        <div className="pt-16">
          {content}
        </div>
        <Footer />
      </>
    )
  }

  // Success state
  if (submitted) {
    const content = (
      <div className={`flex items-center justify-center p-6 ${embedded ? 'min-h-[400px]' : 'min-h-screen'} ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#fafafa]'}`}>
        <div className="max-w-md w-full text-center">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${theme === 'dark' ? 'bg-green-900' : 'bg-green-100'}`}>
            <Check className={`w-8 h-8 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
          </div>
          <h2 className={`text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Thank you!
          </h2>
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            {form.settings?.successMessage || 'Your submission has been received.'}
          </p>
          {redirectUrl && (
            <p className={`text-sm mt-4 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
              Redirecting...
            </p>
          )}
        </div>
      </div>
    )
    
    if (embedded) return content
    
    return (
      <>
        <Navbar variant="simple" />
        <div className="pt-16">
          {content}
        </div>
        <Footer />
      </>
    )
  }

  // Form content
  const formContent = (
    <div className={`p-4 md:p-6 ${embedded ? '' : 'min-h-screen'} ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#fafafa]'}`}>
      <div className={`max-w-2xl mx-auto ${embedded ? '' : 'py-8 md:py-12'}`}>
        {/* Form Card */}
        <div className={`rounded-2xl overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} ${embedded ? '' : 'border border-gray-100'}`}>
          {/* Custom Branding Section */}
          {(form.branding?.logo || form.branding?.companyName || form.branding?.tagline) && (
            <div className={`px-6 md:px-10 pt-8 pb-6 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
              <div className="flex items-center gap-4">
                {form.branding.logo && (
                  <img 
                    src={form.branding.logo} 
                    alt={form.branding.companyName || 'Company logo'} 
                    className="h-12 w-auto object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                )}
                {(form.branding.companyName || form.branding.tagline) && (
                  <div>
                    {form.branding.companyName && (
                      <h2 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {form.branding.companyName}
                      </h2>
                    )}
                    {form.branding.tagline && (
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {form.branding.tagline}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Header Section */}
          <div className={`px-6 md:px-10 pt-10 pb-8 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
            <h1 className={`text-3xl md:text-4xl font-semibold tracking-tight mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {form.name}
            </h1>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Fields marked with <span className="text-red-500">*</span> are required
            </p>
          </div>

          {/* Form Section */}
          <div className="px-6 md:px-10 py-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {form.fields.map((field, index) => (
                <div key={field.id}>
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </label>

                  {field.type === 'textarea' ? (
                    <textarea
                      value={formData[field.id] || ''}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      required={field.required}
                      placeholder={field.placeholder}
                      rows={4}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all ${
                        theme === 'dark'
                          ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500'
                          : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      value={formData[field.id] || ''}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      required={field.required}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all ${
                        theme === 'dark'
                          ? 'bg-gray-900 border-gray-700 text-white'
                          : 'bg-white border-gray-200 text-gray-900'
                      }`}
                    >
                      <option value="">Select an option</option>
                      {field.options?.map((option, i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'checkbox' ? (
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={formData[field.id] || false}
                        onChange={(e) => handleChange(field.id, e.target.checked)}
                        required={field.required}
                        className="w-4 h-4 mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer"
                      />
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {field.placeholder || 'Check this box'}
                      </span>
                    </div>
                  ) : (
                    <input
                      type={field.type}
                      value={formData[field.id] || ''}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      required={field.required}
                      placeholder={field.placeholder}
                      className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all ${
                        theme === 'dark'
                          ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500'
                          : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
                      }`}
                    />
                  )}
                </div>
              ))}

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gray-900 text-white py-3.5 px-6 rounded-full font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all inline-flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer */}
          {!embedded && (
            <div className={`px-6 md:px-10 py-5 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
              <p className={`text-xs text-center ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                Powered by{' '}
                <a
                  href="https://fastsubmit.hostspica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                >
                  FastSubmit
                </a>
              </p>
            </div>
          )}
        </div>


        {/* Promotional CTA Section */}
        {!embedded && (
          <div className="mt-8 p-8 md:p-10 rounded-2xl bg-gray-900 border border-gray-800">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                Create your own form
              </h3>
              <p className="text-gray-400 mb-6">
                Build beautiful forms in minutes. Free forever. No credit card required.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Check size={16} className="text-green-500" />
                  <span>Unlimited forms</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check size={16} className="text-green-500" />
                  <span>Unlimited submissions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check size={16} className="text-green-500" />
                  <span>Easy embed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check size={16} className="text-green-500" />
                  <span>API access</span>
                </div>
              </div>

              <a
                href="https://fastsubmit.hostspica.com/signup"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Get started free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        )}

        {/* Security Badge */}
        {!embedded && (
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Privacy Protected</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  // Return with or without layout
  if (embedded) {
    return formContent
  }

  return (
    <>
      <Navbar variant="simple" />
      <div className="pt-16">
        {formContent}
      </div>
      <Footer />
    </>
  )
}
