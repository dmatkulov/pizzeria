import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiOrder} from '../../types';
import axiosApi from '../../axiosApi';

export const orderDish = createAsyncThunk<void, ApiOrder>(
  'cart/orders',
  async (cartDishes) => {
    await axiosApi.post('/orders.json', cartDishes);
  }
);
