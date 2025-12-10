import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - FastSubmit Free Form Builder',
  description: 'FastSubmit privacy policy. Learn how we protect your data. Free form builder with secure data handling. Your privacy matters.',
  keywords: ['privacy policy', 'fastsubmit privacy', 'form builder privacy', 'data protection', 'secure forms'],
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar variant="simple" />

      <main className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: December 5, 2025</p>

        <div className="prose prose-sm max-w-none space-y-6 text-gray-600">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Introduction</h2>
            <p>
              FastSubmit by Hostspica (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our form backend service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect</h2>
            
            <h3 className="text-base font-medium text-gray-900 mb-2 mt-4">Account Information</h3>
            <p>When you create an account, we collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email address</li>
              <li>Name (if provided)</li>
              <li>Authentication credentials</li>
            </ul>

            <h3 className="text-base font-medium text-gray-900 mb-2 mt-4">Form Submissions</h3>
            <p>When end-users submit forms through your FastSubmit endpoints, we collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Form field data as configured by you</li>
              <li>IP address of the submitter</li>
              <li>User agent (browser information)</li>
              <li>Timestamp of submission</li>
            </ul>

            <h3 className="text-base font-medium text-gray-900 mb-2 mt-4">Usage Data</h3>
            <p>We automatically collect certain information when you use our service:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Log data (access times, pages viewed)</li>
              <li>Device information</li>
              <li>API usage statistics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and maintain our service</li>
              <li>Process and store form submissions</li>
              <li>Send you service-related notifications</li>
              <li>Respond to your requests and support needs</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Improve our service and develop new features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Data Storage and Security</h2>
            <p>
              Your data is stored securely using Firebase/Firestore infrastructure with industry-standard encryption. 
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, 
              alteration, disclosure, or destruction.
            </p>
            <p className="mt-3">
              However, no method of transmission over the Internet or electronic storage is 100% secure. 
              While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Data Retention</h2>
            <p>We retain your information for as long as your account is active or as needed to provide you services. You may delete:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Individual form submissions at any time</li>
              <li>Entire forms and their submissions</li>
              <li>Your account and all associated data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Data Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>With your consent:</strong> When you explicitly authorize us to share information</li>
              <li><strong>Service providers:</strong> With third-party vendors who help us operate our service (e.g., Firebase/Google Cloud)</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and data</li>
              <li>Export your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Cookies and Tracking</h2>
            <p>
              We use essential cookies to maintain your session and provide core functionality. 
              We do not use third-party advertising or tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Children&apos;s Privacy</h2>
            <p>
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information 
              from children under 13. If you believe we have collected information from a child under 13, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have different data protection laws. By using our service, you consent to such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy 
              on this page and updating the &quot;Last updated&quot; date. Continued use of the service after changes constitutes 
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">
              <strong>Hostspica</strong><br />
              Email: privacy@hostspica.com<br />
              Website: <a href="https://hostspica.com" className="text-indigo-600 hover:underline">hostspica.com</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
