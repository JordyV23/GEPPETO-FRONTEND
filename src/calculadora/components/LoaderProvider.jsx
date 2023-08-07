import React, { createContext, useState } from 'react';

const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    
    setIsLoading(false);
  };

  const value = {
    isLoading,
    showLoader,
    hideLoader,
  };

  return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>;
};

export { LoaderProvider, LoaderContext };
