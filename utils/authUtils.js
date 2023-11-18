'use client';

import { login } from '@/redux/features/authSclice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const HandleAuthentication = (token) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            dispatch(login());
        }
    }, [dispatch, token]);
};
