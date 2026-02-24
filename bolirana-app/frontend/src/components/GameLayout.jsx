import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SideNav from './SideNav';
import { SoundProvider } from '../context/SoundProvider';

export default function GameLayout() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // --- Lógica de Pantalla Completa (se queda en el layout) ---
  function handleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  return (
    <SoundProvider>
      <div style={{ display: 'flex' }}>
        <SideNav 
          isFullscreen={isFullscreen}
          onFullscreen={handleFullscreen}
        />
        <main style={{ flexGrow: 1, marginLeft: '90px', padding: '20px' }}>
          <Outlet />
        </main>
      </div>
    </SoundProvider>
  );
}
