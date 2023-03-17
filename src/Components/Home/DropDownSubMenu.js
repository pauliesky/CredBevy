import React, { useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const DropDownLink = styled(Link)`
display:flex;
flex-direction:row;

justify-content:center;
align-items:center;
text-decoration:none;
margin-bottom:1.5rem;
gap:13rem;
// width: 63px;
height: 21px;

font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 150%;

color: #333333;
&:hover {
  cursor:pointer;
}



`;

const SideBarLabel = styled.span`
height: 19px;

font-family: 'Manrope';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 117%;
/* identical to box height, or 19px */

padding-left:.5rem;
/* Primary Colour */

color: #8003CD;
`
const SideBarText = styled.div`
width: 261px;
height: 46px;
padding-left:.5rem;

/* SUBTITLE/SMALL/14PX */

font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
/* or 171% */

letter-spacing: -0.5px;

/* Gray / gray-7 */

color: #8C8C8C;
`

const DropdownTitle = styled.div`
width:3.5rem;
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 150%;
/* identical to box height, or 21px */

/* Text/#333333 */

color: #333333;

`

const DropdownLink = styled(Link)`
background:white;
height:90px;
display:flex;
flex-direction:column;
text-decoration:none;
color:white;
font-size:18px;
gap:.5rem;
border:none;
`



function DropDownSubMenu({ item }) {



  const [subnav, setSubNav] = useState(false)
  const showSubnav = () => setSubNav(!subnav)


  return (

    <>

      <DropDownLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          <DropdownTitle>  {item.title} </DropdownTitle>
        </div>

        <div>
          {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}

        </div>
      </DropDownLink>
      {subnav && item.subNav.map((item, index) => {

        return (

          <DropdownLink to={item.path} key={index}>
            <SideBarLabel>{item.title}</SideBarLabel>
            <SideBarText> { item.details}</SideBarText>
          </DropdownLink>

        )
      })}
    </>
  )



}

export default DropDownSubMenu