let numero = 0;
while (true) {
  numero = parseInt(prompt("Inserte un número entero positivo"));
  if (isNaN(numero) || numero < 0)
    alert("❌ Entrada no válida. Por favor, ingresa un número.");
  else break;
}

if (esPrimo(numero)) alert(`el número ${numero} ES primo!`);
else alert(`el número ${numero} NO es primo!`);

function esPrimo(numero) {
  if (numero < 2) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}
