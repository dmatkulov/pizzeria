import React, {useEffect} from 'react';
import {fetchOrders} from '../../store/admin/adminThunks';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectOrders} from '../../store/admin/adminSlice';
import OrderItem from './OrderItem';
import {selectOrderLoading} from '../../store/cart/cartSlice';
import Spinner from '../../components/Spinner/Spinner';

const Orders: React.FC = () => {
  const dispatch = useAppDispatch();
  const orderLoading = useAppSelector(selectOrderLoading);
  
  const orders = useAppSelector(selectOrders);
  
  useEffect(() => {
    void dispatch(fetchOrders());
  }, [dispatch]);
  
  return (
    <div className="row">
      {orderLoading && <Spinner/>}
      <div className="col-8">
        {orders.map((order) => (
          <OrderItem order={order} key={order.dish.id}/>
        ))}
      </div>
      <div className="col-4">
        <h5>Order total</h5>
        <p> KGS</p>
        <button
          className="btn btn-link"
        >
          Complete order
        </button>
      </div>
    </div>
  );
};

export default Orders;