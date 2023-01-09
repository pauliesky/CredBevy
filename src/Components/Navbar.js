import React from 'react'
import './Navbar.css'
import { FaAngleDown } from "react-icons/fa";
import logoImg from '../Images/B.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='logo'><img src={logoImg} alt='logo-img'></img></div>
      <ul className='nav-links'>
        <li>Products<FaAngleDown className='arrow-down'/></li>
        <li>Features<FaAngleDown className='arrow-down' /></li>
        <li>Partners<FaAngleDown className='arrow-down' /></li>
        <li>Company<FaAngleDown className='arrow-down' /></li>
      </ul>
      <div className='login'>Get Started</div>
    </nav>

  )
}

export default Navbar