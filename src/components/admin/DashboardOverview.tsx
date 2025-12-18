'use client'
import { 
  Users, 
  FileText, 
  TrendingUp, 
  Globe,
  Activity,
  ArrowUp,
  ArrowDown,
  Eye,
  MousePointer,
  Clock,
  BarChart3
} from 'lucide-react'

export default function DashboardOverview() {
  const stats = [
    {
      title: 'Total Users',
      value: '1,247',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Forms',
      value: '89',
      change: '+5%',
      trend: 'up',
      icon: FileText,
      color: 'green'
    },
    {
      title: 'Monthly Visits',
      value: '24.5K',
      change: '+18%',
      trend: 'up',
      icon: Eye,
      color: 'purple'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-2%',
      trend: 'down',
      icon: TrendingUp,
      color: 'orange'
    }
  ]

  const recentActivity = [
    { action: 'New user registration', user: 'john@example.com', time: '2 minutes ago' },
    { action: 'Form submitted', form: 'Contact Form #123', time: '5 minutes ago' },
    { action: 'User upgraded plan', user: 'sarah@company.com', time: '12 minutes ago' },
    { action: 'New form created', form: 'Survey Form #456', time: '18 minutes ago' },
    { action: 'API key generated', user: 'dev@startup.io', time: '25 minutes ago' },
  ]

  const topPages = [
    { page: '/form-builder', views: '2,341', change: '+15%' },
    { page: '/google-forms-alternative', views: '1,892', change: '+8%' },
    { page: '/templates', views: '1,456', change: '+22%' },
    { page: '/fast-submit', views: '987', change: '+45%' },
    { page: '/contact-form-builder', views: '743', change: '+12%' },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg bg-${stat.color}-50 flex items-center justify-center`}>
                  <Icon size={24} className={`text-${stat.color}-600`} />
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <Activity size={20} className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.user || activity.form}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Top Pages</h2>
            <Globe size={20} className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{page.page}</p>
                  <p className="text-sm text-gray-600">{page.views} views</p>
                </div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <ArrowUp size={14} />
                  {page.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Chart Placeholder */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Traffic Overview</h2>
          <div className="flex items-center gap-2">
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>
        
        {/* Placeholder for chart */}
        <div className="h-64 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
          <div className="text-center">
            <BarChart3 size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Analytics Chart</p>
            <p className="text-sm text-gray-500">Google Analytics integration coming soon</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="bg-indigo-600 text-white p-4 rounded-xl hover:bg-indigo-700 transition-colors">
          <FileText size={24} className="mb-2" />
          <p className="font-medium">Create New Form</p>
        </button>
        <button className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors">
          <Users size={24} className="mb-2" />
          <p className="font-medium">Manage Users</p>
        </button>
        <button className="bg-purple-600 text-white p-4 rounded-xl hover:bg-purple-700 transition-colors">
          <TrendingUp size={24} className="mb-2" />
          <p className="font-medium">View Analytics</p>
        </button>
      </div>
    </div>
  )
}