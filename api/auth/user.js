import { fetchAPI } from '..';

export const fetchUser = async () => {
    try {
        const response = await fetchAPI('api/revalidate-token', {
            method: 'POST',
            headers: {
                Authorization: `Bearer 18|zSlg8OyueVB89ZVVFLRjii8TitKQ8MoSLWrbQquL`,
            },
        });

        if (response.ok) {
            const data = response;
            console.log(data);
            return data;
        } else {
            console.error('Failed to fetch user data');
        }
    } catch (error) {
        console.error('An error occurred while fetching user data', error);
    }
};
