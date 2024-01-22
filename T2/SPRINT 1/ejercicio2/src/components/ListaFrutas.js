import React from "react";

const ListaFrutas = (props) => {
  const { frutas } = props;

  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>
          <img src={fruta.imagen} alt={fruta.nombre} />
          <ul>
            <li>Nombre: {fruta.nombre}</li>
            <li>Color: {fruta.color} </li>
          </ul>
          
        </li>
      ))}
    </ul>
  );
};

export default ListaFrutas;