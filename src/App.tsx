import {Route, Routes} from 'react-router-dom';
import AdminPage from './containers/AdminPage/AdminPage';
import AddDishForm from './containers/AddDish/AddDishForm';
import Layout from './components/Layout/Layout';
import EditDishForm from './containers/EditDishForm/EditDishForm';
import Home from './containers/Home/Home';
import Orders from './containers/Orders/Orders';

function App() {
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/admin/dishes" element={<AdminPage/>} />
          <Route path="/admin/orders" element={<Orders/>} />
          <Route path="/admin/dishes/add-new-dish" element={<AddDishForm/>} />
          <Route path="/admin/dishes/edit-dish/:id" element={<EditDishForm/>} />
          <Route path='/' element={<Home/>}/>
          <Route path="*" element={<h2>Not found</h2>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
