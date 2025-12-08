# Domain Verification Implementation Guide

## Overview

DNS-based domain verification has been successfully implemented for FastSubmit. This feature allows users to restrict form submissions to verified domains only, preventing unauthorized usage and spam.

## Key Features

✅ **DNS TXT Record Verification** - Verify domain ownership via DNS TXT records
✅ **Reusable Domains** - Once verified, domains can be used across all user's forms
✅ **Shared Domain Pool** - All verified domains stored in `verifiedDomains` collection
✅ **Form-Level Control** - Each form can select which verified domains to allow
✅ **Development-Friendly** - Localhost and local IPs automatically allowed for testing
✅ **Real-time Verification** - Verify domains instantly via DNS lookup
✅ **User-Friendly UI** - Complete domain management interface in form settings

## Architecture

### Database Structure

**Collection: `verifiedDomains`**
```typescript
{
  id: string
  domain: string              // Normalized domain (e.g., "example.com")
  userId: string              // Owner of the domain
  verificationToken: string   // Unique token for DNS verification
  verified: boolean           // Verification status
  verifiedAt?: Date          // When domain was verified
  createdAt: Date
  updatedAt: Date
}
```

**Updated Form Schema**
```typescript
{
  // ... existing fields
  allowedDomains?: string[]              // Array of verified domain names
  requireDomainVerification?: boolean    // Enable/disable verification
}
```

### API Endpoints

#### 1. GET `/api/v1/domains`
List all verified domains for authenticated user.

**Headers:**
- `x-api-key`: User's API key

**Response:**
```json
{
  "success": true,
  "count": 2,
  "domains": [
    {
      "id": "domain123",
      "domain": "example.com",
      "verified": true,
      "verifiedAt": "2024-01-01T00:00:00Z",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### 2. POST `/api/v1/domains`
Add a new domain for verification.

**Headers:**
- `x-api-key`: User's API key

**Body:**
```json
{
  "domain": "example.com"
}
```

**Response:**
```json
{
  "success": true,
  "domain": {
    "id": "domain123",
    "domain": "example.com",
    "verified": false,
    "verificationToken": "fastsubmit-verify-abc123xyz",
    "dnsRecord": {
      "type": "TXT",
      "name": "example.com",
      "value": "fastsubmit-verify=fastsubmit-verify-abc123xyz"
    }
  }
}
```

#### 3. POST `/api/v1/domains/{domainId}/verify`
Verify domain ownership via DNS lookup.

**Headers:**
- `x-api-key`: User's API key

**Response (Success):**
```json
{
  "success": true,
  "verified": true,
  "message": "Domain verified successfully"
}
```

**Response (Failed):**
```json
{
  "success": false,
  "verified": false,
  "error": "Verification TXT record not found",
  "foundRecords": ["other-txt-record"]
}
```

#### 4. PUT `/api/v1/forms/{formId}/domains`
Assign verified domains to a form.

**Headers:**
- `x-api-key`: User's API key

**Body:**
```json
{
  "allowedDomains": ["example.com", "subdomain.example.com"],
  "requireDomainVerification": true
}
```

### Submit Endpoint Protection

The `/api/submit/{formId}` endpoint now checks domain verification:

1. **Rate limiting** (10 requests/minute per IP)
2. **Domain verification check** (if enabled):
   - Extract `Origin` or `Referer` header
   - Allow localhost/development IPs automatically
   - Check if origin matches any allowed verified domain
   - Return 403 if domain not authorized
3. **Form validation** (required fields, etc.)
4. **Save submission**

## DNS Verification Process

### How It Works

1. **User adds domain** → System generates unique token
2. **User adds DNS TXT record** → `fastsubmit-verify=TOKEN`
3. **User clicks verify** → System performs DNS lookup
4. **DNS lookup** → Checks for TXT record with matching token
5. **Verification success** → Domain marked as verified
6. **Domain reusable** → Can be assigned to any form

### DNS Verification Function

```typescript
// src/lib/dns-verification.ts
export async function verifyDomainViaDNS(
  domain: string, 
  expectedToken: string
): Promise<{
  verified: boolean
  error?: string
  foundRecords?: string[]
}>
```

**Features:**
- Cleans domain (removes protocol, www, trailing slash)
- Queries DNS TXT records
- Looks for `fastsubmit-verify=TOKEN` pattern
- Handles DNS errors (ENOTFOUND, ENODATA)
- Returns detailed error messages

### Origin Matching

```typescript
// src/lib/dns-verification.ts
export function isOriginAllowed(
  origin: string | null, 
  verifiedDomains: string[]
): boolean
```

**Matching logic:**
- Exact match: `example.com` matches `example.com`
- With www: `example.com` matches `www.example.com`
- Without www: `www.example.com` matches `example.com`
- Protocol agnostic: `https://example.com` matches `example.com`

## Frontend UI

### Form Settings Page

**Location:** `/dashboard/forms/{formId}/settings`

**Features:**
1. **Domain Verification Section**
   - Toggle to enable/disable verification requirement
   - List of all user's verified domains
   - Checkbox to select domains for this form
   - Add new domain button
   - Verify button for pending domains

