import { fetchAPI, handleFetchError } from '.';

export default async function getCourses() {
    try {
        const data = await fetchAPI('api/home', {
            cache: 'no-store',
        });

        return data;
    } catch (error) {
        handleFetchError(error);
    }
}
