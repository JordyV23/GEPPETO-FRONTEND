import { NavbarLanding } from "../components";
import { FooterLanding } from "../components/FooterLanding";
import { CardLanding } from "../components/Card";
import { Jumbotron } from "../components/Jumbotron";
import { AccordionLanding } from "../components/Acordion";
import { TeamCards} from "../components/TeamCards.jsx";

export const Home = () => {
  return (
    <>
      <div className=" bg-main-light dark:bg-main-dark  ">
        <NavbarLanding />

        <div className="md:mx-14 ">
          <Jumbotron
            img={"/img/jumbotron/png/math.png"}
            text={
              "Geppeto es una herramienta diseñada para hacer que tus cálculos numéricos sean más fáciles, precisos y eficientes." +
              " Nuestro programa consta de tres módulos potentes que te proporcionarán un conjunto de capacidades matemáticas para enfrentar " +
              "problemas numéricos, desde la conversión de bases numéricas hasta la resolución de expresiones y la solución de problemas reales " +
              "con sistemas de numeración, todo en una plataforma intuitiva y amigable."
            }
            titulo={
              "Descubre un universo numérico a tu alcance: simplifica tus problemas matemáticos."
            }
          />

          <div className="mx-6 sm:my-20" >
            <div className="mx-auto mb-6" id="funciones">
              <h2 className="font-semibold  xl:text-4xl  sm:text-3xl dark:text-white mx-auto text-center mb-6 ">
                Nuestro programa consta de tres funciones que te permitirán
                llevar tus cálculos al siguiente nivel:
              </h2>
              <div className="flex flex-col items-center md:space-x-reverse space-y-1   flex-wrap  md:flex-row  justify-evenly ">
                <CardLanding />
              </div>
            </div>

            <div id="conceptos">
              <AccordionLanding />
            </div>


            <div className="mx-auto mb-6" id="team">
                <h2  className=" font-semibold xl:text-4xl  sm:text-3xl dark:text-white mx-auto text-center mt-16 ">Equipo de trabajo</h2>
              <div className="flex flex-col items-center md:space-x-reverse space-y-1  flex-wrap  md:flex-row mt-14  justify-evenly ">
                <TeamCards />
              </div>
            </div>


            <div className="mx-auto mb-6">
              <h2 className=" font-semibold  xl:text-4xl  sm:text-3xl dark:text-white mx-auto text-center mt-6 ">
                ¡Pruébalo ahora y simplifica tus cálculos!
              </h2>
              <p className="p-2  rounded-lg text:sm dark:text-white mt-3 text-center">
                En Geppeto la precisión y la eficiencia son nuestros pilares.
                Nuestro equipo de desarrolladores ha trabajado mucho para
                brindarte una experiencia maravillosa, explorando cada módulo y
                obteniendo resultados confiables.¡Descubre cómo simplificar tus
                cálculos y problemas numéricos de manera fácil!
              </p>
            </div>

          </div>


        </div>

        <FooterLanding />
      </div>
    </>
  );
};
