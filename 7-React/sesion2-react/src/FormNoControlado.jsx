import React from "react";
import { useState } from "react";

const FormNoControlado = () => {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <form action="">
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button>Enviar</button>
    </form>
  );
};

export default FormNoControlado;
