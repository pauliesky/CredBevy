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

const Waitlist = () => {
  const [openModal, setOpenModal] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [loading, setLoading] = useState(false);

  const modalHandler = () => {
    // setOpenModal(true);
    // setLoading(true);
  };

  const override = {
    display: "block",
    margin: "auto",
    position: "relative",
    left: "0px",
    top: "0px",
  };

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setEmailValue("");
  //   setLoading(true);

  //   emailjs
  //     .sendForm(
  //       "service_oozd2gs",
  //       "template_j5sn2gj",
  //       form.current,
  //       "2vBs31xnbRlbyw9nS"
  //     )
  //     .then(
  //       (result) => {
  //         setOpenModal(true);
  //         setLoading(false);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  function Submit(e) {
    const formEle = document.querySelector(".waitlist__form");
    e.preventDefault();
    console.log("Submitted");
    setEmailValue("");
    setLoading(true);
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwQHIX981HHAQN8MdYwffK0snwhoAueEb3-OETDXDt-MCYGSTJQEhFRGW5RQv3_U9teCw/exec",
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
      });
  }

  return (
    <>
      <section className="waitlist">
        <header className="waitlist__header">
          <img alt="wait-list-logo" src={WaitlistLogo} />
          <p className="waitlist__title">
            <span>Jo</span>in our waitlist to get early access
          </p>
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
          onChange={(e) => setEmailValue(e.target.value)}
          type="email"
          // name="user_email"
          name="Email"
          placeholder="Email Address"
        />
        <button
          type="submit"
          value="Submit"
          // onClick={modalHandler}
        >
          Join Wait list
        </button>
        {loading && (
          <div className="loader__modal">
            <PropagateLoader cssOverride={override} color="#7E1F86" />
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
      {openModal && <WaitlistModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Waitlist;
