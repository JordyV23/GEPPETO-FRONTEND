import React from "react";
import { MessageComponent } from "./MessageComponent";
import { useEffect, useRef, useState } from "react";
import { MessageContext } from "./ChatProvider";
import { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";

export const ChatComponent = () => {
  /**
   * Carga del provider y el contexto
   */
  const { messages, isLoading } = useContext(MessageContext);
  
  /**
   * Carga del tema que se esta utilizando
   */
  const storedTtheme = localStorage.getItem("geppeto-theme");

  /**
   * Encargado de re-renderizar al detectar cambios en los mensajes
   */
  useEffect(() => {}, [messages]);

  return (
    <>
      <div className="flex flex-col h-full overflow-x-auto mb-4" id="chatArea">
        <div className="flex flex-col h-full">
          {messages.map((message, i) => (
            <MessageComponent
              key={i}
              alignment={
                message.owner === "GEPPETTO"
                  ? [
                      "col-start-1 col-end-8",
                      "flex-row items-center",
                      "bg-light-accent dark:bg-dark-accent",
                      "/logo-gpto2.svg",
                      "ml-3",
                      "bg-white",
                      "text-black",
                    ]
                  : [
                      "col-start-6 col-end-13",
                      "items-center justify-start flex-row-reverse",
                      "bg-indigo-400",
                      "/user.svg",
                      "mr-3",
                      "bg-light-accent/50 dark:bg-dark-accent",
                      "text-white",
                    ]
              }
              message={message.message}
            />
          ))}
        </div>

        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color={
            storedTtheme === null || storedTtheme === "light"
              ? "#D33232"
              : "#18122B"
          }
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={isLoading()}
        />
      </div>
    </>
  );
};
