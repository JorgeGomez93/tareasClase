import React, { useState } from "react";
import "./NavBar.css";

import burger from "../assets/icons/icon_menu.svg";
import logo from "../assets/logos/logo_yard_sale.svg";
import carrito from "../assets/icons/icon_shopping_cart.svg";

const NavBar = ({ setNombre, setCategoria, productosDelCarrito }) => {
  const [menuActivo, setMenuActivo] = useState(false);

  const manejarClickCategoria = (categoria) => {
    setCategoria(categoria);
    setMenuActivo(false); // Cierra el menú en móvil
  };

  return (
    <nav>
      {/* IZQUIERDA: Logo + Menú */}
      <div className="navbar-left">
        <a href="#">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <img
          src={burger}
          alt="menu"
          className="menu"
          onClick={() => setMenuActivo(!menuActivo)}
        />
      </div>

      {/* CATEGORÍAS (visibles en desktop y como menú desplegable en móvil) */}
      <div className={`navbar-categorias ${menuActivo ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#todos" onClick={() => manejarClickCategoria("all")}>
              All
            </a>
          </li>
          <li>
            <a
              href="#smartphones"
              onClick={() => manejarClickCategoria("smartphones")}
            >
              Smartphones
            </a>
          </li>
          <li>
            <a href="#laptops" onClick={() => manejarClickCategoria("laptops")}>
              Laptops
            </a>
          </li>
          <li>
            <a href="#tablets" onClick={() => manejarClickCategoria("tablets")}>
              Tablets
            </a>
          </li>
          <li>
            <a href="#audio" onClick={() => manejarClickCategoria("audio")}>
              Audio
            </a>
          </li>
          <li>
            <a
              href="#accesorios"
              onClick={() => manejarClickCategoria("accesorios")}
            >
              Accesorios
            </a>
          </li>
          <li>
            <a href="#gaming" onClick={() => manejarClickCategoria("gaming")}>
              Gaming
            </a>
          </li>
        </ul>
      </div>

      {/* CENTRO: Búsqueda */}
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Buscar en YARDSale.es"
          name="nombre"
          id="nombre"
          className="nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <button className="buscar">
          <img src="/lupa.png" alt="lupa" />
        </button>
      </div>

      {/* DERECHA: Email + Carrito */}
      <div className="navbar-right">
        <ul>
          <li className="navbar-email">gomezgarciajorgeomar@gmail.com</li>
          <li className="navbar-shopping-cart">
            <img src={carrito} alt="shopping cart" />
            <div>{productosDelCarrito}</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
