import { Button, Card } from "react-bootstrap";
import MuestraColor from "./MuestraColor";

const CajaColor = ({ color }) => {
  return (
    <Card className="cajaColor">
      <MuestraColor color={color}></MuestraColor>
      <Card.Body>
        <Card.Title className="text-center">{color}</Card.Title>

        <Button variant="danger">Borrar</Button>
      </Card.Body>
    </Card>
  );
};

export default CajaColor;
