'use client';

import { Navbar } from 'flowbite-react';

export const NavbarGPTO = () => {
  return (
    <Navbar
      fluid
      rounded
      className='bg-light-accent mt-3 rounded-lg'
    >
      <Navbar.Brand>
        <img
          alt="Geppetto Logo"
          className="mr-3 h-6 sm:h-9"
          src="/vite.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Geppetto
        </span>
      </Navbar.Brand>
    </Navbar>
  )
}


