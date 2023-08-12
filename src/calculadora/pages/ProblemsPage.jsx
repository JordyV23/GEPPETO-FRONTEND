import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, Textarea } from "flowbite-react";
import { LoaderContext, ImageModal } from "../components";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "hover.css";
import React, { useContext } from "react";
import { addStyles, EditableMathField } from "react-mathquill";

addStyles();

export const ProblemsPage = () => {
  //***Hook para manejo de formulario***//
  const { register, handleSubmit } = useForm();

  //***Hook para manejo de valor del resultado***//
  const [resultado, setResultado] = useState("");

  //**Hook para manejo de estado de carga  */
  const { showLoader, hideLoader } = useContext(LoaderContext);
  //***Funcion para consulta a la API para obtener resultado de la conversion***//
  const onSubmit = async ({ expresion }) => {
    //Cambia el estado de carga a true
    // setloading(true);
    showLoader();
    //Envio de datos a la api por POST
    const { data: datos } = await axios.post(
      `${import.meta.env.VITE_APIURL}problemasAI/`,
      {
        prompt: latex,
      }
    );

    //Cambia el estado de carga a falso
    //setloading(false);
    hideLoader();
    //Si el status que viene de la API es true, continua
    if (datos.Status == "true") {
      setResultado(datos.Respuesta);
      return;
    }
    //Si no, muestra un toast
    toast.warning(
      "Uy, a nuestra IA se le olvidó como resolver este problema 🙈"
    );
  };

  const [latex, setLatex] = useState("");

  //Arreglo de imagenes con el paso a paso de este modulo
  const images = [
    "/guides/mod2/1.png",
    "/guides/mod2/2.png",
    "/guides/mod2/3.png",
    "/guides/mod2/4.png",
  ];

  return (
    <>
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
                {/* <textarea
                  id="expresion"
                  type="text"
                  rows={5}
                  {...register("expresion")}
                  placeholder="Ingrese su problema"
                  className=" resize-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                /> */}

                <EditableMathField
                  className="w-full bg-white resize-none px-3 py-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  latex={latex}
                  onChange={(mathField) => {
                    setLatex(mathField.latex());
                  }}
                />
              </div>

              {/* Btn que despliega el modal con el paso a paso */}
              <ImageModal imagenes={images} />
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
              type="submit"
              className="bg-light-accent dark:bg-dark-accent mt-3 mx-auto px-3 py-3 hvr-grow hvr-icon-spin"
            >
              Resolver
              <Cog8ToothIcon className="h-6 w-6 text-light hvr-icon" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
