import { getAuthToken } from '@/lib/authUtils';
import { fetchAPI, handleFetchError } from '.';

const buildCategoriesQueryString = (categories) =>
    categories
        .map((category, index) => `c[${index}]=${encodeURIComponent(category)}`)
        .join('&');

const buildUrl = (page, perPage, categories, keyword, minPrice, maxPrice) => {
    const categoriesQueryString = buildCategoriesQueryString(categories);

    const params = new URLSearchParams({
        per_page: perPage,
        page: page,
        ...(keyword && { q: keyword }),
        ...(minPrice !== null && { min_price: minPrice }),
        ...(maxPrice !== null && { max_price: maxPrice }),
    });

    return `api/courses?${params.toString()}&${categoriesQueryString}`;
};

const buildHeaders = async () => {
    const token = await getAuthToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
};

export default async function getCourses(
    page = 1,
    perPage = 12,
    categories,
    keyword = '',
    minPrice = null,
    maxPrice = null,
) {
    try {
        const headers = await buildHeaders();
        const url = buildUrl(
            page,
            perPage,
            categories,
            keyword,
            minPrice,
            maxPrice,
        );

        const data = await fetchAPI(url, { headers });

        return data;
    } catch (error) {
        handleFetchError(error);
    }
}
