import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  // NOTE: The logic for the collapsible sections will be added later.
  return (
    <footer id="footer-container">
      <div className="footer-up">
        <div className="footer-brand">
          <HashLink to="/#top">
            <img src="/assets/icon/logofinal.webp" alt="TuBoliranaDigital" />
          </HashLink>
        </div>
        <div className="footer-links">
          <h4>Menú</h4>
          <button className="footer-toggle" data-target="footer-links-list">
            Menú <span className="arrow">↓</span>
          </button>
          <ul id="footer-links-list" className="footer-content">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/play">Jugar</Link></li>
            <li><HashLink to="/#tutorial">Tutorial</HashLink></li>
            <li><Link to="/ranking">Ranking</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Síguenos</h4>
          <button className="footer-toggle" data-target="footer-social-list">
            Síguenos <span className="arrow">↓</span>
          </button>
          <ul id="footer-social-list" className="footer-content">
            <li>
              <a href="https://wa.me/+34671451838" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icon/WhatsApp.webp" alt="WhatsApp" />Whatsapp
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/?locale=es_ES" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icon/facebook.webp" alt="Facebook" />Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icon/Instagram.webp" alt="Instagram" />Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/?app=desktop&hl=es" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icon/Youtube.webp" alt="Youtube" />Youtube
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
            <li><a href="#">Aviso Legal</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 TuBoliranaDigital. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
