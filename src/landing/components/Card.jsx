import React from "react";
import { Link } from "react-router-dom";
import { FuncionesP } from "../helpers";




export const CardLanding = () => {
    return (
        <>

            {FuncionesP.map(({ descripcion, titulo, imagen}, i) => (
                <div className="max-w-sm  md:h-80 bg-light-accent-dark rounded-lg shadow  dark:bg-dark-accent dark:border-dark-accent p-3 " key={i}>
                    <img className="rounded-t-lg mx-auto my-auto " src={imagen} alt={titulo} />
                    <div className="sm:p-4">
                        <h5 className="mb-2 sm:text-2xl font-bold tracking-tight text-txt-light dark:text-white  text-center">{titulo}</h5>
                        <p className="font-normal text-txt-light  text-center ">{descripcion}</p>
                    </div>
                </div>

            ))}

        </>
    )
}





