// scripts/login.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[name="formulario-login"]');

  const toggleIcons = document.querySelectorAll(".toggle-password");
  toggleIcons.forEach((icon) => {
    const input = icon.previousElementSibling; // asume que el <input> está justo antes
    icon.style.cursor = "pointer";

    icon.addEventListener("click", () => {
      const isPassword = input.type === "password";
      // 1) Alternar el tipo de input
      input.type = isPassword ? "text" : "password";
      // 2) Cambiar la imagen y alt
      icon.src = isPassword
        ? "../assets/icon/eye-close.jpg"
        : "../assets/icon/eye-open.jpg";
      icon.alt = isPassword ? "Ocultar contraseña" : "Mostrar contraseña";
    });
  });

  //Manejo del Login
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    try {
      const res = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const err = await res.json();
        alert(err.detail || "Email o contraseña inválidos");
        return;
      }

      // Ahora esperamos un token y los datos del usuario
      const tokenData = await res.json();

      // *** CAMBIOS INICIADOS POR GEMINI ***
      // Eliminamos cualquier dato de sesión antiguo para evitar conflictos
      localStorage.removeItem("accessToken"); // Eliminamos el token antiguo
      localStorage.removeItem("userData");    // Eliminamos los datos de usuario antiguos

      // Guardamos el token de acceso y los datos completos del usuario en localStorage
      // El token se guarda por separado para fácil acceso
      localStorage.setItem("authToken", tokenData.access_token);
      // Los datos del usuario (incluyendo avatar, username, email) se guardan como un objeto JSON
      localStorage.setItem("userData", JSON.stringify(tokenData));
      // *** FIN DE CAMBIOS DE GEMINI ***

      // Redirige a la página de configuración para que la navbar se actualice con los datos del usuario
      window.location.href = "../pages/config.html";
    } catch (error) {
      console.error("Error al conectar con la API:", error);
      alert("No se pudo conectar con el servidor");
    }
  });

  //Boton de crear cuenta
  //seleccionamos el input cuyo value es "Crear cuenta"
  const btnCrear = form.querySelector(
    'input[type="button"][value="Crear cuenta"]'
  );
  if (btnCrear) {
    btnCrear.addEventListener("click", () => {
      //redirige a la página de registro
      window.location.href = "registro.html";
    });
  }

  //Boton "Olvidaste tu contraseña"
  const btnRecuperar = document.getElementById("btn-recuperar");
  if (btnRecuperar) {
    btnRecuperar.addEventListener("click", () => {
      alert("Funcionalidad en construcción");
    });
  }
});
