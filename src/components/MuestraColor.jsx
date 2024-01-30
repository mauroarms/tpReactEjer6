import coloresCSS from "../coloresDeCSS";

const MuestraColor = ({ color }) => {
  let colorDeCaja;
  let imagenNoColor;
  if (coloresCSS.includes(color)) {
    colorDeCaja = {
      backgroundColor: color,
    };
    imagenNoColor = {
      display: "none",
    };
  } else {
    colorDeCaja = {
      display: "none",
    };
  }

  return (
    <>
      <div className="caja" style={colorDeCaja}></div>
      <div className="cajaSinColor" style={imagenNoColor}></div>
    </>
  );
};

export default MuestraColor;
