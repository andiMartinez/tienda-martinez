import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import Challenge from "./Components/Challenge";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import CartItemDetail from "./Components/CartItemDetail";
import CartCustomProvider from "./Context/CartContext";
import CartDetail from "./Components/CartDetail";
import Checkout from "./Components/Checkout";
import CheckoutContainer from "./Components/CheckoutContainer";
import Thanks from "./Components/Thanks";
function App() {
  return (
    <BrowserRouter>
      <Challenge />
      <CartCustomProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenides a la tienda!" />}
          />
          <Route
            path="/categories/:categoryId"
            element={<ItemListContainer greeting="Categoria" />}
          />
          <Route
            path="/detalle/:id"
            element={<ItemDetailContainer greeting="Detalle del producto" />}
          />
          <Route
            path="/cart"
            element={<CartDetail greeting="¡Tu carrito esta vacio!" />}
          />
          <Route
            path="/checkout"
            element={
              <CheckoutContainer greeting="¡Estas a un paso de finalizar tu compra!" />
            }
          />
          <Route
            path="/fin"
            element={<Thanks greeting="¡Gracias por su compra!" />}
          />
        </Routes>
      </CartCustomProvider>
    </BrowserRouter>
  );
}
export default App;
