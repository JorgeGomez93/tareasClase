const intervlalId = setInterval(useCallback, tiempoEnMilisegundos);

// Para detenerlo

clearInterval(intervlalId);

// Ejemplo básico de uso de setInterval:
let count = 0;

const intervalId = setInterval(function () {
  count++;
  console.log("Segundo: " + count);

  // Detener el intervalo después de 5 segundos
  if (count >= 5) {
    clearInterval(intervalId);
    console.log("Intervalo detenido después de 5 segundos.");
  }
}, 1000); // Ejecutar cada 1000 milisegundos (1 segundo)
