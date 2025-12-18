import GoogleAnalytics from '@/components/GoogleAnalytics'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domain Verification - Secure Forms | FastSubmit',
  description: 'Secure your forms with domain verification. Restrict submissions to verified domains. Best free form builder with security features.',
  keywords: ['domain verification', 'secure forms', 'free form builder', 'form security', 'form builder free', 'online form builder'],
}

export default function DomainVerificationPage() {
  return (
    <>
    <GoogleAnalytics />
    <div className="min-w-0">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Domain Verification</h1>
      <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        Secure your forms by restricting submissions to verified domains only.
      </p>

      <div className="space-y-6 sm:space-y-8">
        <section>
          <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Why verify domains?</h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-3">
            Domain verification ensures that only forms embedded on your verified websites can submit data. 
            This prevents unauthorized usage and protects your form from spam or abuse.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 sm:p-4">
            <p className="text-[10px] sm:text-xs text-blue-900">
              <strong>Note:</strong> Once a domain is verified, you can reuse it across all your forms without re-verification.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">How to verify a domain</h2>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h3 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">Step 1: Add your domain</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                Go to your form settings and click "Add domain". Enter your domain name (e.g., <code className="bg-gray-100 px-1.5 py-0.5 rounded text-[10px] sm:text-xs">example.com</code>).
              </p>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">Step 2: Add DNS TXT record</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                After adding your domain, you'll receive a verification token. Add this as a TXT record to your domain's DNS settings:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 font-mono text-[10px] sm:text-xs space-y-2 overflow-x-auto">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-gray-500 font-sans min-w-[280px]">
                  <span>Type</span>
                  <span>Name</span>
                  <span>Value</span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 min-w-[280px]">
                  <span>TXT</span>
                  <span>example.com</span>
                  <span className="text-gray-600 break-all">fastsubmit-verify=abc123...</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">Step 3: Verify</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                After adding the DNS record (may take up to 48 hours to propagate), click "Verify" in your form settings. 
                Once verified, the domain can be used immediately.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">DNS provider guides</h2>
          <div className="space-y-2 sm:space-y-3">
            <details className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4">
              <summary className="text-xs sm:text-sm font-medium cursor-pointer">Cloudflare</summary>
              <ol className="mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-[10px] sm:text-sm text-gray-600 list-decimal list-inside">
                <li>Log in to your Cloudflare dashboard</li>
                <li>Select your domain</li>
                <li>Go to DNS → Records</li>
                <li>Click "Add record"</li>
                <li>Type: TXT, Name: @ (or your domain), Content: your verification token</li>
                <li>Click "Save"</li>
              </ol>
            </details>

            <details className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4">
              <summary className="text-xs sm:text-sm font-medium cursor-pointer">GoDaddy</summary>
              <ol className="mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-[10px] sm:text-sm text-gray-600 list-decimal list-inside">
                <li>Log in to your GoDaddy account</li>
                <li>Go to My Products → DNS</li>
                <li>Click "Add" under Records</li>
                <li>Type: TXT, Name: @ (or your domain), Value: your verification token</li>
                <li>Click "Save"</li>
              </ol>
            </details>

            <details className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4">
              <summary className="text-xs sm:text-sm font-medium cursor-pointer">Namecheap</summary>
              <ol className="mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-[10px] sm:text-sm text-gray-600 list-decimal list-inside">
                <li>Log in to your Namecheap account</li>
                <li>Go to Domain List → Manage</li>
                <li>Go to Advanced DNS</li>
                <li>Click "Add New Record"</li>
                <li>Type: TXT Record, Host: @ (or your domain), Value: your verification token</li>
                <li>Click the checkmark to save</li>
              </ol>
            </details>

            <details className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4">
              <summary className="text-xs sm:text-sm font-medium cursor-pointer">Other providers</summary>
              <p className="mt-2 sm:mt-3 text-[10px] sm:text-sm text-gray-600">
                Most DNS providers have similar processes. Look for "DNS Management", "DNS Records", or "Zone Editor" 
                in your provider's dashboard. Add a TXT record with your verification token.
              </p>
            </details>
          </div>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Troubleshooting</h2>
          <div className="space-y-2 sm:space-y-3">
            <div>
              <h3 className="text-xs sm:text-sm font-medium mb-1">Verification fails</h3>
              <ul className="text-[10px] sm:text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Wait for DNS propagation (can take up to 48 hours)</li>
                <li>Check that the TXT record value matches exactly</li>
                <li>Remove any quotes around the TXT record value</li>
                <li>Try using @ or your domain name as the record name</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm font-medium mb-1">Check DNS propagation</h3>
              <p className="text-[10px] sm:text-sm text-gray-600">
                Use online tools like <a href="https://dnschecker.org" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:underline">dnschecker.org</a> to 
                verify your TXT record is visible globally.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Using verified domains</h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
            After verification, go to your form settings and:
          </p>
          <ol className="text-xs sm:text-sm text-gray-600 space-y-1 sm:space-y-2 list-decimal list-inside">
            <li>Select the verified domains you want to allow</li>
            <li>Enable "Require domain verification for submissions"</li>
            <li>Save changes</li>
          </ol>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3">
            Now only forms embedded on your verified domains can submit data. Localhost and development domains 
            (127.0.0.1, 192.168.x.x) are automatically allowed for testing.
          </p>
        </section>
      </div>
    </div>
    </>
  )
}
