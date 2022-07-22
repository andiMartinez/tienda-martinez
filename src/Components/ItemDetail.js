import { useState, useContext } from "react";
import { RadioGroup } from "@headlessui/react";
import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../Context/CartContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ItemDetail = ({ product, greeting }) => {
  const [buyFinalized, setBuyFinalized] = useState(false);
  const { addProducts } = useContext(cartContext);

  const onAdd = (count) => {
    addProducts({ ...product, qty: count });
    setBuyFinalized(true);
  };

  return (
    <div>
      <div className="landing text-center p-2 text-black bg-yellow-500">
        {greeting}
      </div>
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>

        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={product.image}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.image}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={product.image}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={product.image}
              // alt={product.images[3].alt}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>

            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">$ {product.price}</p>
              <form className="mt-10"></form>
            </div>
          </div>
          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Detalles:</h3>
              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400 ">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">
                Informacion Adicional
              </h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
          {buyFinalized ? (
            <Link to="/cart">
              <button
                type="submit"
                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex 
                items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Finalizar Compra
              </button>
            </Link>
          ) : (
            <ItemCount stock={product.stock} initial={1} onAdd={onAdd}>
              {" "}
            </ItemCount>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
