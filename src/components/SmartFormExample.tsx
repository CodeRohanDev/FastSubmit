'use client'
import { useState } from 'react'
import SmartFormRenderer from './SmartFormRenderer'
import { FormField, FormLogic } from '@/types'

export default function SmartFormExample() {
  const [submissionData, setSubmissionData] = useState<Record<string, any> | null>(null)

  // Example form with display fields and regular input fields
  const exampleFields: FormField[] = [
    {
      id: 'welcome_info',
      label: 'Welcome',
      type: 'display',
      required: false,
      displayText: 'Welcome to our smart contact form! This form will adapt based on your selections to collect the most relevant information.'
    },
    {
      id: 'name',
      label: 'Full Name',
      type: 'text',
      required: true,
      placeholder: 'Enter your full name'
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      placeholder: 'your@email.com'
    },
    {
      id: 'inquiry_type',
      label: 'Type of Inquiry',
      type: 'select',
      required: true,
      options: ['General Question', 'Technical Support', 'Sales Inquiry', 'Partnership']
    },
    {
      id: 'sales_info',
      label: 'Sales Information',
      type: 'display',
      required: false,
      defaultHidden: true,
      displayText: 'Great! Our sales team will help you find the perfect solution for your needs. Please provide some additional details below.'
    },
    {
      id: 'company',
      label: 'Company Name',
      type: 'text',
      required: false,
      defaultHidden: true,
      placeholder: 'Your company name'
    },
    {
      id: 'budget',
      label: 'Budget Range',
      type: 'select',
      required: false,
      defaultHidden: true,
      options: ['Under $1,000', '$1,000 - $5,000', '$5,000 - $10,000', 'Over $10,000']
    },
    {
      id: 'technical_info',
      label: 'Technical Support',
      type: 'display',
      required: false,
      defaultHidden: true,
      displayText: 'We\'re here to help! Please describe your technical issue in detail so our support team can assist you quickly.'
    },
    {
      id: 'issue_description',
      label: 'Issue Description',
      type: 'textarea',
      required: false,
      defaultHidden: true,
      placeholder: 'Please describe the technical issue you\'re experiencing...'
    },
    {
      id: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
      placeholder: 'Tell us more about your inquiry...'
    }
  ]

  // Smart logic rules
  const exampleLogic: FormLogic = {
    rules: [
      {
        id: 'show_sales_fields',
        name: 'Show Sales Fields',
        description: 'Show sales-related fields when user selects Sales Inquiry',
        enabled: true,
        conditions: [
          {
            id: 'sales_condition',
            fieldId: 'inquiry_type',
            operator: 'equals',
            value: 'Sales Inquiry'
          }
        ],
        conditionLogic: 'AND',
        actions: [
          {
            id: 'show_sales_info',
            type: 'show',
            targetFieldId: 'sales_info'
          },
          {
            id: 'show_company',
            type: 'show',
            targetFieldId: 'company'
          },
          {
            id: 'require_company',
            type: 'require',
            targetFieldId: 'company'
          },
          {
            id: 'show_budget',
            type: 'show',
            targetFieldId: 'budget'
          }
        ],
        priority: 1
      },
      {
        id: 'show_technical_fields',
        name: 'Show Technical Support Fields',
        description: 'Show technical support fields when user selects Technical Support',
        enabled: true,
        conditions: [
          {
            id: 'tech_condition',
            fieldId: 'inquiry_type',
            operator: 'equals',
            value: 'Technical Support'
          }
        ],
        conditionLogic: 'AND',
        actions: [
          {
            id: 'show_tech_info',
            type: 'show',
            targetFieldId: 'technical_info'
          },
          {
            id: 'show_issue',
            type: 'show',
            targetFieldId: 'issue_description'
          },
          {
            id: 'require_issue',
            type: 'require',
            targetFieldId: 'issue_description'
          }
        ],
        priority: 1
      }
    ],
    globalSettings: {
      enableAnimations: true,
      showLogicIndicators: true,
      debugMode: false
    }
  }

  const handleSubmit = (data: Record<string, any>) => {
    setSubmissionData(data)
    console.log('Form submitted:', data)
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Smart Form Example</h1>
        <p className="text-gray-600">
          This example demonstrates the new features: display fields for information and a sticky info card on the right.
          Try selecting different inquiry types to see the form adapt!
        </p>
      </div>

      <SmartFormRenderer
        fields={exampleFields}
        logic={exampleLogic}
        onSubmit={handleSubmit}
        showLogicIndicators={true}
        showInfoCard={true}
        infoCardTitle="Form Help"
        infoCardContent={`This smart form will show different fields based on your selections:

• Sales Inquiry: Shows company and budget fields
• Technical Support: Shows issue description field
• Display fields provide helpful information

The form adapts in real-time as you make selections!`}
        className="mb-8"
      />

      {submissionData && (
        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-3">Form Submitted Successfully!</h3>
          <pre className="text-sm text-green-700 bg-green-100 p-3 rounded overflow-auto">
            {JSON.stringify(submissionData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}