import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value
  
  // Protect /admin routes (except /admin/login) and POST/PUT/DELETE API routes
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin') && !request.nextUrl.pathname.startsWith('/admin/login')
  const isProtectedApi = request.nextUrl.pathname.startsWith('/api/projects') && request.method !== 'GET'

  if (isAdminRoute || isProtectedApi) {
    if (!token) {
      if (isAdminRoute) return NextResponse.redirect(new URL('/admin/login', request.url))
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback_secret_for_dev')
      await jwtVerify(token, secret)
      return NextResponse.next()
    } catch (err) {
      if (isAdminRoute) return NextResponse.redirect(new URL('/admin/login', request.url))
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/projects/:path*'],
}
