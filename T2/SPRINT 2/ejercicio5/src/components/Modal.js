import React from 'react';

const Modal = ({ image, onCloseModal }) => {
  return (
    <div className="modal-overlay" onClick={onCloseModal}>
      <div className="modal-content">
        <span className="modal-close" onClick={onCloseModal}>&times;</span>
        <img src={image.url} alt={image.id} />
        <p className="modal-description">{image.description}</p>
      </div>
    </div>
  );
};

export default Modal;
