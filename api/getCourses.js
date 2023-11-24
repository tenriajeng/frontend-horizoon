import { getAuthToken } from '@/lib/authUtils';
import { fetchAPI, handleFetchError } from '.';

export default async function getCourses(
    page,
    perPage = 12,
    categories,
    keyword = '',
) {
    try {
        const token = await getAuthToken();
        let headers = {};

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        const categoriesQueryString = categories
            .map(
                (category, index) =>
                    `c[${index}]=${encodeURIComponent(category)}`,
            )
            .join('&');

        const url = `api/courses?per_page=${perPage}&page=${page}${
            categoriesQueryString ? `&${categoriesQueryString}` : ''
        }${keyword ? `&q=${keyword}` : ''}`;

        const data = await fetchAPI(url, {
            headers,
        });

        return data;
    } catch (error) {
        handleFetchError(error);
    }
}
