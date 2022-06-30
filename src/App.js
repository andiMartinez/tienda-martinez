import React from 'react'
import './index.css';
import NavBar from '../src/Components/NavBar';
import ItemListContainer from '../src/Components/ItemListContainer';
import Challenge from '../src/Components/Challenge';
import ProductCard from './Components/ProductCard';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a la Tienda!"/>
      
      {/* <ProductCard stock={10} min={0} name="DUMMY PRODUCT"/> */}
      <Challenge />
    </>
  );
}
export default App;



