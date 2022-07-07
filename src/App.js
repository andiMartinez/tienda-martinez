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
      <Route path="/" element={<ItemListContainer greeting="¡Bienvenides a la tienda!"/>}/>
      <Route path="/categories/:categoryId" element={<ItemListContainer greeting="Categoria"/>}/>
      <Route path="/detalle/:id" element={<ItemDetailContainer greeting="Detalle del producto"/>}/>
      <Route path="/cart" element={<CartItemDetail/>}/>
      </Routes>
      </BrowserRouter>
  );
}
export default App;



