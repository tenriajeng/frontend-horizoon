import { getAuthToken } from '@/lib/authUtils';
import { fetchAPI, handleFetchError } from '.';

export default async function getCourses() {
    try {
        const token = await getAuthToken();
        let headers = {};

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const data = await fetchAPI('api/courses', {
            cache: 'no-store',
            headers,
        });

        return data;
    } catch (error) {
        handleFetchError(error);
    }
}
