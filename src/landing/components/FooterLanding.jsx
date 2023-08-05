import React from "react";

import { Footer } from "flowbite-react";

export const FooterLanding = () => {
  return (
    <>
      <Footer container className="bg-light-accent-dark mt-4 text-white">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between text-white">
            <Footer.Brand
              alt="Flowbite Logo"
              href="https://flowbite.com"
              name="UTN"
              src="/logo-utn.svg"
            />
            <Footer.LinkGroup>
              <Footer.Link className="text-white" href="#">About</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright className="text-white" by="UTN-ITI-SG-G1" href="https://iti.utn.ac.cr/" year={2023} />
        </div>
      </Footer>
    </>
  );
};
