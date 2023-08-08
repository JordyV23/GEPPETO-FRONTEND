import React from "react";


export const Jumbotron = ({ img, text, titulo }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-12  ">
                <div className="col-span-2 p-4 md:ml-14 ">
                    <h1 className="font-bold sm:text-5xl  text-2xl dark:text-white">{titulo}</h1>
                    <p className="p-2  text:sm rounded-lg dark:text-white mt-6 text-justify">
                        {text}
                    </p>
                </div>
                <div className="col-span-1 hidden sm:flex  p-4 rotate-12 md:mr-8 w-1/2	mx-auto my-auto  md:w-auto ">
                    <img src={img} />
                </div>
            </div>
        </>
    )
}