import React, {useState} from 'react';
import {ApiDish} from '../../types';
import ButtonSpinner from '../Spinner/ButtonSpinner';
import {Link} from 'react-router-dom';

const initialState: ApiDish = {
  title: '',
  image: '',
  price: '',
};

interface Props {
  onSubmitPizza: (pizza: ApiDish) => void;
  existingPizza?: ApiDish;
  isEdit?: boolean;
  isLoading?: boolean;
}

const DishForm: React.FC<Props> = ({onSubmitPizza, existingPizza = initialState, isEdit, isLoading}) => {
  const [pizza, setPizza] = useState<ApiDish>(existingPizza);
  
  const changePizza = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPizza(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmitPizza({...pizza});
  };
  
  return (
    <form className="col-md" onSubmit={onFormSubmit}>
      <h2 className="mb-5 border-bottom">
        {isEdit ? 'Edit dish' : 'Create new dish'}
      </h2>
      <div className="form-group mb-3">
        <label htmlFor="title" className="col-3">Title</label>
        <input
          required
          type="text"
          name="title"
          id="title"
          className="form-control"
          value={pizza.title}
          onChange={changePizza}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="title" className="col-3">Image</label>
        <input
          required
          type="text"
          name="image"
          id="image"
          className="form-control"
          value={pizza.image}
          onChange={changePizza}
        />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="title" className="col-3">Price</label>
        <input
          required
          type="text"
          name="price"
          id="price"
          className="form-control"
          value={pizza.price}
          onChange={changePizza}
        />
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-success me-3"
          disabled={isLoading}
        >
          {isLoading && <ButtonSpinner/>}
          {isEdit ? 'Edit' : 'Create'}
        </button>
        <Link to='/admin' className="btn btn-link">
          Back to Admin panel
        </Link>
      </div>
    </form>
  );
};

export default DishForm;