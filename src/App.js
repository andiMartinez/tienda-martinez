import React from 'react'
import './index.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import Challenge from './Components/Challenge';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from './Components/ItemDetailContainer';
import CartItemDetail from './Components/CartItemDetail';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Challenge />
      <Routes>
      <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a la Tienda!"/>}/>
      <Route path="/categories/:categoryId" element={<ItemListContainer greeting="¡Bienvenidos a la Tienda!"/>}/>
      <Route path="/detalle" element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<CartItemDetail/>}/>
      </Routes>
      </BrowserRouter>
  );
}
export default App;



