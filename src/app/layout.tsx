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
    default: 'FastSubmit - Free Online Form Builder | Create Forms, Surveys & Quizzes',
    template: '%s | FastSubmit'
  },
  description: 'Create beautiful forms, surveys, and quizzes in minutes. Free forever with unlimited forms and submissions. No coding required. Better than Google Forms.',
  keywords: [
    'online form builder',
    'free form builder',
    'form creator',
    'survey maker',
    'google forms alternative',
    'contact form builder',
    'quiz maker',
    'registration form',
    'feedback form',
    'order form builder',
    'form builder free',
    'create form online',
    'survey creator',
    'online survey',
    'form maker',
    'free survey maker',
    'contact form',
    'form backend api',
    'form api for developers',
    'no code form builder'
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
    title: 'FastSubmit - Free Online Form Builder',
    description: 'Create beautiful forms, surveys, and quizzes in minutes. Free forever with unlimited forms and submissions. No coding required.',
    siteName: 'FastSubmit',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FastSubmit - Free Form Backend API',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FastSubmit - Free Online Form Builder',
    description: 'Create forms, surveys, and quizzes in minutes. Free forever. No coding required.',
    images: ['/twitter-image.png'],
    creator: '@hostspica',
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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
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
