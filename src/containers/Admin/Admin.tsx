import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Admin: React.FC = () => {
  return (
    <>
      <header className="mb-5">
        <Navbar/>
      </header>
      <main className="container-md">
        AdminPage
      </main>
    </>
  );
};

export default Admin;