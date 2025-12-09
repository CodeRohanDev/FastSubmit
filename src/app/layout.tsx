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
    default: 'FastSubmit - Free Form Builder for Websites, Social Media & Online | Create Forms',
    template: '%s | FastSubmit'
  },
  description: 'Create beautiful forms for websites, social media, and online sharing. Embed on any website, share on Instagram, Facebook & more. Free forever with unlimited forms.',
  keywords: [
    'online form builder',
    'free form builder',
    'website form builder',
    'embed form',
    'social media form',
    'instagram form',
    'facebook form',
    'contact form builder',
    'survey maker',
    'google forms alternative',
    'form creator',
    'lead generation form',
    'registration form',
    'feedback form',
    'form api',
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
        url: '/api/og/home',
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
    images: ['/api/og/home'],
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
  alternates: {
    canonical: 'https://fastsubmit.hostspica.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
