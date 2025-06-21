const pantalla = document.getElementById("pantalla");
const botones = document.querySelector(".botones");
const historialUl = document.getElementById("historial");
const btnLimpiarHistorial = document.querySelector(".historial button");

botones.addEventListener("click", (event) => {
  if (event.target.classList.contains("boton")) {
    const valor = event.target.textContent;

    if (valor === "C") {
      calculadora.limpiar();
      return;
    }
    if (valor === "⌫") {
      calculadora.borrar();
      return;
    }
    if (event.target.classList.contains("igual")) {
      calculadora.calcular();
      return;
    }
    if (event.target.classList.contains("operador")) {
      calculadora.agregarOperador(valor);
      return;
    }
    if (
      event.target.classList.contains("numero") ||
      event.target.classList.contains("dot")
    ) {
      calculadora.agregarNumero(valor);
      return;
    }
  }
});

if (btnLimpiarHistorial) {
  btnLimpiarHistorial.addEventListener("click", () => {
    calculadora.limpiarHistorial();
  });
}

const calculadora = {
  pantalla: "",
  historial: [],

  agregarNumero: function (numero) {
    // Evita dos puntos decimales seguidos
    if (numero === "." && this.pantalla.endsWith(".")) return;
    // Evita dos puntos decimales en el mismo número
    if (
      numero === "." &&
      this.pantalla
        .split(/[\+\-\×\/]/)
        .pop()
        .includes(".")
    )
      return;
    this.pantalla += numero;
    this.actualizarPantalla();
  },

  agregarOperador: function (operador) {
    if (this.pantalla === "") return;
    // Evita operadores seguidos
    if (/[+\-×\/]$/.test(this.pantalla)) {
      this.pantalla = this.pantalla.slice(0, -1);
    }
    this.pantalla += operador.replace("×", "*");
    this.actualizarPantalla();
  },

  calcular: function () {
    if (this.pantalla === "") return;
    try {
      // Evalúa la expresión (reemplaza × por *)
      const operacion = this.pantalla.replace(/×/g, "*");
      const resultado = eval(operacion.replace(/[^-()\d/*+.]/g, ""));
      this.agregarAlHistorial(this.pantalla, resultado);
      this.pantalla = resultado.toString();
      this.actualizarPantalla();
    } catch {
      this.pantalla = "Error";
      this.actualizarPantalla();
      setTimeout(() => {
        this.limpiar();
      }, 1000);
    }
  },

  limpiar: function () {
    this.pantalla = "";
    this.actualizarPantalla();
  },

  borrar: function () {
    this.pantalla = this.pantalla.slice(0, -1);
    this.actualizarPantalla();
  },

  actualizarPantalla: function () {
    pantalla.value = this.pantalla || "0";
  },

  agregarAlHistorial: function (operacion, resultado) {
    this.historial.unshift({ operacion, resultado });
    this.mostrarHistorial();
  },

  mostrarHistorial: function () {
    historialUl.innerHTML = "";
    this.historial.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.operacion} = ${item.resultado}`;
      historialUl.appendChild(li);
    });
  },

  limpiarHistorial: function () {
    this.historial = [];
    this.mostrarHistorial();
  },
};

// Inicialización
calculadora.actualizarPantalla();
