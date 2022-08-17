import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProducts } from '../mocks/fakeapi'
import LoadingSpinner from '../extras/LoadingSpinner'

const ItemListContainer = ({ greeting }) => {

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    console.log(productList);

    useEffect(() => {
        getProducts
            .then((respuestaPromise) => setProductList(respuestaPromise))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <div className='landing text-center p-2'>
                <span>{greeting}</span>
            </div>
            <div>
                {loading ? <p className='text-center m-52'><LoadingSpinner/></p> : <ItemList productList={productList} />}
            </div>
        </div>
    );
}

export default ItemListContainer;