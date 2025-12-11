'use client'
import { useState } from 'react'
import SmartFormRenderer from './SmartFormRenderer'
import { FormField, FormLogic } from '@/types'

export default function StudentEligibilityExample() {
  const [submissionData, setSubmissionData] = useState<Record<string, any> | null>(null)

  // Student eligibility form - exactly matching your scenario
  const exampleFields: FormField[] = [
    {
      id: 'welcome_info',
      label: 'Student Eligibility Check',
      type: 'display',
      required: false,
      displayText: 'This form will determine your eligibility based on your academic year. Both eligibility fields are hidden by default and will only show based on your selection.'
    },
    {
      id: 'student_name',
      label: 'Student Name',
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
      id: 'academic_year',
      label: 'Academic Year',
      type: 'select',
      required: true,
      options: ['', 'First Year', 'Second Year', 'Third Year', 'Fourth Year']
    },
    {
      id: 'not_eligible',
      label: 'Not Eligible',
      type: 'display',
      required: false,
      defaultHidden: true,
      displayText: '❌ Sorry, first-year students are not eligible for this program. Please check back next year!'
    },
    {
      id: 'eligible',
      label: 'Eligible',
      type: 'display',
      required: false,
      defaultHidden: true,
      displayText: '✅ Congratulations! You are eligible for this program. Please continue with the application process.'
    },
    {
      id: 'message',
      label: 'Additional Comments',
      type: 'textarea',
      required: false,
      placeholder: 'Any additional information...'
    }
  ]

  // Logic rules for eligibility
  const eligibilityLogic: FormLogic = {
    rules: [
      {
        id: 'show_not_eligible_first_year',
        name: 'Show Not Eligible for First Year',
        description: 'Show not eligible message when academic year is First Year',
        enabled: true,
        conditions: [
          {
            id: 'first_year_condition',
            fieldId: 'academic_year',
            operator: 'equals',
            value: 'First Year'
          }
        ],
        conditionLogic: 'AND',
        actions: [
          {
            id: 'show_not_eligible',
            type: 'show',
            targetFieldId: 'not_eligible'
          }
        ],
        priority: 1
      },
      {
        id: 'show_eligible_second_year',
        name: 'Show Eligible for Second Year',
        description: 'Show eligible message when academic year is Second Year',
        enabled: true,
        conditions: [
          {
            id: 'second_year_condition',
            fieldId: 'academic_year',
            operator: 'equals',
            value: 'Second Year'
          }
        ],
        conditionLogic: 'AND',
        actions: [
          {
            id: 'show_eligible',
            type: 'show',
            targetFieldId: 'eligible'
          }
        ],
        priority: 1
      },
      {
        id: 'show_eligible_third_year',
        name: 'Show Eligible for Third Year',
        description: 'Show eligible message when academic year is Third Year',
        enabled: true,
        conditions: [
          {
            id: 'third_year_condition',
            fieldId: 'academic_year',
            operator: 'equals',
            value: 'Third Year'
          }
        ],
        conditionLogic: 'AND',
        actions: [
          {
            id: 'show_eligible_third',
            type: 'show',
            targetFieldId: 'eligible'
          }
        ],
        priority: 1
      },
      {
        id: 'show_eligible_fourth_year',
        name: 'Show Eligible for Fourth Year',
        description: 'Show eligible message when academic year is Fourth Year',
        enabled: true,
        conditions: [
          {
            id: 'fourth_year_condition',
            fieldId: 'academic_year',
            operator: 'equals',
            value: 'Fourth Year'
          }
        ],
        conditionLogic: 'AND',
        actions: [
          {
            id: 'show_eligible_fourth',
            type: 'show',
            targetFieldId: 'eligible'
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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Student Eligibility Form Test</h1>
        <p className="text-gray-600">
          This form tests the exact scenario you described:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
          <li>Both "eligible" and "not eligible" fields are hidden by default</li>
          <li>If "First Year" is selected → shows "Not Eligible"</li>
          <li>If "Second Year" or higher is selected → shows "Eligible"</li>
          <li>No selection → both remain hidden</li>
        </ul>
      </div>

      <SmartFormRenderer
        fields={exampleFields}
        logic={eligibilityLogic}
        onSubmit={handleSubmit}
        showLogicIndicators={true}
        showInfoCard={true}
        infoCardTitle="Eligibility Logic"
        infoCardContent={`Current Logic Rules:

• First Year → Show "Not Eligible"
• Second/Third/Fourth Year → Show "Eligible"
• No selection → Both hidden

Test by selecting different academic years to see the logic in action!`}
        debugMode={true}
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