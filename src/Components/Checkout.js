import React, { useContext } from "react";

const Checkout = ({ products, subtotal }) => {
  return (
    <>
      <div className="h-1/4 flex justify-start bg-white rounded shadow-2xl p-8 m-4">
        <h1>Precio: {products.price}</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-right self-center">
            <h1>{products.name}</h1>
          </div>
          <div className="content-center">
            <img src={products.image} width="100" height={100}></img>
          </div>
          <div>
            <h1>Cantidad {products.qty}</h1>
          </div>
        </div>
        <div>subtotal{subtotal()}</div>
      </div>
    </>
  );
};

export default Checkout;
