import { fetchAPI } from './api';

async function register(formData) {
    try {
        const data = await fetchAPI('api/register', {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}

export default register;
