import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContext";
import CartItemDetail from "./CartItemDetail";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import Checkout from "./Checkout";

const CartDetail = ({ greeting }) => {
  const { products, subtotal } = useContext(cartContext);
  const [idVenta, setIdVenta] = useState("");

  if (products.length === 0) {
    return (
      <div className="landing text-center p-2 text-black bg-yellow-500 font-bold">
        <p>{greeting}</p>
        <Link to="/"> Click acá para volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div>
      {products.map((product) => (
        <CartItemDetail key={product.id} products={product} />
      ))}
      <div
        className="my-10 text-bold justify-center text-black bg-yellow-500
                             font-medium rounded-lg text-center bg-contain
                             "
      >
        Total: ${subtotal()}
      </div>
      <div className="flex justify-center">
        <Link to="/" className="text-">
          Volver a la tienda
        </Link>
      </div>
      <div className="flex justify-center">
        <Link to="/checkout">
          <h1>Ir al pago</h1>
        </Link>
      </div>
    </div>
  );
};

export default CartDetail;
