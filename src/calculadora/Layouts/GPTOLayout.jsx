import React, { useEffect, useState } from "react";
import { NavbarGPTO, SidebarGPTO } from "../components";
import { TourProvider } from "@reactour/tour";
import { stepsModule1 } from "../../helpers";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const GPTOLayout = ({ children }) => {
  const steps = JSON.parse(localStorage.getItem("GeppetoInstruccions"));

  const [images, setImages] = useState(localStorage.getItem("images"));
  const loca = useLocation();

  useEffect(() => {
    setImages(JSON.parse(localStorage.getItem("images")));
  }, [loca]);

  return (
    <>
      <TourProvider steps={steps} startAt={0}>
        {/* <Navbar /> */}
        <NavbarGPTO images={images} />

        {/* <Sidebar /> */}
        <SidebarGPTO />

        <div className="p-4 sm:ml-64 animate__animated animate__fadeIn">
          {children}
        </div>

        {/* Contenedor toast para notificacion de error */}
        <ToastContainer />
      </TourProvider>
    </>
  );
};
