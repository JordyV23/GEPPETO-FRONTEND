import { Navigate, Route, Routes } from "react-router-dom";
import {ConversionPage} from "../pages"
export const GeppettoRoutes = () => {
    return (
        <Routes>
            <Route path="/convert" element={<ConversionPage/>} />
            <Route path="/*" element={<Navigate to="/convert"/>} />
        </Routes>
    )
}