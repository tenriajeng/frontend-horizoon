import { getAuthToken } from '@/lib/authUtils';
import { fetchAPI, handleFetchError } from '.';

export default async function getCourseDetail(slug) {
    try {
        const token = await getAuthToken();

        const headers = {};

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const response = await fetchAPI(`api/course/${slug}`, {
            cache: 'no-store',
            headers,
        });

        return response.data;
    } catch (error) {
        handleFetchError(error);
    }
}
