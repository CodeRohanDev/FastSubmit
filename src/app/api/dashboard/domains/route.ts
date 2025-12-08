import { NextRequest, NextResponse } from 'next/server'
import { adminDb, adminAuth } from '@/lib/firebase-admin'
import { generateVerificationToken, normalizeDomain } from '@/lib/dns-verification'

// Helper to verify ID token from cookie
async function verifySession(request: NextRequest): Promise<string | null> {
  try {
    const idToken = request.cookies.get('__session')?.value
    if (!idToken) return null
    
    const decodedToken = await adminAuth.verifyIdToken(idToken)
    return decodedToken.uid
  } catch {
    return null
  }
}

// GET /api/dashboard/domains - List all domains for logged-in user
export async function GET(request: NextRequest) {
  try {
    const userId = await verifySession(request)
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const domainsSnapshot = await adminDb
      .collection('verifiedDomains')
      .where('userId', '==', userId)
      .get()

    // Filter out soft-deleted domains
    const domains = domainsSnapshot.docs
      .filter(doc => !doc.data().deleted)
      .map(doc => {
        const data = doc.data()
        return {
          id: doc.id,
          domain: data.domain,
          verified: data.verified,
          verificationToken: data.verificationToken,
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

// POST /api/dashboard/domains - Add a new domain
export async function POST(request: NextRequest) {
  try {
    const userId = await verifySession(request)
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { domain } = body

    if (!domain || typeof domain !== 'string') {
      return NextResponse.json({ error: 'Domain is required' }, { status: 400 })
    }

    const normalizedDomain = normalizeDomain(domain)

    // Check if domain already exists for this user (excluding soft-deleted)
    const existingSnapshot = await adminDb
      .collection('verifiedDomains')
      .where('userId', '==', userId)
      .where('domain', '==', normalizedDomain)
      .limit(1)
      .get()

    const existingDoc = existingSnapshot.docs.find(doc => !doc.data().deleted)
    if (existingDoc) {
      const data = existingDoc.data()
      return NextResponse.json({
        success: true,
        domain: {
          id: existingDoc.id,
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
      userId,
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
  } catch (error: any) {
    console.error('POST /api/dashboard/domains error:', error?.message || error)
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: process.env.NODE_ENV === 'development' ? error?.message : undefined 
    }, { status: 500 })
  }
}
