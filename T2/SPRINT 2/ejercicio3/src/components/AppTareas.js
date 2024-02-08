import React, { Component } from 'react';
import './style.css';

class AppTareas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tareas: [],
      nuevaTarea: '',
      filtro: 'todas', // puede ser 'todas', 'completadas', 'pendientes'
    };
  }

  componentDidMount() {
    // Cargar tareas desde el almacenamiento local al montar el componente
    const tareasGuardadas = localStorage.getItem('tareas');

    if (tareasGuardadas) {
      this.setState({ tareas: JSON.parse(tareasGuardadas) });
    }
  }

  componentDidUpdate() {
    // Actualizar el almacenamiento local cuando cambian las tareas
    localStorage.setItem('tareas', JSON.stringify(this.state.tareas));
  }

  handleInputChange = (e) => {
    this.setState({ nuevaTarea: e.target.value });
  }

  agregarTarea = () => {
    if (this.state.nuevaTarea.trim() !== '') {
      const nuevaTarea = {
        id: Date.now(),
        texto: this.state.nuevaTarea,
        completada: false,
      };

      this.setState((prevState) => ({
        tareas: [...prevState.tareas, nuevaTarea],
        nuevaTarea: '',
      }));
    }
  }

  marcarComoCompletada = (id) => {
    this.setState((prevState) => ({
      tareas: prevState.tareas.map(tarea =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      ),
    }));
  }

  eliminarTarea = (id) => {
    this.setState((prevState) => ({
      tareas: prevState.tareas.filter(tarea => tarea.id !== id),
    }));
  }

  cambiarFiltro = (filtro) => {
    this.setState({ filtro });
  }

  filtrarTareas = () => {
    const { tareas, filtro } = this.state;

    switch (filtro) {
      case 'completadas':
        return tareas.filter(tarea => tarea.completada);
      case 'pendientes':
        return tareas.filter(tarea => !tarea.completada);
      default:
        return tareas;
    }
  }

  render() {
    const { nuevaTarea, filtro } = this.state;
    const tareasFiltradas = this.filtrarTareas();

    return (
      <div>
        <h2>Lista de Tareas</h2>

        <div>
          <input
            type="text"
            value={nuevaTarea}
            onChange={this.handleInputChange}
            placeholder="Nueva tarea"
          />
          <button onClick={this.agregarTarea}>Agregar</button>
        </div>

        <div>
          <button onClick={() => this.cambiarFiltro('todas')} disabled={filtro === 'todas'}>Todas</button>
          <button onClick={() => this.cambiarFiltro('completadas')} disabled={filtro === 'completadas'}>Completadas</button>
          <button onClick={() => this.cambiarFiltro('pendientes')} disabled={filtro === 'pendientes'}>Pendientes</button>
        </div>

        <ul>
          {tareasFiltradas.map(tarea => (
            <li key={tarea.id}>
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => this.marcarComoCompletada(tarea.id)}
              />
              <span
                style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}
              >
                {tarea.texto}
              </span>
              <button onClick={() => this.eliminarTarea(tarea.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AppTareas;
