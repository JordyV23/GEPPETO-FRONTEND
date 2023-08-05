
import { NavbarLanding } from "../components";
import { FooterLanding } from "../components/FooterLanding";
import { CardLanding } from "../components/Card";


export const Home = () => {
  return (
    <>
      <div className=" bg-light-accent ">
        <NavbarLanding />

        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 bg-light-accent  ">
          <div className="col-span-2 p-4 ml-14 ">
            <h1 className="text-txt-light font-bold sm:text-5xl text-justify">Descubre un universo numérico a tu alcance: simplifica tus problemas matemáticos.</h1>
            <p className="p-2 text-txt-light rounded-lg dark:text-white mt-6 text-justify">
              Geppeto es una herramienta diseñada para hacer que tus cálculos numéricos sean más fáciles, precisos y eficientes. Nuestro programa
              consta de tres módulos potentes que te proporcionarán un conjunto de capacidades matemáticas para enfrentar problemas numéricos, desde la
              conversión de bases numéricas hasta la resolución de expresiones y la solución de problemas reales con sistemas de numeración, todo en una
              plataforma intuitiva y amigable.
            </p>
          </div>

          <div className="col-span-1  p-4 rotate-12 mr-8 ">
            <img src="/math.png" />
          </div>
        </div>

        <div className="mx-6 my-20 ">

          <div className="mx-auto mb-6">
            <h5 className="text-xl text-txt-light font-semibold sm:text-2xl dark:text-white mx-auto text-center mb-6 ">Nuestro programa consta de tres funciones que te permitirán llevar tus cálculos al siguiente nivel:</h5>
          </div>

          <div className="flex flex-col  md:flex-row md:space-x-8 md:justify-evenly">

            <CardLanding titulo={"Conversión de Bases Numéricas"} descripcion={"¿Necesitas convertir un número de una base a otra? Nuestro primer módulo te brinda la capacidad de realizar conversiones precisas y rápidas entre bases numéricas."}
              imagen={"/base.png"} ruta={'/geppetto/convert'} />
            <CardLanding titulo={"Evaluación de Expresiones Numéricas"} descripcion={"¿Tienes expresiones numéricas complejas que resolver? Nuestro segundo módulo ha sido diseñado para analizar y evaluar expresiones correctamente escritas."}
              imagen={"/public/expresion.png"} ruta={'/geppetto/solver'} />
            <CardLanding titulo={"Resolver Problemas"} descripcion={"¿Quieres aplicar conceptos de sistemas de numeración a problemas del mundo real? Nuestro tercer módulo te ofrece la capacidad de resolver problemas prácticos con conversión de sistemas de numeración."}
              imagen={"/problema.png"} ruta={'/geppetto/problemsolver'} />

          </div>
        </div>

        <FooterLanding />

      </div>
    

    </>
  );
};

