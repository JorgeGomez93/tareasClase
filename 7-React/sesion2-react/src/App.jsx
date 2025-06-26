import "./App.css";
import Saludo from "./Saludo";
import TarjetaSaludo from "./TarjetaSaludo";
import PropsTarjetaSaludo from "./PropsTarjetaSaludo";
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
    </>
  );
}

export default App;
