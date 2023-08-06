import React from "react";
import { NavbarGPTO, SidebarGPTO } from "../components";

export const GPTOLayout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarGPTO />

      {/* <Sidebar /> */}
      <SidebarGPTO />

      <div className="p-4 sm:ml-64 animate__animated animate__fadeIn">{children}</div>
    </>
  );
};
