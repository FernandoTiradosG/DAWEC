import React, { useState } from "react";
import './style.css';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  }

  return (
    <div>
      <p>Has hecho click {contador} veces</p>
      <button onClick={incrementarContador}>Click aquí</button>
    </div>
  );
};

export default Contador;