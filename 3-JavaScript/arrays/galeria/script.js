const sectionGaleria = document.querySelector(".galeria");
const inputUrl = document.getElementById("url-imagen");
const botonAgregar = document.getElementById("botonAgregar");
const fileInput = document.getElementById("file-imagen");
let cont = 0;

// Función para validar URLs de imágenes
function esUrlValida(url) {
  try {
    new URL(url); // Validación sintáctica
    return /\.(jpg|jpeg|png|gif|webp)$/i.test(url); // Validación de extensión
  } catch {
    return false;
  }
}

// Agregar imagen desde URL
botonAgregar.addEventListener("click", (e) => {
  e.preventDefault();

  const url = inputUrl.value.trim();
  inputUrl.value = "";

  if (!esUrlValida(url)) {
    alert("Por favor, introduce una URL válida de imagen (jpg, png, etc.)");
    return;
  }

  const figure = document.createElement("figure");
  const imagen = document.createElement("img");
  const botonEliminar = document.createElement("button");

  imagen.src = url;
  imagen.alt = `imagen${cont++}`;

  figure.classList.add("imagen");
  botonEliminar.innerHTML = "&times;";
  botonEliminar.classList.add("eliminar");

  // Evento para eliminar la imagen suavemente
  botonEliminar.addEventListener("click", () => {
    figure.classList.add("eliminada");
    setTimeout(() => figure.remove(), 300);
  });

  figure.appendChild(imagen);
  figure.appendChild(botonEliminar);
  sectionGaleria.appendChild(figure);
});

// Agregar imagen desde archivo local
fileInput.addEventListener("change", (e) => {
  const archivo = e.target.files[0];
  if (!archivo) return;

  const urlTemporal = URL.createObjectURL(archivo);

  const figure = document.createElement("figure");
  const imagen = document.createElement("img");
  const botonEliminar = document.createElement("button");

  imagen.src = urlTemporal;
  imagen.alt = archivo.name;

  figure.classList.add("imagen");
  botonEliminar.innerHTML = "&times;";
  botonEliminar.classList.add("eliminar");

  // Evento para eliminar la imagen suavemente
  botonEliminar.addEventListener("click", () => {
    figure.classList.add("eliminada");
    setTimeout(() => figure.remove(), 300);
  });

  figure.appendChild(imagen);
  figure.appendChild(botonEliminar);
  sectionGaleria.appendChild(figure);

  fileInput.value = ""; // limpiar campo de archivo
});
