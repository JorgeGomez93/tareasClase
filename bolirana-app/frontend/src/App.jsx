import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import GameLayout from './components/GameLayout';
import ProtectedRoute from './components/ProtectedRoute'; // Importar el guardián
import HomePage from './pages/HomePage';
import RankingPage from './pages/RankingPage';
import RegistroPage from './pages/RegistroPage';
import PlayPage from './pages/PlayPage';
import ConfigPage from './pages/ConfigPage';
import TableroPage from './pages/TableroPage';

function App() {
  return (
    <Routes>
      {/* Rutas públicas con Navbar y Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/play" element={<PlayPage />} />
      </Route>

      {/* Rutas protegidas que requieren inicio de sesión */}
      <Route element={<ProtectedRoute />}>
        <Route element={<GameLayout />}>
          <Route path="/config" element={<ConfigPage />} />
          <Route path="/tablero" element={<TableroPage />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
