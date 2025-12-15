import GoogleAnalytics from '@/components/GoogleAnalytics'
import SmartFormExample from '@/components/SmartFormExample'

export default function TestSmartFormPage() {
  return (
    <>
    <GoogleAnalytics />
    <div className="min-h-screen bg-gray-50 py-8">
      <SmartFormExample />
    </div>
    </>
  )
}