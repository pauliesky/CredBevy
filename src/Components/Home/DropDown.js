import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import logoImg from "../Home/Images/Credbevy Logo.svg";
// import { device } from './Device';
import { DropDownData } from "./DropDownData";
import DropDownSubMenu from "./DropDownSubMenu";
import Button from "./Utilities/Button";
// import { Dropdown } from 'rsuite';

const Nav = styled.div`
  background-color: var(--pink);
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 2.5rem;
  width: 100%;
  gap: 16rem;
`;

const NavIcon = styled(Link)`
  font-size: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavImage = styled(Link)`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavIcon2 = styled(Link)`
  font-size: 1rem;
  height: 2rem;

  display: flex;
  flex-direction: center;
  align-items: center;
`;

const NavLogo = styled(Link)`
  width: 2rem;
  height: 2rem;
`;

const NavItems = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16rem;
  margin-bottom: 4rem;
`;

const DropDownNav = styled.nav`
  background: white;
  padding-top: 1rem;
  color: black;
  width: 377px;
  height: 417px;
  justify-content: center;
  position: absolute;
  // left:0px;
  top: ${({ dropDown }) => (dropDown ? "-1.5rem" : "-1000%")};
  transition: 1ms;
  z-index: 100;
  // box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;
const NavButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  // background:white;
`;
const DropDownWrap = styled.div`
  // width:100%;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-radius: 8px;
  // position:absolute;
  z-index: 10;
`;
const OverLay = styled.div`
  background: var(--purple);
  opacity: 0.05;
  position: absolute;
  height: 80vh;
  top: -40px;
  width: 100%;
  z-index: 10;
`;
function DropDown() {
  const sizeStyle = {
    width: "345px",
  };

  const [dropDown, setDropDown] = useState(false);
  const showDropDown = () => setDropDown(!dropDown);

  const [overlay, setOverLay] = useState(false);
  const showOverLay = () => setOverLay(!overlay);

  const showMenuReff = useRef(null);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        showMenuReff.current !== null &&
        !showMenuReff.current.contains(e.target)
      ) {
        setDropDown(!dropDown);
      }
    };
    if (dropDown) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [dropDown]);

  return (
    <>
      <Nav>
        <NavImage to='/'>
<Link to='/' >
<img className="mobile_navbar__image"
    src={logoImg}
    alt="logo-img"></img>
</Link>
         
        </NavImage>
        <NavIcon
          onClick={() => {
            showDropDown();
            showOverLay();
          }}
          to="#"
        >
          {dropDown ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
        </NavIcon>
        {overlay ? <OverLay /> : null}
        <DropDownNav dropDown={dropDown}>
          <NavItems>
            <NavLogo>
              <Link to='/' >    
              <img
                className="mobile_navbar__image"
                src={logoImg}
                alt="logo-img"
              ></img>
              </Link>
              
            </NavLogo>
            <NavIcon2
              onClick={() => {
                showDropDown();
                showOverLay();
              }}
              to="#"
            >
              {dropDown ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
            </NavIcon2>
          </NavItems>
          <DropDownWrap>
            {DropDownData.map((item, index) => {
              return <DropDownSubMenu item={item} key={index} />;
            })}
            <NavButton>
              <Button
                className="button__container"
                buttonStyle={sizeStyle}
                label={"Get Started"}
              />
            </NavButton>
          </DropDownWrap>
        </DropDownNav>
      </Nav>
    </>
  );
}

export default DropDown;
