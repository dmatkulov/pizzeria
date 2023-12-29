import React from 'react';
import {Cart} from '../../types';

interface Props {
  order: Cart;
}
const OrderItem: React.FC<Props> = ({order}) => {
  const price = +order.dish.price * order.amount;
  
  return (
    <div className="d-flex justify-content-between align-items-center pb-3 mb-3 border-bottom">
      <div
        className="col-2"
      >
        × {order.amount}
      </div>
      <div
        className="col-5"
      >
        {order.dish.title}
      </div>
      
      <strong
        className="col-3 text-start">
        {price} KGS
      </strong>
    </div>
  );
};

export default OrderItem;