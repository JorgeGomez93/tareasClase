document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".zona-juego");
  const nombreUsuario = localStorage.getItem("usuarioActivo");
  const avatar = JSON.parse(localStorage.getItem("avatar"));

  if (nombreUsuario && avatar) {
    contenedor.innerHTML = `
  <div class="saludo-container">
    <p class="saludo-usuario">Hola, ${nombreUsuario}! 👋 Bienvenido al juego.</p>
    <div class="avatar-container">
      <img class="avatar-img" src="${avatar.imagen}" alt="${avatar.nombre}" />
      <p class="avatar-nombre">Tu avatar es: <strong>${avatar.nombre}</strong></p>
    </div>
  </div>
`;
  } else {
    contenedor.innerHTML = "<p>No has iniciado sesión.</p>";
  }
});
