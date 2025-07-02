import { useState } from "react";

function BotonContador() {
  const [contador, setContador] = useState(0);

  return (
    <>
      {/* <h2>Mi componente Boton Contador</h2> */}
      <button onClick={() => setContador(contador + 1)}>
        Contador: {contador}
      </button>
      <br />
      <br />
      <button onClick={() => setContador(0)}>Reiniciar</button>
      <br />
      <br />
      <button onClick={() => setContador(contador - 1)}>
        Contador: {contador}
      </button>
    </>
  );
}

export default BotonContador;
