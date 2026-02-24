import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import '../styles/formularios.css';

export default function PlayPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoggedIn, isLoading } = useAuth();
  const navigate = useNavigate();

  // Este efecto redirige al usuario si ya está logueado, solucionando la condición de carrera.
  useEffect(() => {
    if (!isLoading && isLoggedIn) {
      navigate('/config', { replace: true });
    }
  }, [isLoading, isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // La navegación ahora es manejada de forma robusta por el useEffect
    } catch (error) {
      console.error("Login failed", error);
      alert("El inicio de sesión falló. Revisa tus credenciales.");
    }
  };

  // Mientras se determina el estado de autenticación, o si el usuario ya está logueado,
  // no mostramos el formulario para evitar un parpadeo.
  if (isLoading || isLoggedIn) {
    return <div>Cargando...</div>;
  }

  return (
    <main className="ventana-formulario" id="ventana-formulario">
      <section className="form-container">
        <h1>Iniciar Sesión</h1>
        <form name="formulario-login" onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Contraseña:</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              className="toggle-password"
              src={showPassword ? '/assets/icon/eye-close.jpg' : '/assets/icon/eye-open.jpg'}
              alt={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <input type="submit" value="Iniciar Sesión" />
          <input
            type="button"
            value="¿Olvidaste tu contraseña?"
            id="btn-recuperar"
          />

          <Link to="/registro">
            <input type="button" value="Crear cuenta" />
          </Link>
        </form>
      </section>
    </main>
  );
}
