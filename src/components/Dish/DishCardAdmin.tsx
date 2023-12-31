import React from 'react';
import {Dish} from '../../types';
import {Link} from 'react-router-dom';
import {defaultImage} from '../../lib/constants';
import ButtonSpinner from '../Spinner/ButtonSpinner';

interface Props {
  pizza: Dish;
  deleteLoading: boolean | string;
  onDelete: React.MouseEventHandler;
}

const DishCardAdmin: React.FC<Props> = ({pizza, deleteLoading, onDelete}) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-2 me-3">
          <img src={pizza.image ? pizza.image : defaultImage} className="img-fluid rounded-start" alt={pizza.title}/>
        </div>
        <div className="card-body col-8 row d-flex align-items-center">
          <h5 className="card-title col-5 m-0">{pizza.title}</h5>
          <p className="card-text col-4 m-0">{pizza.price} KGS</p>
          <div className="col-3 d-flex gap-2">
            <Link
              to={'/admin/dishes/edit-dish/' + pizza.id}
              className="btn btn-primary w-100"
            >Edit
            </Link>
            <button
              className="btn btn-danger w-100"
              disabled={deleteLoading ? deleteLoading === pizza.id : false}
              onClick={onDelete}
            >
              {deleteLoading && deleteLoading === pizza.id && (<ButtonSpinner/>)}
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishCardAdmin;