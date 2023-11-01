export async function fetchAPI(endpoint, options = {}) {
    const apiUrl = process.env.API_URL;
    const url = apiUrl + endpoint;

    try {
        console.log(apiUrl);
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        throw new Error('An error occurred while making the request');
    }
}
