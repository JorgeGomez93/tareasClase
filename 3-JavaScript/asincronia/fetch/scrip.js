const url = "https://rickandmortyapi.com/api/character/1";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const url2 = "https://jsonplaceholder.typicode.com/users/1";
fetch(url2)
  .then((response) => {
    console.log("Respuesta recibida", response);
    return response.json(); // Convertimos la respuesta a JSON
  })
  .then((data) => {
    console.log("Datos de usuario: ", data);
    console.log("Nombre de usuario:", data.name);
    console.log("Correo electrónico:", data.email);
  })
  .catch((error) => {
    console.error("Error al obtener los datos del usuario:", error);
  });
