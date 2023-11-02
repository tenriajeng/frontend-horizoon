'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import authReducer from './features/authSclice';

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer,
    //add all your reducers here
});

export const store = configureStore({
    reducer: rootReducer,
});
