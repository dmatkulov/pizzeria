import React from 'react';
import {Cart} from '../../types';

interface Props {
  cartDish: Cart;
}

const CartItem: React.FC<Props> = ({cartDish}) => {
  const price = +cartDish.dish.price * cartDish.amount;

  return (
    <div className="row row-cols-4 border-bottom pb-2 mb-3">
        <div className="col-5">{cartDish.dish.title}</div>
        <div className="col-2">x{cartDish.amount}</div>
        <div className="col-3 text-start">
          {price} KGS
        </div>
        <button className="col-2 btn btn-danger ms-auto">Delete</button>
    </div>
  );
};

export default CartItem;