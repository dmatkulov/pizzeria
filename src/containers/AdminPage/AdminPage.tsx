import {Route, Routes} from 'react-router-dom';
import PizzaMenu from './PizzaMenu';
import AdminLayout from '../../components/AdminLayout/AdminLayout';

function App() {
  
  return (
    <>
      <AdminLayout>
        <Routes>
          <Route path="/admin" element={<PizzaMenu/>} />
          <Route path="/admin/dishes/add-new-dish" element={<PizzaMenu/>} />
          <Route path="*" element={<h2>Not found</h2>}/>
        </Routes>
      </AdminLayout>
    </>
  );
}

export default App;
