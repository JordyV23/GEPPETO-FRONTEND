import React from "react";
import { NavbarGPTO, SidebarGPTO } from "../components";
import { ToastContainer} from "react-toastify"
export const GPTOLayout = ({ children }) => {

  return (
    <> 
        {/* Contenedor toast para notificacion*/}
        <ToastContainer />

        {/* <Navbar /> */}
        <NavbarGPTO />
        
        {/* <Sidebar /> */}
        <SidebarGPTO />

        <div className="p-4 sm:ml-64 animate__animated animate__fadeIn">{children}</div>
    </>
  );
};
