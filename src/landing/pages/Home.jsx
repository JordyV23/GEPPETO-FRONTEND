
import { NavbarLanding } from "../components";
import { FooterLanding } from "../components/FooterLanding";
import { CardLanding } from "../components/Card";
import { Jumbotron } from "../components/Jumbotron";
import { AccordionLanding } from "../components/Acordion";

export const Home = () => {
  return (
    <>
      <div className=" bg-main-light dark:bg-main-dark ">
        <NavbarLanding />
        <div className="md:mx-14">
          <Jumbotron img={"/math.png" } text={ "Geppeto es una herramienta diseñada para hacer que tus cálculos numéricos sean más fáciles, precisos y eficientes."+
          " Nuestro programa consta de tres módulos potentes que te proporcionarán un conjunto de capacidades matemáticas para enfrentar "+
          "problemas numéricos, desde la conversión de bases numéricas hasta la resolución de expresiones y la solución de problemas reales "+
          "con sistemas de numeración, todo en una plataforma intuitiva y amigable."}
          titulo={"Descubre un universo numérico a tu alcance: simplifica tus problemas matemáticos."}/>

          <div className="mx-6 sm:my-20 ">
            <div className="mx-auto mb-6" id="funciones">
              <h5 className="  font-semibold sm:text-2xl dark:text-white mx-auto text-center mb-6 ">Nuestro programa consta de tres funciones que te permitirán llevar tus cálculos al siguiente nivel:</h5>
            </div>

            <div className=" relative md:h-80 flex flex-col items-center md:space-x-reverse space-y-1   flex-wrap  md:flex-row  justify-evenly " >

              <CardLanding  titulo={"Conversión de Bases Numéricas"} descripcion={"¿Necesitas convertir un número de una base a otra? Nuestro primer módulo te brinda la capacidad de realizar conversiones precisas entre bases numéricas."}
                imagen={"/base.png"} ruta={'/geppetto/convert'} />
              <CardLanding  titulo={"Evaluación de Expresiones Numéricas"} descripcion={"¿Tienes expresiones numéricas complejas que resolver? Nuestro segundo módulo ha sido diseñado para analizar y evaluar expresiones correctamente escritas."}
                imagen={"/public/expresion.png"} ruta={'/geppetto/solver'} />
              <CardLanding  titulo={"Resolución  Problemas"} descripcion={"¿Quieres aplicar conceptos de sistemas de numeración a problemas del mundo real? Nuestro tercer módulo te ofrece la capacidad de resolver problemas prácticos con conversión de sistemas de numeración."}
                imagen={"/problema.png"} ruta={'/geppetto/problemsolver'} />

            </div>

            <AccordionLanding />

            <div className="mx-auto mb-6">
            <h5 className=" font-semibold sm:text-2xl dark:text-white mx-auto text-center mt-6 ">¡Pruébalo ahora y simplifica tus cálculos!</h5>
              <p className="p-2  rounded-lg text:sm dark:text-white mt-3 text-center">En Geppeto la precisión y
                la eficiencia son nuestros pilares. Nuestro equipo de desarrolladores ha trabajado mucho para brindarte una experiencia maravillosa,
                explorando cada módulo y obteniendo resultados confiables.¡Descubre cómo simplificar tus cálculos y problemas numéricos de manera fácil!
              </p>
            </div>

          </div>
        </div>
        <FooterLanding />

      </div>


    </>
  );
};

