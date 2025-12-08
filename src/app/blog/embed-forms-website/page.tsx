import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code, Globe, Zap, Check } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'How to Embed Forms on Your Website: Complete Guide | FastSubmit',
  description: 'Learn how to embed forms on WordPress, Shopify, Webflow, Wix, and any HTML website. Step-by-step guide with code examples.',
  keywords: ['embed form', 'website form', 'wordpress form', 'shopify form', 'html form embed'],
}

export default function EmbedFormsWebsitePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar variant="simple" />

      <article className="max-w-3xl mx-auto px-6 pt-24 pb-16">
        <div className="mb-8">
          <Link href="/blog" className="text-sm text-indigo-600 hover:text-indigo-700 mb-4 inline-block">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Website</span>
            <span className="text-sm text-gray-500">8 min read</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            How to Embed Forms on Your Website: Complete Guide
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about embedding forms on WordPress, Shopify, Webflow, and any HTML website.
          </p>
          <div className="flex items-center gap-2 mt-6 text-sm text-gray-500">
            <span>December 8, 2024</span>
            <span>•</span>
            <span>by FastSubmit Team</span>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <p className="text-lg text-gray-700 mb-0">
              Embedding forms on your website is one of the most effective ways to collect leads, feedback, and customer information. 
              This guide will show you exactly how to do it on any platform.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Why Embed Forms on Your Website?</h2>

          <p>
            Embedded forms offer several advantages over standalone form pages:
          </p>

          <ul className="space-y-2">
            <li><strong>Better User Experience:</strong> Users stay on your website</li>
            <li><strong>Higher Conversion Rates:</strong> No redirects or external pages</li>
            <li><strong>Seamless Design:</strong> Forms match your website's look and feel</li>
            <li><strong>Faster Loading:</strong> No page reloads or navigation</li>
            <li><strong>SEO Benefits:</strong> Keep users on your domain</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Method 1: Simple Embed Code (Recommended)</h2>

          <p>
            The easiest way to embed a form is using a simple JavaScript snippet. This works on any website:
          </p>

          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30 flex items-center justify-between">
              <span>HTML</span>
              <span>Copy and paste this code</span>
            </div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`<!-- Add this where you want the form to appear -->
<div id="fastsubmit-form"></div>

<!-- Add this before closing </body> tag -->
<script 
  src="https://fastsubmit.hostspica.com/embed.js"
  data-form-id="your-form-id"
  data-theme="light">
</script>`}
              </code>
            </pre>
          </div>

          <div className="bg-green-50 rounded-xl p-6 my-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              Benefits of This Method:
            </h4>
            <ul className="space-y-2 mb-0">
              <li>✅ Works on any website or platform</li>
              <li>✅ Loads asynchronously (doesn't slow down your site)</li>
              <li>✅ Automatically responsive</li>
              <li>✅ Easy to customize with data attributes</li>
              <li>✅ No iframe needed</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Platform-Specific Instructions</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">WordPress</h3>

          <p>
            WordPress makes it easy to embed forms. You have two options:
          </p>

          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h4 className="font-semibold text-gray-900 mb-3">Option 1: Using the Block Editor (Gutenberg)</h4>
            <ol className="space-y-2 mb-0">
              <li>1. Edit the page or post where you want the form</li>
              <li>2. Click the <strong>+</strong> button to add a new block</li>
              <li>3. Search for "Custom HTML" block</li>
              <li>4. Paste your FastSubmit embed code</li>
              <li>5. Click "Update" or "Publish"</li>
            </ol>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h4 className="font-semibold text-gray-900 mb-3">Option 2: Using the Classic Editor</h4>
            <ol className="space-y-2 mb-0">
              <li>1. Switch to the "Text" tab (not Visual)</li>
              <li>2. Paste your embed code where you want the form</li>
              <li>3. Switch back to "Visual" to see the form</li>
              <li>4. Save your changes</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Shopify</h3>

          <p>
            Embedding forms on Shopify is straightforward:
          </p>

          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h4 className="font-semibold text-gray-900 mb-3">Steps for Shopify:</h4>
            <ol className="space-y-2 mb-0">
              <li>1. Go to <strong>Online Store → Pages</strong></li>
              <li>2. Select the page where you want the form</li>
              <li>3. Click "Show HTML" button</li>
              <li>4. Paste your embed code</li>
              <li>5. Click "Save"</li>
            </ol>
          </div>

          <p className="text-sm text-gray-600 italic">
            💡 Tip: For Shopify themes, you can also add forms to your theme.liquid file for site-wide forms.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Webflow</h3>

          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h4 className="font-semibold text-gray-900 mb-3">Steps for Webflow:</h4>
            <ol className="space-y-2 mb-0">
              <li>1. Open your Webflow project</li>
              <li>2. Drag an <strong>Embed</strong> element onto your page</li>
              <li>3. Paste your FastSubmit embed code</li>
              <li>4. Adjust the embed element's size if needed</li>
              <li>5. Publish your site</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Wix</h3>

          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h4 className="font-semibold text-gray-900 mb-3">Steps for Wix:</h4>
            <ol className="space-y-2 mb-0">
              <li>1. Click <strong>Add</strong> on the left panel</li>
              <li>2. Select <strong>Embed Code</strong></li>
              <li>3. Choose <strong>Custom Embeds</strong></li>
              <li>4. Paste your embed code</li>
              <li>5. Adjust size and position</li>
              <li>6. Click "Update" to publish</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Squarespace</h3>

          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h4 className="font-semibold text-gray-900 mb-3">Steps for Squarespace:</h4>
            <ol className="space-y-2 mb-0">
              <li>1. Edit the page where you want the form</li>
              <li>2. Click an insert point and select <strong>Code</strong></li>
              <li>3. Paste your embed code</li>
              <li>4. Click "Apply"</li>
              <li>5. Save and publish your page</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Plain HTML Website</h3>

          <p>
            For custom HTML websites, simply paste the embed code in your HTML file:
          </p>

          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">index.html</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>Contact Us</h1>
  
  <!-- Your form appears here -->
  <div id="fastsubmit-form"></div>
  
  <!-- Embed script -->
  <script 
    src="https://fastsubmit.hostspica.com/embed.js"
    data-form-id="your-form-id">
  </script>
</body>
</html>`}
              </code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Customization Options</h2>

          <p>
            You can customize your embedded form using data attributes:
          </p>

          <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
            <h4 className="font-semibold text-gray-900 mb-3">Available Options:</h4>
            <div className="space-y-3 text-sm">
              <div>
                <code className="bg-gray-100 px-2 py-1 rounded text-xs">data-theme="light"</code>
                <span className="text-gray-600 ml-2">or "dark" - Set form theme</span>
              </div>
              <div>
                <code className="bg-gray-100 px-2 py-1 rounded text-xs">data-width="100%"</code>
                <span className="text-gray-600 ml-2">Set form width</span>
              </div>
              <div>
                <code className="bg-gray-100 px-2 py-1 rounded text-xs">data-height="auto"</code>
                <span className="text-gray-600 ml-2">Set form height</span>
              </div>
              <div>
                <code className="bg-gray-100 px-2 py-1 rounded text-xs">data-redirect="/thank-you"</code>
                <span className="text-gray-600 ml-2">Redirect after submission</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Styling Your Embedded Form</h2>

          <p>
            You can add custom CSS to match your website's design:
          </p>

          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">CSS</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`<style>
  #fastsubmit-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  /* Customize form fields */
  #fastsubmit-form input,
  #fastsubmit-form textarea {
    border-radius: 8px;
    border: 2px solid #e5e7eb;
  }
  
  /* Customize submit button */
  #fastsubmit-form button[type="submit"] {
    background: #4f46e5;
    color: white;
    border-radius: 8px;
    padding: 12px 24px;
  }
