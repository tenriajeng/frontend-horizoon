import { fetchAPI, handleFetchError } from '..';

export const fetchUser = async () => {
    try {
        const response = await fetchAPI('api/revalidate-token', {
            method: 'POST',
            headers: {
                Authorization: `Bearer 18|zSlg8OyueVB89ZVVFLRjii8TitKQ8MoSLWrbQquL`,
            },
        });

        if (response.ok) {
            return response;
        } else {
            handleFetchError('Failed to fetch user data');
        }
    } catch (error) {
        handleFetchError('An error occurred while fetching user data', error);
    }
};
