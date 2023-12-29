import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDishes, selectFetchLoading} from '../../store/admin/adminSlice';
import {fetchDishes} from '../../store/admin/adminThunks';
import DishCardUser from '../../components/Dish/DishCardUser';
import Spinner from '../../components/Spinner/Spinner';
import Modal from '../../components/Modal/Modal';
import CartDishes from '../../components/Cart/CartDishes';
import Checkout from '../../components/Checkout/Checkout';

const Home: React.FC = () => {
  const fetchLoading = useAppSelector(selectFetchLoading);
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  
  useEffect(() => {
    void dispatch(fetchDishes());
  }, [dispatch]);
  
  return (
    <>
      <Checkout/>
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
        <div className="d-flex justify-content-between">
          <button>Order</button>
          <button
            className="btn btn-outline-danger w-100"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Home;