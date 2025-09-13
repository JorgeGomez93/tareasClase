// scripts/login.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[name="formulario-registro"]');
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

  //Manejo del registro
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const username = form.username.value.trim();
    const passwordConfirm = form.password_confirm.value.trim();

    if (password !== passwordConfirm) {
      return alert("Las contraseñas no coinciden");
    }

    try {
      const res = await fetch("http://localhost:8000/jugadores/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        return alert(err.detail);
      }

      alert("Registro exitoso. Ya puedes iniciar sesión.");
      // Redirige a iniciar sesión
      window.location.href = "play.html";
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("No se pudo conectar con el servidor");
    }
  });

  // Botón “Iniciar sesión” en registro.html
  const btnIniciar = form.querySelector(
    'input[type="button"][value="Iniciar sesión"]'
  );
  if (btnIniciar) {
    btnIniciar.addEventListener("click", () => {
      //redirige a la página de inicio de sesión
      window.location.href = "play.html";
    });
  }
});
