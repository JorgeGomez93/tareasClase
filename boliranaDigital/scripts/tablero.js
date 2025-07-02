firebase.auth().onAuthStateChanged((user) => {
  if (!user) {
    localStorage.clear();
    window.location.href = "../pages/play.html"; // o index
  }
});
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
    <button id="btn-logout">Cerrar sesión</button>
  </div>
`;
    const btnLogout = document.getElementById("btn-logout");
    if (btnLogout) {
      btnLogout.addEventListener("click", async () => {
        try {
          await firebase.auth().signOut();
          localStorage.clear(); // limpiar estado local
          alert("Sesión cerrada correctamente.");
          window.location.href = "../index.html"; // o "../pages/play.html"
        } catch (error) {
          console.error("Error al cerrar sesión:", error.message);
          alert("Hubo un error al cerrar sesión.");
        }
      });
    }
  } else {
    contenedor.innerHTML = "<p>No has iniciado sesión.</p>";
  }
});
