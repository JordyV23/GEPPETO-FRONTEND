import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useState } from "react";
import { MessageContext } from "./ChatProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const InputMessageComponent = () => {
  const { addMessage,changeLoading } = useContext(MessageContext);
  const [message, setMessage] = useState("");

  const updateValue = (event) => {
    setMessage(event.target.value);
  };

  const onSendMessage = async () => {
    if (message != "") {
      changeLoading(true);
      addMessage("user", message);
      setMessage("");

      const { data: datos } = await axios.post(
        `${import.meta.env.VITE_APIURL}problemasAI/`,
        {
          prompt: message,
        }
      );

      if(datos.Status = "true"){
        addMessage("GEPPETTO", datos.Respuesta);
      }




    } else {
      toast("Lo siento, no puedes enviar un mensaje vacio");
    }

    changeLoading(false);

  };

  return (
    <>
      <div className="flex flex-row items-center h-16 rounded-xl w-full px-4">
        <div className="flex-grow ml-4">
          <div className="relative w-full">
            <input
              type="text"
              value={message}
              onChange={updateValue}
              onKeyDown={(e) => e.key === "Enter" && onSendMessage()}
              className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            />
          </div>
        </div>

        <div className="ml-4">
          <button
            onClick={onSendMessage}
            className="flex items-center justify-center bg-light-accent hover:bg-light-accent-2 dark:bg-dark-accent dark:hover:bg-dark-accent-dark rounded-xl text-white px-4 py-1 flex-shrink-0"
          >
            <span>Send</span>
            <span className="ml-2">
              <PaperAirplaneIcon className="w-4 h-4 transform -rotate-45 -mt-px" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
