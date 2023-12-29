import React from 'react';
import {defaultImage} from '../../lib/constants';
import {Dish} from '../../types';
import {useAppDispatch} from '../../app/hooks';
import {addDish} from '../../store/cart/cartSlice';

interface Props {
  dish: Dish;
}

const DishCardUser: React.FC<Props> = ({dish}) => {
  const dispatch = useAppDispatch();
  
  const addDistToCart = () => {
    dispatch(addDish(dish));
  };
  
  return (
    <div
      className="card h-100"
      onClick={addDistToCart}
    >
      <div className="h-75 overflow-hidden">
        <img src={dish.image ? dish.image : defaultImage} className="card-img-top h-100" alt={dish.title}/>
      </div>
      <div className="card-body">
        <h5 className="card-title">{dish.title}</h5>
        <p className="card-text">{dish.price} KGS</p>
      </div>
    </div>
  );
};

export default DishCardUser;