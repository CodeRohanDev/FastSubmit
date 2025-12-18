import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShoppingCart, Mail, Zap, CreditCard, Package, Users } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Form Builder for Shopify - Free Shopify Forms | FastSubmit',
  description: 'Free form builder for Shopify stores. Create contact forms, order forms, wholesale inquiries. No app needed, embed directly. Works with all Shopify themes.',
  keywords: [
    'form builder for shopify',
    'shopify form builder',
    'shopify contact form',
    'shopify form app alternative',
    'shopify custom form',
    'shopify order form',
    'shopify wholesale form',
    'shopify inquiry form',
    'shopify feedback form',
    'free shopify forms',
    'shopify form embed',
    'shopify form without app',
    'shopify lead capture',
    'shopify customer form',
    'best shopify form builder'
  ],
  alternates: { canonical: 'https://fastsubmit.cloud/form-builder-for-shopify' }
}

export default function FormBuilderForShopifyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Form Builder for Shopify - FastSubmit",
    "description": "Create forms for Shopify stores without apps. Free forever.",
    "url": "https://fastsubmit.cloud/form-builder-for-shopify"
  }

  const useCases = [
    { icon: <Mail className="w-5 h-5" />, title: 'Contact Forms', desc: 'Let customers reach you easily from your store.' },
    { icon: <Package className="w-5 h-5" />, title: 'Wholesale Inquiries', desc: 'Collect B2B and wholesale order requests.' },
    { icon: <CreditCard className="w-5 h-5" />, title: 'Custom Orders', desc: 'Accept custom product requests and quotes.' },
    { icon: <Users className="w-5 h-5" />, title: 'Pre-Orders', desc: 'Capture interest for upcoming products.' },
    { icon: <ShoppingCart className="w-5 h-5" />, title: 'Returns/Exchanges', desc: 'Streamline your return request process.' },
    { icon: <Zap className="w-5 h-5" />, title: 'Feedback Forms', desc: 'Collect customer feedback and reviews.' },
  ]

  const embedCode = `<!-- Add to Shopify theme -->
<div id="fastsubmit-form" data-form-id="YOUR_FORM_ID"></div>
<script src="https://fastsubmit.cloud/embed.js"></script>`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-green-600 mb-4 sm:mb-6 bg-green-50 px-3 sm:px-4 py-2 rounded-full border border-green-200">
                <ShoppingCart size={14} /><span>Shopify Forms</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
                Form builder for
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Shopify</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Add custom forms to your Shopify store without apps. Contact forms, wholesale inquiries, 
                custom orders. Works with all themes. Free forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <Link href="/signup" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Create Shopify Form <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6"><h2 className="text-xl font-semibold text-white mb-2">Add to Shopify theme</h2></div>
            <div className="bg-gray-800 rounded-xl p-4 sm:p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap">{embedCode}</pre>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Shopify form use cases</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {useCases.map((f, i) => (
                <div key={i} className="p-4 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4 text-green-600">{f.icon}</div>
                  <h3 className="font-medium text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready for Shopify forms?</h2>
            <p className="text-gray-300 mb-8">Create forms for your store without expensive apps. Free forever.</p>
            <Link href="/signup" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Create Shopify Form <ArrowRight size={16} />
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
