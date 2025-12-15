'use client'
import { useState } from 'react'
import { 
  Search, 
  Filter, 
  Download, 
  Plus,
  MoreVertical,
  Mail,
  Ban,
  CheckCircle,
  XCircle,
  Calendar,
  User
} from 'lucide-react'

export default function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'active',
      plan: 'Pro',
      formsCount: 12,
      joinDate: '2024-01-15',
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah@company.com',
      status: 'active',
      plan: 'Free',
      formsCount: 3,
      joinDate: '2024-02-20',
      lastActive: '1 day ago'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@startup.io',
      status: 'inactive',
      plan: 'Enterprise',
      formsCount: 45,
      joinDate: '2023-11-10',
      lastActive: '1 week ago'
    },
    {
      id: 4,
      name: 'Emily Chen',
      email: 'emily@design.co',
      status: 'active',
      plan: 'Pro',
      formsCount: 8,
      joinDate: '2024-03-05',
      lastActive: '30 minutes ago'
    },
    {
      id: 5,
      name: 'David Brown',
      email: 'david@agency.com',
      status: 'suspended',
      plan: 'Free',
      formsCount: 1,
      joinDate: '2024-01-28',
      lastActive: '2 weeks ago'
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <CheckCircle size={12} /> Active
        </span>
      case 'inactive':
        return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          <XCircle size={12} /> Inactive
        </span>
      case 'suspended':
        return <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
          <Ban size={12} /> Suspended
        </span>
      default:
        return null
    }
  }

  const getPlanBadge = (plan: string) => {
    const colors = {
      'Free': 'bg-gray-100 text-gray-800',
      'Pro': 'bg-blue-100 text-blue-800',
      'Enterprise': 'bg-purple-100 text-purple-800'
    }
    return <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[plan as keyof typeof colors]}`}>
      {plan}
    </span>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Users Management</h1>
          <p className="text-gray-600">Manage and monitor user accounts</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <Plus size={20} />
          Add User
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <User size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
              <p className="text-sm text-gray-600">Total Users</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">1,089</p>
              <p className="text-sm text-gray-600">Active Users</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar size={20} className="text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">156</p>
              <p className="text-sm text-gray-600">New This Month</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Ban size={20} className="text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">23</p>
              <p className="text-sm text-gray-600">Suspended</p>
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
                placeholder="Search users..."
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
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
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

      {/* Users Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">User</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Plan</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Forms</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Join Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Last Active</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 font-medium text-sm">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {getStatusBadge(user.status)}
                  </td>
                  <td className="py-3 px-4">
                    {getPlanBadge(user.plan)}
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-medium text-gray-900">{user.formsCount}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-600">{user.joinDate}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-600">{user.lastActive}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <Mail size={16} className="text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
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
            Showing 1 to 5 of 1,247 users
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