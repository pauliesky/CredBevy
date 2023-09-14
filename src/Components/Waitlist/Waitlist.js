import React from "react";
import WaitlistLogo from "../Home/Images/waitlist logo1.png";
import "./Waitlist.css";
import waitlistImage_1 from "../Home/Images/waitlist-image-1.png";
import waitlistImage_2 from "../Home/Images/waitlist-image-2.png";
import waitlistImage_3 from "../Home/Images/waitlist-image-3.png";
import waitlistImage_4 from "../Home/Images/waitlist-image-4.png";
import waitlistImage_5 from "../Home/Images/waitlist-image-5.png";

const Waitlist = () => {
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

      <section className="waitlist__field">
        <input placeholder="Email Adress" />
        <button>Join Wait list</button>
      </section>

      <section className="waitlist__images">
        <img alt="waitlistImage_1" src={waitlistImage_1} />
        <img alt="waitlistImage_2" src={waitlistImage_2} />
        <img alt="waitlistImage_3" src={waitlistImage_3} />
        <img alt="waitlistImage_4" src={waitlistImage_4} />
        <img alt="waitlistImage_5" src={waitlistImage_5} />
      </section>
    </>
  );
};

export default Waitlist;
