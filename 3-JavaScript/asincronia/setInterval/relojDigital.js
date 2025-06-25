let intervaloId; // Variable global para guardar el id

function iniciarReloj() {
  intervaloId = setInterval(function () {
    const ahora = new Date();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const horaFormateada = `${hora}:${minutos}:${segundos}`;
    console.log("Hora actual: " + horaFormateada);
  }, 1000);
}

function detenerReloj() {
  clearInterval(intervaloId);
  console.log("Reloj detenido.");
}

iniciarReloj();

detenerReloj();
