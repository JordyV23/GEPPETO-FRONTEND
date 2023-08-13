import React, { createContext, useState } from "react";

/**
 * Contexto para el provider encargado de trabajar las tareas relacionadas a los mensajes en el modulo 3
 */
const MessageContext = createContext();

/**
 * Clase para gestionar el autor y el contenido de un mensaje
 */
class Message {
  constructor(owner, message) {
    this.owner = owner;
    this.message = message;
  }
}

/**
 * Componente ChatProvider para el manejo de mensajes en el chat.
 * @param {Object} props - Propiedades del componente.
 * @param {ReactNode} props.children - Los elementos secundarios del componente.
 * @returns {JSX.Element} El componente ChatProvider con el contexto de mensajes.
 */
const ChatProvider = ({ children }) => {
  /**
   * Representa un mensaje en el chat.
   * @typedef {Object} Message
   * @property {string} owner - El remitente del mensaje.
   * @property {string} message - El contenido del mensaje.
   */

  /**
   * Estado local para almacenar los mensajes del chat.
   * @type {Message[]}
   */
  const [messages, setMessages] = useState([
    new Message(
      "GEPPETTO",
      "HELLO WORLD! Soy GEPPETTO, una IA 🧠 creada para el curso de metodos numéricos en la UTN🎓 sede Guanacaste, y estoy aqui para ayudarte con tus problemas matemáticos 👀"
    ),
  ]);

  /**
   * Estado local para el indicador de carga.
   * @type {boolean}
   */
  const [loading, setLoading] = useState(false);

  /**
   * Agrega un nuevo mensaje al estado de mensajes.
   * @param {string} owner - El remitente del mensaje.
   * @param {string} message - El contenido del mensaje.
   * @returns {void}
   */
  const addMessage = (owner, message) => {
    const newMessage = new Message(owner, message);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  /**
   * Objeto de valor que contiene funciones y datos relevantes para el contexto del chat.
   * @type {Object}
   * @property {Message[]} messages - Los mensajes almacenados en el chat.
   * @property {Function} addMessage - Función para agregar un nuevo mensaje al chat.
   * @property {Function} loading - Función para verificar el estado de carga del componente.
   * @property {Function} setLoading - Función para cambiar el estado de carga del componente.
   */
  const value = {
    messages,
    addMessage,
    loading,
    setLoading,
  };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

export { ChatProvider, MessageContext };
