import { fetchAPI } from '..';

async function Register(formData) {
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

export default Register;
