import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/formularios.css';

export default function RegistroPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/jugadores/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.detail || 'Error en el registro');
        return;
      }

      alert("Registro exitoso. Ya puedes iniciar sesión.");
      navigate('/play'); // Redirige a la página de inicio de sesión
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("No se pudo conectar con el servidor");
    }
  };

  return (
    <main className="ventana-formulario" id="ventana-formulario">
      <section className="form-container">
        <h1>Registro</h1>
        <form name="formulario-registro" onSubmit={handleSubmit}>
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

          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Apodo/Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

          <label htmlFor="password_confirm">Confirmar contraseña:</label>
          <div className="password-wrapper">
            <input
              type={showPasswordConfirm ? 'text' : 'password'}
              name="password_confirm"
              id="password_confirm"
              placeholder="Repetir contraseña"
              required
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <img
              className="toggle-password"
              src={showPasswordConfirm ? '/assets/icon/eye-close.jpg' : '/assets/icon/eye-open.jpg'}
              alt={showPasswordConfirm ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
            />
          </div>

          <input type="submit" value="Registrarme" />
          <p id="o">ó</p>
          <Link to="/play">
            <input type="button" value="Iniciar sesión" />
          </Link>
        </form>
      </section>
    </main>
  );
}
