import React from "react";
import { Link } from "react-router-dom";

export const CardLanding = ({ titulo, descripcion, imagen, ruta }) => {
    return (
        <>
            <div class="max-w-sm  md:h-80 bg-light-accent rounded-lg shadow  dark:bg-dark-accent dark:border-dark-accent p-3 ">
                    <img class="rounded-t-lg mx-auto my-auto " src={imagen} alt={titulo} />
                    <div class="sm:p-4">
                        <h5 class="mb-2 sm:text-2xl font-bold tracking-tight text-txt-light dark:text-white  text-center">{titulo}</h5>
                        <p class="font-normal text-txt-light  text-center ">{descripcion}</p>
                    </div>
            </div>
        </>
    )
}






