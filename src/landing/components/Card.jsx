import React from "react";
import { Link } from "react-router-dom";



export const CardLanding = ({titulo,descripcion,imagen, ruta}) => {
    return (
        <>
            <div class="max-w-sm bg-light-accent-dark rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3 ">
            <Link to={ruta} class="block max-w-sm p-6  hover:bg-light-accent ">

                    <img class="rounded-t-lg mx-auto my-auto " src={imagen} alt={titulo} />
                <div class="p-5">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-txt-light dark:text-white  text-center">{titulo}</h5>
                 
                    <p class="mb-3 font-normal text-txt-light  text-center ">{descripcion}</p>

                </div>
                </Link>
            </div>
        </>
    )
}