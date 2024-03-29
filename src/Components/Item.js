import React from "react";
import { Link } from "react-router-dom";
import StartsWidget from "../extras/StartsWidget";

const Item = ({ product }) => {
  return (
    <div className="grid">
      <div className="grid max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          className="grid p-3 rounded-t-lg w-90"
          src={product.image}
          //alt={product.images[0].alt}
        />
        <div className="grid px-5 pb-5 text-center items-center">
          <h5 className="grid text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <div className="flex mt-5 mb-5 justify-center">
            <StartsWidget />
          </div>
          <div className="justify-start items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.price}
            </span>
          </div>
          <div className="justify-start items-center pt-4">
            <Link
              to={`/detalle/${product.id}`}
              className="text-black bg-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ver Detalle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
