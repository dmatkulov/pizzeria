import {Route, Routes} from 'react-router-dom';
import AdminPage from './containers/AdminPage/AdminPage';
import AddDishForm from './containers/AddDish/AddDishForm';
import AdminLayout from './components/AdminLayout/AdminLayout';
import EditDishForm from './containers/EditDishForm/EditDishForm';

function App() {
  
  return (
    <>
      <AdminLayout>
        <Routes>
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/admin/dishes" element={<AdminPage/>} />
          <Route path="/admin/dishes/add-new-dish" element={<AddDishForm/>} />
          <Route path="/admin/dishes/edit-dish/:id" element={<EditDishForm/>} />
          <Route path="*" element={<h2>Not found</h2>}/>
        </Routes>
      </AdminLayout>
    </>
  );
}

export default App;
