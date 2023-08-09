import React, { useEffect, useState } from "react";
import { NavbarGPTO, SidebarGPTO } from "../components";
import { TourProvider } from "@reactour/tour";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { steps } from "../../helpers/steps";

export const GPTOLayout = ({ children }) => {
  //const steps = JSON.parse(localStorage.getItem("GeppetoInstruccions"));

  const [images, setImages] = useState(localStorage.getItem("images"));
  const loca = useLocation();

  useEffect(() => {
    setImages(JSON.parse(localStorage.getItem("images")));
  }, [loca]);

  const redirect = useNavigate();
  const [step, setStep] = useState(0);

  const setCurrentStep = (step) => {
    switch (step) {
      case 6:
        redirect("/geppetto/solver", true);
        break;
      default:
        break;
    }
    setStep(step);
  };

  return (
    <>
      <TourProvider
        steps={steps}
        startAt={0}
        currentStep={step}
        setCurrentStep={setCurrentStep}
        disableKeyboardNavigation={['left']}
        showPrevNextButtons={false}
      >
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
