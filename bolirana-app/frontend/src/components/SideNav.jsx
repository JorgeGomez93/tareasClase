import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useSound } from '../hooks/useSound';
import './SideNav.css';

export default function SideNav({ isFullscreen, onFullscreen }) {
  const { isLoggedIn, user, logout } = useAuth();
  const { isMuted, toggleMute } = useSound();

  // No renderizar nada si el usuario no está logueado
  if (!isLoggedIn || !user) {
    return null;
  }

  return (
    <nav className="side-nav">
      <ul className="sidenav-menu">
        {/* Perfil del usuario (Avatar) */}
        <li>
          <Link to="/perfil" className="icon-button">
            <img 
              src={user.avatar?.imagen || '/assets/icon/rana.webp'} 
              alt="Perfil" 
              style={{ borderRadius: '50%' }} 
            />
            <span>Perfil</span>
          </Link>
        </li>

        {/* Separador visual */}
        <li className="divider"></li>

        {/* Iconos de Navegación y Control */}
        <li>
          <Link to="/" className="icon-button">
            <img src="/assets/icon/home.png" alt="Inicio" />
            <span>Inicio</span>
          </Link>
        </li>
        <li>
          <Link to="/config" className="icon-button">
            <img src="/assets/icon/settings.png" alt="Ajustes" />
            <span>Ajustes</span>
          </Link>
        </li>
        <li>
          <button onClick={toggleMute} className="icon-button">
            <img src={isMuted ? "/assets/icon/volume-down.png" : "/assets/icon/volume-up.png"} alt="Mute" />
            <span>Sonido</span>
          </button>
        </li>
        <li>
          <button onClick={onFullscreen} className="icon-button">
            <img src={isFullscreen ? "/assets/icon/exit-fullscreen.png" : "/assets/icon/fullscreen.png"} alt="Fullscreen" />
            <span>Pantalla</span>
          </button>
        </li>

        {/* Separador y botón de Salir al final */}
        <li className="spacer"></li>
        <li className="divider"></li>
        
        <li>
          <button onClick={logout} className="icon-button">
            <img src="/assets/icon/logout.png" alt="Salir" />
            <span>Salir</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
