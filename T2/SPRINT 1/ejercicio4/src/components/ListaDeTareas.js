import React, { useState } from "react";

const ToDoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState(""); // Estado para la nueva tarea
  const [tareas, setTareas] = useState([]); // Estado para la lista de tareas

  // Función para manejar el cambio en el campo de texto de nueva tarea
  const handleChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  // Función para manejar el envío del formulario (añadir nueva tarea)
  const handleSubmit = (event) => {
    event.preventDefault();

    if (nuevaTarea.trim() === "") {
      // No añadir tareas vacías
      return;
    }

    // Añadir la nueva tarea al estado de tareas
    setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
    // Limpiar el campo de texto
    setNuevaTarea("");
  };

  // Función para marcar una tarea como completada
  const marcarComoCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  // Función para eliminar una tarea
  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Añadir nueva tarea"
          value={nuevaTarea}
          onChange={handleChange}
        />
        <button type="submit">Añadir</button>
      </form>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => marcarComoCompletada(index)}
            />
            <span style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
              {tarea.texto}
            </span>
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;