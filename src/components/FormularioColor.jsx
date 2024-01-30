import { Form, Button } from "react-bootstrap";
import MuestraColor from "./MuestraColor";
import { useState, useEffect } from "react";
import ListaColor from "./ListaColor";
import coloresCSS from "../coloresDeCSS";

const FormularioColor = () => {

  const arrayColoresRecuperado = JSON.parse(localStorage.getItem("arrayColores")) || [];
  const [color, setColor] = useState("");
  const [arrayColores, setArrayColores] = useState(arrayColoresRecuperado);
  

  useEffect(() => {
    
    localStorage.setItem("arrayColores", JSON.stringify(arrayColores));
  }
  , [arrayColores])

  const handleSubmit = (event) => {
    event.preventDefault();

    if(coloresCSS.includes(color)){
      if (arrayColores.includes(color)) {
        console.log("ya existe el color");
      } else {
        setArrayColores([...arrayColores, color]);
        setColor("");
      }
    }else{
      console.log("color invalido")
    }



  };

  const borrarColor = (colorABorrar) => {
    const filterArray = arrayColores.filter(
      (colorDelArray) => colorDelArray !== colorABorrar
    );
    setArrayColores(filterArray);
  };

  return (
    <>
      <h1 className="display-3 text-center mt-3">Administrador de Colores</h1>

      <div className="contenidoPrincipal gap-5 bg-light-subtle p-5 mt-5 sombra">
        <MuestraColor color={color}></MuestraColor>

        <Form className="w-100 formularioColor" onSubmit={handleSubmit}>
          <Form.Group className="mb-3 ">
            <Form.Label>Ingrese su color:</Form.Label>
            <Form.Control
              placeholder="Color en Inglés... EJ: blue"
              className="w-100"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
          </Form.Group>

          <Button type="submit" className="btnEnviar">
            Agregar Color
          </Button>
        </Form>
      </div>

      <ListaColor
        arrayColores={arrayColores}
        borrarColor={borrarColor}
        className="mt-5"
      ></ListaColor>
    </>
  );
};

export default FormularioColor;
