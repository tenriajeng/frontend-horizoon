'use server';

import { getAuthToken } from '@/lib/authUtils';
import { fetchAPI, handleFetchError } from '..';

export default async function getCarts() {
    try {
        const token = await getAuthToken();

        if (token) {
            const headers = {};

            headers.Authorization = `Bearer ${token}`;

            const data = await fetchAPI('api/carts', {
                cache: 'no-store',
                headers,
            });

            return data;
        }
    } catch (error) {
        handleFetchError(error);
    }
}
