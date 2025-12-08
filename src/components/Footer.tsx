import Link from 'next/link'

interface FooterProps {
  variant?: 'simple' | 'extended'
}

export default function Footer({ variant = 'simple' }: FooterProps) {
  if (variant === 'extended') {
    return (
      <footer className="py-12 px-6 border-t border-gray-200 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-lg font-semibold mb-4">
                fastsubmit<span className="text-indigo-600">.</span>
              </div>
              <p className="text-sm text-gray-500">
                Free online form builder for everyone
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/form-builder" className="hover:text-gray-900">Form Builder</Link></li>
                <li><Link href="/templates" className="hover:text-gray-900">Templates</Link></li>
                <li><Link href="/blog" className="hover:text-gray-900">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Compare</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/google-forms-alternative" className="hover:text-gray-900">vs Google Forms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
                <li><Link href="/docs" className="hover:text-gray-900">Documentation</Link></li>
                <li><Link href="/privacy" className="hover:text-gray-900">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-gray-900">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} FastSubmit by Hostspica. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="py-8 px-6 border-t border-gray-100 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-900 font-medium">
            fastsubmit<span className="text-indigo-600">.</span>
          </span>
          <p className="text-xs text-gray-400 mt-0.5">by Hostspica</p>
        </div>
        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/about" className="hover:text-gray-600 transition-colors">About</Link>
          <Link href="/docs" className="hover:text-gray-600 transition-colors">Docs</Link>
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
