"use client";

import { Button, Navbar } from "flowbite-react";
import { ThemeSwitch } from "../../components";
import { Link } from "react-router-dom";

export const NavbarLanding = () => {
  return (
    <Navbar
      fluid
      rounded
      className="bg-light-accent p-6 text-white sticky top-0 z-50 rounded-md  dark:bg-dark-accent dark:border-dark-accent"
    >
      <Navbar.Brand>
        {/* Cambiar Imagen */}
        <img
          alt="GeppetoLogo"
          className="mr-3 h-6 sm:h-9"
          src="/img/logos/svg/logo-gpto2.svg"
        />
        <span className=" self-center wor whitespace-nowrap font-bold">
          GEPPETTO
        </span>
      </Navbar.Brand>

      <div className="flex order-3">
        <Link
          to={"/geppetto/convert"}
          className=" bg-light-accent-2 hover:bg-light-accent py-2 px-4 text-white font-bold rounded-lg dark:bg-main-dark"
        >
          Calcular
        </Link>
        <Navbar.Toggle className="text-white" />
      </div>
      <div className="flex order-2">
        <ThemeSwitch />
      </div>
      <Navbar.Collapse className="text-txt-light">
        <Navbar.Link
          className="text-txt-light font-bold  p-2 text-base"
          href="/gpto/home"
        >
          <p>Home</p>
        </Navbar.Link>

        {/*<Navbar.Link className='text-txt-light font-bold text-base' href="/gpto/sistemaNumerico">Sistema de Numeración</Navbar.Link>*/}
        <Navbar.Link
          className="text-txt-light font-bold text-base"
          href="#conceptos"
        >
          Sistema de Numeración
        </Navbar.Link>
        <Navbar.Link
          className="text-txt-light font-bold text-base"
          href="#funciones"
        >
          Funciones
        </Navbar.Link>
        <Navbar.Link
          className="text-txt-light font-bold text-base"
          href="#team"
        >
          Equipo
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
