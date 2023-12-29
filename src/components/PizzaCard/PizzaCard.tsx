import React from 'react';
import {Pizza} from '../../types';

interface Props extends React.PropsWithChildren{
  pizza: Pizza;
}
const PizzaCard: React.FC<Props> = ({pizza, children}) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={pizza.image} className="img-fluid rounded-start" alt={pizza.title}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{pizza.title}</h5>
            <p className="card-text">{pizza.price} KGS</p>
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;