import { Navigate, Route, Routes } from "react-router-dom";
import { ConversionPage, ProblemsPage, SolverPage } from "../pages";
import { GPTOLayout } from "../Layouts/GPTOLayout";
import { TourProvider } from "@reactour/tour";
import { LoaderProvider, Loader } from "../components";

export const GeppettoRoutes = () => {
  const steps = localStorage.getItem("GeppetoInstruccions");

  return (
    <LoaderProvider>
      <TourProvider steps={steps} startAt={0}>
        <Loader />

        <GPTOLayout>
          <Routes>
            <Route path="/convert" element={<ConversionPage />} />
            <Route path="/solver" element={<SolverPage />} />
            <Route path="/problemsolver" element={<ProblemsPage />} />
            <Route path="/*" element={<Navigate to="convert" />} />
          </Routes>
        </GPTOLayout>
      </TourProvider>
    </LoaderProvider>
  );
};
