import { NextRequest } from 'next/server'

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

const store: RateLimitStore = {}

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  Object.keys(store).forEach(key => {
    if (store[key].resetTime < now) {
      delete store[key]
    }
  })
}, 5 * 60 * 1000)

export interface RateLimitConfig {
  maxRequests: number
  windowMs: number
}

/**
 * Simple in-memory rate limiter
 * For production, use Redis or similar
 */
export function rateLimit(request: NextRequest, config: RateLimitConfig): {
  allowed: boolean
  remaining: number
  resetTime: number
} {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
             request.headers.get('x-real-ip') || 
             'unknown'
  
  const key = `${ip}:${request.nextUrl.pathname}`
  const now = Date.now()

  if (!store[key] || store[key].resetTime < now) {
    store[key] = {
      count: 1,
      resetTime: now + config.windowMs
    }
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime: store[key].resetTime
    }
  }

  store[key].count++

  return {
    allowed: store[key].count <= config.maxRequests,
    remaining: Math.max(0, config.maxRequests - store[key].count),
    resetTime: store[key].resetTime
  }
}

/**
 * Rate limit configurations for different endpoints
 */
export const RATE_LIMITS = {
  // Form submissions - 10 per minute per IP
  SUBMIT: { maxRequests: 10, windowMs: 60 * 1000 },
  
  // API endpoints - 100 per minute per IP
  API: { maxRequests: 100, windowMs: 60 * 1000 },
  
  // Auth endpoints - 5 per minute per IP
  AUTH: { maxRequests: 5, windowMs: 60 * 1000 },
}
