'use server';

import { getAuthToken } from '@/lib/authUtils';
import { fetchAPI, handleFetchError } from '..';

export default async function getMaterialDetail(slug, number) {
    try {
        const token = await getAuthToken();

        if (!token) {
            // Handle the case when the token is not available
            console.error('Authentication token not available.');
            return null; // or throw an error or handle it as per your requirement
        }

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        const response = await fetchAPI(`api/course/${slug}/learn/${number}`, {
            cache: 'no-store',
            headers,
        });

        return response;
    } catch (error) {
        handleFetchError(error);
    }
}
