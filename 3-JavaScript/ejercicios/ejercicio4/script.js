let numero = parseInt(prompt("Inserte un número entre 1 y 20: "));
let resultado;
let sumaResultado = 0;

if (numero > 0 && numero <= 20)
  for (let i = 1; i <= 10; i++) {
    resultado = numero * i;
    sumaResultado += resultado;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
else alert("inserte un número válido");
console.log(`la suma total de todos los resultados es: ${sumaResultado}`);

