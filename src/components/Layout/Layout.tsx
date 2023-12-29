import React, {PropsWithChildren} from 'react';
import AdminNavbar from '../Navbar/AdminNavbar';
import {useLocation} from 'react-router-dom';
import UserNavbar from '../Navbar/UserNavbar';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  const location = useLocation();
  const isOnAdminPage = location.pathname.startsWith('/admin');
  return (
    <>
      <header className="mb-5">
        {isOnAdminPage ? <AdminNavbar/> : <UserNavbar/>}
      </header>
      <main className="container-md">
        {children}
      </main>
    </>
  );
};

export default Layout;