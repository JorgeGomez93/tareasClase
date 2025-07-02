import "./App.css";
import Saludo from "./Saludo";
import TarjetaSaludo from "./TarjetaSaludo";
import PropsTarjetaSaludo from "./PropsTarjetaSaludo";
import MostrarTexto from "./MostrarTexto";
import BotonContador from "./BotonContador";
import CambiarMensaje from "./CambiarMensaje";
function App() {
  return (
    <>
      {/* <Saludo />
      <TarjetaSaludo /> */}
      <PropsTarjetaSaludo
        nombre="Juan"
        profesion="Desarrollador"
        imagen="/public/ave.jpg"
      />

      <div>
        <h1>Mi primer ejercicio con React</h1>
        <MostrarTexto />
      </div>

      <div>
        <h2>Mi segundo ejercicio con react</h2>
        <BotonContador />
      </div>
      <div>
        <h2>Mi tercer ejercicio con react</h2>
        <CambiarMensaje />
      </div>
    </>
  );
}

export default App;
