import React from "react";

import { iconsInfo, integrantes } from "../helpers";
import { FooterIcon } from "./FooterIcon";

export const FooterLanding = () => {
  return (
    <>
      <footer className="py-6 bg-light-accent dark:bg-dark-accent text-gray-50">
        <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
          <div className="grid grid-cols-12">
            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex justify-center space-x-3 md:justify-start"
              >
                <div className="flex items-center justify-center w-28 h-28 rounded-full">
                  {/* className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900" */}
                  <img
                    src="/img/logos/svg/logo-utn.svg"
                    className="flex-shrink-0 w-max h-max dark:text-gray-900"
                  />
                </div>
              </a>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Dev Team</p>
              <ul>
                {integrantes.map((estudiante, i) => {
                  if (i < 4) {
                    return (
                      <li key={i}>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="hover:dark:text-purple-400"
                        >
                          {estudiante.nombre}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>

            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Doc Team</p>
              <ul>
                {integrantes.map((estudiante, i) => {
                  if (i > 3) {
                    return (
                      <li key={i}>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="hover:dark:text-purple-400"
                        >
                          {estudiante.nombre}
                        </a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </div>
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©2023 Derechos Reservados</span>
              <a rel="noopener noreferrer" href="#">
                <span>Grupo 1</span>
              </a>
              <a rel="noopener noreferrer" href="#">
                <span>Metodos Numéricos</span>
              </a>
            </div>
            <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
              {/* Itera sobre archivo con informacion de iconos */}
              {iconsInfo.map(({ iconName, link, title }) => (
                <FooterIcon
                  key={iconName}
                  iconName={iconName}
                  link={link}
                  title={title}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
