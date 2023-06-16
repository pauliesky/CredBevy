import React, { useState, useEffect, useRef } from "react";
// import { IoMdHeartEmpty } from 'react-icons/io'
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropDownLink = styled(Link)`
  display: flex;
  flex-direction: row;
  background: white;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 1.1rem;
  gap: 15rem;
  // width: 63px;
  height: 21px;
  font-family: "Satoshi";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: var(--gray);
  &:hover {
    cursor: pointer;
  }
`;

const SideBarLabel = styled.span`
  // height: 19px;
  background: white;

  font-family: "Satoshi";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 117%;
  /* or 16px */
  /* Grey 1 */
  color: #8a8b9f;
  padding-left: 2rem;
`;

const DropdownTitle = styled.div`
  width: 3.5rem;
  font-family: "Satoshi";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: var(--gray);
  background: white;
`;

const DropdownLink = styled(Link)`
  background: white;
  // height:2rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin-bottom: 1rem;
  // border:none;
  border-radius: 0px 0px 8px 8px;
`;
const SideBarLabel2 = styled.span`
  // height: 19px;
  background: white;

  font-family: "Satoshi";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 21px */
  // margin-top:1rem;
  /* Primary */
  color: var(--purple);
  padding: 0rem 0rem 0rem 2rem;
`;

function DropDownSubMenu({ item }) {
  const [subnav, setSubNav] = useState(false);
  const showSubnav = () => setSubNav(!subnav);

  const showMenuRef = useRef(null);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        showMenuRef.current !== null &&
        !showMenuRef.current.contains(e.target)
      ) {
        setSubNav(!subnav);
      }
    };
    if (subnav) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [subnav]);

  return (
    <>
      <DropDownLink
        to={item.path}
        ref={showMenuRef}
        onClick={item.subNav && showSubnav}
      >
        <div>
          <DropdownTitle> {item.title} </DropdownTitle>
        </div>

        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </DropDownLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SideBarLabel>{item.title}</SideBarLabel>
              <SideBarLabel2>{item.topic}</SideBarLabel2>
            </DropdownLink>
          );
        })}
    </>
  );
}

export default DropDownSubMenu;
