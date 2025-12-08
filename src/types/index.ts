export interface FormField {
  id: string
  label: string
  type: 'text' | 'email' | 'textarea' | 'number' | 'date' | 'select' | 'checkbox'
  required: boolean
  placeholder?: string
  options?: string[] // for select type
}

export interface Form {
  id: string
  name: string
  fields: FormField[]
  createdAt: Date
  updatedAt: Date
  userId: string
  apiKey: string
  allowedDomains?: string[] // Domains allowed to submit to this form
  requireDomainVerification?: boolean // If true, only verified domains can submit
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
}
