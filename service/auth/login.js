import { setAuthToken } from '@/lib/authUtils';
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

        return data;
    } catch (error) {
        console.log(error);
    }
}

export default Login;
