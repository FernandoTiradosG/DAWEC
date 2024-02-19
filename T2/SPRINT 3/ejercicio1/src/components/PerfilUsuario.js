import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PerfilUsuario() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleAcceder = () => {
    navigate(`/`); // Redirige a la ruta del perfil de usuario con el ID proporcionado
  };

  return (
    <div className="container2">
      <h2 className="heading2">Perfil del Usuario: {id}</h2>
      <button onClick={handleAcceder} className="button2">Volver</button>
    </div>
  );
}

export default PerfilUsuario;