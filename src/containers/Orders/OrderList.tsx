import React, {useCallback} from 'react';
import {Cart} from '../../types';
import OrderItem from './OrderItem';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {deleteOrder, fetchDishes, fetchOrders} from '../../store/admin/adminThunks';
import {deleteOrderLoading} from '../../store/admin/adminSlice';
import ButtonSpinner from '../../components/Spinner/ButtonSpinner';

interface Props {
  dishes: Cart[];
  orderId: string;
}

const OrderList: React.FC<Props> = ({dishes, orderId}) => {
  const dispatch = useAppDispatch();
  const deleteLoading = useAppSelector(deleteOrderLoading);
  
  const onDeleteOrder = useCallback(async () => {
    await dispatch(deleteOrder(orderId));
    dispatch(fetchDishes());
    dispatch(fetchOrders());
  }, [dispatch, orderId]);
  
  const price = dishes.reduce((acc, dish) => {
    return acc + dish.amount * +dish.dish.price;
  }, 0);
  
  return (
    <div className="card col-9 mx-auto d-flex flex-row justify-content-between mb-4 pt-3">
      <div className="col-8">
        {dishes.map((dish) => (
          <OrderItem dish={dish} key={dish.dish.id}/>
        ))}
      </div>
      <div>
        <h5>Order total</h5>
        <p>{price} KGS</p>
        <button
          className="btn btn-link"
          onClick={onDeleteOrder}
          disabled={deleteLoading ? deleteLoading === orderId : false}
        >
          {deleteLoading && deleteLoading === orderId && <ButtonSpinner/>}
          Complete order
        </button>
      </div>
    </div>
  );
};

export default OrderList;