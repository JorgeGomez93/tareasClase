let progreso = 0;

const intervalId = setInterval(function () {
    progreso += 1; // Incrementar el progreso en 10 unidades
    console.log("Progreso: " + progreso + "%");

    if (progreso >= 100) {
        clearInterval(intervalId); // Detener el intervalo cuando el progreso alcanza 100%
        console.log("Carga completa.");
    }
}, 500); // Ejecutar cada 500 milisegundos (0.5 segundos)
console.log("Este mensaje aparece antes de que la barra llegue al 100%");