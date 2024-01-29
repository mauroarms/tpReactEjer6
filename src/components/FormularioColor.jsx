import { Form, Button } from "react-bootstrap";
import MuestraColor from "./MuestraColor";
import { useState, useEffect } from "react";

const FormularioColor = () => {

  const [color, setColor] = useState("")


  return (
    <>
      <div className="contenidoPrincipal">
        <MuestraColor color={color}></MuestraColor>

        <Form className="w-100 formularioColor">
          <Form.Group className="mb-3 ">
            <Form.Label>Ingrese su color:</Form.Label>
            <Form.Control
              id="disabledTextInput"
              placeholder="Color en Inglés... EJ: blue"
              className="w-100"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
          </Form.Group>

          <Button type="submit" className="btnEnviar">Agregar Color</Button>
        </Form>
      </div>
    </>
  );
};

export default FormularioColor;
