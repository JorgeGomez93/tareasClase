export default function HomePage() {
  return (
    <>
      <header className="encabezado-video" id="top">
        {/* Video de fondo */}
        <video autoPlay muted loop playsInline>
          <source src="/assets/video/Frogs.webm" type="video/webm" />
          Tu navegador no soporta la etiqueta de video
        </video>

        <div className="titulo-principal">
          <h1>TuBoliranaDigital</h1>
          <h2>Suma o pierde… ¡con cada tiro!</h2>
        </div>
      </header>

      <div className="margin-arriba" id="tutorial">
        {/* SECCIONES DEL CONTENIDO PRINCIPAL */}
        <section className="tutorial">
          <article>
            <h2>¿Cómo se juega?</h2>
            <ol>
              <li>Elige tu nombre y entra a la partida.</li>
              <li>Cada jugador lanza 6 esferas metálicas al tablero.</li>
              <li>Los hoyos en pareja otorgan la misma puntuación.</li>
              <li>
                La rampa tiene un hoyo de puntos altos y otro con ruleta de
                premio.
              </li>
              <li>Si fallas, se activa la ruleta de penalización.</li>
              <li>
                ¡Gana quien tenga mayor puntuación tras todos los lanzamientos!
              </li>
            </ol>
          </article>
        </section>
      </div>
    </>
  );
}
