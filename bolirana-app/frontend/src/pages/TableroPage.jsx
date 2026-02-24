import '../styles/tablero.css';

export default function TableroPage() {
  // NOTE: The actual game component will be loaded here.
  return (
    <main className="tablero-container">
      <h1>Bienvenido al Tablero</h1>
      <div className="zona-juego">
        <p>Aquí se cargará el juego de bolirana.</p>
      </div>
    </main>
  );
}
