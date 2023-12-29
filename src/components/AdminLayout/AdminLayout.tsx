import React, {PropsWithChildren} from 'react';
import Navbar from '../Navbar/Navbar';

const AdminLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <header className="mb-5">
        <Navbar/>
      </header>
      <main className="container-md">
        {children}
      </main>
    </>
  );
};

export default AdminLayout;