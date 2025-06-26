function Saludo() {
  const nombre = "Jorge";
  return (
    <div className="TarjetaSaludo">
      <h2>Bienvenido</h2>
      <p>Hola, {nombre}</p>
    </div>
  );
}

export default Saludo;
