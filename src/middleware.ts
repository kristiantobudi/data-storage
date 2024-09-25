import { NextRequest } from "next/server"

export const PROTECTED_ROUTES = ['dashboard', 'dashboard/items', 'dashboard/stocks']
export const PUBLIC_ROUTES = ['/', '/auth/login', '/auth/register']

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('Authorization')?.value;
    const pathname = request.nextUrl.pathname;

    if (currentUser && pathname.startsWith('/auth/login')) {
        return Response.redirect(new URL('/dashboard', request.url))
    }

    if (
        !currentUser &&
        !PUBLIC_ROUTES.includes(pathname) &&
        !PROTECTED_ROUTES.includes(pathname)
    ) {
        return Response.redirect(new URL('/auth/login', request.url))
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.png$|favicon.ico|.*\\.webp$|.*\\.svg$).*)',
    ]
}