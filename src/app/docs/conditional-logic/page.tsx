import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Zap, Eye, EyeOff, Calculator, ArrowRight, 
  CheckCircle, AlertCircle, Settings, ChevronDown 
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conditional Logic - FastSubmit Documentation',
  description: 'Create intelligent forms with conditional logic, dynamic fields, and smart behavior that adapts to user input.',
  keywords: 'conditional logic, smart forms, dynamic forms, form logic, intelligent forms, conditional fields, form builder logic, adaptive forms',
}

export default function ConditionalLogicPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/docs" className="hover:text-gray-700">Documentation</Link>
          <span>/</span>
          <span>Conditional Logic</span>
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Conditional Logic</h1>
            <p className="text-gray-600">Create intelligent forms that adapt to user responses</p>
          </div>
        </div>
      </div>

      <div className="prose prose-gray max-w-none">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is Conditional Logic?</h3>
              <p className="text-gray-700 mb-0">
                Conditional logic allows your forms to show, hide, or modify fields based on user responses. 
                Create intelligent forms that adapt in real-time, providing a personalized experience for each user.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Eye className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-gray-900">Show/Hide Fields</h3>
            </div>
            <p className="text-sm text-gray-600">
              Dynamically show or hide fields based on previous answers, creating cleaner, more relevant forms.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <h3 className="font-semibold text-gray-900">Dynamic Requirements</h3>
            </div>
            <p className="text-sm text-gray-600">
              Make fields required or optional based on user selections, ensuring you collect the right data.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <ChevronDown className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Dynamic Options</h3>
            </div>
            <p className="text-sm text-gray-600">
              Change dropdown options based on previous selections, creating cascading choice menus.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-gray-900">Calculated Fields</h3>
            </div>
            <p className="text-sm text-gray-600">
              Auto-calculate values based on other field inputs using mathematical formulas.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Rule Structure</h3>
          <p className="text-gray-700 mb-4">
            Each conditional rule follows a simple pattern:
          </p>
          <div className="bg-white border border-gray-200 rounded-lg p-4 font-mono text-sm">
            <span className="text-blue-600">When</span> [field] [condition] [value], <span className="text-green-600">then</span> [action] [target field]
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Conditions</h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Condition</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">equals</td>
                <td className="px-4 py-3 text-sm text-gray-600">Exact match</td>
                <td className="px-4 py-3 text-sm text-gray-600">Country equals "USA"</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">not_equals</td>
                <td className="px-4 py-3 text-sm text-gray-600">Does not match</td>
                <td className="px-4 py-3 text-sm text-gray-600">Age not equals "18"</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">contains</td>
                <td className="px-4 py-3 text-sm text-gray-600">Contains text</td>
                <td className="px-4 py-3 text-sm text-gray-600">Email contains "@company.com"</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">greater_than</td>
                <td className="px-4 py-3 text-sm text-gray-600">Number comparison</td>
                <td className="px-4 py-3 text-sm text-gray-600">Budget greater than 1000</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">is_empty</td>
                <td className="px-4 py-3 text-sm text-gray-600">Field is blank</td>
                <td className="px-4 py-3 text-sm text-gray-600">Phone is empty</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Actions</h3>
        
        <div className="overflow-x-auto mb-8">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Action</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">show</td>
                <td className="px-4 py-3 text-sm text-gray-600">Make field visible</td>
                <td className="px-4 py-3 text-sm text-gray-600">Show "Company" when "Business" is selected</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">hide</td>
                <td className="px-4 py-3 text-sm text-gray-600">Make field invisible</td>
                <td className="px-4 py-3 text-sm text-gray-600">Hide "Student ID" for non-students</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">require</td>
                <td className="px-4 py-3 text-sm text-gray-600">Make field mandatory</td>
                <td className="px-4 py-3 text-sm text-gray-600">Require "VAT Number" for EU customers</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">set_value</td>
                <td className="px-4 py-3 text-sm text-gray-600">Auto-fill field value</td>
                <td className="px-4 py-3 text-sm text-gray-600">Set "Priority" to "High" for urgent requests</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">set_options</td>
                <td className="px-4 py-3 text-sm text-gray-600">Change dropdown options</td>
                <td className="px-4 py-3 text-sm text-gray-600">Update "State" options based on "Country"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-World Examples</h2>

        <div className="space-y-6 mb-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              E-commerce Product Inquiry
            </h3>
            <p className="text-gray-700 mb-4">
              Show different fields based on product type selection:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div><strong>Rule 1:</strong> When "Product Type" equals "Software", show "License Type" field</div>
              <div><strong>Rule 2:</strong> When "Product Type" equals "Hardware", show "Shipping Address" field</div>
              <div><strong>Rule 3:</strong> When "License Type" equals "Enterprise", require "Company Size" field</div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Event Registration with Pricing
            </h3>
            <p className="text-gray-700 mb-4">
              Calculate ticket price based on attendee type:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div><strong>Rule 1:</strong> When "Attendee Type" equals "Student", set "Price" to "$25"</div>
              <div><strong>Rule 2:</strong> When "Attendee Type" equals "VIP", set "Price" to "$299"</div>
              <div><strong>Rule 3:</strong> When "Attendee Type" equals "Student", show "Student ID" field</div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Job Application Screening
            </h3>
            <p className="text-gray-700 mb-4">
              Show role-specific questions based on position:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div><strong>Rule 1:</strong> When "Position" equals "Developer", show "Technical Skills" field</div>
              <div><strong>Rule 2:</strong> When "Position" equals "Designer", show "Portfolio URL" field</div>
              <div><strong>Rule 3:</strong> When "Experience" greater than "5 years", show "Leadership Experience" field</div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-green-700 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Do's
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Keep logic simple and intuitive</li>
              <li>• Test all conditional paths thoroughly</li>
              <li>• Use clear field labels and descriptions</li>
              <li>• Provide visual indicators for smart fields</li>
              <li>• Start with basic rules and add complexity gradually</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-red-700 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Don'ts
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Don't create circular dependencies</li>
              <li>• Avoid overly complex nested conditions</li>
              <li>• Don't hide required fields without alternatives</li>
              <li>• Avoid confusing users with too many changes</li>
              <li>• Don't forget to test edge cases</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Zap className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Getting Started</h3>
              <p className="text-gray-700 mb-4">
                Ready to create your first smart form? Start with our pre-built smart templates or add conditional logic to any existing form.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/dashboard/forms/new/templates"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Try Smart Templates
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/dashboard/forms/new"
                  className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
                >
                  Create Custom Form
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h3 className="font-semibold text-gray-900 mb-4">Related Documentation</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/field-types" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
              <h4 className="font-medium text-gray-900 mb-1">Field Types</h4>
              <p className="text-sm text-gray-600">Learn about all available field types and their properties</p>
            </Link>
            <Link href="/docs/forms" className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
              <h4 className="font-medium text-gray-900 mb-1">Form Management</h4>
              <p className="text-sm text-gray-600">Manage your forms, view submissions, and configure settings</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}