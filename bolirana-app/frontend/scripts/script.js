async function updateNavbarState() {
  const token = localStorage.getItem('authToken');
  const userLoggedInLi = document.getElementById('user-logged-in');
  const loginRegisterButtonsLi = document.getElementById('login-register-buttons');

  if (!token) {
    // No hay token ⇒ estado deslogueado
    if (userLoggedInLi) userLoggedInLi.style.display = 'none';
    if (loginRegisterButtonsLi) loginRegisterButtonsLi.style.display = 'flex';
    return;
  }

  try {
    // 1) Pedir perfil al backend
    const res = await fetch('http://localhost:8000/users/me', {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!res.ok) {
      // Token inválido o error ⇒ limpiar sesión y volver a inicio
      localStorage.removeItem('authToken');
      localStorage.removeItem('userData');
      if (userLoggedInLi) userLoggedInLi.style.display = 'none';
      if (loginRegisterButtonsLi) loginRegisterButtonsLi.style.display = 'flex';
      return;
    }

    const profile = await res.json();

    // 2) Guardar perfil completo para usos futuros
    localStorage.setItem('userData', JSON.stringify(profile));

    // 3) Pintar UI
    if (userLoggedInLi) userLoggedInLi.style.display = 'flex';
    if (loginRegisterButtonsLi) loginRegisterButtonsLi.style.display = 'none';

    const avatarSmall = document.getElementById('avatar');
    const avatarBig   = document.getElementById('avatar-dropdown');
    const nameEl      = document.getElementById('username-display');
    const emailEl     = document.getElementById('email-display');

    const avatarUrl = profile?.avatar?.imagen || '/assets/avatar-placeholder.png';

    if (avatarSmall) avatarSmall.src = avatarUrl;
    if (avatarBig)   avatarBig.src   = avatarUrl;
    if (nameEl && profile?.username) nameEl.textContent = profile.username;
    if (emailEl && profile?.email)   emailEl.textContent = profile.email;

    // 4) Logout
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
      logoutButton.onclick = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        window.location.href = '/';
      };
    }
  } catch (err) {
    console.error('Error al obtener perfil:', err);
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    if (userLoggedInLi) userLoggedInLi.style.display = 'none';
    if (loginRegisterButtonsLi) loginRegisterButtonsLi.style.display = 'flex';
  }
}


function obtenerRuta(path) {
  const estaEnPages = window.location.pathname.includes("/pages/");
  const base = estaEnPages ? ".." : ".";
  return `${base}/components/${path}`;
}

async function cargarNavbar() {
  try {
    const response = await fetch(obtenerRuta("navbar.html"));
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const html = await response.text();
    const contenedor = document.getElementById("navbar-container");
    if (contenedor) {
      contenedor.innerHTML = html;
      await updateNavbarState();
    }
  } catch (error) {
    console.error("Error al cargar navbar:", error.message);
  }
}

async function cargarFooter() {
  try {
    const response = await fetch(obtenerRuta("footer.html"));
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const html = await response.text();
    const contenedor = document.getElementById("footer-container");
    if (contenedor) {
      contenedor.innerHTML = html;
      activarDesplegablesFooter();
    }
  } catch (error) {
    console.error("Error al cargar footer:", error.message);
  }
}

function activarDesplegablesFooter() {
  if (window.innerWidth <= 768) {
    const botones = document.querySelectorAll(".footer-toggle");
    botones.forEach((boton) => {
      boton.addEventListener("click", () => {
        const targetId = boton.getAttribute("data-target");
        const contenido = document.getElementById(targetId);
        const flecha = boton.querySelector(".arrow");
        const estaAbierto = contenido.classList.contains("activo");

        document
          .querySelectorAll(".footer-content.activo")
          .forEach((el) => el.classList.remove("activo"));
        document
          .querySelectorAll(".footer-toggle .arrow")
          .forEach((f) => (f.textContent = "↓"));

        if (!estaAbierto) {
          contenido.classList.add("activo");
          flecha.textContent = "↑";
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cargarNavbar();
  cargarFooter();
});


function obtenerRuta(path) {
  const estaEnPages = window.location.pathname.includes("/pages/");
  const base = estaEnPages ? ".." : ".";
  return `${base}/components/${path}`;
}

async function cargarNavbar() {
  try {
    const response = await fetch(obtnerRuta("navbar.html"));
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const html = await response.text();
    const contenedor = document.getElementById("navbar-container");
    if (contenedor) {
      contenedor.innerHTML = html;
      await updateNavbarState();
    }
  } catch (error) {
    console.error("Error al cargar navbar:", error.message);
  }
}

async function cargarFooter() {
  try {
    const response = await fetch(obtenerRuta("footer.html"));
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const html = await response.text();
    const contenedor = document.getElementById("footer-container");
    if (contenedor) {
      contenedor.innerHTML = html;
      activarDesplegablesFooter();
    }
  } catch (error) {
    console.error("Error al cargar footer:", error.message);
  }
}

function activarDesplegablesFooter() {
  if (window.innerWidth <= 768) {
    const botones = document.querySelectorAll(".footer-toggle");
    botones.forEach((boton) => {
      boton.addEventListener("click", () => {
        const targetId = boton.getAttribute("data-target");
        const contenido = document.getElementById(targetId);
        const flecha = boton.querySelector(".arrow");
        const estaAbierto = contenido.classList.contains("activo");

        document
          .querySelectorAll(".footer-content.activo")
          .forEach((el) => el.classList.remove("activo"));
        document
          .querySelectorAll(".footer-toggle .arrow")
          .forEach((f) => (f.textContent = "↓"));

        if (!estaAbierto) {
          contenido.classList.add("activo");
          flecha.textContent = "↑";
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cargarNavbar();
  cargarFooter();
});


function obtenerRuta(path) {
  const estaEnPages = window.location.pathname.includes("/pages/");
  const base = estaEnPages ? ".." : ".";
  return `${base}/components/${path}`;
}

async function cargarNavbar() {
  try {
    const response = await fetch(obtenerRuta("navbar.html"));
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const html = await response.text();
    const contenedor = document.getElementById("navbar-container");
    if (contenedor) {
      contenedor.innerHTML = html;
      await updateNavbarState();
    }
  } catch (error) {
    console.error("Error al cargar navbar:", error.message);
  }
}

async function cargarFooter() {
  try {
    const response = await fetch(obtenerRuta("footer.html"));
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const html = await response.text();
    const contenedor = document.getElementById("footer-container");
    if (contenedor) {
      contenedor.innerHTML = html;
      activarDesplegablesFooter();
    }
  } catch (error) {
    console.error("Error al cargar footer:", error.message);
  }
}

function activarDesplegablesFooter() {
  if (window.innerWidth <= 768) {
    const botones = document.querySelectorAll(".footer-toggle");
    botones.forEach((boton) => {
      boton.addEventListener("click", () => {
        const targetId = boton.getAttribute("data-target");
        const contenido = document.getElementById(targetId);
        const flecha = boton.querySelector(".arrow");
        const estaAbierto = contenido.classList.contains("activo");

        document
          .querySelectorAll(".footer-content.activo")
          .forEach((el) => el.classList.remove("activo"));
        document
          .querySelectorAll(".footer-toggle .arrow")
          .forEach((f) => (f.textContent = "↓"));

        if (!estaAbierto) {
          contenido.classList.add("activo");
          flecha.textContent = "↑";
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cargarNavbar();
  cargarFooter();
});
