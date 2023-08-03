import { NavbarLanding } from "../components";
import { FooterLanding } from "../components/FooterLanding";

export const Home = () => {
  return (
    <>
      <NavbarLanding />

      <div className="grid grid-cols-1 md:grid-cols-3 mt-3 bg-light-accent">
        <div className="col-span-2  p-4">
          <h1 className="text-white font-bold text-4xl">GEPPETO</h1>
        </div>

        <div className="col-span-1  p-4">
          <img src="/D.png" />
        </div>
      </div>

      <FooterLanding/>
    </>
  );
};
