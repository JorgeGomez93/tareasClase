import "../styles/config.css";
import { useEffect, useRef, useState } from "react";
import { useSound } from "../hooks/useSound";

const DESCUENTOS = Object.freeze([-50, -100, -150, -200, "RULETA"]);

export default function ConfigPage() {
  const { isMuted } = useSound();
  const backgroundMusicRef = useRef(new Audio("/assets/music/background-music.mp3"));

  // Efecto para la música de fondo, se activa solo en esta página
  useEffect(() => {
    const music = backgroundMusicRef.current;
    music.loop = true;
    music.play().catch(error => console.error("Error al reproducir la música de fondo:", error));

    return () => {
      music.pause();
      music.currentTime = 0;
    };
  }, []);

  // Efecto para sincronizar el estado de silencio del contexto con la música de esta página
  useEffect(() => {
    backgroundMusicRef.current.muted = isMuted;
  }, [isMuted]);

  // 0..5 = opciones del menú, 6 = "EMPEZAR JUEGO"
  const TOTAL_ITEMS = 7;
  const [selected, setSelected] = useState(0); // 0 => BORRAR CHICOS
  const containerRef = useRef(null);
  const clickSoundRef = useRef(new Audio("/assets/audio/rana.wav"));
  const [numJugadores, setNumJugadores] = useState(2);
  const [chicosJugados, setChicosJugados] = useState(0);
  const [puntajeChico, setPuntajeChico] = useState(1000);
  const [porParejas, setPorParejas] = useState(false);
  const [monona, setMonona] = useState(false);
  const [descuentoBlanco, setDescuentoBlanco] = useState(DESCUENTOS[0]);
  const isInitialMount = useRef(true);

  //Auto-focus del contendor para capturar eventos de teclado
  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  //Sonido al cambiar de opción
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const sound = clickSoundRef.current;
      sound.currentTime = 0;
      sound.play().catch(error => console.error("Error al reproducir el sonido:", error));
    }
  }, [selected]);

  //Manejo de eventos de teclado
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((prev) => (prev + 1) % TOTAL_ITEMS);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((prev) => (prev - 1 + TOTAL_ITEMS) % TOTAL_ITEMS);
    }
    if (e.key === "Enter") {
      e.preventDefault();

      changeNumericOption(selected);
    }
  };
  function changeNumericOption(option) {
    switch (option) {
      case 0: // Chicos jugados
        setChicosJugados((prev) => (prev === 10 ? 0 : prev + 1));
        break;
      case 1: // Número de jugadores
        setNumJugadores((prev) => (prev === 12 ? 2 : prev + 1));
        break;
      case 2: // Puntaje del chico
        setPuntajeChico((prev) => (prev === 5000 ? 1000 : prev + 1000));
        break;
      case 3: // Por parejas
        setPorParejas((prev) => !prev);
        break;
      case 4: // Monona
        setMonona((prev) => !prev);
        break;
      case 5: // Descuento de blanco
        setDescuentoBlanco((prev) => {
          const idx = DESCUENTOS.indexOf(prev);
          const next = DESCUENTOS[(idx + 1) % DESCUENTOS.length];
          return next;
        });
        break;
      case 6: // Empezar juego
        // Aquí iría la lógica para iniciar el juego con las configuraciones seleccionadas
        alert("¡Juego iniciado con las configuraciones seleccionadas!");
        break;
      default:
        break;
    }
  }

  //Helper para asignar la clase "seleccionada"
  const cx = (base, idx) => (selected === idx ? `${base} seleccionada` : base);

  return (
    <div id="overlay">
      <main
        className="pantalla-config"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        ref={containerRef}
        aria-label="Configuración del juego"
      >
        <div>
          <img
            src="/assets/images/Principal.webp"
            alt="Fondo principal"
            className="fondo-juego"
          />
          <div className="configuracion">
            <span className="titulo">{numJugadores}</span>
          </div>
          <div className="configuracion1">
            <span className="valor">JUGADORES</span>
          </div>

          {/* Opciones de configuración */}
          <div className={cx("opcion", 0)} data-opcion="1">
            <span className="titulo">BORRAR CHICOS</span>
            <span className="valor"> {chicosJugados} CHICOS JUGADOS</span>
          </div>

          <div className={cx("opcion", 1)} data-opcion="2">
            <span className="titulo">NÚMERO DE JUGADORES</span>
            <span className="valor"> {numJugadores} JUGADORES</span>
          </div>

          <div className={cx("opcion", 2)} data-opcion="3">
            <span className="titulo">PUNTAJE DEL CHICO</span>
            <span className="valor"> {puntajeChico} PUNTOS</span>
          </div>

          <div className={cx("opcion", 3)} data-opcion="4">
            <span className="titulo">POR PAREJAS</span>
            <span className="valor">{porParejas ? "SÍ" : "NO"}</span>
          </div>

          <div className={cx("opcion", 4)} data-opcion="5">
            <span className="titulo">CONFIGURAR MONONA</span>
            <span className="valor">{monona ? "SÍ" : "NO"}</span>
          </div>

          <div className={cx("opcion", 5)} data-opcion="6">
            <span className="titulo">DESCUENTO DE BLANCO</span>
            <span className="valor">
              {descuentoBlanco === "RULETA" ? "RULETA" : descuentoBlanco}
            </span>
          </div>
          <div className={cx("opcion", 6)} data-opcion="7">
            <span className="titulo">EMPEZAR JUEGO</span>
          </div>
        </div>
      </main>
    </div>
  );
}
