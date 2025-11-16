import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
// Create a Clerk proxy handler instance and delegate to it for
// all requests except webhook/upload endpoints which need to be
// skipped (webhooks rely on raw body/signature verification).
const clerk = clerkMiddleware();

export default async function proxy(req: NextRequest, ev: any) {
  const { pathname } = req.nextUrl;

  // Skip Clerk proxy for webhook and upload routes
  if (
    pathname.startsWith('/api/webhook') ||
    pathname.startsWith('/api/uploadthing')
  ) {
    return NextResponse.next();
  }

  // Delegate to Clerk's proxy for all other routes
  // `clerk` is a NextMiddleware function with signature (req, ev)
  // so we call it and return its result.
  return clerk(req as any, ev as any);
}
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 