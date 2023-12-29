import {configureStore} from '@reduxjs/toolkit';
import {adminReducers} from '../store/admin/adminSlice';
import {cartReducer} from '../store/cart/cartSlice';

export const store = configureStore({
  reducer: {
    dishes: adminReducers,
    cart: cartReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;