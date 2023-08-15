import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useState } from "react";
import { MessageContext } from "../providers";
import { useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { ModalTutorial } from "./ModalTutorial";
import { ImageModal } from "./ImageModal";

/**
 * Componente para ingresar y enviar mensajes en el chat.
 * @returns {JSX.Element} El componente InputMessageComponent para ingresar y enviar mensajes en el chat.
 */
export const InputMessageComponent = () => {
  const { addMessage, setLoading, loading } = useContext(MessageContext);
  const [message, setMessage] = useState("");

  /**
   * Actualiza el estado del mensaje cuando cambia el valor del campo de entrada.
   * @param {Object} event - El evento de cambio del campo de entrada.
   * @returns {void}
   */
  const updateValue = (event) => {
    setMessage(event.target.value);
  };

  const imagenes = [
    "/guides/mod3/1.png",
    "/guides/mod3/2.png",
    "/guides/mod3/3.png",
  ];

  /**
   * Envía el mensaje y obtiene la respuesta de la IA.
   * @returns {Promise<void>} Una promesa que se resuelve después de enviar el mensaje y obtener la respuesta de la IA.
   */
  const onSendMessage = async () => {
    //Valida que el mensaje no este vacio
    if (message !== "") {
      //Cambia el estado de carga del provider de mensajes
      setLoading(true);

      //Agrega el mensaje del usuario al arreglo de mensajes en el provider
      addMessage("user", message);

      //Vacia el input de mensajes
      setMessage("");

      try {
        // Realiza la consulta a la API
        const { data: datos } = await axios.post(
          `${import.meta.env.VITE_APIURL}problemasAI/`,
          {
            prompt: message,
          }
        );

        // Verifica el status de la respuesta de la API
        if (datos.Status === "true") {
          if (datos.Respuesta === "") {
            addMessage("GEPPETTO", "Lo siento, desconozco la respuesta🙃🫤");
          } else {
            addMessage("GEPPETTO", datos.Respuesta);
          }
        } else {
          //Si el estado es falso, muestra una notificacion de error
          toast.warning(
            "Uy, a nuestra IA se le olvidó cómo resolver este problema 🙈"
          );
        }
      } catch (error) {
        //Si ocurre un error, imprime por consola el error y muestra una notificacion
        console.error("Error al enviar el mensaje:", error);
        toast.warning(
          "Lo siento, algo salió mal, ¿por qué no lo intentas de nuevo? 🙁"
        );
      }
      setLoading(false);
    } else {
      //Si esta vacio, notifica el error
      toast.warning(
        "Lo siento, parece que no puedes enviar mensajes vacíos 🤔"
      );
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center md:h-16 rounded-xl w-full px-4">
        <ImageModal imagenes={imagenes} />
        <div className="flex-grow mb-4 md:mb-0 md:ml-4 md:w-3/5">
          <div className="relative w-full">
            <input
              id="inputMessage"
              type="text"
              disabled={loading}
              value={message}
              onChange={updateValue}
              onKeyDown={(e) => e.key === "Enter" && onSendMessage()}
              className="flex w-full min-w-[100px] md:min-w-0 border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            />
          </div>
        </div>

        <div className="md:ml-4 md:w-2/5">
          <button
            id="sendBtn"
            disabled={loading}
            onClick={onSendMessage}
            className="flex items-center justify-center bg-light-accent hover:bg-light-accent-2 dark:bg-dark-accent dark:hover:bg-dark-accent-dark rounded-xl text-white px-4 py-1 w-full md:w-auto"
          >
            <span>Enviar</span>
            <span className="ml-2">
              <PaperAirplaneIcon className="w-4 h-4 transform -rotate-45 -mt-px" />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
