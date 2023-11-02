import { fetchAPI } from '.';

async function getCourseDetail() {
    try {
        const data = await fetchAPI('api/home', {
            cache: 'no-store',
        });

        return data;
    } catch (error) {
        throw new Error(
            'An error occurred while fetching data: ' + error.message,
        );
    }
}

export default getCourseDetail;
