import { useState } from "react";
import "./App.css";

import Header from "./Componentes/Header";
import TaskInput from "./Componentes/taskInput";
import TaskList from "./Componentes/taskList";

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      setTareas([
        ...tareas,
        {
          id: Date.now(),
          text: nuevaTarea,
          completed: false,
        },
      ]);

      setNuevaTarea("");
    }
  };

  return (
    <div className="w-full h-60 bg-black">
      <div className=" shadow-lg border rounded-xl p-8 md:p-12 w-full max-w-md">
        <Header />

        <TaskInput
          nuevaTarea={nuevaTarea}
          setNuevaTarea={setNuevaTarea}
          agregarTarea={agregarTarea}
        />

        <TaskList tareas={tareas} setTareas={setTareas} />
      </div>
    </div>
  );
}

export default App;
