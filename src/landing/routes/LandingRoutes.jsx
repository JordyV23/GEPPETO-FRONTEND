import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages";
import { Team } from "../pages";



export const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<Navigate to="home" />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};
