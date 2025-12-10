'use client'
import { useState } from 'react'
import { FormField, FormRule, FormCondition, FormAction, FormLogic } from '@/types'
import { 
  Plus, Trash2, Eye, EyeOff, Zap, Calculator, Settings, 
  ChevronDown, ChevronRight, X, AlertCircle, Copy, 
  Brain, Target, ArrowRight, ToggleLeft, ToggleRight,
  Code, MessageSquare, Move, Hash
} from 'lucide-react'

interface FormLogicBuilderProps {
  fields: FormField[]
  logic: FormLogic
  onLogicChange: (logic: FormLogic) => void
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

const actionTypes = [
  { value: 'show', label: 'Show field', desc: 'Make field visible', icon: Eye, color: 'green' },
  { value: 'hide', label: 'Hide field', desc: 'Make field invisible', icon: EyeOff, color: 'red' },
  { value: 'require', label: 'Make required', desc: 'Field becomes mandatory', icon: AlertCircle, color: 'orange' },
  { value: 'optional', label: 'Make optional', desc: 'Field becomes optional', icon: Settings, color: 'gray' },
  { value: 'set_value', label: 'Set value', desc: 'Auto-fill field value', icon: Target, color: 'blue' },
  { value: 'set_options', label: 'Change options', desc: 'Update dropdown options', icon: ChevronDown, color: 'purple' },
  { value: 'calculate', label: 'Calculate', desc: 'Calculate field value', icon: Calculator, color: 'indigo' },
  { value: 'skip_to', label: 'Skip to field', desc: 'Jump to another field', icon: Move, color: 'teal' },
  { value: 'show_message', label: 'Show message', desc: 'Display custom message', icon: MessageSquare, color: 'pink' },
] as const

export default function FormLogicBuilder({ fields, logic, onLogicChange }: FormLogicBuilderProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedRule, setSelectedRule] = useState<string | null>(null)
  const [showAddRule, setShowAddRule] = useState(false)

  // Fallback for logic prop
  if (!logic) {
    return (
      <div className="border-2 border-red-300 rounded-xl p-6 bg-red-50">
        <p className="text-red-600">Error: Form logic not initialized</p>
      </div>
    )
  }

  const addRule = () => {
    const newRule: FormRule = {
      id: `rule_${Date.now()}`,
      name: `Rule ${logic.rules.length + 1}`,
      description: '',
      enabled: true,
      conditions: [{
        id: `condition_${Date.now()}`,
        fieldId: fields[0]?.id || '',
        operator: 'equals',
        value: '',
      }],
      conditionLogic: 'AND',
      actions: [{
        id: `action_${Date.now()}`,
        type: 'show',
        targetFieldId: fields[1]?.id || '',
      }],
      priority: logic.rules.length + 1,
    }

    onLogicChange({
      ...logic,
      rules: [...logic.rules, newRule]
    })
    setSelectedRule(newRule.id)
    setShowAddRule(false)
  }

  const updateRule = (ruleId: string, updates: Partial<FormRule>) => {
    const updatedRules = logic.rules.map(rule => 
      rule.id === ruleId ? { ...rule, ...updates } : rule
    )
    onLogicChange({ ...logic, rules: updatedRules })
  }

  const removeRule = (ruleId: string) => {
    const updatedRules = logic.rules.filter(rule => rule.id !== ruleId)
    onLogicChange({ ...logic, rules: updatedRules })
    if (selectedRule === ruleId) {
      setSelectedRule(null)
    }
  }

  const duplicateRule = (ruleId: string) => {
    const rule = logic.rules.find(r => r.id === ruleId)
    if (!rule) return

    const newRule: FormRule = {
      ...rule,
      id: `rule_${Date.now()}`,
      name: `${rule.name} (copy)`,
      conditions: rule.conditions.map(c => ({ ...c, id: `condition_${Date.now()}` })),
      actions: rule.actions.map(a => ({ ...a, id: `action_${Date.now()}` })),
      priority: logic.rules.length + 1,
    }

    onLogicChange({
      ...logic,
      rules: [...logic.rules, newRule]
    })
  }

