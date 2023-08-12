import React from "react";
import Typewriter from "typewriter-effect";

export const Jumbotron = ({ img, text, titulo }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
        <div className="col-span-2 p-4 ">
          <h1 className="font-bold sm:text-5xl lg:text-6xl  text-2xl dark:text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(titulo)
                  .pauseFor(10000)
                  .start();
              }}

              options={{delay:30}}
            />
          </h1>
          <p className="p-2  text:sm rounded-lg dark:text-white mt-6 text-justify">
            {text}
          </p>
        </div>
        <div className="col-span-1 hidden sm:flex p-4 rotate-12 md:mr-8 w-1/2 lg:max-w-xs	mx-auto my-auto  md:w-auto ">
          <img className="lg:max-w-xs" src={img} />
        </div>
      </div>
    </>
  );
};
