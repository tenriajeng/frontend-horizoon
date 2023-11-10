import { getAuthToken } from '@/lib/authUtils';
import { fetchAPI, handleFetchError } from '..';

export default async function getMaterialDetail(slug, number) {
    try {
        const token = await getAuthToken();

        const headers = {};

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const response = await fetchAPI(`api/course/${slug}/learn/${number}`, {
            cache: 'no-store',
            headers,
        });

        return response.data;
    } catch (error) {
        handleFetchError(error);
    }
}
