document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector('form[name="formulario-registro"]');

  // === INICIO DE SESIÓN ===
  if (formulario && window.location.pathname.includes("play.html")) {
    formulario.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = formulario.email.value.trim();
      const password = formulario.password.value.trim();

      if (!email || !password) {
        alert("Por favor completa los campos");
        return;
      }

      try {
        const response = await fetch("http://localhost:8000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.detail || "Error en el inicio de sesión");
        }

        const userData = await response.json();

        // Guardar en localStorage
        localStorage.setItem("usuarioActivo", userData.username);
        if (userData.avatar) {
          localStorage.setItem("avatar", JSON.stringify(userData.avatar));
        }

        alert("Inicio de sesión exitoso");
        window.location.href = "../pages/tablero.html";

      } catch (error) {
        console.error("❌ Error al iniciar sesión:", error);
        alert(error.message || "No se pudo conectar con el servidor. Asegúrate de que esté en ejecución.");
      }
    });

    // Botón crear cuenta
    const btnCrear = formulario.querySelector('input[value="Crear cuenta"]');
    if (btnCrear) {
      btnCrear.addEventListener("click", () => {
        window.location.href = "../pages/registro.html";
      });
    }

    const togglePasswordImg = document.getElementById("toggle-password");
    const passwordInput = document.getElementById("password");

    if (togglePasswordImg && passwordInput) {
      togglePasswordImg.addEventListener("click", () => {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";

        // Cambiar imagen según el estado
        togglePasswordImg.src = isPassword
          ? "../assets/icon/eye-close.jpg"
          : "../assets/icon/eye-open.jpg";
        togglePasswordImg.alt = isPassword
          ? "Ocultar contraseña"
          : "Mostrar contraseña";
      });
    }
  }
});
