const btnCargar = document.getElementById("btnCargar");


btnCargar.addEventListener("click", () => {
  const ciudad = document.getElementById("ciudad").value;
  obtenerClima(ciudad);
});

async function obtenerClima(ciudad) {
  try {
    const response = await fetch(
      // `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`
      `https://goweather.herokuapp.com/weather/${ciudad}`
    );
    if (!response.ok) {
      throw new Error("Ciudad no encontrada o error en la respuesta");
    }
    const datos = await response.json();
    document.getElementById(
      "temperatura"
    ).textContent = `Temperatura en ${ciudad} es de: ${datos.temperature}`;
  } catch (error) {
    console.error("Algo salió mal: ", error.message);
  } finally {
    document.getElementById("btnCargar").style.display = "none";
  }
}
