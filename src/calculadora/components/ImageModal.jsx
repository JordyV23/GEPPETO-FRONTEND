"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { ImageSlider } from "./ImageSlider";

export const ImageModal = ({ imagenes }) => {
  const [openModal, setOpenModal] = useState("");

  const [flag, setFlag] = useState(1);

  const props = { openModal, setOpenModal };
  
  const onClickEvent = () => {
    props.setOpenModal("default")
    setFlag(flag+1)
  }
  

  return (
    <>
      <button
        type="button"
        className="p-4 focus:outline-0"
        onClick={() => onClickEvent()}
      >
        <InformationCircleIcon className="h-8 w-8 text-info-color hvr-icon hvr-grow" />
      </button>
      <Modal
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header className="dark:bg-dark-accent">Modo de Uso</Modal.Header>
        <Modal.Body className="dark:bg-dark-accent">
          <ImageSlider imagenes={imagenes} flagParam={flag} />
        </Modal.Body>
        <Modal.Footer className="dark:bg-dark-accent">
          <Button
            className="text-white bg-light-accent hover:bg-light-accent-2 dark:bg-dark-accent dark:hover:bg-dark-accent hvr-grow  "
            color="gray"
            onClick={() => props.setOpenModal(undefined)}
          >
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
