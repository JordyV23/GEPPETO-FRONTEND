import React, { createContext, useState } from "react";

const MessageContext = createContext();

class Message {
  constructor(owner, message) {
    this.owner = owner;
    this.message = message;
  }
}

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    new Message("GEPPETTO", "HOLA MUNDO! Soy GEPPETTO, una IA creada para el curso de metodos numéricos en la UTN sede Guanacaste, y estoy aqui para ayudarte con tus problemas matemáticos 👀"),
  ]);

  const [loading,setLoading] = useState(false);

  const addMessage = (owner, message) => {
    const newMessage = new Message(owner, message);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  /**
   * Funcion para cambiar el estado de carga en el ChatProvider
   */
  const changeLoading = (value) => {
    setLoading(!value);
  }

  const isLoading = () => {
    return loading;
  }

  const value = {
    messages,
    addMessage,
    isLoading,
    changeLoading
  };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

export { ChatProvider, MessageContext };
