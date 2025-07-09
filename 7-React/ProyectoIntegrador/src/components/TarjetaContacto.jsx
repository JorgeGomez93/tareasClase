import React from "react";
// import "./TarjetaContacto.css";
import styles from "./TarjetaContacto.module.scss";


const TarjetaContacto = ({
  nombre,
  email,
  telefono,
  activo,
  avatar = "/1.jpg",
}) => {
  return (
    <div className={styles.tarjetaContacto}>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles.datos}>
        <div className={styles.titulo}></div>
        <h1>{nombre}</h1>
        <div className={styles.info}>
          <p>
            <span>Email:</span> {email}
          </p>
          <p>
            <span>Teléfono:</span> {telefono}
          </p>
          <p>
            <span>Activo:</span> {activo ? "✅" : "🔴"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TarjetaContacto;
