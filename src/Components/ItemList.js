import React from "react";
import Item from "./Item";

const ItemList = ({ productList }) => {
  return (
    <div>
      <div className="m-7 p-20 text-xl">
        <h3>Productos en la tienda</h3>
        <div className="m-7 flex justify-start">
          {productList.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
