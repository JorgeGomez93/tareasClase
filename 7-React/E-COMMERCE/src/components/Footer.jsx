import React from "react";
import logo from "../assets/logos/logo_yard_sale.svg";
import whatsApp from "../assets/icons/WhatsApp.webp";
import facebook from "../assets/icons/facebook.webp";
import instagram from "../assets/icons/Instagram.webp";
import youtube from "../assets/icons/Youtube.webp";
import "./Footer.css";

const footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-up">
        <div className="footer-brand">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          {/* <!-- width="100px" --> */}
        </div>
        <div className="footer-links">
          <h4>Menú</h4>
          <button className="footer-toggle" data-target="footer-links-list">
            Menú <span className="arrow">↓</span>
          </button>
          <ul id="footer-links-list" className="footer-content">
            <li>
              <a href="#top">Inicio</a>
            </li>
            {/* <!-- <li><a href="pages/registro.html" target="_blank">Acceso</a></li> --> */}
            <li>
              <a href="../pages/play.html">Jugar</a>
            </li>
            <li>
              <a href="../index.html#tutorial">Tutorial</a>
            </li>
            <li>
              <a href="../pages/ranking.html">Ranking</a>
            </li>
            {/* <!-- <li><a href="#">Foro</a></li>
      <li><a href="#">Contacto</a></li> --> */}
          </ul>
        </div>
        <div className="footer-social">
          <h4>Síguenos</h4>
          <button className="footer-toggle" data-target="footer-social-list">
            Síguenos <span className="arrow">↓</span>
          </button>
          <ul id="footer-social-list" className="footer-content">
            <li>
              <a href="https://wa.me/+34671451838" target="_blank">
                <img src={whatsApp} alt="WhatsApp" />
                Whatsapp
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/?locale=es_ES" target="_blank">
                <img src={facebook} alt="Facebook" />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <img src={instagram} alt="Instagram" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/?app=desktop&hl=es"
                target="_blank"
              >
                <img src={youtube} alt="Youtube" />
                Youtube
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-legal">
          <h4>Legal</h4>
          <button className="footer-toggle" data-target="footer-legal-list">
            Legal <span className="arrow">↓</span>
          </button>
          <ul id="footer-legal-list" className="footer-content">
            <li>
              <a href="#">Aviso Legal</a>
            </li>
            <li>
              <a href="#">Política de Privacidad</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 YARDsale. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default footer;
