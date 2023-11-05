import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0, // Initial cart count
};

export const cartCountSlice = createSlice({
    name: 'cartCount',
    initialState,
    reducers: {
        setCartCount: (state, action) => {
            state.count = action.payload;
        },
    },
});

export const { setCartCount } = cartCountSlice.actions;

export default cartCountSlice.reducer;
