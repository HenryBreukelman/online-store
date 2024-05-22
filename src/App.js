
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Product from './pages/Product';

function App() {
  return (
    <main>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path='/product' element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </main>
  );
}

export default App;
