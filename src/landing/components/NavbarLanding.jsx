'use client';

import { Button, Navbar } from 'flowbite-react';
import { ThemeSwitch } from '../../components';

export const NavbarLanding = () => {
  return (
    <Navbar fluid rounded className='bg-light-accent-dark p-6 text-white border-solid border-2 border-white-800 rounded-md'>
      <Navbar.Brand href="https://flowbite-react.com">
      {/* Cambiar Imagen */}
        <img
          alt="GeppetoLogo"
          className="mr-3 h-6 sm:h-9"
          src="/logo-utn.svg"
        />
        <span className=" self-center wor whitespace-nowrap">
          Geppeto
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <a href='/geppetto/convert' className=' bg-light-accent-2 hover:bg-light-accent py-2 px-4 text-white font-bold rounded-lg'>Calcular</a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link  className='text-txt-light font-bold  p-2 text-base' active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link className='text-txt-light font-bold text-base' href="#">Concepto1</Navbar.Link>
        <Navbar.Link className='text-white font-bold text-base' href="#">Concepto2</Navbar.Link>
        <Navbar.Link className='text-white font-bold text-base' href="#">Concepto3</Navbar.Link>
        <Navbar.Link className='text-white font-bold text-base' href="#">Concepto4</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
