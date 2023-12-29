import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-md">
        <span className="navbar-brand">Turtle pizza Admin</span>
        
        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/admin/dishes" className="nav-link">Dishes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/orders" className="nav-link">Orders</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;