"use client";

import { useContext } from "react";
import { linkMenu } from "../helpers";
import { LinkComponent } from "./LinkComponent";
import { LoaderContext } from "./LoaderProvider";

export const SidebarGPTO = () => {
  const { isLoading } = useContext(LoaderContext);

  return (
    <>
      <aside
        id="logo-sidebar"
        className={
          isLoading
            ? "invisible"
            : "animate__animated animate__fadeIn fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-light-accent sm:translate-x-0  bg-light-accent dark:bg-dark-accent dark:border-dark-accent"
        }
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-light-accent dark:bg-dark-accent">
          <ul className="space-y-2 font-medium">
            {linkMenu.map(({ id, link, icon, text }, i) => (
              <li key={id}>
                <LinkComponent id={id} link={link} icon={icon} text={text} />
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
