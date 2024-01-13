import React from 'react';
import {Cart} from '../../types';

interface Props {
  dish: Cart;
}
const OrderItem: React.FC<Props> = ({dish}) => {
  const price = +dish.dish.price * dish.amount;
  
  return dish && (
    <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom">
      <div
        className="col-2"
      >
        × {dish.amount}
      </div>
      <div
        className="col-5"
      >
        {dish.dish.title}
      </div>
      
      <strong
        className="col-3 text-start">
        {price} KGS
      </strong>
    </div>
  );
};

export default OrderItem;