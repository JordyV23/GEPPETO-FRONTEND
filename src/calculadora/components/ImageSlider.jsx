import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Componente de slider de imágenes.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string[]} props.imagenes - Lista de URLs de imágenes para el slider.
 * @param {number} props.flagParam - Valor de la bandera para controlar la actualización del slider.
 * @returns {JSX.Element} Elemento JSX que representa el slider de imágenes.
 */
export const ImageSlider = ({ imagenes, flagParam }) => {
  // Estado para almacenar la bandera actual.
  const [flag, setFlag] = useState(0);

  // Estado para almacenar la lista de imágenes del slider.
  const [images, setImages] = useState([]);

  // Si el valor de la bandera prop (`flagParam`) es diferente a la bandera actual (`flag`),
  // actualiza la bandera y la lista de imágenes.
  if (flagParam !== flag) {
    setFlag(flagParam);
    setImages(imagenes);
  }

  // Efecto que se ejecuta cuando el valor de la bandera prop (`flagParam`) cambia.
  useEffect(() => {
    // Si el valor de la bandera prop (`flagParam`) es diferente a la bandera actual (`flag`),
    // actualiza la bandera y la lista de imágenes.
    if (flagParam !== flag) {
      setFlag(flagParam);
      setImages(imagenes);
    }
  }, [flagParam]);

  // Estado para almacenar el índice de la imagen actual en el slider.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /**
   * Avanza al siguiente índice de imagen en el slider.
   */
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  /**
   * Retrocede al índice de imagen anterior en el slider.
   */
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
      >
        {/* SVG para retroceder */}
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
      >
        {/* SVG para avanzar */}
      </button>
      <AnimatePresence>
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`Imagen ${currentImageIndex + 1}`}
          className="carousel-image animate__animated animate__zoomIn"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          custom={currentImageIndex}
        />
      </AnimatePresence>
    </div>
  );
};
