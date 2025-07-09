import React from "react";
import TarjetaProducto from "./TarjetaProducto";

const ListaProductos = ({ productos, setClicado, setAgregarCarrito }) => {
  return (
    <section className="main-container">
      <div className="cards-container">
        {productos.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            categoria={producto.categoria}
            disponible={producto.disponible}
            descripcion={producto.descripcion}
            marca={producto.marca}
            stock={producto.stock}
            valoracion={producto.valoracion}
            setClicado={() => setClicado(producto)}
            setAgregarCarrito={setAgregarCarrito}
          />
        ))}
      </div>
    </section>
  );
};

export default ListaProductos;

