// src/App.jsx
import "./App.css";
import TarjetaProductos from "./TarjetaProductos";
import tareas from "./assets/Tareas";
import ListaTarea from "./components/ListaTarea";

function App() {
  return (
    <div className="contenedor">
      {/* <ListaTarea tareas={tareas} mostrarCompletadas={true}  /> */}
      <TarjetaProductos
        nombre="Silla"
        descripcion="Silla plástica como nueva"
        precio={100}
        imagen="/chair.jpg"
      />
      <TarjetaProductos
        nombre="Motocicleta"
        descripcion="Motocicleta en excelente estado"
        precio={1500}
        imagen="/motorcycle.jpg"
      />
      <TarjetaProductos
        nombre="Carro"
        descripcion="Carro con rines de lujo"
        precio={8000}
        imagen="/car.jpg"
      />
      <TarjetaProductos
        nombre="Bicicleta"
        descripcion="Bicicleta de montaña en buen estado"
        precio={500}
        imagen="/bike.jpg"
      />
    </div>
  );
}

export default App;
