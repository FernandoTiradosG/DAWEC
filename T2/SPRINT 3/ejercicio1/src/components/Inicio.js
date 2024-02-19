import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Inicio() {
  const [userId, setUserId] = useState(''); // Estado para almacenar el ID del usuario
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setUserId(event.target.value); // Actualiza el estado con el valor del input
  };

  const handleAcceder = () => {
    if (userId.trim() !== '') {
      navigate(`/usuario/${userId}`); // Redirige a la ruta del perfil de usuario con el ID proporcionado
    }
  };

  return (
    <div className="container1">
      <h1 className="heading1">Bienvenido al perfil de usuarios</h1>
      <input
        type="text"
        placeholder="Ingrese el ID del usuario"
        value={userId}
        onChange={handleInputChange}
        className="input1"
      />
      <button onClick={handleAcceder} className="button1">Acceder</button>
    </div>
  );
}

export default Inicio;