const numRandom = Math.floor(Math.random() * 100) + 1;
console.log(numRandom);
let cont = 0;
let numUsuario;

while (true) {
  numUsuario = parseInt(prompt("Adivina el numero oculto: "));
  cont++;

  if (isNaN(numUsuario)) {
    alert("❌ Entrada no válida. Por favor, ingresa un número.");
    continue;
  }

  if (numUsuario < 1 || numUsuario > 100)
    alert("⚠️ Número fuera del rango, recuerda el rango (min=1 - max=100)");
  else if (numUsuario > numRandom)
    alert("🔺Número introducido es mayor al que buscas");
  else if (numUsuario < numRandom)
    alert("🔻Número introducido es menor al que buscas");
  else break;
}

alert(
  `🎉 Felicitaciones has encontrado el numero oculto ${numRandom} en ${cont} intentos`
);
