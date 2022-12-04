import { useContext } from 'react';
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AutoComplete from './materialSample/AutoComplete';
import DataDisplay from './materialSample/DataDisplay';
import ProductTable from './materialSample/ProductTable';
import SupplyTable from './materialSample/SupplyTable';
import IdHooksSample from './otherHooks/IdHooksSample';
import LayoutHookSample from './otherHooks/LayoutHookSample';
import RefHookSample from './otherHooks/RefHookSample';
import About from './RouterSample/About';
import CartPage from './RouterSample/CartPage';
import Contact from './RouterSample/Contact';
import Homepage from './RouterSample/Homepage';
import NoMatch from './RouterSample/NoMatch';
import ProductDetail from './RouterSample/ProductDetail';
import ProductList from './RouterSample/ProductList';
import { cartContext } from './store/cartContext';

function App() {
  const { cart, setCart } = useContext(cartContext);

  let totalPrice = 0;

  cart.forEach((element) => {
    totalPrice += element.price * element.quantity;
  });

  return (
    <>
      <h1>Site Header</h1>
      <h1>Cart Count: {cart.length}</h1>
      <h1>Total Price: {totalPrice.toFixed(2)}</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/datadisplay'>Data Display</Link>
        </li>
        <li>
          <Link to='/producttable'>Product Table</Link>
        </li>
        <li>
          <Link to='/autocomplete'>AutoComplete</Link>
        </li>
        <li>
          <Link to='/supplytable'>Supply Table</Link>
        </li>
        <li>
          <Link to='/cart'>Cart</Link>
        </li>
        <li>
          <Link to='/refsample'>useRef</Link>
        </li>
        <li>
          <Link to='/layouthook'>layoutHook</Link>
        </li>
        <li>
          <Link to='/idhook'>idHook</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/products' element={<ProductList />}></Route>
        <Route path='/products/:id' element={<ProductDetail />}></Route>
        <Route path='/datadisplay' element={<DataDisplay />}></Route>
        <Route path='/producttable' element={<ProductTable />}></Route>
        <Route path='/autocomplete' element={<AutoComplete />}></Route>
        <Route path='/supplytable' element={<SupplyTable />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/refsample' element={<RefHookSample />}></Route>
        <Route path='/layouthook' element={<LayoutHookSample />}></Route>
        <Route path='/idhook' element={<IdHooksSample />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
      <h1>Site Footer</h1>
    </>
  );
}

export default App;
