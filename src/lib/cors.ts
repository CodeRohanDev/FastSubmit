import { NextResponse } from 'next/server'

/**
 * CORS configuration for different endpoint types
 */
export const CORS_CONFIG = {
  // Public submit endpoint - allow all origins (forms can be embedded anywhere)
  SUBMIT: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400', // 24 hours
  },
  
  // API endpoints - more restrictive, require API key
  API: {
    'Access-Control-Allow-Origin': '*', // Allow all but require API key
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-API-Key, Authorization',
    'Access-Control-Max-Age': '86400',
  },
}

/**
 * Create CORS response for OPTIONS preflight
 */
export function createCorsResponse(config: Record<string, string>) {
  return new NextResponse(null, {
    status: 204,
    headers: config,
  })
}

/**
 * Add CORS headers to existing response
 */
export function addCorsHeaders(response: NextResponse, config: Record<string, string>) {
  Object.entries(config).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  return response
}
