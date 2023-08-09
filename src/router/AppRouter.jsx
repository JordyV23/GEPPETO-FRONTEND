import { Navigate, Route, Routes } from "react-router-dom";
import {GeppettoRoutes} from "../calculadora"
import { LandingRoutes } from "../landing";

export const AppRouter = () => {

    return(
        <Routes>
            <Route path="/gpto/*" element={<LandingRoutes/>}/>
            <Route path="/geppetto/*" element={<GeppettoRoutes/>}/>
            <Route path="/*" element={<Navigate to="/gpto"/>}/>
        </Routes>
    )

}