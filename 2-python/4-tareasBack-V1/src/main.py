from tareas.DocumentController import get_tasks, set_tasks
from tareas.schemas import Tarea
import time


def main():
    nuevas_tarea = Tarea(
        id=str(time.time()).replace(".", ""),
        name="Tarea de ejemplo",
        priority=3,
        project="tuBoliranaDigital",
    )
    add_task("jorge", nuevas_tarea)


def add_task(username: str, nueva_tarea: Tarea):
    tareas_actuales = get_tasks(username)
    tareas_actuales.append(nueva_tarea.model_dump())
    set_tasks(username, tareas_actuales)


if __name__ == "__main__":
    main()
