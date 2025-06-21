const form = document.getElementById("form");
const form1 = document.getElementById("form1");

const nombreInput = document.getElementById("nombre");
const puestoInput = document.getElementById("puesto");
const salarioInput = document.getElementById("salario");
const activoCheckbox = document.getElementById("isActivo");

const botonEmpleados = document.querySelector("#showActiveEmployed");
const botonNominas = document.querySelector("#totalNominas");

const inputBuscarNombre = document.querySelector("#searchNombre");
const botonBuscar = document.querySelector("#showEmployed"); // ← este es el botón real
const seccionResultado = document.querySelector(".searchEmployed");

const listaActivos = document.querySelector(".empleados-lista");
const gastoNominatotal = document.querySelector(".gasto-nominas");

const empleados = [];

//capturar evento de enviar el formulario
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = nombreInput.value;
  nombreInput.value = "";
  const puesto = puestoInput.value;
  puestoInput.value = "";
  const salario = parseFloat(salarioInput.value);
  salarioInput.value = "";
  const activo = activoCheckbox.checked;
  activoCheckbox.checked = false;

  const nuevoEmpleado = {
    nombre,
    puesto,
    salario,
    activo,
  };

  if (!nombre || !puesto || isNaN(salario) || salario <= 0) {
    alert("Por favor, completa los campos correctamente.");
    return;
  } else {
    empleados.push(nuevoEmpleado);
  }
});

//capturar el evento de mostar empleados activos
botonEmpleados.addEventListener("click", function (e) {
  e.preventDefault();

  const empleadosActivos = getEmpleadosActivos();

  if (empleadosActivos.length > 0) {
    listaActivos.innerHTML = "";

    empleadosActivos.forEach((empleado) => {
      const div = document.createElement("div");
      div.textContent = `Nombre: ${empleado.nombre}, Puesto: ${empleado.puesto}, Salario: ${empleado.salario}`;
      listaActivos.appendChild(div);
    });
  } else alert("No hay empleados activos registrados");
});

//capturar el evento de calcular nominas
botonNominas.addEventListener("click", function (e) {
  e.preventDefault();

  const empleadosActivos = getEmpleadosActivos();

  if (empleadosActivos.length > 0) {
    gastoNominatotal.innerHTML = "";
    let gastoNomina = 0;

    empleadosActivos.forEach((empleado) => {
      gastoNomina += empleado.salario;
    });
    const div = document.createElement("div");
    div.textContent = `Gasto total de nómina: €${gastoNomina.toFixed(2)}`;
    gastoNominatotal.appendChild(div);
  } else alert("No hay empleados activos registrados");
});

function getEmpleadosActivos() {
  return empleados.filter((e) => e.activo);
}

//capturar evento de buscar empleado por nombre
botonBuscar.addEventListener("click", function (e) {
  e.preventDefault();

  const nombreBuscado = inputBuscarNombre.value.trim().toLowerCase();
  seccionResultado.innerHTML = "";

  const resultados = empleados.filter(
    (emp) => emp.nombre.toLowerCase() === nombreBuscado
  );

  if (resultados.length > 0) {
    resultados.forEach((emp) => {
      const div = document.createElement("div");
      div.textContent = `Nombre: ${emp.nombre}, Puesto: ${emp.puesto}, Salario: ${emp.salario}, Activo: ${emp.activo}`;
      seccionResultado.appendChild(div);
    });
  } else {
    alert("Empleado no encontrado");
  }
  inputBuscarNombre.value = "";
});
