import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación programática
import './Style/registro.css';

function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Obtén la función navigate para la navegación programática

  const handleRegistro = async (event) => {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccessMessage('¡Registro exitoso! Redirigiendo al inicio de sesion...'); // Establece el mensaje de éxito
      setTimeout(() => {
        navigate(`/inicio-sesion`); // Redirige al usuario al perfil después del registro exitoso
      }, 2000); // Redirige después de 2 segundos
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(`${errorCode}: ${errorMessage}`);
    }
  };

  return (
    <div className="registro-container">
      <h2>Registro</h2>
      <form className="registro-form" onSubmit={handleRegistro}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      <div className="registro-links">
        <button onClick={() => navigate('/inicio-sesion')}>Iniciar Sesión</button>
        <button button onClick={() => navigate('/')}>Inicio</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el mensaje de error si existe */}
      {successMessage && <p>{successMessage}</p>} {/* Muestra el mensaje de éxito */}
    </div>
  );
}

export default Registro;
