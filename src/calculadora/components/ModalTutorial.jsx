import React from "react";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useTour } from "@reactour/tour";

export const ModalTutorial = ({ info, booleanState, btnInstruction }) => {
  const storedValue = localStorage.getItem("showGeppetoInstruccions1");
  const [openModal, setOpenModal] = useState(
    storedValue!='false' ? undefined : "default"
  );

  /**
   * Hook para controlar el modal
   */
  const props = { openModal, setOpenModal };

  /**
   * Hook para tour
   */
  const { setIsOpen } = useTour();

  /**
   * Funcion que cierra el modal e inicia el recorrido guiado
   */
  const startTutorial = () => {
    props.setOpenModal(undefined);
    localStorage.setItem("showGeppetoInstruccions1", booleanState);
    setIsOpen(true);
  };

  /**
   * Funcion que cierra el modal y no vuelve a mostrar el recorrido guiado
   */
  const cancelTutorial = () => {
    localStorage.setItem("showGeppetoInstruccions1", true);
    props.setOpenModal(undefined);
  };

  return (
    <Modal
      className="animate__animated animate__fadeIn"
      show={props.openModal === "default"}
      onClose={() => props.setOpenModal(undefined)}
    >
      <Modal.Header className="dark:bg-dark-accent">Geppeto dice:</Modal.Header>
      <Modal.Body className="dark:bg-dark-accent">
        {info.map((message, i) => (
          <p key={i}>{message}</p>
        ))}
      </Modal.Body>
      <Modal.Footer className="dark:bg-dark-accent">
        <Button
          className="text-white bg-light-accent hover:bg-light-accent-2 dark:bg-dark-accent dark:hover:bg-dark-accent hvr-grow  "
          color="gray"
          onClick={cancelTutorial}
        >
          Rechazar
        </Button>

        <Button
          className="text-white bg-light-accent hover:bg-light-accent-2 dark:bg-dark-accent dark:hover:bg-dark-accent hvr-grow  "
          color="gray"
          onClick={startTutorial}
        >
          {btnInstruction}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
