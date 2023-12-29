import {configureStore} from '@reduxjs/toolkit';
import {adminReducers} from '../store/adminSlice';

export const store = configureStore({
  reducer: {
    pizzas: adminReducers,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;