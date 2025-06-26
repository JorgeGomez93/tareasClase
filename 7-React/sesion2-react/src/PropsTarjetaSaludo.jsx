import "./TarjetaSaludo.css";
function PropsTarjetaSaludo({nombre, profesion, imagen}) {
  return (
    <>
      <div className="Tarjeta">
        <h1>{nombre}</h1>
        <p>{profesion}</p>
        <img src={imagen} alt="imagen de perfil" />
      </div>
    </>
  );
}
export default PropsTarjetaSaludo;
