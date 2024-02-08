import React, { Component } from 'react';
import './style.css';

class Cronometro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutos: 0,
      segundos: 0,
      microsegundos: 0,
      activo: false,
    };

    this.intervalo = null;
  }

  iniciarCronometro = () => {
    if (!this.state.activo) {
      this.setState({ activo: true });
      this.intervalo = setInterval(() => {
        this.actualizarTiempo();
      }, 10); // actualiza cada 10 milisegundos para microsegundos
    }
  }

  pausarCronometro = () => {
    if (this.state.activo) {
      this.setState({ activo: false });
      clearInterval(this.intervalo);
    }
  }

  reiniciarCronometro = () => {
    this.setState({
      minutos: 0,
      segundos: 0,
      microsegundos: 0,
      activo: false,
    });
    clearInterval(this.intervalo);
  }

  actualizarTiempo = () => {
    this.setState((prevState) => {
      let nuevosMicrosegundos = prevState.microsegundos + 1;

      if (nuevosMicrosegundos === 100) {
        nuevosMicrosegundos = 0;
        let nuevosSegundos = prevState.segundos + 1;

        if (nuevosSegundos === 60) {
          nuevosSegundos = 0;
          let nuevosMinutos = prevState.minutos + 1;

          return {
            minutos: nuevosMinutos,
            segundos: nuevosSegundos,
            microsegundos: nuevosMicrosegundos,
          };
        }

        return {
          segundos: nuevosSegundos,
          microsegundos: nuevosMicrosegundos,
        };
      }

      return {
        microsegundos: nuevosMicrosegundos,
      };
    });
  }

  componentWillUnmount() {
    clearInterval(this.intervalo);
  }

  render() {
    const { minutos, segundos, microsegundos, activo } = this.state;

    return (
      <div>
        <h2>Tiempo transcurrido: {minutos}m {segundos}s {microsegundos}ms</h2>
        <button onClick={this.iniciarCronometro} disabled={activo}>
          Iniciar
        </button>
        <button onClick={this.pausarCronometro} disabled={!activo}>
          Pausar
        </button>
        <button onClick={this.reiniciarCronometro}>
          Reiniciar
        </button>
      </div>
    );
  }
}

export default Cronometro;
