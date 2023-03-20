import React, { useState } from 'react'
// import { IoMdHeartEmpty } from 'react-icons/io'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const DropDownLink = styled(Link)`
display:flex;
flex-direction:row;
background:white;
justify-content:center;
align-items:center;
text-decoration:none;
margin-bottom:1.1rem;
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
// height: 19px;
background:white;
font-family: 'Manrope';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 117%;
/* or 16px */

/* Grey 1 */

color: #8A8B9F;
padding-left:3rem;
border-radius: 0px 0px 8px 8px;
`


const DropdownTitle = styled.div`
width:3.5rem;
font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 150%;
color: #333333;
background:white;

`

const DropdownLink = styled(Link)`
background:white;
// height:2rem;
display:flex;
flex-direction:column;
text-decoration:none;
color:white;
font-size:18px;
margin-bottom:1rem;
// border:none;
border-radius: 0px 0px 8px 8px;


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
          </DropdownLink>
        )
      })}
    </>
  )



}

export default DropDownSubMenu