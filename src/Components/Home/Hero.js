import React from "react";
import "./Hero.css";
import ImgPink from "./Images/Ellipse 1.png";
import ImgPink1 from "./Images/Ellipse 5.png";
import Imggreen from "./Images/Ellipse 4.png";
import ImgBlue from "./Images/Ellipse 3.png";
import DownloadButton from "./Utilities/DownloadButton";
import { UilAppleAlt } from "@iconscout/react-unicons";

export default function Hero() {
  const buttonStyleWhite = {
    backgroundColor: "white",
  };
  const buttonStyleBlack = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <img alt="ellipse 1" className="pink" src={ImgPink}></img>
          <img alt="ellipse 2" className="pink1" src={ImgPink1}></img>
          <img alt="ellipse 3" className="green" src={Imggreen}></img>
          <img alt="ellipse 4" className="blue" src={ImgBlue}></img>
          <div className="hero__title">
            <p className="hero__title-head">
              Redefining Lending with
              <br /> Artificial Intelligence
            </p>

            <div className="hero__title-text">
              <p>
                Harness the power of AI to secure loans tailored to your unique
                financial profile. Experience seamless, efficient, and fair
                lending like never before
              </p>
            </div>
          </div>
        </div>

        <div className="hero__download-button">
          <DownloadButton
            classNameButtonContainer="download__button-container mobile-download__button-container"
            classNameButtonText="download__button-text mobile-download__button-text"
            icon={<i class="uit uit-google-play"></i>}
            label={`Download on ${"PlayStore"}`}
            buttonStyle={buttonStyleWhite}
          />
          <DownloadButton
            classNameButtonContainer="download__button-container mobile-download__button-container"
            classNameButtonText="download__button-text mobile-download__button-text"
            label={"Download on AppStore"}
            buttonStyle={buttonStyleBlack}
            icon={<UilAppleAlt />}
          />
        </div>
      </div>
    </>
  );
}
