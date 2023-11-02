'use client';

import { createSlice } from '@reduxjs/toolkit';

// const storedToken = localStorage.getItem('authToken');

const storedToken =
    typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;

const initialState = {
    isAuthenticated: !!storedToken,
    user: null,
    token: storedToken || null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
        updateUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { login, logout, updateUser } = authSlice.actions;

export { storedToken };

export default authSlice.reducer;
