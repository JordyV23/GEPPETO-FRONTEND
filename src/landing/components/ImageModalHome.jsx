import { useState } from "react";
import { Modal } from "flowbite-react";
import { YouTubeVideo } from "./YouTubeVideo.jsx";

export const ImageModalHome = ({ content }) => {
  const [openModal, setOpenModal] = useState("");
  const [flag, setFlag] = useState(1);
  const props = { openModal, setOpenModal };

  const onClickEvent = () => {
    props.setOpenModal("default");
    setFlag(flag + 1);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => onClickEvent()}
        className=" bg-main-light hover:bg-light-accent-2 focus:ring-2 focus:bg-light-accent-dark font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2 dark:bg-main-dark dark:hover:bg-blue-400 focus:outline-none dark:focus:ring-blue-800"
      >
        <i className="fa-solid fa-eye text-light-accent dark:text-dark-accent"></i>
      </button>

      <Modal
        dismissible
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}
      >
        <Modal.Header className="dark:bg-dark-accent p-3"></Modal.Header>
        <Modal.Body className="p-3 transition-transform">
          <div className="transition-opacity duration-500 opacity-100 hover:opacity-90">
            {/* Apply the transition-opacity class */}
            {content.img && <img className="p-0 mx-auto" src={content.img} />}
          </div>
          <div className="transition-opacity duration-500 opacity-100 hover:opacity-90">
            {/* Apply the transition-opacity class */}
            {content.videoId && <YouTubeVideo videoId={content.videoId} />}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
