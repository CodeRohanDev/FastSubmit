'use client'
import { useState } from 'react'
import { 
  BarChart3, 
  Users, 
  FileText, 
  Settings, 
  Shield, 
  Globe, 
  TrendingUp,
  Activity,
  Database,
  Bell,
  Search,
  Filter,
  Download,
  RefreshCw
} from 'lucide-react'
import AdminSidebar from '@/components/admin/AdminSidebar'
import DashboardOverview from '@/components/admin/DashboardOverview'
import UsersManagement from '@/components/admin/UsersManagement'
import FormsManagement from '@/components/admin/FormsManagement'
import AnalyticsPanel from '@/components/admin/AnalyticsPanel'
import SystemSettings from '@/components/admin/SystemSettings'
import SecurityPanel from '@/components/admin/SecurityPanel'

type AdminView = 'overview' | 'users' | 'forms' | 'analytics' | 'settings' | 'security'

interface AdminDashboardProps {
  onLogout?: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeView, setActiveView] = useState<AdminView>('overview')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderContent = () => {
    switch (activeView) {
      case 'overview':
        return <DashboardOverview />
      case 'users':
        return <UsersManagement />
      case 'forms':
        return <FormsManagement />
      case 'analytics':
        return <AnalyticsPanel />
      case 'settings':
        return <SystemSettings />
      case 'security':
        return <SecurityPanel />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <AdminSidebar 
        activeView={activeView}
        setActiveView={setActiveView}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Activity size={20} className="text-gray-600" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-500">FastSubmit Control Panel</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <RefreshCw size={20} className="text-gray-600" />
              </button>
              
              <div className="relative">
                <button 
                  onClick={onLogout}
                  className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition-colors"
                  title="Logout"
                >
                  <span className="text-white text-sm font-medium">A</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}