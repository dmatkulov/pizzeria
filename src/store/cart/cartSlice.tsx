import {Cart, Dish} from '../../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

interface CartState {
  cartDishes: Cart[];
  total: number;
  show: boolean;
}

const initialState: CartState = {
  cartDishes: [],
  total: 0,
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
      
      state.total = state.cartDishes.reduce((sum, cartDish) => {
        return sum + cartDish.amount * +cartDish.dish.price;
      }, 150);
    },
    deleteCartDish: (state, {payload: dish}: PayloadAction<Dish>) => {
      state.cartDishes = state.cartDishes.filter((cartDish) => {
        return cartDish.dish.id !== dish.id;
      });
      
      if (state.cartDishes.length > 0) {
        state.total = state.cartDishes.reduce((sum, cartDish) => {
          return sum + cartDish.amount * +cartDish.dish.price;
        }, 150);
      } else {
        state.total = 0;
      }
    },
    clearCart: (state) => {
      state.cartDishes = [];
    }
  }
});


export const cartReducer = cartSlice.reducer;

export const {
  setShowModal,
  addDish,
  deleteCartDish,
  clearCart,
} = cartSlice.actions;

export const selectCartDishes = (store: RootState) => store.cart.cartDishes;
export const selectModalShow = (state: RootState) => state.cart.show;
export const selectTotal = (state: RootState) => state.cart.total;