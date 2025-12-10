'use client'
import { useState } from 'react'
import { ConditionalRule, FormField } from '@/types'
import { 
  Plus, Trash2, Eye, EyeOff, Zap, Calculator, 
  ChevronDown, ChevronRight, Settings, X, AlertCircle
} from 'lucide-react'

interface ConditionalLogicBuilderProps {
  fields: FormField[]
  currentFieldId: string
  rules: ConditionalRule[]
  onRulesChange: (rules: ConditionalRule[]) => void
}

const operators = [
  { value: 'equals', label: 'equals', desc: 'Exact match' },
  { value: 'not_equals', label: 'does not equal', desc: 'Not equal to' },
  { value: 'contains', label: 'contains', desc: 'Contains text' },
  { value: 'not_contains', label: 'does not contain', desc: 'Does not contain' },
  { value: 'greater_than', label: 'is greater than', desc: 'Number comparison' },
  { value: 'less_than', label: 'is less than', desc: 'Number comparison' },
  { value: 'is_empty', label: 'is empty', desc: 'No value entered' },
  { value: 'is_not_empty', label: 'is not empty', desc: 'Has any value' },
] as const

const actions = [
  { value: 'show', label: 'Show field', desc: 'Make field visible', icon: Eye },
  { value: 'hide', label: 'Hide field', desc: 'Make field invisible', icon: EyeOff },
  { value: 'require', label: 'Make required', desc: 'Field becomes mandatory', icon: AlertCircle },
  { value: 'optional', label: 'Make optional', desc: 'Field becomes optional', icon: Settings },
  { value: 'skip_to', label: 'Skip to field', desc: 'Jump to another field', icon: Zap },
  { value: 'set_value', label: 'Set value', desc: 'Auto-fill field value', icon: Settings },
  { value: 'set_options', label: 'Change options', desc: 'Update dropdown options', icon: ChevronDown },
] as const

