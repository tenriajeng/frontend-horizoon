export async function fetchAPI(endpoint, options = {}) {
    const url = apiUrl + endpoint;

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    } catch (error) {
        handleFetchError(error);
    }
}

export function handleFetchError(error) {
    console.error(error);
    throw new Error('An error occurred while making the request');
}
