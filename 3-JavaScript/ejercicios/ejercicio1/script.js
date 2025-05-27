let edad = parseInt(prompt("ingresa la edad de la persona: "));

if (edad >= 0 && edad < 13) alert("Eres un niño");
else if (edad >= 13 && edad < 18) alert("Eres un adolescente");
else if (edad >= 18 && edad < 65) alert("Eres un adulto");
else if (edad >= 65) alert("Eres un adulto mayor");
else alert("por favor introduce una edad valida");
