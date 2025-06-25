function hacerAlgoAsincrono(callback) {
  // Simular una operación que toma tiempo (2 segundos)
  setTimeout(() => {
    // Cuando termine, llamar al callback
    callback();
  }, 2000);
}

function cuandoTermine() {
  console.log("¡He terminado!");
}

hacerAlgoAsincrono(cuandoTermine);
