function pedirNotaAlUSuario() {
  while (true) {
    let nota = parseInt(prompt("Inserte Nota: (0-10)"));
    if (nota >= 0 && nota <= 10) {
      return nota;
    } else alert("Inserte una nota válida");
  }
}

function calcularPromedio(nota1, nota2, nota3) {
  return (promedio = (nota1 + nota2 + nota3) / 3);
}

nota1 = pedirNotaAlUSuario();
nota2 = pedirNotaAlUSuario();
nota3 = pedirNotaAlUSuario();
promedio = calcularPromedio(nota1, nota2, nota3);

if (promedio < 5) alert("Has suspendido");
else if (promedio >= 5 && promedio <= 6.9) alert("Aprobado");
else if (promedio > 6.9 && promedio <= 8.9) alert("Notable");
else if (promedio > 8.9 && promedio <= 10) alert("Sobresaliente");
console.log(
  `Las notas ingresadas por el usuario son: ${nota1} , ${nota2} , ${nota3} y el promedio es: ${promedio}`
);
