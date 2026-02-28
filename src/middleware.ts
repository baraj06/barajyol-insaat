import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { siteConfig } from './config/site';

export function middleware(request: NextRequest) {
    const { maintenanceMode } = siteConfig;
    const { pathname } = request.nextUrl;

    // If maintenance mode is ON and we are NOT already on the maintenance page
    // AND we are not trying to access static files or the public folder
    if (
        maintenanceMode &&
        !pathname.startsWith('/maintenance') &&
        !pathname.startsWith('/_next') &&
        !pathname.startsWith('/api') &&
        !pathname.includes('.') // for images, favicons, etc.
    ) {
        return NextResponse.redirect(new URL('/maintenance', request.url));
    }

    // If maintenance mode is OFF and we try to access the maintenance page directly
    // Redirect back to home
    if (!maintenanceMode && pathname.startsWith('/maintenance')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
