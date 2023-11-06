import { getAuthToken } from '@/lib/authUtils';
import { fetchAPI, handleFetchError } from '.';

export default async function getCourseDetail(slug) {
    try {
        const token = await getAuthToken();

        const response = await fetchAPI(`api/course/${slug}`, {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        handleFetchError(error);
    }
}
