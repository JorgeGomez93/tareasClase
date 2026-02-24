import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <div className="encabezado">
      <input
        type="checkbox"
        id="toggle-menu"
        className="toggle-menu"
        aria-label="Abrir menú"
      />
      <label htmlFor="toggle-menu" className="menu-icon" aria-label="Abrir menú">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="barra-grid">
        <div className="logo">
          <HashLink to="/#top">
            <img src="/assets/icon/logofinal.webp" alt="logo de bolirana" />
          </HashLink>
        </div>

        <nav aria-label="Menú principal" className="top-bar">
          <ul className="menu">
            <li><HashLink to="/#top">INICIO</HashLink></li>
            <li><HashLink to="/#tutorial">TUTORIAL</HashLink></li>
            <li><Link to="/ranking">RANKING</Link></li>
            <li><HashLink to="/#footer-container">CONTACTO</HashLink></li>
            <li>
              <Link to={isLoggedIn ? '/config' : '/play'}>JUGAR</Link>
            </li>

            {isLoggedIn && user ? (
              <li id="user-logged-in">
                <div id="user-menu" className="user-menu">
                  <img id="avatar" src={user.avatar?.imagen || '/assets/icon/rana.webp'} alt="Avatar del usuario" />
                  <div className="user-menu-content">
                    <div className="user-menu-header">
                      <img
                        className="user-menu-avatar"
                        src={user.avatar?.imagen || '/assets/icon/rana.webp'}
                        alt="Avatar grande"
                      />
                      <div className="user-menu-identity">
                        <div className="user-menu-name">{user.username}</div>
                        <div className="user-menu-email">{user.email}</div>
                      </div>
                      <Link className="user-menu-manage" to="/perfil">
                        Gestionar tu cuenta
                      </Link>
                    </div>
                    <hr className="user-menu-divider" />
                    <Link to="/perfil">👤 Mi perfil</Link>
                    <button onClick={logout} style={{width: '100%'}}>🚪 Cerrar sesión</button>
                  </div>
                </div>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
