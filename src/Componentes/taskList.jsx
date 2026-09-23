import TaskItem from "./taskItem";
function TaskList({ tareas, setTareas }) {
  return (
    <ul className="space-y-2">
      {" "}
      {/* map para recorrer la lista de las tareas */}{" "}
      {tareas.map((tarea) => (
        <TaskItem
          key={tarea.id}
          tarea={tarea}
          tareas={tareas}
          setTareas={setTareas}
        />
      ))}{" "}
    </ul>
  );
}
export default TaskList;
