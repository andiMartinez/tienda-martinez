import React from 'react'
import './index.css';
import NavBar from '../src/Components/NavBar';
import ItemListContainer from '../src/Components/ItemListContainer';
import Challenge from '../src/Components/Challenge';
import ProductCard from './Components/ProductCard';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Challenge />
      <Routes>
      <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a la Tienda!"/>}/>
      <Route path="/categories/:categoryId" element={<ItemListContainer greeting="¡Bienvenidos a la Tienda!"/>}/>
      <Route path="/products/:productId" element={<ItemListContainer greeting="¡Bienvenidos a la Tienda!"/>}/>
      <Route path="/cart" element={""}/>
 
      
      </Routes>
     
      {/* <ProductCard stock={10} min={0} name="DUMMY PRODUCT"/> */}
      
      </BrowserRouter>
  );
}
export default App;



