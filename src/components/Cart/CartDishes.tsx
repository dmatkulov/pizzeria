import React from 'react';
import CartItem from './CartItem';
import {useAppSelector} from '../../app/hooks';
import {selectCartDishes, selectTotal} from '../../store/cart/cartSlice';

const CartDishes: React.FC = () => {
  const cartDishes = useAppSelector(selectCartDishes);
  const total = useAppSelector(selectTotal);
  
  let cart = <p>Cart is empty! Add something!</p>;
  
  if (cartDishes.length > 0) {
    cart = (
      <>
        {cartDishes.map((cartDish) => (
          <CartItem key={cartDish.dish.id} cartDish={cartDish}/>
        ))}
        <div className="text-end">
          <p className="mb-1">
            Delivery: <strong>150 KGS</strong>
          </p>
          <p className="mb-0">
            Total: <strong>{total} KGS</strong>
          </p>
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