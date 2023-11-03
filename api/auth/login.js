import { fetchAPI } from '..';

async function Login(formData) {
    try {
        const data = await fetchAPI('api/login', {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        localStorage.setItem('authToken', data.data.token);

        return data;
    } catch (error) {
        console.log(error);
    }
}

export default Login;
