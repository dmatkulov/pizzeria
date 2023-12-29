import React from 'react';
import CartItem from './CartItem';
import {useAppSelector} from '../../app/hooks';
import {selectCartDishes} from '../../store/cart/cartSlice';

const CartDishes: React.FC = () => {
  const cartDishes = useAppSelector(selectCartDishes);
  
  const total = cartDishes.reduce((sum, cartDish) => {
    return sum + cartDish.amount * +cartDish.dish.price;
  }, 150);
  
  let cart = <p>Cart is empty! Add something!</p>;
  
  if (cartDishes.length > 0) {
    cart = (
      <>
        {cartDishes.map((cartDish) => (
          <CartItem key={cartDish.dish.id} cartDish={cartDish}/>
        ))}
        <div>
          <div>
            Delivery: <strong>150 KGS</strong>
          </div>
          <div>
            Total: <strong>{total} KGS</strong>
          </div>
        </div>
      </>
    );
  }
  
  return (
    <>
      {cart}
    </>
  );
};

export default CartDishes;