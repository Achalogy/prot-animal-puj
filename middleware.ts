import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from "jsonwebtoken";
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest) {
  // if (request.nextUrl.pathname == "/") return

  const secret = new TextEncoder().encode(process.env.TOKEN_KEY)

  const tokenCookie = req.cookies.get("token")?.value;
  let tokenIsValid: any = false;
  try {
    tokenIsValid = await jwtVerify(tokenCookie ?? "", secret)
  } catch {

  }
  if (!tokenIsValid && req.nextUrl.pathname != "/admin/login") {
    return NextResponse.redirect(new URL('/', req.url))
  }
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
}