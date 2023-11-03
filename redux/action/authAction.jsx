import { fetchAPI } from '@/api';
import { logout, storedToken, updateUser } from '../features/authSclice';

export const fetchUserData = () => async (dispatch) => {
    try {
        console.log('storedToken ', storedToken);
        const response = await fetchAPI('api/revalidate-token', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${storedToken}`,
            },
        });

        if (response.success) {
            dispatch(updateUser(response.data));
        } else {
            dispatch(logout());
        }
    } catch (error) {
        console.error('Error fetching user data', error);
    }
};
