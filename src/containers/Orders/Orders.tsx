import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectOrders, selectOrdersLoading} from '../../store/admin/adminSlice';
import Spinner from '../../components/Spinner/Spinner';
import OrderList from './OrderList';
import {fetchDishes, fetchOrders} from '../../store/admin/adminThunks';

const Orders: React.FC = () => {
  const orderLoading = useAppSelector(selectOrdersLoading);
  const orders = useAppSelector(selectOrders);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    void dispatch(fetchDishes());
    void dispatch(fetchOrders());
  }, [dispatch]);
  
  
  return (
    <div className="row">
      {orderLoading ? <Spinner/> :
        orders.length > 0 &&
        orders.map((order) => (
          <OrderList
            key={order.id}
            dishes={order.dishes}
            orderId={order.id}
          />
        ))}
    </div>
  );
};

export default Orders;