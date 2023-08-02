import { Navigate, Route, Routes } from "react-router-dom";
import {ConversionPage,ProblemsPage,SolverPage} from "../pages"
export const GeppettoRoutes = () => {
    return (
        <Routes>
            <Route path="/convert" element={<ConversionPage/>} />
            <Route path="/solver" element={<SolverPage/>} />
            <Route path="/problemsolver" element={<ProblemsPage/>} />
            <Route path="/*" element={<Navigate to="convert"/>} />
        </Routes>
    )
}