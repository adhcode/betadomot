import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  console.log('\n🔒 Middleware Check:', req.nextUrl.pathname)

  try {
    const { data: { session } } = await supabase.auth.getSession()
    console.log('Session check:', { path: req.nextUrl.pathname, hasSession: !!session })

    // Allow access to login page
    if (req.nextUrl.pathname === '/admin/login') {
      return res
    }

    // Protect admin routes
    if (req.nextUrl.pathname.startsWith('/admin')) {
      if (!session) {
        return NextResponse.redirect(new URL('/admin/login', req.url))
      }
    }

    return res
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }
}

export const config = {
  matcher: ['/admin/:path*']
} 