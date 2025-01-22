import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const rateLimit = new Map()

export function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1'
  const count = rateLimit.get(ip) ?? 0
  
  if (count > 100) {
    return new NextResponse('Too Many Requests', { status: 429 })
  }
  
  rateLimit.set(ip, count + 1)
  return NextResponse.next()
}
