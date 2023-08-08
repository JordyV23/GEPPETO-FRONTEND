'use client';

import { Accordion } from 'flowbite-react';

export const AccordionLanding = () => {
  return (
    <Accordion className='bg-light-accent-dark p-6  my-12 rounded-md  dark:bg-dark-accent dark:border-dark-accent'>
      <Accordion.Panel >
        <Accordion.Title className=' bg-light-accent-dark text-white font-bold dark:bg-dark-accent  dark:text-white hover:bg-light-accent'>
          ¿Qué es un sistema de numeración?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-white dark:text-white">
            <p>
              Un sistema de numeración es un conjunto de reglas y principios utilizados para representar correctamente los números,
              para realizar operaciones matemáticas. Existen varios sistemas de numeración utilizados en todo el planeta, pero los más comunes
              son el sistema decimal, el binario y el hexadecimal, el sistema que usamos diariamente es el decimmal es el que usualmente usamos para
              representar cantidades en la vida cotidiana.
            </p>
          </p>

          <p className="text-white dark:text-gray-400">
            Entre estos principios tenemos:
          </p>
          <ul className='max-w-md space-y-1 text-txt-light  list-disc list-inside dark:text-white'>
            <li>Principio de Orden</li>
            <li>Principio de la Base</li>
            <li>Principio Posicional</li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title className=' bg-light-accent-dark text-white font-bold dark:bg-dark-accent  dark:text-white hover:bg-light-accent'>
          Principio de Orden
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-white dark:text-white">
            <p>
              Concepto 2
            </p>
          </p>

        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className=' bg-light-accent-dark text-white font-bold dark:bg-dark-accent  dark:text-white hover:bg-light-accent'>
          Principio de la Base
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-white dark:text-white">
            <p>
             Concepto 3
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>


      <Accordion.Panel>
        <Accordion.Title className=' bg-light-accent-dark text-white font-bold dark:bg-dark-accent  dark:text-white hover:bg-light-accent'>
        Principio Posicional
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-white dark:text-white">
            <p>
              Concepto 4
            </p>
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}


