import {createAsyncThunk} from '@reduxjs/toolkit';
import {ApiDish, ApiOrder, ApiOrders, Dish, DishesList} from '../../types';
import axiosApi from '../../axiosApi';

export const createDish = createAsyncThunk<void, ApiDish>(
  'dishes/create',
  async (pizza: ApiDish) => {
    await axiosApi.post('/dishes.json', pizza);
  }
);

export const fetchDishes = createAsyncThunk<Dish[], undefined>(
  'dishes/fetchAll',
  async () => {
    const dishesResponse = await axiosApi.get<DishesList | null>('/dishes.json');
    const dishes = dishesResponse.data;
    
    if (!dishes) {
      return [];
    }
    
    const fetchedDishes: Dish[] = Object.keys(dishes).map((id) => {
      const dish = dishes[id];
      return {
        id,
        ...dish
      };
    });
    
    return fetchedDishes;
  }
);

export const fetchOrders = createAsyncThunk<ApiOrder[], undefined>(
  'orders/fetchAll',
  async () => {
    const ordersResponse = await axiosApi.get<ApiOrders | null>('/orders.json');
    const orders = ordersResponse.data;
    
    if (!orders) {
      return [];
    }
    
    const newOrders: ApiOrder[] = Object.keys(orders).map((id) => orders[id]);
    return newOrders;
  }
);

interface updateDishParams {
  id: string;
  dish: ApiDish;
}

export const updateDish = createAsyncThunk<void, updateDishParams>(
  'dishes/update',
  async ({id, dish}) => {
    await axiosApi.put('/dishes/' + id + '.json', dish);
  }
);

export const fetchOneDish = createAsyncThunk<ApiDish, string>(
  'dishes/fetchOne',
  async (id) => {
    const dishResponse = await axiosApi.get<ApiDish | null>('/dishes/' + id + '.json');
    const dish = dishResponse.data;
    
    if (dish === null) {
      throw new Error('Not found');
    }
    
    return dish;
  }
);

export const deleteDish = createAsyncThunk<void, string>(
  'dishes/delete',
  async (id) => {
    await axiosApi.delete('/dishes/' + id + '.json');
  }
);