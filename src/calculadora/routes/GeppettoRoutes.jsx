import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ConversionPage, ProblemsPage, SolverPage } from "../pages";
import { GPTOLayout } from "../Layouts/GPTOLayout";
import { Loader} from "../components";
import { LoaderProvider } from "../providers";

export const GeppettoRoutes = () => {
  return (
    <LoaderProvider>
        <GPTOLayout>
          <Loader />
          <Routes>
            <Route path="/convert" element={<ConversionPage />} />
            <Route path="/solver" element={<SolverPage />} />
            <Route path="/problemsolver" element={<ProblemsPage />} />
            <Route path="/*" element={<Navigate to="convert" />} />
          </Routes>
        </GPTOLayout>
    </LoaderProvider>
  );
};
