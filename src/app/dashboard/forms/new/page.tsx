'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { getTemplateById } from '@/lib/form-templates'
import { collection, addDoc, serverTimestamp, query, where, limit, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { FormField, VerifiedDomain, FormLogic } from '@/types'
import { generateApiKey } from '@/lib/utils'
import { 
  Plus, Trash2, GripVertical, ArrowLeft, Eye, Save,
  Type, Mail, AlignLeft, Hash, Calendar, List, CheckSquare,
  ChevronDown, ChevronUp, Copy, X, Shield, CheckCircle, Clock, ExternalLink,
  Calculator, Zap, Info, Brain
} from 'lucide-react'
import FormLogicBuilder from '@/components/FormLogicBuilder'
import SmartFormRenderer from '@/components/SmartFormRenderer'

const fieldTypes = [
  { value: 'text', label: 'Text', icon: Type, desc: 'Single line text' },
  { value: 'email', label: 'Email', icon: Mail, desc: 'Email with validation' },
  { value: 'textarea', label: 'Textarea', icon: AlignLeft, desc: 'Multi-line text' },
  { value: 'number', label: 'Number', icon: Hash, desc: 'Numeric input' },
  { value: 'date', label: 'Date', icon: Calendar, desc: 'Date picker' },
  { value: 'select', label: 'Dropdown', icon: List, desc: 'Select options' },
  { value: 'checkbox', label: 'Checkbox', icon: CheckSquare, desc: 'Yes/No toggle' },
  { value: 'calculated', label: 'Calculated', icon: Calculator, desc: 'Auto-calculated value' },
  { value: 'display', label: 'Display Text', icon: Info, desc: 'Information text only' },
] as const

type FieldType = typeof fieldTypes[number]['value']

export default function NewFormPage() {
  const { user } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const templateId = searchParams.get('template')
  
  // Load template if provided
  const template = templateId ? getTemplateById(templateId) : null
  
  const [name, setName] = useState(template?.name || '')
  const [fields, setFields] = useState<FormField[]>(
    template 
      ? template.fields.map((field, index) => ({
          id: field.name || `field_${index}`,
          label: field.label || 'Untitled Field',
          type: field.type || 'text',
          required: field.required || false,
          placeholder: field.placeholder || '',
          options: field.options || undefined,
          defaultHidden: field.defaultHidden || undefined,
          calculation: field.calculation || undefined,
          displayText: field.displayText || undefined,
          validationRules: field.validationRules || undefined,
        }))
      : [
          { id: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your name' },
          { id: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com' },
          { id: 'message', label: 'Message', type: 'textarea', required: false, placeholder: 'Your message...' },
        ]
  )
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [expandedField, setExpandedField] = useState<string | null>(null)
  const [showFieldPicker, setShowFieldPicker] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  
  // Domain states
  const [verifiedDomains, setVerifiedDomains] = useState<VerifiedDomain[]>([])
  const [selectedDomains, setSelectedDomains] = useState<string[]>([])
  const [requireVerification, setRequireVerification] = useState(true)
  const [loadingDomains, setLoadingDomains] = useState(true)
  const [showAddDomain, setShowAddDomain] = useState(false)
  const [newDomain, setNewDomain] = useState('')
  const [addingDomain, setAddingDomain] = useState(false)
  const [verifyingDomain, setVerifyingDomain] = useState<string | null>(null)
  const [existingApiKey, setExistingApiKey] = useState<string | null>(null)
  
  // Form Logic state
  const [formLogic, setFormLogic] = useState<FormLogic>({
    rules: [],
    globalSettings: {
      enableAnimations: true,
      showLogicIndicators: true,
      debugMode: false,
    }
  })

  // Fetch verified domains on mount
  useEffect(() => {
    async function fetchDomains() {
      if (!user) return
      
      try {
        // Check if user has forms
        const formsRef = collection(db, 'forms')
        const q = query(formsRef, where('userId', '==', user.uid), limit(1))
        const formsSnapshot = await getDocs(q)
        
        if (!formsSnapshot.empty) {
          setExistingApiKey('exists')
        }
        
        // Fetch domains using session-based API
        const res = await fetch('/api/dashboard/domains')
        
        if (res.ok) {
          const data = await res.json()
          setVerifiedDomains(data.domains || [])
        }
      } catch (error) {
        console.error('Error fetching domains:', error)
      }
      
      setLoadingDomains(false)
    }
    
    fetchDomains()
  }, [user])

  const handleAddDomain = async () => {
    if (!newDomain.trim()) return
    setAddingDomain(true)
    
    try {
      const res = await fetch('/api/dashboard/domains', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: newDomain.trim() })
      })
      
      if (res.ok) {
        const data = await res.json()
        setVerifiedDomains(prev => [...prev, data.domain])
        setNewDomain('')
        setShowAddDomain(false)
      } else {
        const errData = await res.json()
        setError(errData.error || 'Failed to add domain')
      }
    } catch (err) {
      setError('Failed to add domain')
    }
    
    setAddingDomain(false)
  }

  const handleVerifyDomain = async (domainId: string) => {
    setVerifyingDomain(domainId)
    
    try {
      const res = await fetch(`/api/dashboard/domains/${domainId}/verify`, {
        method: 'POST'
      })
      
      const data = await res.json()
      if (data.verified) {
        setVerifiedDomains(prev => prev.map(d => 
          d.id === domainId ? { ...d, verified: true, verifiedAt: new Date() } : d
        ))
      } else {
        setError(data.error || 'Verification failed. Check DNS records.')
      }
    } catch (err) {
      setError('Verification failed')
    }
    
    setVerifyingDomain(null)
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
      options: type === 'select' ? ['Option 1', 'Option 2', 'Option 3'] : undefined,
    }
    setFields([...fields, newField])
    setExpandedField(newField.id)
    setShowFieldPicker(false)
  }

  const updateField = (index: number, updates: Partial<FormField>) => {
    const updated = [...fields]
    updated[index] = { ...updated[index], ...updates }
    if (updates.label && !updated[index].id.startsWith('field_')) {
      updated[index].id = updates.label.toLowerCase().replace(/[^a-z0-9]/g, '_')
    }
    setFields(updated)
  }

  const removeField = (index: number) => {
    if (fields.length <= 1) {
      setError('Form must have at least one field')
      return
    }
    setFields(fields.filter((_, i) => i !== index))
    setExpandedField(null)
  }

  const duplicateField = (index: number) => {
    const field = fields[index]
    const newField = {
      ...field,
      id: `${field.id}_copy_${Date.now()}`,
      label: `${field.label} (copy)`,
    }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) {
      setError('You must be logged in')
      return
    }
    
    if (!name.trim()) {
      setError('Please provide a form name')
      return
    }
    if (fields.length === 0) {
      setError('Add at least one field')
      return
    }

    const ids = fields.map(f => f.id)
    if (new Set(ids).size !== ids.length) {
      setError('Field IDs must be unique')
      return
    }

    setSaving(true)
    setError('')

    // Clean fields to remove any undefined values
    const cleanFields = fields.map(field => {
      const cleanField: any = {
        id: field.id,
        label: field.label,
        type: field.type,
        required: field.required,
      }
      
      // Only add optional properties if they have values
      if (field.placeholder) cleanField.placeholder = field.placeholder
      if (field.options && field.options.length > 0) cleanField.options = field.options
      if (field.defaultHidden) cleanField.defaultHidden = field.defaultHidden
      if (field.calculation) cleanField.calculation = field.calculation
      if (field.displayText) cleanField.displayText = field.displayText
      if (field.validationRules && field.validationRules.length > 0) cleanField.validationRules = field.validationRules
      
      return cleanField
    })

    // Prepare form data, excluding undefined values
    const formData: any = {
      name: name.trim(),
      fields: cleanFields,
      userId: user.uid,
      apiKey: generateApiKey(),
      allowedDomains: selectedDomains,
      requireDomainVerification: requireVerification && selectedDomains.length > 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }

    // Only add logic if there are rules
    if (formLogic.rules.length > 0) {
      formData.logic = formLogic
    }

    try {
      console.log('Creating form with data:', formData) // Debug log
      
      const docRef = await addDoc(collection(db, 'forms'), formData)
      router.push(`/dashboard/forms/${docRef.id}`)
    } catch (err) {
      setError('Failed to create form. Please try again.')
      console.error('Form creation error:', err)
      console.error('Form data that failed:', formData) // Debug log
    }
    setSaving(false)
  }

  const getFieldIcon = (type: string) => {
    const fieldType = fieldTypes.find(f => f.value === type)
    return fieldType?.icon || Type
  }

  return (
    <div className={showPreview ? "max-w-7xl mx-auto" : "max-w-4xl mx-auto"}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/dashboard/forms" className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
          </Link>
          <h1 className="text-lg sm:text-xl font-semibold tracking-tight">Create form</h1>
        </div>
        <button
          type="button"
          onClick={() => setShowPreview(!showPreview)}
          className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50 w-full sm:w-auto"
        >
          <Eye size={14} className="sm:w-4 sm:h-4" />
          {showPreview ? 'Hide preview' : 'Preview'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 px-3 sm:px-4 py-3 rounded-lg mb-4 sm:mb-6 flex items-start justify-between text-sm gap-3">
          <span className="flex-1 min-w-0">{error}</span>
          <button onClick={() => setError('')} className="hover:text-red-800 flex-shrink-0">
            <X size={14} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      )}

      <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
        <div className="space-y-4 sm:space-y-6">
          {/* Form Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Form name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm"
              placeholder="e.g., Contact Form"
            />
          </div>

          {/* Form Logic - Prominent Position */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-purple-600" />
                <label className="text-sm font-medium text-gray-700">Smart Form Logic</label>
                <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full font-medium">
                  Premium Feature
                </span>
              </div>
              {formLogic.rules.length > 0 && (
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {formLogic.rules.length} rule{formLogic.rules.length !== 1 ? 's' : ''} active
                </span>
              )}
            </div>
          </div>

          {/* Fields */}
          <div>
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
                        <span className="text-xs text-gray-400">{field.type}</span>
                      </div>
                      <div className="flex items-center gap-0.5 flex-shrink-0">
                        <button
                          onClick={(e) => { e.stopPropagation(); moveField(index, index - 1) }}
                          disabled={index === 0}
                          className="p-1 text-gray-300 hover:text-gray-500 disabled:opacity-30 hidden sm:block"
                        >
                          <ChevronUp size={12} />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); moveField(index, index + 1) }}
                          disabled={index === fields.length - 1}
                          className="p-1 text-gray-300 hover:text-gray-500 disabled:opacity-30 hidden sm:block"
                        >
                          <ChevronDown size={12} />
                        </button>
                        {isExpanded ? <ChevronUp size={14} className="text-gray-400 ml-1" /> : <ChevronDown size={14} className="text-gray-400 ml-1" />}
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="px-2.5 sm:px-3 pb-2.5 sm:pb-3 pt-2 border-t border-gray-100 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">Label</label>
                            <input
                              type="text"
                              value={field.label}
                              onChange={(e) => updateField(index, { label: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">Field ID</label>
                            <input
                              type="text"
                              value={field.id}
                              onChange={(e) => updateField(index, { id: e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, '_') })}
                              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">Type</label>
                            <select
                              value={field.type}
                              onChange={(e) => updateField(index, { 
                                type: e.target.value as FormField['type'],
                                options: e.target.value === 'select' ? ['Option 1', 'Option 2'] : undefined
                              })}
                              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                            >
                              {fieldTypes.map((t) => (
                                <option key={t.value} value={t.value}>{t.label}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">Placeholder</label>
                            <input
                              type="text"
                              value={field.placeholder || ''}
                              onChange={(e) => updateField(index, { placeholder: e.target.value })}
                              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                            />
                          </div>
                        </div>

                        {field.type === 'select' && (
                          <div>
                            <label className="block text-xs text-gray-500 mb-2">Options</label>
                            <div className="space-y-2">
                              {field.options?.map((option, optIndex) => (
                                <div key={optIndex} className="flex gap-2">
                                  <input
                                    type="text"
                                    value={option}
                                    onChange={(e) => updateSelectOptions(index, optIndex, e.target.value)}
                                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                  />
                                  <button
                                    onClick={() => removeSelectOption(index, optIndex)}
                                    className="p-2 text-gray-300 hover:text-red-500"
                                    disabled={field.options?.length === 1}
                                  >
                                    <X size={14} />
                                  </button>
                                </div>
                              ))}
                              <button
                                onClick={() => addSelectOption(index)}
                                className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1"
                              >
                                <Plus size={12} /> Add option
                              </button>
                            </div>
                          </div>
                        )}

                        {field.type === 'calculated' && (
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">Calculation Formula</label>
                            <input
                              type="text"
                              value={field.calculation || ''}
                              onChange={(e) => updateField(index, { calculation: e.target.value })}
                              placeholder="e.g., field1 + field2 * 0.1"
                              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm font-mono focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                            />
                            <p className="text-xs text-gray-400 mt-1">
                              Use field IDs and basic math operators (+, -, *, /, parentheses)
                            </p>
                          </div>
                        )}

                        {field.type === 'display' && (
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">Display Text</label>
                            <textarea
                              value={field.displayText || ''}
                              onChange={(e) => updateField(index, { displayText: e.target.value })}
                              placeholder="Enter the information text to display to users..."
                              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                              rows={3}
                            />
                            <p className="text-xs text-gray-400 mt-1">
                              This text will be displayed in the info card on the right side of the form
                            </p>
                          </div>
                        )}

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-3">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={field.required}
                                onChange={(e) => updateField(index, { required: e.target.checked })}
                                className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                                disabled={field.type === 'calculated'}
                              />
                              <span className="text-xs text-gray-600">Required</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={field.defaultHidden || false}
                                onChange={(e) => updateField(index, { defaultHidden: e.target.checked })}
                                className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                              />
                              <span className="text-xs text-gray-600">Hidden by default</span>
                            </label>
                          </div>
                          <div className="flex gap-1">
                            <button
                              onClick={() => duplicateField(index)}
                              className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded"
                              title="Duplicate"
                            >
                              <Copy size={14} />
                            </button>
                            <button
                              onClick={() => removeField(index)}
                              className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded"
                              title="Delete"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>


                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="mt-3 relative">
              <button
                type="button"
                onClick={() => setShowFieldPicker(!showFieldPicker)}
                className="w-full py-2.5 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <Plus size={16} /> Add field
              </button>

              {showFieldPicker && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-10">
                  <div className="grid grid-cols-2 gap-1">
                    {fieldTypes.map((type) => (
                      <button
                        key={type.value}
                        onClick={() => addField(type.value)}
                        className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-gray-50 text-left transition-colors"
                      >
                        <div className="w-7 h-7 rounded bg-gray-100 flex items-center justify-center">
                          <type.icon className="w-3.5 h-3.5 text-gray-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{type.label}</div>
                          <div className="text-[10px] text-gray-400">{type.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Domain Verification */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield size={16} className="text-gray-600" />
              <label className="text-sm font-medium text-gray-700">Authorized domains</label>
            </div>
            
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg mb-4">
              <p className="text-xs text-blue-900 mb-2">
                Restrict form submissions to verified domains only. This prevents spam and unauthorized usage.
              </p>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={requireVerification} 
                  onChange={(e) => setRequireVerification(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-gray-900" 
                />
                <span className="text-xs text-blue-900 font-medium">Enable domain verification</span>
              </label>
            </div>

            {loadingDomains ? (
              <div className="flex justify-center py-6">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-gray-900"></div>
              </div>
            ) : verifiedDomains.length > 0 ? (
              <div className="space-y-2 mb-3">
                {verifiedDomains.map((domain) => (
                  <div key={domain.id} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3 flex-1">
                      <input
                        type="checkbox"
                        checked={selectedDomains.includes(domain.domain)}
                        onChange={() => toggleDomainSelection(domain.domain)}
                        disabled={!domain.verified}
                        className="w-4 h-4 rounded border-gray-300 text-gray-900 disabled:opacity-50"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-900">{domain.domain}</span>
                          {domain.verified ? (
                            <span className="flex items-center gap-1 text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                              <CheckCircle size={10} /> Verified
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-[10px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded">
                              <Clock size={10} /> Pending
                            </span>
                          )}
                        </div>
                        {!domain.verified && (
                          <div className="mt-1 text-xs text-gray-500">
                            TXT: <code className="bg-gray-100 px-1 py-0.5 rounded text-[10px]">fastsubmit-verify={domain.verificationToken}</code>
                          </div>
                        )}
                      </div>
                    </div>
                    {!domain.verified && (
                      <button
                        onClick={() => handleVerifyDomain(domain.id)}
                        disabled={verifyingDomain === domain.id}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-gray-600 hover:text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                      >
                        {verifyingDomain === domain.id ? (
                          <div className="w-3 h-3 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                        ) : (
                          <CheckCircle size={12} />
                        )}
                        Verify
                      </button>
                    )}
                  </div>
                ))}
              </div>
            ) : null}

            {!showAddDomain ? (
              <button
                onClick={() => setShowAddDomain(true)}
                className="w-full py-2.5 border border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <Plus size={16} /> Add domain
              </button>
            ) : (
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <label className="block text-xs text-gray-600 mb-2">Domain name</label>
                <input
                  type="text"
                  value={newDomain}
                  onChange={(e) => setNewDomain(e.target.value)}
                  placeholder="example.com"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm mb-3"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleAddDomain}
                    disabled={addingDomain || !newDomain.trim()}
                    className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors disabled:opacity-50"
                  >
                    {addingDomain ? 'Adding...' : 'Add domain'}
                  </button>
                  <button
                    onClick={() => { setShowAddDomain(false); setNewDomain('') }}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-white transition-colors"
                  >
                    Cancel
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  After adding, verify via DNS TXT record.{' '}
                  <Link href="/docs/domain-verification" target="_blank" className="text-gray-900 hover:underline inline-flex items-center gap-1">
                    Learn more <ExternalLink size={10} />
                  </Link>
                </p>
              </div>
            )}

            {selectedDomains.length > 0 && requireVerification && (
              <p className="text-xs text-green-600 mt-3 flex items-center gap-1">
                <CheckCircle size={12} />
                Form will only accept submissions from {selectedDomains.length} selected domain{selectedDomains.length > 1 ? 's' : ''}
              </p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={saving || !name.trim() || fields.length === 0}
            className="w-full bg-gray-900 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {saving ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                <Save size={14} className="sm:w-4 sm:h-4" /> Create form
              </>
            )}
          </button>
        </div>

        <div className="lg:sticky lg:top-8 h-fit space-y-6">
          {/* Form Logic Builder */}
          <div className="border border-gray-200 rounded-lg bg-white">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <span className="text-sm font-medium text-gray-900 flex items-center gap-2">
                <Brain size={16} className="text-purple-600" />
                Smart Logic
              </span>
              <div className="flex items-center gap-1 text-xs text-purple-600">
                <Zap size={12} />
                <span>{formLogic?.rules?.length || 0} rules</span>
              </div>
            </div>
            
            <div className="p-4">
              <FormLogicBuilder
                key={`logic-${fields.length}`}
                fields={fields}
                logic={formLogic}
                onLogicChange={setFormLogic}
              />
            </div>
          </div>

          {/* Form Preview */}
          {showPreview && (
            <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="text-xs text-gray-400">Smart Preview</span>
                <div className="flex items-center gap-1 text-xs text-purple-600">
                  <Zap size={12} />
                  <span>Live Logic</span>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="text-base sm:text-lg font-semibold tracking-tight mb-4">{name || 'Untitled Form'}</h4>
                <SmartFormRenderer
                  fields={fields}
                  logic={formLogic}
                  onSubmit={(data) => console.log('Preview submission:', data)}
                  showLogicIndicators={true}
                  showInfoCard={true}
                  infoCardTitle="Form Preview"
                  infoCardContent={`This is a live preview of your form.

• Form fields appear on the left
• Information and help text appears here  
• The card stays visible while scrolling
• Try adding display fields for user guidance

Fields: ${fields.length}
Logic Rules: ${formLogic?.rules?.length || 0}`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
