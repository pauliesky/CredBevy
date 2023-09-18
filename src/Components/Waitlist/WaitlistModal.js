import React from "react";
import "./WaitlistModal.css";
import cancelButton from "../Home/Images/cancelbutton.png";
import tick from "../Home/Images/tick-circle.png";
import copyIcon from "../Home/Images/clipboard-text.png";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const WaitlistModal = ({ setOpenModal }) => {
  const [copyText, setCopyText] = useState("");
  const email = "https://www.credbevy.com/waitlist";
  const copyHandler = () => {
    setCopyText(email);
    navigator.clipboard.writeText(copyText);
    toast.success("Copied!!!");
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <section className="Modal">
        <div className="Modal__content">
          <button onClick={closeModal} className="cancel__button">
            <img alt="cancel" src={cancelButton} />
          </button>
          <div className="Modal__main">
            <img className="Modal__tick" alt="tick" src={tick} />
            <p className="Modal__title">Thanks for Joining !!!</p>
            <p className="Modal__paragraph">Help us spread the word around</p>
            <div className="Modal__Box">
              <p className="Modal_Email">{email}</p>
              <button onClick={copyHandler} className="Modal_CopyIcon">
                <img alt="copy" src={copyIcon} />
              </button>
              <ToastContainer
                autoClose={1000}
                hideProgressBar={true}
                position="top-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WaitlistModal;
