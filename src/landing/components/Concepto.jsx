import React from "react";
import { YouTubeVideo } from "./YouTubeVideo";



export const Concepto = ({ conceptos }) => {
    return (
        <>
            {conceptos.map(({ concepto, titulo, img,videoId, id }, i) => (
                <div className="mt-3 mx-3" key={i} id={id}>
                    <h2 className=" font-semibold sm:text-2xl  dark:text-white mx-auto  mt-6">{titulo}</h2>
                    <p className="  text:sm rounded-lg dark:text-white  ">
                        {concepto}
                    </p>
                    <div >
                        {img && <img className="mx-auto p-6" src={img} alt={titulo} />}
                    </div>
                    <div >
                        {videoId && <YouTubeVideo videoId={videoId} />}
                    </div>
                </div>
            ))}


        </>
    )
}


