function ListaTarea({ tareas, mostrarCompletadas }) {
  const tareasFiltradas = tareas.filter(tarea =>
    mostrarCompletadas ? tarea.completada : !tarea.completada
  );
  return (
    <ul>
      {tareasFiltradas.map(tarea => (
        <li key={tarea.id}>{tarea.texto}</li>
      ))}
    </ul>
  );
}

export default ListaTarea;
