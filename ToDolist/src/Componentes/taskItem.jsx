function TaskItem({ tarea, tareas, setTareas }) {
  return (
    // Lista
    <li className="flex items-center p-3 rounded-lg bg-amber-200 border border-gray-200">
      <input
        type="checkbox"
        checked={tarea.completed}
        onChange={() =>
          setTareas(
            tareas.map((t) =>
              // AAAAAAA
              t.id === tarea.id ? { ...t, completed: !t.completed } : t,
            ),
          )
        }
        className="mr-1.5 h-5 w-5 text-blue-600 cursor-pointer"
      />

      <span
        className={`grow ${
          tarea.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {tarea.text}
      </span>

      <button
        //   eliminar
        onClick={() => setTareas(tareas.filter((t) => t.id !== tarea.id))}
        className="ml-2 border-none p-2 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
      >
        {/* BASURA */}
        <img src="/basurero.png" alt="Borrar tarea" className="w-6 h-6" />
      </button>
    </li>
  );
}

export default TaskItem;
