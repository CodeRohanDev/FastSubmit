'use client'
import { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { collection, query, where, limit, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import Link from 'next/link'
import { ExternalLink, Shield, CheckCircle, Clock, Plus, Trash2, X, Copy, Check, Globe, AlertCircle } from 'lucide-react'
import { VerifiedDomain } from '@/types'

export default function SettingsPage() {
  const { user } = useAuth()
  const [verifiedDomains, setVerifiedDomains] = useState<VerifiedDomain[]>([])
  const [loadingDomains, setLoadingDomains] = useState(true)
  const [apiKey, setApiKey] = useState<string | null>(null)
  const [loadingApiKey, setLoadingApiKey] = useState(true)
  const [regeneratingApiKey, setRegeneratingApiKey] = useState(false)
  const [showAddDomain, setShowAddDomain] = useState(false)
  const [newDomain, setNewDomain] = useState('')
  const [addingDomain, setAddingDomain] = useState(false)
  const [verifyingDomain, setVerifyingDomain] = useState<string | null>(null)
  const [deletingDomain, setDeletingDomain] = useState<string | null>(null)
  const [message, setMessage] = useState({ type: '', text: '' })
  const [copiedToken, setCopiedToken] = useState<string | null>(null)

  const copyToClipboard = async (text: string, tokenId: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedToken(tokenId)
    setTimeout(() => setCopiedToken(null), 2000)
  }

  const fetchDomains = async () => {
    try {
      const res = await fetch('/api/dashboard/domains')
      
      if (res.ok) {
        const data = await res.json()
        setVerifiedDomains(data.domains || [])
      }
    } catch (error) {
      console.error('Error fetching domains:', error)
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (!user) return
      
      try {
        // Fetch user API key
        const apiKeyRes = await fetch('/api/dashboard/api-key')
        if (apiKeyRes.ok) {
          const data = await apiKeyRes.json()
          setApiKey(data.apiKey)
        }
        setLoadingApiKey(false)
        
        // Fetch domains using session-based API
        await fetchDomains()
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoadingApiKey(false)
      }
      
      setLoadingDomains(false)
    }
    
    fetchData()
  }, [user])

  const handleRegenerateApiKey = async () => {
    if (!confirm('Regenerate API key? Your old key will stop working immediately.')) return
    
    setRegeneratingApiKey(true)
    try {
      const res = await fetch('/api/dashboard/api-key', { method: 'POST' })
      if (res.ok) {
        const data = await res.json()
        setApiKey(data.apiKey)
        setMessage({ type: 'success', text: 'API key regenerated successfully!' })
      } else {
        setMessage({ type: 'error', text: 'Failed to regenerate API key' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to regenerate API key' })
    }
    setRegeneratingApiKey(false)
  }

  const handleAddDomain = async () => {
    if (!newDomain.trim()) return
    setAddingDomain(true)
    setMessage({ type: '', text: '' })
    
    try {
      const res = await fetch('/api/dashboard/domains', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: newDomain.trim() })
      })
      
      if (res.ok) {
        setMessage({ type: 'success', text: 'Domain added. Please verify via DNS.' })
        setNewDomain('')
        setShowAddDomain(false)
        await fetchDomains()
      } else {
        const error = await res.json()
        setMessage({ type: 'error', text: error.error || 'Failed to add domain' })
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to add domain' })
    }
    
    setAddingDomain(false)
  }

  const handleVerifyDomain = async (domainId: string) => {
    setVerifyingDomain(domainId)
    setMessage({ type: '', text: '' })
    
    try {
      const res = await fetch(`/api/dashboard/domains/${domainId}/verify`, {
        method: 'POST'
      })
      
      const data = await res.json()
      if (data.verified) {
        setMessage({ type: 'success', text: 'Domain verified successfully!' })
        await fetchDomains()
      } else {
        setMessage({ type: 'error', text: data.error || 'Verification failed. Check DNS records.' })
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Verification failed' })
    }
    
    setVerifyingDomain(null)
  }

  const handleDeleteDomain = async (domainId: string) => {
    if (!confirm('Delete this domain? Forms using it will no longer be restricted to this domain.')) return
    setDeletingDomain(domainId)
    
    try {
      const res = await fetch(`/api/dashboard/domains/${domainId}`, {
        method: 'DELETE'
      })
      
      if (res.ok) {
        setMessage({ type: 'success', text: 'Domain deleted' })
        await fetchDomains()
      } else {
        setMessage({ type: 'error', text: 'Failed to delete domain' })
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Failed to delete domain' })
    }
    
    setDeletingDomain(null)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">Settings</h1>
        <p className="text-gray-500 text-sm mt-1">Manage your account and domain settings</p>
      </div>

      {/* Account Section */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <div className="w-1 h-4 bg-gray-900 rounded-full"></div>
          Account Information
        </h2>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="divide-y divide-gray-100">
            <div className="flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
              <div>
                <p className="text-sm font-medium text-gray-900">Email Address</p>
                <p className="text-xs text-gray-500 mt-0.5">Your account email</p>
              </div>
              <span className="text-sm text-gray-600 font-mono">{user?.email}</span>
            </div>
            <div className="flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
              <div>
                <p className="text-sm font-medium text-gray-900">Display Name</p>
                <p className="text-xs text-gray-500 mt-0.5">How others see you</p>
              </div>
              <span className="text-sm text-gray-600">{user?.displayName || 'Not set'}</span>
            </div>
            <div className="flex justify-between items-center p-4 hover:bg-gray-50 transition-colors">
              <div>
                <p className="text-sm font-medium text-gray-900">Plan</p>
                <p className="text-xs text-gray-500 mt-0.5">Current subscription</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-lg">
                <CheckCircle size={12} />
                Unlimited
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Domains Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
            <div className="w-1 h-4 bg-gray-900 rounded-full"></div>
            Verified Domains
          </h2>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Shield size={14} />
            <span>{verifiedDomains.filter(d => d.verified).length} verified</span>
          </div>
        </div>

        {message.text && (
          <div className={`px-4 py-3 rounded-lg mb-4 flex items-center justify-between text-sm ${
            message.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
          }`}>
            <span>{message.text}</span>
            <button onClick={() => setMessage({ type: '', text: '' })}><X size={16} /></button>
          </div>
        )}
        
        {loadingDomains ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-300 border-t-gray-900"></div>
          </div>
        ) : (
          <>
            {verifiedDomains.length > 0 && (
              <div className="space-y-4 mb-4">
                {verifiedDomains.map((domain) => (
                  <div key={domain.id} className={`rounded-xl border ${domain.verified ? 'bg-white border-green-200' : 'bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200'}`}>
                    {/* Domain Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          domain.verified ? 'bg-green-100' : 'bg-amber-100'
                        }`}>
                          {domain.verified ? (
                            <CheckCircle size={20} className="text-green-600" />
                          ) : (
                            <Clock size={20} className="text-amber-600" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Globe size={14} className="text-gray-400" />
                            <p className="font-semibold text-gray-900">{domain.domain}</p>
                          </div>
                          <p className={`text-xs mt-0.5 ${domain.verified ? 'text-green-600' : 'text-amber-600'}`}>
                            {domain.verified 
                              ? `✓ Verified on ${new Date(domain.verifiedAt!).toLocaleDateString()}`
                              : '⏳ Pending verification'
                            }
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteDomain(domain.id)}
                        disabled={deletingDomain === domain.id}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all disabled:opacity-50"
                        title="Delete domain"
                      >
                        {deletingDomain === domain.id ? (
                          <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                        ) : (
                          <Trash2 size={16} />
                        )}
                      </button>
                    </div>

                    {/* Verification Instructions (only for unverified) */}
                    {!domain.verified && (
                      <div className="p-4">
                        <div className="flex items-start gap-2 mb-4">
                          <AlertCircle size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-gray-600">
                            Add a DNS TXT record to verify ownership of this domain.
                          </p>
                        </div>

                        {/* DNS Record Card */}
                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                          <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">DNS TXT Record</p>
                          </div>
                          
                          <div className="p-4 space-y-3">
                            {/* Record Type */}
                            <div className="flex items-center">
                              <span className="text-xs text-gray-500 w-16 flex-shrink-0">Type</span>
                              <span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono font-medium text-gray-700">TXT</span>
                            </div>
                            
                            {/* Host/Name */}
                            <div className="flex items-center">
                              <span className="text-xs text-gray-500 w-16 flex-shrink-0">Host</span>
                              <span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono font-medium text-gray-700">@</span>
                              <span className="text-[10px] text-gray-400 ml-2">(or leave blank)</span>
                            </div>
                            
                            {/* Value with Copy */}
                            <div className="flex items-start">
                              <span className="text-xs text-gray-500 w-16 flex-shrink-0 pt-2">Value</span>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 p-2 bg-indigo-50 border border-indigo-200 rounded-lg">
                                  <code className="text-xs font-mono text-indigo-700 break-all flex-1">
                                    fastsubmit-verify={domain.verificationToken}
                                  </code>
                                  <button
                                    onClick={() => copyToClipboard(`fastsubmit-verify=${domain.verificationToken}`, domain.id)}
                                    className="p-1.5 hover:bg-indigo-100 rounded transition-colors flex-shrink-0"
                                    title="Copy to clipboard"
                                  >
                                    {copiedToken === domain.id ? (
                                      <Check size={14} className="text-green-600" />
                                    ) : (
                                      <Copy size={14} className="text-indigo-500" />
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Steps */}
                        <div className="mt-4 p-3 bg-white/60 rounded-lg border border-amber-100">
                          <p className="text-xs font-medium text-gray-700 mb-2">How to verify:</p>
                          <ol className="text-xs text-gray-600 space-y-1.5 list-decimal list-inside">
                            <li>Log in to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)</li>
                            <li>Go to DNS settings for <strong>{domain.domain}</strong></li>
                            <li>Add a new TXT record with the value above</li>
                            <li>Wait a few minutes for DNS propagation</li>
                            <li>Click the "Verify Domain" button below</li>
                          </ol>
                        </div>

                        {/* Verify Button */}
                        <button
                          onClick={() => handleVerifyDomain(domain.id)}
                          disabled={verifyingDomain === domain.id}
                          className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
                        >
                          {verifyingDomain === domain.id ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Checking DNS...
                            </>
                          ) : (
                            <>
                              <CheckCircle size={16} />
                              Verify Domain
                            </>
                          )}
                        </button>

                        <p className="text-[10px] text-gray-400 text-center mt-2">
                          DNS changes can take up to 24-48 hours to propagate globally
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {!showAddDomain ? (
              <button
                onClick={() => setShowAddDomain(true)}
                className="w-full py-3 border border-dashed border-gray-300 rounded-xl text-sm text-gray-500 hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <Plus size={16} /> Add domain
              </button>
            ) : (
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <label className="block text-xs text-gray-600 mb-2">Domain name</label>
                <input
                  type="text"
                  value={newDomain}
                  onChange={(e) => setNewDomain(e.target.value)}
                  placeholder="example.com"
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm mb-3"
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleAddDomain}
                    disabled={addingDomain || !newDomain.trim()}
                    className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors disabled:opacity-50"
                  >
                    {addingDomain ? 'Adding...' : 'Add domain'}
                  </button>
                  <button
                    onClick={() => { setShowAddDomain(false); setNewDomain('') }}
                    className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:bg-white transition-colors"
                  >
                    Cancel
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  After adding, you'll need to add a DNS TXT record to verify ownership.{' '}
                  <Link href="/docs/domain-verification" target="_blank" className="text-gray-900 hover:underline inline-flex items-center gap-1">
                    Learn more <ExternalLink size={10} />
                  </Link>
                </p>
              </div>
            )}

            {verifiedDomains.length === 0 && !showAddDomain && (
              <p className="text-xs text-gray-500 mt-3 text-center">
                Add domains to restrict form submissions to your authorized websites.
              </p>
            )}
          </>
        )}
      </div>

      {/* Developer Section */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <div className="w-1 h-4 bg-gray-900 rounded-full"></div>
          Developer
        </h2>
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 mb-1">API Key</p>
                <p className="text-xs text-gray-500 mb-3">Use this key for all API requests. Keep it secure!</p>
                {loadingApiKey ? (
                  <div className="h-8 bg-gray-100 rounded animate-pulse"></div>
                ) : (
                  <code className="text-xs font-mono text-indigo-700 bg-indigo-50 px-3 py-2 rounded break-all block border border-indigo-200">
                    {apiKey || 'Loading...'}
                  </code>
                )}
              </div>
              <button
                onClick={() => {
                  if (apiKey) {
                    navigator.clipboard.writeText(apiKey)
                    setMessage({ type: 'success', text: 'API key copied!' })
                    setTimeout(() => setMessage({ type: '', text: '' }), 2000)
                  }
                }}
                disabled={!apiKey}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0 disabled:opacity-50"
                title="Copy API Key"
              >
                <Copy size={16} className="text-gray-400" />
              </button>
            </div>
            <button
              onClick={handleRegenerateApiKey}
              disabled={regeneratingApiKey || !apiKey}
              className="text-xs text-red-600 hover:text-red-700 font-medium disabled:opacity-50"
            >
              {regeneratingApiKey ? 'Regenerating...' : 'Regenerate API Key'}
            </button>
          </div>
          <div className="p-4 bg-gray-50">
            <p className="text-xs text-gray-600 mb-2">
              <strong>Usage:</strong> Include this key in the <code className="bg-white px-1 py-0.5 rounded text-[10px]">x-api-key</code> header for all API requests.
            </p>
            <code className="text-[10px] text-gray-500 block">
              curl -H "x-api-key: {apiKey || 'YOUR_API_KEY'}" https://yourapp.com/api/v1/forms
            </code>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <div className="w-1 h-4 bg-gray-900 rounded-full"></div>
          Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Link
            href="/docs"
            className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <div>
              <p className="text-sm font-medium text-gray-900 group-hover:text-gray-700">API Documentation</p>
              <p className="text-xs text-gray-500 mt-0.5">Learn how to integrate</p>
            </div>
            <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" />
          </Link>
          <Link
            href="/docs/domain-verification"
            className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <div>
              <p className="text-sm font-medium text-gray-900 group-hover:text-gray-700">Domain Verification</p>
              <p className="text-xs text-gray-500 mt-0.5">Setup guide</p>
            </div>
            <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  )
}