  const addCondition = (ruleId: string) => {
    const newCondition: FormCondition = {
      id: `condition_${Date.now()}`,
      fieldId: fields[0]?.id || '',
      operator: 'equals',
      value: '',
    }

    updateRule(ruleId, {
      conditions: [...(logic.rules.find(r => r.id === ruleId)?.conditions || []), newCondition]
    })
  }

  const updateCondition = (ruleId: string, conditionId: string, updates: Partial<FormCondition>) => {
    const rule = logic.rules.find(r => r.id === ruleId)
    if (!rule) return

    const updatedConditions = rule.conditions.map(c => 
      c.id === conditionId ? { ...c, ...updates } : c
    )
    updateRule(ruleId, { conditions: updatedConditions })
  }

  const removeCondition = (ruleId: string, conditionId: string) => {
    const rule = logic.rules.find(r => r.id === ruleId)
    if (!rule || rule.conditions.length <= 1) return

    const updatedConditions = rule.conditions.filter(c => c.id !== conditionId)
    updateRule(ruleId, { conditions: updatedConditions })
  }

  const addAction = (ruleId: string) => {
    const newAction: FormAction = {
      id: `action_${Date.now()}`,
      type: 'show',
      targetFieldId: fields[0]?.id || '',
    }

    const rule = logic.rules.find(r => r.id === ruleId)
    if (!rule) return

    updateRule(ruleId, {
      actions: [...rule.actions, newAction]
    })
  }

  const updateAction = (ruleId: string, actionId: string, updates: Partial<FormAction>) => {
    const rule = logic.rules.find(r => r.id === ruleId)
    if (!rule) return

    const updatedActions = rule.actions.map(a => 
      a.id === actionId ? { ...a, ...updates } : a
    )
    updateRule(ruleId, { actions: updatedActions })
  }

  const removeAction = (ruleId: string, actionId: string) => {
    const rule = logic.rules.find(r => r.id === ruleId)
    if (!rule || rule.actions.length <= 1) return

    const updatedActions = rule.actions.filter(a => a.id !== actionId)
    updateRule(ruleId, { actions: updatedActions })
  }

  const getFieldOptions = (fieldId: string) => {
    const field = fields.find(f => f.id === fieldId)
    return field?.options || []
  }

  const needsValue = (operator: string) => {
    return !['is_empty', 'is_not_empty'].includes(operator)
  }

  const getActionColor = (type: string) => {
    const actionType = actionTypes.find(a => a.value === type)
    return actionType?.color || 'gray'
  }

  const getActionIcon = (type: string) => {
    const actionType = actionTypes.find(a => a.value === type)
    return actionType?.icon || Settings
  }

  if (!isExpanded) {
    return (
      <div className="border-2 border-purple-300 rounded-xl p-6 bg-gradient-to-r from-purple-100 to-blue-100 shadow-lg hover:shadow-xl transition-all">
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center justify-between w-full text-left group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-gray-900">Smart Form Logic</h3>
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                  NEW
                </span>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                {logic.rules.length === 0 
                  ? '🚀 Make your form intelligent with conditional logic'
                  : `✨ ${logic.rules.length} smart rule${logic.rules.length !== 1 ? 's' : ''} active`
                }
              </p>
              <p className="text-xs text-purple-700 mt-1">
                Click to add show/hide fields, calculations, and smart behavior
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white/50 rounded-lg px-3 py-2">
              <span className="text-sm font-medium text-purple-700">Configure</span>
            </div>
            <ChevronRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>
    )
  }

