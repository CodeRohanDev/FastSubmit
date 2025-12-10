import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service - FastSubmit Free Form Builder',
  description: 'FastSubmit terms of service. Free form builder terms and conditions. Unlimited forms, submissions, and API access.',
  keywords: ['terms of service', 'fastsubmit terms', 'form builder terms', 'free form builder'],
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar variant="simple" />

      <main className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: December 5, 2025</p>

        <div className="prose prose-sm max-w-none space-y-6 text-gray-600">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Agreement to Terms</h2>
            <p>
              By accessing or using FastSubmit by Hostspica (&quot;Service&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), 
              you agree to be bound by these Terms of Service. If you disagree with any part of these terms, 
              you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Description of Service</h2>
            <p>
              FastSubmit is a form backend service that allows you to collect form submissions from your websites 
              without building your own backend infrastructure. We provide:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Form creation and management</li>
              <li>Submission storage and retrieval</li>
              <li>REST API access</li>
              <li>Dashboard for viewing submissions</li>
              <li>Spam protection features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Account Registration</h2>
            <p>To use our Service, you must:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Be at least 13 years old</li>
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Acceptable Use</h2>
            <p>You agree NOT to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violate any laws or regulations</li>
              <li>Collect sensitive personal information without proper consent</li>
              <li>Send spam or unsolicited communications</li>
              <li>Distribute malware or harmful code</li>
              <li>Infringe on intellectual property rights</li>
              <li>Harass, abuse, or harm others</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Use the Service for any illegal or fraudulent activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Service Features</h2>
            
            <p>FastSubmit is completely free with unlimited usage. You get:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Unlimited forms</li>
              <li>Unlimited submissions</li>
              <li>Unlimited API requests</li>
              <li>7 field types</li>
              <li>Dashboard access</li>
              <li>REST API access</li>
              <li>CSV export</li>
              <li>Domain verification</li>
              <li>Spam protection</li>
            </ul>

            <h3 className="text-base font-medium text-gray-900 mb-2 mt-4">Fair Use Policy</h3>
            <p>
              While we offer unlimited usage, we implement rate limiting to prevent abuse and ensure service quality 
              for all users. Excessive or abusive usage may be throttled or blocked. We reserve the right to suspend 
              accounts that violate our fair use policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Data and Content</h2>
            
            <h3 className="text-base font-medium text-gray-900 mb-2 mt-4">Your Content</h3>
            <p>
              You retain all rights to the data submitted through your forms. You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ensuring you have the right to collect the data</li>
              <li>Complying with applicable privacy laws (GDPR, CCPA, etc.)</li>
              <li>Obtaining necessary consents from form submitters</li>
              <li>The accuracy and legality of your content</li>
            </ul>

            <h3 className="text-base font-medium text-gray-900 mb-2 mt-4">Our Rights</h3>
            <p>
              You grant us a limited license to store, process, and display your content solely to provide the Service. 
              We will not use your content for any other purpose without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">API Usage</h2>
            <p>When using our API, you must:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Keep your API keys secure and confidential</li>
              <li>Not share API keys publicly or in client-side code</li>
              <li>Respect rate limits and usage quotas</li>
              <li>Not attempt to reverse engineer or abuse the API</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Intellectual Property</h2>
            <p>
              The Service, including its design, code, features, and content (excluding your data), is owned by Hostspica 
              and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, 
              distribute, or create derivative works without our permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Service Availability</h2>
            <p>
              We strive to provide reliable service but do not guarantee uninterrupted access. The Service is provided 
              &quot;as is&quot; without warranties of any kind. We may:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Modify or discontinue features at any time</li>
              <li>Perform maintenance that may cause temporary downtime</li>
              <li>Suspend accounts that violate these terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice, if you breach these Terms. 
              You may terminate your account at any time through the dashboard. Upon termination:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your access to the Service will cease</li>
              <li>Your data may be deleted after a grace period</li>
              <li>You remain responsible for any outstanding obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Hostspica shall not be liable for any indirect, incidental, 
              special, consequential, or punitive damages, including loss of profits, data, or other intangible losses, 
              resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your use or inability to use the Service</li>
              <li>Unauthorized access to your data</li>
              <li>Service interruptions or errors</li>
              <li>Third-party conduct or content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Hostspica from any claims, damages, losses, liabilities, and expenses 
              arising from your use of the Service, violation of these Terms, or infringement of any rights of another party.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or the Service shall be resolved through binding arbitration, 
              except where prohibited by law. You waive the right to participate in class action lawsuits.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material changes via email 
              or through the Service. Continued use after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws, without regard to 
              conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h2>
            <p>For questions about these Terms, please contact us at:</p>
            <p className="mt-2">
              <strong>Hostspica</strong><br />
              Email: legal@hostspica.com<br />
              Website: <a href="https://hostspica.com" className="text-indigo-600 hover:underline">hostspica.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full effect.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
