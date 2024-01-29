import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import FormularioColor from "./components/FormularioColor";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <div className="bg-light-subtle p-4 mt-5 sombra">
          <h3>Administrar Color</h3>
          <FormularioColor></FormularioColor>
        </div>
      </Container>

      <Footer></Footer>
    </>
  );
}

export default App;
