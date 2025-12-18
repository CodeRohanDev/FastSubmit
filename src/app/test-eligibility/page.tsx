import GoogleAnalytics from '@/components/GoogleAnalytics'
import StudentEligibilityExample from '@/components/StudentEligibilityExample'

export default function TestEligibilityPage() {
  return (
    <>
    <GoogleAnalytics />
    <div className="min-h-screen bg-gray-50 py-8">
      <StudentEligibilityExample />
    </div>
    </>
  )
}