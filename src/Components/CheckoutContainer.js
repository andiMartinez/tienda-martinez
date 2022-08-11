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
          <Checkout
            key={product.id}
            products={product}
            subtotal={subtotal}
            idVenta={idVenta}
          />
        ))}
        <h4>{subtotal}</h4>
      </div>

      <div class="h-1/4 mx-6 flex justify-auto rounded shadow-2xl p-8 m-4">
        <div className=" text-2xl">
          <h3>Tus Datos</h3>
        </div>
        <div className="p-6 mx-16">
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="first-name">Nombre</label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="form-input px-3 py-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="last-name">Apellido</label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="form-input px-3 py-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input px-3 py-2 rounded-md"
                  required
                />
              </div>
            </div>
          </form>
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
