async function cargarNavbar() {
  try {
    const response = await fetch("navbar.html");
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const html = await response.text();
    document.getElementById("navbar-container").innerHTML = html;
  } catch (error) {
    console.error("Error al cargar navbar:", error.message);
  }
}

async function cargarFooter() {
  try {
    const response = await fetch("footer.html");
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const html = await response.text();
    document.getElementById("footer-container").innerHTML = html;
    activarDesplegablesFooter();
  } catch (error) {
    console.error("Error al cargar footer:", error.message);
  }
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
