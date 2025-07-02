import { useState } from "react";

function CambiarMensaje() {
  const textoInicial = "Lorem ipsum dolor sit amet";
  const [texto, setTexto] = useState(textoInicial);

  return (
    <>
      <p>{texto}</p>
      <button onClick={() => setTexto("Nuevo texto 1")}>Cambiar texto</button>
      <button onClick={() => setTexto(textoInicial)}>Reiniciar</button>
    </>
  );
}

export default CambiarMensaje;
