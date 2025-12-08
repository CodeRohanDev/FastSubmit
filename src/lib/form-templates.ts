import { FormField } from '@/types'

export interface FormTemplate {
  id: string
  name: string
  description: string
  category: string
  icon: string
  fields: Array<Omit<FormField, 'id'> & { name: string }>
}

export const formTemplates: FormTemplate[] = [
  {
    id: 'contact',
    name: 'Contact Form',
    description: 'Simple contact form with name, email, and message',
    category: 'General',
    icon: '📧',
    fields: [
      {
        name: 'name',
        label: 'Full Name',
        type: 'text',
        required: true,
        placeholder: 'John Doe',
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'john@example.com',
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        required: true,
        placeholder: 'Your message here...',
      },
    ],
  },
  {
    id: 'newsletter',
    name: 'Newsletter Signup',
    description: 'Collect email addresses for your newsletter',
    category: 'Marketing',
    icon: '📰',
    fields: [
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'your@email.com',
      },
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        required: false,
        placeholder: 'John',
      },
      {
        name: 'consent',
        label: 'I agree to receive marketing emails',
        type: 'checkbox',
        required: true,
      },
    ],
  },
  {
    id: 'feedback',
    name: 'Feedback Form',
    description: 'Gather user feedback and ratings',
    category: 'General',
    icon: '⭐',
    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        required: false,
        placeholder: 'Your name (optional)',
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        required: false,
        placeholder: 'your@email.com (optional)',
      },
      {
        name: 'rating',
        label: 'How would you rate your experience?',
        type: 'select',
        required: true,
        options: ['Excellent', 'Good', 'Average', 'Poor', 'Very Poor'],
      },
      {
        name: 'feedback',
        label: 'Your Feedback',
        type: 'textarea',
        required: true,
        placeholder: 'Tell us what you think...',
      },
    ],
  },
  {
    id: 'support',
    name: 'Support Ticket',
    description: 'Customer support request form',
    category: 'Support',
    icon: '🎫',
    fields: [
      {
        name: 'name',
        label: 'Full Name',
        type: 'text',
        required: true,
        placeholder: 'John Doe',
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'john@example.com',
      },
      {
        name: 'priority',
        label: 'Priority',
        type: 'select',
        required: true,
        options: ['Low', 'Medium', 'High', 'Urgent'],
      },
      {
        name: 'subject',
        label: 'Subject',
        type: 'text',
        required: true,
        placeholder: 'Brief description of the issue',
      },
      {
        name: 'description',
        label: 'Description',
        type: 'textarea',
        required: true,
        placeholder: 'Detailed description of your issue...',
      },
    ],
  },
  {
    id: 'waitlist',
    name: 'Waitlist Signup',
    description: 'Collect signups for product launches',
    category: 'Marketing',
    icon: '🚀',
    fields: [
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'your@email.com',
      },
      {
        name: 'name',
        label: 'Full Name',
        type: 'text',
        required: true,
        placeholder: 'John Doe',
      },
      {
        name: 'company',
        label: 'Company',
        type: 'text',
        required: false,
        placeholder: 'Your company (optional)',
      },
      {
        name: 'useCase',
        label: 'What will you use this for?',
        type: 'textarea',
        required: false,
        placeholder: 'Tell us about your use case...',
      },
    ],
  },
  {
    id: 'job-application',
    name: 'Job Application',
    description: 'Accept job applications with resume upload',
    category: 'HR',
    icon: '💼',
    fields: [
      {
        name: 'fullName',
        label: 'Full Name',
        type: 'text',
        required: true,
        placeholder: 'John Doe',
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'john@example.com',
      },
      {
        name: 'phone',
        label: 'Phone Number',
        type: 'text',
        required: true,
        placeholder: '+1 (555) 000-0000',
      },
      {
        name: 'position',
        label: 'Position Applied For',
        type: 'text',
        required: true,
        placeholder: 'e.g., Software Engineer',
      },
      {
        name: 'experience',
        label: 'Years of Experience',
        type: 'select',
        required: true,
        options: ['0-1 years', '1-3 years', '3-5 years', '5-10 years', '10+ years'],
      },
      {
        name: 'coverLetter',
        label: 'Cover Letter',
        type: 'textarea',
        required: false,
        placeholder: 'Tell us why you\'re a great fit...',
      },
    ],
  },
  {
    id: 'event-registration',
    name: 'Event Registration',
    description: 'Register attendees for events',
    category: 'Events',
    icon: '🎉',
    fields: [
      {
        name: 'name',
        label: 'Full Name',
        type: 'text',
        required: true,
        placeholder: 'John Doe',
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'john@example.com',
      },
      {
        name: 'phone',
        label: 'Phone Number',
        type: 'text',
        required: false,
        placeholder: '+1 (555) 000-0000',
      },
      {
        name: 'ticketType',
        label: 'Ticket Type',
        type: 'select',
        required: true,
        options: ['General Admission', 'VIP', 'Student', 'Group'],
      },
      {
        name: 'dietaryRestrictions',
        label: 'Dietary Restrictions',
        type: 'text',
        required: false,
        placeholder: 'Any dietary restrictions?',
      },
    ],
  },
  {
    id: 'survey',
    name: 'Customer Survey',
    description: 'Collect customer opinions and data',
    category: 'Research',
    icon: '📊',
    fields: [
      {
        name: 'email',
        label: 'Email (Optional)',
        type: 'email',
        required: false,
        placeholder: 'your@email.com',
      },
      {
        name: 'satisfaction',
        label: 'Overall Satisfaction',
        type: 'select',
        required: true,
        options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'],
      },
      {
        name: 'recommend',
        label: 'Would you recommend us to others?',
        type: 'select',
        required: true,
        options: ['Definitely', 'Probably', 'Not Sure', 'Probably Not', 'Definitely Not'],
      },
      {
        name: 'improvements',
        label: 'What can we improve?',
        type: 'textarea',
        required: false,
        placeholder: 'Your suggestions...',
      },
    ],
  },
  {
    id: 'quote-request',
    name: 'Quote Request',
    description: 'Get pricing inquiries from potential customers',
    category: 'Sales',
    icon: '💰',
    fields: [
      {
        name: 'companyName',
        label: 'Company Name',
        type: 'text',
        required: true,
        placeholder: 'Acme Inc.',
      },
      {
        name: 'contactName',
        label: 'Contact Name',
        type: 'text',
        required: true,
        placeholder: 'John Doe',
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'john@acme.com',
      },
      {
        name: 'phone',
        label: 'Phone Number',
        type: 'text',
        required: false,
        placeholder: '+1 (555) 000-0000',
      },
      {
        name: 'projectDetails',
        label: 'Project Details',
        type: 'textarea',
        required: true,
        placeholder: 'Tell us about your project...',
      },
      {
        name: 'budget',
        label: 'Budget Range',
        type: 'select',
        required: false,
        options: ['Under $5k', '$5k - $10k', '$10k - $25k', '$25k - $50k', '$50k+'],
      },
    ],
  },
  {
    id: 'bug-report',
    name: 'Bug Report',
    description: 'Track and manage bug reports',
    category: 'Support',
    icon: '🐛',
    fields: [
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        required: true,
        placeholder: 'your@email.com',
      },
      {
        name: 'title',
        label: 'Bug Title',
        type: 'text',
        required: true,
        placeholder: 'Brief description of the bug',
      },
      {
        name: 'severity',
        label: 'Severity',
        type: 'select',
        required: true,
        options: ['Critical', 'High', 'Medium', 'Low'],
      },
      {
        name: 'description',
        label: 'Description',
        type: 'textarea',
        required: true,
        placeholder: 'Detailed description of the bug...',
      },
      {
        name: 'stepsToReproduce',
        label: 'Steps to Reproduce',
        type: 'textarea',
        required: true,
        placeholder: '1. Go to...\n2. Click on...\n3. See error',
      },
    ],
  },
]

export function getTemplateById(id: string): FormTemplate | undefined {
  return formTemplates.find(template => template.id === id)
}

export function getTemplatesByCategory(category: string): FormTemplate[] {
  return formTemplates.filter(template => template.category === category)
}

export const templateCategories = [
  'All',
  'General',
  'Marketing',
  'Support',
  'HR',
  'Events',
  'Research',
  'Sales',
]
