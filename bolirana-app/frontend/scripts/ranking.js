document.addEventListener("DOMContentLoaded", () => {
  const cuerpoTabla = document.getElementById("ranking-body");

  fetch("http://localhost:8000/ranking")
    .then((res) => res.json())
    .then((ranking) => {
      cuerpoTabla.innerHTML = ""; // Limpia contenido previo
      ranking.forEach((jugador) => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${jugador.posicion}</td>
            <td>
              <img src="${
                jugador.avatar || "../assets/icon/rana.webp"
              }" alt="Avatar" width="30" style="vertical-align: middle; border-radius: 50%; margin-right: 10px;">
              
            </td>
            <td>${jugador.username}</td>
            <td>${jugador.puntuacion_total}</td>
          `;

        cuerpoTabla.appendChild(fila);
      });
    })
    .catch((error) => {
      console.error("Error al obtener el ranking:", error);
      cuerpoTabla.innerHTML = `<tr><td colspan="3">No se pudo cargar el ranking</td></tr>`;
    });
});
