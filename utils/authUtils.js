'use client';

import { getAuthToken } from '@/lib/authUtils';
import { login } from '@/redux/features/authSclice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const HandleAuthentication = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchToken = async () => {
            const token = await getAuthToken();
            if (token) {
                dispatch(login());
            }
        };

        fetchToken();
    }, [dispatch]);
};
