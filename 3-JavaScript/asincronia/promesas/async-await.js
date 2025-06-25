// sintaxis básica de async/await
async function miFuncion() {
  // codigo aquí
  return "Hola, mundo!";
}

// con arrow fuctions:
const miFuncionAsync = async () => {
  // codigo aquí
  return "Hola, mundo!";
};

async function ejemplo() {
  const respuesta = await fetch("https://api.com/datos");
  const datos = await respuesta.json();
  console.log(datos);
}

// ejemplo básico:
async function obtenerDatos() {
  const respuesta = await fetch("https://api.ejemplo.com/datos");
  const datos = await respuesta.json();
  return datos;
}

//equivale a esto con promesas:
function obtenerDatosConPromesas() {
  return fetch("https://api.ejemplo.com/datos").then((respuesta) =>
    respuesta.json()
  );
}

// con promesas (método anterior):
function obtenerUsuario(id) {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((usuario) => {
      console.log(`Nombre: ${usuario.name}`);
      console.log(`Email: ${usuario.email}`);
    })
    .catch((error) => {
      console.error("Error al obtener el usuario:", error);
    });
}

obtenerUsuario(1);

//con async/await (método actual):
async function obtenerUsuarioAsync(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const usuario = await response.json();
  console.log(`Nombre: ${usuario.name}`);
  console.log(`Email: ${usuario.email}`);
}
