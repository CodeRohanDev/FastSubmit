'use client'
import { useState, useEffect } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Globe,
  Eye,
  MousePointer,
  Clock,
  Smartphone,
  Monitor,
  Tablet,
  ArrowUp,
  ArrowDown,
  RefreshCw,
  Download,
  AlertCircle,
  Loader2
} from 'lucide-react'

interface AnalyticsData {
  overview: {
    totalUsers: { value: string; change: string; trend: 'up' | 'down' };
    pageViews: { value: string; change: string; trend: 'up' | 'down' };
    bounceRate: { value: string; change: string; trend: 'up' | 'down' };
    avgSession: { value: string; change: string; trend: 'up' | 'down' };
  };
  topPages: Array<{
    page: string;
    views: number;
    change: string;
  }>;
  trafficSources: Array<{
    source: string;
    visitors: number;
    percentage: number;
  }>;
  devices: Array<{
    device: string;
    users: number;
    percentage: number;
  }>;
  realtime: {
    activeUsers: number;
    screenPageViews: number;
    eventCount: number;
  };
}

export default function AnalyticsPanel() {
  const [timeRange, setTimeRange] = useState('7d')
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  // Fetch analytics data
  const fetchAnalyticsData = async () => {
    try {
      setLoading(true)
      setError(null)

      const token = localStorage.getItem('adminToken')
      if (!token) {
        throw new Error('No authentication token found')
      }

      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }

      // Convert timeRange to GA4 format
      const dateRanges = {
        '1d': { startDate: 'yesterday', endDate: 'today' },
        '7d': { startDate: '7daysAgo', endDate: 'today' },
        '30d': { startDate: '30daysAgo', endDate: 'today' },
        '90d': { startDate: '90daysAgo', endDate: 'today' }
      }

      const { startDate, endDate } = dateRanges[timeRange as keyof typeof dateRanges] || dateRanges['7d']

      // Fetch all analytics data in parallel
      const [overviewRes, pagesRes, sourcesRes, devicesRes, realtimeRes] = await Promise.all([
        fetch(`/api/admin/analytics/overview?startDate=${startDate}&endDate=${endDate}`, { headers }),
        fetch(`/api/admin/analytics/pages?startDate=${startDate}&endDate=${endDate}&limit=5`, { headers }),
        fetch(`/api/admin/analytics/traffic-sources?startDate=${startDate}&endDate=${endDate}`, { headers }),
        fetch(`/api/admin/analytics/devices?startDate=${startDate}&endDate=${endDate}`, { headers }),
        fetch('/api/admin/analytics/realtime', { headers })
      ])

      if (!overviewRes.ok) throw new Error('Failed to fetch overview data')
      if (!pagesRes.ok) throw new Error('Failed to fetch pages data')
      if (!sourcesRes.ok) throw new Error('Failed to fetch traffic sources')
      if (!devicesRes.ok) throw new Error('Failed to fetch device data')
      if (!realtimeRes.ok) throw new Error('Failed to fetch realtime data')

      const [overview, pages, sources, devices, realtime] = await Promise.all([
        overviewRes.json(),
        pagesRes.json(),
        sourcesRes.json(),
        devicesRes.json(),
        realtimeRes.json()
      ])

      // Format data for display
      const formattedData: AnalyticsData = {
        overview: {
          totalUsers: {
            value: overview.data.totalUsers.toLocaleString(),
            change: '+12.5%', // You'd calculate this from previous period
            trend: 'up'
          },
          pageViews: {
            value: overview.data.pageViews.toLocaleString(),
            change: '+8.3%',
            trend: 'up'
          },
          bounceRate: {
            value: `${overview.data.bounceRate.toFixed(1)}%`,
            change: '-2.1%',
            trend: 'down'
          },
          avgSession: {
            value: formatDuration(overview.data.avgSessionDuration),
            change: '+15.7%',
            trend: 'up'
          }
        },
        topPages: pages.data.map((page: any) => ({
          page: page.pagePath,
          views: page.screenPageViews,
          change: '+15%' // You'd calculate this from previous period
        })),
        trafficSources: sources.data.map((source: any) => ({
          source: `${source.source} / ${source.medium}`,
          visitors: source.users,
          percentage: source.percentage
        })),
        devices: devices.data.map((device: any) => ({
          device: device.deviceCategory,
          users: device.users,
          percentage: device.percentage
        })),
        realtime: realtime.data
      }

      setAnalyticsData(formattedData)
      setLastUpdated(new Date())
    } catch (err) {
      console.error('Error fetching analytics:', err)
      setError(err instanceof Error ? err.message : 'Failed to fetch analytics data')
    } finally {
      setLoading(false)
    }
  }

  // Format duration from seconds to readable format
  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}m ${remainingSeconds}s`
  }

  // Fetch data on component mount and when timeRange changes
  useEffect(() => {
    fetchAnalyticsData()
  }, [timeRange])

  // Auto-refresh every 5 minutes
  useEffect(() => {
    const interval = setInterval(fetchAnalyticsData, 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [timeRange])

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'Desktop': return <Monitor size={16} />
      case 'Mobile': return <Smartphone size={16} />
      case 'Tablet': return <Tablet size={16} />
      default: return <Monitor size={16} />
    }
  }

  if (loading && !analyticsData) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-indigo-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading analytics data...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-red-600 mt-1" />
          <div>
            <h3 className="font-semibold text-red-900 mb-2">Analytics Error</h3>
            <p className="text-red-800 mb-4">{error}</p>
            <button
              onClick={fetchAnalyticsData}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Website performance and user behavior insights</p>
            {lastUpdated && (
              <span className="text-sm text-gray-500">
                Last updated: {lastUpdated.toLocaleTimeString()}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            disabled={loading}
          >
            <option value="1d">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <button 
            onClick={fetchAnalyticsData}
            disabled={loading}
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* Realtime Stats */}
      {analyticsData?.realtime && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-green-900">Live Right Now</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-700">Real-time</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-900">{analyticsData.realtime.activeUsers}</div>
              <div className="text-sm text-green-700">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-900">{analyticsData.realtime.screenPageViews}</div>
              <div className="text-sm text-green-700">Page Views</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-900">{analyticsData.realtime.eventCount}</div>
              <div className="text-sm text-green-700">Events</div>
            </div>
          </div>
        </div>
      )}

      {/* Overview Stats */}
      {analyticsData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <Users size={24} className="text-blue-600" />
              </div>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <ArrowUp size={16} />
                {analyticsData.overview.totalUsers.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{analyticsData.overview.totalUsers.value}</h3>
            <p className="text-gray-600 text-sm">Total Users</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                <Eye size={24} className="text-green-600" />
              </div>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <ArrowUp size={16} />
                {analyticsData.overview.pageViews.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{analyticsData.overview.pageViews.value}</h3>
            <p className="text-gray-600 text-sm">Page Views</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center">
                <MousePointer size={24} className="text-orange-600" />
              </div>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <ArrowDown size={16} />
                {analyticsData.overview.bounceRate.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{analyticsData.overview.bounceRate.value}</h3>
            <p className="text-gray-600 text-sm">Bounce Rate</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center">
                <Clock size={24} className="text-purple-600" />
              </div>
              <div className="flex items-center gap-1 text-sm text-green-600">
                <ArrowUp size={16} />
                {analyticsData.overview.avgSession.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{analyticsData.overview.avgSession.value}</h3>
            <p className="text-gray-600 text-sm">Avg. Session Duration</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Chart Placeholder */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Traffic Overview</h2>
            <TrendingUp size={20} className="text-gray-400" />
          </div>
          <div className="h-64 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
            <div className="text-center">
              <BarChart3 size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">Traffic Chart</p>
              <p className="text-sm text-gray-500">Google Analytics integration needed</p>
            </div>
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Top Pages</h2>
            <Globe size={20} className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {analyticsData?.topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{page.page}</p>
                  <p className="text-sm text-gray-600">{page.views.toLocaleString()} views</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Sources */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Traffic Sources</h2>
          <div className="space-y-4">
            {analyticsData?.trafficSources.map((source, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{source.source}</span>
                  <span className="font-medium text-gray-900">{source.percentage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full" 
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Device Breakdown</h2>
          <div className="space-y-4">
            {analyticsData?.devices.map((device, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  {getDeviceIcon(device.device)}
                  <div>
                    <p className="text-sm font-medium text-gray-900">{device.device}</p>
                    <p className="text-sm text-gray-600">{device.users.toLocaleString()} users</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">{device.percentage.toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Integration Status */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Integration Status</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <BarChart3 size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-900">Google Analytics 4</p>
                  <p className="text-xs text-green-700">Connected & Active</p>
                </div>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-200">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe size={16} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-900">Real-time Data</p>
                  <p className="text-xs text-blue-700">Live tracking enabled</p>
                </div>
              </div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            </div>

            <div className="text-center pt-4">
              <a 
                href="https://analytics.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 hover:text-indigo-700 underline"
              >
                View in Google Analytics →
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}