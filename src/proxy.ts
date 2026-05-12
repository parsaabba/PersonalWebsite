import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Handle legacy .html paths
  if (pathname.includes('.html')) {
    let newPath = pathname.replace('.html', '').replace('/pages/', '/')
    // Special case for root-like pages
    if (newPath === '/index') newPath = '/'
    
    return NextResponse.redirect(new URL(newPath, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