</style>`}
              </code>
            </pre>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Best Practices</h2>

          <div className="bg-blue-50 rounded-xl p-6 my-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Tips for Success:
            </h4>
            <ul className="space-y-2 mb-0">
              <li>✅ <strong>Place forms above the fold</strong> for maximum visibility</li>
              <li>✅ <strong>Use clear headings</strong> to explain what the form is for</li>
              <li>✅ <strong>Keep forms short</strong> - only ask for essential information</li>
              <li>✅ <strong>Test on mobile</strong> - most users will be on phones</li>
              <li>✅ <strong>Add a privacy note</strong> to build trust</li>
              <li>✅ <strong>Use compelling CTAs</strong> on submit buttons</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Troubleshooting Common Issues</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Form Not Showing Up?</h4>
              <ul className="text-sm text-gray-600 space-y-1 mb-0">
                <li>• Check that you've pasted both the div and script tags</li>
                <li>• Verify your form ID is correct</li>
                <li>• Make sure JavaScript is enabled</li>
                <li>• Check browser console for errors</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Form Looks Broken?</h4>
              <ul className="text-sm text-gray-600 space-y-1 mb-0">
                <li>• Check for CSS conflicts with your theme</li>
                <li>• Try adding custom CSS to fix styling</li>
                <li>• Ensure the container div has enough space</li>
                <li>• Test in different browsers</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Submissions Not Working?</h4>
              <ul className="text-sm text-gray-600 space-y-1 mb-0">
                <li>• Verify your form is published and active</li>
                <li>• Check spam protection settings</li>
                <li>• Test with a different email address</li>
                <li>• Check your dashboard for submissions</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Advanced: React/Next.js Integration</h2>

          <p>
            For React or Next.js applications, you can use a useEffect hook:
          </p>

          <div className="bg-[#1a1a1a] rounded-xl overflow-hidden my-6">
            <div className="px-4 py-2 border-b border-white/5 text-xs text-white/30">React Component</div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-white/70 leading-relaxed">
{`import { useEffect } from 'react';

export default function ContactForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://fastsubmit.hostspica.com/embed.js';
    script.setAttribute('data-form-id', 'your-form-id');
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return <div id="fastsubmit-form"></div>;
}`}
              </code>
            </pre>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white my-8">
            <h3 className="text-2xl font-bold mb-3">Ready to Embed Forms on Your Website?</h3>
            <p className="mb-6 text-white/90">
              Create your first embedded form in minutes. Works on any platform, free forever.
            </p>
            <Link 
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started Free <ArrowRight size={18} />
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Conclusion</h2>

          <p>
            Embedding forms on your website is simple with FastSubmit. Whether you're using WordPress, Shopify, 
            Webflow, or custom HTML, the process takes just a few minutes. The key is choosing the right placement, 
            keeping forms simple, and testing across devices.
          </p>

          <p>
            Start with the basic embed code, test it thoroughly, and then customize the styling to match your brand. 
            With proper implementation, embedded forms can significantly boost your lead generation and customer engagement.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/contact-form-best-practices" className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Contact Form Best Practices</h4>
              <p className="text-sm text-gray-600">15 tips to increase conversions on your contact forms.</p>
            </Link>
            <Link href="/blog/mobile-friendly-forms" className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 mb-2">Mobile-Friendly Forms</h4>
              <p className="text-sm text-gray-600">How to create forms that work perfectly on mobile devices.</p>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
