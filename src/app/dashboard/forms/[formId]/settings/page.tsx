'use client'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Form, FormField, VerifiedDomain } from '@/types'
import { 
  ArrowLeft, Trash2, Plus, GripVertical, Save,
  Type, Mail, AlignLeft, Hash, Calendar, List, CheckSquare,
  ChevronDown, ChevronUp, Copy, X, AlertTriangle, Shield, CheckCircle, Image, Building2, MessageSquare
} from 'lucide-react'

const fieldTypes = [
  { value: 'text', label: 'Text', icon: Type },
  { value: 'email', label: 'Email', icon: Mail },
  { value: 'textarea', label: 'Textarea', icon: AlignLeft },
  { value: 'number', label: 'Number', icon: Hash },
  { value: 'date', label: 'Date', icon: Calendar },
  { value: 'select', label: 'Dropdown', icon: List },
  { value: 'checkbox', label: 'Checkbox', icon: CheckSquare },
] as const

type FieldType = typeof fieldTypes[number]['value']

export default function FormSettingsPage() {
  const { formId } = useParams()
  const router = useRouter()
  const [form, setForm] = useState<Form | null>(null)
  const [name, setName] = useState('')
  const [fields, setFields] = useState<FormField[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [expandedField, setExpandedField] = useState<string | null>(null)
  const [showFieldPicker, setShowFieldPicker] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  
  // Domain verification states
  const [verifiedDomains, setVerifiedDomains] = useState<VerifiedDomain[]>([])
  const [selectedDomains, setSelectedDomains] = useState<string[]>([])
  const [requireVerification, setRequireVerification] = useState(false)
  
  // Branding states
  const [brandingLogo, setBrandingLogo] = useState('')
  const [brandingCompanyName, setBrandingCompanyName] = useState('')
  const [brandingTagline, setBrandingTagline] = useState('')

  useEffect(() => {
    async function fetchForm() {
      if (!formId) return
      try {
        const formDoc = await getDoc(doc(db, 'forms', formId as string))
        if (formDoc.exists()) {
          const data = { id: formDoc.id, ...formDoc.data() } as Form
          setForm(data)
          setName(data.name)
          setFields(data.fields || [])
          setSelectedDomains(data.allowedDomains || [])
          setRequireVerification(data.requireDomainVerification || false)
          setBrandingLogo(data.branding?.logo || '')
          setBrandingCompanyName(data.branding?.companyName || '')
          setBrandingTagline(data.branding?.tagline || '')
        }
      } catch (error) {
        console.error('Error:', error)
        setMessage({ type: 'error', text: 'Failed to load form' })
      }
      setLoading(false)
    }
    fetchForm()
    fetchVerifiedDomains()
  }, [formId])

  const fetchVerifiedDomains = async () => {
    try {
      const res = await fetch('/api/dashboard/domains')
      if (res.ok) {
        const data = await res.json()
        // Only show verified domains
        setVerifiedDomains((data.domains || []).filter((d: VerifiedDomain) => d.verified))
      }
    } catch (error) {
      console.error('Failed to fetch domains:', error)
    }
  }

  const toggleDomainSelection = (domain: string) => {
    setSelectedDomains(prev => 
      prev.includes(domain) 
        ? prev.filter(d => d !== domain)
        : [...prev, domain]
    )
  }

  const addField = (type: FieldType) => {
    const newField: FormField = {
      id: `field_${Date.now()}`,
      label: fieldTypes.find(f => f.value === type)?.label || 'New Field',
      type,
      required: false,
      placeholder: '',
      options: type === 'select' ? ['Option 1', 'Option 2'] : undefined,
    }
    setFields([...fields, newField])
    setExpandedField(newField.id)
    setShowFieldPicker(false)
  }

  const updateField = (index: number, updates: Partial<FormField>) => {
    const updated = [...fields]
    updated[index] = { ...updated[index], ...updates }
    setFields(updated)
  }

  const removeField = (index: number) => {
    if (fields.length <= 1) {
      setMessage({ type: 'error', text: 'Form must have at least one field' })
      return
    }
    setFields(fields.filter((_, i) => i !== index))
    setExpandedField(null)
  }

  const duplicateField = (index: number) => {
    const field = fields[index]
    const newField = { ...field, id: `${field.id}_copy_${Date.now()}`, label: `${field.label} (copy)` }
    const updated = [...fields]
    updated.splice(index + 1, 0, newField)
    setFields(updated)
    setExpandedField(newField.id)
  }

  const moveField = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= fields.length) return
    const updated = [...fields]
    const [moved] = updated.splice(fromIndex, 1)
    updated.splice(toIndex, 0, moved)
    setFields(updated)
  }

  const handleDragStart = (index: number) => setDraggedIndex(index)
  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    if (draggedIndex === null || draggedIndex === index) return
    moveField(draggedIndex, index)
    setDraggedIndex(index)
  }
  const handleDragEnd = () => setDraggedIndex(null)

  const updateSelectOptions = (index: number, optionIndex: number, value: string) => {
    const field = fields[index]
    if (!field.options) return
    const newOptions = [...field.options]
    newOptions[optionIndex] = value
    updateField(index, { options: newOptions })
  }

  const addSelectOption = (index: number) => {
    const field = fields[index]
    const options = field.options || []
    updateField(index, { options: [...options, `Option ${options.length + 1}`] })
  }

  const removeSelectOption = (index: number, optionIndex: number) => {
    const field = fields[index]
    if (!field.options || field.options.length <= 1) return
    updateField(index, { options: field.options.filter((_, i) => i !== optionIndex) })
  }

  const handleSave = async () => {
    if (!formId || !name.trim()) {
      setMessage({ type: 'error', text: 'Form name is required' })
      return
    }
    setSaving(true)
    try {
      await updateDoc(doc(db, 'forms', formId as string), {
        name: name.trim(),
        fields,
        allowedDomains: selectedDomains,
        requireDomainVerification: requireVerification,
        branding: {
          logo: brandingLogo.trim(),
          companyName: brandingCompanyName.trim(),
          tagline: brandingTagline.trim(),
        },
        updatedAt: serverTimestamp(),
      })
      setMessage({ type: 'success', text: 'Changes saved' })
      setTimeout(() => setMessage({ type: '', text: '' }), 3000)
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to save changes' })
    }
    setSaving(false)
  }



  const handleDelete = async () => {
    if (!formId) return
    try {
      // Soft delete - mark as deleted instead of actually deleting
      await updateDoc(doc(db, 'forms', formId as string), {
        deleted: true,
        deletedAt: serverTimestamp(),
      })
      router.push('/dashboard/forms')
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to delete form' })
    }
  }

  const getFieldIcon = (type: string) => fieldTypes.find(f => f.value === type)?.icon || Type

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
        <Link href="/dashboard/forms" className="text-sm text-gray-900 hover:underline mt-2 inline-block">
          Back to forms
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <Link href={`/dashboard/forms/${formId}`} className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0">
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
        </Link>
        <h1 className="text-lg sm:text-xl font-semibold tracking-tight">Form settings</h1>
      </div>

      {message.text && (
        <div className={`px-3 sm:px-4 py-3 rounded-lg mb-4 sm:mb-6 flex items-center justify-between text-sm gap-3 ${
          message.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
        }`}>
          <span className="flex-1 min-w-0">{message.text}</span>
          <button onClick={() => setMessage({ type: '', text: '' })} className="flex-shrink-0">
            <X size={14} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      )}

      {/* Form Name */}
      <div className="mb-4 sm:mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Form name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm"
        />
      </div>

      {/* Custom Branding */}
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Building2 size={14} className="text-gray-600 sm:w-4 sm:h-4" />
          <label className="text-sm font-medium text-gray-700">Custom branding</label>
        </div>
        
        <div className="p-3 sm:p-4 bg-purple-50 border border-purple-100 rounded-lg mb-3 sm:mb-4">
          <p className="text-xs text-purple-900">
            Add your company logo, name, and tagline to display at the top of your form. This helps build trust and brand recognition.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4 bg-white border border-gray-200 rounded-lg p-3 sm:p-4">
          {/* Logo URL */}
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-600 mb-2">
              <Image size={14} />
              Logo URL
            </label>
            <input
              type="url"
              value={brandingLogo}
              onChange={(e) => setBrandingLogo(e.target.value)}
              placeholder="https://example.com/logo.png"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">Enter the URL of your logo image (recommended: 200x50px)</p>
          </div>

          {/* Company/Brand Name */}
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-600 mb-2">
              <Building2 size={14} />
              Company/Brand name
            </label>
            <input
              type="text"
              value={brandingCompanyName}
              onChange={(e) => setBrandingCompanyName(e.target.value)}
              placeholder="Acme Inc."
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          {/* Tagline */}
          <div>
            <label className="flex items-center gap-2 text-xs text-gray-600 mb-2">
              <MessageSquare size={14} />
              Tagline
            </label>
            <input
              type="text"
              value={brandingTagline}
              onChange={(e) => setBrandingTagline(e.target.value)}
              placeholder="Building the future of technology"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>

          {/* Preview */}
          {(brandingLogo || brandingCompanyName || brandingTagline) && (
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-3">Preview:</p>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-3">
                  {brandingLogo && (
                    <img 
                      src={brandingLogo} 
                      alt="Logo" 
                      className="h-10 w-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  )}
                  <div>
                    {brandingCompanyName && (
                      <p className="text-sm font-semibold text-gray-900">{brandingCompanyName}</p>
                    )}
                    {brandingTagline && (
                      <p className="text-xs text-gray-600">{brandingTagline}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fields */}
      <div className="mb-4 sm:mb-6">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <label className="text-sm font-medium text-gray-700">Fields</label>
          <span className="text-xs text-gray-400">{fields.length} field{fields.length !== 1 ? 's' : ''}</span>
        </div>

        <div className="space-y-2">
          {fields.map((field, index) => {
            const FieldIcon = getFieldIcon(field.type)
            const isExpanded = expandedField === field.id

            return (
              <div
                key={field.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
                className={`border rounded-lg transition-all ${
                  draggedIndex === index ? 'opacity-50 border-gray-400' : 'border-gray-200'
                } ${isExpanded ? 'bg-gray-50' : 'bg-white hover:border-gray-300'}`}
              >
                <div
                  className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 cursor-pointer"
                  onClick={() => setExpandedField(isExpanded ? null : field.id)}
                >
                  <GripVertical className="text-gray-300 cursor-grab flex-shrink-0" size={14} />
                  <div className="w-6 sm:w-7 h-6 sm:h-7 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <FieldIcon className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900 truncate">{field.label}</span>
                      {field.required && (
                        <span className="text-[10px] bg-gray-900 text-white px-1.5 py-0.5 rounded flex-shrink-0">Required</span>
                      )}
                    </div>
                    <span className="text-xs text-gray-400 truncate">{field.type} • {field.id}</span>
                  </div>
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    <button onClick={(e) => { e.stopPropagation(); moveField(index, index - 1) }} disabled={index === 0} className="p-1 text-gray-300 hover:text-gray-500 disabled:opacity-30 hidden sm:block"><ChevronUp size={12} /></button>
                    <button onClick={(e) => { e.stopPropagation(); moveField(index, index + 1) }} disabled={index === fields.length - 1} className="p-1 text-gray-300 hover:text-gray-500 disabled:opacity-30 hidden sm:block"><ChevronDown size={12} /></button>
                    {isExpanded ? <ChevronUp size={14} className="text-gray-400 ml-1 sm:w-4 sm:h-4" /> : <ChevronDown size={14} className="text-gray-400 ml-1 sm:w-4 sm:h-4" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-3 pb-3 pt-2 border-t border-gray-100 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Label</label>
                        <input type="text" value={field.label} onChange={(e) => updateField(index, { label: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Field ID</label>
                        <input type="text" value={field.id} onChange={(e) => updateField(index, { id: e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '_') })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Type</label>
                        <select value={field.type} onChange={(e) => updateField(index, { type: e.target.value as FormField['type'], options: e.target.value === 'select' ? ['Option 1', 'Option 2'] : undefined })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
                          {fieldTypes.map((t) => (<option key={t.value} value={t.value}>{t.label}</option>))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Placeholder</label>
                        <input type="text" value={field.placeholder || ''} onChange={(e) => updateField(index, { placeholder: e.target.value })} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                      </div>
                    </div>
                    {field.type === 'select' && (
                      <div>
                        <label className="block text-xs text-gray-500 mb-2">Options</label>
                        <div className="space-y-2">
                          {field.options?.map((option, optIndex) => (
                            <div key={optIndex} className="flex gap-2">
                              <input type="text" value={option} onChange={(e) => updateSelectOptions(index, optIndex, e.target.value)} className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                              <button onClick={() => removeSelectOption(index, optIndex)} className="p-2 text-gray-300 hover:text-red-500" disabled={field.options?.length === 1}><X size={14} /></button>
                            </div>
                          ))}
                          <button onClick={() => addSelectOption(index)} className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1"><Plus size={12} /> Add option</button>
                        </div>
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={field.required} onChange={(e) => updateField(index, { required: e.target.checked })} className="w-4 h-4 rounded border-gray-300 text-gray-900" />
                        <span className="text-xs text-gray-600">Required</span>
                      </label>
                      <div className="flex gap-1">
                        <button onClick={() => duplicateField(index)} className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"><Copy size={14} /></button>
                        <button onClick={() => removeField(index)} className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded"><Trash2 size={14} /></button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-3 relative">
          <button type="button" onClick={() => setShowFieldPicker(!showFieldPicker)} className="w-full py-2.5 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center gap-2">
            <Plus size={16} /> Add field
          </button>
          {showFieldPicker && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-10">
              <div className="grid grid-cols-2 gap-1">
                {fieldTypes.map((type) => (
                  <button key={type.value} onClick={() => addField(type.value)} className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-gray-50 text-left">
                    <div className="w-7 h-7 rounded bg-gray-100 flex items-center justify-center"><type.icon className="w-3.5 h-3.5 text-gray-600" /></div>
                    <span className="text-sm font-medium text-gray-900">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Domain Verification */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={16} className="text-gray-600" />
          <label className="text-sm font-medium text-gray-700">Domain verification</label>
        </div>
        
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg mb-4">
          <p className="text-xs text-blue-900 mb-2">
            Restrict form submissions to verified domains only. Select from your verified domains below.
          </p>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              checked={requireVerification} 
              onChange={(e) => setRequireVerification(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-gray-900" 
            />
            <span className="text-xs text-blue-900 font-medium">Require domain verification for submissions</span>
          </label>
        </div>

        {verifiedDomains.length > 0 ? (
          <div className="space-y-2 mb-3">
            {verifiedDomains.map((domain) => (
              <label 
                key={domain.id} 
                className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedDomains.includes(domain.domain)}
                  onChange={() => toggleDomainSelection(domain.domain)}
                  className="w-4 h-4 rounded border-gray-300 text-gray-900"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">{domain.domain}</span>
                    <span className="flex items-center gap-1 text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                      <CheckCircle size={10} /> Verified
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Verified on {new Date(domain.verifiedAt!).toLocaleDateString()}
                  </p>
                </div>
              </label>
            ))}
          </div>
        ) : (
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg mb-3 text-center">
            <p className="text-sm text-gray-600 mb-2">No verified domains yet</p>
            <p className="text-xs text-gray-500">Add and verify domains in Settings to use them here</p>
          </div>
        )}

        <Link
          href="/dashboard/settings"
          className="w-full py-2.5 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center gap-2"
        >
          <Plus size={16} /> Add domain in Settings
        </Link>
      </div>

      {/* API Access Info */}
      <div className="mb-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-900 mb-1">API Access</p>
            <p className="text-xs text-indigo-700 mb-2">
              Use your user API key from Settings to access this form via API. One key works for all your forms!
            </p>
            <Link
              href="/dashboard/settings"
              className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Go to Settings →
            </Link>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 pt-4 border-t border-gray-100">
        <button onClick={handleSave} disabled={saving} className="bg-gray-900 text-white px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 order-2 sm:order-1">
          {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <><Save size={14} className="sm:w-4 sm:h-4" /> Save changes</>}
        </button>
        <button onClick={() => setShowDeleteConfirm(true)} className="text-sm text-red-600 hover:text-red-700 flex items-center justify-center gap-1.5 order-1 sm:order-2">
          <Trash2 size={14} className="sm:w-4 sm:h-4" /> Delete
        </button>
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center"><AlertTriangle className="w-5 h-5 text-red-600" /></div>
              <h3 className="text-lg font-semibold">Delete form?</h3>
            </div>
            <p className="text-sm text-gray-600 mb-6">This will delete <strong>{form.name}</strong> and all its submissions from your dashboard.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setShowDeleteConfirm(false)} className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50">Cancel</button>
              <button onClick={handleDelete} className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
