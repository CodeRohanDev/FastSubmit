import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/context/AuthContext'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fastsubmit.cloud'),
  title: {
    default: 'FastSubmit - Free Form Builder | Fast Submit Forms Online | Best Google Forms Alternative 2025',
    template: '%s | FastSubmit - Fast Submit Forms Online'
  },
  description: 'FastSubmit: Create & submit forms online fast. Best free form builder alternative to Google Forms, Typeform, JotForm. Drag & drop builder, automate form submissions, bulk submission tool. Export to Excel, PDF. Free forever with unlimited forms, submissions & API access. Fast, secure online submissions for students, freelancers & businesses.',
  keywords: [
    // FastSubmit brand keywords
    'fastsubmit',
    'fast submit',
    'fast-submit',
    'fastsubmit app',
    'fastsubmit software',
    'fastsubmit online',
    'fastsubmit tool',
    'fastsubmit india',
    'fastsubmit pricing',
    'fastsubmit login',
    'fastsubmit signup',
    'fastsubmit free trial',
    
    // Primary form builder keywords
    'form builder',
    'free form builder',
    'online form creator',
    'drag and drop form builder',
    'form maker online',
    'build free forms',
    'easy form builder',
    'custom form builder',
    'no code form builder',
    'simple form creator',
    'quick form maker',
    'form design tool',
    'online form generator',
    'free drag and drop forms',
    'build online forms',
    'form building software',
    
    // Google Forms alternatives
    'google forms',
    'google form alternative',
    'google forms alternative',
    'typeform alternative',
    'jotform alternative',
    'surveymonkey alternative',
    'free google forms replacement',
    'best form builder 2025',
    'top online form tools',
    'affordable form builders',
    'free vs paid form builders',
    'open-source form alternatives',
    
    // Embed and integration keywords
    'embed forms on website',
    'website form embed code',
    'wordpress form embed',
    'shopify form integration',
    'responsive form embed',
    'seo friendly forms',
    'no iframe form embed',
    'html form embedder',
    'webflow form builder',
    'embed quiz on site',
    
    // Social media and sharing
    'social media forms',
    'instagram form link',
    'facebook form embed',
    'linkedin survey forms',
    'tiktok form sharing',
    'qr code form share',
    'share forms via email',
    'viral form sharing',
    'social lead generation forms',
    
    // Quiz and survey keywords
    'online quiz maker',
    'free online surveys',
    'lead generation forms',
    'quiz maker',
    'survey maker',
    'contact form builder',
    'form creator',
    'feedback form',
    'registration form',
    
    // API and technical keywords
    'form api integration',
    'spam protected forms',
    'custom branded forms',
    'form api',
    'free form api',
    'form api free',
    'google form api',
    'form backend',
    'webhooks',
    
    // Fast submission keywords
    'fast online submission',
    'submit forms online fast',
    'automate form submissions',
    'bulk form submission tool',
    'one click form submit',
    'automatic form filler and submitter',
    'speed up online applications',
    'reduce manual form entry',
    'streamline document submission',
    'fast secure online submissions',
    
    // Use case specific keywords
    'submission tool for students',
    'submission tool for freelancers',
    'submission tool for businesses',
    'bulk job application submitter',
    'fast grant application submission',
    'automate government form submission',
    'automate scholarship applications',
    'online assignment submission tool',
    'fast client document upload',
    'remote onboarding document submission',
    
    // Technical automation keywords
    'form submission automation software',
    'multi step form submitter',
    'browser based submission tool',
    'no code submission automation',
    'api for fast submissions',
    'secure file and form submission',
    'submission tracking dashboard',
    'email notifications for submissions',
    'integrations for online submission tools',
    'cloud based submission platform',
    
    // How-to and comparison keywords
    'how to automate online form submissions',
    'best tool to submit forms automatically',
    'fast way to submit multiple applications',
    'software to fill and submit forms quickly',
    'tool to submit documents online securely',
    'automate repetitive web form submissions',
    'speed up online registration processes',
    'reduce time spent on online applications',
    'online submission software for small business',
    'fastsubmit alternative to manual submissions',
    
    // Cost-related keywords
    'cheapest form',
    'cheapest form builder',
    'cheapest forms',
    'best forms',
    'affordable forms',
    'best free affordable forms',
    
    // Brand comparisons
    'best google form free',
    'free google form',
    'hostspica forms',
    'forms hostspica',
    'zoho forms',
    'microsoft forms',
    'free zoho forms',
    'free microsoft forms',
    
    // Export keywords
    'form to excel',
    'form to word',
    'form to pdf',
    
    // Website keywords
    'best form website',
    'free form website',
    'create free forms',
    'easy forms',
    
    // Additional keywords
    'website form builder',
    'embed form',
    'social media form',
    'instagram form',
    'facebook form',
    'shareable forms',
    'qr code form',
    'online forms',
    'free online forms',
    'form maker',
    'online form maker',
    'best form maker',
    'best form builder',
    'free online form',
    'ai form builder',
    'form builder free',
    'form builder online',
    'free form',
    'online form builder',
    
    // High-impact long-tail keywords 2025
    'free form builder no signup',
    'form builder with email notifications',
    'html form without backend',
    'form builder for small business free',
    'embed contact form without coding',
    'form submission api free tier',
    'google forms alternative with custom branding',
    'form builder with webhook integration',
    'free survey tool unlimited responses',
    'form builder export to excel free',
    
    // India-focused keywords
    'best form builder india',
    'free online form maker india',
    'form builder for indian businesses',
    'gst invoice form builder',
    
    // AI and trending 2025 keywords
    'ai powered form builder',
    'form builder with chatgpt',
    'smart form automation 2025',
    'no code form api',
    'serverless form builder',
    'jamstack form builder'
  ],
  authors: [{ name: 'Hostspica', url: 'https://fastsubmit.cloud' }],
  creator: 'Hostspica',
  publisher: 'Hostspica',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fastsubmit.cloud',
    title: 'FastSubmit - Free Form Builder for Websites & Social Media',
    description: 'Create beautiful forms for websites, social media, and online sharing. Embed anywhere, share everywhere. Free forever.',
    siteName: 'FastSubmit',
    images: [
      {
        url: 'https://fastsubmit.cloud/api/og?formName=FastSubmit&description=Free Form Builder for Websites & Social Media&fieldCount=unlimited',
        width: 1200,
        height: 630,
        alt: 'FastSubmit - Forms for Every Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FastSubmit - Free Form Builder for Websites & Social Media',
    description: 'Create forms for websites, social media, and online sharing. Free forever. No coding required.',
    images: ['https://fastsubmit.cloud/api/og?formName=FastSubmit&description=Free Form Builder for Websites & Social Media&fieldCount=unlimited'],
    creator: '@fastsubmit',
    site: '@fastsubmit',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'fastsubmit-google-verification',
    yandex: 'fastsubmit-yandex-verification', 
    yahoo: 'fastsubmit-yahoo-verification',
    other: {
      'msvalidate.01': 'fastsubmit-bing-verification',
      'p:domain_verify': 'fastsubmit-pinterest-verification',
    }
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://fastsubmit.cloud',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FastSubmit",
    "alternateName": "FastSubmit by Hostspica",
    "url": "https://fastsubmit.cloud",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fastsubmit.cloud/logo.png",
      "width": 512,
      "height": 512
    },
    "description": "FastSubmit is a free form builder and submission automation platform. Create forms, automate submissions, and collect data faster than ever.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Organization",
      "name": "Hostspica"
    },
    "sameAs": [
      "https://twitter.com/fastsubmit",
      "https://github.com/hostspica/fastsubmit"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://fastsubmit.cloud/contact"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FastSubmit",
    "url": "https://fastsubmit.cloud",
    "description": "Free form builder and submission automation platform. Create forms, automate submissions, bulk processing.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://fastsubmit.cloud/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FastSubmit Form Builder",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "featureList": [
      "Drag and drop form builder",
      "Form submission automation",
      "Bulk form processing",
      "No code required",
      "Custom branding",
      "API integration",
      "Mobile responsive",
      "Spam protection"
    ]
  }

  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fastsubmit.cloud" />
        
        {/* Favicon - Multiple formats for better compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4f46e5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#4f46e5" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QH7HE7S7QV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QH7HE7S7QV', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <GoogleAnalytics />
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
