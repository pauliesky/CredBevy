import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import logoImg from '../Home/Images/Credbevy Logo.svg'
// import { device } from './Device';
import { DropDownData } from './DropDownData'
import DropDownSubMenu from './DropDownSubMenu';
import Button from './Utilities/Button';


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





const NavIcon2 = styled(Link)`
  font-size: 1rem;
  height: 2rem;

display:flex;
flex-direction:center;
align-items:center;
`;

const NavLogo = styled(Link)`
width: 2rem;
height: 2rem;

`;


const NavItems = styled.div`

display:flex;
flex-direction:row;
justify-content:center;
gap:14.6rem;
margin-bottom:3rem;

`


const DropDownNav = styled.nav`
background: white;
padding-top:1rem;
color: black; 
width: 377px;
height:417px;
justify-content:center;
position: absolute;
// left:0px;
top: ${({ dropDown }) => (dropDown ? '0rem' : '-1000%')};
transition:1ms;
z-index:10;
// box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
border-radius: 8px;

`
const NavButton = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
margin-top:3rem;
// background:white;

`
const DropDownWrap = styled.div`
// width:100%;
background:white;
display:flex;
flex-direction:column;
// gap:.5rem;


`

function DropDown() {

  const sizeStyle = {
    width: '345px',
  }

  const [dropDown, setDropDown] = useState(false)

  const showDropDown = () => setDropDown(!dropDown)


  return (
    <>
      <Nav>
        <NavImage>
          <img className='mobile_navbar__image' src={logoImg} alt='logo-img'></img>
        </NavImage>
        <NavIcon onClick={showDropDown} to='#'>
          {dropDown ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
        </NavIcon>
        <DropDownNav dropDown={dropDown}>
          <NavItems>

            <NavLogo>
              <img className='mobile_navbar__image' src={logoImg} alt='logo-img'></img>
            </NavLogo>
            <NavIcon2 onClick={showDropDown} to='#'>
              {dropDown ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
            </NavIcon2>

          </NavItems>
          <DropDownWrap>
            {DropDownData.map((item, index) => {
              return <DropDownSubMenu item={item} key={index} />
            })}
          </DropDownWrap>
          <NavButton>
            <Button
              className='button__container'
              buttonStyle={sizeStyle}
              label={'Get Started'} />
          </NavButton>
        </DropDownNav>



      </Nav>

    </>
  )
}

export default DropDown