let opc;
let fahrenheit = 0;
let celsius = 0;

while (true) {
  opc = parseInt(
    prompt(
      `CONVERSOR DE TEMPERATURA\n` +
        `Que Tipo de Conversión deseas realizar?\n` +
        `1. De Celsius a Fahrenheit\n` +
        `2. de Fahrenheit a Celsius\n`
    )
  );
  if (opc === 1 || opc === 2) {
    break;
  } else alert("Error: ¡Seleccione una opcion válida!");
}

switch (opc) {
  case 1:
    fahrenheit = celsiusToFahrenheit();
    alert(
      `Grados Celsius: ${celsius.toFixed(
        2
      )} -> Grados Fahrenheit: ${fahrenheit.toFixed(2)}`
    );
    break;
  case 2:
    celsius = fahrenheitToCelsius();
    alert(
      `Grados Celsius: ${celsius.toFixed(
        2
      )} -> Grados Fahrenheit: ${fahrenheit.toFixed(2)}`
    );
    break;
}

function celsiusToFahrenheit() {
  celsius = parseFloat(prompt("Inserte la temperatura a convertir: "));
  return (celsius * 9) / 5 + 32; // C a F: (C * 9/5) + 32
}

function fahrenheitToCelsius() {
  fahrenheit = parseFloat(prompt("Inserte la temperatura a convertir: "));
  return ((fahrenheit - 32) * 5) / 9; // (F - 32) * 5/9
}
