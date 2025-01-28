import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const rateLimit = new Map()

export function middleware(request: NextRequest) {

  const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1'
  const count = rateLimit.get(ip) ?? 0

  if (count > 150) {
    return new NextResponse('Too Many Requests', { status: 429 })
  }
  rateLimit.set(ip, count + 1)

  
  if (request.nextUrl.pathname.startsWith('/admin/dashboard')) {
    const adminAccess = request.cookies.get('adminAccess')
    
    if (!adminAccess || adminAccess.value !== 'granted') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/dashboard/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
