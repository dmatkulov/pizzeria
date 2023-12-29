import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectDeleteLoading, selectDishes, selectFetchLoading} from '../../store/adminSlice';
import Spinner from '../../components/Spinner/Spinner';
import {fetchDishes} from '../../store/adminThunks';
import {Link} from 'react-router-dom';
import DishCard from '../../components/Dish/DishCardAdmin';

const Dishes: React.FC = () => {
  const fetchLoading = useAppSelector(selectFetchLoading);
  const deleteLoading = useAppSelector(selectDeleteLoading);
  const dispatch = useAppDispatch();
  const dishes = useAppSelector(selectDishes);
  
  useEffect(() => {
    void dispatch(fetchDishes());
  }, [dispatch]);
  
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-5 pb-5 border-bottom">
        <h1>Dishes</h1>
        <Link
          to="/admin/dishes/add-new-dish"
          className="btn btn-primary"
        >
          Add new dish
        </Link>
      </div>
      {fetchLoading ? <Spinner/> : dishes.map((dish) => (
        <DishCard
          key={dish.id}
          pizza={dish}
          deleteLoading={deleteLoading}
        />
      ))}
    </>
  );
};

export default Dishes;