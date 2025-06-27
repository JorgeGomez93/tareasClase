document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector('form[name="formulario-registro"]');

  // === MANEJAR REGISTRO ===
  if (formulario && window.location.pathname.includes("registro.html")) {
    formulario.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = formulario.email.value.trim();
      const username = formulario.username.value.trim();
      const password = formulario.password.value.trim();

      if (!email || !username || !password) {
        alert("Por favor completa todos los campos.");
        return;
      }

      try {
        const respuestaTotal = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const datosTotal = await respuestaTotal.json();
        const totalPersonajes = datosTotal.info.count;

        const randomId = Math.floor(Math.random() * totalPersonajes) + 1;
        const respuestaPersonaje = await fetch(
          `https://rickandmortyapi.com/api/character/${randomId}`
        );
        const personaje = await respuestaPersonaje.json();

        localStorage.setItem("usuarioActivo", username);
        localStorage.setItem(
          "avatar",
          JSON.stringify({
            nombre: personaje.name,
            imagen: personaje.image,
          })
        );

        alert("Registro exitoso. ¡Tu avatar ha sido asignado!");
        window.location.href = "../pages/tablero.html";
      } catch (error) {
        console.error("Error al asignar avatar:", error.message);
        alert("Ocurrió un error al registrar. Inténtalo más tarde.");
      }
    });
  }

  // === MANEJAR INICIO DE SESIÓN ===
  if (formulario && window.location.pathname.includes("play.html")) {
    formulario.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = formulario.email.value.trim();
      const password = formulario.password.value.trim();

      if (!email || !password) {
        alert("Por favor completa los campos");
        return;
      }

      // Simulación de login: guardamos el correo como nombre de usuario
      localStorage.setItem("usuarioActivo", email);

      try {
        const randomId = Math.floor(Math.random() * 826) + 1;
        const respuesta = await fetch(
          `https://rickandmortyapi.com/api/character/${randomId}`
        );
        const personaje = await respuesta.json();

        localStorage.setItem(
          "avatar",
          JSON.stringify({
            nombre: personaje.name,
            imagen: personaje.image,
          })
        );

        alert("Inicio de sesión exitoso");
        window.location.href = "../pages/tablero.html";
      } catch (error) {
        console.error("Error asignando avatar aleatorio:", error.message);
        alert("Hubo un error al asignar tu avatar. Intenta de nuevo.");
      }
    });

    // Botón crear cuenta
    const btnCrear = formulario.querySelector('input[value="Crear cuenta"]');
    if (btnCrear) {
      btnCrear.addEventListener("click", () => {
        window.location.href = "../pages/registro.html";
      });
    }

    // Botón recuperar contraseña
    const btnRecuperar = document.getElementById("btn-recuperar");
    if (btnRecuperar) {
      btnRecuperar.addEventListener("click", () => {
        alert("Funcionalidad de recuperación próximamente...");
      });
    }
  }
});
