import React from "react";
import { Link } from "react-router-dom";




export const Concepto = ({ titulo, concepto, img }) => {
    return (
        <>
            <div  className="p-3">
                <h2 className=" font-semibold sm:text-2xl  dark:text-white mx-auto  mt-6">{titulo}</h2>
                <p className="  text:sm rounded-lg dark:text-white  ">
                    {concepto}
                </p>
                <div>
                    { img && <img className="mx-auto my-6" src={img} alt={titulo} />}
                </div>
            </div>
        </>
    )
}


