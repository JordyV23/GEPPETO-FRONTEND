import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import {
  Loader,
  NavbarGPTO,
  SidebarGPTO,
  ImageModal,
  ModalTutorial,
} from "../components";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "hover.css";
import { TourProvider } from "@reactour/tour";
import { stepsModule2 } from "../../helpers/stepsModule2";

export const SolverPage = () => {
  //***Hook para manejo de formulario***//
  const { register, handleSubmit } = useForm();

  //***Hook para manejo de valor del resultado***//
  const [resultado, setResultado] = useState("");

  //**Hook para manejo de estado de carga  */
  const [loading, setloading] = useState(false);

  //***Funcion para consulta a la API para obtener resultado de la conversion***//
  const onSubmit = async ({ expresion }) => {
    //Cambia el estado de carga a true
    setloading(true);

    //Envio de datos a la api por POST
    const { data: datos } = await axios.post(
      `${import.meta.env.VITE_APIURL}numbes/`,
      {
        cifras: expresion,
      }
    );

    //Cambia el estado de carga a falso
    setloading(false);

    //Si el status que viene de la API es true, continua
    if (datos.Status == "True") {
      setResultado(datos.solucion);
      return;
    }
    //Si no, muestra un toast
    toast("Revisa tu conversion :c");
  };

  //Arreglo de imagenes con el paso a paso de este modulo
  const imagenes = [
    "/guides/mod2/1.png",
    "/guides/mod2/2.png",
    "/guides/mod2/3.png",
    "/guides/mod2/4.png",
  ];

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <TourProvider steps={stepsModule2} startAt={0}>
        <ModalTutorial
          info={["Continuemos con nuestro viaje!"]}
          booleanState={false}
          btnInstruction={"Continuemos"}
        />
        <div className="p-4 border-2 items-center w-full justify-center border-white border-dashed rounded-lg dark:border-white mt-20">
          <div className="flex items-center justify-center h-68 mb-4 rounded ">
            <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
              <div className="flex">
                <div className="mr-2 w-full">
                  {/* Label para la expresion */}
                  <label
                    htmlFor="expresion"
                    className="block text-sm font-medium dark:text-white"
                  >
                    Expreison Numerica:
                  </label>

                  {/* Input para la expresion a convertir */}
                  <input
                    id="expresion"
                    type="text"
                    {...register("expresion")}
                    placeholder="Ejemplo: c42(8);43(a);a5(b);b42(c)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* Btn que despliega el modal con el paso a paso */}
                <ImageModal imagenes={imagenes} />
              </div>

              {/* Label para el resultado */}
              <label
                htmlFor="resultado"
                className="block text-sm font-medium dark:text-white mt-3"
              >
                Resultado:
              </label>
              {/* Input para mostrar el resultado */}
              <textarea
                id="resultado"
                rows={5}
                readOnly
                className="w-full resize-none px-3 py-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={resultado}
              />

              {/* Boton que acciona evento para consultar la API */}
              <Button
                id="submit"
                type="submit"
                className="bg-light-accent dark:bg-dark-accent mt-3 mx-auto px-3 py-3 hvr-grow hvr-icon-spin"
              >
                Resolver
                <Cog8ToothIcon className="h-6 w-6 text-light hvr-icon" />
              </Button>
            </form>

            {/* Contenedor toast para notificacion de error */}
            <ToastContainer />
          </div>
        </div>
      </TourProvider>
    </>
  );
};
