import React from 'react';

const AdminModal = ({ show, handleClose, handleModificarReserva, handleCancelarReserva, handleLiberar }) => {
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <h2>Opciones de Administrador</h2>
        <button onClick={handleModificarReserva}>Modificar Reserva</button>
        <button onClick={handleCancelarReserva}>Cancelar Reserva</button>
        <button onClick={handleLiberar}>Liberar</button>
        <button onClick={handleClose}>Cerrar</button>
      </section>
    </div>
  );
};

export default AdminModal;
