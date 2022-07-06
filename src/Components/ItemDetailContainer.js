import React, { useState } from 'react'
import ItemDetail from './ItemDetail'
import { getProduct } from '../mocks/fakeapi'
import { useEffect } from 'react'
import LoadingSpinner from '../extras/LoadingSpinner'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProduct
      .then((RespuestaUnProducto) => setProduct(RespuestaUnProducto))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  return (

    <div>
      {loading ? <p className='text-center m-52'><LoadingSpinner /></p> : <ItemDetail product={product} />}
    </div>
  );
}

export default ItemDetailContainer