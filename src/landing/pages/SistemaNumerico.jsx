import React from "react";
import { NavbarLanding } from "../components";
import { Concepto } from "../components/Concepto";
import { FooterLanding } from "../components/FooterLanding";
import { Jumbotron } from "../components/Jumbotron";
import { List } from "../components/List";
import { YouTubeVideo } from "../components/YouTubeVideo";


export const SistemaNumerico = () => {

    const items = ["Principio de Orden", "Principio de la Base", " Principio Posicional"]

    return (
        <>
            <div className=" bg-main-light dark:bg-main-dark">
                <NavbarLanding />

                <Jumbotron img={"/math.png"} text={"Los sistemas de numeración son la esencia misma de cómo representamos las cantidades numéricas en" +
                    " nuestra vida cotidiana. Aquí encontrarás una guía completa sobre los principios fundamentales de los sistemas numéricos, cómo funcionan y cómo aplicarlos" +
                    " para convertir, calcular y resolver problemas reales. Desde los conceptos básicos hasta ejemplos, te enseñaremos sobre las bases " +
                    "numéricas, las cifras bien escritas, la conversión entre sistemas y la evaluación de expresiones."}
                    titulo={"Sistema de Numeración y sus principios"} />

                <div className="md:mx-14">


                    <Concepto className="" titulo={"¿Qué es un sistema de numeración?"} concepto={"Un sistema de numeración es un conjunto de reglas y principios utilizados para representar correctamente los números," +
                        " para realizar operaciones matemáticas. Existen varios sistemas de numeración utilizados en todo el planeta, pero los más comunes son el sistema " +
                        "decimal, el binario y el hexadecimal, el sistema que usamos diariamente es el decimmal es el que usualmente usamos para representar cantidades en la vida cotidiana."}
                    />
                    <div className="p-2">
                        <h3 class="font-semibold  dark:text-white mx-auto ">Entre estos principios tenemos:</h3>
                        <List items={items} />
                    </div>
                    <img className="mx-auto my-6 max-w-md" src='/public/SistemaNum.png' alt='Sistema de Numeración' />

                    <Concepto className="" titulo={"Principio de Orden"} concepto={"Un sistema de numeración es un conjunto de reglas y principios utilizados para representar correctamente los números," +
                        " para realizar operaciones matemáticas. Existen varios sistemas de numeración utilizados en todo el planeta, pero los más comunes son el sistema " +
                        "decimal, el binario y el hexadecimal, el sistema que usamos diariamente es el decimmal es el que usualmente usamos para representar cantidades en la vida cotidiana."}
                    />
                    <YouTubeVideo videoId={'CmGnVhA-6dc'}/>
                    <Concepto className="" titulo={"Principio de la Base"} concepto={"Un sistema de numeración es un conjunto de reglas y principios utilizados para representar correctamente los números," +
                        " para realizar operaciones matemáticas. Existen varios sistemas de numeración utilizados en todo el planeta, pero los más comunes son el sistema " +
                        "decimal, el binario y el hexadecimal, el sistema que usamos diariamente es el decimmal es el que usualmente usamos para representar cantidades en la vida cotidiana."}
                    />


                    <Concepto className="" titulo={"Principio Posicional"} concepto={"Un sistema de numeración es un conjunto de reglas y principios utilizados para representar correctamente los números," +
                        " para realizar operaciones matemáticas. Existen varios sistemas de numeración utilizados en todo el planeta, pero los más comunes son el sistema " +
                        "decimal, el binario y el hexadecimal, el sistema que usamos diariamente es el decimmal es el que usualmente usamos para representar cantidades en la vida cotidiana."}
                    />

                </div>












                <FooterLanding />

            </div>


        </>
    );
};

