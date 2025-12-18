'use client'
import { useState } from 'react'
import { 
  Shield, 
  Lock, 
  Key,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  Clock,
  Globe,
  User,
  Activity,
  Ban,
  RefreshCw,
  Download
} from 'lucide-react'

export default function SecurityPanel() {
  const [activeTab, setActiveTab] = useState('overview')

  const securityAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Multiple failed login attempts',
      description: '5 failed attempts from IP 192.168.1.100 in the last hour',
      time: '10 minutes ago',
      severity: 'medium'
    },
    {
      id: 2,
      type: 'info',
      title: 'New admin login',
      description: 'Admin user logged in from new device (Chrome on Windows)',
      time: '2 hours ago',
      severity: 'low'
    },
    {
      id: 3,
      type: 'success',
      title: 'Security scan completed',
      description: 'Weekly security scan completed successfully with no issues found',
      time: '1 day ago',
      severity: 'low'
    }
  ]

  const recentActivity = [
    { action: 'Admin login', user: 'admin@fastsubmit.cloud', ip: '203.0.113.1', time: '2 hours ago', status: 'success' },
    { action: 'Failed login attempt', user: 'unknown', ip: '192.168.1.100', time: '10 minutes ago', status: 'failed' },
    { action: 'API key generated', user: 'john@example.com', ip: '198.51.100.1', time: '3 hours ago', status: 'success' },
    { action: 'Password reset', user: 'sarah@company.com', ip: '203.0.113.5', time: '5 hours ago', status: 'success' },
    { action: 'Failed login attempt', user: 'admin', ip: '192.168.1.100', time: '1 hour ago', status: 'failed' },
  ]

  const blockedIPs = [
    { ip: '192.168.1.100', reason: 'Multiple failed login attempts', blocked: '2 hours ago', attempts: 15 },
    { ip: '10.0.0.50', reason: 'Suspicious API requests', blocked: '1 day ago', attempts: 8 },
    { ip: '172.16.0.25', reason: 'Brute force attack', blocked: '3 days ago', attempts: 25 },
  ]

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle size={20} className="text-yellow-600" />
      case 'error': return <XCircle size={20} className="text-red-600" />
      case 'success': return <CheckCircle size={20} className="text-green-600" />
      default: return <AlertTriangle size={20} className="text-blue-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          Success
        </span>
      case 'failed':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
          Failed
        </span>
      default:
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          Unknown
        </span>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Security Center</h1>
          <p className="text-gray-600">Monitor and manage security settings</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <RefreshCw size={16} />
            Refresh
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download size={16} />
            Export Logs
          </button>
        </div>
      </div>

      {/* Security Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Shield size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">Secure</p>
              <p className="text-sm text-gray-600">Overall Status</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <AlertTriangle size={20} className="text-yellow-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">3</p>
              <p className="text-sm text-gray-600">Active Alerts</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Ban size={20} className="text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">3</p>
              <p className="text-sm text-gray-600">Blocked IPs</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Activity size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">156</p>
              <p className="text-sm text-gray-600">Today's Events</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security Alerts */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Security Alerts</h2>
            <AlertTriangle size={20} className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {securityAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                {getAlertIcon(alert.type)}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                  <p className="text-sm text-gray-600">{alert.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
                <button className="text-xs text-indigo-600 hover:text-indigo-800">
                  Resolve
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <Activity size={20} className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.user} • {activity.ip}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                {getStatusBadge(activity.status)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blocked IPs */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Blocked IP Addresses</h2>
          <Ban size={20} className="text-gray-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-900">IP Address</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Reason</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Attempts</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Blocked</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {blockedIPs.map((ip, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <span className="font-mono text-sm text-gray-900">{ip.ip}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-600">{ip.reason}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-medium text-red-600">{ip.attempts}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-600">{ip.blocked}</span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-sm text-indigo-600 hover:text-indigo-800">
                      Unblock
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Security Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Authentication</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Require 2FA for admin accounts</span>
                <input type="checkbox" className="rounded" defaultChecked />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Force password reset every 90 days</span>
                <input type="checkbox" className="rounded" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Lock account after failed attempts</span>
                <input type="checkbox" className="rounded" defaultChecked />
              </label>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">Access Control</h3>
            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">IP whitelist for admin panel</span>
                <input type="checkbox" className="rounded" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Auto-block suspicious IPs</span>
                <input type="checkbox" className="rounded" defaultChecked />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Log all admin actions</span>
                <input type="checkbox" className="rounded" defaultChecked />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}