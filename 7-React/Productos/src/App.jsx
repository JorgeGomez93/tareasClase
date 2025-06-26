// src/App.jsx
import "./App.css";
import TarjetaProductos from "./TarjetaProductos";

function App() {
  return (
    <div className="contenedor">
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
    </div>
  );
}

export default App;
