import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logoImg from "../Home/Images/Credbevy Logo.svg";
import { Link } from "react-router-dom";
import Features from "./Features";
import Partners from "./Partners";
import Company from "./Company";
import Button from "./Utilities/Button";
import { UilAlignRight } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
// import { device } from './Device';
// import styled from 'styled-components'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DropDown from './DropDown';

function Navbar() {
  // const ButtonResize = styled(Button)`
  //     @media ${device.mobile}{
  // width: 340px;
  // background-color:red;
  //   }
  //`
  const [showMenu, setShowMenu] = useState(false);
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(false);
  const [mobile, setMobile] = useState(false);

  // const [responsiveWidth, setResponsiveWidth] = useState(false)

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
        {/* <div className='img-div'  >   <img className='navbar__image' src={logoImg} alt='logo-img'></img>    </div> */}
        <div className="nav__components">
          <Link to="/">
            <img className="navbar__image" src={logoImg} alt="logo-img"></img>
          </Link>
          <ul
            className={mobile ? "null" : "nav-links"}
            // className='nav-links'
            onClick={() => setMobile(false)}
          >
            <div>
              <div className="nav-link">
                <div>
                  <li>Products</li>
                </div>
                <div className="">
                  <i className="bx bx-chevron-down "></i>
                </div>
              </div>
            </div>
            <div>
              <div className="nav-link">
                <div>
                  <li
                    ref={showMenuRef}
                    onClick={() => setShowMenu(!showMenu)}
                    onMouseEnter={mouseHandlerFeatures}
                  >
                    Features
                  </li>
                </div>
                <div>
                  <i class="bx bx-chevron-down"></i>
                </div>
              </div>
            </div>
            <div>
              <div className="nav-link">
                <div>
                  <li
                    ref={showRef}
                    onClick={() => setShow(!show)}
                    onMouseEnter={mouseHandlerPartners}
                  >
                    Partners
                  </li>
                </div>
                <div>
                  <i class="bx bx-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className="nav__company">
              <div className="nav-link">
                <div>
                  <li
                    ref={displayRef}
                    onClick={() => setDisplay(!display)}
                    onMouseEnter={mouseHandlerCompany}
                  >
                    Company
                  </li>
                </div>
                <div>
                  <i class="bx bx-chevron-down"></i>
                </div>
              </div>
            </div>
            <div className="nav__Button">
              <Link to='/waitlist' >     
              <Button
                className="mobile__button-container button__container"
                buttonStyle={sizeStyle}
                label={"Get Started"}
              />
              </Link>
             
            </div>
          </ul>
        </div>
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
