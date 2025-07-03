import React, { useState } from "react";

const SimpleForm = () => {
  // Inicializamos el estado del formulario con un objeto que contiene dos campos: username y email
  const [formState, setFormState] = useState({ username: "", email: "" });

  // Desestructuramos el target del event
  // Función para manejar los cambios en los campos de entrada del formulario

  const handleInputChange = ({ target }) => {
    // De target nos interesa dos valores: name (necesario delararlo en los inputs del formulario) y value
    const { name, value } = target;

    // Actualizamos el estado del formulario agregando o modificando el campo correspondiente.
    setFormState({ ...formState, [name]: value });
    // Imprimimos por consola el estado de los inputs
    console.log(formState);
  };
  return (
    <>
      <h1>Simple form</h1>
      <input
        type="text"
        placeholder="Introduce tu nombre" //
        // El valor del atributo name debe coincidir con una propiedad del objeto
        name="username"
        // El valor actual para la propiedad correspondiente en el state
        value={formState.username}
        onChange={handleInputChange}
      />
      <input
        type="email"
        placeholder="Introduce tu email"
        name="email"
        value={formState.email}
        onChange={handleInputChange}
      />
    </>
  );
};

export default SimpleForm;
