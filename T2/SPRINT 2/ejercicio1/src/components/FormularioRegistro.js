import React, { Component } from 'react';
import './style.css';

class FormularioRegistro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {
        username: '',
        email: '',
        password: '',
      },
      isModalOpen: false,
      modalContent: '',
      isFormValid: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    }, () => {
      this.validateField(name, value);
    });
  }

  validateField = (fieldName, value) => {
    let errors = { ...this.state.errors };

    switch (fieldName) {
      case 'username':
        errors.username = (value.trim() === '' || value.length < 3) ? 'El nombre de usuario no puede estar vacío y debe tener al menos 3 caracteres' : '';
        break;
      case 'email':
        errors.email = (value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) ? 'No hay correo o el correo electrónico no es válido' : '';
        break;
      case 'password':
        errors.password = (value.trim() === '' || value.length < 6) ? 'La contraseña no puede estar vacía y debe tener al menos 6 caracteres' : '';
        break;
      default:
        break;
    }

    this.setState({ errors }, this.validateForm);
  }

  validateForm = () => {
    const { errors, username, email, password } = this.state;
  
    // Verifica si hay errores en algún campo
    const isFormValid = Object.values(errors).every(error => error === '') &&
                       username.trim() !== '' &&
                       email.trim() !== '' &&
                       password.trim() !== '';
  
    this.setState({ isFormValid });
  
    return isFormValid; // Añade esta línea para que la función devuelva el resultado
  }

  handleSubmit = (e) => {
    e.preventDefault();
  
    // Verifica si hay errores antes de realizar cualquier acción
    if (this.state.isFormValid) {
      // Simula el registro de usuario (puedes almacenar los datos en el estado o hacer otras acciones)
      console.log('Usuario registrado:', this.state);
  
      // Puedes personalizar el contenido del modal según tus necesidades
      const modalContent = (
        <div>
          <h2>¡Registro exitoso!</h2>
          <p>Usuario: {this.state.username}</p>
          <p>Correo electrónico: {this.state.email}</p>
          {/* Puedes agregar más información aquí si es necesario */}
        </div>
      );
  
      this.setState({
        isModalOpen: true,
        modalContent,
      });
    }
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  }

  render() {
    const { username, email, password, errors, isModalOpen, modalContent, isFormValid } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Nombre de usuario:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              style={{ borderColor: errors.username ? 'red' : '' }}
            />
            <span>{errors.username}</span>
          </div>

          <div>
            <label>Correo electrónico:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              style={{ borderColor: errors.email ? 'red' : '' }}
            />
            <span>{errors.email}</span>
          </div>

          <div>
            <label>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              style={{ borderColor: errors.password ? 'red' : '' }}
            />
            <span>{errors.password}</span>
          </div>

          <button type="submit" disabled={!isFormValid}>Registrar</button>
        </form>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              {modalContent}
              <button onClick={this.closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FormularioRegistro;
