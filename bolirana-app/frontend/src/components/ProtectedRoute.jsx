import { useAuth } from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

// Este componente actúa como un guardián para las rutas.
// Si el usuario no está autenticado, lo redirige.
// Si está autenticado, le permite el acceso a las rutas anidadas.
export default function ProtectedRoute() {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    // Mientras se verifica el estado de autenticación, muestra un mensaje de carga.
    // Esto previene la redirección prematura antes de que el usuario sea validado.
    return <div>Cargando...</div>;
  }

  if (!isLoggedIn) {
    // Redirige al usuario a la página de inicio si no ha iniciado sesión.
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
