'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import authReducer from './features/authSclice';
import totalPriceReducer from './features/totalPriceSlice';
import cartCountReducer from './features/cartCountSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    totalPrice: totalPriceReducer,
    cartCount: cartCountReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
