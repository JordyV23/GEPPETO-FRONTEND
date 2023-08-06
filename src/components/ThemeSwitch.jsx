import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export const ThemeSwitch = () => {
  //** variable que almacena en el localstorage en el dispositivo **//
  const storedValue = localStorage.getItem("geppeto-theme");

  //***Hook para cambio de tema***//
  const [theme, setTheme] = useState( storedValue ? storedValue : "light" );

  //***Hook para observar el momento en el que cambie el valor de el tema***//
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  //Funcion que cambia el tema al hacer click
  const onToggleBtn = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("geppeto-theme", theme === "dark" ? "light" : "dark");
  };

  //**Verifica si no existe la variable en el localstorage */
  if (!storedValue) {
    localStorage.setItem("geppeto-theme", "light");
  } 

  return (
    <button
      className="hvr-grow  top-5 righ-5 w-10 h-5 md:w-12 md:h-6 rounded-2xl bg-white flex items-center transition duration-300 focus:outline-none shadow"
      onClick={onToggleBtn}
    >
      <div
        className={`w-6 h-6 md:w-7 md:h-7 relative rounded-full transition duration-500 transform  p-1 text-white ${
          theme === "light"
            ? "bg-yellow-300 -translate-x-2"
            : "bg-main-dark translate-x-full"
        }`}
      >
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </div>
    </button>
  );
};
