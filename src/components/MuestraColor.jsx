const MuestraColor = ({ color }) => {
  const colorDeCaja = {
    backgroundColor: color,
  };

  return <div className="caja" style={colorDeCaja}></div>;
};

export default MuestraColor;
