import React from "react";
import { useState } from "react";

const FormControlado = () => {
  const [name, setName] = useState("");
  return (
    <form>
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button>Enviar</button>
    </form>
  );
};

export default FormControlado;
