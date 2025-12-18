import Link from 'next/link'

interface FooterProps {
  variant?: 'simple' | 'extended'
}

export default function Footer({ variant = 'simple' }: FooterProps) {
  if (variant === 'extended') {
    return (
      <footer className="py-16 px-6 border-t border-gray-200 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-6 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="text-xl font-semibold mb-4">
                fastsubmit<span className="text-indigo-600">.</span>
              </div>
              <p className="text-sm text-gray-500 mb-4 max-w-xs">
                Create beautiful forms for websites, social media, and online sharing. Free forever.
              </p>
              <div className="flex gap-3">
                {['Websites', 'Social', 'API'].map((tag) => (
                  <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Use Cases</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/use-cases/website-embed" className="hover:text-gray-900">Website Embeds</Link></li>
                <li><Link href="/use-cases/social-media" className="hover:text-gray-900">Social Media</Link></li>
                <li><Link href="/use-cases/developer-api" className="hover:text-gray-900">Developer API</Link></li>
                <li><Link href="/use-cases/online-forms" className="hover:text-gray-900">Online Forms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Tools</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/form-builder" className="hover:text-gray-900">Form Builder</Link></li>
                <li><Link href="/fast-submit" className="hover:text-gray-900">Fast Submit</Link></li>
                <li><Link href="/bulk-form-submission" className="hover:text-gray-900">Bulk Submission</Link></li>
                <li><Link href="/no-code-form-builder" className="hover:text-gray-900">No Code Builder</Link></li>
                <li><Link href="/online-form-generator" className="hover:text-gray-900">Form Generator</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-sm">Alternatives</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/google-forms-alternative" className="hover:text-gray-900">vs Google Forms</Link></li>
                <li><Link href="/contact-form-builder" className="hover:text-gray-900">Contact Forms</Link></li>
                <li><Link href="/survey-maker" className="hover:text-gray-900">Survey Maker</Link></li>
                <li><Link href="/quiz-maker" className="hover:text-gray-900">Quiz Maker</Link></li>
                <li><Link href="/templates" className="hover:text-gray-900">Templates</Link></li>
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
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-sm text-gray-900 font-medium">
            fastsubmit<span className="text-indigo-600">.</span>
          </span>
          <p className="text-xs text-gray-400 mt-0.5">by Hostspica</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <Link href="/about" className="hover:text-gray-600 transition-colors">About</Link>
          <Link href="/docs" className="hover:text-gray-600 transition-colors">Docs</Link>
          <Link href="/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  )
}
