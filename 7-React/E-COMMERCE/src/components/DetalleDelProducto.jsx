import React from "react";
import "./DetalleDelProducto.css";
import carrito from "../assets/icons/bt_add_to_cart.svg";
import close from "../assets/icons/icon_close.png";
import { formatearPrecio } from "../utilities/formatearPrecio";

const DetalleDelProducto = ({ producto, setClicado, setAgregarCarrito }) => {
  if (producto === null) return;

  return (
    <>
      <aside className={`product-detail ${producto ? "abierto" : ""}`}>
        <div className="product-detail-close" onClick={() => setClicado(null)}>
          <img src={close} alt="close" />
        </div>
        <div className="imgContainer">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>

        <div className="detalle-product-info">
          <p>
            {producto.marca} - {producto.nombre}
          </p>
          <p>⭐{producto.valoracion}</p>

          <p>{formatearPrecio(producto.precio)}</p>

          <p>{producto.descripcion}</p>
          <button
            className="primary-button add-to-cart-button"
            onClick={() => setAgregarCarrito((prev) => prev + 1)}
          >
            <img src={carrito} alt="add to cart" />
            Add to cart
          </button>
        </div>
      </aside>
    </>
  );
};

export default DetalleDelProducto;
