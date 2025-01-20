'use client'
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter/CounterSlice'; // Example slice
import ProductReducer from "./slices/product/ProductSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: ProductReducer
  },
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
