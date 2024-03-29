import React, { useState } from "react";

const ItemCount = ({ initial, onAdd, stock }) => {
  const [count, setCount] = useState(initial);

  const handlerClickAdd = () => {
    if (count < stock) {
      setCount(count + 1);
      console.log("ADD PRODUCTO");
    }
  };

  const handlerClickSubtrack = () => {
    if (count > 1) {
      setCount(count - 1);
      console.log("REMOVE PRODUCT");
    }
  };

  const handlerClickAddToCart = () => {
    onAdd(count);
    console.log("ADD PRODUCTOS TO CARRITO");
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 text-center justify-items-center content-evenly ">
        <div className="grow">
          <button
            type="submit"
            onClick={() => handlerClickSubtrack()}
            className="mt-5  bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            -
          </button>
        </div>
        <div className="mt-5 text-base text-black text-center ">
          Stock: {stock}
        </div>
        <div>
          <button
            type="submit"
            onClick={() => handlerClickAdd()}
            className="mt-5 w-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="submit"
        onClick={() => handlerClickAddToCart()}
        className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Agregar al carrito: {count}
      </button>
    </div>
  );
};

export default ItemCount;
