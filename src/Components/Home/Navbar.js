import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logoImg from "../Home/Images/Credbevy Logo.svg";
import { Link } from "react-router-dom";
// import Features from "./Features";
// import Partners from "./Partners";
// import Company from "./Company";
import Button from "./Utilities/Button";
import { UilAlignRight } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { lazy } from "react";

const Features = lazy(() => import("./Features"))
const Partners = lazy(() => import("./Partners"))
const Company = lazy(() => import("./Company"))



function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);
  const [mobile, setMobile] = useState(false);

  const showMenuRef = useRef(null);
  const showRef = useRef(null);
  const displayRef = useRef(null);

  function mouseHandlerCompany() {
    setDisplay(true);
    setShow(false);
    setShowMenu(false);
  }
  function mouseHandlerFeatures() {
    setDisplay(false);
    setShow(false);
    setShowMenu(true);
  }
  function mouseHandlerPartners() {
    setDisplay(false);
    setShow(true);
    setShowMenu(false);
  }

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        showMenuRef.current !== null &&
        !showMenuRef.current.contains(e.target)
      ) {
        setShowMenu(!showMenu);
      }
    };
    if (showMenu) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [showMenu]);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (showRef.current !== null && !showRef.current.contains(e.target)) {
        setShow(!show);
      }
    };
    if (show) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [show]);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        displayRef.current !== null &&
        !displayRef.current.contains(e.target)
      ) {
        setDisplay(!display);
      }
    };
    if (display) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [display]);

  const sizeStyle = {
    "@media (max-width: 778px)": {
      width: "545px",
      background: "blue",
      color: "red",
    },
  };

  return (
    <>
      <nav className={mobile ? "nav__links-mobile" : "navbar"}>
        <ul
          className={mobile ? "null" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/">
            <img className="navbar__image" src={logoImg} alt="logo-img"></img>
          </Link>
          <div className="nav-link">
            <div className="nav-link_item">
              <li>Products</li>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5307 6.24756L9.18404 10.5942C8.6707 11.1076 7.8307 11.1076 7.31737 10.5942L2.9707 6.24756"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="nav-link_item">
              <li
                ref={showMenuRef}
                onClick={() => setShowMenu(!showMenu)}
                onMouseEnter={mouseHandlerFeatures}
              >
                Features
              </li>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5307 6.24756L9.18404 10.5942C8.6707 11.1076 7.8307 11.1076 7.31737 10.5942L2.9707 6.24756"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="nav-link_item">
              <li
                ref={showRef}
                onClick={() => setShow(!show)}
                onMouseEnter={mouseHandlerPartners}
              >
                Partners
              </li>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5307 6.24756L9.18404 10.5942C8.6707 11.1076 7.8307 11.1076 7.31737 10.5942L2.9707 6.24756"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="nav-link_item">
              <li
                ref={displayRef}
                onClick={() => setDisplay(!display)}
                onMouseEnter={mouseHandlerCompany}
              >
                Company
              </li>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5307 6.24756L9.18404 10.5942C8.6707 11.1076 7.8307 11.1076 7.31737 10.5942L2.9707 6.24756"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="nav__Button">
            <Link style={{ textDecoration: "none" }} to="/waitlist">
              <Button
                className="mobile__button-container button__container"
                buttonStyle={sizeStyle}
                label={"Get Started"}
              />
            </Link>
          </div>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <UilTimes className="times" /> : <UilAlignRight />}
        </button>
      </nav>

      {showMenu && <Features />}
      {show && <Partners />}
      {display && <Company />}
    </>
  );
}

export default Navbar;
