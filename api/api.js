export const apiUrl = process.env.HOST; // Use the HOST variable from your .env.local file

export async function fetchAPI(endpoint, options = {}) {
    const url = apiUrl + endpoint;

    try {
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
