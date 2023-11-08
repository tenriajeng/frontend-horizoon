'use server';

import { cookies } from 'next/headers';

export async function getAuthToken() {
    try {
        const token = cookies().get('authToken');
        if (token) {
            console.log('cookies token ', token);
            return token.value;
        }
    } catch (error) {
        console.error('Error while getting the authentication token:', error);
        return null;
    }
}

export async function setAuthToken(token) {
    try {
        const tokenToStore =
            typeof token === 'object' ? JSON.stringify(token) : token;

        cookies().set('authToken', tokenToStore, {
            path: '/',
            httpOnly: true,
            secure: true, // Set to true if your application uses HTTPS
        });
    } catch (error) {
        console.error('Error while setting the authentication token:', error);
    }
}

export async function removeAuthToken() {
    try {
        cookies().delete('authToken', {
            path: '/',
            httpOnly: true,
            secure: true, // Set to true if your application uses HTTPS
        });
    } catch (error) {
        console.error('Error while removing the authentication token:', error);
    }
}
