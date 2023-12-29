import React from 'react';
import {Link} from 'react-router-dom';

const PizzaMenu: React.FC = () => {
  return (
    <>
      <h1>Dishes</h1>
      <Link to='/admin/dishes/add-new-dish'>Add new dish</Link>
      Pizza list
    </>
  );
};

export default PizzaMenu;