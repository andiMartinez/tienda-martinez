import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import LoadingSpinner from "../extras/LoadingSpinner";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const q = categoryId
      ? query(
          collection(db, "products-collection"),
          where("categories", "==", categoryId)
        )
      : collection(db, "products-collection");

    getDocs(q)
      .then((result) => {
        const lista = result.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        setProductList(lista);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div>
      <div className="landing text-center p-2 text-black bg-yellow-500">
        <span>{greeting}</span>
      </div>
      <div>
        {loading ? (
          <p className="text-center m-52">
            <LoadingSpinner />
          </p>
        ) : (
          <ItemList productList={productList} />
        )}
      </div>
    </div>
  );
};
export default ItemListContainer;
