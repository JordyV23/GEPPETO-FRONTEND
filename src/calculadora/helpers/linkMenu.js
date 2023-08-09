import React from 'react';
import {
  CalculatorIcon,
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";

export const linkMenu = [
  {
    id: "linkModule1",
    link: "/geppetto/convert",
    icon: React.createElement(CalculatorIcon, { className: "w-6 h-6 text-txt-light transition duration-75 group-hover:text-gray-900" }),
    text: "Conversiones",
  },
  {
    id: "linkModule2",
    link: "/geppetto/solver",
    icon: React.createElement(CpuChipIcon, { className: "w-6 h-6 text-txt-light transition duration-75 group-hover:text-gray-900" }),
    text: "Expresiones Bien Escritas",
  },
  {
    id: "linkModule3",
    link: "/geppetto/problemsolver",
    icon: React.createElement(ChatBubbleLeftRightIcon, { className: "w-6 h-6 text-txt-light transition duration-75 group-hover:text-gray-900" }),
    text: "Solv-IA",
  },
];




