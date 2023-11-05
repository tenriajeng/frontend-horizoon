import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    total: 0, // Initial total price
};

export const totalPriceSlice = createSlice({
    name: 'totalPrice',
    initialState,
    reducers: {
        addToTotal: (state, action) => {
            state.total = action.payload;
        },
        subtractFromTotal: (state, action) => {
            state.total = action.payload;
        },
    },
});

export const { addToTotal, subtractFromTotal } = totalPriceSlice.actions;

export default totalPriceSlice.reducer;
