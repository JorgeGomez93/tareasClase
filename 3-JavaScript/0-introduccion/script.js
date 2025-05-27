// dar la funcion de click a mi boton y mosrar un mensaje al usuario
document.getElementById("miBoton").addEventListener("click", function () {
  alert("Has hecho click en el boton!");
});

console.log("Hola Mundo desde la consola");
alert("¡Hola Mundo!");

alert("Bienvenido a nuestra página!");
let nombre = prompt("¿Cómo te llamas?");
console.log("Hola " + nombre);

let respuesta = confirm("¿Estás seguro de continuar?");
if (respuesta) {
  console.log("El usuario confirmó");
} else {
  console.log("El usuario canceló");
}
