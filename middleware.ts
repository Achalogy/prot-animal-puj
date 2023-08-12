import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // if (request.nextUrl.pathname == "/") return
  const tokenCookie = req.cookies.get("token");
  if(!tokenCookie && req.nextUrl.pathname != "/admin/login") {
    return NextResponse.redirect(new URL('/', req.url))
  }
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
}