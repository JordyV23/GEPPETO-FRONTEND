import { NavbarLanding } from "../components";
import { FooterLanding } from "../components/FooterLanding";
import { CardLanding } from "../components/Card";
import { Jumbotron } from "../components/Jumbotron";
import { AccordionLanding } from "../components/Acordion";

export const Team = () => {
    return (
        <>
            <div className=" bg-main-light dark:bg-main-dark " id="team">
                <NavbarLanding />

                <FooterLanding />
            </div>
        </>
    );
};
