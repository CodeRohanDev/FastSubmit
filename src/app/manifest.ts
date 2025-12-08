import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FastSubmit - Free Form Backend API',
    short_name: 'FastSubmit',
    description: 'Free form backend API for developers. Collect HTML form submissions without writing backend code.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafafa',
    theme_color: '#111827',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
