import { getAuthToken } from '@/lib/authUtils';
import { NextResponse } from 'next/server';

export async function middleware(request) {
    const token = await getAuthToken();

    if (!token) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

// protected path
export const config = {
    matcher: ['/explore/:slug/learn/:number*', '/carts'],
};
