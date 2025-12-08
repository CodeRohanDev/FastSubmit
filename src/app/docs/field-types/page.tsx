import { Type, Mail, AlignLeft, Hash, Calendar, List, CheckSquare } from 'lucide-react'

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
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Field Types</h1>
      <p className="text-gray-600 mb-8">
        FastSubmit supports 7 different field types to build any form you need. Each field type has specific validation and formatting.
      </p>

      {/* Overview */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-8">
        <p className="text-sm text-indigo-800">
          <strong>Unlimited Forms:</strong> Create as many forms as you need with any combination of field types. 
          There&apos;s no limit on the number of forms or fields per form.
        </p>
      </div>

      {/* Field Types Grid */}
      <div className="grid gap-6 mb-10">
        {fieldTypes.map((field) => (
          <div key={field.type} className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="flex items-center gap-4 p-4 bg-gray-50 border-b border-gray-200">
              <div className={`w-10 h-10 rounded-lg ${colorClasses[field.color]} flex items-center justify-center`}>
                <field.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{field.label}</h3>
                <code className="text-sm text-gray-500">type: &quot;{field.type}&quot;</code>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">{field.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">HTML Input</h4>
                  <pre className="bg-gray-100 p-3 rounded-lg text-xs overflow-x-auto">
                    {field.htmlInput}
                  </pre>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Validation</h4>
                  <p className="text-sm text-gray-600">{field.validation}</p>
                  <h4 className="text-sm font-medium text-gray-700 mt-3 mb-1">Example Value</h4>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded">{field.example}</code>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Field Configuration */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Field Configuration</h2>
        <p className="text-gray-600 mb-4">
          Each field in your form can be configured with the following properties:
        </p>
        
        <div className="border border-gray-200 rounded-xl overflow-hidden">
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
      </section>

      {/* Example Form Configuration */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Example Form Configuration</h2>
        <p className="text-gray-600 mb-4">
          Here&apos;s an example of a complete contact form with multiple field types:
        </p>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto text-sm">
{`{
  "name": "Contact Form",
  "fields": [
    {
      "id": "name",
      "label": "Full Name",
      "type": "text",
      "required": true,
      "placeholder": "John Doe"
    },
    {
      "id": "email",
      "label": "Email Address",
      "type": "email",
      "required": true,
      "placeholder": "john@example.com"
    },
    {
      "id": "phone",
      "label": "Phone Number",
      "type": "text",
      "required": false,
      "placeholder": "+1 (555) 123-4567"
    },
    {
      "id": "subject",
      "label": "Subject",
      "type": "select",
      "required": true,
      "options": ["General Inquiry", "Support", "Sales", "Partnership"]
    },
    {
      "id": "priority",
      "label": "Priority",
      "type": "select",
      "required": false,
      "options": ["Low", "Medium", "High", "Urgent"]
    },
    {
      "id": "message",
      "label": "Message",
      "type": "textarea",
      "required": true,
      "placeholder": "How can we help you?"
    },
    {
      "id": "newsletter",
      "label": "Subscribe to newsletter",
      "type": "checkbox",
      "required": false
    }
  ]
}`}
        </pre>
      </section>

      {/* Common Form Templates */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Common Form Templates</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-medium text-gray-900 mb-2">Contact Form</h3>
            <p className="text-sm text-gray-600 mb-2">Name, Email, Subject, Message</p>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">text</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">email</span>
              <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded">select</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">textarea</span>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-medium text-gray-900 mb-2">Newsletter Signup</h3>
            <p className="text-sm text-gray-600 mb-2">Email, Name (optional)</p>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">email</span>
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">text</span>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-medium text-gray-900 mb-2">Feedback Survey</h3>
            <p className="text-sm text-gray-600 mb-2">Rating, Comments, Would Recommend</p>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">number</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">textarea</span>
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">checkbox</span>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-medium text-gray-900 mb-2">Event Registration</h3>
            <p className="text-sm text-gray-600 mb-2">Name, Email, Date, Attendees</p>
            <div className="flex flex-wrap gap-1">
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">text</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">email</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">date</span>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">number</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
