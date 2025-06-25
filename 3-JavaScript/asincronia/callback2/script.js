function saludar(nombre, callback) {
    console.log("Preparando saludo...");
    callback(nombre)
}


function mostrarSaludo(nombre){
    console.log(`¡Hola, ${nombre}!`);
}

// Uso del callback
saludar("Juan", mostrarSaludo);