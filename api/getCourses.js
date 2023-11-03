import { fetchAPI, handleFetchError } from '.';

export async function getCourses() {
    try {
        const data = await fetchAPI('api/home', {
            cache: 'no-store',
        });

        return data;
    } catch (error) {
        handleFetchError(error);
    }
}
