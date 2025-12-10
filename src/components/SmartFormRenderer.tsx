'use client'
import { useState, useEffect, useMemo } from 'react'
import { FormField, FormLogic, FormRule, FormCondition } from '@/types'
import { Calculator, Eye, EyeOff, Zap } from 'lucide-react'

interface SmartFormRendererProps {
  fields: FormField[]
  logic?: FormLogic
  onSubmit: (data: Record<string, any>) => void
  className?: string
  showLogicIndicators?: boolean
}

interface FieldState {
  visible: boolean
  required: boolean
  value: any
  options?: string[]
  disabled?: boolean
}

export default function SmartFormRenderer({ 
  fields, 
  logic,
  onSubmit, 
  className = '',
  showLogicIndicators = false 
}: SmartFormRendererProps) {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [fieldStates, setFieldStates] = useState<Record<string, FieldState>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Initialize field states
  useEffect(() => {
    const initialStates: Record<string, FieldState> = {}
    
    fields.forEach(field => {
      initialStates[field.id] = {
        visible: !field.defaultHidden,
        required: field.required,
        value: formData[field.id] || '',
        options: field.options,
        disabled: false
      }
    })
    
    setFieldStates(initialStates)
  }, [fields])

  // Evaluate form logic rules whenever form data changes
  useEffect(() => {
    if (!logic || logic.rules.length === 0) return
    
    const newStates = { ...fieldStates }
    
    // Sort rules by priority (lower number = higher priority)
    const sortedRules = [...logic.rules]
      .filter(rule => rule.enabled)
      .sort((a, b) => a.priority - b.priority)
    
    sortedRules.forEach(rule => {
      const conditionsMet = evaluateRuleConditions(rule, formData)
      
      if (conditionsMet) {
        rule.actions.forEach(action => {
          applyRuleAction(action, newStates, formData)
        })
      }
    })
    
    // Handle calculated fields
    fields.forEach(field => {
      if (field.type === 'calculated' && field.calculation) {
        const calculatedValue = evaluateCalculation(field.calculation, formData)
        if (calculatedValue !== null) {
          setFormData(prev => ({ ...prev, [field.id]: calculatedValue }))
        }
      }
    })
    
    setFieldStates(newStates)
  }, [formData, fields, logic])

  const evaluateRuleConditions = (rule: FormRule, data: Record<string, any>): boolean => {
    if (rule.conditions.length === 0) return false
    
    const results = rule.conditions.map(condition => evaluateCondition(condition, data[condition.fieldId]))
    
    return rule.conditionLogic === 'AND' 
      ? results.every(result => result)
      : results.some(result => result)
  }

  const evaluateCondition = (condition: FormCondition, triggerValue: any): boolean => {
    const { operator, value } = condition
    
    switch (operator) {
      case 'equals':
        return triggerValue === value
      case 'not_equals':
        return triggerValue !== value
      case 'contains':
        return String(triggerValue || '').toLowerCase().includes(String(value).toLowerCase())
      case 'not_contains':
        return !String(triggerValue || '').toLowerCase().includes(String(value).toLowerCase())
      case 'greater_than':
        return Number(triggerValue) > Number(value)
      case 'less_than':
        return Number(triggerValue) < Number(value)
      case 'is_empty':
        return !triggerValue || triggerValue === ''
      case 'is_not_empty':
        return triggerValue && triggerValue !== ''
      default:
        return false
    }
  }

  const applyRuleAction = (action: any, states: Record<string, FieldState>, data: Record<string, any>) => {
    const targetId = action.targetFieldId
    if (!targetId || !states[targetId]) return
    
    switch (action.type) {
      case 'show':
        states[targetId].visible = true
        break
      case 'hide':
        states[targetId].visible = false
        break
      case 'require':
        states[targetId].required = true
        break
      case 'optional':
        states[targetId].required = false
        break
      case 'set_value':
        if (action.value !== undefined) {
          setFormData(prev => ({ ...prev, [targetId]: action.value }))
        }
        break
      case 'set_options':
        if (action.value && Array.isArray(action.value)) {
          states[targetId].options = action.value
        }
        break
      case 'calculate':
        if (action.calculation) {
          const calculatedValue = evaluateCalculation(action.calculation, data)
          if (calculatedValue !== null) {
            setFormData(prev => ({ ...prev, [targetId]: calculatedValue }))
          }
        }
        break
      case 'skip_to':
        // This would be handled by form navigation logic
        break
      case 'show_message':
        // This could show a toast or inline message
        console.log('Message:', action.message)
        break
    }
  }

  const evaluateCalculation = (calculation: string, data: Record<string, any>): number | null => {
    try {
      // Simple calculation parser - replace field IDs with values
      let expression = calculation
      
      Object.keys(data).forEach(fieldId => {
        const value = Number(data[fieldId]) || 0
        expression = expression.replace(new RegExp(`\\b${fieldId}\\b`, 'g'), value.toString())
      })
      
      // Basic math operations only for security
      if (!/^[\d\s+\-*/().]+$/.test(expression)) {
        return null
      }
      
      return Function(`"use strict"; return (${expression})`)()
    } catch {
      return null
    }
  }

  const handleFieldChange = (fieldId: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldId]: value }))
    
    // Clear error when user starts typing
    if (errors[fieldId]) {
      setErrors(prev => ({ ...prev, [fieldId]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}
    
    fields.forEach(field => {
      const state = fieldStates[field.id]
      const value = formData[field.id]
      
      if (state?.visible && state?.required && (!value || value === '')) {
        newErrors[field.id] = `${field.label} is required`
      }
      
      // Custom validation rules
      if (field.validationRules && value) {
        field.validationRules.forEach(rule => {
          
          switch (rule.type) {
            case 'min_length':
              if (String(value).length < Number(rule.value)) {
                newErrors[field.id] = rule.message
              }
              break
            case 'max_length':
              if (String(value).length > Number(rule.value)) {
                newErrors[field.id] = rule.message
              }
              break
            case 'pattern':
              const regex = new RegExp(String(rule.value))
              if (!regex.test(String(value))) {
                newErrors[field.id] = rule.message
              }
              break
          }
        })
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Only submit visible fields
      const visibleData: Record<string, any> = {}
      Object.keys(formData).forEach(fieldId => {
        if (fieldStates[fieldId]?.visible) {
          visibleData[fieldId] = formData[fieldId]
        }
      })
      
      onSubmit(visibleData)
    }
  }

  const visibleFields = fields.filter(field => fieldStates[field.id]?.visible !== false)

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {visibleFields.map(field => {
        const state = fieldStates[field.id]
        const value = formData[field.id] || ''
        const error = errors[field.id]
        const hasLogic = logic && logic.rules.some(rule => 
          rule.conditions.some(c => c.fieldId === field.id) || 
          rule.actions.some(a => a.targetFieldId === field.id)
        )

        return (
          <div key={field.id} className="space-y-1">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              {field.label}
              {state?.required && <span className="text-red-500">*</span>}
              {showLogicIndicators && hasLogic && (
                <div className="flex items-center gap-1">
                  <Zap size={12} className="text-purple-500" />
                  <span className="text-xs text-purple-600">Smart</span>
                </div>
              )}
              {field.type === 'calculated' && (
                <div className="flex items-center gap-1">
                  <Calculator size={12} className="text-blue-500" />
                  <span className="text-xs text-blue-600">Auto</span>
                </div>
              )}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                value={value}
                onChange={(e) => handleFieldChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                disabled={state?.disabled}
                className={`w-full px-3 py-2 border rounded-lg text-sm transition-colors ${
                  error 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:border-gray-500 focus:ring-gray-500'
                } bg-white`}
                rows={3}
              />
            ) : field.type === 'select' ? (
              <select
                value={value}
                onChange={(e) => handleFieldChange(field.id, e.target.value)}
                disabled={state?.disabled}
                className={`w-full px-3 py-2 border rounded-lg text-sm transition-colors ${
                  error 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:border-gray-500 focus:ring-gray-500'
                }`}
              >
                <option value="">Select...</option>
                {(state?.options || field.options || []).map((option, i) => (
                  <option key={i} value={option}>{option}</option>
                ))}
              </select>
            ) : field.type === 'checkbox' ? (
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={value === true}
                  onChange={(e) => handleFieldChange(field.id, e.target.checked)}
                  disabled={state?.disabled}
                  className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-500"
                />
                <span className="text-sm text-gray-600">{field.placeholder || 'Yes'}</span>
              </label>
            ) : (
              <input
                type={field.type === 'calculated' ? 'text' : field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : field.type === 'email' ? 'email' : 'text'}
                value={value}
                onChange={(e) => handleFieldChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                disabled={state?.disabled || field.type === 'calculated'}
                className={`w-full px-3 py-2 border rounded-lg text-sm transition-colors ${
                  error 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                    : 'border-gray-300 focus:border-gray-500 focus:ring-gray-500'
                } ${field.type === 'calculated' ? 'bg-gray-50' : 'bg-white'}`}
              />
            )}

            {error && (
              <p className="text-xs text-red-600 flex items-center gap-1">
                <span>⚠️</span> {error}
              </p>
            )}

            {showLogicIndicators && hasLogic && (
              <div className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">
                <Zap size={10} className="inline mr-1" />
                This field is controlled by smart logic
              </div>
            )}
          </div>
        )
      })}

      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors"
      >
        Submit
      </button>
    </form>
  )
}