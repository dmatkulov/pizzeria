import React from 'react';
import {Link} from 'react-router-dom';

const UserNavbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-md">
        <Link to='/' className="navbar-brand">Turtle pizza</Link>
      </div>
    </nav>
  );
};

export default UserNavbar;