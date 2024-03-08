import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Inicio.css';

function Inicio() {
  return (
    <div className="inicio-container">
      <h2>Bienvenido a nuestra aplicación</h2>
      <div className="botones-container">
        <Link to="/registro">
          <button className="boton-registrarse">Registrarse</button>
        </Link>
        <Link to="/login">
          <button className="boton-iniciar-sesion">Iniciar Sesión</button>
        </Link>
      </div>
    </div>
  );
}

export default Inicio;
