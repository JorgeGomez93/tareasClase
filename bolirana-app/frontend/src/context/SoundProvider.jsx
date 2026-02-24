import { useState } from 'react';
import { SoundContext } from './SoundContext';


export function SoundProvider({ children }) {
  const [isMuted, setIsMuted] = useState(false);

  function toggleMute() {
    setIsMuted(prev => !prev);
  }

  const value = {
    isMuted,
    toggleMute,
  };

  return (
    <SoundContext.Provider value={value}>
      {children}
    </SoundContext.Provider>
  );
}
