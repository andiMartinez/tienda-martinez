import React, { useContext } from "react";
import Checkout from "./Checkout";
import { cartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import { db } from "../firebase/firebase";
import { addDoc, collection, serverTimestamp, doc } from "firebase/firestore";

const CheckoutContainer = ({ greeting }) => {
  const { products, subtotal } = useContext(cartContext);
  const [idVenta, setIdVenta] = useState("");

  const datosComprador = {
    nombre: "Eva",
    apellido: "Peron",
    email: "adasda@gmail.com",
  };

  const finalizarCompra = () => {
    const ventasCollection = collection(db, "checkout");
    addDoc(ventasCollection, {
      datosComprador,
      items: products,
      date: serverTimestamp(),
      total: 500,
    }).then((result) => {
      setIdVenta(result.id);
    });
  };

  return (
    <div>
      <div className="landing text-center p-2 text-black bg-yellow-500 font-bold">
        <p>{greeting}</p>

        <Link to="/"> Click acá para volver a la tienda</Link>
      </div>
      <div className=" bg-white rounded shadow-2xl p-8 m-4">
        <div className=" text-2xl">
          <h3>Tu Pedido</h3>
        </div>
        {products.map((product) => (
          <Checkout key={product.id} products={product} subtotal={subtotal} />
        ))}
        <h4>{subtotal}</h4>
      </div>

      <div class="h-1/4 mx-6 flex justify-auto bg-white rounded shadow-2xl p-8 m-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="justify-start text-2xl">
            <h3>Tu Pedido</h3>
          </div>
          <div className="text-right self-center">
            <h1>Tus Datos </h1>
            <h1>Nombre: {datosComprador.nombre}</h1>
            <h1>Apellido: {datosComprador.apellido}</h1>
            <h1>Email: {datosComprador.email}</h1>
          </div>
          <div className="content-center">
            <img
              src="https://image.shutterstock.com/image-photo/yellow-crash-test-dummy-car-260nw-1093424603.jpg"
              width="100"
              height={100}
            ></img>
          </div>
        </div>
      </div>
      <div class="flex h-screen w-full bg-white">
        <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
          <Link to="/fin">
            <button
              onClick={finalizarCompra}
              class="block bg-yellow-500 hover:bg-yellow-600 text-white uppercase text-lg mx-auto p-4 rounded"
            >
              Terminar Compra
            </button>
          </Link>
          <a
            class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
            href="/"
          >
            ¿Queres volver al carrito?
          </a>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContainer;
