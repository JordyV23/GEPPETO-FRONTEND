import { ThreeCircles } from "react-loader-spinner";
import "animate.css";
import React, { useContext } from 'react';
import { LoaderContext } from './LoaderProvider';
export const Loader = () => {
  const storedTtheme = localStorage.getItem("geppeto-theme");
  const { isLoading } = useContext(LoaderContext);
  return  isLoading && (
      <div className="flex items-center justify-center h-screen animate__animated animate__fadeIn  z-50 " id="loader">
        <ThreeCircles
          height="100"
          width="100"
          color={
            storedTtheme === null || storedTtheme === "light"
              ? "#D33232"
              : "#18122B"
          }
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
     </div>
  )
};
