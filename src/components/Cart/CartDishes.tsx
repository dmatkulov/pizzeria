import React from 'react';
import CartItem from './CartItem';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {
  clearCart,
  selectCartDishes,
  selectOrderLoading,
  selectTotal,
  setShowModal,
  setTotal
} from '../../store/cart/cartSlice';
import {ApiOrder, Cart} from '../../types';
import {orderDish} from '../../store/cart/cartThunks';
import ButtonSpinner from '../Spinner/ButtonSpinner';

const CartDishes: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartDishes = useAppSelector(selectCartDishes);
  const orderLoading = useAppSelector(selectOrderLoading);
  const total = useAppSelector(selectTotal);
  
  const submitOrder = async () => {
    const newDishes: ApiOrder = cartDishes.reduce((acc, cartDish: Cart) => {
      const id = cartDish.dish.id;
      const amount = cartDish.amount;
      return {...acc, [id]: amount};
    }, {});
    
    await dispatch(orderDish(newDishes));
    dispatch(clearCart());
    dispatch(setShowModal(false));
    dispatch(setTotal());
  };
  
  let cart = (
    <>
      <p className="mb-5">Cart is empty! Add something!</p>
      <button
        className="btn btn-outline-secondary w-100"
        onClick={() => dispatch(setShowModal(false))}
      >
        Close
      </button>
    </>);
  
  if (cartDishes.length > 0) {
    cart = (
      <>
        {cartDishes.map((cartDish) => (
          <CartItem key={cartDish.dish.id} cartDish={cartDish}/>
        ))}
        <div className="text-end mb-3">
          <p className="mb-1">
            Delivery: <strong>150 KGS</strong>
          </p>
          <p className="mb-0">
            Total: <strong>{total} KGS</strong>
          </p>
        </div>
        <div className="d-flex justify-content-between gap-3">
          <button
            type="button"
            className="btn btn-outline-danger w-100"
            onClick={() => dispatch(setShowModal(false))}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={submitOrder}
            disabled={orderLoading}
          >
            {orderLoading && <ButtonSpinner/>}
            Order
          </button>
        </div>
      </>
    );
  }
  
  return (
    <div className="mb-4">
      {cart}
    </div>
  );
};

export default CartDishes;