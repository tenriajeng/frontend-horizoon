import { fetchAPI, handleFetchError } from '.';

export default async function getCourseDetail() {
    try {
        const data = await fetchAPI('api/home', {
            cache: 'no-store',
        });

        return data;
    } catch (error) {
        handleFetchError(error);
    }
}
