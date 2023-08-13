"use client";

import { useContext } from "react";
import { ThemeSwitch } from "../../components";
import { LoaderContext } from "./LoaderProvider";

export const NavbarGPTO = () => {

  const { isLoading } = useContext(LoaderContext);

  return (
    <>
      <nav className={ isLoading ? "invisible fixed top-0 z-50 w-full bg-light-accent border-b border-light-accent dark:bg-dark-accent dark:border-dark-accent" : "animate__animated animate__fadeIn fixed top-0 z-50 w-full bg-light-accent border-b border-light-accent dark:bg-dark-accent dark:border-dark-accent" }>
        <div className="animate__animated animate__fadeIn px-3 py-3 lg:px-5 lg:pl-3">
          <div className="animate__animated animate__fadeIn  flex items-center justify-between">
            <div className="animate__animated animate__fadeIn  flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="animate__animated animate__fadeIn  inline-flex items-center p-2 text-sm text-white rounded-lg sm:hidden hover:bg-light-accent-2 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-main-dark "
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a
                href="/gpto/home"
                className="flex ml-2 md:mr-24 animate__animated animate__fadeIn "
              >
                <img src="/img/logos/svg/logo-gpto2.svg" className="h-8 mr-3" alt="GPPETTO Logo" />
                <span className="animate__animated animate__fadeIn  self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                  GEPPETTO
                </span>
              </a>
            </div>

            <div className="animate__animated animate__fadeIn flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <ThemeSwitch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
