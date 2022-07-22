import React, { useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProduct } from "../mocks/fakeapi";
import { useEffect } from "react";
import LoadingSpinner from "../extras/LoadingSpinner";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemDetailContainer = ({ greeting }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products-collection");
    const refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((result) => {
        setProduct({
          id: result.id,
          ...result.data(),
        });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      {loading ? (
        <p className="text-center m-52">
          <LoadingSpinner />
        </p>
      ) : (
        <ItemDetail product={product} greeting={greeting} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
