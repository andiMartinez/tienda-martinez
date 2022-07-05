import React from 'react'
import { Link } from 'react-router-dom'
import StartsWidget from '../extras/StartsWidget'

import { useState } from 'react'

const Item = ({ product }) => {

    const [amount, setAmount] = useState(0);

    const count = (value) => {
        const result = amount + value;
        if (result <= product.stock && result >= product.min) {
            setAmount(amount + value)
        }
    }

    return (
        <div>
            <div class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <Link to="/detail"> <img class="p-8 rounded-t-lg" src={product.img} alt="product image" /></Link>
                <div class="px-5 pb-5">
                    <Link to="/detail"> <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5></Link>
                    <div class=" stars flex items-center mt-2.5 mb-5">
                        <StartsWidget></StartsWidget>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>

                        {/*   <Link to="/add"
                            class="text-black bg-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Add to carrito</Link> */}
                    </div>

                {/*     <section className='prd-crd text-center'>
                        <div className="justify-items-center">
                            <button
                                onClick={() => count(-1) & console.log("aprete-1")}
                                className="bg-yellow-500 hover:text-black text-white text-xs font-bold py-2 px-4 rounded-full border-solid space-x-10">
                                -
                            </button>
                            <span className='text-xs'> CANTIDAD: {amount}</span>
                            <span className='text-xl'> STOCK: {product.stock} </span>
                            <button
                                onClick={() => count(+1) & console.log("aprete+1")}
                                className="bg-yellow-500 hover:text-black text-white text-xs  font-bold py-2 px-4 rounded-full border-solid">
                                +
                            </button>
                        </div>
                    </section> */}

                    <Link to="/detalle"
                        class="text-black bg-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Ver Detalle</Link>

                </div>
            </div>
        </div>




    )
}

export default Item