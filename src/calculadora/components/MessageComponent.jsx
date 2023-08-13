import React from "react";
import TypewriterComponent from "typewriter-effect";

/**
 * Componente para mostrar un mensaje en el chat.
 * @param {Object} props - Propiedades del componente.
 * @param {string[]} props.alignment - Configuración de alineación y estilos del mensaje.
 * @param {string} props.message - Contenido del mensaje a mostrar.
 * @returns {JSX.Element} El componente MessageComponent que muestra un mensaje en el chat.
 */
export const MessageComponent = ({ alignment, message }) => {
  return (
    <>
      <div className={`p-3 rounded-lg ${alignment[0]}`}>
        <div className={`flex  ${alignment[1]}`}>
          <div
            className={`flex items-center justify-center h-10 w-10 rounded-full ${alignment[2]} flex-shrink-0`}
          >
            <img src={alignment[3]} />
          </div>
          <div
            className={`relative ${alignment[4]} text-sm ${alignment[5]} py-2 px-4 shadow rounded-xl`}
          >
            <div className={`${alignment[6]}`}>
           
              <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .typeString(message)
                  .pauseFor(10000)
                  .start();
              }}
              options={{delay:10}}
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
