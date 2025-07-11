import React from "react";
import "./TarjetaProducto.css";
import carrito from "../assets/icons/bt_add_to_cart.svg";
import { formatearPrecio } from "../utilities/formatearPrecio";

const TarjetaProducto = ({
  id,
  nombre,
  precio,
  imagen,
  categoria,
  disponible,
  descripcion,
  marca,
  stock,
  valoracion,
  setClicado,
  setAgregarCarrito,
}) => {
  const producto = {
    id,
    nombre,
    precio,
    imagen,
    categoria,
    disponible,
    descripcion,
    marca,
    stock,
    valoracion,
  };

  return (
    <div className="product-card" onClick={setClicado}>
      <img src={imagen} alt={nombre} />
      <div className="product-info">
        <div>
          <p>{formatearPrecio(precio)}</p>

          <p className="description">{nombre}</p>
        </div>
        <figure>
          <img
            src={carrito}
            alt="carrito"
            onClick={(e) => {
              e.stopPropagation(); // ✋ Evita que el clic llegue al contenedor
              setAgregarCarrito((prev) => [...prev, producto]);
            }}
          />
        </figure>
      </div>
    </div>
  );
};

export default TarjetaProducto;
