import { setAuthToken } from '@/lib/authUtils';
import { fetchAPI } from '..';

async function Register(formData) {
    try {
        const data = await sendRegisterRequest(formData);

        return data;
    } catch (error) {
        handleRegistrationError(error);
    }
}

async function sendRegisterRequest(formData) {
    return fetchAPI('api/register', {
        cache: 'no-store',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
}

function handleRegistrationError(error) {
    console.error(error);
    throw new Error('An error occurred while registering the user');
}

export default Register;
