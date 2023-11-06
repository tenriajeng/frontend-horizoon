'use server';

import { getAuthToken } from '@/lib/authUtils';
import { fetchAPI } from '..';

export default async function addToCart(formData) {
    try {
        const token = await getAuthToken();

        const data = await fetchAPI('api/carts', {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        });

        return data;
    } catch (error) {
        handleFetchError(error);
    }
}
