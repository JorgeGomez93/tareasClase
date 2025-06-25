function obtenerCita() {
  fetch("http://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(`"${data.content}" - ${data.author}`);
    });
}

obtenerCita();

async function obtenerCitaAsync() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(`"${data.content}" - ${data.author}`);
  } catch (error) {
    console.error("Algo salió mal: ", error.message);
  } finally {
    //Esto siempre se ejecuta
    document.getElementById("spinner").style.display = "none";
  }
}

obtenerCitaAsync();
