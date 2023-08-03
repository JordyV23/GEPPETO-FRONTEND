import axios from "axios";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import { Loader, NavbarGPTO, SidebarGPTO,ImageModal, ImageSlider } from "../components";
import {
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "hover.css";
import { useEffect } from "react";


//****Inicializa arreglo con valor para select de bases****//
const ops = Array.from({ length: 61 }, (_, i) => ({
  label: `${i + 2}`,
  value: i + 2,
}));

export const ConversionPage = () => {
  //***Hook para manejo de formulario***//
  const { register, handleSubmit } = useForm();

  //**Hook para manejo de estado de carga  */
  const [loading, setloading] = useState(false);

  //***Hook para manejo de valor del resultado***//
  const [resultado, setResultado] = useState("");

  //***Funcion para consulta a la API para obtener resultado de la conversion***//
  const onSubmit = async ({ numero, baseInicial, baseFinal }) => {
    //Cambia el estado de carga a true
    setloading(true);

    //Envio de datos a la api por POST
    const { data: datos } = await axios.post(
      `${import.meta.env.VITE_APIURL}cbase/`,
      {
        _num: numero,
        base_from: parseInt(baseInicial),
        base_to: parseInt(baseFinal),
      }
    );

    //Cambia el estado de carga a falso
    setloading(false);

    //Si el status que viene de la API es true, continua
    if (datos.Status == "True") {
      setResultado(datos.Numero);
      return;
    }
    //Si no, muestra un toast
    toast("Revisa tu conversion :c");
  };

  if (loading) {
    return <Loader />;
  }

  //Arreglo de imagenes con el paso a paso de este modulo
  const imagenes = ["/guides/mod1/1.png","/guides/mod1/2.png","/guides/mod1/3.png","/guides/mod1/4.png","/guides/mod1/5.png"];

  const [images, setImages] = useState(["/guides/mod1/1.png","/guides/mod1/2.png","/guides/mod1/3.png","/guides/mod1/4.png","/guides/mod1/5.png"]);

  return (
    <>
      <div className="flex flex-col h-screen animate__animated animate__fadeIn">
        {/* Inserta componente personalizado de navbar */}
        <NavbarGPTO />

        <div className="flex">
          {/* Inserta componente personalizado de sidebar */}
          <SidebarGPTO />

          <div className="p-4 sm:ml-64 w-8/12">
            <div className="p-4  items-center w-full justify-center  rounded-lg dark:border-white mt-20">
              <div className="flex items-center justify-center h-68 mb-4 rounded ">
                <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
                  <div className="flex">
                    <div className="mr-2 w-2/5">
                      {/* Label para input de numero a convertir */}
                      <label
                        htmlFor="numero"
                        className="block text-sm font-medium dark:text-white"
                      >
                        Valor a Convertir:
                      </label>

                      {/* Input para el numero a convertir */}
                      <input
                        id="numero"
                        {...register("numero")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="ml-6 mr-2 w-2/5">
                      {/* Label para el select de base del numero a convertir */}
                      <label
                        htmlFor="baseInicial"
                        className="block text-sm font-medium dark:text-white"
                      >
                        Base a Inicial:
                      </label>

                      {/* Select de la base del numero inicial */}
                      <select
                        id="baseInicial"
                        {...register("baseInicial")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                      <option></option>
                        {ops.map((op) => (
                          <option key={op.value} value={op.value}>
                            {op.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Btn que despliega el modal con el paso a paso */}
                    <ImageModal imagenes={images} />
                  </div>

                  <div className="mt-2">
                    {/* Label para la base del resultado */}
                    <label
                      htmlFor="baseFinal"
                      className="block text-sm font-medium dark:text-white"
                    >
                      Base Final:{" "}
                    </label>

                    {/* Select para la base del resultado */}
                    <select
                      id="baseFinal"
                      {...register("baseFinal")}
                      className="w-52 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option></option>
                      {ops.map((op) => (
                        <option key={op.value} value={op.value}>
                          {op.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Label para el resultado */}
                  <label
                    htmlFor="resultado"
                    className="block text-sm font-medium dark:text-white mt-3"
                  >
                    Resultado:
                  </label>
                  {/* Input para mostrar el resultado */}
                  <input
                    id="resultado"
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    value={resultado}
                  />

                  {/* Boton que acciona evento para consultar la API */}
                  <Button
                    type="submit"
                    className="bg-light-accent dark:bg-dark-accent mt-3 mx-auto px-3 py-3 hvr-grow hvr-icon-spin"
                  >
                    Calcular
                    <Cog8ToothIcon className="h-6 w-6 text-light hvr-icon" />
                  </Button>
                </form>
                {/* Contenedor toast para notificacion de error */}
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageSlider imagenes={images} />      
    </>
  );
};
