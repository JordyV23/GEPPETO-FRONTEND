import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import { NavbarGPTO } from "../components";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import { SidebarGPTO } from "../components/Sidebar";

const ops = Array.from({ length: 62 }, (_, i) => ({
  label: `${i + 2}`,
  value: i + 2,
}));

export const ConversionPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ numero, baseInicial, baseFinal }) => {
    const { data: datos } = await axios.post(
      `${import.meta.env.VITE_APIURL}cbase/`,
      {
        _num: numero,
        base_from: parseInt(baseInicial),
        base_to: parseInt(baseFinal),
      }
    );

    Swal.fire(`${datos.Mensaje} resultado: ${datos.Numero}`);
  };

  return (
    <>
      {/* <NavbarGPTO />
      <SidebarGPTO />
      <div>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-16">
            <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
              <form onSubmit={handleSubmit(onSubmit)} className="flex-1"></form>
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col h-screen">
        <NavbarGPTO />


      <div className="flex">
          <SidebarGPTO /> 

       
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 items-center justify-center border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-20">
              <div className="flex items-center justify-center h-68 mb-4 rounded">
              <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
                <div className="flex">
                  <div className="mr-2">
                    <label
                      htmlFor="numero"
                      className="block text-sm font-medium"
                    >
                      Valor a Convertir:
                    </label>
                    <input
                      id="numero"
                      {...register("numero")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="mr-2">
                    <label
                      htmlFor="baseInicial"
                      className="block text-sm font-medium"
                    >
                      Base Inicial:
                    </label>
                    <select
                      id="baseInicial"
                      {...register("baseInicial")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      {ops.map((op) => (
                        <option key={op.value} value={op.value}>
                          {op.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="baseFinal"
                    className="block text-sm font-medium"
                  >
                    Base Final:{" "}
                  </label>
                  <select
                    id="baseFinal"
                    {...register("baseFinal")}
                    className="w-52 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    {ops.map((op) => (
                      <option key={op.value} value={op.value}>
                        {op.label}
                      </option>
                    ))}
                  </select>
                </div>

                <label
                  htmlFor="resultado"
                  className="block text-sm font-medium"
                >
                  Resultado:
                </label>
                <input
                  id="resultado"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />

                <Button type="submit" className="bg-light-accent mt-3">
                  Calcular <Cog8ToothIcon className="h-6 w-6 text-light" />
                </Button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid gap-4 w-full h-screen p-4">
        <div className="col-span-12 h-[3.75rem] flex items center">
          <NavbarGPTO />
        </div>

        <aside className="col-span-12 md:col-span-2">
          <SidebarGPTO  />
        </aside>

        <div className="col-span-8 h-[calc(100vh-3.75rem)] p-4 ">
          <div className="container ">
            <div className="flex mt-4 mx-auto">
                <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
                  <div className="flex">
                  <div className="mr-2">
                      <label
                        htmlFor="numero"
                      className="block text-sm font-medium"
                      >
                        Valor a Convertir:
                      </label>
                      <input
                        id="numero"
                        {...register("numero")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                  <div className="mr-2">
                      <label
                        htmlFor="baseInicial"
                      className="block text-sm font-medium"
                      >
                      Base Inicial:
                      </label>
                      <select
                        id="baseInicial"
                        {...register("baseInicial")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        {ops.map((op) => (
                          <option key={op.value} value={op.value}>
                            {op.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mt-2">
                    <label
                      htmlFor="baseFinal"
                    className="block text-sm font-medium"
                    >
                      Base Final:{" "}
                    </label>
                    <select
                      id="baseFinal"
                      {...register("baseFinal")}
                      className="w-52 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      {ops.map((op) => (
                        <option key={op.value} value={op.value}>
                          {op.label}
                        </option>
                      ))}
                    </select>
                  </div>

                <Button type="submit" className="bg-light-accent mt-3">
                  Calcular <Cog8ToothIcon className="h-6 w-6 text-light" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div> */}

      {/* <SidebarGPTO />
      <NavbarGPTO />
      <div className="container ">
        <div className="flex mt-4 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
            <div className="flex">
              <div className="mr-2">
                <label htmlFor="numero" className="block text-sm font-medium">
                  Valor a Convertir:
                  </label>
                  <input
                  id="numero"
                  {...register("numero")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
              </div>

              <div className="mr-2">
                <label
                  htmlFor="baseInicial"
                  className="block text-sm font-medium"
                  >
                  Base Inicial:
                </label>
                <select
                  id="baseInicial"
                  {...register("baseInicial")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  {ops.map((op) => (
                    <option key={op.value} value={op.value}>
                      {op.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-2">
              <label htmlFor="baseFinal" className="block text-sm font-medium">
                Base Final:{" "}
              </label>
              <select
                id="baseFinal"
                {...register("baseFinal")}
                className="w-52 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                {ops.map((op) => (
                  <option key={op.value} value={op.value}>
                    {op.label}
                  </option>
                ))}
              </select>
          </div>

            <Button type="submit" className="bg-light-accent mt-3">
              Calcular <Cog8ToothIcon className="h-6 w-6 text-light" />
            </Button>
          </form>
        </div>
      </div> */}
    </>
  );
};
