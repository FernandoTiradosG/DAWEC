import React, { useState, useEffect } from 'react';
import { auth, storage } from './firebase'; // Importa también la instancia de storage desde firebase.js
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { deleteUser, updateProfile } from 'firebase/auth';
import { useNavigate, useParams } from 'react-router-dom';
import './Style/perfil.css';

function PerfilUsuario() {
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null); // Estado para almacenar la URL de la imagen
  const navigate = useNavigate();
  const { nombreUsuario } = useParams();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setDisplayName(user.displayName || '');
        setNewEmail(user.email || '');
        setImageUrl(user.photoURL || ''); // Establece la URL de la imagen de perfil
      } else {
        setUser(null);
        // Si el usuario no está autenticado, redirige a la página de inicio de sesión
        navigate('/inicio-sesion');
      }
      
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleUpdateProfile = async (event) => {
    event.preventDefault();

    updateProfile(user, {
      displayName: displayName,
    })
      .then(() => {
        setSuccessMessage('Perfil actualizado correctamente.');
        navigate(`/perfil/${displayName}`);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleLogout = () => {
    navigate('/inicio-sesion');
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar tu cuenta?')) {
      deleteUser(user)
        .then(() => {
          setSuccessMessage('Cuenta eliminada correctamente.');
          setTimeout(() => {
            navigate('/inicio-sesion');
          }, 2000);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleImageUpload = async () => {
    if (!image) {
      setError('Por favor selecciona una imagen.');
      return;
    }
  
    try {
      // Subir la imagen a Firebase Storage
      const storageRef = ref(storage, `images/${user.uid}/${image.name}`);
      await uploadBytes(storageRef, image);
  
      // Obtener la URL de descarga de la imagen
      const url = await getDownloadURL(storageRef);
  
      // Actualizar el perfil del usuario con la URL de la imagen
      await updateProfile(user, {
        photoURL: url,
      });
  
      // Actualizar el estado para mostrar mensaje de éxito
      setSuccessMessage('Imagen de perfil actualizada correctamente.');
      
      // Actualizar la URL de la imagen en el estado para mostrar la nueva imagen de perfil
      setImageUrl(url);
    } catch (error) {
      // Manejar errores de subida de imagen
      setError('Hubo un error al cargar la imagen.');
    }
  };

  return (
    <div className="container">
      <h2>Perfil de Usuario: {nombreUsuario}</h2>
      {user ? (
        <form onSubmit={handleUpdateProfile}>
          <div className="input-container">
            <label>Nombre:</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <button className="update-button" type="submit">Actualizar Perfil</button>
          <label>Correo electrónico: {newEmail}</label>
        </form>
      ) : (
        <p>Debes iniciar sesión para ver tu perfil.</p>
      )}
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <div className="image-container">
        <label>Foto de perfil:</label>
        <img src={imageUrl} alt="Foto de perfil" />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button className="upload-button" onClick={handleImageUpload}>Subir Imagen</button>
      </div>
      <div className="buttons-container">
        <button onClick={handleLogout}>Cerrar Sesión</button>
        <button onClick={handleDeleteAccount}>Eliminar Cuenta</button>
      </div>
    </div>
  );

}

export default PerfilUsuario;
