function obtenerRuta(path) {
  const estaEnPages = window.location.pathname.includes("/pages/");
  return estaEnPages ? `../components/${path}` : `components/${path}`;
}

async function cargarNavbar() {
  try {
    const response = await fetch(obtenerRuta("navbar.html"));

    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const html = await response.text();
    const contenedor = document.getElementById("navbar-container");
    contenedor.innerHTML = html;
    ajustarRutasBase(contenedor);
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
    contenedor.innerHTML = html;
    ajustarRutasBase(contenedor);
    activarDesplegablesFooter();
  } catch (error) {
    console.error("Error al cargar footer:", error.message);
  }
}

function ajustarRutasBase(contenedor) {
  const estaEnIndex =
    window.location.pathname.endsWith("/index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "/TuBoliranaDigital/";

  if (!estaEnIndex) return;

  // Corrige imágenes con ../
  contenedor.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src");
    if (src?.startsWith("../")) {
      img.setAttribute("src", src.replace("../", ""));
    }
  });

  // Corrige enlaces con ../
  contenedor.querySelectorAll("a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href?.startsWith("../")) {
      a.setAttribute("href", href.replace("../", ""));
    }
  });
}

function activarDesplegablesFooter() {
  if (window.innerWidth > 768) return;

  const botones = document.querySelectorAll(".footer-toggle");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const targetId = boton.getAttribute("data-target");
      const contenido = document.getElementById(targetId);
      const flecha = boton.querySelector(".arrow");

      const estaAbierto = contenido.classList.contains("activo");

      // Cierra todos
      document.querySelectorAll(".footer-content").forEach((el) => {
        el.classList.remove("activo");
      });
      document.querySelectorAll(".footer-toggle .arrow").forEach((flecha) => {
        flecha.textContent = "↓";
      });

      if (!estaAbierto) {
        contenido.classList.add("activo");
        flecha.textContent = "↑";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarNavbar();
  cargarFooter();
});
