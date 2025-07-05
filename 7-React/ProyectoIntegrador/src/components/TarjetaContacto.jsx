import React from "react";

const TarjetaContacto = ({
  nombre,
  email,
  telefono,
  activo,
  avatar = "/1.jpg",
}) => {
  return (
    <div className="tarjetaContacto">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="datos">
        <div className="titulo"></div>
        <h1>{nombre}</h1>
        <div className="info">
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
