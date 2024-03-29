import React from "react";
import "./Highlights.css";
import Button from "./Utilities/Button";
import liquid15 from "./Images/liquid15.png";
import sec1Img from "../Home/Images/iPhone 14 place holder-1.png";
import sec5Img from "../Home/Images/iPhone 13-1.png";
import sec2Img from "../Home/Images/iPhone 13-2.png";
import sec3Img from "../Home/Images/iPhone 13-3.png";
import sec4Img from "../Home/Images/iPhone 13-4.png";
import Highlight from "./Utilities/Highlight";
import { Link } from "react-router-dom";

export default function Highlights() {
  // const row = {
  //   flexDirection: 'row'

  // }
  // const rowReverse = {
  //   flexDirection: 'row-reverse'
  // }

  const D9E1F3 = {
    backgroundColor: "#D9E1F3",
  };
  const CFE5EE = {
    backgroundColor: "#CFE5EE",
  };
  const E0F0E6 = {
    backgroundColor: "#E0F0E6",
  };
  const F5EFE8 = {
    backgroundColor: "#F5EFE8",
  };

  return (
    <>
      <div className="features">
        <div className="feature__1">
          <div className="feature__1-content">
            <div className="feature__1-head">
              <p>Loan app like you've never seen before</p>
            </div>
            <div className="feature__1-body">
              <p>
                Credbevy aims to be your one-stop shop for all matters relating
                to loans. Loan offers, credit scores, approval chances, and
                more.
              </p>
            </div>
            <Link to="/waitlist" style={{ textDecoration: "none" }}>
              <Button
                className="highlight-button__container   mobile__highlightbutton-container "
                label={"Get Started"}
              />
            </Link>
          </div>
          <img
            src={liquid15}
            alt=""
            className="feature__1-liquidImage  feature-liquidImage"
          ></img>
          <img className="feature__1-Image" alt="seci-img" src={sec1Img}></img>
        </div>
        <Highlight
          className={"highlight__container-row mobile__highlight-container "}
          frameColor={D9E1F3}
          // highlightStyle={row}
          image={sec2Img}
          title={"Multiple loan offers"}
          body={
            "You may compare the loan estimates you receive from several lenders to see which one is giving you the best deal"
          }
        />
        <Highlight
          frameColor={CFE5EE}
          className={
            "highlight__container-rowReverse mobile__highlight-container "
          }
          // highlightStyle={rowReverse}
          image={sec5Img}
          title={"Bevy Score"}
          body={
            "Credbevy allows you to view your credit ratings without charge and provides advice on how to improve them."
          }
        />
        <Highlight
          frameColor={E0F0E6}
          className={"highlight__container-row mobile__highlight-container "}
          // highlightStyle={row}
          image={sec3Img}
          title={"Instant Transfers"}
          body={
            "Credbevy enables you to send immediate transfers to any accepted financial institution of your choosing."
          }
        />
        <Highlight
          frameColor={F5EFE8}
          className={
            "highlight__container-rowReverse mobile__highlight-container "
          }
          // highlightStyle={rowReverse}
          image={sec4Img}
          title={"Easy Repayment"}
          body={
            "With Credbevy, you have a number of easy loan repayment choices at your disposal."
          }
        />
      </div>

      <div className="highlight__video">
        <div className="highlight__video-content">
          <div className="highlight__video-title">
            <p>See how it works in less than a minute</p>
          </div>
          <div className="highlight__video-button">
            <i class="uil uil-play-circle"></i>
          </div>
        </div>
      </div>
    </>
  );
}
