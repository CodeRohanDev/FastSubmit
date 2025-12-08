import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

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

  // Redirect authenticated users away from auth pages
  if (pathname === '/login' || pathname === '/signup') {
    const hasSession = request.cookies.has('__session')
    
    if (hasSession) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/signup',
  ],
}
