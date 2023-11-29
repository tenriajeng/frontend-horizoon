'use server';

import { getAuthToken } from '@/lib/authUtils';
import { fetchAPI, handleFetchError } from '..';

export const fetchUser = async () => {
    try {
        const token = await getAuthToken();

        const response = await fetchAPI('api/revalidate-token', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response;
    } catch (error) {
        handleFetchError('An error occurred while fetching user data', error);
    }
};
