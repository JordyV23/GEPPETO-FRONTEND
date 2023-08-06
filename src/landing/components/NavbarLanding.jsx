'use client';

import { Button, Navbar } from 'flowbite-react';
import { ThemeSwitch } from '../../components';

export const NavbarLanding = () => {
  return (
    <Navbar fluid rounded className='bg-light-accent text-white'>
      <Navbar.Brand href="https://flowbite-react.com">
      {/* Cambiar Imagen */}
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/logo-utn.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <a href='/geppetto/convert' className=' bg-light-accent-2 hover:bg-light-accent py-2 px-4 text-white font-bold rounded-lg'>Calcular</a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link className='text-white' href="#">Concepto1</Navbar.Link>
        <Navbar.Link className='text-white' href="#">Concepto2</Navbar.Link>
        <Navbar.Link className='text-white' href="#">Concepto3</Navbar.Link>
        <Navbar.Link className='text-white' href="#">Concepto4</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
