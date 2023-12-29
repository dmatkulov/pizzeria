import React from 'react';
import {defaultImage} from '../../lib/constants';
import {Dish} from '../../types';

interface Props {
  dish: Dish;
}
const DishCardUser: React.FC<Props> = ({dish}) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-2 me-3">
          <img src={dish.image ? dish.image : defaultImage} className="img-fluid rounded-start" alt={dish.title}/>
        </div>
        <div className="card-body col-8 row d-flex align-items-center">
          <h5 className="card-title col-5 m-0">{dish.title}</h5>
          <p className="card-text col-4 m-0">{dish.price} KGS</p>
        </div>
      </div>
    </div>
  );
};

export default DishCardUser;