'use client'
import { useState } from 'react'
import { 
  Search, 
  Filter, 
  Download, 
  Plus,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Copy,
  ExternalLink,
  Calendar,
  FileText,
  Users,
  TrendingUp
} from 'lucide-react'

export default function FormsManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const forms = [
    {
      id: 1,
      title: 'Contact Form - Homepage',
      owner: 'john@example.com',
      status: 'active',
      submissions: 234,
      views: 1456,
      conversionRate: '16.1%',
      created: '2024-01-15',
      lastSubmission: '2 hours ago'
    },
    {
      id: 2,
      title: 'Customer Feedback Survey',
      owner: 'sarah@company.com',
      status: 'active',
      submissions: 89,
      views: 567,
      conversionRate: '15.7%',
      created: '2024-02-20',
      lastSubmission: '1 day ago'
    },
    {
      id: 3,
      title: 'Job Application Form',
      owner: 'mike@startup.io',
      status: 'draft',
      submissions: 0,
      views: 12,
      conversionRate: '0%',
      created: '2024-03-10',
      lastSubmission: 'Never'
    },
    {
      id: 4,
      title: 'Newsletter Signup',
      owner: 'emily@design.co',
      status: 'active',
      submissions: 456,
      views: 2341,
      conversionRate: '19.5%',
      created: '2024-01-05',
      lastSubmission: '30 minutes ago'
    },
    {
      id: 5,
      title: 'Event Registration',
      owner: 'david@agency.com',
      status: 'paused',
      submissions: 67,
      views: 234,
      conversionRate: '28.6%',
      created: '2024-02-28',
      lastSubmission: '1 week ago'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Active
        </span>
      case 'draft':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          Draft
        </span>
      case 'paused':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          Paused
        </span>
      case 'archived':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
          Archived
        </span>
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Forms Management</h1>
          <p className="text-gray-600">Monitor and manage all forms across the platform</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <Plus size={20} />
          Create Form
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">1,456</p>
              <p className="text-sm text-gray-600">Total Forms</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">89.2K</p>
              <p className="text-sm text-gray-600">Total Submissions</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Eye size={20} className="text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">234.5K</p>
              <p className="text-sm text-gray-600">Total Views</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Users size={20} className="text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">18.4%</p>
              <p className="text-sm text-gray-600">Avg Conversion</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search forms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent w-full sm:w-64"
              />
            </div>
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="paused">Paused</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter size={16} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Forms Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Form</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Submissions</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Views</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Conversion</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Created</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {forms.map((form) => (
                <tr key={form.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{form.title}</p>
                      <p className="text-sm text-gray-600">{form.owner}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {getStatusBadge(form.status)}
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-medium text-gray-900">{form.submissions}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-600">{form.views}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`font-medium ${
                      parseFloat(form.conversionRate) > 15 ? 'text-green-600' : 'text-gray-900'
                    }`}>
                      {form.conversionRate}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-600">{form.created}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="View Form">
                        <Eye size={16} className="text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Edit Form">
                        <Edit size={16} className="text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Copy Link">
                        <Copy size={16} className="text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="More Options">
                        <MoreVertical size={16} className="text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing 1 to 5 of 1,456 forms
          </p>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white transition-colors">
              Previous
            </button>
            <button className="px-3 py-1 bg-indigo-600 text-white rounded">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white transition-colors">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white transition-colors">3</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-white transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}