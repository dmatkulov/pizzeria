import React from 'react';
import DishForm from '../../components/DishForm/DishForm';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../app/hooks';
import {useSelector} from 'react-redux';
import {selectCreateLoading} from '../../store/adminSlice';
import {ApiDish} from '../../types';
import {createDish, fetchDishes} from '../../store/adminThunks';

const AddPizza: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const createLoading = useSelector(selectCreateLoading);
  
  const onSubmit = async (pizza: ApiDish) => {
    await dispatch(createDish(pizza));
    await dispatch(fetchDishes());
    navigate('/admin/dishes');
  };
  
  return (
    <div>
      <DishForm
        onSubmitPizza={onSubmit}
        isLoading={createLoading}
      />
    </div>
  );
};

export default AddPizza;