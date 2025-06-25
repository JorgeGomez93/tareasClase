// Crear una promesa que se resuelve exitosamente
const promesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("¡Éxito!"); // Cambia a reject("Hubo un error") para probar el catch
  }, 1000);
});

promesa.then(function (resultado) {
  // Este código se ejecuta cuando la promesa se resuelve exitosamente
  console.log("La promesa se resolvió con el resultado:", resultado);
});
promesa.catch(function (error) {
  // Este código se ejecuta cuando la promesa es rechazada
  console.error("La promesa fue rechazada con el error:", error);
});


// También puedes usar una función flecha para el then y el catch
promesa.then((resultado) => {
  console.log("La promesa se resolvió con el resultado (usando flecha):", resultado);
}).catch((error) => {
  console.error("La promesa fue rechazada con el error (usando flecha):", error);
});
