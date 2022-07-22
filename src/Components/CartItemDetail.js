import { cartContext } from "../Context/CartContext";
import React, { useContext } from "react";

const CartItemDetail = ({ products }) => {
  const { deleteProducts } = useContext(cartContext);
  return (
    <div className="flex justify-center">
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            <li key={products.id} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={products.image}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900 ">
                    <h3>
                      <a> {products.name} </a>
                    </h3>
                    <p className="ml-4">Precio: ${products.price}</p>
                  </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="text-gray-500">Cantidad: {products.qty}</p>

                  <div className="">
                    <button
                      onClick={() => deleteProducts(products.id)}
                      className="font-medium text-yellow-600 hover:text-indigo-500"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CartItemDetail;
