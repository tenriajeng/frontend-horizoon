'use server';

import { fetchAPI, handleFetchError } from '..';

export default async function getCategories(perPage = 8) {
    try {
        const response = await fetchAPI(`api/categories?per_page=${perPage}`, {
            cache: 'no-store',
        });

        return response;
    } catch (error) {
        handleFetchError(error);
    }
}
