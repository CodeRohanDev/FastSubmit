// Enhanced Conditional Logic Types
export interface FormCondition {
  id: string
  fieldId: string
  operator: 'equals' | 'not_equals' | 'contains' | 'not_contains' | 'greater_than' | 'less_than' | 'is_empty' | 'is_not_empty'
  value: string | number | boolean
}

export interface FormRule {
  id: string
  name: string // Human-readable rule name
  description?: string // Optional description
  enabled: boolean
  conditions: FormCondition[] // Multiple conditions (AND logic)
  conditionLogic: 'AND' | 'OR' // How to combine conditions
  actions: FormAction[]
  priority: number // Rule execution priority (lower = higher priority)
}

export interface FormAction {
  id: string
  type: 'show' | 'hide' | 'require' | 'optional' | 'set_value' | 'set_options' | 'calculate' | 'skip_to' | 'show_message'
  targetFieldId: string
  value?: string | string[] | number // Value for set_value, set_options, calculate
  message?: string // For show_message action
  calculation?: string // For calculate action
}

export interface FormLogic {
  rules: FormRule[]
  globalSettings: {
    enableAnimations: boolean
    showLogicIndicators: boolean
    debugMode: boolean
  }
}

export interface FormField {
  id: string
  label: string
  type: 'text' | 'email' | 'textarea' | 'number' | 'date' | 'select' | 'checkbox' | 'calculated' | 'display'
  required: boolean
  placeholder?: string
  options?: string[] // for select type
  defaultHidden?: boolean // Whether field is hidden by default
  calculation?: string // Formula for calculated fields (e.g., "field1 + field2")
  validationRules?: ValidationRule[]
  displayText?: string // For display type fields - text content to show
  _stableKey?: string // Internal stable key for React rendering
  // Removed field-level conditional rules - now managed at form level
}

export interface ValidationRule {
  id: string
  type: 'min_length' | 'max_length' | 'pattern' | 'custom'
  value: string | number
  message: string
}

export interface FormBranding {
  logo?: string // URL to logo image
  companyName?: string // Company/Brand name
  tagline?: string // Tagline or description
}

export interface Form {
  id: string
  name: string
  fields: FormField[]
  logic?: FormLogic // Form-level conditional logic
  createdAt: Date
  updatedAt: Date
  userId: string
  apiKey: string
  allowedDomains?: string[] // Domains allowed to submit to this form
  requireDomainVerification?: boolean // If true, only verified domains can submit
  branding?: FormBranding // Custom branding for the form
}

export interface VerifiedDomain {
  id: string
  domain: string
  userId: string
  verificationToken: string
  verified: boolean
  verifiedAt?: Date
  createdAt: Date
  updatedAt: Date
}

export interface Submission {
  id: string
  formId: string
  data: Record<string, unknown>
  userIP: string
  userAgent: string
  submittedAt: Date
  notifiedAt?: Date | null
}

export interface NotificationSettings {
  emailNotifications: boolean
  notificationInterval: number // in minutes (e.g., 1, 5, 60, 180, 360, 720, 1440)
  lastNotifiedAt?: Date | null
  notificationEmail?: string
}
