import React, { useState } from 'react'
import DUMMY_PRODUCT_IMAGE from '/home/andinov/Documentos/coderhouse/tiendamartinez/src/assets/DUMMY_PRODUCT_IMAGE.png';


const ProductCard = ({stock,min, name}) => {

    const [ amount,setAmount ] = useState(0);
    const count = (value) => {
        const result = amount + value;
        if (result<=stock && result>=min){
        setAmount(amount+value);
        }
       
    }

  return (
    <section className='prd-crd text-center'>
        <h3>{name}</h3>
        <img class="center" src={DUMMY_PRODUCT_IMAGE} alt="placeholder" width="350" height="350"/>
        <h4> $ 500</h4>
        <div className="justify-items-center">
        <button 
        onClick={()=>count(-1)} 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border-solid">
        -
        </button>
        <span>CANTIDAD: {amount}</span> - STOCK: {stock}
        <button 
        onClick={()=>count(+1)} 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full border-solid">
        +
        </button>
        </div>
    </section>
    

  )
}

export default ProductCard;