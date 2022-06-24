import React from 'react'
import './index.css';
import NavBar from '../src/Components/NavBar';
import ItemListContainer from '../src/Components/ItemListContainer';
import Challenge from '../src/Components/Challenge';

function App() {
  return (
    <>
      
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a la Tienda!" />
      <Challenge />
      
    </>
  );
}
export default App;



