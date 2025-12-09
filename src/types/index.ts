export interface FormField {
  id: string
  label: string
  type: 'text' | 'email' | 'textarea' | 'number' | 'date' | 'select' | 'checkbox'
  required: boolean
  placeholder?: string
  options?: string[] // for select type
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
