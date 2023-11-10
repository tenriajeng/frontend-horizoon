import { getAuthToken } from '@/lib/authUtils';
import { NextResponse } from 'next/server';

export async function middleware(request) {
    const token = await getAuthToken();

    if (token) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/', request.url));
}

// protected path
export const config = {
    matcher: ['/courses/:slug/learn/:number*', '/carts'],
};
