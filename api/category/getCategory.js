'use server';

import { fetchAPI, handleFetchError } from '..';

export default async function getCategories(slug, number) {
    try {
        const response = await fetchAPI(`api/categories`);

        return response;
    } catch (error) {
        handleFetchError(error);
    }
}
