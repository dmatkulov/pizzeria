import {Pizza} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

interface AdminState {
  pizzas: Pizza[];
  createLoading: boolean;
  fetchLoading: boolean;
  fetchError: boolean;
  updateLoading: boolean;
  deleteLoading: false | string;
}

const initialState: AdminState = {
  pizzas: [],
  createLoading: false,
  fetchLoading: false,
  fetchError: false,
  updateLoading: false,
  deleteLoading: false
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
});

export const adminReducers = adminSlice.reducer;
export const selectCreateLoading = (state: RootState) => state.pizzas.createLoading;
export const selectFetchLoading = (state: RootState) => state.pizzas.fetchLoading;
export const selectUpdateLoading = (state: RootState) => state.pizzas.updateLoading;
export const selectDeleteLoading = (state: RootState) => state.pizzas.deleteLoading;