import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutDefault from './layouts/layoutDefault';
import Home from './pages/Home';
import IphonePage from './pages/iPhone.page';
import DetailtProduct from './pages/DetailtProduct.page.js';
import CartDetail from './components/Cart/cartDetail.js';
import SamSungPage from './pages/samsung.page/index.js';
import OppoPage from './pages/oppo.page/index.js';
import Contact from './pages/contact.page/index.js';
import Order from './pages/order.page/index.js';
import Search from './pages/search/index.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/iphone" element={<IphonePage />}/>
          <Route path="/samsung" element={<SamSungPage />}/>
          <Route path="/oppo" element={<OppoPage />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/cart-detail" element={<CartDetail />} />
          <Route path="/order" element={<Order />}/>
          <Route path="/detail/:id" element={<DetailtProduct />}/>
          <Route path="/search/:keyword" element={<Search />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
