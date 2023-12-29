import Layout from './components/Layout/Layout';
import Admin from './containers/Admin/Admin';
import {Route, Routes} from 'react-router-dom';

function App() {
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/admin" element={<Admin/>} />
          <Route path="*" element={<h2>Not found</h2>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
