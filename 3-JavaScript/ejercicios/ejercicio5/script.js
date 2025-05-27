do {
  let password = prompt(
    `Crea Una contraseña con las siguientes caracteristicas: \n` +
      `- Tener al menos 8 caracteres\n` +
      `- Contener al menos un número\n` +
      `- Contener al menos una letra mayúscula`
  );

  if (password.length >= 8) {
    if (/\d/.test(password)) {
      if (/[A-Z]/.test(password)) {
        alert("Felicidades, Contraseña creada con exito!");
        break;
      } else {
        alert("Error: No contiene letras mayúsculas");
      }
    } else {
      alert("Error: La cadena NO contiene números");
    }
  } else {
    alert("Error: Contraseña muy corta");
  }
} while (true);
