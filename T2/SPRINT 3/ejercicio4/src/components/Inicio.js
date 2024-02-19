import React from 'react';
import { Link } from 'react-router-dom';
import './Style/inicio.css'

function Inicio() {
  return (
    <div className="inicio-container">
      <h2>Bienvenido a nuestra aplicación</h2>
      <div className="botones-container">
        <Link to="/registro">
          <button className="boton-registrarse">Registrarse</button>
        </Link>
        <Link to="/inicio-sesion">
          <button className="boton-iniciar-sesion">Iniciar Sesión</button>
        </Link>
      </div>
    </div>
  );
}

export default Inicio;
