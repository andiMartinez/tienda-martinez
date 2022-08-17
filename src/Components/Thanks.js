import React from "react";
import { Link } from "react-router-dom";

const Thanks = ({ greeting }) => {
  return (
    <>
      <div className="landing text-center p-2 text-black bg-yellow-500 font-bold">
        <p>{greeting}</p>

        <Link to="/"> Click acá para volver a la tienda</Link>
      </div>

      <div className="text-center text-2xl">
        <h3>Tu Pedido</h3>
      </div>
      <div className=" text-center self-center">
        <h1>Tus Datos </h1>
        <h1>Nombre: Daiana</h1>
        <h1>Apellido: Liciaga</h1>
        <h1> dummytestprobando@gmail.com</h1>
        <h1> CODIGO: {}</h1>
      </div>
    </>
  );
};

export default Thanks;
