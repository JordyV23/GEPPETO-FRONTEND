import React, { createContext, useState } from 'react';

/**
 * Contexto de carga que permite compartir el estado de carga y las funciones relacionadas con los componentes descendientes.
 * @type {React.Context}
 */
const LoaderContext = createContext();

/**
 * Proveedor de contexto de carga que envuelve los componentes descendientes y proporciona funciones para controlar el estado de carga.
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Los componentes secundarios envueltos por el proveedor.
 * @returns {JSX.Element} Componente de proveedor de contexto de carga.
 */
const LoaderProvider = ({ children }) => {
  /**
   * Estado que indica si hay una carga en progreso.
   * @type {boolean}
   */
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Muestra el indicador de carga estableciendo el estado a verdadero.
   * @function
   * @returns {void}
   */
  const showLoader = () => {
    setIsLoading(true);
  };

  /**
   * Oculta el indicador de carga estableciendo el estado a falso.
   * @function
   * @returns {void}
   */
  const hideLoader = () => {
    setIsLoading(false);
  };

  /**
   * Valor que se comparte con los componentes descendientes a través del contexto.
   * @type {object}
   * @property {boolean} isLoading - Indica si hay una carga en progreso.
   * @property {Function} showLoader - Función para mostrar el indicador de carga.
   * @property {Function} hideLoader - Función para ocultar el indicador de carga.
   */
  const value = {
    isLoading,
    showLoader,
    hideLoader,
  };

  return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>;
};

export { LoaderProvider, LoaderContext };