import React from "react";
import CajaColor from "./CajaColor";

const ListaColor = ({ arrayColores }) => {
  return (
    <div className="listaColor">
      {arrayColores.map((color, i) => (
        <CajaColor color={color} key={i}></CajaColor>
      ))}
    </div>
  );
};

export default ListaColor;
