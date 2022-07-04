import React, { useState } from 'react'

const ProductCard = ({ stock, min, max}) => {


  
    const [ amount, setAmount ] = useState(0);

    const count = (value) => {
        const result = amount + value;
        if (result<=stock && result>=min){
        setAmount(amount+value);
        } 
    }

  return (
    <section className='prd-crd text-center'>
        <div className="justify-items-center">
        <button 
        onClick={()=>count(-1) && console.log("aprete-1")} 
        className="bg-yellow-500 hover:text-black text-white text-xs font-bold py-2 px-4 rounded-full border-solid space-x-10">
        -
        </button>
        <span className='text-xs'> CANTIDAD: {amount} - STOCK: {stock} </span>
        <button 
        onClick={()=>count(+1) && console.log("aprete-1") } 
        className="bg-yellow-500 hover:text-black text-white text-xs  font-bold py-2 px-4 rounded-full border-solid">
        +
        </button>

        </div>
    </section>
    

  )
}

export default ProductCard;