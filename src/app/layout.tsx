import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/context/AuthContext'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fastsubmit.hostspica.com'),
  title: {
    default: 'FastSubmit - Free Form Builder | Best Google Forms Alternative | Online Quiz Maker',
    template: '%s | FastSubmit - Free Form Builder'
  },
  description: 'Create free online forms, surveys & quizzes. Best free form builder alternative to Google Forms, Zoho Forms & Microsoft Forms. Export to Excel, PDF. Free forever with unlimited forms, submissions & API access.',
  keywords: [
    // Primary keywords
    'form builder',
    'free form builder',
    'google forms',
    'forms',
    'quiz maker',
    'online form builder',
    'google form alternative',
    'free online form',
    'ai form builder',
    'form builder free',
    'form builder online',
    'free form',
    'online forms',
    'free online forms',
    'form maker',
    'online form maker',
    'best form maker',
    'best form builder',
    // Cost-related keywords
    'cheapest form',
    'cheapest form builder',
    'cheapest forms',
    'best forms',
    'affordable forms',
    'best free affordable forms',
    // API keywords
    'google form api',
    'form api',
    'free form api',
    'form api free',
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
    // Existing keywords
    'website form builder',
    'embed form',
    'social media form',
    'instagram form',
    'facebook form',
    'contact form builder',
    'survey maker',
    'form creator',
    'lead generation form',
    'registration form',
    'feedback form',
    'form backend',
    'no code form builder',
    'shareable forms',
    'qr code form'
  ],
  authors: [{ name: 'Hostspica', url: 'https://hostspica.com' }],
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
    url: 'https://fastsubmit.hostspica.com',
    title: 'FastSubmit - Free Form Builder for Websites & Social Media',
    description: 'Create beautiful forms for websites, social media, and online sharing. Embed anywhere, share everywhere. Free forever.',
    siteName: 'FastSubmit',
    images: [
      {
        url: '/api/og?formName=FastSubmit&description=Free Form Builder for Websites & Social Media&fieldCount=unlimited',
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
    images: ['/api/og?formName=FastSubmit&description=Free Form Builder for Websites & Social Media&fieldCount=unlimited'],
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
      { url: '/favicon.ico' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://fastsubmit.hostspica.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fastsubmit.hostspica.com" />
      </head>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
