import { getAuthToken } from '@/lib/authUtils';
import { fetchAPI } from '.';

async function directCheckout(formData) {
    try {
        const token = await getAuthToken();

        const data = await fetchAPI('api/direct-checkout', {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        });

        return data;
    } catch (error) {
        console.log(error);
    }
}

export default directCheckout;
