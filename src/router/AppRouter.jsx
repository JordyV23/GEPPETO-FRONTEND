import { Navigate, Route, Routes } from "react-router-dom";
import {GeppettoRoutes} from "../calculadora"

export const AppRouter = () => {

    return(
        <Routes>
            <Route path="/geppetto/*" element={<GeppettoRoutes/>}/>
            <Route path="/*" element={<Navigate to="/geppetto"/>}/>
        </Routes>
    )

}