import { fetchAPI } from '@/api';
import { login, logout, updateUser } from '../features/authSclice';
import { getAuthToken } from '@/lib/authUtils';

export const fetchUserData = () => async (dispatch) => {
    try {
        const token = await getAuthToken();
        const response = await fetchAPI('api/revalidate-token', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        if (response.success) {
            dispatch(login(response.data));
        } else {
            dispatch(logout());
        }
    } catch (error) {
        console.error('Error fetching user data', error);
    }
};
