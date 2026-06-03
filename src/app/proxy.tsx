import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {

  console.log("welcome to proxy route");
  const dashboardRoute = request.nextUrl.pathname.startsWith('/dashboard');
  const aboutRoute = request.nextUrl.pathname.startsWith('/about')
  const token = request.cookies.get('access-token')?.value;
  if (!token && (dashboardRoute || aboutRoute)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}


export const config = {
  matcher: '/((?!api|_next/static|_next/image|.*\\.png$).*)',
};