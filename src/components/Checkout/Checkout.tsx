import React from 'react';
import {selectTotal, setShowModal} from '../../store/cart/cartSlice';
import {useAppDispatch, useAppSelector} from '../../app/hooks';

const Checkout: React.FC = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector(selectTotal);
  
  return (
      <div className="ms-auto mb-5 bg-body-tertiary rounded-3 px-3 py-4 d-flex align-items-center justify-content-between gap-2">
        Order total: {total - 150} KGS
        <button
          className="btn btn-primary"
          onClick={() => dispatch(setShowModal(true))}
        >
          Checkout
        </button>
      </div>
  );
};

export default Checkout;