  return (
    <div className="border border-purple-200 rounded-lg bg-white shadow-sm">
      {/* Header */}
      <div className="p-4 border-b border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
        <button
          onClick={() => setIsExpanded(false)}
          className="flex items-center justify-between w-full text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Form Logic</h3>
              <p className="text-sm text-gray-600">
                Create intelligent forms that adapt to user responses
              </p>
            </div>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="p-4">
        {/* Global Settings */}
        <div className="mb-6 p-3 bg-gray-50 rounded-lg">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Logic Settings</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <button
                onClick={() => onLogicChange({
                  ...logic,
                  globalSettings: {
                    ...logic.globalSettings,
                    enableAnimations: !logic.globalSettings.enableAnimations
                  }
                })}
                className="flex-shrink-0"
              >
                {logic.globalSettings.enableAnimations ? (
                  <ToggleRight className="w-5 h-5 text-purple-600" />
                ) : (
                  <ToggleLeft className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <span className="text-xs text-gray-600">Animations</span>
            </label>
            
            <label className="flex items-center gap-2 cursor-pointer">
              <button
                onClick={() => onLogicChange({
                  ...logic,
                  globalSettings: {
                    ...logic.globalSettings,
                    showLogicIndicators: !logic.globalSettings.showLogicIndicators
                  }
                })}
                className="flex-shrink-0"
              >
                {logic.globalSettings.showLogicIndicators ? (
                  <ToggleRight className="w-5 h-5 text-purple-600" />
                ) : (
                  <ToggleLeft className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <span className="text-xs text-gray-600">Logic Indicators</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <button
                onClick={() => onLogicChange({
                  ...logic,
                  globalSettings: {
                    ...logic.globalSettings,
                    debugMode: !logic.globalSettings.debugMode
                  }
                })}
                className="flex-shrink-0"
              >
                {logic.globalSettings.debugMode ? (
                  <ToggleRight className="w-5 h-5 text-purple-600" />
                ) : (
                  <ToggleLeft className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <span className="text-xs text-gray-600">Debug Mode</span>
            </label>
          </div>
        </div>

        {/* Rules List */}
        {logic.rules.length === 0 ? (
          <div className="text-center py-12">
            <Brain className="w-16 h-16 text-purple-300 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">Create Smart Forms with Logic</h4>
            <p className="text-gray-600 mb-4 max-w-md mx-auto">
              Add conditional logic to make your form intelligent. Show/hide fields, calculate values, 
              and create personalized experiences based on user responses.
            </p>
            
            {/* Quick Examples */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6 max-w-lg mx-auto">
              <h5 className="text-sm font-medium text-gray-900 mb-3">Popular Logic Examples:</h5>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Eye className="w-3 h-3 text-green-500" />
                  <span>Show "Company Size" when user selects "Business"</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calculator className="w-3 h-3 text-blue-500" />
                  <span>Calculate total price based on quantity and type</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-3 h-3 text-purple-500" />
                  <span>Set priority to "High" for urgent requests</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowAddRule(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2 mx-auto"
            >
              <Plus className="w-4 h-4" />
              Create Your First Rule
            </button>
            
            <p className="text-xs text-gray-500 mt-4">
              💡 Tip: Add at least 2 fields to your form before creating logic rules
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {logic.rules.map((rule, index) => (
              <div
                key={rule.id}
                className={`border rounded-lg transition-all ${
                  selectedRule === rule.id 
                    ? 'border-purple-300 bg-purple-50' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {/* Rule Header */}
                <div
                  className="p-4 cursor-pointer"
                  onClick={() => setSelectedRule(selectedRule === rule.id ? null : rule.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded font-mono">
                          #{index + 1}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            updateRule(rule.id, { enabled: !rule.enabled })
                          }}
                          className="flex-shrink-0"
                        >
                          {rule.enabled ? (
                            <ToggleRight className="w-5 h-5 text-green-600" />
                          ) : (
                            <ToggleLeft className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{rule.name}</h4>
                        <p className="text-xs text-gray-500">
                          {rule.conditions.length} condition{rule.conditions.length !== 1 ? 's' : ''} → {rule.actions.length} action{rule.actions.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {rule.actions.map((action) => {
                          const ActionIcon = getActionIcon(action.type)
                          const color = getActionColor(action.type)
                          return (
                            <div
                              key={action.id}
                              className={`w-6 h-6 rounded flex items-center justify-center bg-${color}-100`}
                            >
                              <ActionIcon className={`w-3 h-3 text-${color}-600`} />
                            </div>
                          )
                        })}
                      </div>
                      {selectedRule === rule.id ? (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Rule Details */}
                {selectedRule === rule.id && (
                  <div className="border-t border-gray-200 p-4 space-y-6">
                    {/* Rule Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Rule Name</label>
                        <input
                          type="text"
                          value={rule.name}
                          onChange={(e) => updateRule(rule.id, { name: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Priority</label>
                        <input
                          type="number"
                          value={rule.priority}
                          onChange={(e) => updateRule(rule.id, { priority: Number(e.target.value) })}
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                          min="1"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Description (Optional)</label>
                      <input
                        type="text"
                        value={rule.description || ''}
                        onChange={(e) => updateRule(rule.id, { description: e.target.value })}
                        placeholder="Describe what this rule does..."
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                      />
                    </div>

                    {/* Conditions */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-sm font-medium text-gray-900">Conditions</h5>
                        <div className="flex items-center gap-2">
                          <select
                            value={rule.conditionLogic}
                            onChange={(e) => updateRule(rule.id, { conditionLogic: e.target.value as 'AND' | 'OR' })}
                            className="text-xs border border-gray-200 rounded px-2 py-1"
                          >
                            <option value="AND">AND (all must be true)</option>
                            <option value="OR">OR (any can be true)</option>
                          </select>
                          <button
                            onClick={() => addCondition(rule.id)}
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {rule.conditions.map((condition, condIndex) => (
                          <div key={condition.id} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                            {condIndex > 0 && (
                              <span className="text-xs font-medium text-blue-700 px-2 py-1 bg-blue-100 rounded">
                                {rule.conditionLogic}
                              </span>
                            )}
                            
                            <select
                              value={condition.fieldId}
                              onChange={(e) => updateCondition(rule.id, condition.id, { fieldId: e.target.value })}
                              className="flex-1 text-xs border border-gray-200 rounded px-2 py-1"
                            >
                              <option value="">Select field...</option>
                              {fields.map(field => (
                                <option key={field.id} value={field.id}>{field.label}</option>
                              ))}
                            </select>

                            <select
                              value={condition.operator}
                              onChange={(e) => updateCondition(rule.id, condition.id, { 
                                operator: e.target.value as FormCondition['operator'] 
                              })}
                              className="flex-1 text-xs border border-gray-200 rounded px-2 py-1"
                            >
                              {operators.map(op => (
                                <option key={op.value} value={op.value}>{op.label}</option>
                              ))}
                            </select>

                            {needsValue(condition.operator) && (
                              <div className="flex-1">
                                {fields.find(f => f.id === condition.fieldId)?.type === 'select' ? (
                                  <select
                                    value={condition.value as string}
                                    onChange={(e) => updateCondition(rule.id, condition.id, { value: e.target.value })}
                                    className="w-full text-xs border border-gray-200 rounded px-2 py-1"
                                  >
                                    <option value="">Select value...</option>
                                    {getFieldOptions(condition.fieldId).map(option => (
                                      <option key={option} value={option}>{option}</option>
                                    ))}
                                  </select>
                                ) : (
                                  <input
                                    type={fields.find(f => f.id === condition.fieldId)?.type === 'number' ? 'number' : 'text'}
                                    value={condition.value as string}
                                    onChange={(e) => updateCondition(rule.id, condition.id, { 
                                      value: fields.find(f => f.id === condition.fieldId)?.type === 'number' 
                                        ? Number(e.target.value) 
                                        : e.target.value 
                                    })}
                                    placeholder="Enter value..."
                                    className="w-full text-xs border border-gray-200 rounded px-2 py-1"
                                  />
                                )}
                              </div>
                            )}

                            <button
                              onClick={() => removeCondition(rule.id, condition.id)}
                              className="text-red-500 hover:text-red-700 p-1"
                              disabled={rule.conditions.length === 1}
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-sm font-medium text-gray-900">Actions</h5>
                        <button
                          onClick={() => addAction(rule.id)}
                          className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition-colors flex items-center gap-1"
                        >
                          <Plus className="w-3 h-3" />
                          Add Action
                        </button>
                      </div>

                      <div className="space-y-2">
                        {rule.actions.map((action) => {
                          const ActionIcon = getActionIcon(action.type)
                          const color = getActionColor(action.type)
                          
                          return (
                            <div key={action.id} className={`flex items-center gap-2 p-3 bg-${color}-50 rounded-lg`}>
                              <div className={`w-6 h-6 rounded bg-${color}-100 flex items-center justify-center`}>
                                <ActionIcon className={`w-3 h-3 text-${color}-600`} />
                              </div>

                              <select
                                value={action.type}
                                onChange={(e) => updateAction(rule.id, action.id, { 
                                  type: e.target.value as FormAction['type'] 
                                })}
                                className="flex-1 text-xs border border-gray-200 rounded px-2 py-1"
                              >
                                {actionTypes.map(type => (
                                  <option key={type.value} value={type.value}>{type.label}</option>
                                ))}
                              </select>

                              <select
                                value={action.targetFieldId}
                                onChange={(e) => updateAction(rule.id, action.id, { targetFieldId: e.target.value })}
                                className="flex-1 text-xs border border-gray-200 rounded px-2 py-1"
                              >
                                <option value="">Select field...</option>
                                {fields.filter(f => 
                                  action.type === 'set_options' ? f.type === 'select' : true
                                ).map(field => (
                                  <option key={field.id} value={field.id}>{field.label}</option>
                                ))}
                              </select>

                              {/* Additional inputs based on action type */}
                              {(action.type === 'set_value' || action.type === 'show_message') && (
                                <input
                                  type="text"
                                  value={action.value as string || ''}
                                  onChange={(e) => updateAction(rule.id, action.id, { value: e.target.value })}
                                  placeholder={action.type === 'set_value' ? 'Value to set...' : 'Message to show...'}
                                  className="flex-1 text-xs border border-gray-200 rounded px-2 py-1"
                                />
                              )}

                              {action.type === 'set_options' && (
                                <input
                                  type="text"
                                  value={(action.value as string[])?.join(', ') || ''}
                                  onChange={(e) => updateAction(rule.id, action.id, { 
                                    value: e.target.value.split(',').map(s => s.trim()).filter(Boolean) 
                                  })}
                                  placeholder="Option 1, Option 2, Option 3"
                                  className="flex-1 text-xs border border-gray-200 rounded px-2 py-1"
                                />
                              )}

                              {action.type === 'calculate' && (
                                <input
                                  type="text"
                                  value={action.calculation || ''}
                                  onChange={(e) => updateAction(rule.id, action.id, { calculation: e.target.value })}
                                  placeholder="field1 + field2 * 0.1"
                                  className="flex-1 text-xs border border-gray-200 rounded px-2 py-1 font-mono"
                                />
                              )}

                              <button
                                onClick={() => removeAction(rule.id, action.id)}
                                className="text-red-500 hover:text-red-700 p-1"
                                disabled={rule.actions.length === 1}
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Rule Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex gap-2">
                        <button
                          onClick={() => duplicateRule(rule.id)}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded hover:bg-gray-200 transition-colors flex items-center gap-1"
                        >
                          <Copy className="w-3 h-3" />
                          Duplicate
                        </button>
                      </div>
                      <button
                        onClick={() => removeRule(rule.id)}
                        className="text-xs bg-red-100 text-red-700 px-3 py-1.5 rounded hover:bg-red-200 transition-colors flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" />
                        Delete Rule
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Add Rule Button */}
        {!showAddRule && logic.rules.length > 0 && (
          <button
            onClick={() => setShowAddRule(true)}
            className="w-full mt-4 py-3 border border-dashed border-purple-300 rounded-lg text-purple-600 hover:border-purple-400 hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Another Rule
          </button>
        )}

        {/* Add Rule Form */}
        {showAddRule && (
          <div className="mt-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-900">Create New Rule</h4>
              <button
                onClick={() => setShowAddRule(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Rules allow you to create intelligent forms that respond to user input. 
              Start with a simple condition and action.
            </p>
            <div className="flex gap-3">
              <button
                onClick={addRule}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Create Rule
              </button>
              <button
                onClick={() => setShowAddRule(false)}
                className="border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}