import {ApiDish, Dish} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import {createDish, fetchDishes, fetchOneDish} from './adminThunks';

interface AdminState {
  dishes: Dish[];
  dish: ApiDish | null;
  createLoading: boolean;
  fetchLoading: boolean;
  fetchOneLoading: boolean;
  fetchError: boolean;
  deleteLoading: false | string;
}

const initialState: AdminState = {
  dishes: [],
  dish: null,
  createLoading: false,
  fetchLoading: false,
  fetchOneLoading: false,
  fetchError: false,
  deleteLoading: false
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createDish.pending, (state) => {
      state.createLoading = true;
    });
    builder.addCase(createDish.fulfilled, (state) => {
      state.createLoading = false;
    });
    builder.addCase(createDish.rejected, (state) => {
      state.createLoading = false;
    });
    builder.addCase(fetchDishes.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchDishes.fulfilled, (state, {payload: dishes}) => {
      state.fetchLoading = false;
      state.dishes = dishes;
    });
    builder.addCase(fetchDishes.rejected, (state) => {
      state.fetchLoading = false;
      state.fetchError = true;
    });
    builder.addCase(fetchOneDish.pending, (state) => {
      state.fetchOneLoading = true;
    });
    builder.addCase(fetchOneDish.fulfilled, (state, {payload: dish}) => {
      state.fetchOneLoading = false;
      state.dish = dish;
    });
    builder.addCase(fetchOneDish.rejected, (state) => {
      state.fetchOneLoading = false;
    });
  }
});

export const adminReducers = adminSlice.reducer;

export const selectDishes = (state: RootState) => state.pizzas.dishes;
export const selectDish = (state: RootState) => state.pizzas.dish;
export const selectCreateLoading = (state: RootState) => state.pizzas.createLoading;
export const selectFetchLoading = (state: RootState) => state.pizzas.fetchLoading;
export const selectFetchOneLoading = (state: RootState) => state.pizzas.fetchOneLoading;
export const selectDeleteLoading = (state: RootState) => state.pizzas.deleteLoading;