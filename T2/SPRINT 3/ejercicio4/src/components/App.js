import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registro from './Registro';
import InicioSesion from './InicioSesion';
import PerfilUsuario from './PerfilUsuario';
import Inicio from './Inicio';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Inicio/>} /> {/* Redirige la ruta raíz a la página de registro */}
          <Route path="/registro" element={<Registro />} />
          <Route path="/inicio-sesion" element={<InicioSesion />} />
          <Route path="/perfil/:nombreUsuario" element={<PerfilUsuario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
