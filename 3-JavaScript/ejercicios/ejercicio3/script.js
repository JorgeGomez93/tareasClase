while (true) {
  let opc = parseInt(
    prompt(
      "Que operación deseas realizar?\n" +
        "1. Suma\n" +
        "2. Resta\n" +
        "3. Multiplicación\n" +
        "4. División\n" +
        "5. Salir"
    )
  );
  if (opc === 5) break;
  let num1 = parseFloat(prompt("inserta el primer número: "));
  let num2 = parseFloat(prompt("inserta el segundo número: "));

  switch (opc) {
    case 1:
      let suma = num1 + num2;
      alert(`la suma de ${num1} + ${num2} es: ${suma}`);
      break;
    case 2:
      let resta = num1 - num2;
      alert(`la resta de ${num1} - ${num2} es: ${resta}`);
      break;
    case 3:
      let multiplicacion = num1 * num2;
      alert(`la multiplicación de ${num1} * ${num2} es: ${multiplicacion}`);
      break;
    case 4:
      if (num2 === 0) {
        alert("¡No se puede dividir por cero!");
      } else {
        let resultado = num1 / num2;
        alert(`La división de ${num1} / ${num2} es: ${resultado}`);
      }
      break;
    default:
      alert("Inserte una opcion válida");
      break;
  }
}
