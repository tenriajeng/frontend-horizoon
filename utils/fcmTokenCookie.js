'use server';

import { cookies } from 'next/headers';

export async function setFcmToken(token) {
    try {
        const tokenToStore =
            typeof token === 'object' ? JSON.stringify(token) : token;

        cookies().set('fcmToken', tokenToStore, {
            path: '/',
            httpOnly: true,
            secure: true, // Set to true if your application uses HTTPS
        });
    } catch (error) {
        console.error('Error while setting the fcm token:', error);
    }
}

export async function getFcmToken() {
    try {
        const cookiesList = cookies();
        const hasCookie = cookiesList.has('fcmToken');

        try {
            if (hasCookie) {
                const token = cookies().get('fcmToken');
                if (token) {
                    return token.value;
                }
            } else {
                return false;
            }
        } catch (error) {
            console.log('hasCookie', hasCookie);
            console.error('Error while getting the fcm token:', error);
            return false;
        }
    } catch (error) {
        console.error('Error while setting the fcm token:', error);
    }
}
