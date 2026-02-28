import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { siteConfig } from './config/site';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isMaintenanceMode = siteConfig.maintenanceMode;

    // LOG: Bu Vercel Dashboard -> Logs kısmında görünür
    console.log(`[Middleware] Hedef: ${pathname} | Bakim Modu: ${isMaintenanceMode}`);

    // 1. Statik dosyaları ve API rotalarını atla
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.') ||
        pathname === '/favicon.ico'
    ) {
        return NextResponse.next();
    }

    // 2. Bakım sayfasındaysak sonsuz döngüye girmeyelim
    if (pathname === '/maintenance') {
        // Eğer mod KAPALIYSA ama kullanıcı buradaysa, ana sayfaya at
        if (!isMaintenanceMode) {
            return NextResponse.redirect(new URL('/', request.url));
        }
        return NextResponse.next();
    }

    // 3. Bakım modu AÇIKSA, her şeyi /maintenance sayfasına yönlendir
    if (isMaintenanceMode) {
        console.log(`[Middleware] YONLENDIRILIYOR -> /maintenance`);
        return NextResponse.redirect(new URL('/maintenance', request.url));
    }

    return NextResponse.next();
}

// Tüm yolları yakalaması için matcher'ı basitleştirdik
export const config = {
    matcher: '/:path*',
};
