import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'
import { verifyUserApiKey } from '@/lib/user-api-key'
import { rateLimit, RATE_LIMITS } from '@/lib/rate-limiter'
import { generateVerificationToken, normalizeDomain } from '@/lib/dns-verification'
import { CORS_CONFIG, createCorsResponse } from '@/lib/cors'

// GET /api/v1/domains - List all verified domains for user
export async function GET(request: NextRequest) {
  try {
    const rateLimitResult = rateLimit(request, RATE_LIMITS.API)
    if (!rateLimitResult.allowed) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const apiKey = request.headers.get('x-api-key') || request.nextUrl.searchParams.get('apiKey')
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 })
    }

    const userId = await verifyUserApiKey(apiKey)
    if (!userId) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 403 })
    }

    const domainsSnapshot = await adminDb
      .collection('verifiedDomains')
      .where('userId', '==', userId)
      .get()

    const domains = domainsSnapshot.docs.map(doc => {
      const data = doc.data()
      return {
        id: doc.id,
        domain: data.domain,
        verified: data.verified,
        verifiedAt: data.verifiedAt?.toDate()?.toISOString(),
        createdAt: data.createdAt?.toDate()?.toISOString(),
      }
    })

    return NextResponse.json({
      success: true,
      count: domains.length,
      domains,
    })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST /api/v1/domains - Add a new domain for verification
export async function POST(request: NextRequest) {
  try {
    const rateLimitResult = rateLimit(request, RATE_LIMITS.API)
    if (!rateLimitResult.allowed) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
    }

    const apiKey = request.headers.get('x-api-key')
    if (!apiKey) {
      return NextResponse.json({ error: 'API key required' }, { status: 401 })
    }

    const userId = await verifyUserApiKey(apiKey)
    if (!userId) {
      return NextResponse.json({ error: 'Invalid API key' }, { status: 403 })
    }

    const body = await request.json()
    const { domain } = body

    if (!domain || typeof domain !== 'string') {
      return NextResponse.json({ error: 'Domain is required' }, { status: 400 })
    }

    const normalizedDomain = normalizeDomain(domain)

    // Check if domain already exists for this user
    const existingSnapshot = await adminDb
      .collection('verifiedDomains')
      .where('userId', '==', userId)
      .where('domain', '==', normalizedDomain)
      .limit(1)
      .get()

    if (!existingSnapshot.empty) {
      const existing = existingSnapshot.docs[0]
      const data = existing.data()
      return NextResponse.json({
        success: true,
        domain: {
          id: existing.id,
          domain: data.domain,
          verified: data.verified,
          verificationToken: data.verificationToken,
          message: 'Domain already added'
        }
      })
    }

    // Create new domain verification record
    const verificationToken = generateVerificationToken()
    const docRef = await adminDb.collection('verifiedDomains').add({
      domain: normalizedDomain,
      userId: userId,
      verificationToken,
      verified: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      domain: {
        id: docRef.id,
        domain: normalizedDomain,
        verified: false,
        verificationToken,
        dnsRecord: {
          type: 'TXT',
          name: normalizedDomain,
          value: `fastsubmit-verify=${verificationToken}`
        }
      }
    }, { status: 201 })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function OPTIONS() {
  return createCorsResponse(CORS_CONFIG.API)
}
