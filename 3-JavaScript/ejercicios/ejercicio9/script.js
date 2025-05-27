let numero = 0;
while (true) {
  numero = parseInt(prompt("Inserte un número entero entre 3 y 10"));
  if (isNaN(numero) || numero < 3 || numero > 10)
    alert(
      "❌ Entrada no válida. Por favor, ingresa un número valido entre 3 y 10."
    );
  else break;
}

for (let i = 1; i <= numero + 1; i++) {
  console.log("*".repeat(i));
}
