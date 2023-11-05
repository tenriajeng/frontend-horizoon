import { fetchAPI } from '..';

export default async function getCarts(token) {
    try {
        const data = await fetchAPI('api/carts', {
            cache: 'no-store',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return data;
    } catch (error) {
        handleFetchError(error);
    }
}
