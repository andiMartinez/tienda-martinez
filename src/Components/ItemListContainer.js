import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getData } from '../mocks/fakeapi'

const ItemListContainer = ({ greeting }) => {

    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    console.log(productList);

    useEffect(() => {
        getData
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
                {loading ? <p className='text-center m-52'>Cargando...</p> : <ItemList productList={productList} />}
            </div>
        </div>
    );
}

export default ItemListContainer;