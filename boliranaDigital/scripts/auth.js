document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector('form[name="formulario-registro"]');

  const auth = firebase.auth();
  const db = firebase.firestore();

  // === REGISTRO DE USUARIO ===
  if (formulario && window.location.pathname.includes("registro.html")) {
    // Botón para iniciar sesión desde el registro
    const btnIrLogin = document.getElementById("btn-ir-login");
    if (btnIrLogin) {
      btnIrLogin.addEventListener("click", () => {
        formulario.reset(); // opcional
        window.location.href = "../pages/play.html";
      });
    }

    formulario.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = formulario.email.value.trim();
      const username = formulario.username.value.trim();
      const password = formulario.password.value.trim();
      const passwordConfirm = formulario.password_confirm.value.trim();

      if (!email || !username || !password || !passwordConfirm) {
        alert("Por favor completa todos los campos.");
        return;
      }

      if (password !== passwordConfirm) {
        alert("Las contraseñas no coinciden.");
        return;
      }

      try {
        // ✅ Verificar que el username no esté en uso
        const query = await firebase
          .firestore()
          .collection("usuarios")
          .where("username", "==", username)
          .get();

        if (!query.empty) {
          alert("El nombre de usuario ya está en uso. Por favor elige otro.");
          return;
        }

        // 🔐 Crear usuario en Firebase
        const userCredential = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        const uid = user.uid;

        // 🎭 Obtener avatar
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

        if (!personaje || !personaje.name || !personaje.image) {
          alert("No se pudo asignar un avatar. Intenta de nuevo.");
          return;
        }

        const avatarData = {
          nombre: personaje.name,
          imagen: personaje.image,
        };

        // 🧾 Guardar en Firestore
        await firebase.firestore().collection("usuarios").doc(uid).set({
          email,
          username,
          avatar: avatarData,
        });

        // 🧠 Guardar en localStorage (opcional)
        localStorage.setItem("usuarioActivo", username);
        localStorage.setItem("avatar", JSON.stringify(avatarData));

        alert("Registro exitoso. ¡Tu avatar ha sido asignado!");
        formulario.reset();
        window.location.href = "../pages/tablero.html";
      } catch (error) {
        console.error("❌ Error al registrar:", error);
        if (error.code === "auth/email-already-in-use") {
          alert("Este correo ya está registrado.");
        } else if (error.code === "auth/weak-password") {
          alert("La contraseña debe tener al menos 6 caracteres.");
        } else {
          alert("Error inesperado: " + error.message);
        }
      }
    });
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

  // === INICIO DE SESIÓN (simulado de momento) ===
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
        // ✅ Inicio de sesión real
        const userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // 🔍 Leer datos del usuario desde Firestore
        const doc = await firebase
          .firestore()
          .collection("usuarios")
          .doc(user.uid)
          .get();
        const data = doc.data();

        if (!data) {
          throw new Error("No se encontraron datos del usuario.");
        }

        // ✅ Guardar en localStorage (opcional, para mostrar en tablero)
        localStorage.setItem("usuarioActivo", data.username);
        localStorage.setItem("avatar", JSON.stringify(data.avatar));

        alert("Inicio de sesión exitoso");
        window.location.href = "../pages/tablero.html";
      } catch (error) {
        console.error("❌ Error al iniciar sesión:", error);

        if (error.code === "auth/user-not-found") {
          alert("El correo ingresado no está registrado.");
        } else if (error.code === "auth/wrong-password") {
          alert("La contraseña ingresada no es correcta.");
        } else if (error.code === "auth/invalid-email") {
          alert("Formato de correo inválido.");
        } else if (error.code === "auth/internal-error") {
          console.warn("Posiblemente usuario y contraseña no coinciden.");
          alert(
            "No pudimos iniciar sesión. Verifica tus datos e inténtalo de nuevo."
          );
        } else {
          alert("Error desconocido: " + error.message);
        }
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
      btnRecuperar.addEventListener("click", async () => {
        const emailInput = document.getElementById("email");
        const email = emailInput?.value.trim();

        if (!email) {
          alert(
            "Por favor, escribe tu correo electrónico en el campo correspondiente."
          );
          return;
        }

        try {
          await firebase.auth().sendPasswordResetEmail(email);
          alert("Te hemos enviado un correo para restablecer tu contraseña.");
        } catch (error) {
          console.error("❌ Error al enviar el correo:", error);
          if (error.code === "auth/user-not-found") {
            alert("Ese correo no está registrado.");
          } else if (error.code === "auth/invalid-email") {
            alert("El formato del correo no es válido.");
          } else {
            alert("Hubo un error al enviar el correo: " + error.message);
          }
        }
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
