let contenidos;
window.onload = () => {
  const myApp = document.getElementById("app");

  //crear 3 botones, asignarles listeners a la API
  const botones = document.getElementById("div");
  
  //crear un contenedor vacio para los contenidos que muestro
  const contenedor = document.createElement("div");
  contenedor.id = "contenidos";
  contenidos = contenedor;
  myApp.appendChild(contenedor, contenidos);
  contenidos.innerText = "hola";
  myApp.appendChild(contenedor);
};
