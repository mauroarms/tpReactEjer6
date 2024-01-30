import React from "react";
import CajaColor from "./CajaColor";

const ListaColor = ({ arrayColores ,borrarColor}) => {
  return (
    <>
      <h2 className="text-center display-5 tituloSusColores">Sus Colores</h2>
      <div className="listaColor">
        {arrayColores.map((color, i) => (
          <CajaColor color={color} key={i} borrarColor={borrarColor}></CajaColor>
        ))}
      </div>
    </>
  );
};

export default ListaColor;
