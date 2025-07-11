import React, { useState } from "react";
import "./NavBar.css";

import burger from "../assets/icons/icon_menu.svg";
import logo from "../assets/logos/logo_yard_sale.svg";
import carrito from "../assets/icons/icon_shopping_cart.svg";

const NavBar = ({
  setNombre,
  setCategoria,
  productosDelCarrito,
  setCarritoVisible,
  setClicado,
}) => {
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
          role="button"
          aria-expanded={menuActivo}
          aria-controls="menu-categorias"
          onClick={() => setMenuActivo(!menuActivo)}
        />
      </div>

      {/* CATEGORÍAS (visibles en desktop y como menú desplegable en móvil) */}
      <div className={`navbar-categorias ${menuActivo ? "abierto" : ""}`} id="menu-categorias">
        <div className="mobile-categories">
          <h1>CATEGORIES</h1>
          <ul>
            <li>
              <a
                href="#todos"
                className="title"
                onClick={() => manejarClickCategoria("all")}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#smartphones"
                className="title"
                onClick={() => manejarClickCategoria("smartphones")}
              >
                Smartphones
              </a>
            </li>
            <li>
              <a
                href="#laptops"
                className="title"
                onClick={() => manejarClickCategoria("laptops")}
              >
                Laptops
              </a>
            </li>
            <li>
              <a
                href="#tablets"
                className="title"
                onClick={() => manejarClickCategoria("tablets")}
              >
                Tablets
              </a>
            </li>
            <li>
              <a
                href="#audio"
                className="title"
                onClick={() => manejarClickCategoria("audio")}
              >
                Audio
              </a>
            </li>
            <li>
              <a
                href="#accesorios"
                className="title"
                onClick={() => manejarClickCategoria("accesorios")}
              >
                Accesorios
              </a>
            </li>
            <li>
              <a
                href="#gaming"
                className="title"
                onClick={() => manejarClickCategoria("gaming")}
              >
                Gaming
              </a>
            </li>
            <li>
              <a
                href="#gaming"
                className="title"
                onClick={() => manejarClickCategoria("others")}
              >
                Others
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile-menu">
          <ul>
            <li>
              <a href="#" className="title">
                My orders
              </a>
            </li>

            <li>
              <a href="#" className="title">
                My account
              </a>
            </li>

            <li>
              <p className="email">gomezgarciajorgeomar@gmail.com</p>
              <a href="#" className="title">
                Sign Out
              </a>
            </li>
          </ul>
        </div>
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
          <li
            className="navbar-shopping-cart"
            onClick={() => {
              setCarritoVisible((prev) => !prev);
              setClicado(null);
            }}
          >
            <img src={carrito} alt="shopping cart" />
            <div>{productosDelCarrito.length}</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
