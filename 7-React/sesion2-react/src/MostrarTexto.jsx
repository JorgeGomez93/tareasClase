// src/MostrarTexto.jsx
import { useState } from 'react';

function MostrarTexto() {
  const [texto, setTexto] = useState('');

  return (
    <div>
      <h2>📝 Escribe y Ve</h2>
      <input
        type="text"
        placeholder="Escribe algo..."
        onChange={(e) => setTexto(e.target.value)}
      />
      <p>Escribiste: {texto}</p>
    </div>
  );
}

export default MostrarTexto;
