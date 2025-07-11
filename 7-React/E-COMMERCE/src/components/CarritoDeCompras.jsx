import React from "react";
import "./CarritoDeCompras.css";
import flechita from "../assets/icons/flechita.svg";
import close from "../assets/icons/icon_close.png";
import { formatearPrecio } from "../utilities/formatearPrecio";

const CarritoDeCompras = ({
  productosDelCarrito,
  carritoVisible,
  eliminarDelCarrito,
}) => {
  const total = productosDelCarrito.reduce(
    (acc, producto) => acc + producto.precio,
    0
  );
  return (
    <aside className={`carrito-detail ${carritoVisible ? "abierto" : ""}`}>
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>

      <div className="my-order-content">
        {productosDelCarrito.length === 0 ? (
          <p className="carrito-vacio">Tu carrito está vacío 🛒</p>
        ) : (
          <>
            {productosDelCarrito.map((producto, index) => (
              <div className="shopping-cart" key={`${producto.id}-${index}`}>
                <figure>
                  <img src={producto.imagen} alt={producto.nombre} />
                </figure>
                <p>{producto.nombre}</p>
                <p>{formatearPrecio(producto.precio)}</p>
                <img
                  src={close}
                  alt="close"
                  onClick={() => eliminarDelCarrito(index)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            ))}

            <div className="order">
              <p>
                <span>Total</span>
              </p>
              <p>{formatearPrecio(total)}</p>
            </div>
            <button className="primary-button">Checkout</button>
          </>
        )}
      </div>
    </aside>
  );
};

export default CarritoDeCompras;
