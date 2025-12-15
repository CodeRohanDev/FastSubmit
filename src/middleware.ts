import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const response = NextResponse.next()

  // Protected dashboard routes
  if (pathname.startsWith('/dashboard')) {
    // Check for session cookie (set by client after Firebase auth)
    const hasSession = request.cookies.has('__session')
    
    if (!hasSession) {
      // Redirect to login if no session
      const loginUrl = new URL('/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Protected admin routes (exclude login page)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Check for admin session cookie
    const hasAdminSession = request.cookies.has('__admin_session')
    
    if (!hasAdminSession) {
      // Redirect to admin login
      const loginUrl = new URL('/admin/login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  // Redirect authenticated users away from auth pages
  if (pathname === '/login' || pathname === '/signup') {
    const hasSession = request.cookies.has('__session')
    
    if (hasSession) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  // Redirect authenticated admin users away from admin login
  if (pathname === '/admin/login') {
    const hasAdminSession = request.cookies.has('__admin_session')
    
    if (hasAdminSession) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
  }

  // Add SEO headers for public pages
  if (!pathname.startsWith('/dashboard') && !pathname.startsWith('/api')) {
    response.headers.set('x-robots-tag', 'index, follow')
    response.headers.set('content-language', 'en-IN')
    
    // Add security headers
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
