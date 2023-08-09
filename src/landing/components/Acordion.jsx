'use client';
import { Conceptos } from '../helpers';

import { Accordion } from 'flowbite-react';

export const AccordionLanding = () => {
  return (
    <Accordion className='bg-light-accent-dark p-6  my-12 rounded-md  dark:bg-dark-accent dark:border-dark-accent'>
      {Conceptos.map(({ concepto, titulo}, i) => (
          <Accordion.Panel key={i} >
          <Accordion.Title className=' bg-light-accent-dark text-white font-bold dark:bg-dark-accent  dark:text-white hover:bg-light-accent'>
           {titulo}
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white dark:text-white">
              <p>
                {concepto}
              </p>
            </p>
  
            
          </Accordion.Content>
        </Accordion.Panel>


      ))}

    </Accordion>
  )
}


