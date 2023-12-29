import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectCreateLoading, selectDish, selectFetchOneLoading} from '../../store/adminSlice';
import {useNavigate, useParams} from 'react-router-dom';
import {fetchOneDish, updateDish} from '../../store/adminThunks';
import DishForm from '../../components/DishForm/DishForm';
import {ApiDish} from '../../types';
import Spinner from '../../components/Spinner/Spinner';
import {useSelector} from 'react-redux';

const EditDishForm: React.FC = () => {
  const {id} = useParams() as { id: string };
  const navigate = useNavigate();
  const dish = useAppSelector(selectDish);
  const dispatch = useAppDispatch();
  const dishLoading = useAppSelector(selectFetchOneLoading);
  const createLoading = useSelector(selectCreateLoading);
  
  useEffect(() => {
    void dispatch(fetchOneDish(id));
  }, [dispatch, id]);
  
  if (!dish) {
    return;
  }
  
  const onSubmit = async (dish: ApiDish) => {
    await dispatch(updateDish({id, dish}));
    navigate('/admin');
  };
  
  return (
    <div>
      {dishLoading && <Spinner/>}
      <DishForm
        onSubmitPizza={onSubmit}
        existingPizza={dish}
        isLoading={createLoading}
        isEdit
      />
    </div>
  );
};

export default EditDishForm;