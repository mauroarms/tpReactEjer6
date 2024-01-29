const MuestraColor = ({ color }) => {
  const colorDeCaja = {
    backgroundColor: color,
  };

  return <div className="caja sombra" style={colorDeCaja}></div>;
};

export default MuestraColor;
