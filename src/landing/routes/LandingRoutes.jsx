import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import {SistemaNumerico} from "../pages";



export const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/sistemaNumerico" element={<SistemaNumerico />} />
      <Route path="/*" element={<Navigate to="home" />} />
    </Routes>
  );
};
