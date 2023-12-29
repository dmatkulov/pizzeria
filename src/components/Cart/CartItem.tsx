import React from 'react';
import {Cart} from '../../types';

interface Props {
  cartDish: Cart;
}

const CartItem: React.FC<Props> = ({cartDish}) => {
  const price = +cartDish.dish.price * cartDish.amount;

  return (
    <div className="card mb-2 p-2">
      <div className="row align-items-center">
        <div className="col">{cartDish.dish.title}</div>
        <div className="col-2">x{cartDish.amount}</div>
        <div className="col-3 text-end">
          {price} KGS
        </div>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default CartItem;