export default function ConditionalLogicBuilder({ 
  fields, 
  currentFieldId, 
  rules, 
  onRulesChange 
}: ConditionalLogicBuilderProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showAddRule, setShowAddRule] = useState(false)

  // Get available fields for conditions (exclude current field)
  const availableFields = fields.filter(f => f.id !== currentFieldId)

  const addRule = () => {
    const newRule: ConditionalRule = {
      id: `rule_${Date.now()}`,
      fieldId: availableFields[0]?.id || '',
      operator: 'equals',
      value: '',
      action: 'show',
      targetFieldId: currentFieldId,
    }
    onRulesChange([...rules, newRule])
    setShowAddRule(false)
  }

  const updateRule = (ruleId: string, updates: Partial<ConditionalRule>) => {
    const updatedRules = rules.map(rule => 
      rule.id === ruleId ? { ...rule, ...updates } : rule
    )
    onRulesChange(updatedRules)
  }

  const removeRule = (ruleId: string) => {
    onRulesChange(rules.filter(rule => rule.id !== ruleId))
  }

  const getFieldOptions = (fieldId: string) => {
    const field = fields.find(f => f.id === fieldId)
    return field?.options || []
  }

  const getActionTargets = (action: string) => {
    switch (action) {
      case 'show':
      case 'hide':
      case 'require':
      case 'optional':
      case 'set_value':
        return fields.filter(f => f.id !== currentFieldId)
      case 'skip_to':
        return fields.filter(f => f.id !== currentFieldId)
      case 'set_options':
        return fields.filter(f => f.id !== currentFieldId && f.type === 'select')
      default:
        return []
    }
  }

  const needsValue = (operator: string) => {
    return !['is_empty', 'is_not_empty'].includes(operator)
  }

  const needsTargetField = (action: string) => {
    return ['show', 'hide', 'require', 'optional', 'set_value', 'set_options', 'skip_to'].includes(action)
  }

  const needsTargetValue = (action: string) => {
    return ['set_value'].includes(action)
  }

  const needsTargetOptions = (action: string) => {
    return ['set_options'].includes(action)
  }

  if (!isExpanded) {
    return (
      <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center justify-between w-full text-left"
        >
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-purple-600" />
            <span className="text-sm font-medium text-gray-900">Conditional Logic</span>
            {rules.length > 0 && (
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                {rules.length} rule{rules.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          <ChevronRight size={16} className="text-gray-400" />
        </button>
        {rules.length > 0 && (
          <p className="text-xs text-gray-500 mt-1 ml-6">
            This field has conditional behavior
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="border border-purple-200 rounded-lg bg-purple-50">
      <div className="p-3 border-b border-purple-200">
        <button
          onClick={() => setIsExpanded(false)}
          className="flex items-center justify-between w-full text-left"
        >
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-purple-600" />
            <span className="text-sm font-medium text-gray-900">Conditional Logic</span>
            {rules.length > 0 && (
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                {rules.length} rule{rules.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          <ChevronDown size={16} className="text-gray-400" />
        </button>
      </div>

      <div className="p-3 space-y-3">
        {rules.length === 0 ? (
          <div className="text-center py-4">
            <Zap size={24} className="text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-500 mb-3">
              Add conditional logic to make this field smart
            </p>
            <button
              onClick={() => setShowAddRule(true)}
              className="text-xs bg-purple-600 text-white px-3 py-1.5 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Add your first rule
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {rules.map((rule, index) => {
              const triggerField = fields.find(f => f.id === rule.fieldId)
              const targetField = fields.find(f => f.id === rule.targetFieldId)
              const actionConfig = actions.find(a => a.value === rule.action)
              const ActionIcon = actionConfig?.icon || Settings

              return (
                <div key={rule.id} className="bg-white border border-gray-200 rounded-lg p-3">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        Rule {index + 1}
                      </span>
                      <ActionIcon size={14} className="text-purple-600" />
                    </div>
                    <button
                      onClick={() => removeRule(rule.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {/* Condition */}
                    <div className="text-xs text-gray-600 mb-2">When:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <select
                        value={rule.fieldId}
                        onChange={(e) => updateRule(rule.id, { fieldId: e.target.value })}
                        className="px-2 py-1.5 border border-gray-200 rounded text-xs"
                      >
                        <option value="">Select field...</option>
                        {availableFields.map(field => (
                          <option key={field.id} value={field.id}>{field.label}</option>
                        ))}
                      </select>

                      <select
                        value={rule.operator}
                        onChange={(e) => updateRule(rule.id, { 
                          operator: e.target.value as ConditionalRule['operator'] 
                        })}
                        className="px-2 py-1.5 border border-gray-200 rounded text-xs"
                      >
                        {operators.map(op => (
                          <option key={op.value} value={op.value}>{op.label}</option>
                        ))}
                      </select>

                      {needsValue(rule.operator) && (
                        <div>
                          {triggerField?.type === 'select' ? (
                            <select
                              value={rule.value as string}
                              onChange={(e) => updateRule(rule.id, { value: e.target.value })}
                              className="px-2 py-1.5 border border-gray-200 rounded text-xs w-full"
                            >
                              <option value="">Select value...</option>
                              {getFieldOptions(rule.fieldId).map(option => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={triggerField?.type === 'number' ? 'number' : 'text'}
                              value={rule.value as string}
                              onChange={(e) => updateRule(rule.id, { 
                                value: triggerField?.type === 'number' ? Number(e.target.value) : e.target.value 
                              })}
                              placeholder="Enter value..."
                              className="px-2 py-1.5 border border-gray-200 rounded text-xs w-full"
                            />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Action */}
                    <div className="text-xs text-gray-600 mb-2">Then:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <select
                        value={rule.action}
                        onChange={(e) => updateRule(rule.id, { 
                          action: e.target.value as ConditionalRule['action'],
                          targetFieldId: rule.action !== e.target.value ? '' : rule.targetFieldId
                        })}
                        className="px-2 py-1.5 border border-gray-200 rounded text-xs"
                      >
                        {actions.map(action => (
                          <option key={action.value} value={action.value}>{action.label}</option>
                        ))}
                      </select>

                      {needsTargetField(rule.action) && (
                        <select
                          value={rule.targetFieldId || ''}
                          onChange={(e) => updateRule(rule.id, { targetFieldId: e.target.value })}
                          className="px-2 py-1.5 border border-gray-200 rounded text-xs"
                        >
                          <option value="">Select field...</option>
                          {getActionTargets(rule.action).map(field => (
                            <option key={field.id} value={field.id}>{field.label}</option>
                          ))}
                        </select>
                      )}
                    </div>

                    {/* Additional inputs based on action */}
                    {needsTargetValue(rule.action) && (
                      <input
                        type="text"
                        value={rule.targetValue as string || ''}
                        onChange={(e) => updateRule(rule.id, { targetValue: e.target.value })}
                        placeholder="Value to set..."
                        className="px-2 py-1.5 border border-gray-200 rounded text-xs w-full"
                      />
                    )}

                    {needsTargetOptions(rule.action) && (
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">New options (one per line):</label>
                        <textarea
                          value={(rule.targetValue as string[])?.join('\n') || ''}
                          onChange={(e) => updateRule(rule.id, { 
                            targetValue: e.target.value.split('\n').filter(Boolean) 
                          })}
                          placeholder="Option 1&#10;Option 2&#10;Option 3"
                          className="px-2 py-1.5 border border-gray-200 rounded text-xs w-full"
                          rows={3}
                        />
                      </div>
                    )}

                    {/* Rule preview */}
                    <div className="bg-gray-50 p-2 rounded text-xs text-gray-600">
                      <strong>Preview:</strong> When "{triggerField?.label || 'field'}" {operators.find(o => o.value === rule.operator)?.label} {needsValue(rule.operator) ? `"${rule.value}"` : ''}, {actionConfig?.label.toLowerCase()} {targetField?.label ? `"${targetField.label}"` : ''}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {!showAddRule && rules.length > 0 && (
          <button
            onClick={() => setShowAddRule(true)}
            className="w-full py-2 border border-dashed border-purple-300 rounded-lg text-xs text-purple-600 hover:border-purple-400 hover:text-purple-700 transition-colors flex items-center justify-center gap-1"
          >
            <Plus size={14} /> Add another rule
          </button>
        )}

        {showAddRule && availableFields.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-gray-900">New Rule</span>
              <button
                onClick={() => setShowAddRule(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={14} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-3">
              Create a rule to make this field respond to other field values
            </p>
            <div className="flex gap-2">
              <button
                onClick={addRule}
                className="flex-1 bg-purple-600 text-white px-3 py-1.5 rounded text-xs hover:bg-purple-700 transition-colors"
              >
                Create rule
              </button>
              <button
                onClick={() => setShowAddRule(false)}
                className="px-3 py-1.5 border border-gray-200 rounded text-xs hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {availableFields.length === 0 && (
          <div className="text-center py-4">
            <AlertCircle size={20} className="text-gray-300 mx-auto mb-2" />
            <p className="text-xs text-gray-500">
              Add more fields to create conditional logic
            </p>
          </div>
        )}
      </div>
    </div>
  )
}