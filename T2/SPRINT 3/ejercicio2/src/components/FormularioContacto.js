// FormularioContacto.js
import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

function FormularioContacto() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert('Formulario enviado con éxito');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre:</label>
        <input {...register('nombre', { required: true })} />
        {errors.nombre && <span>Por favor ingrese su nombre.</span>}
      </div>
      <div>
        <label>Email:</label>
        <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        {errors.email && <span>Por favor ingrese un email válido.</span>}
      </div>
      <div>
        <label>Mensaje:</label>
        <textarea {...register('mensaje', { required: true })} />
        {errors.mensaje && <span>Por favor ingrese un mensaje.</span>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioContacto;
