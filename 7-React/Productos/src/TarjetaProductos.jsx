// src/TarjetaProductos.jsx
import "./TarjetaProductos.css";

function TarjetaProductos({ nombre, descripcion, imagen, precio }) {
  return (
    <div className="Tarjeta">
      <img src={imagen} alt={`Imagen de ${nombre}`} />
      <h3>{nombre}</h3>
      <p className="descripcion">{descripcion}</p>
      <p className="precio">Precio: ${precio}</p>
      <button>Añadir al carrito</button>
    </div>
  );
} 

export default TarjetaProductos;
