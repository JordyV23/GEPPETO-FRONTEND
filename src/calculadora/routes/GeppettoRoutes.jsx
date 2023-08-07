import { Navigate, Route, Routes } from "react-router-dom";
import { ConversionPage, ProblemsPage, SolverPage } from "../pages";
import { GPTOLayout } from "../Layouts/GPTOLayout";
import { LoaderProvider, Loader } from "../components";
export const GeppettoRoutes = () => {
  return (
    <LoaderProvider>
      <Loader />
      <GPTOLayout>
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

