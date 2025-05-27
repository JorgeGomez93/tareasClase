let saldo = 1000;
let opc = 0;
let monto = 0;

do {
  opc = parseInt(
    prompt(
      `Que deseas realizar?: \n` +
        `1. Consultar Saldo\n` +
        `2. Retirar Dinero\n` +
        `3. Depositar Dinero\n` +
        `4. Salir\n`
    )
  );
  switch (opc) {
    case 1:
      consultarSaldo();
      break;
    case 2:
      monto = parseFloat(prompt("💸 Ingresa el monto a retirar:"));
      if (isNaN(monto) || monto <= 0) {
        alert("❌ Monto inválido. Intenta de nuevo.");
      } else {
        retirarDinero(monto);
      }
      break;
    case 3:
      monto = parseFloat(prompt("💰 Ingresa el monto a depositar:"));
      if (isNaN(monto) || monto <= 0) {
        alert("❌ Monto inválido. Intenta de nuevo.");
      } else {
        depositarDinero(monto);
      }
      break;
    case 4:
      alert("👋 Gracias por utilizar nuestros servicios.");
      break;
    default:
      alert("❌ Selección inválida. Por favor, ingresa una opción válida.");
  }
} while (opc != 4);

function consultarSaldo() {
  alert(`🏦 Tu saldo actual es: ${saldo.toFixed(2)} €`);
}

function retirarDinero(monto) {
  if (monto > saldo) {
    alert("❌ Fondos insuficientes.");
  } else {
    saldo -= monto;
    alert(`✅ Retiro exitoso. Saldo restante: ${saldo.toFixed(2)} €`);
  }
}

function depositarDinero(monto) {
  saldo += monto;
  alert(`✅ Depósito exitoso. Nuevo saldo: ${saldo.toFixed(2)} €`);
}
