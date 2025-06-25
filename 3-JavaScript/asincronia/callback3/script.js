function procesar(datos, callback) {
  console.log("Procesando datos...");
  callback(datos.toUpperCase());
}

// function mostrarResultado(resultado) {
//   console.log("Resultado: " + resultado);
// }

// procesar("Hola, mundo", mostrarResultado);
// // Aquí se procesa la cadena de texto y se muestra el resultado en mayúsculas

// //Mismo ejemplo con una función anónima
// procesar("Hola, mundo", function (resultado) {
//   console.log("Resultado: " + resultado);
// });

//Con arrow function (más moderno)
procesar("Hola, mundo", (resultado) => {
  console.log("Resultado: " + resultado);
});