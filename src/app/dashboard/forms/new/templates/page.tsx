'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { formTemplates, templateCategories } from '@/lib/form-templates'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import EmailVerificationGate from '@/components/EmailVerificationGate'

export default function FormTemplatesPage() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTemplates = selectedCategory === 'All'
    ? formTemplates
    : formTemplates.filter(t => t.category === selectedCategory)

  const handleSelectTemplate = (templateId: string) => {
    router.push(`/dashboard/forms/new?template=${templateId}`)
  }

  const handleStartFromScratch = () => {
    router.push('/dashboard/forms/new')
  }

  return (
    <EmailVerificationGate>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/dashboard/forms" className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Choose a template</h1>
            <p className="text-gray-500 text-sm mt-1">Start with a pre-built form or create from scratch</p>
          </div>
        </div>

        {/* Start from Scratch Card */}
        <button
          onClick={handleStartFromScratch}
          className="w-full mb-8 p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all text-left group"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                <Sparkles className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Start from scratch</h3>
                <p className="text-sm text-gray-500">Build a custom form with your own fields</p>
              </div>
            </div>
            <ArrowRight className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" size={20} />
          </div>
        </button>

        {/* Category Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {templateCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleSelectTemplate(template.id)}
              className="p-6 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-md transition-all text-left group bg-white"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{template.icon}</div>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {template.category}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                {template.name}
              </h3>
              
              <p className="text-sm text-gray-500 mb-4">
                {template.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>{template.fields.length} fields</span>
                <ArrowRight className="text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" size={16} />
              </div>
            </button>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No templates found in this category</p>
          </div>
        )}
      </div>
    </EmailVerificationGate>
  )
}