2. **Domain Status Indicators**
   - ✅ Green badge: Verified
   - ⏱️ Yellow badge: Pending verification
   - Shows verification token for pending domains

3. **Add Domain Flow**
   - Input field for domain name
   - Automatic normalization
   - Shows DNS instructions
   - Link to documentation

4. **Verification Flow**
   - Click "Verify" button
   - Shows loading state
   - Success/error message
   - Auto-refreshes domain list

### Documentation Page

**Location:** `/docs/domain-verification`

**Content:**
- Why verify domains
- Step-by-step verification guide
- DNS provider-specific instructions (Cloudflare, GoDaddy, Namecheap)
- Troubleshooting tips
- DNS propagation checker links

## Firestore Configuration

### Security Rules

```javascript
// firestore.rules
match /verifiedDomains/{domainId} {
  allow read, write: if request.auth != null && 
                       request.auth.uid == resource.data.userId;
  allow create: if request.auth != null && 
                  request.auth.uid == request.resource.data.userId;
}
```

### Indexes

```json
// firestore.indexes.json
{
  "collectionGroup": "verifiedDomains",
  "fields": [
    { "fieldPath": "userId", "order": "ASCENDING" },
    { "fieldPath": "verified", "order": "ASCENDING" }
  ]
},
{
  "collectionGroup": "verifiedDomains",
  "fields": [
    { "fieldPath": "userId", "order": "ASCENDING" },
    { "fieldPath": "domain", "order": "ASCENDING" }
  ]
}
```

## Testing

### Local Development

Localhost and development IPs are automatically allowed:
- `localhost`
- `127.0.0.1`
- `192.168.x.x`

This allows testing without DNS verification.

### Production Testing

1. Add a test domain (e.g., `test.example.com`)
2. Add DNS TXT record with verification token
3. Wait for DNS propagation (up to 48 hours)
4. Click "Verify" in form settings
5. Enable "Require domain verification"
6. Test form submission from verified domain
7. Test form submission from unverified domain (should fail with 403)

### DNS Propagation Check

Use online tools:
- https://dnschecker.org
- https://www.whatsmydns.net

## Error Handling

### Common Errors

1. **"Domain not found"**
   - DNS lookup failed
   - Domain doesn't exist
   - Typo in domain name

2. **"No TXT records found"**
   - DNS record not added yet
   - DNS not propagated
   - Wrong record type (should be TXT)

3. **"Verification token mismatch"**
   - Wrong token in DNS record
   - Multiple verification attempts with different tokens

4. **"Domain not authorized"** (403 on submit)
   - Form requires verification but domain not verified
   - Origin header doesn't match any allowed domain
   - Domain not selected in form settings

## Best Practices

### For Users

1. **Add domains early** - DNS propagation can take time
2. **Use root domain** - Verify `example.com` not `www.example.com`
3. **Check DNS propagation** - Use online tools before verifying
4. **Test thoroughly** - Test submissions after enabling verification
5. **Keep tokens safe** - Don't share verification tokens

### For Developers

1. **Cache DNS lookups** - Avoid repeated DNS queries
2. **Handle DNS errors gracefully** - Provide clear error messages
3. **Allow development domains** - Don't block localhost
4. **Normalize domains** - Remove protocol, www, trailing slash
5. **Log verification attempts** - Help users troubleshoot

## Future Enhancements

Potential improvements:
- [ ] Automatic DNS verification retry
- [ ] Email notifications on verification success
- [ ] Subdomain wildcard support (*.example.com)
- [ ] Multiple verification methods (HTML meta tag, file upload)
- [ ] Domain verification history/logs
- [ ] Bulk domain import
- [ ] Domain expiration/re-verification
- [ ] Analytics per domain

## Files Modified

### Backend
- `src/lib/dns-verification.ts` - DNS verification utilities
- `src/types/index.ts` - Added VerifiedDomain interface
- `src/app/api/v1/domains/route.ts` - Domain management API
- `src/app/api/v1/domains/[domainId]/verify/route.ts` - Verification API
- `src/app/api/v1/forms/[formId]/domains/route.ts` - Form domain assignment
- `src/app/api/submit/[formId]/route.ts` - Added domain verification check

### Frontend
- `src/app/dashboard/forms/[formId]/settings/page.tsx` - Domain management UI
- `src/app/docs/domain-verification/page.tsx` - Documentation page
- `src/app/docs/layout.tsx` - Added docs navigation link

### Configuration
- `firestore.rules` - Added verifiedDomains security rules
- `firestore.indexes.json` - Added verifiedDomains indexes

## Summary

DNS domain verification is now fully implemented with:
- ✅ Complete API endpoints for domain management
- ✅ DNS TXT record verification
- ✅ Reusable verified domains across forms
- ✅ Form-level domain restrictions
- ✅ User-friendly UI in form settings
- ✅ Comprehensive documentation
- ✅ Firestore security rules and indexes
- ✅ Development-friendly (localhost allowed)
- ✅ Production-ready error handling

Users can now secure their forms by restricting submissions to verified domains only!
