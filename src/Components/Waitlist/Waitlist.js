import React from "react";
import WaitlistLogo from "../Home/Images/waitlist logo1.png";
import "./Waitlist.css";
import waitlistImage_1 from "../Home/Images/waitlist-image-1.png";
import waitlistImage_2 from "../Home/Images/waitlist-image-2.png";
import waitlistImage_3 from "../Home/Images/waitlist-image-3.png";
import waitlistImage_4 from "../Home/Images/waitlist-image-4.png";
import waitlistImage_5 from "../Home/Images/waitlist-image-5.png";
import { useState } from "react";
import WaitlistModal from "./WaitlistModal";
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";
import { PropagateLoader } from "react-spinners";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const Waitlist = (e) => {
  // const Timestamp = new Date();

  const [openModal, setOpenModal] = useState(false);
  const [openConfetti, setOpenConfetti] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [timeStamp, setTimeStamp] = useState();
  const [loading, setLoading] = useState(false);

  const { width, height } = useWindowSize();

  const modalHandler = () => {
    // setOpenModal(true);
    // setLoading(true);
    // console.log(event.timeStamp);
    // console.log(timestamp);
  };

  const handleChange = (e) => {
    setEmailValue(e.target.value);
    const date = new Date().toLocaleDateString("en-EN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    setTimeStamp(date);
  };
  // console.log(e.target);
  const override = {
    display: "block",
    margin: "auto",
    position: "relative",
    left: "0px",
    top: "0px",
  };

  console.log(timeStamp);

  function Submit(e) {
    const formEle = document.querySelector(".waitlist__form");
    e.preventDefault();
    console.log("Submitted");
    setEmailValue("");
    setLoading(true);
    // console.log(timestamp());
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxKLDWNSTlm_oLaojDFZktPK4tWqvwlqCADoLQK8kGPJsA0rYAExyhekJPtU97l0vguJQ/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        setOpenModal(true);
        setLoading(false);
        setOpenConfetti(true);
      });
  }

  return (
    <>
      <section className="waitlist">
        <header className="waitlist__header">
          <p className="waitlist__title">
            <span>Jo</span>in our waitlist to get early access
          </p>
          <img
            className="waitlist-logo"
            alt="wait-list-logo"
            src={WaitlistLogo}
          />
        </header>

        <p className="waitlist__paragraph">
          Loan marketplace where all your loan related needs are adequately and
          properly addressed
        </p>
      </section>

      <form
        //  ref={form}
        // onSubmit={sendEmail}
        className="waitlist__form"
        onSubmit={(e) => Submit(e)}
      >
        <input
          required
          value={emailValue}
          onChange={handleChange}
          type="email"
          name="Email"
          placeholder="Email Address"
        />
        <input
          className="time-stamp"
          onChange={handleChange}
          value={timeStamp}
          name="Timestamp"
          type="Timestamp"
          hidden
        />
        <button type="submit" value="Submit" onClick={modalHandler}>
          Join Wait list
        </button>
        {loading && (
          <div className="loader__modal">
            <PropagateLoader cssOverride={override} color="#156064" />
          </div>
        )}
      </form>

      <section className="waitlist__images">
        <img alt="waitlistImage_1" src={waitlistImage_1} />
        <img alt="waitlistImage_2" src={waitlistImage_2} />
        <img alt="waitlistImage_3" src={waitlistImage_3} />
        <img alt="waitlistImage_4" src={waitlistImage_4} />
        <img alt="waitlistImage_5" src={waitlistImage_5} />
      </section>

      {openConfetti && (
        <Confetti
          recycle={false}
          // run={true}
          // tweenDuration={500}
          width={width}
          height={height}
        />
      )}

      {openModal && <WaitlistModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Waitlist;
