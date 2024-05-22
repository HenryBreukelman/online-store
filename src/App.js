
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Form from './pages/Form';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/form' element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
