import React, { useState, useEffect } from 'react';
import './style.css';

const ListaDeTareas2 = () => {
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    return tareasGuardadas;
  });
  const [categorias, setCategorias] = useState(() => {
    const categoriasGuardadas = JSON.parse(localStorage.getItem('categorias')) || ['Personal', 'Trabajo', 'Estudios'];
    return categoriasGuardadas;
  });
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('todas');
  const [filtroEstado, setFiltroEstado] = useState('todas');

  // Cargar tareas desde Local Storage al inicio
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    const categoriasGuardadas = JSON.parse(localStorage.getItem('categorias')) || ['personal', 'trabajo', 'estudios'];
    
    setTareas(tareasGuardadas);
    setCategorias(categoriasGuardadas);

    console.log(tareasGuardadas);

  }, []);

  // Guardar tareas y categorías en Local Storage cuando cambien
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
    localStorage.setItem('categorias', JSON.stringify(categorias));
  }, [tareas, categorias]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '' && nuevaCategoria.trim() !== '') {
      setTareas([...tareas, { tarea: nuevaTarea, categoria: nuevaCategoria, completada: false }]);
      // Agregar nueva categoría solo si no existe aún
      setCategorias(prevCategorias => {
        if (!prevCategorias.includes(nuevaCategoria)) {
          return [...prevCategorias, nuevaCategoria];
        }
        return prevCategorias;
      });
      setNuevaTarea('');
      setNuevaCategoria('');
    }
  };

  const completarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevaTarea) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].tarea = nuevaTarea;
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const agregarNuevaCategoria = () => {
    if (nuevaCategoria.trim() !== '') {
      setCategorias((prevCategorias) => {
        if (!prevCategorias.includes(nuevaCategoria)) {
          return [...prevCategorias, nuevaCategoria];
        }
        return prevCategorias;
      });
      setNuevaCategoria('');
    }
  };

  const eliminarCategoria = (categoria) => {
    // Solo eliminar si la categoría no es una categoría original
    if (!['Personal', 'Trabajo', 'Estudios'].includes(categoria)) {
      setCategorias((prevCategorias) => prevCategorias.filter((cat) => cat !== categoria));
    }
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <select value={nuevaCategoria} onChange={(e) => setNuevaCategoria(e.target.value)}>
        <option value="">Selecciona una categoría</option>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
      <button onClick={agregarTarea}>Agregar Tarea</button>

      <input
        type="text"
        value={nuevaCategoria}
        onChange={(e) => setNuevaCategoria(e.target.value)}
        placeholder="Nueva categoría"
      />

      <button onClick={agregarNuevaCategoria}>Agregar Nueva Categoría</button>

      <div>
        <label>Eliminar Categoría:</label>
        <select onChange={(e) => eliminarCategoria(e.target.value)}>
          <option value="">Selecciona una categoría</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria} disabled={['Personal', 'Trabajo', 'Estudios'].includes(categoria)}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Filtrar por Categoría:</label>
        <select value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}>
          <option value="todas">Todas</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Filtrar por Estado:</label>
        <select value={filtroEstado} onChange={(e) => setFiltroEstado(e.target.value)}>
          <option value="todas">Todas</option>
          <option value="completadas">Completadas</option>
          <option value="pendientes">Pendientes</option>
        </select>
      </div>

      <ul>
        {tareas
          .filter((tarea) => filtroCategoria === 'todas' || tarea.categoria === filtroCategoria)
          .filter((tarea) => filtroEstado === 'todas' || (filtroEstado === 'completadas' ? tarea.completada : !tarea.completada))
          .map((tarea, index) => (
            <li key={index}>
              <div className="task-info">
              {tarea.tarea} - {tarea.categoria}
              </div>
              <div className="task-actions">
                <input type="checkbox" checked={tarea.completada} onChange={() => completarTarea(index)} />
                <button onClick={() => editarTarea(index, prompt('Editar tarea:', tarea.tarea))}>Editar</button>
                <button onClick={() => eliminarTarea(index)}>Eliminar</button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListaDeTareas2;