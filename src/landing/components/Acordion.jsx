'use client';
import { Conceptos } from '../helpers';
import { Link } from "react-router-dom";
import { Accordion } from 'flowbite-react';
import {ImageModalHome} from './ImageModalHome.jsx'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const AccordionLanding = () => {
  return (
    <Accordion collapseAll className='bg-light-accent p-6 my-12 rounded-md  dark:bg-dark-accent dark:border-dark-accent'>
      {Conceptos.map(({ concepto, titulo,link, videoId, img}, i) => (
          <Accordion.Panel   key={i} >
          <Accordion.Title className=' bg-light-accent text-white font-bold dark:bg-dark-accent  dark:text-white hover:bg-light-accent-dark'>
           {titulo}
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-white dark:text-white">
              <p>
                {concepto}
              </p>
            </p>

            <ImageModalHome content={{ img, videoId }}>
            </ImageModalHome>

          </Accordion.Content>
        </Accordion.Panel>


      ))}

    </Accordion>
  )
}


