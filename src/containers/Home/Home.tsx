import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDishes, selectFetchLoading} from '../../store/admin/adminSlice';
import {fetchDishes} from '../../store/admin/adminThunks';
import DishCardUser from '../../components/Dish/DishCardUser';
import Spinner from '../../components/Spinner/Spinner';
import Modal from '../../components/Modal/Modal';
import CartDishes from '../../components/Cart/CartDishes';
import Checkout from '../../components/Checkout/Checkout';
import {selectTotal} from '../../store/cart/cartSlice';

const Home: React.FC = () => {
  const fetchLoading = useAppSelector(selectFetchLoading);
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  const total = useAppSelector(selectTotal);
  
  useEffect(() => {
    void dispatch(fetchDishes());
  }, [dispatch]);
  
  return (
    <>
      {total > 0 && <Checkout/>}
      <div className="row">
        {fetchLoading ? <Spinner/> : dishes.map((dish) => (
          <div key={dish.id} className="col-3">
            <DishCardUser
              dish={dish}
            />
          </div>
        ))}
      </div>
      <Modal>
        <CartDishes/>
      </Modal>
    </>
  );
};

export default Home;