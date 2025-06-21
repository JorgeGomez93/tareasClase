const botonAgregarTarea = document.querySelector("#agregar");

const tablaBody = document.querySelector(".tabla-tareas tbody");

let tareas = [];

botonAgregarTarea.addEventListener("click", () => {
  const tareaInput = document.querySelector("#nuevaTarea");
  const tareaTexto = tareaInput.value.trim();

  if (tareaTexto === "") {
    alert("Por favor, ingresa una tarea.");
    return;
  }

  // Crear nueva fila y celdas
  const fila = document.createElement("tr");

  const celdaTarea = document.createElement("td");
  celdaTarea.textContent = tareaTexto;

  const celdaEstado = document.createElement("td");
  celdaEstado.textContent = "Pendiente";

  const celdaAcciones = document.createElement("td");

  // Botones
  const botonCompletado = document.createElement("button");
  botonCompletado.textContent = "Completado";
  botonCompletado.classList.add("btn", "completado");
  botonCompletado.addEventListener("click", () => {
    celdaEstado.textContent = "Completado";
  });

  const botonPendiente = document.createElement("button");
  botonPendiente.textContent = "Pendiente";
  botonPendiente.classList.add("btn", "pendiente");
  botonPendiente.addEventListener("click", () => {
    celdaEstado.textContent = "Pendiente";
  });
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("btn", "eliminar");
  botonEliminar.addEventListener("click", () => {
    fila.remove();
  });

  // Añadir botones a celda de acciones
  celdaAcciones.appendChild(botonCompletado);
  celdaAcciones.appendChild(botonPendiente);
  celdaAcciones.appendChild(botonEliminar);

  // Armar la fila
  fila.appendChild(celdaTarea);
  fila.appendChild(celdaEstado);
  fila.appendChild(celdaAcciones);

  // Insertar en la tabla
  tablaBody.appendChild(fila);

  // Limpiar input
  tareaInput.value = "";
});

// Estudiar Ingles
// Estudiar HTML
// Estudiar CSS
// Estudiar JavaScript
// Estudiar Git/GitHub
// Realizar proyecto final
