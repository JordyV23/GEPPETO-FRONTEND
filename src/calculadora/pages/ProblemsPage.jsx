import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, Textarea } from "flowbite-react";
import {
  LoaderContext,
  ImageModal,
  ChatComponent,
  InputMessageComponent,
} from "../components";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "hover.css";
import React, { useContext } from "react";
import { addStyles, EditableMathField } from "react-mathquill";

addStyles();

export const ProblemsPage = () => {

  return (
    <>
      <div id="ProblemsPage" className="p-4 border-2 items-center w-full h-full justify-center border-white border-dashed rounded-lg dark:border-white mt-20">
        <div className="flex items-center justify-center h-68 mb-4 rounded ">
          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4">
              <ChatComponent />
              <InputMessageComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
