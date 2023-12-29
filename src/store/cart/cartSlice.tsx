import {Cart, Dish} from '../../types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {orderDish} from './cartThunks';

interface CartState {
  cartDishes: Cart[];
  total: number;
  orderLoading: boolean;
  show: boolean;
}

const initialState: CartState = {
  cartDishes: [],
  total: 0,
  orderLoading: false,
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
    },
    deleteCartDish: (state, {payload: dish}: PayloadAction<Dish>) => {
      state.cartDishes = state.cartDishes.filter((cartDish) => {
        return cartDish.dish.id !== dish.id;
      });
    },
    setTotal: (state) => {
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
  },
  extraReducers: builder => {
    builder.addCase(orderDish.pending, (state) => {
      state.orderLoading = true;
    });
    builder.addCase(orderDish.fulfilled, (state) => {
      state.orderLoading = false;
    });
    builder.addCase(orderDish.rejected, (state) => {
      state.orderLoading = false;
    });
  }
});

export const cartReducer = cartSlice.reducer;
export const {
  setShowModal,
  addDish,
  deleteCartDish,
  setTotal,
  clearCart,
} = cartSlice.actions;

export const selectCartDishes = (store: RootState) => store.cart.cartDishes;
export const selectModalShow = (state: RootState) => state.cart.show;
export const selectTotal = (state: RootState) => state.cart.total;

export const selectOrderLoading = (state: RootState) => state.cart.orderLoading;