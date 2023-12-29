import {ApiDish, Cart, Dish} from '../../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {createDish, deleteDish, fetchDishes, fetchOneDish, updateDish} from './adminThunks';

interface AdminState {
  dishes: Dish[];
  dish: ApiDish | null;
  orders: Cart[];
  createLoading: boolean;
  fetchLoading: boolean;
  fetchOneLoading: boolean;
  isUpdating: boolean;
  fetchError: boolean;
  deleteLoading: false | string;
}

const initialState: AdminState = {
  dishes: [],
  dish: null,
  orders: [],
  createLoading: false,
  fetchLoading: false,
  fetchOneLoading: false,
  isUpdating: false,
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
    builder.addCase(updateDish.pending, (state) => {
      state.isUpdating = true;
    });
    builder.addCase(updateDish.fulfilled, (state) => {
      state.isUpdating = false;
    });
    builder.addCase(updateDish.rejected, (state) => {
      state.isUpdating = false;
    });
    builder.addCase(deleteDish.pending, (state, {meta}) => {
      state.deleteLoading = meta.arg;
    });
    builder.addCase(deleteDish.fulfilled, (state) => {
      state.deleteLoading = false;
    });
    builder.addCase(deleteDish.rejected, (state) => {
      state.deleteLoading = false;
    });
  }
});


export const adminReducers = adminSlice.reducer;

export const selectDishes = (state: RootState) => state.dishes.dishes;
export const selectDish = (state: RootState) => state.dishes.dish;
export const selectOrders= (state: RootState) => state.dishes.orders;
export const selectCreateLoading = (state: RootState) => state.dishes.createLoading;
export const selectFetchLoading = (state: RootState) => state.dishes.fetchLoading;
export const selectUpdating = (state: RootState) => state.dishes.isUpdating;
export const selectFetchOneLoading = (state: RootState) => state.dishes.fetchOneLoading;
export const selectDeleteLoading = (state: RootState) => state.dishes.deleteLoading;