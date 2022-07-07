import React, { useState } from 'react'
import ItemDetail from './ItemDetail'
import { getProduct } from '../mocks/fakeapi'
import { useEffect } from 'react'
import LoadingSpinner from '../extras/LoadingSpinner'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({ greeting }) => {

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProduct(id)
      .then((res) => setProduct(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [id]);

  return (

    <div>
      {loading ? <p className='text-center m-52'><LoadingSpinner /></p> : <ItemDetail product={product} greeting={greeting}/>}
    </div>
  );
}

export default ItemDetailContainer