import { Button, Card } from "react-bootstrap";
import MuestraColor from "./MuestraColor";

const CajaColor = ({ color ,borrarColor}) => {
  return (
    <Card className="cajaColor bg-secondary-subtle border border-0">
      <MuestraColor color={color}></MuestraColor>
      <Card.Body>
        <Card.Title className="text-center">{color}</Card.Title>

        <Button variant="danger" onClick={() => borrarColor(color)}>Borrar</Button>
      </Card.Body>
    </Card>
  );
};

export default CajaColor;
