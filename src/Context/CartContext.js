import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [qtyProducts, setQtyProducts] = useState(0);

  useEffect(() => {
    getQtyProducts();
  }, [products]);

  const addProducts = (product) => {
    if (isInCart(product.id)) {
      const found = products.find((p) => p.id === product);
      const index = products.indexOf(found);
      const aux = [...products];
      aux[index].qty += product.qty;
      setProducts(aux);
    } else {
      setProducts([...products, product]);
    }
    getQtyProducts();
  };

  const deleteProducts = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    getQtyProducts();
  };

  const isInCart = (id) => {
    //const found = products.find(product => product.id === id);
    //return found ? true: false;
    return products.some((products) => products.id === id);
  };

  const getQtyProducts = (id) => {
    let qty = 0;
    products.forEach((product) => (qty += product.qty));
    setQtyProducts(qty);
  };

  const clear = () => {
    setProducts([]);
    setQtyProducts(0);
  };

  const subtotal = () => {
    return products.reduce(
      (acumPrice, act) => acumPrice + act.qty * act.price,
      0
    );
  };

  const totalProd = () => {
    products.reduce((acum, prod) => acum + prod.qtyProducts, 0);
  };

  return (
    <Provider
      value={{
        products,
        addProducts,
        deleteProducts,
        isInCart,
        clear,
        qtyProducts,
        totalProd,
        subtotal,
      }}
    >
      {children}
    </Provider>
  );
};
export default CartCustomProvider;
