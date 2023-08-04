import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import closeIcon from "../images/icon-close.svg";
import rulesImage from "../images/image-rules.svg";

import "./Modal.css";

const Modal = ({ setIsModalOpen }) => {
  useEffect(() => {
    const closeOnEscapeKey = (e) =>
      e.key === "Escape" ? setIsModalOpen(false) : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [setIsModalOpen]);

  return createPortal(
    <>
      <div
        className="modal-backdrop"
        onClick={() => setIsModalOpen(false)}
      ></div>
      <section className="rules-modal">
        <div className="rules-header">
          <h2>Rules</h2>
          <button onClick={() => setIsModalOpen(false)}>
            <img src={closeIcon} alt="close modal" />
          </button>
        </div>
        <div className="rules-content">
          <img src={rulesImage} alt="rules" />
        </div>
      </section>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
