
import './App.css';
import NavBar from './components/NavBar/NavBar';
import  ItemListContainer from './components/ItemListContainer/ItemListContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import "bulma/css/bulma.css"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element ={ <ItemListContainer />} />
          <Route path='/item/:itemId' element ={ <ItemDetailContainer />} />
          <Route path= '/Cart' element= {<Cart />} />
          <Route path='/checkout' element = {<Checkout/>} />
          <Route path='*' element={<h1> 404 NOT FOUND</h1>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );

}

export default App;