import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Inicio.js';
import PerfilUsuario from './PerfilUsuario.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/usuario/:id' element={<PerfilUsuario />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
