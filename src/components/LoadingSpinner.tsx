export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-900 border-t-transparent mx-auto mb-4"></div>
        <p className="text-sm text-gray-400">Loading...</p>
      </div>
    </div>
  )
}
