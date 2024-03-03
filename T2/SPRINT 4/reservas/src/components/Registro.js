import React, { useState } from 'react';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación programática

function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Obtén la función navigate para la navegación programática

  const handleRegistro = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const isAdmin = email.endsWith('@admin.com');
      await updateProfile(userCredential.user, { displayName: isAdmin ? 'admin' : 'user'});

      setSuccessMessage('¡Registro exitoso! Redirigiendo al inicio de sesion...'); // Establece el mensaje de éxito
      setTimeout(() => {
        navigate(`/login`); // Redirige al usuario al perfil después del registro exitoso
      }, 2000); // Redirige después de 2 segundos

      // Obtener los datos del usuario después de actualizar el perfil
      const userData = userCredential.user;
      console.log('Perfil creado:', userData); 
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
        <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
        <button button onClick={() => navigate('/')}>Inicio</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra el mensaje de error si existe */}
      {successMessage && <p>{successMessage}</p>} {/* Muestra el mensaje de éxito */}
    </div>
  );
}

export default Registro;