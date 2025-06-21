const titulo = document.querySelector("#titulo");
const parrafo = document.querySelector("#parrafo");
const boton = document.querySelector("#boton");
const contenedor = document.querySelector("#contenedor");

const parrafoNuevo = document.createElement("p");
parrafoNuevo.textContent = "Este es un nuevo párrafo agregado dinámicamente.";

contenedor.appendChild(parrafoNuevo);

titulo.textContent = "Nuevo Título";
parrafo.textContent = "Este párrafo ha sido modificado por JavaScript";

boton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-theme");
});