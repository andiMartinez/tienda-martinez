import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProducts } from '../mocks/fakeapi'
import LoadingSpinner from '../extras/LoadingSpinner'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();
    console.log(productList);

    useEffect(() => {
        setLoading(true);
        getProducts(categoryId)
            .then((respuestaPromise) => setProductList(respuestaPromise))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <div>
            <div className='landing text-center p-2 text-black bg-yellow-500'>
                <span>{greeting}</span>
            </div>
            <div>
                {loading ? <p className='text-center m-52'><LoadingSpinner/></p> : <ItemList productList={productList} />}
            </div>
        </div>
    );
}
export default ItemListContainer;