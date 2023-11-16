export async function fetchAPI(endpoint, options = {}) {
    const apiUrl = process.env.API_URL;
    const url = apiUrl + endpoint;

    try {
        options = options = {
            ...options,
            headers: {
                ...options?.headers,
                Accept: 'application/json',
                'Accept-Encoding': 'gzip',
            },
        };

        const response = await fetch(url, options);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
        throw new Error('An error occurred while making the request');
    }
}

function handleFetchError(error) {
    console.error('An error occurred:', error);
    // throw new Error('An error occurred while making the request', error);
    // You can add additional error handling logic here, such as displaying an error message to the user or retrying the request.
}

export { handleFetchError };
