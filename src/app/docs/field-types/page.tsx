import type { Metadata } from 'next'
import { Type, Mail, AlignLeft, Hash, Calendar, List, CheckSquare } from 'lucide-react'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Form Field Types - Free Form Builder | FastSubmit',
  description: 'Learn about all 7 field types in FastSubmit free form builder. Text, email, textarea, number, date, select, checkbox. Create forms free.',
  keywords: ['form field types', 'form builder fields', 'free form builder', 'online form builder', 'form maker', 'create free forms', 'easy forms'],
}

export default function FieldTypesPage() {
  const fieldTypes = [
    {
      type: 'text',
      label: 'Text',
      icon: Type,
      description: 'Single-line text input for names, titles, short answers',
      htmlInput: '<input type="text" name="field_id" />',
      validation: 'Any text value',
      example: 'John Doe',
      color: 'indigo',
    },
    {
      type: 'email',
      label: 'Email',
      icon: Mail,
      description: 'Email address with built-in format validation',
      htmlInput: '<input type="email" name="field_id" />',
      validation: 'Must be a valid email format (user@domain.com)',
      example: 'john@example.com',
      color: 'blue',
    },
    {
      type: 'textarea',
      label: 'Textarea',
      icon: AlignLeft,
      description: 'Multi-line text input for messages, descriptions, long answers',
      htmlInput: '<textarea name="field_id"></textarea>',
      validation: 'Any text value (supports multiple lines)',
      example: 'Hello,\\n\\nThis is a multi-line message.',
      color: 'green',
    },
    {
      type: 'number',
      label: 'Number',
      icon: Hash,
      description: 'Numeric input for quantities, ages, ratings',
      htmlInput: '<input type="number" name="field_id" />',
      validation: 'Must be a valid number',
      example: '42',
      color: 'yellow',
    },
    {
      type: 'date',
      label: 'Date',
      icon: Calendar,
      description: 'Date picker for birthdays, appointments, deadlines',
      htmlInput: '<input type="date" name="field_id" />',
      validation: 'Must be a valid date (YYYY-MM-DD format)',
      example: '2024-01-15',
      color: 'purple',
    },
    {
      type: 'select',
      label: 'Dropdown',
      icon: List,
      description: 'Single selection from predefined options',
      htmlInput: '<select name="field_id">\\n  <option value="opt1">Option 1</option>\\n</select>',
      validation: 'Must match one of the defined options',
      example: 'Option 1',
      color: 'pink',
    },
    {
      type: 'checkbox',
      label: 'Checkbox',
      icon: CheckSquare,
      description: 'Boolean yes/no toggle for agreements, preferences',
      htmlInput: '<input type="checkbox" name="field_id" value="true" />',
      validation: 'true or false',
      example: 'true',
      color: 'orange',
    },
  ]

  const colorClasses: Record<string, string> = {
    indigo: 'bg-indigo-100 text-indigo-600',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    purple: 'bg-purple-100 text-purple-600',
    pink: 'bg-pink-100 text-pink-600',
    orange: 'bg-orange-100 text-orange-600',
  }

  return (
    <>
    <GoogleAnalytics />
    <div className="min-w-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Field Types</h1>
      <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        FastSubmit supports 7 different field types to build any form you need. Each field type has specific validation and formatting.
      </p>

      {/* Overview */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-3 sm:p-4 mb-6 sm:mb-8">
        <p className="text-xs sm:text-sm text-indigo-800">
          <strong>Unlimited Forms:</strong> Create as many forms as you need with any combination of field types. 
          There&apos;s no limit on the number of forms or fields per form.
        </p>
      </div>

      {/* Field Types Grid */}
      <div className="grid gap-4 sm:gap-6 mb-8 sm:mb-10">
        {fieldTypes.map((field) => (
          <div key={field.type} className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${colorClasses[field.color]} flex items-center justify-center shrink-0`}>
                <field.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{field.label}</h3>
                <code className="text-xs sm:text-sm text-gray-500">type: &quot;{field.type}&quot;</code>
              </div>
            </div>
            <div className="p-3 sm:p-4">
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{field.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">HTML Input</h4>
                  <div className="bg-gray-100 rounded-lg overflow-hidden">
                    <pre className="p-2 sm:p-3 overflow-x-auto text-[10px] sm:text-xs">
                      <code className="whitespace-pre">{field.htmlInput}</code>
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-gray-700 mb-2">Validation</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{field.validation}</p>
                  <h4 className="text-xs sm:text-sm font-medium text-gray-700 mt-2 sm:mt-3 mb-1">Example Value</h4>
                  <code className="text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded break-all">{field.example}</code>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Field Configuration */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Field Configuration</h2>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          Each field in your form can be configured with the following properties:
        </p>
        
        {/* Mobile: Card layout */}
        <div className="sm:hidden space-y-3">
          {[
            { prop: 'id', type: 'string', req: true, desc: 'Unique identifier used as the field name' },
            { prop: 'label', type: 'string', req: true, desc: 'Display label shown to users' },
            { prop: 'type', type: 'string', req: true, desc: 'text, email, textarea, number, date, select, checkbox' },
            { prop: 'required', type: 'boolean', req: false, desc: 'Whether the field must be filled' },
            { prop: 'placeholder', type: 'string', req: false, desc: 'Placeholder text shown in empty fields' },
            { prop: 'options', type: 'string[]', req: false, desc: 'Array of options for dropdown fields' },
          ].map((item) => (
            <div key={item.prop} className="border border-gray-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <code className="text-indigo-600 font-mono text-xs">{item.prop}</code>
                <span className="text-gray-500 text-xs">({item.type})</span>
                {item.req && <span className="text-red-600 text-xs font-medium">Required</span>}
              </div>
              <p className="text-gray-600 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
        {/* Desktop: Table */}
        <div className="hidden sm:block border border-gray-200 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Property</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Type</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Required</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-600">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3 font-mono text-indigo-600">id</td>
                  <td className="px-4 py-3 text-gray-600">string</td>
                  <td className="px-4 py-3"><span className="text-red-600 font-medium">Yes</span></td>
                  <td className="px-4 py-3 text-gray-600">Unique identifier used as the field name in submissions</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-mono text-indigo-600">label</td>
                  <td className="px-4 py-3 text-gray-600">string</td>
                  <td className="px-4 py-3"><span className="text-red-600 font-medium">Yes</span></td>
                  <td className="px-4 py-3 text-gray-600">Display label shown to users</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-mono text-indigo-600">type</td>
                  <td className="px-4 py-3 text-gray-600">string</td>
                  <td className="px-4 py-3"><span className="text-red-600 font-medium">Yes</span></td>
                  <td className="px-4 py-3 text-gray-600">One of: text, email, textarea, number, date, select, checkbox</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-mono text-indigo-600">required</td>
                  <td className="px-4 py-3 text-gray-600">boolean</td>
                  <td className="px-4 py-3 text-gray-500">No</td>
                  <td className="px-4 py-3 text-gray-600">Whether the field must be filled (default: false)</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-mono text-indigo-600">placeholder</td>
                  <td className="px-4 py-3 text-gray-600">string</td>
                  <td className="px-4 py-3 text-gray-500">No</td>
                  <td className="px-4 py-3 text-gray-600">Placeholder text shown in empty fields</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-mono text-indigo-600">options</td>
                  <td className="px-4 py-3 text-gray-600">string[]</td>
                  <td className="px-4 py-3 text-gray-500">For select</td>
                  <td className="px-4 py-3 text-gray-600">Array of options for dropdown fields</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Example Form Configuration */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Example Form Configuration</h2>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
          Here&apos;s an example of a complete contact form with multiple field types:
        </p>
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <pre className="p-3 sm:p-4 overflow-x-auto text-[11px] sm:text-sm leading-relaxed">
            <code className="text-gray-100 whitespace-pre">{`{
  "name": "Contact Form",
  "fields": [
    {
      "id": "name",
      "label": "Full Name",
      "type": "text",
      "required": true
    },
    {
      "id": "email",
      "label": "Email Address",
      "type": "email",
      "required": true
    },
    {
      "id": "subject",
      "label": "Subject",
      "type": "select",
      "required": true,
      "options": ["General", "Support", "Sales"]
    },
    {
      "id": "message",
      "label": "Message",
      "type": "textarea",
      "required": true
    }
  ]
}`}</code>
          </pre>
        </div>
      </section>

      {/* Common Form Templates */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Common Form Templates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div className="border border-gray-200 rounded-xl p-3 sm:p-4">
            <h3 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Contact Form</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Name, Email, Subject, Message</p>
            <div className="flex flex-wrap gap-1">
              <span className="text-[10px] sm:text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">text</span>
              <span className="text-[10px] sm:text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">email</span>
              <span className="text-[10px] sm:text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded">select</span>
              <span className="text-[10px] sm:text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">textarea</span>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-3 sm:p-4">
            <h3 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Newsletter Signup</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Email, Name (optional)</p>
            <div className="flex flex-wrap gap-1">
              <span className="text-[10px] sm:text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">email</span>
              <span className="text-[10px] sm:text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">text</span>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-3 sm:p-4">
            <h3 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Feedback Survey</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Rating, Comments, Would Recommend</p>
            <div className="flex flex-wrap gap-1">
              <span className="text-[10px] sm:text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">number</span>
              <span className="text-[10px] sm:text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">textarea</span>
              <span className="text-[10px] sm:text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">checkbox</span>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-3 sm:p-4">
            <h3 className="font-medium text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Event Registration</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Name, Email, Date, Attendees</p>
            <div className="flex flex-wrap gap-1">
              <span className="text-[10px] sm:text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">text</span>
              <span className="text-[10px] sm:text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">email</span>
              <span className="text-[10px] sm:text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">date</span>
              <span className="text-[10px] sm:text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">number</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
