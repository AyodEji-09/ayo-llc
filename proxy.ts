import { NextRequest, NextResponse } from "next/server";

function headerCountry(request: NextRequest): string | null {
  return (
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-nf-country") ||
    request.headers.get("x-appengine-country") ||
    request.headers.get("x-country") ||
    null
  );
}

export function proxy(request: NextRequest): NextResponse {
  // 1. Detect country from Edge Geo or IP headers (Vercel, Cloudflare, Netlify)
  const country =
    (request as any).geo?.country ||
    headerCountry(request) ||
    "";

  const response = NextResponse.next();

  if (country) {
    // Set country cookie so client-side code can immediately read the user's IP-detected country
    response.cookies.set("country", country.toUpperCase(), {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
  }

  return response;
}

export const config = {
  matcher: [
    // Apply to page routes while skipping static assets and internal files
    "/((?!_next/static|_next/image|favicon.ico|images/|icons/|api/).*)",
  ],
};
