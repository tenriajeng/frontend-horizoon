import { fetchAPI, handleFetchError } from '.';

export default async function getCourseDetail(slug, token) {
    try {
        const data = await fetchAPI(`api/course/${slug}`, {
            cache: 'no-store',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    } catch (error) {
        handleFetchError(error);
    }
}
