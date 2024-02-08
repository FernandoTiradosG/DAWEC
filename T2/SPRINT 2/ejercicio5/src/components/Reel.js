import React, { useState, useEffect, useRef, useCallback } from 'react';

const Reel = ({ imagenes, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);
  const reelRef = useRef(null);
  const loadMoreThreshold = 200; // Umbral de carga más de imágenes

  // Cargar más imágenes
  const loadMoreImages = useCallback(() => {
    if (currentIndex + 5 < imagenes.length) {
      setCurrentIndex(prevIndex => prevIndex + 5);
    }
  }, [currentIndex, setCurrentIndex, imagenes.length]);  

  // Manejar el desplazamiento del carrousel
  const handleScroll = useCallback(() => {
    const reel = reelRef.current;
    if (reel.scrollTop + reel.clientHeight >= reel.scrollHeight - loadMoreThreshold) {
      loadMoreImages();
    }
  }, [loadMoreImages, reelRef, loadMoreThreshold]);

  // Cambiar al siguiente índice
  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % imagenes.length);
  };

  // Cambiar al índice anterior
  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + imagenes.length) % imagenes.length);
  };

  // Actualizar imágenes visibles cuando cambia el índice actual
  useEffect(() => {
    if (currentIndex + 5 >= imagenes.length) {
      // Si estamos cerca del final, mostrar las últimas imágenes y unir con las primeras
      setVisibleImages(imagenes.slice(currentIndex).concat(imagenes.slice(0, 5 - (imagenes.length - currentIndex))));
    } else {
      // Mostrar las siguientes 5 imágenes
      setVisibleImages(imagenes.slice(currentIndex, currentIndex + 5));
    }
  }, [currentIndex, imagenes]);

  // Manejar el evento de scroll al montar/desmontar el componente
  useEffect(() => {
    const reel = reelRef.current;
    const scrollHandler = () => handleScroll();
    reel.addEventListener('scroll', scrollHandler);
    return () => {
      reel.removeEventListener('scroll', scrollHandler);
    };
  }, [handleScroll, reelRef]);

  return (
    <div className="reel">
      <button onClick={handlePrev}>&#10094;</button>
      <div className="images-container" ref={reelRef}>
        {visibleImages.map((imagen, index) => (
          <img
            key={index}
            src={imagen.url}
            alt={`Imagen ${index}`}
            onClick={() => onImageClick(imagen)}
          />
        ))}
      </div>
      <button onClick={handleNext}>&#10095;</button>
    </div>
  );
};

export default Reel;
