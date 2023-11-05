'use client';

import { AccountDropdown } from './account-dropdown';
import { DialogLogin } from './dialog-login';
import { Button } from './ui/button';
import { DialogSignUp } from './dialog-sign-up';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAuthToken } from '@/lib/authUtils';
import { fetchUserData } from '@/redux/action/authAction';

export function Account() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            const token = getAuthToken();
            dispatch(fetchUserData(token));
        }
    }, [dispatch, isAuthenticated]);

    return isAuthenticated ? (
        <AccountDropdown user={user} />
    ) : (
        <>
            <DialogLogin>
                <Button variant="outline" size="sm">
                    Log in
                </Button>
            </DialogLogin>
            <DialogSignUp />
        </>
    );
}