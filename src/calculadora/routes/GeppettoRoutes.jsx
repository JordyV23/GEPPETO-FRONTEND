import { Route, Routes } from "react-router-dom";
import {Conversion} from "../pages"
export const GeppettoRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Conversion/>} />
        </Routes>
    )
}