'use client';
import { Conceptos } from '../helpers';
import { Link } from 'react-router-dom';
import { Accordion } from 'flowbite-react';


export const AccordionLanding = () => {
 
  return (
    <Accordion collapseAll className='bg-light-accent-dark p-6  my-12 rounded-md  dark:bg-dark-accent dark:border-dark-accent'>
      {Conceptos.map(({ concepto, titulo,link}, i) => (
          <Accordion.Panel key={i} >
          <Accordion.Title className=' bg-light-accent-dark text-white font-bold dark:bg-dark-accent  dark:text-white hover:bg-light-accent'>
           {titulo}
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white dark:text-white">
            {concepto}
            </p>
            <Link to={link} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              <i className="fa-regular fa-eye"></i>
            </Link>
           
          </Accordion.Content>
        </Accordion.Panel>

      ))}

    </Accordion>
  )
}


