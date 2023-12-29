import {Cart, Dish} from '../../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

interface CartState {
  cartDishes: Cart[];
  show: boolean;
}

const initialState: CartState = {
  cartDishes: [],
  show: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },
    addDish: (state, {payload: dish}: PayloadAction<Dish>) => {
      const index = state.cartDishes.findIndex(cartDish => cartDish.dish.id === dish.id);
      
      if (index !== -1) {
        state.cartDishes[index].amount++;
      } else {
        state.cartDishes.push({
          amount: 1,
          dish
        });
      }
    }
  }
});


export const cartReducer = cartSlice.reducer;

export const {
  setShowModal,
  addDish,
} = cartSlice.actions;

export const selectCartDishes = (store: RootState) => store.cart.cartDishes;
export const selectModalShow = (state: RootState) => state.cart.show;
