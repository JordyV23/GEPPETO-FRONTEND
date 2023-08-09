'use client';

import { Button, Navbar } from 'flowbite-react';
import { ThemeSwitch } from '../../components';

export const NavbarLanding = () => {
  return (
    <Navbar fluid rounded className='bg-light-accent p-6 text-white  rounded-md  dark:bg-dark-accent dark:border-dark-accent'>
      <Navbar.Brand href="https://flowbite-react.com">
      {/* Cambiar Imagen */}
        <img
          alt="GeppetoLogo"
          className="mr-3 h-6 sm:h-9"
          src="/logo-gpto2.svg"
        />
        <span className=" self-center wor whitespace-nowrap">
          GEPPETTO
        </span>
      </Navbar.Brand>
     
      <div className="flex order-3">
        <a href='/geppetto/convert' className=' bg-light-accent-2 hover:bg-light-accent py-2 px-4 text-white font-bold rounded-lg dark:bg-main-dark'>Calcular</a>
        <Navbar.Toggle />
        
      </div>
        <div className="flex order-2">
        <ThemeSwitch />
        </div>
      <Navbar.Collapse>
        <Navbar.Link  className='text-txt-light font-bold  p-2 text-base' active href="/gpto/home">
          <p>Home</p>
        </Navbar.Link>
        {/*<Navbar.Link className='text-txt-light font-bold text-base' href="/gpto/sistemaNumerico">Sistema de Numeración</Navbar.Link>*/}
        <Navbar.Link className='text-txt-light font-bold text-base' href="/gpto/home/#funciones">Funciones</Navbar.Link>

      </Navbar.Collapse>
     
    </Navbar>
  );
};
