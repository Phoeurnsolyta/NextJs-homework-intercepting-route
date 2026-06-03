import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  console.log("welcome to proxy route");
  const token = request.cookies.get("access-token")?.value;
  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}


export const config = {
  matcher: "/((?!api|_next/static|_next/image|.*\\.png$).*)",
};