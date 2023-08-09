import React from "react";
import { NavbarLanding } from "../components";
import { Concepto } from "../components/Concepto";
import { FooterLanding } from "../components/FooterLanding";
import { Jumbotron } from "../components/Jumbotron";
import { List } from "../components/List";
import { YouTubeVideo } from "../components/YouTubeVideo"; 
import { Conceptos } from "../helpers";


export const SistemaNumerico = () => {

    const items = ["Principio de Orden", "Principio de la Base", " Principio Posicional"]
    const block1=[Conceptos[0]]
    const block2=[Conceptos[1],Conceptos[2],Conceptos[3]]

    console.log(Conceptos[0])

    return (
        <>
            <div className=" bg-main-light dark:bg-main-dark">
                <NavbarLanding />

              

                <div className="md:mx-14">

                <Jumbotron img={"/math.png"} text={"Los sistemas de numeración son la esencia misma de cómo representamos las cantidades numéricas en" +
                    " nuestra vida cotidiana. Aquí encontrarás una guía completa sobre los principios fundamentales de los sistemas numéricos, cómo funcionan y cómo aplicarlos" +
                    " para convertir, calcular y resolver problemas reales. Desde los conceptos básicos hasta ejemplos, te enseñaremos sobre las bases " +
                    "numéricas, las cifras bien escritas, la conversión entre sistemas y la evaluación de expresiones."}
                    titulo={"Sistema de Numeración y sus principios"} />

                      <Concepto conceptos={[Conceptos[0]]} />
          
                    <div className="p-2">
                        <h3 className="font-semibold  dark:text-white mx-auto ">Entre estos principios tenemos:</h3>
                        <List items={items} />
                    </div>
                    <Concepto conceptos={Conceptos.slice(1,4)} />

                </div>
                
                <FooterLanding />

            </div>


        </>
    );
};

