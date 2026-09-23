function TaskInput({ nuevaTarea, setNuevaTarea, agregarTarea }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        type="text"
        placeholder="..."
        className="grow px- py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg shadow-md cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-xl hover:bg-blue-600"
      >
        <img src="/basurero.png" alt="Prueba" className="w-6 h-6" />
      </button>
    </form>
  );
}

export default TaskInput;
