'use server';

import { fetchAPI, handleFetchError } from '..';

export default async function getCategories(perPage = 8) {
    try {
        const response = await fetchAPI(`api/categories?per_page=${perPage}`);

        console.log(perPage, 'response');
        return response;
    } catch (error) {
        handleFetchError(error);
    }
}
