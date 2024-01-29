import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import FormularioColor from "./components/FormularioColor";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <FormularioColor></FormularioColor>
      </Container>

      <Footer></Footer>
    </>
  );
}

export default App;
