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
        console.log('data data ', data.data.token);
        localStorage.setItem('authToken', data.data.token);

        return data;
    } catch (error) {
        console.log(error);
    }
}

export default Register;
