'use server';

import { getAuthToken } from '@/lib/authUtils';
import { fetchAPI, handleFetchError } from '..';

export default async function getCarts() {
    try {
        const token = await getAuthToken();

        const data = await fetchAPI('api/carts', {
            cache: 'no-store',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    } catch (error) {
        handleFetchError(error);
    }
}
