import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import logoImg from '../Home/Images/Credbevy Logo.svg'
// import { device } from './Device';
import { DropDownData } from './DropDownData'
import DropDownSubMenu from './DropDownSubMenu';


const Nav = styled.div`
    background-color: #fef9fe;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 2.5rem;
  width:100%;
  gap:15rem;
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

const DropDownNav = styled.nav`

background: white;
padding-top:2rem;
color: black; 
width: 300px;
height:300px;
justify-content:center;
position: absolute;
// left:0px;
top: ${({ dropDown }) => (dropDown ? '5rem' : '-1000%')};
transition:1ms;
z-index:10;
// box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
border-radius: 24px;

`

const DropDownWrap = styled.div`
width:100%;

`

function DropDown() {

  const [dropDown, setDropDown] = useState(false)

  const showDropDown = () => setDropDown(!dropDown)


  return (
    <>
      <Nav>
        <NavImage>
          <img className='mobile_navbar__image' src={logoImg} alt='logo-img'></img>
        </NavImage>
        <NavIcon onClick={showDropDown} to='#'>
          {/* <FaIcons.FaBars onClick={showDropDown} /> */}
          {dropDown ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
        </NavIcon>
        <DropDownNav dropDown={dropDown}>

          {/* <NavImage>
            <img className='mobile_navbar__image' src={logoImg} alt='logo-img'></img>
          </NavImage>
          <NavIcon onClick={showDropDown} to='#'>
            {dropDown ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
          </NavIcon> */}

          <DropDownWrap>
            {/* <NavIcon to='#'>
            <AiIcons.AiOutlineClose />
          </NavIcon> */}

            {DropDownData.map((item, index) => {
              return <DropDownSubMenu item={item} key={index} />
            })}
          </DropDownWrap>

        </DropDownNav>
      </Nav>

    </>
  )
}

export default DropDown