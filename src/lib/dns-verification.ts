import dns from 'dns'
import { promisify } from 'util'

const resolveTxt = promisify(dns.resolveTxt)

/**
 * Generate a unique verification token for a domain
 */
export function generateVerificationToken(): string {
  return `fastsubmit-verify-${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`
}

/**
 * Verify domain ownership via DNS TXT record
 * Looks for: fastsubmit-verify=TOKEN
 */
export async function verifyDomainViaDNS(domain: string, expectedToken: string): Promise<{
  verified: boolean
  error?: string
  foundRecords?: string[]
}> {
  try {
    // Clean domain (remove protocol, www, trailing slash)
    const cleanDomain = domain
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/\/$/, '')
      .split('/')[0]

    // Query TXT records
    const records = await resolveTxt(cleanDomain)
    
    // Flatten records (DNS TXT records can be arrays)
    const flatRecords = records.map(record => 
      Array.isArray(record) ? record.join('') : record
    )

    // Look for our verification record
    // The record format is: fastsubmit-verify=TOKEN
    // Where TOKEN is like: fastsubmit-verify-xxxxx
    const verificationRecord = flatRecords.find(record => 
      record.includes('fastsubmit-verify=')
    )

    console.log('Looking for token:', expectedToken)
    console.log('Found records:', flatRecords)
    console.log('Verification record:', verificationRecord)

    if (!verificationRecord) {
      return {
        verified: false,
        error: 'Verification TXT record not found. Add a TXT record with value: fastsubmit-verify=' + expectedToken,
        foundRecords: flatRecords
      }
    }

    // Extract token from record (everything after fastsubmit-verify=)
    const tokenMatch = verificationRecord.match(/fastsubmit-verify=(.+)/)
    const foundToken = tokenMatch ? tokenMatch[1].trim() : null

    console.log('Found token:', foundToken)
    console.log('Expected token:', expectedToken)

    if (!foundToken) {
      return {
        verified: false,
        error: 'Could not parse verification token from DNS record',
        foundRecords: flatRecords
      }
    }

    // Compare tokens (case-insensitive, trimmed)
    if (foundToken.toLowerCase() === expectedToken.toLowerCase()) {
      return {
        verified: true,
        foundRecords: flatRecords
      }
    }

    return {
      verified: false,
      error: 'The verification token in your DNS does not match. Please check that you added the correct TXT record.',
      foundRecords: flatRecords
    }
  } catch (error: any) {
    // DNS errors
    if (error.code === 'ENOTFOUND') {
      return {
        verified: false,
        error: 'Domain not found'
      }
    }
    if (error.code === 'ENODATA') {
      return {
        verified: false,
        error: 'No TXT records found for this domain'
      }
    }
    return {
      verified: false,
      error: error.message || 'DNS verification failed'
    }
  }
}

/**
 * Normalize domain for storage and comparison
 */
export function normalizeDomain(domain: string): string {
  return domain
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/$/, '')
    .split('/')[0]
    .split(':')[0] // Remove port
}

/**
 * Check if origin matches verified domain
 */
export function isOriginAllowed(origin: string | null, verifiedDomains: string[]): boolean {
  if (!origin) return false
  
  try {
    const url = new URL(origin)
    const originDomain = normalizeDomain(url.hostname)
    
    // Check exact match
    if (verifiedDomains.includes(originDomain)) return true
    
    // Check with www prefix
    if (verifiedDomains.includes(`www.${originDomain}`)) return true
    
    // Check without www prefix
    const withoutWww = originDomain.replace(/^www\./, '')
    if (verifiedDomains.includes(withoutWww)) return true
    
    return false
  } catch {
    return false
  }
}
