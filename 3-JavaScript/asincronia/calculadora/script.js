let numero1 = prompt("Primer número: ");
let numero2 = prompt("Segundo número: ");
let operacion = prompt(
  "Elige una operación:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División"
);

function calcular(numero1, numero2, operacionCallback, mostrarCallback) {
  const resultado = operacionCallback(numero1, numero2);
  mostrarCallback(resultado);
}

// Callback para mostrar el resultado (nombrado)
function mostrarResultado(resultado) {
  console.log("Resultado: " + resultado);
}

// Callbacks para operaciones (nombrados)
function suma(a, b) {
  return a + b;
}
function resta(a, b) {
  return a - b;
}
function multiplicacion(a, b) {
  return a * b;
}
function division(a, b) {
  if (b == 0) {
    return "Error: División por cero no permitida.";
  }
  return a / b;
}

switch (operacion) {
  case "1":
    calcular(numero1, numero2, suma, mostrarResultado);
    break;
  case "2":
    calcular(numero1, numero2, resta, function (resultado) {
      // función anónima como callback para mostrar
      console.log("El resultado de la resta es: " + resultado);
    });
    break;
  case "3":
    calcular(numero1, numero2, multiplicacion, (resultado) => {
      // arrow function como callback para mostrar
      console.log("Multiplicación: " + resultado);
    });
    break;
  case "4":
    calcular(numero1, numero2, division, mostrarResultado);
    break;
  default:
    console.log("Operación no válida.");
}
