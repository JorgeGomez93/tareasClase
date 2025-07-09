import { useEffect, useState } from "react";
import TarjetaContacto from "./TarjetaContacto";
// import "./ListaContactos.css";
import styles from "./ListaContactos.module.css"; // Importamos el CSS module

const ListaContactos = ({ contactos }) => {
  const contactosTotales = contactos.length;
  const [totalDeActivos, setTotalActivos] = useState(0);
  const [filtro, setFiltro] = useState("todos");
  const [nombre, setName] = useState("");

  let listaFiltrada = contactos;

  if (filtro === "activos") listaFiltrada = contactos.filter((c) => c.activo);
  else if (filtro === "inactivos")
    listaFiltrada = contactos.filter((c) => !c.activo);
  else if (filtro === "alfabetico")
    listaFiltrada = [...contactos].sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );

  if (nombre.trim() !== "") {
    listaFiltrada = listaFiltrada.filter((c) =>
      c.nombre.toLowerCase().includes(nombre.trim().toLowerCase())
    );
  }

  useEffect(() => {
    const activos = contactos.filter((c) => c.activo).length;
    setTotalActivos(activos);
  }, [contactos]);

  if (!contactos.length) {
    return <p>No hay contactos para mostrar</p>;
  }

  return (
    <>
      <div className="top">
        <p className={styles.activos}>
          <span>Contactos totales:</span> {contactosTotales}{" "}
        </p>
        <p className={styles.activos}>
          <span>Contactos Activos:</span> {totalDeActivos}
        </p>
        <div className="botones">
          <button onClick={() => setFiltro("activos")}>Activos</button>
          <button onClick={() => setFiltro("inactivos")}>Inactivos</button>
          <button onClick={() => setFiltro("todos")}>Todos</button>
          <button onClick={() => setFiltro("alfabetico")}>
            Orden Alfabetico
          </button>
        </div>
        <form>
          <label htmlFor="nombre">Buscar Por Nombre: </label>
          <input
            type="text"
            placeholder="Escribe un nombre"
            name="nombre"
            id="nombre"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </form>
      </div>

      <div className="button">
        {listaFiltrada.length === 0 ? (
          <p>No hay contactos que coincidan con la búsqueda.</p>
        ) : (
          listaFiltrada.map((contacto) => (
            <TarjetaContacto
              key={contacto.id}
              nombre={contacto.nombre}
              email={contacto.email}
              telefono={contacto.telefono}
              activo={contacto.activo}
              avatar={contacto.avatar}
            />
          ))
        )}
      </div>
    </>
  );
};

export default ListaContactos;
